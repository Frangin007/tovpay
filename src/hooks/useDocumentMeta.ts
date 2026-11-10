import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL } from '../lib/site'

const SITE_NAME = 'TOVPAY'

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
 * l'adresse canonique à chaque changement de page. Sans adresse canonique propre,
 * toutes les pages se déclareraient comme des copies de l'accueil.
 */
export function useDocumentMeta(title: string, description: string) {
  const { pathname } = useLocation()
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    // SITE_URL n'a pas de barre finale : l'accueil donne bien « https://tovpay.website/ ».
    const url = `${SITE_URL}${pathname}`
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
