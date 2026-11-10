import { useEffect, useState, type ReactNode } from 'react'
import { LanguageContext, type Lang } from './language'

const STORAGE_KEY = 'tovpay-lang'

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
