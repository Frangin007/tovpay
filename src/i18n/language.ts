import { createContext, useContext } from 'react'

// Contexte et hooks de langue, séparés du composant LanguageProvider
// (un fichier de composant ne doit exporter que des composants : rechargement à chaud).

export type Lang = 'fr' | 'en'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

/** Sélectionne le dictionnaire fr/en correspondant à la langue active. */
export function useT<T>(fr: T, en: T): T {
  const { lang } = useLanguage()
  return lang === 'en' ? en : fr
}
