# Xenofon Gkioka — Portfolio

React + Vite build of the portfolio site. Blueprint-drafting design theme.

## Local dev

```bash
npm install
npm run dev
```

## Structure

```
src/
  App.jsx              # assembles all sections
  index.css            # design system (colors, type, layout — all in CSS variables)
  components/
    Nav.jsx
    Hero.jsx
    About.jsx
    Experience.jsx      # edit `jobs` array to update work history
    Skills.jsx           # edit `categories` array
    Projects.jsx          # edit `projects` array — update repo links here
    Contact.jsx
    Footer.jsx
```

To update content (new job, new project, new skill), you don't touch CSS or layout —
just edit the data arrays at the top of the relevant component file.

## Deploying to XenofonGk.github.io

This repo is set up to deploy automatically via GitHub Actions on every push to `main`.

**One-time setup:**

1. Push this code to your `XenofonGk.github.io` repository (this whole folder, not just `dist/`).
2. In that repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys
   automatically. Check the **Actions** tab to watch it run.
4. Site goes live at `https://XenofonGk.github.io` a minute or two later.

**After that**, every time you edit a component and push to `main`, the site
rebuilds and redeploys on its own — no manual `npm run build` + copy step needed.

## Before going live

- [ ] Confirm your GitHub repo names actually match the links in `Projects.jsx`
      (currently pointing at `xenofongk/DotNet` and `xenofongk/Cpp`)
- [ ] Double check `linkedin.com/in/xenofongkioka` is your real profile URL
- [ ] Swap in your actual Mercell accessibility total (400 out of how many?) once you have it
