import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { createServer, defineConfig, type Logger, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

type IndexablePage = { path: string; title: string; description: string; url: string }

const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Remplace la valeur d'une balise du <head> ; échoue si la balise est absente ou en double. */
function setTag(html: string, pattern: RegExp, value: string, label: string) {
  const count = html.match(new RegExp(pattern.source, 'g'))?.length ?? 0
  if (count !== 1) throw new Error(`[pages-indexables] ${label} : ${count} balise(s) dans index.html, 1 attendue.`)
  return html.replace(pattern, (_match, before: string, after: string) => `${before}${escapeHtml(value)}${after}`)
}

function withPageHead(template: string, page: IndexablePage) {
  let html = template
  html = setTag(html, /(<title>)[^<]*(<\/title>)/, page.title, '<title>')
  html = setTag(html, /(<meta name="description" content=")[^"]*(")/, page.description, 'description')
  html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, page.url, 'canonical')
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, page.title, 'og:title')
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, page.description, 'og:description')
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, page.url, 'og:url')
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, page.title, 'twitter:title')
  html = setTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, page.description, 'twitter:description')
  return html
}

/**
 * Référencement : écrit une page HTML par adresse indexable (dist/faq/index.html...), copie
 * de index.html avec le titre, la description, l'adresse canonique et les balises Open Graph /
 * Twitter de la page, en français. vercel.json sert chaque fichier à l'adresse de sa page
 * (réécritures placées avant celle vers index.html) ; les robots qui n'exécutent pas
 * JavaScript et les aperçus de liens lisent donc directement les bonnes balises. React met
 * ensuite les mêmes balises à jour dans la langue du visiteur.
 */
function indexablePageHeads(): Plugin {
  let root = ''
  let outDir = ''
  let logger: Logger
  return {
    name: 'tovpay-pages-indexables',
    apply: 'build',
    configResolved(config) {
      root = config.root
      outDir = resolve(config.root, config.build.outDir)
      logger = config.logger
    },
    async writeBundle() {
      // Les textes viennent des dictionnaires, chargés par un serveur Vite temporaire :
      // vite.config.ts n'importe ainsi aucun fichier de src (pas de redémarrage du serveur
      // de développement à chaque modification de texte).
      const server = await createServer({
        root,
        configFile: false,
        logLevel: 'error',
        appType: 'custom',
        server: { middlewareMode: true, hmr: false, ws: false, watch: null },
        optimizeDeps: { noDiscovery: true, include: [] },
      })
      let pages: IndexablePage[]
      try {
        pages = (await server.ssrLoadModule('/src/lib/indexablePages.ts')).INDEXABLE_PAGES
      } finally {
        await server.close()
      }

      // Le sitemap et cette liste doivent annoncer exactement les mêmes adresses.
      const sitemap = await readFile(join(root, 'public', 'sitemap.xml'), 'utf8')
      const inSitemap = [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(m => m[1]).sort()
      const declared = pages.map(p => p.url).sort()
      if (inSitemap.join('\n') !== declared.join('\n')) {
        throw new Error(
          '[pages-indexables] public/sitemap.xml et src/lib/indexablePages.ts ne listent pas les mêmes adresses.\n' +
            `sitemap : ${inSitemap.join(', ')}\npages : ${declared.join(', ')}`,
        )
      }

      // vercel.json doit servir chaque page compilée (« /faq » -> « /faq/index.html »), avant la
      // réécriture générale vers index.html : sans cela, Vercel servirait les balises de l'accueil.
      const { rewrites = [] } = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8')) as {
        rewrites?: { source: string; destination: string }[]
      }
      const catchAll = rewrites.findIndex(r => r.source === '/(.*)')
      const served = new Set(
        rewrites
          .filter((r, i) => r.destination === `${r.source}/index.html` && (catchAll === -1 || i < catchAll))
          .map(r => r.source),
      )
      const subPages = pages.filter(p => p.path !== '/').map(p => p.path)
      const missing = subPages.filter(path => !served.has(path))
      const stale = [...served].filter(path => !subPages.includes(path))
      if (missing.length || stale.length) {
        throw new Error(
          '[pages-indexables] vercel.json : chaque page (sauf l\'accueil) doit avoir sa réécriture ' +
            '{ "source": "/page", "destination": "/page/index.html" }, placée avant "/(.*)".\n' +
            (missing.length ? `Manquantes : ${missing.join(', ')}\n` : '') +
            (stale.length ? `Sans page correspondante : ${stale.join(', ')}` : ''),
        )
      }

      const template = await readFile(join(outDir, 'index.html'), 'utf8')
      for (const page of pages) {
        const dir = page.path === '/' ? outDir : join(outDir, page.path.slice(1))
        await mkdir(dir, { recursive: true })
        await writeFile(join(dir, 'index.html'), withPageHead(template, page))
      }
      logger.info(`[pages-indexables] ${pages.length} pages HTML écrites, chacune avec ses balises de référencement.`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), indexablePageHeads()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          // Bibliothèque d'animation (framer-motion et ses deux dépendances) dans son propre fichier,
          // gardé en cache par le navigateur d'une mise en ligne à l'autre.
          if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) return 'motion-vendor'
          if (id.includes('react-router-dom') || id.includes('react-dom') || id.includes('/react/')) return 'react-vendor'
        },
      },
    },
  },
})
