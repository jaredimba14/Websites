# Elite VitaMed — Image Specs

A reference for every image on the site: where it appears, how it's cropped, and the
recommended aspect ratio + export size. Use this when shooting or designing replacements.

## How images render (read first)
- **Photo tiles use CSS `background-size: cover`.** The image is scaled to fill the box and
  the overflow is cropped. **Keep the main subject centered** — top/bottom (or sides) get trimmed.
- **Export at ~2× the display size** for retina. The sizes below already include that headroom.
- **Format:** send high‑res **JPG or PNG** (or WebP). I re‑compress everything to **WebP** and
  resize on the way in, so don't worry about file size — prioritize quality and framing.
- **Logos:** must be **transparent PNG or WebP** (alpha), not JPG.
- **Where they live:** photo content images are currently **stock placeholders** referenced in the
  `images { }` map at the top of `assets/app.js` (no local files yet). When you send real photos
  I'll drop them in `assets/` and point the map at the local files. Logos/backgrounds already
  exist as files in `assets/`.

---

## 1. Logos — transparent background required
| File | Where it shows | Display size | Aspect | Export size |
|---|---|---|---|---|
| `assets/logo-stacked.webp` | Header (top‑left), mobile menu | ~60px tall | wide lockup ~**3:1** | **700 × 240**, transparent |
| `assets/logo-horizontal.webp` | Footer brand column | ~128px wide | currently ~**1:1** (square) | **500 × 500**, transparent |

> Note: despite the name, `logo-horizontal` renders roughly square today. If you have a true
> horizontal lockup, send it and I'll adjust the footer sizing to match.

---

## 2. Backgrounds & illustrations
| File | Where | Aspect | Export size | Notes |
|---|---|---|---|---|
| `assets/hero-glow.webp` | Hero background glow | wide **16:9** | 1920 × 1080 | Abstract glow/texture, not a photo — low priority |
| `assets/hero-portrait-warm.webp` | Home hero, right side | portrait **4:5** | 1200 × 1500 | Warm‑toned portrait (cutout works well) |
| `assets/treatment-face-map.webp` | Facial map: home hero preview, all treatment maps, injectables quiz | portrait **3:4** | 1100 × 1450 | **Front‑facing, centered face** illustration/diagram — interactive markers are positioned on it, so it must stay front‑facing and centered |

---

## 3. Photo content images (the `images{}` keys)
These are the stock placeholders to replace with real Elite VitaMed photography. Several keys are
**reused at different crops**, noted in "Shown as" — center the subject so every crop works.

| Key | Subject | Used in | Shown as | Recommended ratio | Export size |
|---|---|---|---|---|---|
| **tiana** | Founder / provider portrait | About hero, About "Meet Your Provider", Home (Tiana), Injectables‑quiz tail | both **tall portrait** (heroes) and **wide** (some sections) | **4:5** portrait, subject centered | **1200 × 1500** |
| **wellness** | Wellness / concierge moment | Treatments hero, Contact hero | tall **portrait** (up to ~31rem) | **3:4** | **1300 × 1700** |
| **assessment** | Consultation / reviewing goals | Home assessment cards, Home promo, **Treatment Assessment hero preview** | **wide banner** here, **tall** on the assessment page | **3:2**, subject dead‑center | **1500 × 1000** |
| **iv** | IV drip therapy | Home IV section, Home assessment card | landscape / wide banner | **3:2** | **1500 × 1000** |
| **results** | Refreshed result / treatment | Home injectables block, Results before/after cards | landscape ~**4:3** | **4:3** | **1200 × 900** |
| **clinic** | Treatment / concierge setting | Home concierge block | landscape ~**2:1** | **3:2** | **1400 × 950** |
| **injectables** | Injectable treatment in progress | Home assessment card (Injectable Treatment Assessment) | **wide banner ~2.2:1** | **16:9** | **1600 × 900** |
| **financing** | Lifestyle / payment‑freedom feel | Home financing band (spans 2 columns) | **very wide banner ~3.5:1** | **2:1** (or wider) | **1600 × 800** |
| **membership** | Membership / ongoing‑care feel | Home memberships block | ~**4:3** | **4:3** | **1200 × 900** |

### Card‑banner detail (Home "Get Provider Guided Direction" section)
The three cards there (`injectables`, `assessment`, `iv`) render the image as a **short wide banner
≈ 390 × 176 px desktop / full‑width on mobile (~2.2:1)** — so frame those subjects centered with
room to crop top and bottom.

---

## 4. Before & After gallery (Results page) — 6 slots
| Where | Per image | Notes |
|---|---|---|
| 6 cards in `resultsGalleryCards()` (3‑column grid, ~224px tall tile) | **4:3 or 1:1**, ~**1200 × 900** each | Real provider before/after photos. If you prefer a **side‑by‑side** before/after in one image, make it **16:9 (~1600 × 800)** and tell me — I'll widen those tiles to match. |

---

## 5. Don't bother creating
- **`filler`** — defined in the image map but **not used anywhere** on the site.

---

## Priority order (suggestion)
1. **tiana** (founder photo — appears on the most pages)
2. **Before/after gallery** (6 real result photos)
3. The home card banners: **injectables**, **assessment**, **iv**
4. **wellness**, **clinic**, **results**, **financing**, **membership**
5. Logos (only if you want sharper/updated lockups)

## Handing them back
Drop the files in `assets/` (any name/format) or just send them — tell me which key each maps to,
and I'll resize, convert to WebP, save them, and update the `images{}` map to use the local files.
