import { HERO_SIZES, HOME_HERO, PAGE_HEROES, srcSetOf } from './images'

// Photo d'en-tête d'une page, téléchargée dès qu'un lien vers elle est survolé, touché ou
// atteint au clavier : au changement de page, elle est déjà là (ou presque) au lieu d'arriver
// après le texte. Rien n'est téléchargé à l'avance sans ce signal : sur forfait mobile, les
// visiteurs ne paient pas les photos des pages qu'ils ne visitent pas.
// Même srcset et même sizes que PageHero : le navigateur choisit la même variante, qu'il
// réutilise ensuite telle quelle.

const requested = new Set<string>()
const pending: HTMLImageElement[] = [] // garde une référence le temps du téléchargement

function warm(path: string) {
  if (requested.has(path) || (path !== '/' && !PAGE_HEROES[path])) return
  requested.add(path)
  const img = new Image()
  img.fetchPriority = 'high'
  img.decoding = 'async'
  const release = () => {
    const i = pending.indexOf(img)
    if (i !== -1) pending.splice(i, 1)
  }
  img.addEventListener('load', release, { once: true })
  img.addEventListener('error', release, { once: true })
  pending.push(img)
  if (path === '/') {
    img.src = matchMedia(HOME_HERO.portraitQuery).matches ? HOME_HERO.portrait : HOME_HERO.landscape
  } else {
    img.sizes = HERO_SIZES
    img.srcset = srcSetOf(PAGE_HEROES[path]) ?? ''
    img.src = PAGE_HEROES[path]
  }
}

function onIntent(event: Event) {
  const link = (event.target as Element | null)?.closest?.('a[href]')
  if (link instanceof HTMLAnchorElement && link.origin === location.origin && link.pathname !== location.pathname) {
    warm(link.pathname.replace(/(.)\/+$/, '$1'))
  }
}

export function startImagePrefetch() {
  // pointerover couvre la souris et le toucher (il précède pointerdown) ; focusin, le clavier.
  document.addEventListener('pointerover', onIntent, { passive: true })
  document.addEventListener('focusin', onIntent)
}
