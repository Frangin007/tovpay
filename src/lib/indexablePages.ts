// ── Pages indexables et leurs balises de référencement, en français (langue par défaut) ──
// La compilation (plugin de vite.config.ts) lit ce fichier pour écrire une page HTML par
// adresse (dist/faq/index.html...) avec son titre, sa description et son adresse canonique :
// les robots qui n'exécutent pas JavaScript et les aperçus de liens (WhatsApp, Facebook,
// LinkedIn) les lisent sans attendre React. Le HTML de chaque page précharge aussi sa photo
// d'en-tête (heroPreloads, images.ts). Le site n'importe pas ce fichier.
//
// Ajouter ou retirer une page : modifier aussi App.tsx, public/sitemap.xml et les réécritures
// de vercel.json (la compilation échoue si cette liste, le sitemap et vercel.json divergent).
import { canonicalUrl, pageTitle } from './site'
import { heroPreloads, type ImagePreload } from './images'
import { fr as home } from '../i18n/dictionaries/home'
import { fr as advance } from '../i18n/dictionaries/advance'
import { fr as partners } from '../i18n/dictionaries/partners'
import { fr as about } from '../i18n/dictionaries/about'
import { fr as faq } from '../i18n/dictionaries/faq'
import { fr as contact } from '../i18n/dictionaries/contact'
import { fr as legal } from '../i18n/dictionaries/legal'
import { fr as privacy } from '../i18n/dictionaries/privacy'

export type IndexablePage = { path: string; title: string; description: string; url: string; preloads: ImagePreload[] }

const page = (path: string, meta: { title: string; description: string }): IndexablePage => ({
  path,
  title: pageTitle(meta.title),
  description: meta.description,
  url: canonicalUrl(path),
  preloads: heroPreloads(path),
})

export const INDEXABLE_PAGES: IndexablePage[] = [
  page('/', home.meta),
  page('/avance-sur-salaire', advance.meta),
  page('/partners', partners.meta),
  page('/about', about.meta),
  page('/faq', faq.meta),
  page('/contact', contact.meta),
  page('/mentions-legales', legal.meta),
  page('/confidentialite', privacy.meta),
]
