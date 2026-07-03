// Static-site generator: prerenders every SPA route into a real HTML page.
//
//   node build.mjs
//
// Reads template.html (the SPA shell) + assets/app.js (the page renderers) and writes
// /<route>/index.html for every route (home -> ./index.html), plus sitemap.xml, robots.txt,
// 404.html and .htaccess. Re-run after any content change, before pushing/uploading.
//
// URLs are written RELATIVE (../assets/..., ../route/) so the same output works at the
// domain root (Bluehost), under a subpath (GitHub Pages /Websites/ staging), and locally.
// Canonical/OG URLs are absolute to the production domain below.

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE_BASE = "https://elitevitamedaesthetics.com/";
const BOOK_SUBROUTES = ["injectables", "iv", "skin"];

// Compile Tailwind utilities into a static stylesheet (replaces the runtime CDN compiler).
console.log("Compiling Tailwind...");
execSync("npx -y tailwindcss@3.4.17 -c tailwind.config.js -o assets/tailwind.css --minify", {
  cwd: ROOT,
  stdio: ["ignore", "ignore", "inherit"]
});

// Minify the served JS/CSS (sources stay as-is; pages reference the .min files).
console.log("Minifying JS/CSS...");
execSync(
  "npx -y esbuild assets/app.js assets/injectables-assessment.js --minify --outdir=assets --out-extension:.js=.min.js" +
    " && npx -y esbuild assets/styles.css --minify --outfile=assets/styles.min.css",
  { cwd: ROOT, stdio: ["ignore", "ignore", "inherit"], shell: true }
);

const template = fs.readFileSync(path.join(ROOT, "template.html"), "utf8");
const appSource = fs.readFileSync(path.join(ROOT, "assets", "app.js"), "utf8");
const quizSource = fs.readFileSync(path.join(ROOT, "assets", "injectables-assessment.js"), "utf8");

// Evaluate the site scripts for one route and return { pages, pageMeta, headerKickerFor }.
// A fresh context per route so load-time values (ctas / booking links) match the route.
function evaluateFor(routePath) {
  const sandbox = {
    window: {},
    console,
    location: { pathname: `/${routePath ? routePath + "/" : ""}`, hash: "", search: "", origin: SITE_BASE.replace(/\/$/, "") }
  };
  vm.createContext(sandbox);
  vm.runInContext(quizSource, sandbox, { filename: "injectables-assessment.js" });
  vm.runInContext(
    "if (typeof INJECTABLES_ASSESSMENT_HTML === 'undefined' && window.INJECTABLES_ASSESSMENT_HTML) { globalThis.INJECTABLES_ASSESSMENT_HTML = window.INJECTABLES_ASSESSMENT_HTML; }",
    sandbox
  );
  vm.runInContext(appSource + "\n;globalThis.__out = { pages, pageMeta, headerKickerFor };", sandbox, { filename: "app.js" });
  return sandbox.__out;
}

