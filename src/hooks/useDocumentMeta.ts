import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { canonicalUrl, pageTitle } from '../lib/site'

/** Trouve la balise <meta>/<link> identifiée par keyAttr="key" (ou la crée), puis fixe sa valeur. */
function upsertHeadTag(tag: 'meta' | 'link', keyAttr: string, key: string, valueAttr: string, value: string) {
  let el = document.head.querySelector(`${tag}[${keyAttr}="${key}"]`)
  if (!el) {
    el = document.createElement(tag)
    el.setAttribute(keyAttr, key)
    document.head.appendChild(el)
  }
  el.setAttribute(valueAttr, value)
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) =>
  upsertHeadTag('meta', attr, key, 'content', content)

/**
 * Met à jour le <title>, la description, les balises Open Graph / Twitter et
 * l'adresse canonique à chaque changement de page, dans la langue du visiteur.
 * La compilation écrit déjà ces balises en français dans la page HTML de chaque
 * adresse (voir src/lib/indexablePages.ts) : ce hook modifie les mêmes balises,
 * sans jamais en ajouter une seconde.
 */
export function useDocumentMeta(title: string, description: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    const fullTitle = pageTitle(title)
    // Même adresse que la page HTML compilée : « /faq/ » se déclare comme « /faq ».
    const url = canonicalUrl(pathname)
    document.title = fullTitle
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    upsertHeadTag('link', 'rel', 'canonical', 'href', url)
  }, [title, description, pathname])
}
