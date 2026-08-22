# SEO Checklist — rishavacharya.dev

Positioning: **Software Engineer II at Tessitura Network, infrastructure & observability.**
Keep this file in sync with `components/Seo/Seo.tsx` — that component is the source of truth.

## ✅ In place

### Meta & indexing
- [x] Title: "Rishav Acharya | Software Engineer — Infrastructure & Observability"
- [x] Meta description matching the About copy
- [x] Canonical `https://rishavacharya.dev/` — trailing slash matches the sitemap `<loc>`
- [x] `robots`: `index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1`
      (set via next-seo `robotsProps`, not a hand-written meta — a second `robots`
      tag collides with the one next-seo emits)
- [x] Keywords trimmed to 8 terms that appear in the page copy
- [x] `robots.txt` valid (no stray leading line) and points at the sitemap
- [x] `sitemap.xml` generated at build time by `scripts/generate-sitemap.js`,
      `lastmod` derived from the last commit

### Social
- [x] `og:type: profile` with `profile:first_name` / `last_name` / `username`
- [x] OG image 1200×630 with alt text
- [x] Twitter `summary_large_image`, `@345Rishav` (site + creator)

### Structured data
- [x] `@graph` with `Person` + `WebSite` + `ProfilePage`, cross-linked by `@id`
- [x] `email` as its own property (not stuffed into `sameAs`, which takes profile URLs only)
- [x] `hasCredential` for the Datadog APM cert and both AWS Cloud Quest badges
- [x] `hasOccupation` with O*NET code 15-1252.00

### Technical / Core Web Vitals
- [x] `font-display: swap` on all five `@font-face` rules
- [x] `sizes` on the `fill` hero image — without it the browser preloads the
      3840w candidate for a ≤300px box
- [x] Single `<main>` per document (`_app.tsx` owns it; pages must not add another)
- [x] One `<h1>`, sections use `<h2>` via `SectionTitle`, projects use `<h3>`
- [x] Web manifest linked from `_document.tsx` with 192px + 512px PNG icons
- [x] `apple-touch-icon`
- [x] `preconnect` + `dns-prefetch` to googletagmanager
- [x] Security headers + CSP in `next.config.js`
- [x] Compression on, `x-powered-by` off, WebP/AVIF enabled

## 🔧 Open items

### Needs an account, not a code change
- [ ] Verify the property in **Google Search Console** and submit the sitemap
- [ ] Same for **Bing Webmaster Tools**
- [ ] Confirm GA4 is receiving events through GTM container `GTM-TCGRVK9`
- [ ] Run PageSpeed Insights against production and record the field CWV numbers

### Repo hygiene
- [ ] `public/images/` carries ~18 MB of unreferenced assets
      (`8by8.gif`, `randompage.gif`, `SearchPage.gif`, `aws0.jpg`, `logo.png`).
      They are never served, so they cost deploy size rather than page speed —
      delete if the case-study sections that used them are not coming back.
- [ ] `profile.jpg` is a 2.2 MB source. `next/image` downsizes it on delivery,
      so this is build cost only, but a 1000px source would do.

### Content — the real lever
The site is a single page with no crawlable depth beyond it. Rankings for
anything other than the name query need more indexable content:
- [ ] Write-ups on the observability/chaos engineering work (own URLs, not anchors)
- [ ] Project case studies with actual numbers
- [ ] Talks as individual pages so they can rank on their own titles

## 🎯 Target keywords

**Name (primary):** "Rishav Acharya", "Rishav Acharya engineer", "Rishav Acharya Tessitura"

**Topical:** infrastructure engineer, observability engineer, chaos engineering,
Datadog APM, distributed tracing, site reliability engineer, AI infrastructure

Realistically the name query is winnable now; topical terms are not without the
content work above.

## 🔄 Maintenance

- Anything touching title/description/schema → update `components/Seo/Seo.tsx`, then this file
- Adding a route → add it to `routes` in `scripts/generate-sitemap.js`
- Re-validate schema after edits: https://validator.schema.org/
