import type { Variants } from 'framer-motion'

// Courbes d'accélération communes à toutes les pages (cohérence visuelle inter-sections).
export const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number]
export const EASE_IN = [0.4, 0, 1, 1] as [number, number, number, number]

/** Fondu + translation verticale : le variant le plus réutilisé du site (un par section/carte). */
export function makeFadeUp(opts: { y?: number; delayStep?: number } = {}): Variants {
  const { y = 30, delayStep = 0.12 } = opts
  return {
    hidden: { opacity: 0, y },
    visible: (i: number = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * delayStep, ease: EASE_OUT },
    }),
  }
}

export const fadeUp = makeFadeUp()

/** Simple fondu, sans déplacement. */
export function makeFadeIn(delayStep = 0.1): Variants {
  return {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
      opacity: 1,
      transition: { duration: 0.8, delay: i * delayStep },
    }),
  }
}

export const fadeIn = makeFadeIn()

/** Fondu + translation horizontale (blocs d'images/texte côte à côte). */
export function makeSlide(direction: 'left' | 'right', distance = 50): Variants {
  const x = direction === 'left' ? -distance : distance
  return {
    hidden: { opacity: 0, x },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_OUT } },
  }
}
