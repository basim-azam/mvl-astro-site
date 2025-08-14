# MVL – Astro + MDX Lab Site

Minimal, elegant lab website inspired by Phantom. Text-first pages, honeycomb home, UniMelb navy palette.

## Local dev
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a repo (e.g., `mvl-astro-site`) and push these files.
2. Update `site` in `astro.config.mjs` to your username.
3. Create a `main` branch and push.
4. GitHub Actions will build & publish to Pages automatically.

## Content
- Edit Markdown in `src/content/{people,research,news,data,opportunities}`.
- Home page uses `src/news.json` for the News strip (with optional `media` GIF/thumb).

## Styling
- Main CSS in `public/style.css` (honeycomb & hover outer-loop included).
