const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS, GET",
  "Access-Control-Allow-Headers": "Content-Type, X-App-Secret",
  "Access-Control-Expose-Headers": "anthropic-request-id, retry-after",
  "Access-Control-Max-Age": "86400",
  "Cache-Control": "no-store"
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json; charset=utf-8" }
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS_HEADERS });
    if (request.method === "GET" && url.pathname === "/health") {
      return new Response("SOPP Language relay is running.", {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "text/plain; charset=utf-8" }
      });
    }
    if (request.method !== "POST") return json({ error: { message: "Method not allowed." } }, 405);

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return json({ error: { message: "Content-Type must be application/json." } }, 415);
    }
    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > 4 * 1024 * 1024) return json({ error: { message: "Request body is too large." } }, 413);
    if (!env.ANTHROPIC_API_KEY) return json({ error: { message: "The relay is missing ANTHROPIC_API_KEY." } }, 503);
    if (env.APP_SECRET && request.headers.get("x-app-secret") !== env.APP_SECRET) {
      return json({ error: { message: "Invalid relay secret." } }, 401);
    }

    let input;
    try { input = await request.json(); }
    catch { return json({ error: { message: "Invalid JSON request body." } }, 400); }
    if (!input || typeof input.model !== "string" || !input.model.startsWith("claude-")) {
      return json({ error: { message: "A valid Claude model is required." } }, 400);
    }
    if (!Array.isArray(input.messages) || input.messages.length < 1 || input.messages.length > 100) {
      return json({ error: { message: "A valid messages array is required." } }, 400);
    }
    const maxTokens = Number(input.max_tokens || 900);
    if (!Number.isFinite(maxTokens) || maxTokens < 1 || maxTokens > 8192) {
      return json({ error: { message: "max_tokens must be between 1 and 8192." } }, 400);
    }

    const payload = {
      model: input.model,
      max_tokens: Math.floor(maxTokens),
      stream: input.stream === true,
      messages: input.messages
    };
    if (typeof input.system === "string" || Array.isArray(input.system)) payload.system = input.system;

    let upstream;
    try {
      upstream = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify(payload)
      });
    } catch {
      return json({ error: { message: "Could not reach Anthropic." } }, 502);
    }

    const headers = new Headers(CORS_HEADERS);
    for (const name of [
      "content-type",
      "anthropic-request-id",
      "retry-after",
      "anthropic-ratelimit-requests-limit",
      "anthropic-ratelimit-requests-remaining",
      "anthropic-ratelimit-tokens-limit",
      "anthropic-ratelimit-tokens-remaining"
    ]) {
      const value = upstream.headers.get(name);
      if (value) headers.set(name, value);
    }
    return new Response(upstream.body, { status: upstream.status, headers });
  }
};
