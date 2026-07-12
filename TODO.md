# Elite VitaMed Website TODO

## Done (live on elitevitamedaesthetics.com)
- All pages built from approved copy; site converted from hash-SPA to a prerendered
  multi-page static site (40 real URLs, per-page SEO, sitemap, robots, .htaccess).
- Injectables assessment: per-area Botox breakdown, age/first-timer logic, cost-ordered
  plan tiers, groups/range corresponding to the plans, question descriptions, New Client
  Special pricing strip, 29-char shareable results links (legacy links still decode).
- GHL integrations: assessment webhook (consent-gated, `injectable_assessment` tag,
  3 plans + LEAD SOURCE attribution in notes, `results_link` custom field), contact-form
  webhook (`contact_form` tag, message + lead source in notes), GHL booking embeds with
  context-aware CTAs, Cherry apply links + floating widget.
- Lead-source attribution: first-touch landing page / referrer / UTM captured per session
  and sent in both payloads (structured fields + notes block).
- Performance: precompiled Tailwind (CDN removed), minified JS/CSS, self-hosted fonts +
  particles, per-page scripts, deferred Cherry, LCP preload + responsive hero, gzip +
  1-year immutable caching. Mobile QA: no overflow at 375px, tap targets fixed.
- Contact page: real hours (8am-7pm, by appointment), service-area copy, real phone/email.

## Build (Claude, when asked)
- Meta Pixel base code on all pages once the Pixel ID is provided (PageView/audiences
  layer; Lead conversions come from GHL CAPI — do not double-fire Lead in the browser).
- Optional: set the URL to the lead's #r/<code> after submitting the assessment so
  refresh/bookmark keeps their results (offered, awaiting decision).
- Review Home and Treatments copy against the latest approved wording.
- Light QA remainder: cross-browser spot-check (Safari/iOS), FAQ accordions, form
  error states on mobile.

## Waiting on client/provider (content)
- **Real Google reviews + Reviews URL** — the 6 quotes and "5.0 / 100+ reviews" are
  invented placeholders; replace before running ads (compliance risk for a medical
  business). "Read More Reviews" still points at a placeholder URL.
- **Privacy Policy + Terms pages** — footer links are placeholders; now collecting PII,
  consent, and (soon) Meta tracking, so these are launch-blocking for ads.
- Final consent wording (assessment checkbox + contact form) — provider-reviewed.
- Instagram/Facebook URLs (footer icons point to #contact).
- Confirmed membership names, pricing, benefits (page says "confirm before publishing").
- Founder portrait for About/hero (currently reuses the provider-consult photo).
- Specific NH towns served (optional; helps local SEO on the Contact page).

## Marketing/ops (user side, in GHL and Google)
- Google Search Console: verify the domain, submit https://elitevitamedaesthetics.com/sitemap.xml.
- Google Business Profile: create/claim, link the site — biggest local-SEO lever.
- Meta: Conversions API "Lead" action in both webhook workflows; point the custom
  conversion at the Lead event (in progress).
- Delete the ~16 "Test …" contacts in GHL once mapping/testing is finished.
- UTM-tag every outbound link (ads, social bios, GBP) so LEAD SOURCE attributes channels.
- Build the nurture sequences in GHL beyond the results SMS (follow-up cadence,
  booking reminders, review requests).

## Workflow reminder
Edit content in assets/app.js or template.html → `node build.mjs` → upload
elitevitamed-site.zip contents to public_html (see DEPLOY.md). Never hand-edit
index.html or the route folders.
