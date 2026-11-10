# TOVPAY - Site vitrine

Site vitrine de TOVPAY, filiale de GROUPE TOV, qui prépare un service d'avance sur salaire pour les agents publics du Bénin et du Togo. Le service n'est pas encore ouvert : le site le présente au futur, sans partenaire nommé ni chiffre d'activité.

## Stack technique

- **React 19** + **TypeScript**
- **Vite** pour le build et le dev server
- **React Router** pour la navigation
- **Tailwind CSS v4** (config CSS-first via `@theme`, pas de `tailwind.config.js`) - palette de marque navy/teal, typographie Inter
- **Framer Motion** pour les animations : transitions entre pages, apparitions au défilement, en-têtes, compteurs, barre de lecture, point de la page active ; les survols, le menu mobile et la FAQ sont en transitions CSS
- Système multilingue FR/EN maison (`src/i18n/`) via Context + dictionnaires par page

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement avec hot-reload |
| `npm run build` | Vérifie les types puis génère le build de production dans `dist/` (une page HTML par adresse, voir « Référencement ») |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Lance ESLint sur le projet |
| `npm run indexnow` | Signale les pages aux moteurs IndexNow (voir ci-dessous) |

## Référencement

Le site est une application React : sans traitement particulier, toutes les adresses renverraient le même HTML, avec le titre, la description et l'adresse canonique de l'accueil. Or les robots qui n'exécutent pas JavaScript (une partie des moteurs IndexNow) et les aperçus de liens (WhatsApp, Facebook, LinkedIn) ne lisent que ce HTML.

