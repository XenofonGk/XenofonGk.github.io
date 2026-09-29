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

- Hosted on GitHub Pages at xgbuilds.dev (xenofongk.github.io); built by GitHub Actions on every push to main.
- Live services on the home server: tasks.xgbuilds.dev (TaskManager API, Swagger), resume-classifier.xgbuilds.dev.
- Six locales (en, el, es, fr, hi, zh) with a key-parity check (`npm run check:locales`).
- Pre-rendered per route (SSR build + prerender script); axe-core accessibility check in CI with a zero-violation bar.

## Capabilities and Constraints

- React 19 + Vite + react-router; hand-built CSS design system in custom properties, no UI library.
- In-page demos: Train Yard validator (C compiled to WebAssembly), ArenaCore (C++ to WebAssembly), TaskManager demo.
- A live server-status panel is wanted; it needs a small public read-only status endpoint on the home server (not yet built). Must never expose secrets or internal addresses.
- Light and dark themes exist and must stay.

## Brand Commitments

- Headline line: "I build software the way I used to build houses" (owner likes it).
- The earlier drafting/construction-drawing look on `main` (cream paper, safety orange, heavy grotesk capitals, § section numbers, title block footer) is liked; the owner wants it developed further, not replaced. The clean neutral card look (PR #3) was rejected.
- Initials mark "XG".

## Evidence on Hand

- Client sites, featuring approved by both owners: AZ Clean (azclean.gr, Athens) and WAY Empowerment (wayempowerment.com, Kenya NGO).
- Experience: Software Engineer Intern at Mercell (Copenhagen); construction site supervisor in Toronto; Seneca Polytechnic.
- Projects and write-ups in `src/i18n/locales/en.js` and `src/data/projects.js`: Train Yard Manager, TaskManager API, Resume Classifier, Inventory CRUD, ArenaCore, aoda-scan (npm), this portfolio.
- Home server repo: github.com/XenofonGk/Home-server (private).
- No testimonials, metrics, or client quotes exist; do not invent any.

## Product Principles

1. Show, don't claim: every claim links to something live, runnable or inspectable.
2. The trade story is the differentiator; use it structurally, not as decoration.
3. Built and operated: give code and operations equal weight.
4. Honest numbers only; no invented stats.
5. Fast, accessible, and translatable, because that is part of the proof.

## Accessibility & Inclusion

WCAG 2.1 AA with zero axe-core violations (enforced in CI); reduced-motion respected; six languages including Greek, Hindi and Chinese scripts.