const { pages: basePages, pageMeta } = evaluateFor("");
const ROUTE_KEYS = Object.keys(basePages);
const DEFAULT_DESCRIPTION = "Premium mobile concierge injectables, IV therapy, and wellness care in New Hampshire.";
const EXTRA_META = {
  book: { title: "Book Your Appointment | Elite VitaMed Aesthetics", description: "Book mobile Botox, fillers, IV drip therapy, and skin treatments in New Hampshire online. Care performed by a Nurse Practitioner and certified injector." },
  "book/injectables": { title: "Book An Injectable Appointment | Elite VitaMed Aesthetics", description: "Book Botox, dermal fillers, PDO threads, and facial balancing appointments in New Hampshire online." },
  "book/iv": { title: "Book IV Therapy | Elite VitaMed Aesthetics", description: "Book mobile IV drip therapy, NAD+ therapy, and vitamin injection appointments in New Hampshire online." },
  "book/skin": { title: "Book A Skin Treatment | Elite VitaMed Aesthetics", description: "Book skin rejuvenation and tightening treatments in New Hampshire online." }
};

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function prettifyRoute(route) {
  const caps = { iv: "IV", prp: "PRP", prf: "PRF", pdo: "PDO", nad: "NAD+" };
  return route.split("-").map((w) => caps[w] || w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function metaFor(routePath, routeKey) {
  if (EXTRA_META[routePath]) return EXTRA_META[routePath];
  const meta = pageMeta[routeKey];
  if (meta) return meta;
  return { title: `${prettifyRoute(routeKey)} | Elite VitaMed Aesthetics`, description: DEFAULT_DESCRIPTION };
}

// Rewrite legacy hash/index.html#... internal links and document-relative asset URLs.
function rewriteLinks(html, prefix, routeKey) {
  // Longest keys first so "#injectables-assessment" wins over "#injectables".
  const keys = [...ROUTE_KEYS].sort((a, b) => b.length - a.length);
  let out = html;

  for (const key of keys) {
    const target = key === "home" ? prefix : `${prefix}${key}/`;
    // href="#key" / href="index.html#key" (exact)
    out = out.replace(new RegExp(`href="(?:index\\.html)?#${key}"`, "g"), `href="${target}"`);
    // href="#key/section" / href="index.html#key/section"
    out = out.replace(new RegExp(`href="(?:index\\.html)?#${key}/([^"]+)"`, "g"), (m, rest) => {
      if (key === "book" && BOOK_SUBROUTES.includes(rest)) return `href="${prefix}book/${rest}/"`;
      // Section links to the page being generated become plain anchors (no reload). The
      // placeholder keeps later route-key passes from re-consuming the anchor (e.g.
      // "#assessment" on the quiz page must not become a link to /assessment/).
      if (key === routeKey && key !== "book") return `href="#__anchor__${rest}"`;
      if (key === "home") return `href="${prefix}#${rest}"`;
      return `href="${prefix}${key}/#${rest}"`;
    });
  }
  out = out.replace(/#__anchor__/g, "#");

  // Cross-page contact intents become /contact/?intent=<value>#contact-form.
  out = out.replace(/<a\b[^>]*>/g, (tag) => {
    const intent = tag.match(/data-contact-intent="([^"]+)"/);
    if (!intent) return tag;
    return tag.replace(/href="([^"]*)contact\/(?:#contact-form)?"/, `href="$1contact/?intent=${intent[1]}#contact-form"`);
  });

  // Document-relative assets (src/href/srcset and the SVG image href).
  out = out.replace(/(src|href)="\.\/assets\//g, `$1="${prefix}assets/`);
  out = out.replace(/url\((['"]?)\.\/assets\//g, `url($1${prefix}assets/`);
  return out;
}

function buildPage(routePath, routeKey) {
  const depth = routePath ? routePath.split("/").length : 0;
  const prefix = depth ? "../".repeat(depth) : "./";
  const { pages, headerKickerFor } = evaluateFor(routePath);
  const meta = metaFor(routePath, routeKey);
  const canonical = SITE_BASE + (routePath ? routePath + "/" : "");
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  let html = template;
  // The template may reference the old GitHub Pages base; normalize to the production domain.
  html = html.replaceAll("https://jaredimba14.github.io/Websites/", SITE_BASE);
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = html.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/s, `$1${description}$2`);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);
  html = html.replace(/(<strong id="header-kicker-title">)[^<]*(<\/strong>)/, `$1${escapeHtml(headerKickerFor(routeKey))}$2`);

  const appHtml = pages[routeKey]();
  html = html.replace(
    /<main id="app"([^>]*)><\/main>/,
    (m, attrs) => `<main id="app"${attrs} data-prerendered="${routeKey}">${appHtml}</main>`
  );

  // Serve the minified bundles.
  html = html.replace('src="./assets/app.js?', 'src="./assets/app.min.js?');
  html = html.replace('src="./assets/injectables-assessment.js?', 'src="./assets/injectables-assessment.min.js?');
  html = html.replace('href="./assets/styles.css?', 'href="./assets/styles.min.css?');

  // Page-specific scripts: the quiz bundle only on its page, the GHL iframe-resizer only
  // where GHL widgets are embedded (/book/*). particles.js stays on EVERY page — the
  // treatment/detail heroes render particle canvases too, not just the home hero.
  if (routeKey !== "injectables-assessment") {
    html = html.replace(/[ \t]*<script[^>]*injectables-assessment\.min\.js[^>]*><\/script>\r?\n?/, "");
  }
  if (routeKey !== "book") {
    html = html.replace(/[ \t]*<script[^>]*form_embed\.js[^>]*><\/script>\r?\n?/, "");
  }

  // Preload the home hero portrait — it is the LCP element.
  if (routeKey === "home") {
    html = html.replace(
      '<link rel="stylesheet" href="./assets/tailwind.css',
      '<link rel="preload" as="image" href="./assets/hero-portrait-warm.webp" fetchpriority="high" />\n    <link rel="stylesheet" href="./assets/tailwind.css'
    );
  }

  html = rewriteLinks(html, prefix, routeKey);

  const outFile = routePath ? path.join(ROOT, ...routePath.split("/"), "index.html") : path.join(ROOT, "index.html");
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  return { routePath: routePath || "(root)", bytes: html.length, title: meta.title };
}

// --- Generate all pages ---
const outputs = [];
outputs.push(buildPage("", "home"));
for (const key of ROUTE_KEYS) {
  if (key === "home") continue;
  outputs.push(buildPage(key, key));
}
for (const sub of BOOK_SUBROUTES) {
  outputs.push(buildPage(`book/${sub}`, "book"));
}

// --- sitemap.xml (book sub-menus excluded: thin variants of /book/) ---
const sitemapUrls = ["", ...ROUTE_KEYS.filter((k) => k !== "home").map((k) => `${k}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
  .map((u) => `  <url><loc>${SITE_BASE}${u}</loc><changefreq>monthly</changefreq><priority>${u === "" ? "1.0" : "0.8"}</priority></url>`)
  .join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

// --- robots.txt ---
fs.writeFileSync(path.join(ROOT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_BASE}sitemap.xml\n`);

// --- 404.html: redirect legacy #route links, otherwise offer the homepage ---
const routesJson = JSON.stringify(ROUTE_KEYS);
fs.writeFileSync(
  path.join(ROOT, "404.html"),
  `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Page Not Found | Elite VitaMed Aesthetics</title>
<meta name="robots" content="noindex" />
<style>body{font-family:Georgia,serif;background:#fbf7ee;color:#06324a;display:grid;place-items:center;min-height:100vh;margin:0;text-align:center;padding:2rem}a{color:#b88a44}</style>
</head>
<body>
<div>
  <h1>Page not found</h1>
  <p>The page you were looking for has moved.</p>
  <p><a href="/">Go to the Elite VitaMed homepage</a></p>
</div>
<script>
  (function () {
    var routes = ${routesJson};
    var raw = (location.hash || "").replace(/^#/, "");
    var route = raw.split("/")[0];
    if (routes.indexOf(route) >= 0) location.replace("/" + (route === "home" ? "" : route + "/"));
  })();
</script>
</body>
</html>
`
);

// --- .htaccess (Bluehost/Apache) ---
fs.writeFileSync(
  path.join(ROOT, ".htaccess"),
  `ErrorDocument 404 /404.html
Options -Indexes

# Clean URLs: redirect any direct /route/index.html request to /route/
RewriteEngine On
RewriteCond %{THE_REQUEST} \\s/+(.*/)?index\\.html[\\s?]
RewriteRule ^(.*/)?index\\.html$ /$1 [R=301,L]

# Compress text assets
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain application/javascript application/json image/svg+xml application/xml
</IfModule>

# Cache static assets (CSS/JS are cache-busted with ?v=, images are immutable content)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>
<IfModule mod_headers.c>
  <FilesMatch "\\.(css|js|webp|png|jpe?g|svg|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "no-cache"
  </FilesMatch>
</IfModule>
`
);

console.log(`Generated ${outputs.length} pages:`);
for (const o of outputs) console.log(`  /${o.routePath === "(root)" ? "" : o.routePath + "/"}  (${o.bytes.toLocaleString()} bytes)  ${o.title}`);
console.log("Plus: sitemap.xml (" + sitemapUrls.length + " urls), robots.txt, 404.html, .htaccess");
