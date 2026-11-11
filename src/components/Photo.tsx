import { useLayoutEffect, useRef, type ImgHTMLAttributes } from 'react'
import { aspectRatioOf, srcSetOf } from '../lib/images'

type PhotoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'loading'> & {
  /** Photo de IMAGES (src/lib/images.ts) */
  src: string
  /**
   * Largeur à laquelle la photo est affichée, au format de l'attribut sizes (« 100vw »,
   * « (min-width: 1024px) 610px, 90vw »...). Avec object-cover dans un cadre plus étroit que la
   * photo, compter la largeur réellement affichée (hauteur du cadre x proportions de la photo).
   */
  sizes: string
  /** Photo visible dès l'arrivée sur la page (en-tête) : chargée tout de suite, en priorité. */
  priority?: boolean
}

/** Au-delà de ce délai (ms) après l'affichage de la page, la photo arrive en fondu. */
const INSTANT_MS = 120
const FADE = { duration: 400, easing: 'ease-out' }

/**
 * Photo du site : le navigateur choisit la variante la plus légère qui suffit à l'écran
 * (srcset + sizes), les photos hors écran attendent d'en approcher (loading lazy), et une photo
 * qui arrive après l'affichage de la page apparaît en fondu au lieu de surgir. Le fondu ne
 * touche que l'opacité : transitions CSS (zoom au survol) et animations framer-motion intactes.
 * Les proportions de la photo source sont imposées (aspectRatioOf) : sans effet quand la
 * largeur et la hauteur sont fixées par les classes, elles évitent sinon tout décalage.
 */
export default function Photo({ src, sizes, priority = false, alt = '', style, ...rest }: PhotoProps) {
  const ref = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    const img = ref.current
    if (!img || img.complete) return // déjà prête (cache) : affichée telle quelle
    const start = performance.now()
    img.style.opacity = '0'
    const reveal = (event: Event) => {
      img.style.opacity = ''
      const fade = event.type === 'load' && performance.now() - start > INSTANT_MS
      if (fade && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        img.animate([{ opacity: 0 }, { opacity: 1 }], FADE)
      }
    }
    img.addEventListener('load', reveal, { once: true })
    img.addEventListener('error', reveal, { once: true })
    return () => {
      img.removeEventListener('load', reveal)
      img.removeEventListener('error', reveal)
      img.style.opacity = ''
    }
  }, [src])

  return (
    <img
      ref={ref}
      src={src}
      srcSet={srcSetOf(src)}
      sizes={sizes}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding={priority ? undefined : 'async'}
      style={{ aspectRatio: aspectRatioOf(src), ...style }}
      {...rest}
    />
  )
}
