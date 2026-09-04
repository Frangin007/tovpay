import { geolocation, next } from '@vercel/functions'
import { resolveLangFromCountry } from './src/i18n/countryLangMap'

const COOKIE_NAME = 'tovpay-lang'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 an

// Ne s'exécute que sur les pages (pas sur les fichiers statiques : assets,
// images, favicon, robots.txt, sitemap.xml...) pour éviter des appels inutiles.
export const config = {
  matcher: ['/((?!assets/|.*\\..*).*)'],
}

export default function middleware(request: Request) {
  const cookieHeader = request.headers.get('cookie') ?? ''
  const hasLangCookie = new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=`).test(cookieHeader)

  // Le visiteur a déjà une langue déterminée (détectée ou choisie manuellement) :
  // on ne refait jamais la détection, on continue simplement la requête.
  if (hasLangCookie) return next()

  const { country } = geolocation(request)
  const lang = resolveLangFromCountry(country)

  return next({
    headers: {
      'set-cookie': `${COOKIE_NAME}=${lang}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`,
    },
  })
}
