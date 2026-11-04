#!/usr/bin/env node
// Soumission des URLs du site au protocole IndexNow (Bing, Yandex, Naver, Seznam, Yep...).
// Doc : https://www.indexnow.org/documentation
//
// Usage :
//   npm run indexnow                      -> soumet toutes les URLs de public/sitemap.xml
//   npm run indexnow -- faq contact       -> soumet uniquement ces pages (chemins ou URLs complètes ;
//                                            sans "/" initial, Git Bash convertirait "/faq" en chemin Windows)
//   npm run indexnow -- --dry-run         -> affiche ce qui serait envoyé, sans rien envoyer
//
// À lancer APRÈS le déploiement en production (le fichier de clé doit être en ligne),
// et uniquement pour les pages ajoutées, modifiées ou supprimées : renvoyer des URLs
// inchangées gaspille le quota de crawl et peut déclencher des 429.

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
  200: 'OK - URLs reçues par IndexNow.',
  202: 'Accepté - URLs reçues, validation de la clé en attente.',
  400: 'Requête invalide (format incorrect).',
  403: `Clé refusée : ${KEY_LOCATION} est introuvable ou ne contient pas la clé.`,
  422: `URLs refusées : elles n'appartiennent pas à ${HOST} ou la clé ne correspond pas au schéma.`,
  429: 'Trop de requêtes (suspicion de spam). Attendre au moins 10 minutes avant de réessayer.',
}

function fail(message) {
  console.error(`✗ ${message}`)
  process.exit(1)
}

async function sitemapUrls() {
  const xml = await readFile(join(ROOT, 'public', 'sitemap.xml'), 'utf8')
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1])
}

function normalize(input) {
  const url = new URL(input, SITE)
  if (url.host !== HOST) fail(`${input} n'appartient pas à ${HOST} (IndexNow répondrait 422).`)
  return url.href
}

async function checkKeyFiles(dryRun) {
  const local = (await readFile(join(ROOT, 'public', `${KEY}.txt`), 'utf8').catch(() => null))?.trim()
  if (local !== KEY) fail(`public/${KEY}.txt est absent ou ne contient pas la clé.`)

  let live = null
  try {
    const res = await fetch(KEY_LOCATION, { redirect: 'manual' })
    if (res.ok) live = (await res.text()).trim()
  } catch {
    // réseau indisponible : traité comme "pas en ligne" ci-dessous
  }
  if (live === KEY) return

  const message = `${KEY_LOCATION} n'est pas en ligne (ou ne contient pas la clé). Déployez le site avant de soumettre.`
  if (dryRun) console.warn(`! ${message}`)
  else fail(message)
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const inputs = args.filter((a) => a !== '--dry-run')

  const urls = [...new Set((inputs.length ? inputs : await sitemapUrls()).map(normalize))]
  if (urls.length === 0) fail('Aucune URL à soumettre.')

  await checkKeyFiles(dryRun)

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
    const message = STATUS_MESSAGES[res.status] ?? `Réponse inattendue : ${await res.text()}`
    if (res.status !== 200 && res.status !== 202) fail(`HTTP ${res.status} - ${message}`)
    console.log(`✓ HTTP ${res.status} - ${message}`)
    urlList.forEach((u) => console.log(`  ${u}`))
  }
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)))
