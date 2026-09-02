import { useEffect } from 'react'

const SITE_NAME = 'TOVPAY'

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

/** Met à jour le <title> et les meta description/OG à chaque changement de page. */
export function useDocumentMeta(title: string, description: string) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle
    setMeta('description', description)
    setProperty('og:title', fullTitle)
    setProperty('og:description', description)
  }, [title, description])
}
