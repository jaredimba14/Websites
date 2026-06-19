# Elite VitaMed Website Rules

## Scope
- Treat this repo as a static Tailwind prototype that will later map to WordPress Elementor and GHL.
- Keep changes focused. Do not invent final URLs, reviews, ratings, membership benefits, or medical claims.
- Preserve hash routes in the prototype (`#home`, `#services`, `#injectables`, `#assessment`, `#memberships`, `#results`, `#faq`, `#contact`).

## Design System
- Use logo-matched navy backgrounds, champagne accents, ivory or white content areas, restrained borders, and SVG icons.
- Headings: `Cormorant Garamond`, weight `600`.
- Body, paragraphs, and bullets: `Roboto Condensed`.
- Buttons and controls: `Inter`, weight `500`, uppercase, single-line labels.
- Keep sections elegant and conversion-focused. Avoid crowded navigation, excessive cards, and generic AI-style gradients.
- Keep layouts responsive, mobile-first, and free of horizontal overflow.

## Interaction Rules
- Preserve the two-row desktop navigation, mobile drawer, clickable top-level menu routes, and mega menus.
- Keep CTA paths consistent: booking, treatment assessment, and phone consultation.
- Use subtle card hover and section reveal motion. Avoid parallax.
- Hero particles use the NASA-style `particles.js` preset. Do not add click-spawn behavior or allow duplicate canvases after route changes.
- Use accessible markup, keyboard-friendly controls, inline form errors, and visible focus states.

## Integration Rules
- Keep booking, Cherry financing, and Google Reviews links as clearly marked placeholders until real URLs are provided.
- Keep the Contact form local-only until GHL wiring is approved.
- Use compliance-aware language: consultation required, provider evaluation determines the plan, and individual results vary.
- Before publishing, test desktop and mobile routes, dropdowns, CTA labels, form validation, assets, and particle canvas cleanup.

