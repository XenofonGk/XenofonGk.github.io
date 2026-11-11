# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers, recruiters and engineers evaluating Xenofon Gkioka for junior-to-intermediate roles that are **equally full-stack (.NET + React) and DevOps/platform**. They arrive from a CV, LinkedIn or a job application, usually skim for under two minutes, and decide whether the work is real and whether he can be trusted with production.

## Product Purpose

A personal portfolio that proves, with live and inspectable work, that Xenofon builds software and runs it. Success: a visitor opens at least one live thing (a client site, an API, the server status, the in-browser C demo) and leaves with the story "former construction site supervisor who builds and operates software to spec".

## Positioning

Former construction site supervisor (Toronto) turned full-stack developer. He builds software "the way I used to build houses: to spec, on time, and made to last" and runs his own services on a home server set up like production (Cloudflare Tunnel, signed images, pull-based deploys, monitoring, alerting, tested backups). Few junior developers can show both the trade background and a production-style server they operate themselves.

## Operating Context

- Served at xgbuilds.dev as a static export; a push to `main` updates the live site, so changes go through pull requests.
- Live services on the home server: tasks.xgbuilds.dev (Task Manager API, Swagger), resume-classifier.xgbuilds.dev.
- English only. (The earlier React + Vite site had six locales; they were not carried into the Next.js rebuild.)
- Every route is prerendered by `next build`; axe-core runs in the Playwright suite in both themes with a zero-violation bar.

## Capabilities and Constraints

- Next.js (App Router, `output: 'export'`) + React 19 + TypeScript. One hand-written stylesheet (`app/globals.css`) built on CSS custom properties; no UI library, no CSS framework.
- Content is typed and schema-validated: `content/portfolio.json` + `content/portfolio.schema.json`, loaded through `lib/portfolio.ts`. Contact details, client sites, timeline and live-work list are in `lib/site.ts`.
- In-page demos: Train Yard validator (C to WebAssembly) and ArenaCore (C++ to WebAssembly), loaded only when a visitor launches them.
- A live server-status panel is wanted; it needs a small public read-only status endpoint on the home server (not yet built). Must never expose secrets or internal addresses.
- Light and dark themes exist and must stay.

## Brand Commitments

- Headline line: "I build software the way I used to build houses" (owner likes it).
- The drafting/construction-drawing look (cream paper, safety orange, heavy grotesk capitals, § section callouts with dimension lines, project "sheets" with inspection stamps, a title-block footer) is liked; develop it further, do not replace it. The clean neutral card look (PR #3) was rejected.
- Initials mark "XG".

## Evidence on Hand

- Client sites, featuring approved by both owners: AZ Clean (azclean.gr, Athens) and WAY Empowerment (wayempowerment.com, Kenya NGO).
- Experience: Software Engineer Intern at Mercell (Copenhagen, Jun–Aug 2026); Junior Software Developer at Spinworks (Athens, Aug 2021–Aug 2022); construction site supervisor in Toronto; Computer Programming diploma at Seneca Polytechnic (expected April 2027).
- Projects, evidence and case studies in `content/portfolio.json`: ai-eng, KykloC, AZ Clean, aoda-scan, ArenaCore, AgentMesh, Train yard validator, Home server.
- Home server repo: github.com/XenofonGk/Home-server (private).
- No testimonials, metrics, or client quotes exist; do not invent any.

## Product Principles

1. Show, don't claim: every claim links to something live, runnable or inspectable.
2. The trade story is the differentiator; use it structurally, not as decoration.
3. Built and operated: give code and operations equal weight.
4. Honest numbers only; no invented stats.
5. Fast, accessible, and translatable, because that is part of the proof.

## Accessibility & Inclusion

Target WCAG 2.1 AA, with zero axe-core violations enforced in CI in both themes; keyboard paths and reduced motion are tested. Automated checks do not certify conformance.
