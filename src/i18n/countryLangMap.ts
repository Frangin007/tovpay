// ── Correspondance pays -> langue par défaut ─────────────────────────
// Utilisée par le middleware de détection automatique (voir /middleware.ts)
// pour choisir la langue d'affichage au premier passage d'un visiteur,
// à partir du pays détecté par la géolocalisation Vercel (code ISO 3166-1 alpha-2).
//
// Pour ajouter une langue ou un pays : ajouter le code pays ci-dessous,
// et créer les dictionnaires correspondants dans src/i18n/dictionaries/.

export type SupportedLang = 'fr' | 'en'

// Langue utilisée quand le pays est inconnu, non détecté, ou non répertorié.
export const DEFAULT_LANG: SupportedLang = 'fr'

export const COUNTRY_LANG_MAP: Record<string, SupportedLang> = {
  // Francophonie - Europe
  FR: 'fr', BE: 'fr', CH: 'fr', LU: 'fr', MC: 'fr',

  // Francophonie - Afrique de l'Ouest et Centrale
  BJ: 'fr', BF: 'fr', CI: 'fr', GN: 'fr', ML: 'fr', NE: 'fr', SN: 'fr', TG: 'fr',
  CD: 'fr', CG: 'fr', CM: 'fr', GA: 'fr', CF: 'fr', TD: 'fr',

  // Francophonie - Océan Indien et autres
  MG: 'fr', RW: 'fr', BI: 'fr', DJ: 'fr', KM: 'fr', HT: 'fr',

  // Anglophonie - Afrique
  NG: 'en', GH: 'en', KE: 'en', ZA: 'en', UG: 'en', TZ: 'en',
  ZM: 'en', ZW: 'en', SL: 'en', LR: 'en', GM: 'en', MW: 'en', BW: 'en', NA: 'en',

  // Anglophonie - autres régions
  US: 'en', GB: 'en', CA: 'en', AU: 'en', IE: 'en', NZ: 'en', IN: 'en',
}

/** Résout la langue par défaut pour un pays donné (code ISO alpha-2), avec repli sur DEFAULT_LANG. */
export function resolveLangFromCountry(country: string | undefined | null): SupportedLang {
  if (!country) return DEFAULT_LANG
  return COUNTRY_LANG_MAP[country] ?? DEFAULT_LANG
}
