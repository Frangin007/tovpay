// ── Bibliothèque d'images libres de droits (Unsplash)
// Licence Unsplash : usage commercial gratuit, attribution non requise.
// Les photos sont téléchargées au format WebP et hébergées dans public/images/ :
// le site ne charge plus rien depuis Unsplash.
// Sélection novembre 2026 : agents publics au travail (enseignement, santé, administration),
// sans uniforme, insigne, drapeau ni bâtiment officiel. Aucune photo ne représente un client
// réel ni l'équipe TOVPAY.
// Source de chaque fichier : https://unsplash.com/photos/{identifiant indiqué en commentaire}.
//
// Les fichiers de public/images/ sont les sources : le site affiche leurs variantes légères
// (public/images/variantes/, écrites par scripts/images.py), en plusieurs largeurs. Chaque
// valeur de IMAGES est l'adresse de la plus grande variante ; le composant Photo y ajoute
// les autres largeurs (srcset), parmi lesquelles le navigateur choisit selon l'écran.

import { IMAGE_VARIANTS } from './imageVariants'

/** Variante d'une photo : public/images/variantes/<nom>-<largeur ou suffixe>.webp */
const variant = (name: string, suffix: number | string) => `/images/variantes/${name}-${suffix}.webp`

/** Plus grande variante d'une photo source de public/images/. */
function img(name: string) {
  const photo = IMAGE_VARIANTS[name]
  // Vérifié aussi à la compilation (plugin de vite.config.ts) : une photo sans variantes y fait échouer le build.
  if (!photo) throw new Error(`Photo sans variantes : ${name}. Lancer « python scripts/images.py ».`)
  return variant(name, photo.widths[photo.widths.length - 1])
}

/** Photo source (entrée de IMAGE_VARIANTS) d'une adresse de variante. */
const photoOf = (src: string) => {
  const name = src.match(/^\/images\/variantes\/(.+)-\d+\.webp$/)?.[1]
  const photo = name ? IMAGE_VARIANTS[name] : undefined
  return name && photo ? { name, ...photo } : undefined
}

export const IMAGES = {
  // ── Hero de l'accueil (image de fond, voir HOME_HERO)
  hero: img('accueil-enseignante'),                 // 1761604478724 : enseignante guidant des élèves en classe

  // ── Heroes des pages secondaires (voir PAGE_HEROES)
  heroAdvance:  img('bureau-administration'),       // 1604783125462 : agent en costume à son bureau
  heroPartners: img('equipe-ordinateurs'),          // 1573167101669 : équipe au travail autour d'une table
  heroAbout:    img('reunion-bureau'),              // 1573164574511 : réunion dans un bureau lumineux
  heroFaq:      img('bureau-telephone'),            // 1758876202167 : agente au téléphone dans un bureau
  heroContact:  img('reunion-vue-dessus'),          // 1739298061707 : réunion de travail vue de dessus

  // ── Images de contenu
  classroom:     img('classe-enseignante'),         // 1698827623362 : enseignante devant sa classe
  teacher:       img('enseignant-classe'),          // 1744809482817 : enseignant face à ses élèves
  doctor:        img('medecin'),                    // 1643297654416 : médecin souriante, stéthoscope en main
  officeLaptop:  img('bureau-ordinateur'),          // 1674916972909 : agent prenant des notes devant son ordinateur
  readingFile:   img('lecture-dossier'),            // 1622295023876 : agent lisant un document à son bureau
  officeWoman:   img('bureau-agente'),              // 1642929456654 : agente souriante devant son ordinateur
  officeSmile:   img('bureau-agente-souriante'),    // 1758876202610 : agente à son bureau
  phoneAgent:    img('telephone-agent'),            // 1758519291531 : agent en chemise et cravate, téléphone en main
  smartphone:    img('smartphone'),                 // 1512941937669 : smartphone en main
  meeting:       img('reunion-equipe'),             // 1573165706511 : réunion d'équipe dans un bureau
  team:          img('equipe-ordinateurs'),         // 1573167101669 : même fichier que heroPartners, pour les appels de fin de page
} as const

export default IMAGES

/**
 * Logo allégé de la barre de navigation et du pied de page (scripts/images.py) : moitié exacte
 * du logo source (328 x 300), donc mêmes proportions et même largeur affichée.
 */
export const LOGO_NAV = { src: '/brand/tovpay-logo-nav.webp', width: 164, height: 150 } as const

/** Valeur de l'attribut srcset d'une photo de IMAGES : toutes ses largeurs disponibles. */
export function srcSetOf(src: string): string | undefined {
  const photo = photoOf(src)
  return photo?.widths.map(w => `${variant(photo.name, w)} ${w}w`).join(', ')
}

/**
 * Proportions de la photo source (« 1600 / 1221 »). Les variantes, de hauteur arrondie au pixel,
 * en diffèrent d'une fraction de pixel : imposer celles de la source garde la mise en page
 * identique, et réserve la place de la photo avant son arrivée.
 */
export function aspectRatioOf(src: string): string | undefined {
  const photo = photoOf(src)
  return photo && `${photo.width} / ${photo.height}`
}

/**
 * Hero de l'accueil, en image de fond (« cover ») : sur un écran en portrait, seule la bande
 * centrale de la photo est visible. Ce recadrage vertical (960 x 1280) donne alors la même image,
 * à la même netteté, en trois fois moins lourd que la photo entière.
 */
export const HOME_HERO = {
  portraitQuery: '(max-aspect-ratio: 3/4)',
  portrait: variant('accueil-enseignante', 'portrait'),
  landscape: IMAGES.hero,
} as const

/** Largeur affichée des photos d'en-tête (attribut sizes) : PageHero et préchargements. */
export const HERO_SIZES = '100vw'

/**
 * Photo d'en-tête de chaque page secondaire, par adresse. Préchargée dans le HTML de la page
 * (plugin de vite.config.ts) et juste avant d'y aller (prefetchImages.ts) : garder la même
 * photo que celle que la page passe à PageHero, sinon le navigateur en télécharge deux.
 */
export const PAGE_HEROES: Readonly<Record<string, string>> = {
  '/avance-sur-salaire': IMAGES.heroAdvance,
  '/partners': IMAGES.heroPartners,
  '/about': IMAGES.heroAbout,
  '/faq': IMAGES.heroFaq,
  '/contact': IMAGES.heroContact,
}

export type ImagePreload = { href: string; srcset?: string; sizes?: string; media?: string }

/** Photo visible dès l'arrivée sur une page, à précharger dans son HTML (balises <link rel="preload">). */
export function heroPreloads(path: string): ImagePreload[] {
  if (path === '/') {
    // Deux requêtes média complémentaires : une seule photo est téléchargée, celle du fond affiché.
    return [
      { href: HOME_HERO.portrait, media: HOME_HERO.portraitQuery },
      { href: HOME_HERO.landscape, media: `not all and ${HOME_HERO.portraitQuery}` },
    ]
  }
  const src = PAGE_HEROES[path]
  return src ? [{ href: src, srcset: srcSetOf(src), sizes: HERO_SIZES }] : []
}

/** Adresses de toutes les variantes attendues (vérifiées à la compilation). */
export function allVariantUrls(): string[] {
  return [
    ...Object.entries(IMAGE_VARIANTS).flatMap(([name, photo]) => photo.widths.map(w => variant(name, w))),
    HOME_HERO.portrait,
    LOGO_NAV.src,
  ]
}
