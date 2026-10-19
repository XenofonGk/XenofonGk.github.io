# xgbuilds.dev

Portfolio of Xenofon Gkioka: three static pages (Home, Websites, Projects).

Next.js 16 (static export), TypeScript, Tailwind CSS 4. English only, light and dark theme.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # static site in out/
npm start          # serve out/ locally
```

All copy and links live in `lib/site.ts`; the pages only handle layout.

The C and C++ demos are compiled to WebAssembly (`wasm/` has the sources, `npm run build:wasm` rebuilds them into `public/wasm/`) and load only when a visitor opens them.

## Deploy (Cloudflare Pages)

Connect this repo in Cloudflare Pages and use:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `22` (env var `NODE_VERSION`) |

Then add `xgbuilds.dev` under Custom domains. Live demos (Task Manager API, Resume Classifier) stay on home-server subdomains behind the Cloudflare Tunnel.

When the real-Bash games (CheerpX) are added, put a `public/_headers` file in place with `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Embedder-Policy: require-corp` for the games route.

## Content still to add

- Screenshots of azclean.gr and wayempowerment.com (`public/work/`, then set `image` in `lib/site.ts`)
- A larger photo (800px or wider) to replace `public/xenofon.jpg`
