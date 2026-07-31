# Xenofon Gkioka — Portfolio

React + Vite portfolio site, blueprint-drafting design theme.
Live at **[xenofongk.github.io](https://xenofongk.github.io)**.

## Local dev

```bash
npm install
npm run dev
```

`npm run build` outputs to `dist/`; `npm run preview` serves that build locally.

## Structure

```
src/
  App.jsx              # assembles all sections
  index.css            # design system (colors, type, layout — all in CSS variables)
  components/
    Nav.jsx
    Hero.jsx
    About.jsx           # edit `specs` array
    Experience.jsx      # edit `jobs` array to update work history
    Skills.jsx          # edit `categories` array
    Projects.jsx        # edit `projects` array — update repo links here
    Contact.jsx
    Footer.jsx
```

To update content (new job, new project, new skill), you don't touch CSS or layout —
just edit the data array at the top of the relevant component file.

## Deploying

`.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`.
It runs `npm ci && npm run build` and uploads `dist/` via `actions/deploy-pages`.

This requires **Settings → Pages → Source → "GitHub Actions"** on this repo. If Pages is
instead set to "Deploy from a branch", GitHub serves the repo root as static files — which
means it serves `index.html` pointing at `/src/main.jsx`, the browser refuses to execute it
as `text/jsx`, and the site renders as a blank page. The build step is not optional.

To watch a deploy, use the **Actions** tab. To redeploy without pushing, run the workflow
manually from there (`workflow_dispatch`).
