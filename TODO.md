# Elite VitaMed Website TODO

## Done
- Results, Memberships, Contact, and Treatment Assessment built from approved copy (content-complete).
- Fixed cross-page CTA routing (`#contact/contact-form` deep link) so phone-consultation/booking CTAs reach the contact form instead of falling back to Home.
- Optimized image assets: converted hero/portrait/face-map/logo PNGs to WebP and resized oversized files (~6 MB -> ~0.36 MB); removed the unused `hero-concierge-cutout` asset.
- Integrated the injectables assessment quiz into the SPA as route `#injectables-assessment` (shares the real nav/footer/design); extracted its inline 1.2 MB base64 face map to `face-map-detailed.webp`. The old standalone `injectables_assessment.html` was removed.
- Built the FAQ page from approved copy (12 categories, 61 Q&As, intro + final CTA).
- Added sample Google reviews (5.0 / 100+ reviews, placeholder quotes — replace with verified reviews before launch) and embedded the Cherry floating estimator widget (renders on the production domain only).

## Next Priority
- Review Home and Treatments copy against the latest approved wording.
- Fix any remaining placeholder text or encoding artifacts.
- Cherry: add the full-page embed and wire "Apply For Cherry Financing" to the real Cherry apply URL.
- Replace footer phone/email/social/legal placeholders and the membership pricing/benefits with confirmed details.

## Content Needed
- Add final Google rating, review count, review quotes, names, and Reviews URL.
- Add real GHL booking calendar URL and Contact form integration.
- Add real Cherry financing URL.
- Confirm SMS and email consent wording.
- Confirm membership benefits and pricing.
- Add approved Tiana, before-and-after, treatment, IV therapy, and concierge images.

## WordPress And GHL
- Translate approved sections into Elementor containers, widgets, and global styles.
- Map prototype hash routes to WordPress page slugs.
- Connect Contact form intents, Treatment Assessment quizzes, recommendation pages, tags, pipeline stages, and follow-up automations in GHL.
- Add SEO metadata, internal links, schema, analytics, and Meta tracking.

## QA Before Launch
- Test desktop, tablet, and mobile layouts with no overflow or wrapped CTA labels.
- Test dropdowns, mobile drawer, all CTAs, FAQ accordions, and Contact form states.
- Confirm exactly one particle canvas after repeated route navigation.
- Run accessibility, performance, compliance-copy, and final link checks.
- Keep new image assets web-optimized (prefer WebP, size to display dimensions) so page weight stays low.
