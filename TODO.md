# Elite VitaMed Website TODO

## Done
- Results, Memberships, Contact, Treatment Assessment, and FAQ pages built from approved copy.
- Injectables assessment integrated as SPA route `#injectables-assessment` with plain-English question descriptions.
- Assessment → GoHighLevel webhook: auto-send on completion (JSON POST), required consent checkbox, `injectable_assessment` tag, 3 plans in notes, shareable results link (short-encoded, `#injectables-assessment/r/<code>`).
- Assessment engine: distinct cost-ordered plan tiers, Botox itemized per area, age + first-timer experience drive results, Minimum plan aims ~$500.
- GHL booking embedded (`#book` + per-category menus) with context-aware Book CTAs.
- Cherry: real apply URL wired on all financing buttons; floating widget embedded (production domain only).
- Real specials (Botox $9.99/unit, fillers $499/1ml, PDO $500/area, IV $50 off / 20% packages) + membership card, aligned CTAs.
- Real phone/email in footer + Contact page; developer credit; footer polish.
- SEO: real title/description, canonical, OG/Twitter + share image, MedicalBusiness JSON-LD, robots.txt, sitemap.xml, favicon from EVA logo.
- Dynamic header kicker per page; sample Google reviews (placeholder quotes).
- All pushed to origin/main through commit 6dde886.

## Next Priority (build)
- **Wire the Contact form to GHL** — it currently shows a local confirmation but submits nowhere (assets/app.js setupContactPage). Reuse the assessment webhook pattern (new GHL inbound webhook URL + tag, consent checkbox already present as placeholder).
- Placeholder/encoding sweep + full QA pass (mobile/tablet layouts, all CTAs, accordions, link check).
- Review Home and Treatments copy against latest approved wording.
- Wellness assessment (PolyMVA / Ozone / NAD+): plan approved (combined `#wellness-assessment`), waiting on provider clinical content (indications, safety screening, protocol tiers, pricing).

## Waiting on client/provider
- GHL workflow behind the assessment webhook: map fields, store `results_link` custom field, add note, SMS the lead their link (gate on consent). Then delete the ~12 "Test …" contacts.
- Final SMS/email consent wording (assessment + contact form).
- Real Google reviews (quotes, names, rating, count) + Google Reviews URL.
- Confirmed membership names, pricing, benefits.
- Business hours + service-area details (Contact page still has placeholders).
- Instagram/Facebook URLs (footer icons point to #contact).
- Privacy Policy + Terms content (footer legal links are placeholders).
- Founder portrait (tiana), and any additional before/after or treatment photos.
- Custom domain decision — when set, update canonical/OG URLs, JSON-LD, sitemap/robots (currently jaredimba14.github.io/Websites).

## WordPress And GHL (later phase)
- Translate approved sections into Elementor; map hash routes to page slugs.
- Per-page SEO metadata becomes real once routes are real URLs.
- Analytics + Meta tracking.

## QA Before Launch
- Desktop/tablet/mobile layouts, dropdowns, drawer, CTAs, FAQ accordions, Contact form states.
- One particle canvas after repeated navigation; accessibility, performance, compliance copy, final links.
- Keep images WebP and sized to display.
