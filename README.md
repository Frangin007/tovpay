# TOVPAY - Site vitrine

Site vitrine de TOVPAY, filiale de GROUPE TOV, qui prépare un service d'avance sur salaire pour les agents publics du Bénin et du Togo. Le service n'est pas encore ouvert : le site le présente au futur, sans partenaire nommé ni chiffre d'activité.

## Stack technique

- **React 19** + **TypeScript**
- **Vite** pour le build et le dev server
- **React Router** pour la navigation
- **Tailwind CSS v4** (config CSS-first via `@theme`, pas de `tailwind.config.js`) - palette de marque navy/teal, typographie Inter ; animations limitées à des transitions CSS (menu mobile, FAQ)
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
│   ├── Nav.tsx              # Navigation (liens complets à partir de 1024 px, menu burger en dessous)
│   ├── Footer.tsx           # Pied de page (liens légaux, textes de l'application)
│   ├── PageHero.tsx         # En-tête des pages secondaires (photo sous voile bleu nuit)
│   ├── FinalCta.tsx         # Bande d'appel à l'action de fin de page (photo sous voile)
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
│   ├── site.ts              # Coordonnées, liens des textes de l'application, frais proposés
│   └── images.ts            # Photos du site (fichiers WebP de public/images/)
├── hooks/
│   └── useDocumentMeta.ts   # Titre, description, Open Graph et adresse canonique par page
├── index.css                # @theme Tailwind (palette, fonts) + @layer components
└── App.tsx                  # Routes et redirections des anciennes pages

middleware.ts                # Détection automatique de la langue par pays (Vercel Routing Middleware)
vercel.json                  # Redirections permanentes des anciennes pages + réécriture SPA

public/
├── images/                            # Photos libres de droits (Unsplash), en WebP, hébergées sur le site
└── brand/
    ├── tovpay-logo.png                # Logo complet source (og:image, données structurées)
    └── tovpay-logo-transparent.png    # Logo utilisé (nav, footer)
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

