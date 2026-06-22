# TOVPAY — Site vitrine

Site vitrine de TOVPAY, plateforme de nano-crédit mobile et de paiements digitaux pour la zone UEMOA, en partenariat avec Orabank.

## Stack technique

- **React 19** + **TypeScript**
- **Vite** pour le build et le dev server
- **React Router** pour la navigation
- **Tailwind CSS v4** (config CSS-first via `@theme`, pas de `tailwind.config.js`) — palette de marque navy/teal/lime, typographies DM Sans + Syne, animations custom (mesh gradients, reveal au scroll, floating cards)

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

## Structure du projet

```
src/
├── components/
│   ├── Nav.tsx          # Navigation (transparente sur hero sombre, opaque au scroll)
│   ├── Footer.tsx        # Footer avec logo officiel
│   ├── PageHero.tsx       # En-tête réutilisable des pages secondaires (mesh gradient sombre)
│   ├── FinalCta.tsx       # Section CTA pleine largeur réutilisable
│   ├── Icon.tsx           # Bibliothèque d'icônes SVG ligne (remplace les emojis)
│   └── Avatar.tsx         # Placeholders initiales pour équipe/témoignages
├── pages/                 # Une page par route (Home, Services, NanoCredit, About, ...)
├── hooks/
│   └── useScrollReveal.ts # Animation fade+slide-up au scroll (IntersectionObserver)
├── index.css              # @theme Tailwind (palette, fonts, keyframes) + @layer components
└── App.tsx                # Déclaration des routes

public/
└── brand/
    ├── tovpay-icon.png     # Logo carré (nav, favicon)
    └── tovpay-logo.png     # Logo complet (footer, usages larges)
```

## Système de design

Toute la palette et les animations sont centralisées dans `src/index.css` via la directive `@theme` de Tailwind v4 :
- Couleurs : `navy`, `navy-deep`, `blue`, `teal`, `teal-dk`, `teal-light`, `lime`, `lime-dk`, `gold`, `g50`→`g900`
- Fonts : `font-sans` (DM Sans), `font-display` (Syne)
- Animations : `animate-float`, `animate-float-card`, `animate-mesh`, `animate-pulse-dot`, `animate-fade-up`, `animate-shine`

Classes composants réutilisables (`@layer components`) : `.btn-primary`, `.btn-ghost`, `.btn-outline`, `.btn-cta`, `.floating-card`, `.mesh-orb`, `.footer-link`, `.section-title`, `.section-tag`, `.section-sub`, `.container-tp`.

## Pages

| Route | Description |
|---|---|
| `/` | Accueil — hero carousel, services, simulateur de crédit, témoignages |
| `/services` | Détail des 4 offres (Nano-Crédit, Wallet, Scoring IA, Solutions PME) |
| `/nano-credit` | Page dédiée au nano-crédit avec simulateur |
| `/about` | Mission, valeurs, historique, équipe |
| `/partners` | Écosystème de partenaires et présence pays |
| `/investors` | Données pour investisseurs (KPI, levée de fonds) |
| `/blog` | Articles et actualités |
| `/faq` | Questions fréquentes |
| `/contact` | Formulaire de contact et coordonnées |

## Notes pour la suite

- Les avatars d'équipe et de témoignages utilisent actuellement des monogrammes générés (composant `Avatar.tsx`). Pour passer à de vraies photos, ajoutez l'image dans `public/team/` et passez la prop `src="/team/nom.jpg"` au composant.
- Les liens vers les réseaux sociaux (`Contact.tsx`, footer) sont des placeholders (`href="#"`) en attendant les comptes officiels.
- Le logo officiel (`public/brand/`) a été recadré/compressé à partir du fichier source fourni ; régénérer depuis l'original si une version haute résolution est nécessaire.

