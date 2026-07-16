# Fernando Sandoval — CV / Portfolio

Single-page personal CV site for Fernando Sandoval (AI Specialist), rebuilt in
**React + TypeScript + Vite + Tailwind CSS v4** from the Claude Design HTML
prototype.

## Features

- **4 switchable visual styles**: Aurora (default), Editorial, Neon, Brutal — cycled from the nav.
- **Light / dark theme** toggle.
- **Bilingual ES / EN** toggle (all copy lives in [src/data/content.ts](src/data/content.ts)).
- Animated hero: gradient-sheen name, interactive particle **constellation** canvas, floating orbs, mouse-follow glow, count-up stats.
- Scroll-reveal sections, magnetic buttons, 3D-tilt project cards, dual marquee, timeline experience, and a project **modal** with per-project animated demo previews (chat / doc / list / chart / terminal / grid).

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
  App.tsx                  # layout + wires interaction hooks
  types.ts                 # shared types
  context/SiteContext.tsx  # theme / lang / style / modal state
  data/content.ts          # all localized copy + CV data
  hooks/                   # useInteractions, useConstellation
  components/              # Nav, Hero, Marquee, About, Experience,
                           # Projects, Modal, Skills, Education, Contact, ...
  styles/theme.css         # CSS variables + all 4-style overrides + animations
```

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
