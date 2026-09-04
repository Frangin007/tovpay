import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'

const STORAGE_KEY = 'tovpay-lang'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/** Langue posée par le middleware de détection pays -> langue (voir /middleware.ts), avant tout choix manuel. */
function readCookieLang(): Lang | null {
  const match = document.cookie.match(/(?:^|;\s*)tovpay-lang=(fr|en)/)
  return match ? (match[1] as Lang) : null
}

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // stockage indisponible (navigation privée...)
  }
  return readCookieLang() ?? 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // stockage indisponible (navigation privée...) - la langue reste active pour la session
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

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
