#!/usr/bin/env node
// Soumission des URLs du site au protocole IndexNow (Bing, Yandex, Naver, Seznam, Yep...).
// Doc : https://www.indexnow.org/documentation et https://www.indexnow.org/faq
//
// Usage :
//   npm run indexnow                        -> soumet toutes les URLs de public/sitemap.xml
//   npm run indexnow -- --redirections      -> idem, plus les anciennes adresses redirigées (vercel.json)
//   npm run indexnow -- faq contact         -> soumet uniquement ces pages (chemins ou URLs complètes ;
//                                              sans "/" initial, Git Bash convertirait "/faq" en chemin Windows)
//   npm run indexnow -- --dry-run           -> vérifie et affiche ce qui serait envoyé, sans rien envoyer
//
// À lancer APRÈS le déploiement en production, et uniquement pour les pages ajoutées, modifiées,
// supprimées ou redirigées : IndexNow n'est pas fait pour resoumettre tout un site inchangé
// (sauf après une refonte), et resoumettre une même URL plusieurs fois par jour peut déclencher
// des 429. Avant tout envoi, le script vérifie en ligne la clé et chaque adresse : une page doit
// répondre 200 en déclarant sa propre adresse canonique (preuve que la nouvelle version est en
// ligne), une ancienne adresse doit rediriger vers sa nouvelle page.

import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const HOST = 'tovpay.website'
const SITE = `https://${HOST}`
// Clé publique par nature : elle est servie en clair à la racine du site.
const KEY = '3ef77f3c7e76abf39f2868b62b9fd819'
const KEY_LOCATION = `${SITE}/${KEY}.txt`
// Un seul endpoint suffit : les moteurs participants se partagent les soumissions.
const ENDPOINT = 'https://api.indexnow.org/indexnow'
const MAX_URLS_PER_REQUEST = 10_000

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

const STATUS_MESSAGES = {
  200: 'OK - URLs reçues par IndexNow (ce qui ne garantit pas leur indexation).',
  202: 'Accepté - URLs reçues, validation de la clé en attente.',
  400: 'Requête invalide (format incorrect).',
  403: `Clé refusée : ${KEY_LOCATION} est introuvable ou ne contient pas la clé.`,
  422: `URLs refusées : elles n'appartiennent pas à ${HOST} ou la clé ne correspond pas au schéma.`,
  429: 'Trop de requêtes (suspicion de spam). Attendre au moins 10 minutes avant de soumettre à nouveau ces URLs.',
}

const now = () => new Date().toISOString()

function fail(message) {
  console.error(`✗ ${message}`)
  process.exit(1)
}

async function sitemapUrls() {
  const xml = await readFile(join(ROOT, 'public', 'sitemap.xml'), 'utf8')
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1])
}

/** Anciennes adresses redirigées définitivement (vercel.json) : URL source -> URL de destination. */
async function permanentRedirects() {
  const config = JSON.parse(await readFile(join(ROOT, 'vercel.json'), 'utf8'))
  return new Map(
    (config.redirects ?? [])
      .filter((r) => r.permanent !== false && !/[:(*]/.test(r.source))
      .map((r) => [new URL(r.source, SITE).href, new URL(r.destination, SITE).href]),
  )
}

function normalize(input) {
  const url = new URL(input, SITE)
  if (url.host !== HOST) fail(`${input} n'appartient pas à ${HOST} (IndexNow répondrait 422).`)
  return url.href
}

async function checkKeyFile() {
  const local = (await readFile(join(ROOT, 'public', `${KEY}.txt`), 'utf8').catch(() => null))?.trim()
  if (local !== KEY) return `public/${KEY}.txt est absent ou ne contient pas la clé.`
  try {
    const res = await fetch(KEY_LOCATION, { redirect: 'manual' })
    if (res.ok && (await res.text()).trim() === KEY) return null
  } catch {
    // réseau indisponible : traité comme "pas en ligne" ci-dessous
  }
  return `${KEY_LOCATION} n'est pas en ligne (ou ne contient pas la clé). Déployez le site avant de soumettre.`
}

/** Vérifie ce que la production répond pour une URL ; renvoie un message d'erreur, ou null. */
async function checkLiveUrl(url, pages, redirects) {
  let res
  try {
    res = await fetch(url, { redirect: 'manual' })
  } catch (err) {
    return `${url} : injoignable (${err instanceof Error ? err.message : err}).`
  }
  if (redirects.has(url)) {
    const location = res.headers.get('location')
    const target = location ? new URL(location, SITE).href : null
    if (![301, 308].includes(res.status) || target !== redirects.get(url)) {
      return `${url} : HTTP ${res.status}${target ? ` vers ${target}` : ''}, redirection définitive vers ${redirects.get(url)} attendue (vercel.json pas encore déployé ?).`
    }
    return null
  }
  if (pages.has(url)) {
    if (res.status !== 200) return `${url} : HTTP ${res.status}, 200 attendu.`
    const canonical = (await res.text()).match(/<link rel="canonical" href="([^"]+)"/)?.[1]
    if (canonical !== url) {
      return `${url} : la page en ligne déclare l'adresse canonique ${canonical ?? '(aucune)'} au lieu d'elle-même (nouvelle version pas encore déployée ?).`
    }
    return null
  }
  // Autre adresse (page supprimée...) : IndexNow accepte aussi les 404 et 410, on se contente d'afficher le statut.
  console.log(`  ${url} : HTTP ${res.status}`)
  return null
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const withRedirects = args.includes('--redirections')
  const unknown = args.filter((a) => a.startsWith('--') && !['--dry-run', '--redirections'].includes(a))
  if (unknown.length) fail(`Option inconnue : ${unknown.join(', ')}`)
  const inputs = args.filter((a) => !a.startsWith('--'))

  const pages = new Set(await sitemapUrls())
  const redirects = await permanentRedirects()
  const requested = inputs.length ? inputs.map(normalize) : [...pages]
  const urls = [...new Set([...requested, ...(withRedirects ? redirects.keys() : [])])]
  if (urls.length === 0) fail('Aucune URL à soumettre.')

  console.log(`${now()} - vérification en ligne de la clé et de ${urls.length} URL(s)...`)
  const problems = [await checkKeyFile()]
  for (const url of urls) problems.push(await checkLiveUrl(url, pages, redirects))
  const errors = problems.filter(Boolean)
  if (errors.length) {
    const message = `${errors.length} vérification(s) en échec :\n  - ${errors.join('\n  - ')}`
    if (!dryRun) fail(`${message}\nRien n'a été envoyé.`)
    console.warn(`! ${message}`)
  } else {
    console.log('✓ Clé en ligne, pages et redirections conformes.')
  }

  for (let i = 0; i < urls.length; i += MAX_URLS_PER_REQUEST) {
    const urlList = urls.slice(i, i + MAX_URLS_PER_REQUEST)
    const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }

    if (dryRun) {
      console.log(`[dry-run] POST ${ENDPOINT}\n${JSON.stringify(body, null, 2)}`)
      continue
    }

    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    })
    let message = STATUS_MESSAGES[res.status] ?? `Réponse inattendue : ${await res.text()}`
    const retryAfter = res.headers.get('retry-after')
    if (res.status === 429 && retryAfter) message += ` (Retry-After : ${retryAfter})`
    const line = `${now()} - POST ${ENDPOINT} - ${urlList.length} URL(s) - HTTP ${res.status} - ${message}`
    if (res.status !== 200 && res.status !== 202) fail(line)
    console.log(`✓ ${line}`)
    urlList.forEach((u) => console.log(`  ${u}`))
  }
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)))
