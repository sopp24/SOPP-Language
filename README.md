# Interprète

Traduction orale en temps réel, dans les deux sens, entre **français, anglais, espagnol, chinois mandarin, japonais et hindi**.

Une seule page web. Rien à installer, rien à compiler, aucun serveur. Elle tourne sur téléphone comme sur ordinateur, et une fois hébergée quelque part, le lien est à vous pour aussi longtemps que vous gardez le dépôt.

---

## 1. Ce qu'il faut pour que ça marche

| | Fonctionne | Ne fonctionne pas |
|---|---|---|
| **iPhone / iPad** | Safari | Chrome iOS (il n'a pas la reconnaissance vocale) |
| **Android** | Chrome, Edge | Firefox |
| **Windows / macOS / Linux** | Chrome, Edge | Firefox, Safari desktop (partiel) |

Il faut aussi une **connexion internet** : la reconnaissance vocale du navigateur et la traduction passent toutes les deux par le réseau.

Une seule chose à préparer : **les voix de synthèse** des langues que vous utilisez (voir §5). Sans elles, la traduction s'affiche mais ne se dit pas.

Pour la traduction elle-même, **rien à faire pour démarrer** : l'application se rabat sur un service gratuit qui ne demande ni compte ni clé. Le §3 explique comment obtenir mieux, gratuitement aussi.

---

## 2. Mettre le lien en ligne sur GitHub Pages

Vous n'avez besoin ni de git, ni de ligne de commande. Tout se fait depuis le site.

### Étape par étape

1. Créez un compte sur **github.com** si vous n'en avez pas.
2. En haut à droite, **+** puis **New repository**.
3. Nommez-le, par exemple `interprete`. Laissez-le sur **Public** — l'hébergement de pages depuis un dépôt privé demande un compte payant. Le dépôt ne contient aucune donnée personnelle et jamais votre clé API : elle ne sera tapée que dans le navigateur, au moment de l'usage.
4. Cochez rien d'autre, cliquez **Create repository**.
5. Sur la page du dépôt vide, cliquez **uploading an existing file**.
6. Glissez-y **tous les fichiers de ce dossier** : `index.html`, `manifest.webmanifest`, `sw.js`, `robots.txt`, `icon-192.png`, `icon-512.png`, `icon-maskable.png`, `apple-touch-icon.png`.
7. Tout en bas, cliquez **Commit changes**.
8. Onglet **Settings** du dépôt, puis **Pages** dans la colonne de gauche.
9. Sous *Build and deployment* → *Source*, choisissez **Deploy from a branch**. Juste en dessous : branche **main**, dossier **/ (root)**. Cliquez **Save**.
10. Attendez une à deux minutes, rechargez la page. GitHub affiche votre adresse :

```
https://VOTRE-NOM.github.io/interprete/
```

C'est ce lien que vous ouvrez sur vos téléphones. Il ne changera plus.

### Le fichier `.nojekyll`

Il est fourni mais facultatif ici. Si votre système d'exploitation refuse de vous laisser glisser un fichier dont le nom commence par un point, ignorez-le : rien ne cassera. Si vous y tenez, dans le dépôt : **Add file → Create new file**, tapez `.nojekyll` comme nom, laissez vide, validez.

### Le mettre sur l'écran d'accueil

- **iPhone** : ouvrez le lien dans Safari → bouton Partager → *Sur l'écran d'accueil*.
- **Android** : ouvrez le lien dans Chrome → menu ⋮ → *Ajouter à l'écran d'accueil*.

Il s'ouvrira alors en plein écran, sans barre d'adresse, comme une application installée.

### Sur l'indexation par les moteurs de recherche

Trois protections sont déjà en place : une balise `noindex` dans la page, un `robots.txt` qui interdit tout, et le fait qu'aucun site ne pointe vers votre adresse. Les moteurs sérieux ne la référenceront pas.

Soyez lucide cependant : **une adresse non indexée n'est pas une adresse secrète**. Quiconque connaît le lien peut ouvrir la page. Ce n'est pas grave — la page ne contient aucune de vos données, et la clé API de chacun reste dans son propre navigateur.

### Autres hébergeurs, si GitHub ne vous convient pas

- **Netlify Drop** (`app.netlify.com/drop`) : vous glissez le dossier, vous obtenez une adresse aléatoire du type `https://mot-mot-123456.netlify.app`. Plus discret qu'une adresse `github.io` qui contient votre pseudo. Pas de compte obligatoire pour essayer.
- **Cloudflare Pages** : même principe, gratuit, avec la possibilité de mettre votre propre nom de domaine.

Dans tous les cas, ce sont les mêmes fichiers, sans rien modifier.

---

## 3. Choisir un traducteur

*Vous voulez qu'une clé Anthropic marche automatiquement sur tout appareil, sans jamais la saisir ? C'est la section [3bis](#3bis-une-clé-anthropic-partagée-sur-tous-les-appareils) juste après celle-ci — lisez d'abord ce qui suit, elle explique pourquoi on ne met jamais une clé payante directement dans la page.*

L'application sait parler à cinq moteurs différents. **Elle fonctionne sans que vous configuriez quoi que ce soit** : à défaut de mieux, elle utilise MyMemory, qui ne demande ni compte ni clé. Mais il y a nettement mieux, et gratuit aussi.

| Moteur | Ce qu'il faut | Où ça marche | Qualité | Glossaire, jargon, résumé |
|---|---|---|---|---|
| **MyMemory** | rien du tout | partout | correcte | non |
| **Traducteur du navigateur** | rien du tout | Chrome et Edge, **ordinateur seulement** | bonne | non |
| **Google Gemini** | une clé gratuite | partout | excellente | **oui** |
| **Claude** | rien, si vous ouvrez le lien claude.ai | partout | excellente | **oui** |
| **Anthropic** | une clé payante | partout | excellente | **oui** |

Le choix se fait dans **Réglages → Traducteur**. En mode *Automatique*, l'application prend le meilleur moteur disponible. Le **secours automatique**, activé par défaut, bascule seul sur un autre moteur si le principal sature, refuse ou ne gère pas la paire de langues. Le nom du moteur utilisé s'affiche à côté de chaque phrase traduite.

### MyMemory — zéro configuration

C'est ce qui tourne si vous ne faites rien. Aucun compte, aucune clé, aucune inscription. Ça marche sur iPhone comme sur Android.

Les limites, à connaître avant de compter dessus en réunion :

- **5 000 caractères par jour** sans rien. C'est peu : une conversation nourrie les épuise en vingt minutes environ.
- **50 000 caractères par jour** si vous entrez une adresse e-mail dans les réglages. Rien à valider, aucun courrier reçu, l'adresse sert de compteur. C'est le geste le plus rentable de toute l'application : dix secondes pour multiplier la limite par dix.
- La qualité vient d'une mémoire de traduction communautaire complétée par de la traduction automatique. Correcte sur des phrases courantes, irrégulière sur du jargon.
- Le quota est compté par adresse IP. Sur un réseau d'entreprise partagé, vous consommez le même compteur que vos collègues.

### Traducteur intégré au navigateur — gratuit, hors ligne, privé

Chrome et Edge embarquent depuis peu un moteur de traduction qui tourne **sur la machine elle-même**. Rien ne part sur internet, il n'y a aucune limite d'usage, et une fois le pack de langue téléchargé il fonctionne sans connexion.

C'est de loin la meilleure option quand vous êtes en réunion avec un ordinateur portable — et la seule qui garde le texte entièrement sur votre machine.

Deux restrictions fermes :

- **Ordinateur uniquement.** Chrome sur Android et iPhone n'a pas cette fonction, et ce n'est pas prévu à court terme. Pour un usage téléphone, passez au moteur suivant.
- Certaines paires de langues sans anglais ne sont pas gérées. Le bouton *Vérifier et télécharger les langues* dans les réglages vous dit précisément où vous en êtes pour votre paire, et lance le téléchargement du pack. Une paire non gérée bascule automatiquement sur un autre moteur.

À noter : dans la version ouverte depuis un lien claude.ai, ce moteur n'est pas accessible, parce que la page y tourne dans un cadre isolé. Il ne fonctionne que sur votre propre hébergement.

### Google Gemini — la meilleure option gratuite

C'est le bon compromis : gratuit, sans carte bancaire, ça marche sur téléphone, et comme c'est un vrai modèle de langage, **le glossaire imposé, le domaine technique, le contexte du rendez-vous et le mode conférence fonctionnent**. Les moteurs de traduction simples en sont incapables.

1. Allez sur **aistudio.google.com**, connectez-vous avec un compte Google.
2. **Get API key → Create API key**. Aucune carte bancaire, aucun numéro de téléphone.
3. Dans l'appli : Réglages → Traducteur → collez la clé. La liste des modèles se remplit toute seule et l'appli choisit le plus rapide. **Tester la connexion** confirme que tout va bien.

Les limites de l'offre gratuite :

- Environ **10 à 15 requêtes par minute** et quelques centaines par jour selon le modèle. Une phrase traduite = une requête. Dans un échange rapide, on peut toucher le plafond de la minute ; le secours automatique prend alors le relais le temps que ça se débloque. Les modèles *Flash-Lite* ont des plafonds plus généreux, c'est pourquoi l'appli les préfère.
- Google publie ces limites dans votre tableau de bord AI Studio plutôt que dans sa documentation, et les fait évoluer. L'appli interroge la liste des modèles à chaque fois, elle survivra donc aux renommages.
- **Point important** : Google indique que les contenus envoyés via l'offre gratuite peuvent servir à améliorer ses produits. C'est le prix du gratuit. Acceptable pour du tourisme, une conversation de famille ou une réunion sans enjeu. À proscrire pour du médical, du juridique, ou tout ce qui est couvert par un accord de confidentialité. Dans ces cas-là, prenez le traducteur du navigateur sur ordinateur, ou une clé payante.

### Anthropic — la clé payante

Même démarche, sur **console.anthropic.com → API keys**. Ce n'est pas nécessaire, mais c'est le meilleur en qualité de jargon technique, sans limite de débit gênante, et sans réutilisation de vos contenus.

Comptez environ **20 à 30 centimes** pour un rendez-vous d'une heure bien rempli avec le modèle Haiku, et environ 15 centimes de l'heure en mode conférence. Le modèle Sonnet est trois à quatre fois plus cher, et se justifie surtout quand le jargon est dense.

### Précautions sur les clés, quelle qu'elle soit

- Créez une clé **dédiée à cet usage**, pas celle qui vous sert ailleurs.
- Pour une clé payante, mettez un **plafond de dépense mensuel** dans la console. C'est votre vrai filet de sécurité.
- La clé est enregistrée dans le navigateur de l'appareil. Toute personne qui a l'appareil déverrouillé peut la lire. Si vous prêtez le téléphone, videz le champ.
- Si vous donnez le lien à quelqu'un d'autre, **il met sa propre clé**. Ne partagez jamais la vôtre.

### Que choisir, concrètement

- **Juste pour essayer, tout de suite** : ne touchez à rien, MyMemory fait le travail.
- **Usage régulier sur téléphone** : la clé Gemini gratuite. Deux minutes à obtenir, et c'est ce qui débloque le glossaire et le mode conférence.
- **Réunion sur ordinateur portable** : le traducteur du navigateur. Gratuit, hors ligne, et rien ne sort de la machine.
- **Sujet confidentiel** : traducteur du navigateur, ou clé payante. Jamais l'offre gratuite de Google.

## 3bis. Une clé Anthropic partagée, sur tous les appareils

Vous avez une clé Anthropic et vous voulez que **toute personne qui ouvre le lien** — vous sur votre téléphone, votre collègue sur le sien, un ordinateur au bureau — ait la traduction de haute qualité tout de suite, sans coller de clé nulle part. C'est possible, mais pas en mettant la clé directement dans la page.

### Pourquoi pas directement

Une page web, une fois ouverte, est **entièrement lisible** par la personne qui l'a ouverte : clic droit → Afficher le code source, ou l'onglet Réseau des outils de développement, montrent tout ce que la page envoie, y compris les en-têtes de ses requêtes. Il n'existe aucune manière d'écrire du code qui tourne dans un navigateur tout en cachant une valeur à ce navigateur — ce n'est pas une limite de cette application, c'est une limite de ce qu'est une page web.

Concrètement, si vous écriviez la clé dans `index.html` puis la publiiez sur GitHub Pages, dans un **dépôt public** : la clé se retrouverait en clair dans l'historique du dépôt, où des robots qui scrutent en continu les dépôts publics à la recherche de clés API l'auraient probablement trouvée et commencé à l'utiliser **en quelques minutes**, à vos frais. Même sur un hébergeur qui n'affiche rien publiquement, la page servie au navigateur contiendrait toujours la clé en clair — n'importe quel visiteur du lien la verrait.

### La solution : un tout petit serveur entre l'appli et Anthropic

La seule façon de garder une clé hors de portée du navigateur est qu'un **vrai serveur** s'interpose : le navigateur lui parle, lui ne connaît que ce serveur, et c'est ce serveur — pas le navigateur — qui connaît la clé et appelle Anthropic. GitHub Pages ne peut pas faire ça : c'est un hébergement purement statique, sans aucune exécution de code, donc structurellement incapable de garder quoi que ce soit secret.

On ajoute donc un second service, minuscule : un **relais Cloudflare Worker**. Gratuit, quelques minutes à mettre en place, aucune carte bancaire.

Ce que ça change concrètement pour vous : votre appli continue de vivre sur GitHub Pages exactement comme avant. Le relais est un service séparé, tout petit, dont le seul travail est de garder la clé et de transmettre. L'appli ne connaît que **l'adresse** de ce relais — une adresse n'est pas un secret au même titre qu'une clé payante : dans le pire des cas où quelqu'un la trouve, il peut faire traduire des phrases à vos frais, pas voler la clé elle-même, et le plafond de dépense mensuel (voir plus haut) borne les dégâts.

### Mettre en place le relais — dix minutes, sans ligne de commande

1. Allez sur **dash.cloudflare.com**, créez un compte gratuit.
2. Dans le menu de gauche, **Workers & Pages** → **Create application**.
3. Choisissez de partir d'un Worker basique (souvent proposé comme *"Hello World"*), donnez-lui un nom, par exemple `interprete-relais`, puis **Deploy**. Cloudflare le publie tout de suite avec un code d'exemple, sur une adresse du type `https://interprete-relais.votre-compte.workers.dev`. Notez cette adresse, c'est celle que l'appli utilisera.
4. Cliquez **Edit code** : un éditeur s'ouvre directement dans le navigateur, rien à installer.
5. Sélectionnez tout le code d'exemple, supprimez-le, et collez à la place le contenu du fichier **`cloudflare-relay/worker.js`** fourni avec cette application.
6. **Deploy** pour publier ce code.
7. Retournez sur la page du Worker, onglet **Settings** → **Variables and Secrets** → **Add**.
   - Type **Secret**, nom `ANTHROPIC_API_KEY`, valeur : votre clé `sk-ant-...`.
   - Si vous voulez un mot de passe supplémentaire (recommandé), ajoutez une seconde entrée, type **Secret**, nom `APP_SECRET`, valeur : une phrase que vous inventez, par exemple `bureau-lyon-92`.
8. **Deploy** pour appliquer ces réglages. C'est terminé côté Cloudflare.

### Brancher l'appli dessus

**Pour vous seul, tout de suite, sans republier :** ouvrez l'appli → Réglages → Traducteur → Anthropic → *Connexion* → **Relais partagé**. Collez l'adresse `https://interprete-relais.votre-compte.workers.dev`, et le mot de passe si vous en avez mis un. C'est tout, ça fonctionne immédiatement sur cet appareil.

**Pour que ce soit automatique sur tout appareil qui ouvre le lien**, sans que personne n'ait à toucher aux réglages : ouvrez votre copie de `index.html` dans un éditeur de texte, cherchez ce bloc tout en haut du fichier —

```js
const BUILT_IN_RELAY_URL = "";
const BUILT_IN_RELAY_SECRET = "";
```

— et remplissez les guillemets :

```js
const BUILT_IN_RELAY_URL = "https://interprete-relais.votre-compte.workers.dev";
const BUILT_IN_RELAY_SECRET = "bureau-lyon-92";
```

Republiez ce fichier sur GitHub (glissez-le à nouveau dans le dépôt, **Commit changes** écrase l'ancienne version). Désormais, quiconque ouvre votre lien a la traduction Anthropic active dès la première seconde, glossaire et mode conférence compris — sans rien coller nulle part. La clé, elle, n'a jamais quitté Cloudflare.

Une personne qui préfère utiliser sa propre clé, ou son propre relais, reste libre de le faire : Réglages → Traducteur → Anthropic → *Ma propre clé* prend le pas sur le réglage commun, sur son appareil uniquement.

### Ce que ce mot de passe protège, et ce qu'il ne protège pas

Soyons précis, parce que c'est le genre de détail qui mérite de l'être. Le mot de passe du relais (`APP_SECRET`) est lu par l'appli et envoyé à chaque requête — il est donc, lui aussi, visible par quiconque inspecte le code de **votre propre copie** de la page, exactement comme le serait n'importe quelle valeur écrite dans le fichier. Il n'arrête pas une personne déterminée qui irait jusqu'à lire le source de votre page.

Ce qu'il arrête, en pratique : les robots qui scrutent le web à la recherche d'adresses `workers.dev` ouvertes et les essaient au hasard, et un visiteur curieux mais pas malveillant. C'est une protection réelle contre l'abus non ciblé, pas un coffre-fort. Le vrai filet de sécurité, celui qui borne les dégâts quoi qu'il arrive, reste le **plafond de dépense mensuel** sur votre compte Anthropic — mettez-le, quelle que soit la solution choisie ici.

### Si vous préférez ne pas dépendre de Cloudflare

Le principe — un petit serveur qui garde la clé et que l'appli appelle à sa place — fonctionne identiquement avec des fonctions Vercel, des fonctions Netlify, ou tout hébergeur qui exécute du code à la demande. Le fichier `cloudflare-relay/worker.js` est volontairement écrit en JavaScript standard, sans rien de propre à Cloudflare dans sa logique : l'adapter demande de changer la manière dont `env.ANTHROPIC_API_KEY` est lue (une variable d'environnement classique partout) et la façon dont la fonction est déclarée, pas la logique elle-même.

## 4. Les trois modes

### Conversation — le téléphone entre vous deux

Deux gros boutons : *Interlocuteur* et *Moi*. Vous appuyez sur celui de la personne qui va parler. La traduction s'affiche en grand et se dit à voix haute, dans le haut-parleur.

Activez **Mains libres** : après chaque prise de parole, l'appli bascule seule sur l'autre canal. Vous ne touchez plus le téléphone de la réunion.

### Oreillette — un appareil chacun

C'est la réponse au problème des deux écouteurs. Un téléphone ne peut pas envoyer deux langues différentes vers deux oreillettes, mais **deux téléphones le peuvent** — et ils n'ont rien à se connecter.

- Sur **votre** téléphone, mode Oreillette, langues `EN → FR`. Un écouteur dans votre oreille. L'appli n'écoute que l'anglais et ne vous parle qu'en français. Ce que vous dites, vous, est ignoré.
- Sur **son** téléphone, vous lui envoyez le même lien. Elle le règle en `FR → EN`, met son propre écouteur. Son appli n'écoute que le français et ne lui parle qu'en anglais.

Chacun entend sa langue, discrètement, et personne n'a rien à appairer.

**Le point délicat, à savoir avant d'essayer :** si vous utilisez un casque Bluetooth avec micro, le navigateur prendra sans doute le micro du casque — donc votre bouche, pas celle d'en face. Utilisez plutôt un écouteur **sans micro**, ou des écouteurs filaires simples, pour que le téléphone continue d'écouter la pièce avec son propre micro.

### Conférence — des notes en puces

L'appli écoute en continu et écrit les idées clés sous forme de puces dans votre langue, toutes les 45 secondes par défaut. Pas de traduction dans l'oreille : on lit, ce qui fatigue infiniment moins qu'écouter une voix synthétique pendant deux heures.

Le bouton **Résumé complet** rédige à la fin une synthèse structurée : sujet, points clés, chiffres, décisions, questions ouvertes.

Ce mode demande un moteur capable de raisonner : **Claude ou Gemini**. MyMemory et le traducteur du navigateur ne savent que traduire phrase à phrase, ils ne peuvent pas synthétiser.

---

## 5. Installer les voix de synthèse manquantes

L'appli utilise les voix du système. Le chinois, le japonais et l'hindi ne sont presque jamais installés par défaut sur un appareil français. L'écran **Langues** vous dit lesquelles manquent.

**iPhone / iPad**
Réglages → Accessibilité → **Lire et énoncer** (ce menu s'appelait *Contenu énoncé* avant iOS 26) → **Voix** → choisissez la langue → touchez l'icône de nuage à côté d'une voix pour la télécharger. Prenez la version *Amélioré* ou *Premium* quand elle existe : la différence est nette. Comptez 100 à 400 Mo par voix, en wifi.

**Android**
Réglages → Accessibilité → **Synthèse vocale** (parfois Réglages → Système → Langues et saisie → Synthèse vocale) → roue dentée à côté du moteur → **Installer les données vocales** → choisissez la langue. Quand plusieurs voix sont proposées, prenez celle marquée *neural* ou *naturelle*. Sur Samsung, un second moteur maison est disponible dans le même écran.

**Windows**
Paramètres → Heure et langue → Langue et région → **Ajouter une langue**, en cochant la synthèse vocale dans les options. Les voix neuronales se trouvent aussi dans Paramètres → Accessibilité → Narrateur → *Ajouter des voix naturelles*.

**macOS**
Réglages Système → Accessibilité → Contenu énoncé → Voix système → **Gérer les voix**.

Une fois installée, la voix est disponible hors ligne et l'appli la détecte au rechargement. Vous pouvez choisir précisément laquelle utiliser dans **Réglages → Voix et intonation**.

---

## 6. Le jargon

Ces trois réglages demandent **Claude ou Gemini**. Avec MyMemory ou le traducteur du navigateur, ils sont sans effet — l'appli vous le signale dans les réglages.

Deux leviers, dans **Réglages**, et le second compte davantage que le premier.

**Le domaine technique** applique une discipline terminologique générale : médical, juridique, aéronautique et spatial, industrie, informatique, finance, commerce, BTP, recherche. Le traducteur cesse alors de choisir le mot courant quand le mot de métier existe.

**Le glossaire imposé** est votre vrai outil de précision. Une paire par ligne :

```
bleed valve = vanne de prélèvement
stakeholder = partie prenante
notice period = préavis
```

Ces équivalences sont appliquées mot pour mot, dans les deux sens, et priment sur tout le reste. Trois lignes bien choisies avant un rendez-vous valent mieux qu'un domaine générique.

**Le contexte du rendez-vous**, juste au-dessus, est le réglage le plus rentable de toute l'application. Deux phrases suffisent :

> Réunion de maintenance sur un Airbus A320, on parle du circuit hydraulique vert. Mon interlocuteur est le chef d'équipe piste.

Cela lève à lui seul la majorité des ambiguïtés.

---

## 7. Le bruit ambiant

**Réglages → Micro et bruit ambiant → Filtre voix proche.**

L'application ouvre une analyse du son en parallèle, mesure en continu le niveau de fond de la pièce, et **écarte les phrases prononcées trop loin ou trop bas** par rapport à ce fond. Les conversations voisines, dans un marché ou un hall de conférence, passent rarement le seuil. Le curseur de sensibilité règle la marge, et la barre sous le texte en cours vous montre en direct le niveau capté et le seuil : c'est le moyen le plus simple de le calibrer.

Le bouton **Capturer** mémorise en trois secondes la hauteur de voix de la personne en face. L'appli rejette ensuite ce qui s'en écarte trop. Utile quand une voix grave et une voix aiguë se croisent à portée de micro, inutile entre deux voix proches.

Deux avertissements honnêtes :

- Ce n'est **pas** du filtrage directionnel. Un navigateur ne donne pas accès aux micros individuels d'un téléphone ; on ne peut donc pas viser une direction depuis une page web. Ce que fait réellement l'appli, c'est écarter le lointain et le faible — ce qui, en pratique, règle la plus grande partie du problème. Le vrai traitement directionnel, lui, est déjà appliqué par le système d'exploitation en amont, et l'appli demande explicitement qu'il soit actif.
- Le filtre a besoin d'un **second accès au micro**, en plus de celui de la reconnaissance vocale. Sur iPhone, les deux cohabitent mal selon les versions. Si les phrases cessent de remonter, désactivez le filtre : c'est le premier réflexe.

---

## 8. L'intonation

**Réglages → Voix et intonation → Refléter l'intonation.**

Pendant que la personne parle, l'appli mesure trois choses sur sa voix : le **débit** (caractères par seconde rapportés au rythme normal de sa langue), l'**amplitude mélodique** (l'écart entre ses notes hautes et basses, ce qui distingue une voix monocorde d'une voix expressive), et l'**énergie** par rapport au fond sonore. Elle reporte ces trois mesures sur la voix de synthèse : débit, hauteur, volume. Le traducteur, de son côté, reçoit la consigne de préserver le registre et la ponctuation finale — un point d'interrogation ou d'exclamation est ce qui porte l'intonation quand un moteur vocal lit un texte.

Résultat concret : une question sonne comme une question, une phrase lancée vite reste vive, une remarque appuyée garde son poids.

Le curseur d'intensité dose l'effet. À 100 %, c'est expressif mais parfois caricatural ; **50 % est le bon réglage** dans la plupart des cas.

Ce que ça ne fait pas, et ne peut pas faire depuis un navigateur : **reproduire le timbre de la personne**. Sa voix reste celle du système, pas la sienne. Cloner une voix demande un service de synthèse dédié, payant, avec une latence qui rend l'exercice difficile en temps réel. Si vous voulez aller par là un jour, le point d'accroche dans le code est la fonction `drainSpeech()` : c'est le seul endroit où le texte devient du son.

---

## 9. Dépannage

| Symptôme | Cause la plus fréquente |
|---|---|
| Les boutons de canal sont grisés | Navigateur sans reconnaissance vocale. Passez à Chrome, ou Safari sur iPhone. |
| « Micro refusé » | Autorisez le micro pour ce site dans les réglages du navigateur, puis rechargez. |
| Le texte s'affiche mais rien ne se dit | Voix manquante pour cette langue (§5), ou volume média coupé. Sur iPhone, vérifiez aussi le petit interrupteur silencieux. |
| Plus rien ne remonte après quelques minutes | Le filtre voix proche entre en conflit avec le micro. Désactivez-le. |
| « Clé refusée » | Clé mal collée, ou crédit épuisé. Vérifiez avec *Tester la connexion*. |
| « Quota gratuit épuisé » | Limite MyMemory du jour atteinte. Ajoutez une adresse e-mail pour passer à 50 000 caractères, ou mettez une clé Gemini gratuite. |
| « Limite atteinte » | Trop d'appels rapprochés sur l'offre gratuite Gemini. Laissez passer une minute, activez le secours automatique, ou augmentez l'intervalle des puces. |
| « Paire de langues non gérée » | Le traducteur du navigateur ne couvre pas cette combinaison. Le secours automatique prend le relais. |
| Le glossaire semble ignoré | Vous êtes sur un moteur de traduction simple. Réglages → Traducteur, la ligne sous le choix du moteur vous le dit. |
| « relais injoignable » ou « mot de passe du relais incorrect » | Vérifiez l'adresse du relais (elle doit finir en `.workers.dev` ou votre domaine), et que `APP_SECRET` correspond bien des deux côtés — casse comprise. |
| L'appli se traduit elle-même | Le micro entend le haut-parleur. Baissez le volume, ou passez en mode Oreillette. |
| Rien ne marche hors ligne | C'est normal. La reconnaissance vocale et la traduction exigent le réseau ; seul l'affichage de l'appli est mis en cache. |

---

## 10. Vie privée

- Les paroles sont transcrites par le **service de reconnaissance vocale du navigateur** (Google pour Chrome, Apple pour Safari) : l'audio transite par leurs serveurs. C'est une contrainte du navigateur, pas un choix de cette application.
- Le texte transcrit part ensuite **au moteur de traduction que vous avez choisi**, et à lui seul :
  - *Traducteur du navigateur* : le texte ne quitte pas l'appareil. C'est la seule option réellement privée de bout en bout côté traduction.
  - *MyMemory* : le texte part chez `api.mymemory.translated.net`. Le service alimente une mémoire de traduction communautaire — considérez que ce que vous envoyez peut y être conservé.
  - *Gemini* : le texte part chez Google, qui indique pouvoir s'en servir pour améliorer ses produits sur l'offre gratuite.
  - *Anthropic* : le texte part chez Anthropic, sans réutilisation pour l'entraînement.
- **Rien n'est envoyé ailleurs.** Aucune analyse d'audience, aucun traceur, aucun serveur intermédiaire. La page n'appelle que le moteur choisi et Google Fonts.
- Les transcriptions ne quittent jamais l'appareil, et disparaissent quand vous fermez l'onglet, sauf si vous les enregistrez vous-même. Vos réglages, glossaires et clé restent dans le stockage local du navigateur.

Dans un cadre professionnel sensible — santé, défense, secret des affaires — vérifiez que ce trajet est compatible avec vos obligations avant d'utiliser l'outil en réunion réelle.

---

## 11. Fichiers du dépôt

```
index.html                      toute l'application : structure, styles, logique
manifest.webmanifest            permet l'installation sur l'écran d'accueil
sw.js                           met l'interface en cache pour un démarrage instantané
robots.txt                      interdit l'indexation
icon-*.png                      icônes de l'application
.nojekyll                       facultatif, désactive le traitement Jekyll de GitHub
cloudflare-relay/worker.js      facultatif — le relais qui garde une clé Anthropic partagée hors de la page, voir §3bis
```

Tout tient dans `index.html`. Vous pouvez le modifier directement : il n'y a ni dépendance, ni étape de compilation. Le dossier `cloudflare-relay/` ne va pas sur GitHub Pages — il se colle dans l'éditeur Cloudflare, comme expliqué au §3bis. Ne le publiez pas comme fichier statique : ce n'est pas nécessaire et il n'a rien à y faire.
