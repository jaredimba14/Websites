# Deploying the Elite VitaMed static site

The site is a prerendered multi-page static site. Every route is a real HTML page
(`/botox-neurotoxins/index.html`, `/iv-drips/index.html`, …) generated from the SPA source.

## Editing content
1. Edit content in `assets/app.js` (page templates / `pageMeta` SEO titles) or the shell in
   `template.html` (header, nav, footer, head tags). **Do not edit `index.html` or the
   generated route folders by hand — they are build output and get overwritten.**
2. Bump the cache version in `template.html` if you changed `assets/app.js`,
   `assets/styles.css`, or `assets/injectables-assessment.js` (the `?v=NN` query).
3. Rebuild: `node build.mjs`
4. Commit and push (GitHub Pages staging), then upload to Bluehost for production.

## What the build generates
- `/index.html` (home) + ~39 route folders, each with per-page title/description/canonical/OG
- `sitemap.xml` (37 URLs), `robots.txt`, `404.html`, `.htaccess`
- All canonical/OG URLs point at `https://elitevitamedaesthetics.com/` (SITE_BASE in build.mjs)

## Bluehost go-live
1. Run `node build.mjs`, commit, push.
2. Upload the repo contents to `public_html` on Bluehost, **excluding**: `.git/`, `.claude/`,
   `node_modules/`, `template.html`, `build.mjs`, `*.md` files. Everything else (index.html,
   route folders, assets/, sitemap.xml, robots.txt, 404.html, .htaccess, .nojekyll) goes up.
3. This replaces the WordPress site. Old WordPress URLs will 404 to `404.html`, which
   redirects legacy `#route` links to the right page.
4. After go-live: verify a few pages, submit `https://elitevitamedaesthetics.com/sitemap.xml`
   in Google Search Console, and confirm the GHL webhooks receive a test lead.

## Staging
GitHub Pages serves the same output at https://jaredimba14.github.io/Websites/ (relative
paths make it work under the subpath). Note canonicals point at the production domain by design.
