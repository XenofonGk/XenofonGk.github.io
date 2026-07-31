/*
 * Renders every route to a real HTML file after `vite build`.
 *
 * Why this exists:
 *  - GitHub Pages returns HTTP 404 for any path without a matching file, so
 *    /projects was answering 404 and relying on a JS redirect. Real files fix
 *    the status code and remove the redirect flash.
 *  - Link unfurlers (LinkedIn, Slack, iMessage) do not run JavaScript. Without
 *    prerendered markup and per-route meta tags they saw an empty <div id=root>
 *    and rendered a blank card.
 *  - Search crawlers get actual content instead of an empty shell.
 *
 * The client still hydrates and takes over routing; this only changes what is
 * served on first byte.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(root, 'dist')

// Override when the custom domain lands: SITE_URL=https://example.me npm run build
const SITE = (process.env.SITE_URL || 'https://xenofongk.github.io').replace(/\/$/, '')

const { render } = await import(join(DIST, '..', 'dist-ssr', 'entry-server.js'))
const { projects } = await import(join(root, 'src', 'data', 'projects.js'))
const { default: en } = await import(join(root, 'src', 'i18n', 'locales', 'en.js'))

const SITE_NAME = 'Xenofon Gkioka'
const BASE_DESC = en.home.lede

const routes = [
  { path: '/', title: `${SITE_NAME} — Software Engineer`, desc: BASE_DESC },
  {
    path: '/projects',
    title: `Projects — ${SITE_NAME}`,
    desc: en.projects.intro,
  },
  { path: '/about', title: `About — ${SITE_NAME}`, desc: en.about.paragraphs[0].slice(0, 180) },
  { path: '/contact', title: `Contact — ${SITE_NAME}`, desc: en.contact.body },
  ...projects.map((p) => ({
    path: `/projects/${p.slug}`,
    title: `${en.projects.items[p.id].title} — ${SITE_NAME}`,
    desc: en.projects.items[p.id].summary,
  })),
]

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const LOCALES = ['en', 'el', 'es', 'fr', 'hi', 'zh']

function metaFor({ path, title, desc }) {
  const url = `${SITE}${path === '/' ? '/' : path}`
  const alt = LOCALES.map(
    (l) => `  <link rel="alternate" hreflang="${l}" href="${esc(url)}" />`,
  ).join('\n')

  return `  <meta name="description" content="${esc(desc)}" />
  <link rel="canonical" href="${esc(url)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${esc(SITE_NAME)}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:url" content="${esc(url)}" />
  <meta property="og:image" content="${SITE}/og.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${SITE}/og.png" />
${alt}
  <link rel="alternate" hreflang="x-default" href="${esc(url)}" />`
}

const template = await readFile(join(DIST, 'index.html'), 'utf8')

let written = 0
for (const route of routes) {
  const appHtml = render(route.path)

  let html = template
    // The build template carries a generic title and description; each route
    // replaces them with its own.
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(route.title)}</title>`)
    .replace(/\n?\s*<meta name="description"[^>]*>/, '')
    .replace('</head>', `${metaFor(route)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  if (route.path === '/') {
    await writeFile(join(DIST, 'index.html'), html, 'utf8')
  } else {
    // Write both `/about/index.html` and `/about.html`.
    //
    // Static hosts resolve extensionless paths differently: with only the
    // directory form, a request for `/about` gets a 301 to `/about/` (GitHub
    // Pages) or falls through to the SPA shell entirely (vite preview), which
    // would serve the wrong <title> and canonical. Emitting the sibling .html
    // makes `/about` resolve directly with 200 and keeps the canonical URL —
    // which has no trailing slash — honest.
    await mkdir(join(DIST, route.path), { recursive: true })
    await writeFile(join(DIST, route.path, 'index.html'), html, 'utf8')
    await mkdir(dirname(join(DIST, `${route.path}.html`)), { recursive: true })
    await writeFile(join(DIST, `${route.path}.html`), html, 'utf8')
  }
  written += 1
}

// robots.txt and a sitemap, now that the URLs resolve to real documents.
await writeFile(
  join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,
  'utf8',
)

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8')

console.log(`prerendered ${written} routes -> ${SITE}`)
console.log(routes.map((r) => `  ${r.path}`).join('\n'))
