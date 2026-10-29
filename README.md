# xgbuilds.dev

Xenofon Gkioka’s portfolio: selected engineering work, client websites, About, and individual case studies. Built with Next.js static export, React, TypeScript and Tailwind CSS. English, with light and dark themes.

## Develop and verify

```sh
npm ci
npm run dev
npm run typecheck
npm run build       # static HTML and assets in out/
npm run preview     # http://127.0.0.1:4173
npx playwright install chromium
npm run test:browser
npm run check:content
npm run test:wasm
```

The build uses Next.js’s webpack option for compatibility with restricted environments where Turbopack’s local worker port cannot bind. The preview server serves exported routes and returns the exported 404 page for unknown paths.

Browser acceptance checks cover route metadata, axe findings in both themes, keyboard navigation, theme persistence, responsive overflow at 375/768/1440 pixels, reduced motion, and an interaction-loaded ArenaCore demo. These automated checks do not certify accessibility conformance.

## Content and evidence

`content/portfolio.json` holds project records and experience. `content/portfolio.schema.json` defines the versioned data contract. `lib/portfolio.ts` validates the schema, duplicate identifiers, link protocols and local media references during the build. `npm run check:content` additionally requires three completed featured case studies with media and evidence.

Case-study pages distinguish repository-reported results, source review and executed checks. A benchmark that has not been rerun stays labelled as reported. Prototype limitations remain part of each record.

General contact details, website packages and the personal timeline are in `lib/site.ts`. Static route metadata lives beside each route. Licensed Archivo and IBM Plex Sans assets are self-hosted in `app/fonts/`, alongside their license texts.

Social previews are generated from `scripts/social-template.html` and the project titles. After changing a title, run `npm run social` with the Playwright Chromium runtime installed and commit the corresponding `public/social/` files.

## Compiled demonstrations

C and C++ sources live in `wasm/`. `npm run build:wasm` rebuilds the browser modules in `public/wasm/` with Emscripten. The interface downloads the module after a visitor launches the demo; combat logic runs in the compiled C++.

On Linux, install Clang, `libc++-dev` and `libc++abi-dev`, then run `CC=clang CXX="clang++ -stdlib=libc++" npm run test:wasm`. Emscripten and the native test must use libc++: the C++ standard permits different `uniform_int_distribution` implementations, which can produce different seeded combat results across standard libraries. macOS uses libc++ by default.

The native gate builds with AddressSanitizer and UndefinedBehaviorSanitizer, executes a regression for unsafe engine removal, and compares numeric state against the committed browser modules for identical operation sequences. Names and log text are excluded. CI checks committed artifacts, rebuilds with Emscripten **6.0.5**, then runs parity again. This checks the defined scenarios; it is not a proof for every possible input. Compiler setup uses the [official Emscripten action](https://github.com/emscripten-core/setup-emsdk).

## Hosting

The build output is the `out/` directory. It can be served by a static host with extensionless HTML routing and the generated `404.html` as its missing-page response. No application server, scanning backend, analytics or contact-form service is required; contact uses email links.
