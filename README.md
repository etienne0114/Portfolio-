# Etienne Tuyihamye — Portfolio

Personal portfolio website built with **React + Vite** and **Framer Motion**, designed for deployment on **Vercel**.

## Local development

```bash
npm install
npm run dev      # http://localhost:5199
npm run build    # production build in dist/
```

## Deploy to Vercel

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add -A
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/etienne0114/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repository.
3. Vercel auto-detects **Vite** — accept the defaults (build: `npm run build`, output: `dist`) and deploy.

## Editing content

All text lives in one file: [`src/data/content.js`](src/data/content.js) — profile, skills, projects, experience, research interests and blog posts. Edit it without touching any components.

## Résumé

`public/resume.html` is a print-optimized résumé. Open it and press **Ctrl/Cmd+P → Save as PDF**, or replace the "Download résumé" link (`resumeUrl` in `content.js`) with `/resume.pdf` after dropping your own PDF into `public/`.

## Structure

```
src/
  data/content.js      # all portfolio content
  components/          # one component per section
  index.css            # design system (dark theme, CSS variables)
public/
  resume.html          # printable résumé
```
