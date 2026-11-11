# xgbuilds.dev

Xenofon Gkioka’s portfolio: selected engineering work, client websites, About, and individual case studies. A Next.js static export with React 19 and TypeScript, styled by one hand-written stylesheet. English, with light and dark themes.

## Develop and verify

```sh
npm ci
npm run dev
npm run typecheck
npm run format:check   # npm run format to fix
npm run check:content
npm run build          # static HTML and assets in out/
npm run preview        # http://127.0.0.1:4173
npx playwright install chromium
npm run test:browser
npm run test:wasm      # see "Compiled demonstrations" for the compiler setup
```

CI (`.github/workflows/ci.yml`) runs format, content, type, build and browser checks, plus the WebAssembly parity job, on every pull request and on pushes to `main`.

The build uses Next.js’s webpack option for compatibility with restricted environments where Turbopack’s local worker port cannot bind. The preview server serves exported routes and returns the exported 404 page for unknown paths.

Browser acceptance checks cover route metadata, axe findings in both themes, keyboard navigation, theme persistence, responsive overflow at 375/390/768/1440 pixels, reduced motion, internal links and anchors, sitemap, robots.txt and structured data, and both compiled demos. These automated checks do not certify accessibility conformance.

## Layout

| Path | What it holds |
| --- | --- |
| `app/` | Routes (`/`, `/projects`, `/projects/[slug]`, `/websites`, `/about`, 404), `sitemap.ts`, `robots.ts`, `globals.css`, self-hosted fonts |
| `components/` | `Header`, `Footer` (contact + title block), `Callout` (§ section labels), `ProjectRecord` (a project “sheet”), `StatusStamp`, `ProjectMedia`, `ServerDiagram`, `DemoPanel`, `MutationExample`, `JsonLd`, `demos/` |
| `lib/` | `portfolio.ts` (typed, validated content + helpers), `site.ts` (contact, education, timeline, client sites, live-work list), `metadata.ts`, `structured-data.ts` |
| `content/` | `portfolio.json` and its JSON Schema |
| `wasm/` | C and C++ sources for the demos, plus the native parity tests |
| `scripts/` | preview server, content check, social-card generator, review helpers |

## Design

A construction-drawing language: cream paper (`--paper`), ink, hairline rules, and safety orange (`--signal` for fills and display type, `--signal-text` for small text). Display type is Archivo at heavy weights in capitals; body text is IBM Plex Sans; labels are the system monospace. Sections open with a numbered `§` callout and a dimension line, projects are drawn as sheets with an inspection stamp for their status, and every page ends in a title block. All colours are tokens at the top of `app/globals.css`, redefined for the dark theme.

## Content and evidence

`content/portfolio.json` holds project records and experience. `content/portfolio.schema.json` defines the versioned data contract. `lib/portfolio.ts` validates the schema, duplicate identifiers, link protocols and local media references during the build. `npm run check:content` additionally requires three completed featured case studies with media and evidence.

Case-study pages distinguish repository-reported results, source review and executed checks. A benchmark that has not been rerun stays labelled as reported. Prototype limitations remain part of each record. A project can name an in-browser demo with `"demo": "train-yard" | "arenacore"`.

General contact details, education, the timeline, client sites and the home page’s “On site now” list are in `lib/site.ts`. Every link there must resolve today. Static route metadata lives beside each route. Licensed Archivo and IBM Plex Sans assets are self-hosted in `app/fonts/`, alongside their license texts.

## Search and social

`app/sitemap.ts` and `app/robots.ts` are exported as `sitemap.xml` and `robots.txt`. The home page carries `Person` and `WebSite` JSON-LD, and each case study `CreativeWork` and `BreadcrumbList`, all built from site content.

Social previews (one per exported route) are generated from `scripts/social-template.html`. After changing a page title or project title, run `npm run social` with the Playwright Chromium runtime installed, copy `public/social/home.png` to `public/og.png`, and commit the results.

## Compiled demonstrations

C and C++ sources live in `wasm/`. `npm run build:wasm` rebuilds the browser modules in `public/wasm/` with Emscripten. The interface downloads the module after a visitor launches the demo; combat logic runs in the compiled C++.

On Linux, install Clang, `libc++-dev`, `libc++abi-dev` and the Clang sanitizer runtime (`libclang-rt-<version>-dev` on Ubuntu), then run `CC=clang CXX="clang++ -stdlib=libc++" npm run test:wasm`. Emscripten and the native test must use libc++: the C++ standard permits different `uniform_int_distribution` implementations, which can produce different seeded combat results across standard libraries. macOS uses libc++ by default.

The native gate builds with AddressSanitizer and UndefinedBehaviorSanitizer, executes a regression for unsafe engine removal, and compares numeric state against the committed browser modules for identical operation sequences. Names and log text are excluded. CI checks committed artifacts, rebuilds with Emscripten **6.0.5**, then runs parity again. This checks the defined scenarios; it is not a proof for every possible input. Compiler setup uses the [official Emscripten action](https://github.com/emscripten-core/setup-emsdk).

## Hosting

The build output is the `out/` directory. It can be served by any static host with extensionless HTML routing and the generated `404.html` as its missing-page response; `public/_headers` sets security headers on hosts that read that file. A push to `main` updates the live site, so work happens on branches and lands through pull requests. No application server, analytics or contact-form service is required; contact uses email links.
