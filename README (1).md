# Movement Publisher – Landing Page

React + Vite + Tailwind CSS landing page, rebuilt from the original Base44 source.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output in dist/
```
Requires Node 18+.

## Deploy (Vercel)
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- The repo root must contain `index.html`, `package.json` and the `src/` folder.

## Folder structure
```
index.html
package.json, vite.config.js, tailwind.config.js, postcss.config.js
public/                 <- put images/PDFs here (see below)
src/
  main.jsx, App.jsx, index.css
  pages/Landing.jsx     <- section order
  components/landing/   <- all sections (copied from the original)
  components/ui/        <- Image + helpers (helpers are stubs)
  data/                 <- team.js, featuredWorks.js
  api/base44Client.js   <- STUB, connect your own backend
```

## Files copied exactly from the original (HAR export)
LandingNav, Hero, FeaturedThisWeek, About, WhyUs, WhyTrustUs, CaseStudies, Portfolio,
Testimonials, VideoReviews, TeamSnippet, ResourcesCTA, NewsletterSignup, NewsletterPopup,
LandingFooter, BrandLogo, ChapterPreview, ui/image.jsx

## Reconstructed (were NOT in the export)
Reveal.jsx, AnimatedText.jsx, TeamSocialLinks.jsx, data/team.js, data/featuredWorks.js,
Landing.jsx, ui/responsive-image.jsx, ui/image-helpers.js, base44Client.js,
index.css, tailwind.config.js. Replace with the originals if you can export them.

## Add these files to `public/`
- brand-logo.png
- hero-claimed-fae-1200.png
- sold-to-the-demon-prince-wrap.png
- claimed-by-the-fae-wrap.png
- kingdom-of-hollow-souls.pdf

## Known gaps
- Links to /about, /services, /portfolio, /resources, /login, /register, /book-consultation have no pages yet.
- Newsletter form and sign-in check do nothing until `base44Client.js` is connected.

## Troubleshooting
- `Rollup failed to resolve import "/src/main.jsx"` -> the `src/` folder is missing from your repo. Check it on GitHub.