- `src/lib/indexablePages.ts` liste les pages indexables. Leurs titres et descriptions viennent des dictionnaires (`meta` de chaque page, en français).
- À la compilation, un plugin de `vite.config.ts` écrit une page HTML par adresse (`dist/faq/index.html`...), copie de `index.html` avec les balises de la page : `<title>`, description, canonique, `og:title`, `og:description`, `og:url`, `twitter:title` et `twitter:description`. Il y ajoute le préchargement de la photo d'en-tête de la page (voir « Images »).
- `vercel.json` sert chacun de ces fichiers à l'adresse de sa page (`/faq` vers `/faq/index.html`). Ces réécritures sont placées avant la réécriture générale vers `index.html`.
- React met ensuite ces balises à jour dans la langue du visiteur (`useDocumentMeta`), sans en ajouter de nouvelles.
- **Ajouter ou retirer une page** : modifier ensemble `App.tsx`, `src/lib/indexablePages.ts`, `public/sitemap.xml` et les réécritures de `vercel.json`. La compilation échoue, avec un message explicite, si les trois dernières listes divergent.
- Longueurs visées : titre complet (avec « | TOVPAY ») de moins de 600 px environ dans les résultats Google, description de 160 caractères au plus.
- Données structurées (`index.html`) : `Organization` (et non `FinancialService`, le service n'étant pas ouvert) et `WebSite`, qui donne à Google le nom du site affiché au-dessus des résultats.

## Images

Les visiteurs sont surtout sur mobile, souvent avec un réseau lent : les photos sont servies au plus juste.

- **Sources et variantes** : les photos sources sont dans `public/images/` (WebP). Le site affiche leurs variantes de `public/images/variantes/`, écrites par `python scripts/images.py` (Python 3 et Pillow). Le script produit :
  - une variante par largeur utile (480 à 1920 px), en WebP qualité 80, identique à l'œil et environ deux fois plus légère que la source ;
  - un recadrage vertical du hero de l'accueil pour les écrans en portrait ;
  - le logo allégé `public/brand/tovpay-logo-nav.webp`, moitié exacte du logo source (mêmes proportions) ;
  - les dimensions de chaque source et la liste de ses largeurs, dans `src/lib/imageVariants.ts`.
- **Composant `Photo`** : le navigateur choisit la plus petite variante suffisante (`srcset` et `sizes`), et les photos hors écran attendent d'en approcher. Une photo qui arrive après l'affichage de la page apparaît en fondu, sur l'opacité seulement, sans fondu si elle est en cache ou si « réduire les animations » est activé.
  - `sizes` indique la largeur réellement affichée. Avec `object-cover`, dans un cadre plus étroit que la photo, la photo déborde du cadre : sa largeur affichée vaut la hauteur du cadre multipliée par les proportions de la photo.
  - `Photo` impose les proportions de la photo source. Les variantes, de hauteur arrondie au pixel, en diffèrent d'une fraction de pixel ; la mise en page reste donc identique au pixel près, et la place de la photo est réservée avant son arrivée.
- **Photo d'en-tête** : la compilation ajoute son préchargement dans le HTML de chaque page (`heroPreloads`, `src/lib/images.ts`). Elle se télécharge ainsi en parallèle des scripts, au lieu d'attendre React et le code de la page.
  - Celle d'une autre page se télécharge dès qu'un lien vers elle est survolé, touché ou atteint au clavier (`src/lib/prefetchImages.ts`). Rien n'est téléchargé à l'avance sans ce signal : sur forfait mobile, les visiteurs ne paient pas les photos des pages qu'ils ne visitent pas.
- **Cache** (`vercel.json`) :
  - fichiers de `/assets/` (noms avec empreinte) : gardés un an par les navigateurs ;
  - images et logo : gardés 30 jours, puis servis depuis le cache pendant leur revérification.
  - **Une photo remplacée doit changer de nom** : sinon, les visiteurs récents gardent l'ancienne jusqu'à 30 jours.
- **Ajouter une photo** :
  1. la déposer dans `public/images/` (WebP, 1920 px de large au plus) ;
  2. lancer `python scripts/images.py` ;
  3. l'ajouter à `IMAGES` et l'afficher avec `<Photo src={IMAGES.x} sizes="..." />`. Pour une photo d'en-tête, l'ajouter aussi à `PAGE_HEROES`, à la même adresse que la page.

  La compilation échoue si une variante annoncée manque.

## Indexation (IndexNow)

Le site implémente le protocole [IndexNow](https://www.indexnow.org/documentation), qui notifie Bing, Yandex, Naver, Seznam et Yep quand une page change. Une soumission à `api.indexnow.org` est partagée entre tous les moteurs participants. Google n'utilise pas IndexNow : pour Google, le sitemap est déclaré dans `robots.txt` et dans la Search Console.

- Clé : `public/3ef77f3c7e76abf39f2868b62b9fd819.txt`, servie à la racine du site (ne pas renommer ni modifier sans mettre à jour `scripts/indexnow.mjs`).
- Après un déploiement en production qui modifie du contenu :
  1. mettre à jour `<lastmod>` des pages concernées dans `public/sitemap.xml` (à faire avant le déploiement, le sitemap est publié avec le site) ;
  2. lancer `npm run indexnow -- faq contact` pour les seules pages modifiées (chemins sans `/` initial, sinon Git Bash les convertit en chemins Windows), ou `npm run indexnow` pour tout le sitemap après une refonte ;
  3. ajouter `--redirections` quand des adresses ont été redirigées : le script ajoute alors les sources des redirections de `vercel.json`. La FAQ IndexNow demande de soumettre aussi les adresses redirigées ou supprimées ;
  4. `--dry-run` fait les vérifications et affiche la requête sans l'envoyer.
- Avant tout envoi, le script vérifie en ligne que :
  - la clé est publiée ;
  - chaque page répond 200 et déclare sa propre adresse canonique ;
  - chaque ancienne adresse redirige vers sa nouvelle page.

  Si une vérification échoue (version pas encore déployée, par exemple), rien n'est envoyé.
- Ne pas resoumettre des pages inchangées ni une même adresse plusieurs fois par jour. En cas de réponse 429, attendre au moins 10 minutes (le script affiche l'en-tête `Retry-After` s'il est fourni).
- Le sitemap reste indispensable : IndexNow sert aux notifications rapides, le sitemap à l'inventaire complet.

## Structure du projet

```
src/
├── components/
│   ├── Nav.tsx              # Navigation (liens complets à partir de 1024 px, menu burger en dessous)
│   ├── Footer.tsx           # Pied de page (liens légaux, textes de l'application)
│   ├── PageHero.tsx         # En-tête des pages secondaires (photo sous voile bleu nuit)
│   ├── FinalCta.tsx         # Bande d'appel à l'action de fin de page (photo sous voile)
│   ├── Photo.tsx            # Photo en plusieurs largeurs (srcset), chargement différé, fondu à l'arrivée
│   ├── DocumentLayout.tsx   # Mise en page des pages juridiques
│   ├── DocumentSections.tsx # Blocs de contenu de ces pages (paragraphes, listes, tableaux, liens)
│   ├── RichText.tsx         # Texte dont les adresses e-mail deviennent des liens
│   ├── SmartLink.tsx        # Lien interne, externe (nouvel onglet, signalé aux lecteurs d'écran) ou mailto
│   ├── Icon.tsx             # Icônes SVG ligne
│   └── Avatar.tsx           # Monogrammes de l'équipe
├── pages/                   # Une page par route
├── i18n/
│   ├── language.ts          # Contexte et hooks useLanguage / useT
│   ├── LanguageContext.tsx  # LanguageProvider
│   └── dictionaries/        # Textes FR/EN par page (en: typeof fr) ; common.ts pour les textes partagés
├── lib/
│   ├── site.ts              # Coordonnées, liens des textes de l'application, frais proposés, titre et canonique
│   ├── indexablePages.ts    # Pages indexables et leurs balises (lu à la compilation, voir « Référencement »)
│   ├── motion.ts            # Animations communes : courbes, fondus, apparitions au défilement (inView, reveal)
│   ├── images.ts            # Photos du site (variantes de public/images/), photos d'en-tête et leurs préchargements
│   ├── imageVariants.ts     # Largeurs disponibles de chaque photo (écrit par scripts/images.py)
│   └── prefetchImages.ts    # Téléchargement anticipé des photos d'en-tête des autres pages
├── hooks/
│   ├── useDocumentMeta.ts   # Met à jour titre, description, Open Graph et canonique dans la langue du visiteur
│   └── useMediaQuery.ts     # Suit une requête média (photo du hero de l'accueil en portrait ou en paysage)
├── index.css                # @theme Tailwind (palette, fonts) + @layer components
└── App.tsx                  # Routes et redirections des anciennes pages

middleware.ts                # Détection automatique de la langue par pays (Vercel Routing Middleware)
vercel.json                  # Redirections permanentes des anciennes pages, page HTML de chaque adresse, réécriture SPA, durées de cache
vite.config.ts               # Build + plugin qui écrit une page HTML par adresse indexable (balises, préchargement de la photo d'en-tête)
scripts/indexnow.mjs         # Soumission IndexNow, avec vérifications en ligne avant envoi
scripts/images.py            # Variantes légères des photos et du logo (voir « Images »)

public/
├── images/                            # Photos sources libres de droits (Unsplash), en WebP
│   └── variantes/                     # Variantes affichées par le site (écrites par scripts/images.py)
└── brand/
    ├── tovpay-logo.png                # Logo complet source (og:image, données structurées)
    ├── tovpay-logo-transparent.png    # Logo transparent source
    └── tovpay-logo-nav.webp           # Logo allégé affiché (nav, footer)
```

## Système de design

Toute la palette est centralisée dans `src/index.css` via la directive `@theme` de Tailwind v4 :
- Couleurs : `navy`, `navy-deep`, `teal`, `teal-dk`, `teal-ink` (texte vert sur fond clair), `gold`, `gold-ink`, `g50`→`g900`
- Fonts : `font-sans` et `font-display` (Inter)
- Photos : agents publics au travail (enseignement, santé, administration), sans uniforme, insigne, drapeau ni bâtiment officiel. Aucune ne représente un client réel ni l'équipe. Liste et source de chaque photo dans `src/lib/images.ts`.

Classes composants réutilisables (`@layer components`) : `.section-tag`, `.section-title`, `.section-sub`, `.btn-primary`, `.btn-outline-light`, `.text-link`, `.footer-link`. Les utilitaires Tailwind priment sur ces classes : sur fond sombre, `section-title text-white` ; bouton bleu nuit, `btn-primary bg-navy hover:bg-navy-deep`.

## Pages

| Route | Description |
|---|---|
| `/` | Accueil : point d'étape, engagements, parcours en 4 étapes, prévention des arnaques, partenaires recherchés |
| `/avance-sur-salaire` | Principe, conditions, documents, parcours en 7 étapes, frais proposés, remboursement |
| `/partners` | Espace partenaires : statut des discussions, besoins, plateforme, principes |
| `/about` | Mission, valeurs, histoire, équipe |
| `/faq` | Questions fréquentes, dont l'ancien service |
| `/contact` | Formulaire (`?sujet=lancement` ou `?sujet=partenariat` présélectionne le sujet) et coordonnées |
| `/mentions-legales` | Éditeur, immatriculations, hébergeur |
| `/confidentialite` | Données du site : formulaire, WhatsApp, cookie de langue, droits |

Anciennes pages redirigées (308) : `/nano-credit` et `/services` vers `/avance-sur-salaire`, `/agents` vers `/faq`.

## Notes pour la suite

- Le pourcentage des frais proposé (`PROPOSED_FEE_PERCENT` dans `src/lib/site.ts`) est une condition proposée : toujours l'afficher avec la mention « susceptibles d'évoluer avant le lancement ».
- Les textes de l'application (conditions d'utilisation, politique de confidentialité) ne sont pas recopiés : le site renvoie vers les pages publiées par le serveur de l'application (`src/lib/site.ts`).
- Les avatars de l'équipe sont des monogrammes (`Avatar.tsx`).
- Animations : le réglage système « réduire les animations » est respecté (`MotionConfig reducedMotion="user"` dans `App.tsx`, règle CSS dans `index.css`). Pour couper un débordement horizontal, utiliser `overflow-x-clip` et non `overflow-x-hidden` : ce dernier crée un conteneur de défilement qui bloque l'effacement du hero au défilement et la colonne collante de la FAQ.

