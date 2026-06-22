# DEPLOYMENT.md

Deployment guide for **Anup Kumar Jena's** Formula 1‑themed developer portfolio.

---

## Project Overview

A single‑page React portfolio showcasing skills, projects, experience, and contact information — styled with a Formula 1 motorsport aesthetic. Built for performance and deployed as a static site.

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | React 19                            |
| Build Tool   | Vite 8                              |
| Styling      | Tailwind CSS 4 (Vite plugin)        |
| Linting      | ESLint 10 + React Hooks / Refresh   |
| Hosting      | Vercel (recommended)                |
| Node Version | 20 LTS (recommended)               |

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev
```

Vite serves the app with Hot Module Replacement enabled. Edits to components are reflected instantly.

## Production Build

```bash
# Create optimised bundle in ./dist
npm run build

# Preview the production build locally (http://localhost:4173)
npm run preview
```

The `dist/` directory contains the fully self‑contained static site ready for deployment.

### Pre‑deployment Checklist

1. **Replace domain placeholders** — search‑and‑replace `https://your-domain.com` with your actual domain in:
   - `index.html` (canonical, og:url, og:image, twitter:image)
   - `public/robots.txt`
   - `public/sitemap.xml`
2. **Run lint** — `npm run lint` and resolve any warnings.
3. **Build check** — `npm run build` must exit with code 0.
4. **Whitespace check** — `git diff --check` should report no trailing whitespace.

## Vercel Deployment

### Quick Deploy

1. Push your repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto‑detects the Vite framework — no configuration changes needed.
4. Click **Deploy**.

### Vercel Settings (auto‑detected)

| Setting          | Value          |
| ---------------- | -------------- |
| Framework Preset | Vite           |
| Build Command    | `vite build`   |
| Output Directory | `dist`         |
| Install Command  | `npm install`  |

### Environment Variables

No environment variables are required for this project.

### Redeployments

Every push to the production branch triggers an automatic rebuild on Vercel.

## Custom Domain Setup

1. In **Vercel Dashboard → Project → Settings → Domains**, add your domain (e.g. `anupjena.dev`).
2. Vercel provides DNS records to configure:
   - **A Record** → `76.76.21.21`
   - **CNAME** → `cname.vercel-dns.com` (for `www` subdomain)
3. Once DNS propagates, Vercel automatically provisions a TLS certificate.
4. **After** your domain is live, update all `https://your-domain.com` placeholders:
   - `index.html` — canonical URL, og:url, og:image, twitter:image
   - `public/robots.txt` — sitemap URL
   - `public/sitemap.xml` — `<loc>` entry

## Updating Portfolio Content

### Projects

Edit the `projects` array in `src/components/Projects.jsx`. Each entry has:

```js
{
  name: 'GRAND PRIX DE …',     // Project title (F1 race format)
  position: 'P1',               // Display rank
  accent: '#FFD700',            // Accent colour
  status: 'DEPLOYED',           // Status badge text
  tech: ['React', '…'],        // Tech stack chips
  description: '…',            // Short description
}
```

### Experience

Edit `src/components/Experience.jsx` — roles are defined inline.

### Skills

Edit `src/components/Skills.jsx` — skill categories and individual items are defined inline.

### About

Edit `src/components/About.jsx`.

### Contact

Edit `src/components/Contact.jsx`.

### After Content Changes

1. Run `npm run build` to verify the build still passes.
2. Update `<lastmod>` in `public/sitemap.xml` to the current date.
3. Commit and push — Vercel will auto‑deploy.

## Troubleshooting

### Build Fails

```
error during build
```

- Run `npm run lint` first and fix any errors.
- Ensure `node_modules` is fresh: `rm -rf node_modules && npm install`.
- Confirm Node.js >= 20.

### Blank Page After Deploy

- Open browser DevTools Console — look for 404 errors on assets.
- Verify Vercel's **Output Directory** is set to `dist`.
- Check that `index.html` references `/src/main.jsx` (Vite resolves this at build time).

### Favicon Not Showing

- Ensure `public/favicon.svg` exists and is committed.
- Hard‑refresh (`Ctrl+Shift+R` / `Cmd+Shift+R`) to clear browser cache.
- Verify the `<link rel="icon">` tag in `index.html` points to `/favicon.svg`.

### Styles Missing / Broken

- Tailwind CSS v4 uses the Vite plugin — make sure `@tailwindcss/vite` is in `devDependencies`.
- Verify `@import "tailwindcss";` is present at the top of `src/index.css`.

### OG / Social Previews Not Updating

- Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) or [Twitter Card Validator](https://cards-dev.twitter.com/validator) to force a cache refresh.
- Ensure all `og:` and `twitter:` meta tags in `index.html` have absolute URLs.

### CORS or Mixed Content

- Ensure all external links use `https://`.
- All external `<a>` tags should have `target="_blank" rel="noopener noreferrer"`.
