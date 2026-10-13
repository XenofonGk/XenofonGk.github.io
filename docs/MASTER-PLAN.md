# Portfolio master plan (xgbuilds.dev)

Written 2026-09-28. Direction chosen by Xenofon: **A · Building Permit**
(canvas: https://claude.ai/artifact/1ayt5vER7NiaDnfpVDMHnZ).

## 0. Home server: where it stands

| Item | State |
|---|---|
| Tunnel, Caddy, DNS, WAF, rate limit, bot mode (OpenTofu) | Done |
| tasks.xgbuilds.dev, resume-classifier.xgbuilds.dev | Live, 200 |
| Signed images + pull-based deploy timers | Done, both active |
| Prometheus, Grafana, Kuma, Alertmanager to Telegram | Done, test alert received |
| Local backups (466 GB USB, restic, systemd timer with catch-up) | Done, first snapshot 2026-09-28 |
| Restic password in Bitwarden, restore tested | Done |
| Healthchecks.io dead-man switch | Done |
| Backblaze B2 offsite | Repo created; **first copy runs automatically tonight 03:04** (or now: `sudo /usr/local/sbin/home-server/backup.sh`) |
| xgbuilds.dev apex on GitHub Pages | Serving 200; **Enforce HTTPS still off** (GitHub cert pending) |
| Vaultwarden | Removed |
| verify.sh | **49 ok, 0 failed**, 2 skipped (ufw needs sudo; B2 until tonight) |

Found during the audit, to fix in Phase 1:
- `XenofonGk/Home-server` default branch is `claude/daily-briefing-agent-mimcp0`, so GitHub shows
  stale files (n8n, nginx, portainer). Set default to `main`.
- The site links to `github.com/XenofonGk/home-server`, which is private: visitors get a 404.

## 1. What the research says (and what we take)

Sources: hiring-manager surveys and guides ([Hakia](https://hakia.com/skills/building-portfolio/),
[Codeworks](https://codeworks.me/blog/junior-dev-portfolio-projects-coding-5-skills/)), creative
developer sites ([Josh Comeau](https://jobroadmaps.com/portfolios/josh-w-comeau),
[Brittany Chiang](https://v4.brittanychiang.com/), Cassie Evans, Cyd Stumpel via
[WeAreDevelopers](https://www.wearedevelopers.com/magazine/161/web-developer-portfolio-examples)),
[2026 brutalist type trends](https://www.setproduct.com/blog/retro-brutalist-ui-design-2026),
[Awwwards brutalism](https://www.awwwards.com/awwwards/collections/brutalism/), terminal/⌘K
portfolios ([example](https://github.com/thatguynikita/terminal-portfolio)).

| Finding | What we steal |
|---|---|
| Most employers want a working app; reviewers will not run your code | Every Tier-1 project has a **Live** button first, source second |
| Top 2–3 projects need a case study: problem, approach, **the hard part**, what you'd change, readable in 90 s | Each project page is a **permit file** with exactly those five boxes |
| 3–5 polished projects beat 10 basic ones | Home shows 6 "active sites"; the rest go to a compact archive |
| Josh Comeau: interactive demos inside the writing | Demos run inside case studies (C→WASM, live API calls, scan reports) |
| Cassie Evans: the specialism is built into the interface | The interface itself is the construction story (permit, inspections, stamps) |
| Cyd Stumpel: one orchestrated motion system, view transitions | One motion grammar: tape unrolls, stamps land, placards swing; View Transitions between pages |
| 2026 brutalism: wall of type, no hero image, flat bold colour | Stencil wall-of-type hero on safety yellow |
| ⌘K palette and a "terminal mode" read as engineer-built | **⌘K command palette** (jump to any project, toggle theme/language, copy email) |
| Print-friendly CV in HTML with JSON-LD for machines | `/cv` page that prints as a clean one-page CV + JSON-LD Person schema |
| Growth trajectory matters more than project count | About page as a **construction schedule** (Gantt) from Spinworks → site → Mercell → now |

## 2. Design system: Building Permit

- **Palette:** safety yellow `#F2C200` (ground), ink `#111008`, permit paper `#FFFDF2`,
  signal green `#1F8F4E` for live, hazard red only for failures. Night shift (dark): ink ground,
  yellow type.
- **Type:** Big Shoulders Stencil (display), Big Shoulders (labels), Public Sans (body), self-hosted.
- **Components:** hazard band, permit card, site placard (project card), inspection stamp
  (PASSED / LIVE / BOARDING), notice sheet (case study), tape-measure scroll progress, title block footer.
- **Signature interaction:** inspection stamps land on each live project when its health check
  answers (real data from the server), with the time of inspection.
- **Motion:** one grammar, reduced-motion respected. No scattered hover gimmicks.
- **Keep:** 6 languages, light/dark, prerender, zero axe violations, React + Vite.

## 3. Site map

| Route | Content |
|---|---|
| `/` | Permit hero · Active sites (6 placards with live stamps) · Inspection log (live server feed) · ai-eng headline stat · client work strip · contact |
| `/sites/:slug` | Permit file: problem, approach, hard part, result, what I'd change · live demo embedded · stack · source |
| `/engine-room` | The home server: as-built diagram, live status, how deploys are signed, backup/restore proof, incident notes |
| `/about` | Construction-schedule timeline, skills, languages, status (CA PR · EU) |
| `/cv` | Printable CV (HTML → print/PDF), JSON-LD |
| ⌘K | Command palette everywhere |

## 4. Projects: what goes where

Audited all 24 repositories on 2026-09-28.

**Tier 1: home page, full case study, live demo**

| Project | Live demo | Work needed |
|---|---|---|
| TaskManager API (DotNet) | Live Swagger at tasks.xgbuilds.dev | In-page "try it" panel calling the real API (reads only) |
| Resume Classifier | Live at resume-classifier.xgbuilds.dev | Move to its own public repo `resume-classifier` (history kept) so people can find it |
| Home server | Live status feed + engine-room page | Secret scan (gitleaks), fix default branch, make repo public |
| ai-eng | **No server needed**: interactive results explorer from `results.jsonl` | Headline: existing tests caught **0 / 59** reintroduced zod bugs; ai-eng flagged **27 / 59 (45.8%)** |
| aoda-scan | **New**: aoda.xgbuilds.dev scans an allowlist of my own sites; stored HTML reports for azclean.gr, wayempowerment.com, xgbuilds.dev | Small web wrapper, one job at a time, Chromium container (~500 MB RAM; 3.6 GB free) |
| AgentMesh (14.6k lines) | **Not public-live** (runs agents with provider keys: unsafe to open) | 90-second screen recording + architecture diagram + security model write-up |

**Tier 2: work and demos**
- AZ Clean, WAY Empowerment (client sites, permission confirmed); lift the before/after
  **comparison slider** from `az-clean-dev` into the case study as a live component.
- Train Yard (C → WASM) and ArenaCore (C++ → WASM): already run in the page; keep.

**Tier 3: archive list** Inventory CRUD, C and C++ exercises, Shell scripts, React todo.

**Not ready: keep off the site**
- `game-night-platform`: scaffold with TODOs (264 lines of client code). Finish it, then it is
  the best live demo you could have (a party game the visitor plays on their phone).
- `vacation-fullstack-project`: plan only.

## 5. Phases

| Phase | What | Who |
|---|---|---|
| **P0 Close the server** | B2 first copy (tonight, automatic) · Enforce HTTPS on Pages | auto / Cowork |
| **P1 Repos and content** | Home-server default branch + secret scan + public · resume-classifier repo · answer the "hard part" questions for 6 projects · record AgentMesh video | Claude + you |
| **P2 Design system in React** | Tokens, fonts, hazard band, permit card, placard, stamp, notice sheet, night shift | Claude |
| **P3 Pages** | Home, permit files, engine room, about schedule, CV, ⌘K palette, 6 locales | Claude (+ translations) |
| **P4 Live demos** | status.xgbuilds.dev/status.json · aoda scanner · ai-eng explorer · TaskManager try-it | Claude on the server |
| **P5 QA and launch** | Zero axe violations, Lighthouse, mobile, reduced motion, OG images, sitemap with canonical xgbuilds.dev, privacy-friendly analytics (Cloudflare) | Claude; you approve the PR |
| **P6 Next** | Finish game-night, host it live | you + Claude |

Every phase ends with screenshots before anything merges. Nothing goes live without your OK.

## 6. Questions for Xenofon

1. For each Tier-1 project: what was the hardest part, and what would you do differently? (I'll draft from the code; you correct.)
2. OK to make `Home-server` public after the secret scan?
3. OK to move the resume classifier into its own repo?
4. CV: do you have a current PDF, or should `/cv` be the source?
