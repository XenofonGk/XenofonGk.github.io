import { chromium } from '@playwright/test'
import { readFile, mkdir } from 'node:fs/promises'
const content = JSON.parse(await readFile('content/portfolio.json', 'utf8'))
const font = (await readFile('app/fonts/archivo.woff2')).toString('base64')
const template = await readFile('scripts/social-template.html', 'utf8')
const escape = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        c
      ],
  )
// One card per exported route. Titles are escaped; only the accent markers
// (*word*) become <em>.
const routes = [
  [
    'home',
    'Full-stack developer',
    'I build software the way I used to build *houses*.',
  ],
  ['projects', 'Engineering work', 'Work you can *look inside*.'],
  ['websites', 'For businesses', 'Your business. *Clearly online.*'],
  ['about', 'About Xenofon', 'Built on *practical experience*.'],
  ...content.projects
    .filter((p) => p.caseStudy !== null)
    .map((p) => [p.slug, 'Case study', p.title, true]),
]
const accent = (s) => escape(s).replace(/\*([^*]+)\*/g, '<em>$1</em>')
await mkdir('public/social', { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
})
for (const [slug, label, title, isName] of routes) {
  await page.setContent(
    template
      .replace('__FONT__', font)
      .replace('__LABEL__', escape(label))
      .replace(
        '__TITLE__',
        isName ? `<span class="name">${escape(title)}</span>` : accent(title),
      ),
  )
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: `public/social/${slug}.png` })
}
await browser.close()
console.log(
  `Generated ${routes.length} social cards from the committed HTML template.`,
)
