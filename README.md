# TOVPAY - Site vitrine

Site vitrine de TOVPAY, plateforme technologique de distribution de nano-crédit et micro-crédit mobile pour la zone UEMOA, filiale de GROUPE TOV.

## Stack technique

- **React 19** + **TypeScript**
- **Vite** pour le build et le dev server
- **React Router** pour la navigation
- **Tailwind CSS v4** (config CSS-first via `@theme`, pas de `tailwind.config.js`) - palette de marque navy/teal/lime, typographie Inter, animations custom (mesh gradients, reveal au scroll, floating cards)
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
| `npm run build` | Vérifie les types puis génère le build de production dans `dist/` |
| `npm run preview` | Prévisualise le build de production en local |
| `npm run lint` | Lance ESLint sur le projet |
| `npm run indexnow` | Signale les pages aux moteurs IndexNow (voir ci-dessous) |

## Indexation (IndexNow)

Le site implémente le protocole [IndexNow](https://www.indexnow.org/documentation), qui notifie instantanément Bing, Yandex, Naver, Seznam et Yep (les soumissions sont partagées entre moteurs participants) quand une page change.

- Clé : `public/3ef77f3c7e76abf39f2868b62b9fd819.txt`, servie à la racine du site (ne pas renommer ni modifier sans mettre à jour `scripts/indexnow.mjs`).
- Après un déploiement en production qui modifie du contenu :
  1. mettre à jour `<lastmod>` des pages concernées dans `public/sitemap.xml` ;
  2. lancer `npm run indexnow -- faq contact` (uniquement les pages modifiées, chemins sans `/` initial pour éviter la conversion de chemins de Git Bash), ou `npm run indexnow` pour tout le sitemap ;
  3. `npm run indexnow -- --dry-run` affiche la requête sans l'envoyer.
- Ne pas resoumettre des pages inchangées : IndexNow peut répondre 429 (attendre alors au moins 10 minutes).
- Le sitemap reste indispensable : IndexNow sert aux notifications rapides, le sitemap à l'inventaire complet.

## Structure du projet

```
src/
├── components/
│   ├── Nav.tsx          # Navigation (transparente sur hero sombre, opaque au scroll)
│   ├── Footer.tsx        # Footer avec logo officiel
│   ├── PageHero.tsx       # En-tête réutilisable des pages secondaires (mesh gradient sombre)
│   ├── FinalCta.tsx       # Section CTA pleine largeur réutilisable
│   ├── Icon.tsx           # Bibliothèque d'icônes SVG ligne (remplace les emojis)
│   └── Avatar.tsx         # Placeholders initiales pour équipe
├── pages/                 # Une page par route (Home, Services, NanoCredit, About, ...)
├── i18n/                  # LanguageContext + dictionnaires FR/EN par page
├── hooks/
│   └── useDocumentMeta.ts # Titre + meta description par page
├── index.css              # @theme Tailwind (palette, fonts, keyframes) + @layer components
└── App.tsx                # Déclaration des routes

middleware.ts              # Détection automatique de la langue par pays (Vercel Routing Middleware)

public/
└── brand/
    ├── tovpay-logo.png                # Logo complet source (haute résolution, og:image/schema)
    └── tovpay-logo-transparent.png    # Logo utilisé (nav, footer)
```

## Système de design

Toute la palette et les animations sont centralisées dans `src/index.css` via la directive `@theme` de Tailwind v4 :
- Couleurs : `navy`, `navy-deep`, `blue`, `teal`, `teal-dk`, `teal-light`, `lime`, `lime-dk`, `gold`, `g50`→`g900`
- Fonts : `font-sans` et `font-display` (Inter)
- Animations : `animate-float`, `animate-float-card`, `animate-mesh`, `animate-pulse-dot`, `animate-fade-up`, `animate-shine`

Classes composants réutilisables (`@layer components`) : `.btn-primary`, `.btn-ghost`, `.btn-outline`, `.btn-cta`, `.floating-card`, `.mesh-orb`, `.footer-link`, `.section-title`, `.section-tag`, `.section-sub`, `.container-tp`.

## Pages

| Route | Description |
|---|---|
| `/` | Accueil - hero, journal TOVPAY, chiffres clés, simulateur de crédit |
| `/services` | Détail des offres de crédit et du scoring intelligent |
| `/nano-credit` | Page dédiée au nano-crédit avec simulateur |
| `/agents` | Rôle et parcours des Chefs d'Agence |
| `/about` | Mission, valeurs, historique, équipe |
| `/partners` | Écosystème et connexions envisagées (bancaire, paiement, réglementaire) |
| `/faq` | Questions fréquentes |
| `/contact` | Formulaire de contact et coordonnées |

## Notes pour la suite

- Les avatars d'équipe et de témoignages utilisent actuellement des monogrammes générés (composant `Avatar.tsx`). Pour passer à de vraies photos, ajoutez l'image dans `public/team/` et passez la prop `src="/team/nom.jpg"` au composant.
- Les liens vers les réseaux sociaux (`Contact.tsx`, footer) sont des placeholders (`href="#"`) en attendant les comptes officiels.
- Le logo officiel (`public/brand/`) a été recadré/compressé à partir du fichier source fourni ; régénérer depuis l'original si une version haute résolution est nécessaire.

