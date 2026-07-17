# Fernando Sandoval — CV / Portfolio

Single-page personal CV site for Fernando Sandoval (AI Specialist), rebuilt in
**React + TypeScript + Vite + Tailwind CSS v4** from the Claude Design HTML
prototype.

## Features

- **4 switchable visual styles**: Aurora (default), Editorial, Neon, Brutal — cycled from the nav.
- **Light / dark theme** toggle.
- **Bilingual ES / EN** toggle (all copy lives in [src/data/content.ts](src/data/content.ts)).
- Animated hero: gradient-sheen name, interactive particle **constellation** canvas, floating orbs, mouse-follow glow, count-up stats.
- Scroll-reveal sections, magnetic buttons, 3D-tilt project cards, dual marquee, timeline experience.
- Each featured project links to its own **interactive demo page** (`/demo/:slug`) — a real chat, proposal generator, document extractor, lead scorer, prediction engine, local-LLM terminal and catalog search, each themed per visual style.

## Run

```bash
npm install
npm run dev      # dev server (http://localhost:5173)
npm run build    # typecheck + production build to dist/
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Structure

```
src/
  main.tsx                 # entry, wraps App in SiteProvider
  App.tsx                  # BrowserRouter shell + theme/style root wrapper
  types.ts                 # shared types
  context/SiteContext.tsx  # theme / lang / style state
  data/content.ts          # all localized copy + CV data
  hooks/                   # useInteractions, useConstellation
  components/              # Nav, Hero, Marquee, About, Experience,
                           # Projects, Skills, Education, Contact, ...
  pages/                   # HomePage ("/") and the per-project demo pages
                           # ("/demo/:slug"), sharing DemoShell as chrome
  styles/theme.css         # CSS variables + all 4-style overrides + animations
```

## Deploy to SiteGround

The site is a static Single-Page App (SPA) — build it locally, then upload
the contents of `dist/` to SiteGround. No Node.js is needed on the server.

1. **Build:**
   ```bash
   npm run build
   ```
   This produces `dist/` with `index.html`, hashed `assets/`, `favicon.svg`,
   and `.htaccess` (copied from `public/.htaccess` — it handles the SPA
   route fallback for `/demo/:slug`, gzip compression, and cache headers).

2. **Upload** the *contents* of `dist/` (not the folder itself) to:
   - `public_html/` if the site lives at your domain root
     (`https://tudominio.com/`), or
   - `public_html/subcarpeta/` if it lives in a subfolder
     (`https://tudominio.com/subcarpeta/`) — in that case also set
     `base: '/subcarpeta/'` in `vite.config.ts` and `RewriteBase
     /subcarpeta/` in `public/.htaccess` **before** building.

   Use SiteGround's Site Tools → **File Manager**, or an FTP/SFTP client
   (credentials under Site Tools → **Site → FTP Accounts**).

3. Make sure `.htaccess` actually uploaded — some FTP clients hide
   dotfiles by default. Without it, `/demo/rag` (and the other demo
   routes) will 404 on a direct visit or page refresh.

4. Visit the domain and click through a couple of `/demo/...` pages
   directly (not just via in-app navigation) to confirm the rewrite is
   working.

### Notes on the port

The prototype relied on attribute-substring CSS selectors (e.g.
`[style*="-radius:26px"]`) that match literal inline-style strings — fragile
under React, which serializes `style` objects differently. Those selectors were
replaced with explicit marker classes (`.rad-lg`, `.rad-sm`, `.bd-blur`,
`.surface-bg`, `.accent-soft-bg`, `.sectionnum`, `.btn-primary`, `.exp-period`,
`.marquee-mask`, …) applied in the JSX and targeted in
[src/styles/theme.css](src/styles/theme.css).

The original design bundle (HTML prototypes, screenshots, `image-slot.js`,
`support.js`) is preserved under [design-reference/](design-reference/).
