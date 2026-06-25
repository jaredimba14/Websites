const images = {
  hero: "url('./assets/hero-glow.webp')",
  tiana: "url('./provider-consult.webp')",
  clinic: "url('./provider-consult.webp')",
  iv: "url('./iv.webp')",
  wellness: "url('./client-consult.webp')",
  results: "url('./client-consult.webp')",
  injectables: "url('./injectables.webp')",
  filler: "url('./client-consult.webp')",
  financing: "url('./provider-consult.webp')",
  assessment: "url('./assessment.webp')",
  membership: "url('./client-consult.webp')",
  beforeAfter1: "url('./before-after-1.webp')",
  beforeAfter2: "url('./before-after-2.webp')"
};

const iconPaths = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  sparkle: '<path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="M19 17l.8 2.2L22 20l-2.2.8L19 23l-.8-2.2L16 20l2.2-.8L19 17Z"/>',
  droplet: '<path d="M12 3s6 6.3 6 11a6 6 0 0 1-12 0c0-4.7 6-11 6-11Z"/><path d="M9.5 15.5c.7 1.3 1.8 2 3.4 2.1"/>',
  syringe: '<path d="m18 2 4 4"/><path d="m17 7 2-2"/><path d="m4 20 8-8"/><path d="m8 8 8 8"/><path d="m7 13 4 4"/><path d="m12 4 8 8-4 4-8-8 4-4Z"/>',
  leaf: '<path d="M20 4c-8 0-14 5-14 12 0 2.5 1.7 4 4 4 7 0 12-6 12-14 0-1.1-.9-2-2-2Z"/><path d="M4 20c4-7 8-10 16-14"/>',
  calendar: '<path d="M7 3v4"/><path d="M17 3v4"/><path d="M4 8h16"/><path d="M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/><path d="M8 12h3"/><path d="M13 12h3"/><path d="M8 16h3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  gem: '<path d="M6 3h12l4 6-10 12L2 9l4-6Z"/><path d="M2 9h20"/><path d="m12 21 4-12-4-6-4 6 4 12Z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'
};

function icon(name, classes = "") {
  return `<svg class="svg-icon ${classes}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${iconPaths[name] || iconPaths.sparkle}</svg>`;
}

function slug(title) {
  return String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Sample Google reviews (placeholder content — swap for verified reviews before launch).
const GOOGLE_REVIEWS = [
  { quote: "Tiana is so knowledgeable and made me feel comfortable the entire time. My results look completely natural, exactly what I hoped for.", name: "Ashley M." },
  { quote: "The concierge experience is a total game changer. Professional, private, and the most natural looking Botox I have ever had.", name: "Jessica R." },
  { quote: "I was nervous about filler, but the consultation put me at ease. Subtle, balanced, and beautiful results.", name: "Megan P." },
  { quote: "Booked an IV drip before a big event and felt amazing. On time, friendly, and genuinely provider led care.", name: "Danielle K." },
  { quote: "Finally an injector I trust. She listens, explains everything, and never overdoes it. Highly recommend.", name: "Brittany S." },
  { quote: "Every detail from consultation to aftercare was thoughtful. I always leave feeling refreshed and confident.", name: "Lauren T." }
];

function reviewCards(count) {
  return GOOGLE_REVIEWS.slice(0, count).map((r) => `<article class="luxe-card p-6"><p class="text-lg tracking-[.12em] text-champagne">★★★★★</p><p class="mt-4 font-serif text-2xl leading-8 text-navy">"${r.quote}"</p><p class="mt-5 text-xs font-bold uppercase tracking-[.14em] text-ink/55">${r.name} · Google Review</p></article>`).join("");
}

const services = [
  ["Injectables", "Botox, dermal fillers, PDO threads, Sculptra, Radiesse, and facial balancing with a consultation-led plan.", "Authority category", "#injectables"],
  ["IV Drips and Wellness", "Hydration, energy, immunity, beauty, recovery, and vitamin injection support through mobile care.", "Wellness support", "#iv-wellness"],
  ["Regenerative Aesthetics", "Provider guided PRP, PRF, collagen stimulation, and hair restoration education paths.", "Personalized care", "#regenerative-aesthetics"],
  ["Skin and Tightening", "Explore skin rejuvenation, tightening, texture, radiance, and treatment candidacy paths.", "Personalized care", "#skin-tightening"],
  ["Intimate Wellness", "Private, confidence-centered feminine wellness education with careful provider review.", "Private consultation", "#intimate-wellness"]
];

const injectables = ["Botox or Neurotoxins", "Dermal Fillers", "PDO Threads", "Sculptra", "Radiesse", "Facial Balancing"];
const PLACEHOLDER_BOOKING_URL = "#book";
const PLACEHOLDER_CHERRY_URL = "https://example.com/elite-vitamed-cherry-placeholder";
const PLACEHOLDER_REVIEWS_URL = "https://example.com/elite-vitamed-google-reviews-placeholder";

// GHL (LeadConnector) service-menu widgets, embedded on the #book route.
const BOOKING_MENUS = {
  all: "https://api.leadconnectorhq.com/widget/service-menu/69ca92624ca2421b5f9be8ee",
  injectables: "https://api.leadconnectorhq.com/widget/service-menu/69ca9235c01338a30dd74f49",
  iv: "https://api.leadconnectorhq.com/widget/service-menu/69ca91f0c43631b18757ac74",
  skin: "https://api.leadconnectorhq.com/widget/service-menu/69e59023059b4914d5b41880"
};
const BOOKING_FAMILY_ROUTES = {
  injectables: ["injectables", "botox-neurotoxins", "dermal-fillers", "radiesse-fillers", "restylane-fillers", "jawline-contouring", "under-eye-rejuvenation", "sculptra", "facial-balancing", "non-surgical-face-lift", "pdo-threads"],
  iv: ["iv-wellness", "iv-drips"],
  skin: ["skin-tightening", "breeze", "wondertouch", "ultimate-glow-lift", "facial-contouring", "microneedling-stem-cells", "chemical-peels"]
};
// Short, page-specific label shown in the header center "kicker" (eyebrow stays "Mobile Concierge Care").
const HEADER_KICKERS = {
  home: "Injectables + IV Therapy in New Hampshire",
  services: "Explore Our Treatment Menu",
  injectables: "Injectables in New Hampshire",
  "regenerative-aesthetics": "Regenerative Aesthetics in NH",
  "prp-prf": "PRP & PRF in New Hampshire",
  "skin-tightening": "Skin & Tightening in New Hampshire",
  "iv-wellness": "IV Therapy & Wellness in NH",
  "iv-drips": "IV Drip Therapy in New Hampshire",
  "intimate-wellness": "Intimate Wellness in New Hampshire",
  assessment: "Treatment Assessment",
  "injectables-assessment": "Injectables Assessment",
  memberships: "Membership & Concierge Care",
  results: "Real Client Results",
  about: "Meet Your Provider",
  faq: "Questions, Answered",
  contact: "Book Your Consultation",
  book: "Book Your Appointment"
};
function prettifyRoute(route) {
  const caps = { iv: "IV", prp: "PRP", prf: "PRF", pdo: "PDO", nad: "NAD+" };
  return route.split("-").map((w) => caps[w] || w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function headerKickerFor(page) {
  return HEADER_KICKERS[page] || prettifyRoute(page);
}

// Map the current route to the right booking entry point so "Book" buttons are context-aware.
function bookingRouteForCurrentPage() {
  const route = (location.hash || "#home").replace("#", "").split("/")[0];
  for (const family of Object.keys(BOOKING_FAMILY_ROUTES)) {
    if (BOOKING_FAMILY_ROUTES[family].includes(route)) return "#book/" + family;
  }
  return "#book";
}
const HERO_PARTICLES_ENABLED = true;
const ctas = `
    <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
    <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Now</a>
    <a href="#assessment" class="btn btn-navy justify-center">${icon("sparkle")} Start Treatment Assessment</a>
    <a href="#contact" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("phone")} Request a Phone Consultation</a>
  </div>
`;

function imageBox(key, classes = "") {
  const heroClass = key === "hero" ? "hero-photo" : "";
  return `<div class="image-tile ${heroClass} ${classes}" style="--image-url:${images[key]}"></div>`;
}

function luxeOrbit() {
  return `
    <svg class="luxe-orbit" viewBox="0 0 520 520" aria-hidden="true">
      <circle cx="260" cy="260" r="218" fill="none" stroke="rgba(213,168,94,.18)" stroke-width="1" />
      <circle class="orbit-dash" cx="260" cy="260" r="176" fill="none" stroke="rgba(213,168,94,.55)" stroke-width="1.4" />
      <path d="M393 112c46 34 73 88 73 148 0 102-82 184-184 184" fill="none" stroke="rgba(243,223,184,.24)" stroke-width="1" />
      <circle class="spark" cx="413" cy="114" r="5" fill="#d5a85e" />
      <circle class="spark" cx="94" cy="318" r="3" fill="#f3dfb8" style="animation-delay: 1.1s" />
    </svg>
  `;
}

function particles() {
  return `<div id="particles-js" class="particles-js-layer" aria-hidden="true"></div>`;
}

let heroParticlesTimer;
let motionObserver;

function destroyHeroParticles() {
  if (heroParticlesTimer) {
    window.clearTimeout(heroParticlesTimer);
    heroParticlesTimer = undefined;
  }

  if (Array.isArray(window.pJSDom)) {
    window.pJSDom.forEach((instance) => {
      const destroy = instance?.pJS?.fn?.vendors?.destroypJS;
      if (typeof destroy === "function") destroy.call(instance.pJS.fn.vendors);
    });
    window.pJSDom = [];
  }

  document.querySelectorAll("#particles-js canvas").forEach((canvas) => canvas.remove());
}

function destroyPageMotion() {
  motionObserver?.disconnect();
  motionObserver = undefined;
}

function setupPageMotion() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const compactViewport = window.matchMedia("(max-width: 767px)").matches;
  const sections = [...document.querySelectorAll("#app > section")].slice(1);
  const cards = document.querySelectorAll(".luxe-card, article.rounded-2xl");

  cards.forEach((card) => card.classList.add("motion-card"));
  if (reduceMotion || compactViewport) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  sections.forEach((section) => section.classList.add("motion-section"));
  if ("IntersectionObserver" in window) {
    motionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    sections.forEach((section) => motionObserver.observe(section));
  } else {
    sections.forEach((section) => section.classList.add("is-visible"));
  }

}

function initHeroParticles() {
  const container = document.querySelector("#particles-js");
  if (!HERO_PARTICLES_ENABLED || !container || !window.particlesJS) return;
  const compactViewport = window.matchMedia("(max-width: 767px)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  container.querySelectorAll("canvas").forEach((canvas) => canvas.remove());
  particlesJS("particles-js", {
    particles: {
      number: {
        value: compactViewport ? 40 : 80,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.35,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.22,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !coarsePointer, mode: "grab" },
        onclick: { enable: false, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  });
}

function proofPanel() {
  return `
    <div class="hero-proof relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <div class="proof-panel">
        ${[
          ["Nurse Practitioner Led Care", "Treatments are performed by a qualified medical provider with clinical knowledge and personalized attention.", "shield"],
          ["Certified Injector", "Injectable treatments are guided by training, precision, facial anatomy, and natural looking goals.", "syringe"],
          ["Premium Concierge Experience", "Receive top tier aesthetic and wellness care in a private, convenient setting.", "home"],
          ["Personalized Treatment Planning", "Your plan is based on your goals, features, comfort level, and what is appropriate for you.", "calendar"]
        ].map((item) => `
          <article class="proof-item">
            <div class="icon-badge">${icon(item[2])}</div>
            <div>
              <h2>${item[0]}</h2>
              <p>${item[1]}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function shell({ eyebrow, title, copy, image = "hero", dark = false }) {
  const isHomeHero = title.includes("treatment plan behind every booking");
  return `
    <section class="${dark ? "bg-navy-deep text-white" : "bg-gradient-to-br from-ivory via-white to-mist text-ink"} ${isHomeHero ? "hero-gradient -mt-[200px] pt-[200px]" : ""} overflow-hidden">
      ${isHomeHero ? particles() : ""}
      <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pt-20 pb-12 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pt-24 lg:pb-14">
        <div class="reveal">
          <p class="eyebrow">${eyebrow}</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">${title}</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="mt-6 max-w-2xl text-base leading-8 ${dark ? "text-white/76" : "text-ink/76"}">${copy}</p>
          ${ctas}
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          ${imageBox(image, "relative z-10 min-h-[31rem] rounded-[2rem] border border-champagne/30 shadow-luxe")}
        </div>
      </div>
      ${isHomeHero ? proofPanel() : ""}
    </section>
  `;
}

function splitFeature({ eyebrow, title, copy, bullets, image = "clinic", reverse = false }) {
  return `
    <section class="section-shell">
      <div class="mx-auto grid max-w-7xl items-center gap-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div class="${reverse ? "lg:order-2" : ""}">
          ${imageBox(image, "rounded-[1.5rem] shadow-luxe")}
        </div>
        <div class="px-2">
          <p class="eyebrow">${eyebrow}</p>
          <h2 class="mt-3 max-w-2xl font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">${title}</h2>
          <p class="mt-5 max-w-2xl leading-8 text-ink/70">${copy}</p>
          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            ${bullets.map((item) => `
              <div class="rounded-2xl border border-navy/10 bg-white/80 p-5">
                <div class="mb-3 icon-badge">${icon(item[0] === "Medical credibility" ? "shield" : item[0] === "Mobile ease" ? "home" : "sparkle")}</div>
                <h3 class="font-bold text-navy">${item[0]}</h3>
                <p class="mt-2 text-sm leading-6 text-ink/65">${item[1]}</p>
              </div>
            `).join("")}
          </div>
          ${ctas}
        </div>
      </div>
    </section>
  `;
}

function serviceGrid(items = services) {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Treatment architecture</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Clear pathways for every client goal.</h2>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          ${items.map((service, index) => `
            <a href="${service[3] || "#assessment"}" class="luxe-card group block overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-luxe">
              <div class="mb-5 flex items-center justify-between">
                <span class="rounded-full bg-navy px-3 py-1 text-[11px] font-extrabold uppercase tracking-[.15em] text-white">${service[2]}</span>
                <span class="icon-badge">${icon(index === 0 ? "syringe" : index === 1 ? "droplet" : index === 2 ? "sparkle" : index === 3 ? "leaf" : "shield")}</span>
              </div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${service[0]}</h3>
              <p class="mt-3 text-sm leading-7 text-ink/66">${service[1]}</p>
              <span class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-champagne">Explore path ${icon("arrow")}</span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function faqList(items) {
  return `<div class="space-y-3">${items.map((item) => `
    <details class="rounded-xl border border-navy/10 bg-white p-5 shadow-sm">
      <summary class="cursor-pointer font-bold text-navy">${item[0]}</summary>
      <p class="mt-3 text-sm leading-7 text-ink/66">${item[1]}</p>
    </details>
  `).join("")}</div>`;
}

function homeHero() {
  return `
    <section class="home-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <img class="home-hero-portrait home-hero-portrait-warm" src="./assets/hero-portrait-warm.webp" alt="" aria-hidden="true" />
      <div class="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
        <div class="reveal max-w-5xl">
          <p class="eyebrow">Mobile Botox, Fillers, IV Drips and Wellness Care in New Hampshire</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Look Refreshed, Feel Confident, and Know Exactly Where To Start</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-2xl leading-8">Elite VitaMed provides premium injectable treatments, facial balancing, IV drip therapy, and wellness services performed by a Nurse Practitioner and certified injector.</p>
          <p class="hero-copy mt-4 max-w-2xl leading-7">Get provider led aesthetic and wellness care designed around your goals, with the privacy and convenience of mobile or in home concierge appointments. Book directly or start with a treatment assessment if you are not sure where to begin.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-navy border border-[#877b56] justify-center">${icon("sparkle")} Start Treatment Assessment</a>
            <a href="#contact" class="btn btn-ghost justify-center">${icon("phone")} Request A Call</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p>
        </div>
      </div>
      ${proofPanel()}
    </section>
  `;
}

function homeServices() {
  const items = [
    {
      title: "Injectables",
      copy: "Refresh, refine, and restore with injectable treatments designed to support natural looking results and facial balance. This category includes treatment options that may help soften fine lines, restore volume, support structure, improve facial harmony, and create a more refreshed appearance.",
      options: ["Botox or Neurotoxins", "Dermal Fillers", "Sculptra", "Radiesse", "PDO Threads", "Facial Balancing", "Non Surgical Face Lift", "Injectables Consultation"],
      bestFor: ["Fine lines", "Wrinkles", "Volume loss", "Facial balance", "Lip enhancement", "Cheek support", "Jawline definition", "Full face refresh goals"],
      primary: ["Explore Injectables", "#injectables"],
      secondary: ["Start Injectable Assessment", "#injectables-assessment"],
      icon: "syringe",
      featured: true
    },
    {
      title: "Regenerative Aesthetics",
      copy: "Support natural rejuvenation with treatments designed to help improve the appearance of hair, skin, and overall tissue quality using regenerative treatment options.",
      options: ["PRP", "PRF", "Hair restoration", "Skin rejuvenation", "Collagen stimulation treatments"],
      bestFor: ["Hair thinning", "Skin quality", "Collagen support", "Natural rejuvenation", "Long term aesthetic planning"],
      primary: ["Explore Regenerative Aesthetics", "#regenerative-aesthetics"],
      icon: "sparkle"
    },
    {
      title: "Skin and Tightening",
      copy: "Improve the look of skin texture, firmness, and laxity with treatment options designed to support a smoother, tighter, and more refreshed appearance.",
      options: ["Neck tightening", "Skin laxity treatments", "Radiofrequency", "Body contouring, if available"],
      bestFor: ["Loose skin", "Neck concerns", "Skin firmness", "Texture support", "Non surgical tightening goals"],
      primary: ["Explore Skin and Tightening", "#skin-tightening"],
      icon: "shield"
    },
    {
      title: "IV and Wellness",
      copy: "Support hydration, energy, immunity, recovery, beauty, NAD+ therapy, vitamin injections, and overall wellness with provider guided IV drip therapy options.",
      options: ["Hydration & Recovery Drip", "Energy & Performance Drip", "Detox & Cleanse Drip", "Beauty Glow Drip", "Metabolism & Weight Management Drip", "Immunity Boost Drip", "Myers' Cocktail", "NAD+ Therapy", "Vitamin Injections"],
      bestFor: ["Low energy", "Dehydration", "Recovery", "Immunity support", "Beauty and glow", "General wellness support"],
      primary: ["Explore IV and Wellness", "#iv-wellness"],
      secondary: ["Start IV Drip Assessment", "#assessment"],
      icon: "droplet"
    },
    {
      title: "Intimate Wellness",
      copy: "Support confidence, comfort, and wellness with intimate treatment options designed to help clients feel more comfortable, supported, and confident in their bodies.",
      options: ["Vaginal tightening", "Feminine rejuvenation", "Comfort focused wellness", "Confidence focused care"],
      bestFor: ["Feminine wellness", "Confidence support", "Comfort concerns", "Private, provider led care"],
      primary: ["Explore Intimate Wellness", "#intimate-wellness"],
      icon: "heart"
    }
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Our Treatments</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Personalized Aesthetic and Wellness Treatments Designed Around Your Goals</h2>
          <p class="mt-4 leading-8 text-ink/68">Elite VitaMed offers provider led injectables, regenerative aesthetics, skin tightening, IV wellness, and intimate wellness treatments designed to help you look refreshed, feel confident, and choose the right path with clarity.</p>
          <p class="mt-3 leading-7 text-ink/64">Whether you already know what you want or need help deciding where to start, each treatment path is guided by clinical expertise, personalized planning, and care performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="mt-12 grid gap-5 lg:grid-cols-2">
          ${items.map((item) => `
            <article class="treatment-directory-card luxe-card flex flex-col p-6 sm:p-7 ${item.featured ? "lg:col-span-2" : ""}">
              <div class="${item.featured ? "lg:grid lg:grid-cols-[1fr_.92fr] lg:gap-10" : ""}">
                <div>
                  <div class="icon-badge mb-5">${icon(item.icon)}</div>
                  <h3 class="font-serif text-3xl font-semibold text-navy sm:text-4xl"><a href="${item.primary[1]}" class="transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">${item.title}</a></h3>
                  <p class="service-card-copy mt-3 text-sm leading-7">${item.copy}</p>
                  ${item.options && !item.featured ? `
                    <div class="mt-6">
                      <p class="treatment-card-label">Treatment Options</p>
                      <div class="mt-3 flex flex-wrap gap-2">
                        ${item.options.map((option) => `<span class="treatment-option-chip">${option}</span>`).join("")}
                      </div>
                    </div>
                  ` : ""}
                </div>
                <div class="${item.featured ? "mt-6 border-t border-navy/10 pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" : "mt-6"}">
                  ${item.options && item.featured ? `
                    <div>
                      <p class="treatment-card-label">Treatment Options</p>
                      <div class="mt-3 flex flex-wrap gap-2">
                        ${item.options.map((option) => `<span class="treatment-option-chip">${option}</span>`).join("")}
                      </div>
                    </div>
                  ` : ""}
                  <p class="treatment-card-label ${item.featured ? "mt-6" : ""}">Best For</p>
                  <div class="mt-3 flex flex-wrap gap-2">
                    ${item.bestFor.map((benefit) => `<span class="treatment-best-chip">${benefit}</span>`).join("")}
                  </div>
                </div>
              </div>
              <div class="mt-auto flex flex-col gap-3 pt-7 sm:flex-row sm:flex-wrap">
                <a href="${item.primary[1]}" class="btn btn-navy justify-center">${icon("arrow")} ${item.primary[0]}</a>
                ${item.secondary ? `<a href="${item.secondary[1]}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} ${item.secondary[0]}</a>` : ""}
              </div>
            </article>
          `).join("")}
        </div>
        <div class="treatment-section-cta mt-8 rounded-[1.5rem] border border-champagne/25 bg-navy-deep p-7 text-white shadow-luxe sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div class="max-w-3xl">
            <h3 class="font-serif text-3xl font-semibold text-white sm:text-4xl">Not Sure Which Treatment Is Right For You?</h3>
            <p class="mt-3 leading-7 text-white/72">Start with a Treatment Assessment to get a clearer starting point based on your goals, concerns, and the type of result you are looking for.</p>
          </div>
          <div class="mt-6 flex shrink-0 flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-0 lg:flex-col">
            <a href="#assessment" class="btn btn-gold justify-center">${icon("sparkle")} Start Treatment Assessment</a>
            <a href="${bookingRouteForCurrentPage()}" class="btn btn-ghost justify-center">${icon("calendar")} Book Your Appointment</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function homeFinancing() {
  const items = [
    ["Quick Application", "Apply in just a few minutes.", "sparkle"],
    ["Flexible Payment Options", "Choose a payment plan that works for you.", "calendar"],
    ["Use It Toward Eligible Services", "Financing may be available for qualifying Elite VitaMed treatments.", "gem"],
    ["Start With Confidence", "Move forward with your treatment plan without delaying care.", "shield"]
  ];
  return `
    <section class="section-shell bg-mist">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <div>
          <p class="eyebrow">Financing Available</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">Start Your Treatment Plan Now, Pay Over Time</h2>
          <p class="mt-5 leading-8 text-ink/70">Elite VitaMed offers financing through Cherry, making it easier to move forward with injectables, IV therapy, wellness services, and personalized treatment plans.</p>
          <p class="mt-4 text-sm leading-7 text-ink/64">Your aesthetic and wellness goals should feel accessible and manageable. With Cherry financing, eligible clients can split their treatment investment into flexible payments instead of paying everything upfront.</p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a>
            <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          </div>
          <p class="mt-5 text-xs leading-6 text-ink/55">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          ${imageBox("financing", "min-h-52 rounded-[1.25rem] shadow-luxe sm:col-span-2")}
          ${items.map((item) => `
            <article class="rounded-2xl border border-navy/10 bg-white/85 p-5 shadow-sm">
              <div class="icon-badge mb-4">${icon(item[2])}</div>
              <h3 class="text-xl font-bold text-navy">${item[0]}</h3>
              <p class="mt-2 text-sm leading-6 text-ink/65">${item[1]}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function homeAssessment() {
  const items = [
    ["Injectable Treatment Assessment", "For neurotoxins, filler, facial balancing, and full face refresh goals.", "syringe", "injectables"],
    ["Full Treatment Assessment", "For visitors who are not sure whether they need injectables, IV therapy, wellness support, or a consultation first.", "sparkle", "assessment"],
    ["IV Drip Assessment", "For hydration, energy, immunity, beauty, recovery, and wellness support.", "droplet", "iv"]
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Not Sure Where To Start?</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Get Provider Guided Direction Before You Book</h2>
          <p class="mt-4 leading-8 text-ink/68">If you are unsure whether you need neurotoxins, filler, facial balancing, IV therapy, or another service, the treatment assessment helps point you toward the right starting place.</p>
          <p class="mt-3 leading-7">Your assessment result gives you a helpful starting point before booking. Final recommendations are always confirmed by the provider based on your goals, anatomy, treatment history, comfort level, and what is appropriate for you.</p>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          ${items.map((item) => `
            <article class="luxe-card overflow-hidden">
              ${imageBox(item[3], "min-h-[12.1rem]")}
              <div class="p-6">
                <div class="icon-badge mb-4">${icon(item[2])}</div>
                <h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3>
                <p class="mt-3 text-sm leading-7 text-ink/66">${item[1]}</p>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="#assessment" class="btn btn-navy justify-center">${icon("sparkle")} Start My Treatment Assessment</a>
          <a href="#contact" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a>
        </div>
      </div>
    </section>
  `;
}

function homeInjectables() {
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>${imageBox("results", "rounded-[1.5rem] shadow-luxe")}</div>
        <div>
          <p class="eyebrow">Injectables</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">Injectable Treatments Performed With Precision, Training, and Personalized Care</h2>
          <p class="mt-4 leading-8 text-ink/70">Elite VitaMed offers neurotoxins, dermal fillers, Sculptra, PDO threads, and facial balancing treatments performed by a Nurse Practitioner and certified injector.</p>
          <p class="mt-3 text-sm leading-7 text-ink/64">Injectables should never feel rushed or one size fits all. Every treatment plan should be based on your goals, anatomy, previous treatment history, and desired outcome. The goal is to help you look refreshed, balanced, and natural while still feeling like yourself.</p>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            ${[
              "Neurotoxins for fine lines, wrinkles, and expression lines.",
              "Dermal fillers for lips, cheeks, chin, jawline, under eyes, and volume support.",
              "Facial balancing for clients who want a more complete and personalized treatment plan.",
              "Provider led consultation for clients who want expert guidance before choosing a treatment."
            ].map((item) => `<p class="rounded-xl border border-navy/10 bg-white/70 p-4 text-sm leading-6 text-ink/70">${icon("sparkle")} <span class="ml-2">${item}</span></p>`).join("")}
          </div>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#injectables" class="btn btn-navy justify-center">${icon("syringe")} Explore Injectables</a>
            <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Injectable Assessment</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function homeIvWellness() {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
        <div>
          <p class="eyebrow">IV Drips and Wellness</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">Wellness Support Delivered With Convenience and Care</h2>
          <p class="mt-4 leading-8 text-ink/70">Elite VitaMed offers mobile IV therapy designed to support hydration, energy, immunity, recovery, beauty, and overall wellness.</p>
          <p class="mt-3 text-sm leading-7 text-ink/64">Whether you are feeling depleted, preparing for an event, recovering from a busy week, or looking for ongoing wellness support, your IV therapy experience is designed around how you feel and what your body may need.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            ${["Hydration & Recovery Drip", "Energy & Performance Drip", "Beauty Glow Drip", "Immunity Boost Drip", "NAD+ Therapy", "Vitamin Injections"].map((item) => `<span class="rounded-full border border-navy/10 bg-mist px-4 py-2 text-xs font-bold text-navy">${item}</span>`).join("")}
          </div>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#services" class="btn btn-navy justify-center">${icon("droplet")} Explore IV Therapy</a>
            <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start IV Drip Assessment</a>
          </div>
        </div>
        <div>${imageBox("iv", "rounded-[1.5rem] shadow-luxe")}</div>
      </div>
    </section>
  `;
}

function homeConcierge() {
  return `
    <section class="section-shell bg-mist">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div>${imageBox("clinic", "rounded-[1.5rem] shadow-luxe")}</div>
        <div>
          <p class="eyebrow">Mobile Concierge Care</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">The Quality Of A Premium Aesthetic Visit, With The Convenience Of Concierge Care</h2>
          <p class="mt-4 leading-8 text-ink/70">Mobile care does not mean lower quality. Elite VitaMed brings provider led aesthetic and wellness treatments to you with the same attention, safety, and professionalism you would expect from a premium in office experience.</p>
          <p class="mt-3 text-sm leading-7 text-ink/64">The mobile concierge model is designed for clients who want privacy, convenience, and personalized care without sacrificing quality. Your treatment is performed by a Nurse Practitioner and certified injector, with a focus on comfort, professionalism, and results that align with your goals.</p>
          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            ${["Private and convenient appointments.", "Care performed by a qualified medical provider.", "Personalized treatment planning.", "Premium service without the traditional med spa visit.", "Flexible care for busy clients."].map((item) => `<p class="flex gap-2 text-sm leading-6 text-ink/70">${icon("shield")} <span>${item}</span></p>`).join("")}
          </div>
          <a href="${bookingRouteForCurrentPage()}" class="btn btn-navy mt-7 justify-center">${icon("calendar")} Book Your Mobile Appointment</a>
        </div>
      </div>
    </section>
  `;
}

function homeTiana() {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <p class="eyebrow">Meet Your Provider</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">Care Led By A Nurse Practitioner and Certified Injector</h2>
          <p class="mt-5 leading-8 text-ink/70">Tiana brings clinical knowledge, certified injector training, and a personalized approach to every Elite VitaMed treatment. Her goal is to help clients feel informed, comfortable, and confident before moving forward with aesthetic or wellness care.</p>
          <p class="mt-3 text-sm leading-7 text-ink/64">Elite VitaMed was created to offer a more personal and convenient way to receive high quality treatments without losing the professionalism, safety, and expertise that matter most.</p>
          <p class="mt-3 text-sm leading-7 text-ink/64">Every client is different, which is why each recommendation is guided by your goals, anatomy, lifestyle, comfort level, and desired outcome.</p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#about" class="btn btn-navy justify-center">${icon("users")} Meet Tiana</a>
            <a href="#contact" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("phone")} Request A Consultation</a>
          </div>
        </div>
        <div>${imageBox("tiana", "rounded-[1.5rem] shadow-luxe")}</div>
      </div>
    </section>
  `;
}

function homeResults() {
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Client Confidence</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Natural Looking Results Start With The Right Plan</h2>
          <p class="mt-4 leading-8 text-ink/68">The goal is not to change who you are. The goal is to help you look refreshed, feel confident, and move forward with a treatment plan that fits you.</p>
          <p class="mt-3 text-sm leading-7 text-ink/60">Elite VitaMed focuses on thoughtful recommendations, provider led care, and results that support your natural features. Every treatment starts with understanding your goals and choosing the right path forward.</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-3">
          ${[
            ["Before and after photos", "Provider-reviewed treatment photos can be featured here.", "beforeAfter1"],
            ["Client testimonials", "Client confidence stories and experience highlights can be featured here.", "results"],
            ["Natural looking results", "Thoughtful planning supports a refreshed and balanced result.", "beforeAfter2"]
          ].map((item) => `
            <article class="luxe-card overflow-hidden">
              ${imageBox(item[2], "min-h-[14.3rem]")}
              <div class="p-5">
                <h3 class="font-serif text-2xl font-semibold text-navy">${item[0]}</h3>
                <p class="mt-2 text-sm leading-6 text-ink/64">${item[1]}</p>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="mt-8 text-center">
          <p class="text-xs leading-6 text-ink/55">Individual results vary. Final treatment recommendations are made after provider evaluation.</p>
          <a href="#results" class="btn btn-navy mt-5 justify-center">${icon("sparkle")} View Results</a>
        </div>
      </div>
    </section>
  `;
}

function homeReviews() {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Google Reviews</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2>
          <p class="mt-4 leading-8 text-ink/68">Clients trust Elite VitaMed for personalized aesthetic and wellness care performed by a Nurse Practitioner and certified injector, with the privacy and convenience of concierge appointments.</p>
          <p class="mt-3 text-sm leading-7 text-ink/60">Every appointment is designed to feel thoughtful, comfortable, and guided. Whether a client is booking injectables, IV therapy, or a wellness service, the goal is to provide top tier care with clear communication, personalized recommendations, and a treatment experience that feels easy from start to finish.</p>
          <div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div>
          <p class="mt-2 text-sm font-bold text-navy">Rated 5.0 stars on Google · 100+ reviews</p>
        </div>
        <div class="mt-9 grid gap-5 lg:grid-cols-3">
          ${reviewCards(3)}
        </div>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Google Reviews</a>
          <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
        </div>
      </div>
    </section>
  `;
}

function homeMemberships() {
  return `
    <section class="section-shell bg-mist">
      <div class="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_.48fr] lg:px-8">
        <div>
          <p class="eyebrow">Memberships</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Stay Consistent With Your Aesthetic and Wellness Goals</h2>
          <p class="mt-4 max-w-3xl leading-8 text-ink/68">Memberships make it easier to maintain your results, plan ahead, and receive ongoing support throughout the year.</p>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-ink/60">Elite VitaMed membership options are designed for clients who want consistency, convenience, and a more structured approach to aesthetic and wellness care.</p>
        </div>
        <div>
          ${imageBox("membership", "min-h-60 rounded-[1.5rem] shadow-luxe")}
          <a href="#memberships" class="btn btn-navy mt-5 w-full justify-center">${icon("gem")} View Membership Options</a>
        </div>
      </div>
    </section>
  `;
}

function homeFaq() {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p class="eyebrow">Frequently Asked Questions</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Questions Before You Book?</h2>
          <a href="#faq" class="btn btn-navy mt-6 justify-center">${icon("arrow")} View All FAQs</a>
          ${imageBox("assessment", "mt-7 min-h-44 rounded-[1.25rem] shadow-luxe")}
        </div>
        ${faqList([
          ["How do I know which treatment is right for me?", "If you are unsure, start with the treatment assessment or request a phone consultation. This gives you a better starting point before booking."],
          ["Can I book if I am not sure what I need?", "Yes. You can book a consultation or start with an assessment to help narrow down the best treatment path."],
          ["Who performs the treatments?", "Treatments are performed by a Nurse Practitioner and certified injector, with care guided by clinical knowledge, treatment experience, and personalized planning."],
          ["How does mobile concierge care work?", "Elite VitaMed brings aesthetic and wellness services to you. After booking, you will receive appointment details, preparation instructions, and what to expect."],
          ["Are assessment results final treatment recommendations?", "No. Assessment results are a helpful starting point. Final recommendations are confirmed after provider evaluation."]
        ])}
      </div>
    </section>
  `;
}

function homeFinalCta() {
  return `
    <section class="bg-navy-deep px-4 py-16 text-white">
      <div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10">
        <p class="eyebrow">Your Next Step</p>
        <h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready For Provider Led Care That Comes To You?</h2>
        <p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Whether you know exactly what you want or need help choosing the right treatment path, Elite VitaMed makes the next step simple.</p>
        <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          <a href="#contact" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a>
        </div>
      </div>
    </section>
  `;
}

function servicesHero() {
  return `
    <section class="hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pt-24">
        <div class="reveal">
          <p class="eyebrow">Our Services</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Premium Aesthetic and Wellness Care, Personalized To You</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-2xl leading-8">Elite VitaMed offers provider led injectables, IV drips, and wellness services performed by a Nurse Practitioner and certified injector, with the privacy and convenience of mobile concierge care.</p>
          <p class="hero-copy mt-4 max-w-2xl leading-7">Whether you know exactly what you want or need help choosing the right treatment path, our services are designed to help you feel informed, confident, and supported from the first step.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-navy border border-[#877b56] justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          ${imageBox("wellness", "services-hero-image relative z-10 min-h-[18rem] rounded-[2rem] border border-champagne/30 shadow-luxe sm:min-h-[24rem] lg:min-h-[31rem]")}
        </div>
      </div>
    </section>
  `;
}

function servicesIntro() {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p class="eyebrow">Personalized Direction</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Care That Starts With Your Goals</h2>
          <p class="mt-5 max-w-4xl leading-8">Every client comes in with different goals, comfort levels, timelines, and questions. Some know they want injectables. Some are looking for wellness support. Others simply know they want to look refreshed, feel better, or explore what may be possible.</p>
          <p class="mt-4 max-w-4xl leading-8">Elite VitaMed was created to make that process easier. Instead of guessing what you need, you can explore our service categories, start a treatment assessment, or request a phone consultation to get provider guided direction before booking.</p>
        </div>
        <a href="#assessment" class="btn btn-navy justify-center">${icon("sparkle")} Find The Right Service For Me</a>
      </div>
    </section>
  `;
}

function servicesCategories() {
  const items = [
    ["Injectables", "Injectable treatments are designed to support natural looking refinement, facial balance, and refreshed confidence. This category includes neurotoxins, dermal fillers, PDO threads, Sculptra, facial balancing, and full face refresh options.", "Every injectable plan is guided by your anatomy, treatment history, comfort level, and desired outcome.", ["Fine lines", "Wrinkles", "Volume loss", "Facial balance", "Lip enhancement", "Jawline definition", "Full face refresh goals"], "Explore Injectables", "#injectables", "Start Assessment", "#assessment", "syringe", ["Botox or Neurotoxins", "Dermal Fillers", "Sculptra", "Radiesse", "PDO Threads", "Facial Balancing", "Non Surgical Face Lift", "Injectables Consultation"]],
    ["Regenerative Aesthetics", "Support natural rejuvenation with treatments designed to help improve the appearance of hair, skin, and overall tissue quality using regenerative treatment options.", "Treatment options may include PRP, PRF, hair restoration, skin rejuvenation, and collagen stimulation treatments.", ["Hair thinning", "Skin quality", "Collagen support", "Natural rejuvenation", "Long term aesthetic planning"], "Explore Regenerative Care", "#regenerative-aesthetics", "Phone Consultation", "#contact", "sparkle", ["PRP", "PRF", "Hair restoration", "Skin rejuvenation", "Collagen stimulation treatments"]],
    ["Skin and Tightening", "Improve the look of skin texture, firmness, and radiance with provider guided options designed to support a smoother, tighter, and more refreshed appearance.", "Treatment options include Breeze, WonderTouch, Ultimate Glow & Lift, chemical peels, facial contouring, and microneedling with stem cells.", ["Dull or tired looking skin", "Skin texture", "Loss of firmness", "Mild laxity", "Facial contouring goals"], "Explore Tightening", "#skin-tightening", "Phone Consultation", "#contact", "shield", ["Breeze", "WonderTouch", "Ultimate Glow & Lift", "Chemical peels", "Facial contouring", "Microneedling with stem cells"]],
    ["IV and Wellness", "Support hydration, energy, immunity, recovery, beauty, NAD+ therapy, vitamin injections, and overall wellness with provider guided IV drip therapy options.", "Whether you are feeling depleted, preparing for an event, recovering from a busy season, or looking for ongoing wellness support, IV therapy can be a helpful place to start.", ["Low energy", "Dehydration", "Recovery", "Immunity support", "Beauty and glow", "General wellness support"], "Explore IV Wellness", "#iv-wellness", "Start IV Assessment", "#assessment", "droplet", ["Hydration & Recovery Drip", "Energy & Performance Drip", "Detox & Cleanse Drip", "Beauty Glow Drip", "Metabolism & Weight Management Drip", "Immunity Boost Drip", "Myers' Cocktail", "NAD+ Therapy", "Vitamin Injections"]],
    ["Intimate Wellness", "Explore private, provider guided consultations focused on comfort, confidence, feminine wellness, and careful treatment planning.", "Intimate wellness begins with a private consultation to determine whether treatment, referral, education, or another care path is appropriate.", ["Feminine wellness", "Confidence support", "Comfort concerns", "Private, provider led care"], "Explore Intimate Care", "#intimate-wellness", "Private Consultation", "#contact", "heart", ["Intimate wellness consultation", "Feminine wellness", "Vaginal tightening discussion"]],
    ["Treatment Assessment", "Not sure which service is right for you? Start with a treatment assessment. This helps you narrow down the best starting point based on your goals, concerns, and the type of result you are looking for.", "Your assessment result is not a final medical recommendation. It is a helpful starting point that can guide you toward the right consultation, service category, or booking path.", ["First time visitors", "Clients unsure what they need", "People comparing injectables", "People interested in IV therapy", "Anyone who wants provider guided direction before booking"], "Start Assessment", "#assessment", "Phone Consultation", "#contact", "sparkle"],
    ["Memberships", "Memberships are designed for clients who want consistency, convenience, and a more structured approach to their aesthetic and wellness goals.", "If you plan to receive ongoing treatments, a membership may help you stay on track while making your care easier to maintain throughout the year.", ["Ongoing aesthetic care", "Wellness maintenance", "Clients who want consistency", "Clients planning multiple visits", "Long term treatment planning"], "View Memberships", "#memberships", "Membership Options", "#contact", "gem"]
  ];
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Explore Our Services</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Choose The Care That Fits Your Goals</h2>
          <p class="mt-4 leading-8">Our services are organized into clear categories so you can easily find the right starting point.</p>
        </div>
        <div class="mt-12 space-y-6">
          ${items.map((item, index) => `
            <article class="service-category-card luxe-card grid gap-7 p-5 sm:p-7 lg:grid-cols-[1fr_.9fr]">
              <div>
                <div class="icon-badge mb-5">${icon(item[8])}</div>
                <h3 class="font-serif text-4xl font-semibold text-navy"><a href="${item[5]}" class="transition hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">${item[0]}</a></h3>
                <p class="mt-4 leading-8">${item[1]}</p>
                <p class="mt-3 text-sm leading-7">${item[2]}</p>
                <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="${item[5]}" class="btn btn-navy justify-center">${icon(item[8])} ${item[4]}</a>
                  <a href="${item[7]}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon(item[7] === "#contact" ? "phone" : "arrow")} ${item[6]}</a>
                </div>
              </div>
              <div class="rounded-2xl border border-navy/10 bg-mist/75 p-5">
                ${item[9] ? `
                  <p class="eyebrow">Treatment Options</p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    ${item[9].map((option) => `<span class="treatment-option-chip">${option}</span>`).join("")}
                  </div>
                ` : ""}
                <p class="eyebrow ${item[9] ? "mt-7" : ""}">Best For</p>
                <div class="mt-4 flex flex-wrap gap-2">
                  ${item[3].map((tag) => `<span class="rounded-full border border-navy/10 bg-white px-3 py-2 text-sm font-medium text-navy">${tag}</span>`).join("")}
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function servicesProviderCare() {
  const items = [
    ["Nurse Practitioner Led Care", "Your care is performed by a qualified medical provider.", "shield"],
    ["Certified Injector Expertise", "Injectable treatments are guided by training, anatomy, and precision.", "syringe"],
    ["Personalized Treatment Planning", "Your recommendations are based on your goals, features, history, and comfort level.", "calendar"],
    ["Concierge Convenience", "Receive aesthetic and wellness care in a private, comfortable setting.", "home"]
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Why Elite VitaMed</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Top Tier Care From A Nurse Practitioner and Certified Injector</h2>
          <p class="mt-5 leading-8">Choosing an aesthetic or wellness provider is about more than convenience. It is about trust, safety, education, and knowing your treatment is being guided by someone qualified to help you make the right decision.</p>
          <p class="mt-4 leading-8">Elite VitaMed combines clinical knowledge, certified injector training, and personalized care with the added comfort of mobile concierge appointments. You receive premium service without sacrificing quality, professionalism, or provider expertise.</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          ${items.map((item) => `
            <article class="rounded-2xl border border-navy/10 bg-mist/70 p-5">
              <div class="icon-badge mb-4">${icon(item[2])}</div>
              <h3 class="text-xl font-bold text-navy">${item[0]}</h3>
              <p class="mt-2 text-sm leading-6">${item[1]}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function servicesNextSteps() {
  const items = [
    ["Book Your Appointment", "Best if you already know the service you want and are ready to schedule.", "Book Now", "#contact", "calendar"],
    ["Start Treatment Assessment", "Best if you are interested but unsure which treatment path fits your goals.", "Start Assessment", "#assessment", "sparkle"],
    ["Request A Phone Consultation", "Best if you want to talk through your options before booking.", "Request A Phone Consultation", "#contact", "phone"]
  ];
  return `
    <section class="section-shell bg-mist">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Not Sure Where To Start?</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">3 Simple Ways To Move Forward</h2>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          ${items.map((item) => `
            <article class="luxe-card p-6">
              <div class="icon-badge mb-4">${icon(item[4])}</div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3>
              <p class="mt-3 text-sm leading-7">${item[1]}</p>
              <a href="${item[3]}" class="btn btn-navy mt-6 justify-center">${icon(item[4])} ${item[2]}</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function servicesFaq() {
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p class="eyebrow">Frequently Asked Questions</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Questions Before Choosing A Service?</h2>
          <a href="#faq" class="btn btn-navy mt-6 justify-center">${icon("arrow")} View All FAQs</a>
        </div>
        ${faqList([
          ["How do I know which service is right for me?", "If you are unsure where to start, the treatment assessment can help guide you toward the right category. You can also request a phone consultation before booking."],
          ["Who performs the treatments?", "Services are performed by a Nurse Practitioner and certified injector, with care guided by clinical knowledge, training, and personalized treatment planning."],
          ["Can I book if I am not sure what I need?", "Yes. You can book a consultation or start with a treatment assessment to narrow down the best starting point."],
          ["Does Elite VitaMed offer mobile appointments?", "Yes. Elite VitaMed offers mobile or in home concierge care, giving clients a more private and convenient way to receive premium aesthetic and wellness services."],
          ["Are treatment assessment results final recommendations?", "No. Assessment results are a helpful starting point. Final recommendations are confirmed by the provider after reviewing your goals, history, and what is appropriate for you."]
        ])}
      </div>
    </section>
  `;
}

function servicesFinalCta() {
  return `
    <section class="bg-navy-deep px-4 py-16 text-white">
      <div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10">
        <p class="eyebrow">Your Next Step</p>
        <h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Choose The Right Treatment Path?</h2>
        <p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Whether you are ready to book or still deciding where to start, Elite VitaMed makes the next step simple.</p>
        <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          <a href="#contact" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a>
        </div>
      </div>
    </section>
  `;
}

const treatmentCategoryPages = {
  "regenerative-aesthetics": {
    eyebrow: "Regenerative Aesthetics",
    title: "Support Natural Rejuvenation With A Personalized Treatment Path",
    copy: "Explore regenerative aesthetic options designed to support hair, skin, tissue quality, and long term aesthetic planning. Your provider will help determine which approach may be appropriate for your goals.",
    icon: "sparkle",
    options: ["PRP", "PRF", "Hair Restoration", "Skin Rejuvenation", "Collagen Stimulation Treatments"],
    bestFor: ["Hair thinning", "Skin quality", "Collagen support", "Natural rejuvenation", "Long term aesthetic planning"]
  },
  "skin-tightening": {
    eyebrow: "Skin and Tightening",
    title: "Explore Skin Texture, Firmness, and Tightening Options",
    copy: "Explore treatment options designed to support a smoother, tighter, and more refreshed appearance. Final recommendations depend on your concerns, goals, and provider evaluation.",
    icon: "shield",
    options: ["Neck Tightening", "Skin Laxity Treatments", "Radiofrequency", "Body Contouring, If Available"],
    bestFor: ["Loose skin", "Neck concerns", "Skin firmness", "Texture support", "Non surgical tightening goals"]
  },
  "iv-wellness": {
    eyebrow: "IV and Wellness",
    title: "Choose A Wellness Path Designed Around How You Feel",
    copy: "Explore IV drip therapy, NAD+ therapy, Myers' Cocktail, vitamin injections, and wellness optimization options for hydration, energy, immunity, recovery, beauty, and overall wellness support.",
    icon: "droplet",
    options: ["IV Drip Therapy", "Hydration & Recovery Drip", "Energy & Performance Drip", "Detox & Cleanse Drip", "Beauty Glow Drip", "Metabolism & Weight Management Drip", "Immunity Boost Drip", "Myers' Cocktail", "NAD+ Therapy", "Vitamin Injections"],
    bestFor: ["Low energy", "Dehydration", "Recovery", "Immunity support", "Beauty and glow", "General wellness support"],
    assessment: true
  },
  "intimate-wellness": {
    eyebrow: "Intimate Wellness",
    title: "Private, Provider Led Care Focused On Comfort and Confidence",
    copy: "Explore intimate wellness options designed to support confidence, comfort, and feminine wellness through a private, personalized care experience.",
    icon: "heart",
    options: ["Vaginal Tightening", "Feminine Rejuvenation", "Comfort Focused Wellness", "Confidence Focused Care"],
    bestFor: ["Feminine wellness", "Confidence support", "Comfort concerns", "Private, provider led care"]
  }
};

function treatmentCategoryPage(category) {
  return `
    ${shell({
      eyebrow: category.eyebrow,
      title: category.title,
      copy: category.copy,
      image: category.icon === "droplet" ? "iv" : "clinic",
      dark: true
    })}
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
        <div>
          <p class="eyebrow">Treatment Options</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore ${category.eyebrow}</h2>
          <p class="mt-4 max-w-3xl leading-8 text-ink/70">Use this category page as a starting point. Your provider will review your goals, health history, concerns, and candidacy before confirming a treatment plan.</p>
          <div class="mt-6 flex flex-wrap gap-2">
            ${category.options.map((option) => `<span class="treatment-option-chip">${option}</span>`).join("")}
          </div>
        </div>
        <aside class="rounded-[1.5rem] border border-navy/10 bg-mist p-6 sm:p-7">
          <p class="eyebrow">Best For</p>
          <div class="mt-4 flex flex-wrap gap-2">
            ${category.bestFor.map((item) => `<span class="treatment-best-chip">${item}</span>`).join("")}
          </div>
          <p class="mt-6 text-sm leading-7 text-ink/64">Final recommendations are confirmed after provider evaluation. Individual results and treatment suitability vary.</p>
        </aside>
      </div>
    </section>
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p class="eyebrow">Your Next Step</p>
        <h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold text-navy sm:text-5xl">Get Provider Guided Direction Before You Book</h2>
        <p class="mx-auto mt-4 max-w-3xl leading-8 text-ink/70">Book an appointment or request a phone consultation if you want help choosing the right starting point.</p>
        <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          ${category.assessment ? `<a href="#assessment" class="btn btn-navy justify-center">${icon("sparkle")} Start IV Drip Assessment</a>` : ""}
          <a href="#contact" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a>
        </div>
      </div>
    </section>
  `;
}

function contactHero() {
  return `
    <section class="hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pt-24">
        <div class="reveal">
          <p class="eyebrow">Contact Elite VitaMed in New Hampshire</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Ready To Book, Ask A Question, or Find Out Where To Start?</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-2xl leading-8">Elite VitaMed makes it easy to take the next step toward provider led aesthetic and wellness care in New Hampshire.</p>
          <p class="hero-copy mt-4 max-w-2xl leading-7">Whether you are ready to book your appointment, want help choosing the right treatment, or prefer to speak with someone first, Elite VitaMed is here to guide you. Start with a treatment assessment, request a phone consultation, or reach out directly with your questions.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-navy border border-[#877b56] justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Care is guided by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          ${imageBox("wellness", "relative z-10 min-h-[31rem] rounded-[2rem] border border-champagne/30 shadow-luxe")}
        </div>
      </div>
    </section>
  `;
}

function contactOptions() {
  const items = [
    {
      title: "Book Your Appointment",
      copy: "If you already know which treatment you are interested in, you can book your appointment directly.",
      bestFor: ["Botox or neurotoxins", "Dermal fillers", "Radiesse", "Restylane", "Sculptra", "PDO threads", "Skin and tightening treatments", "IV drip therapy", "Vitamin shots", "Regenerative aesthetics", "Intimate wellness consultation"],
      label: "Book Your Appointment", href: PLACEHOLDER_BOOKING_URL, booking: true, icon: "calendar"
    },
    {
      title: "Start Treatment Assessment",
      copy: "If you are not sure where to begin, start with the treatment assessment. This helps guide you toward the treatment category that may best fit your goals.",
      bestFor: ["Clients who feel unsure what they need", "Clients comparing Botox, filler, Sculptra, Radiesse, or PDO threads", "Clients interested in skin tightening or skin rejuvenation", "Clients exploring IV therapy or wellness support", "Clients who want a clearer starting point before booking"],
      label: "Start Treatment Assessment", href: "#assessment", icon: "sparkle"
    },
    {
      title: "Request A Phone Consultation",
      copy: "If you would rather talk through your options first, request a phone consultation. This is a helpful option if you have questions, want guidance, or are considering a more personalized treatment plan.",
      bestFor: ["First time clients", "Clients with multiple concerns", "Clients interested in mobile or concierge care", "Clients considering intimate wellness", "Clients who want guidance before booking"],
      label: "Request A Phone Consultation", href: "#contact/contact-form", intent: "phone-consultation", icon: "phone"
    }
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Contact Options</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Choose The Best Way To Get Started</h2>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          ${items.map((item) => `
            <article class="contact-option-card luxe-card flex flex-col p-6">
              <div class="icon-badge mb-4">${icon(item.icon)}</div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${item.title}</h3>
              <p class="mt-3 text-sm leading-7 text-ink/66">${item.copy}</p>
              <p class="mt-5 text-xs font-bold uppercase tracking-[.12em] text-soft-gold/90">Best For</p>
              <ul class="mt-2 space-y-2 text-sm leading-6 text-ink/66">${item.bestFor.map((x) => `<li class="flex gap-2">${icon("sparkle", "mt-1 text-champagne")} <span>${x}</span></li>`).join("")}</ul>
              <div class="contact-option-actions mt-auto pt-6">
                <a href="${item.href}" ${item.intent ? `data-contact-intent="${item.intent}"` : ""} class="btn btn-navy justify-center">${icon(item.icon)} ${item.label}</a>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function contactForm() {
  const inputClass = "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-champagne";
  const interestOptions = ["Injectables", "Botox or Neurotoxins", "Dermal Fillers", "Radiesse", "Restylane", "Sculptra", "PDO Threads", "Facial Balancing", "Skin and Tightening", "Regenerative Aesthetics", "IV and Wellness", "Intimate Wellness", "Memberships", "Not Sure Yet"];
  const nextStepOptions = [["book-appointment", "Book an appointment"], ["treatment-assessment", "Start with a treatment assessment"], ["phone-consultation", "Request a phone consultation"], ["general-question", "Ask a question first"]];
  return `
    <section id="contact-form" class="section-shell bg-mist scroll-mt-36">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="luxe-card p-7 sm:p-9">
          <div data-contact-form-shell>
            <p class="eyebrow">Contact Form</p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Send A Message</h2>
            <p class="mt-4 max-w-3xl leading-8">Use the form below to contact Elite VitaMed. A member of the team will follow up with you to help answer your questions or guide you toward the right next step.</p>
            <form class="mt-7 grid gap-4 sm:grid-cols-2" data-contact-form novalidate>
              <label class="contact-field">First Name <span aria-hidden="true">*</span><input class="${inputClass}" name="first_name" autocomplete="given-name" /></label>
              <label class="contact-field">Last Name<input class="${inputClass}" name="last_name" autocomplete="family-name" /></label>
              <label class="contact-field">Phone Number<input class="${inputClass}" name="phone" inputmode="tel" autocomplete="tel" /></label>
              <label class="contact-field">Email Address<input class="${inputClass}" name="email" type="email" autocomplete="email" /></label>
              <label class="contact-field sm:col-span-2">What are you interested in? <span aria-hidden="true">*</span>
                <select class="${inputClass}" name="treatment_interest"><option value="">Select one</option>${interestOptions.map((o) => `<option>${o}</option>`).join("")}</select>
              </label>
              <label class="contact-field sm:col-span-2">Preferred Next Step
                <select class="${inputClass}" name="request_type"><option value="">Select one</option>${nextStepOptions.map(([v, l]) => `<option value="${v}">${l}</option>`).join("")}</select>
              </label>
              <label class="contact-field sm:col-span-2">Message<textarea class="${inputClass} min-h-32" name="message" placeholder="Tell us what you are interested in, what you would like help with, or which treatment you are considering."></textarea></label>
              <label class="flex items-start gap-3 text-sm leading-6 text-ink/70 sm:col-span-2">
                <input class="mt-1 h-4 w-4 accent-[#2c3e50]" type="checkbox" name="follow_up_consent" />
                <span>I agree to receive follow-up messages about my request. Final consent wording should be provider-reviewed before launch.</span>
              </label>
              <div class="sm:col-span-2" data-contact-errors aria-live="polite"></div>
              <button class="btn btn-navy justify-center sm:w-fit" type="submit">${icon("arrow")} Send Message</button>
              <p class="text-xs leading-6 text-ink/58 sm:col-span-2">Please do not submit urgent medical concerns through this form. If you are experiencing a medical emergency, seek immediate medical care.</p>
            </form>
          </div>
          <div class="hidden rounded-2xl border border-champagne/30 bg-white/85 p-7" data-contact-confirmation tabindex="-1">
            <div class="icon-badge mb-4">${icon("shield")}</div>
            <p class="eyebrow">Request Received</p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-navy">Thank You For Reaching Out</h2>
            <p class="mt-4 leading-8">Thank you for reaching out to Elite VitaMed. Our team received your message and will follow up to help guide your next step.</p>
            <button class="btn btn-navy mt-6 justify-center" type="button" data-contact-reset>${icon("arrow")} Send Another Request</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function contactLocation() {
  const details = [
    ["Phone", `<a href="tel:+16037657760" class="text-navy underline decoration-champagne/60 underline-offset-2">(603) 765-7760</a> · <a href="tel:+17164520835" class="text-navy underline decoration-champagne/60 underline-offset-2">(716) 452-0835</a>`, "phone"],
    ["Email", `<a href="mailto:elitevitamedaesthetics@gmail.com" class="text-navy underline decoration-champagne/60 underline-offset-2">elitevitamedaesthetics@gmail.com</a>`, "users"],
    ["Hours", "[Insert business hours]", "calendar"],
    ["Booking Link", `<a href="#book" class="text-navy underline decoration-champagne/60 underline-offset-2">Book online</a>`, "arrow"]
  ];
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p class="eyebrow">Location</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Aesthetic and Wellness Care in New Hampshire</h2>
          <p class="mt-4 leading-8 text-ink/70">Elite VitaMed provides premium aesthetic and wellness treatments in New Hampshire with a provider led, concierge focused approach.</p>
          <p class="mt-4 leading-8 text-ink/70">Care may include injectable treatments, skin and tightening, regenerative aesthetics, IV drip therapy, vitamin shots, intimate wellness consultations, and personalized treatment planning.</p>
          <div class="mt-6 space-y-3">
            <div class="rounded-2xl border border-navy/10 bg-white p-5" data-content-placeholder="location"><p class="text-xs font-bold uppercase tracking-[.12em] text-soft-gold/90">Service Area or Business Location</p><p class="mt-1 text-sm leading-7 text-ink/55">[Insert service area or business location details here.]</p></div>
            <div class="rounded-2xl border border-navy/10 bg-white p-5" data-content-placeholder="service-area"><p class="text-xs font-bold uppercase tracking-[.12em] text-soft-gold/90">New Hampshire Service Areas</p><p class="mt-1 text-sm leading-7 text-ink/55">[Insert New Hampshire service areas here.]</p></div>
          </div>
        </div>
        <div class="rounded-[1.5rem] border border-champagne/30 bg-white p-6 shadow-sm sm:p-8">
          <p class="eyebrow">Contact Details</p>
          <h3 class="mt-3 font-serif text-3xl font-semibold text-navy">Reach Elite VitaMed</h3>
          <dl class="mt-5 space-y-4">
            ${details.map((d) => `<div class="flex items-start gap-3" data-content-placeholder="contact-detail"><div class="icon-badge">${icon(d[2])}</div><div><dt class="text-xs font-bold uppercase tracking-[.12em] text-soft-gold/90">${d[0]}</dt><dd class="mt-1 text-sm leading-6 text-ink/55">${d[1]}</dd></div></div>`).join("")}
          </dl>
        </div>
      </div>
    </section>
  `;
}

function contactExpect() {
  const steps = [
    ["Reach Out", "Send a message, book directly, start the treatment assessment, or request a phone consultation."],
    ["Share Your Goals", "Tell Elite VitaMed what you are interested in, what concerns you want help with, and whether you already know which treatment you want."],
    ["Receive Guidance", "The team can help guide you toward booking, a provider led consultation, or the right treatment assessment."],
    ["Begin Your Treatment Plan", "Your provider will review your goals, medical history, treatment history, anatomy, and candidacy before making final recommendations."]
  ];
  return `<section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">What To Expect</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What To Expect After Contacting Elite VitaMed</h2></div><div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${steps.map((x, i) => `<article class="rounded-2xl border border-navy/10 bg-mist/70 p-5"><p class="treatment-card-label">Step ${i + 1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>`;
}

function contactReasons() {
  const reasons = ["Looking refreshed without looking overdone", "Choosing between Botox and filler", "Improving facial balance", "Softening lines and wrinkles", "Restoring volume or contour", "Supporting jawline definition", "Refreshing under eyes", "Improving skin texture or glow", "Supporting firmer looking skin", "Exploring PRP, PRF, or hair restoration", "Booking IV drip therapy", "Choosing the right IV drip", "Learning about memberships", "Requesting a private intimate wellness consultation", "Understanding which treatment is right for them"];
  return `<section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Popular Reasons</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Popular Reasons Clients Reach Out</h2><p class="mt-4 leading-8 text-ink/68">Clients often contact Elite VitaMed for help with:</p></div><div class="mt-8 flex flex-wrap justify-center gap-2">${reasons.map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>`;
}

function contactProviderCare() {
  return `<section class="section-shell bg-white"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Provider Led Care</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Your Care Starts With A Thoughtful Conversation</h2><p class="mt-5 leading-8 text-ink/70">Elite VitaMed is built around premium, provider led aesthetic and wellness care. Treatments are performed by a Nurse Practitioner and certified injector with a focus on safety, natural looking results, candidacy, and personalized planning.</p><p class="mt-4 leading-8 text-ink/70">You do not need to know exactly what to book before reaching out. The goal is to help you understand your options and choose a starting point that makes sense for your goals.</p></div></section>`;
}

function contactTreatmentCategories() {
  const categories = [
    ["Injectables", "Botox, dermal fillers, Radiesse, Restylane, Sculptra, PDO threads, facial balancing, jawline contouring, under eye rejuvenation, and non surgical face lift planning.", "Explore Injectables", "#injectables", "syringe"],
    ["Skin and Tightening", "Breeze, WonderTouch, Ultimate Glow & Lift, facial contouring, microneedling with stem cells, and chemical peels.", "Explore Skin and Tightening", "#skin-tightening", "sparkle"],
    ["Regenerative Aesthetics", "PRP and PRF, hair restoration, and collagen stimulation treatments.", "Explore Regenerative Aesthetics", "#regenerative-aesthetics", "shield"],
    ["IV and Wellness", "IV drip therapy, Hydration IV, Energy IV, Immunity IV, Beauty IV, Recovery IV, and vitamin shots.", "Explore IV and Wellness", "#iv-wellness", "gem"],
    ["Intimate Wellness", "Private feminine wellness and vaginal tightening consultations with respectful, provider led care.", "Request A Private Consultation", "#contact/contact-form", "home", "private"]
  ];
  return `<section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Explore Treatments</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Treatments Before You Book</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${categories.map((c) => `<article class="luxe-card flex flex-col p-6"><div class="icon-badge mb-4">${icon(c[4])}</div><h3 class="font-serif text-2xl font-semibold text-navy">${c[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${c[1]}</p><div class="mt-auto pt-6"><a href="${c[3]}" ${c[5] === "private" ? `data-contact-intent="phone-consultation"` : ""} class="btn btn-navy justify-center">${icon("arrow")} ${c[2]}</a></div></article>`).join("")}</div></div></section>`;
}

function contactPrivateConsult() {
  return `<section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><div><p class="eyebrow">Private Consultation</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Request A Private Consultation</h2><p class="mt-4 leading-8 text-ink/70">Some concerns are personal, and Elite VitaMed provides a discreet way to begin the conversation.</p><p class="mt-3 text-sm leading-7 text-ink/64">Private consultations may be appropriate for intimate wellness, feminine wellness, vaginal tightening discussions, or any treatment concern you would rather discuss before booking.</p></div><div class="flex flex-col gap-3"><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn btn-gold justify-center">${icon("phone")} Request A Private Consultation</a><a href="#contact/contact-form" data-contact-intent="general-question" class="btn border border-navy/15 bg-ivory text-navy justify-center">${icon("arrow")} Contact Elite VitaMed</a></div></div></section>`;
}

function contactReviews() {
  return `<section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Google Reviews</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2><p class="mt-4 leading-8 text-ink/68">Clients trust Elite VitaMed for personalized aesthetic and wellness care performed by a Nurse Practitioner and certified injector, with the privacy and convenience of concierge appointments.</p><div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div><p class="mt-2 text-sm font-bold text-navy">Rated 5.0 stars on Google · 100+ reviews</p></div><div class="mt-9 grid gap-5 md:grid-cols-2">${reviewCards(2)}</div><div class="mt-8 text-center"><a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Reviews</a></div></div></section>`;
}

function contactFaq() {
  return `<section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">Frequently Asked Questions</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Contact Questions</h2></div>${faqList([["How do I book an appointment?","You can book directly through the booking link, submit the contact form, or start with a treatment assessment if you are not sure which treatment to choose."],["What if I am not sure what treatment I need?","Start with the treatment assessment or request a phone consultation. Elite VitaMed can help guide you toward the treatment category that may fit your goals."],["Can I request a phone consultation before booking?","Yes. A phone consultation is a helpful option if you have questions, are new to aesthetic or wellness treatments, or want help choosing the right starting point."],["Do you offer mobile or concierge appointments?","Elite VitaMed offers care with a concierge focused approach. Availability, service areas, and appointment options should be confirmed when booking."],["Who performs the treatments?","Treatments are performed by a Nurse Practitioner and certified injector."],["Can I ask about multiple treatments at once?","Yes. Many clients are interested in more than 1 treatment area. Your provider can help you understand whether a single treatment or combination plan may be appropriate."],["How fast will someone respond?","Response times may vary. Add the preferred response time here once confirmed."],["Can I contact Elite VitaMed for intimate wellness questions?","Yes. You can request a private consultation for intimate wellness, feminine wellness, or vaginal tightening questions. These consultations are handled with discretion and provider led care."]])}</div></section>`;
}

function contactFinalCta() {
  return `<section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Take The Next Step?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Whether you are ready to book, want to start with an assessment, or prefer to speak with someone first, Elite VitaMed can help you choose the right path forward.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>`;
}

function aboutPage() {
  const values = [
    ["Quality First", "Your care is performed by a qualified Nurse Practitioner and certified injector.", "shield"],
    ["Personalized Planning", "Your treatment path is based on your goals, anatomy, comfort level, and treatment history.", "calendar"],
    ["Natural Looking Results", "The focus is helping you look refreshed, balanced, and confident, not overdone.", "sparkle"],
    ["Education Before Treatment", "You should understand your options before making a decision.", "users"]
  ];
  const differences = [
    ["Nurse Practitioner Led Care", "Treatments are performed by a qualified medical provider.", "shield"],
    ["Certified Injector Expertise", "Injectable treatments are guided by training, facial anatomy, precision, and experience.", "syringe"],
    ["Mobile Concierge Convenience", "Receive care in a private and comfortable setting without the stress of a traditional visit.", "home"],
    ["Personalized Recommendations", "Your care plan is built around your goals, comfort level, and what is appropriate for you.", "calendar"],
    ["Clear Next Steps", "If you are unsure what you need, you can start with a Treatment Assessment or request a phone consultation before booking.", "arrow"]
  ];
  const treatments = [
    ["Injectables", "Botox or neurotoxins, dermal fillers, Sculptra, Radiesse, PDO threads, facial balancing, and full face refresh options designed to support natural looking results.", "syringe"],
    ["Regenerative Aesthetics", "PRP, PRF, hair restoration, skin rejuvenation, and collagen stimulation treatments designed to support natural rejuvenation and long term aesthetic goals.", "sparkle"],
    ["Skin and Tightening", "Treatment options for skin laxity, neck tightening, texture support, and non surgical tightening goals.", "shield"],
    ["IV and Wellness", "IV drip therapy, NAD+ Therapy, Myers' Cocktail, Vitamin Injections, hydration support, energy support, immunity support, beauty, recovery, and wellness optimization.", "droplet"],
    ["Intimate Wellness", "Private, provider led care designed to support feminine wellness, comfort, confidence, and intimate wellness goals.", "heart"]
  ];
  return `
    <section class="hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pt-24">
        <div class="reveal">
          <p class="eyebrow">About Elite VitaMed</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Provider Led Aesthetic and Wellness Care, Built Around You</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-2xl leading-8">Elite VitaMed provides premium injectable treatments, IV drips, wellness care, and advanced aesthetic treatments performed by a Nurse Practitioner and certified injector.</p>
          <p class="hero-copy mt-4 max-w-2xl leading-7">Our goal is to help you look refreshed, feel confident, and understand your options before moving forward with treatment. With mobile and in home concierge appointments available, Elite VitaMed brings top tier aesthetic and wellness care to you without compromising quality, safety, or personalization.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Care performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          ${imageBox("tiana", "relative z-10 min-h-[24rem] rounded-[2rem] border border-champagne/30 shadow-luxe lg:min-h-[31rem]")}
        </div>
      </div>
    </section>
    <section id="meet-tiana" class="section-shell bg-white scroll-mt-36">
      <div class="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <p class="eyebrow">Meet Your Provider</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold leading-tight text-navy sm:text-5xl">Care Led By A Nurse Practitioner and Certified Injector</h2>
          <p class="mt-5 leading-8 text-ink/70">Tiana founded Elite VitaMed to give clients a more personal, thoughtful, and convenient way to receive aesthetic and wellness care.</p>
          <p class="mt-4 leading-8 text-ink/70">As a Nurse Practitioner and certified injector, Tiana brings clinical knowledge, advanced training, and a personalized approach to every treatment. Her focus is helping each client feel informed, comfortable, and confident before choosing the right treatment path.</p>
          <p class="mt-4 leading-8 text-ink/70">Every client has different goals, anatomy, treatment history, and comfort levels. That is why Elite VitaMed does not take a one size fits all approach. Each recommendation is guided by your desired outcome, your features, your wellness goals, and what is appropriate for you.</p>
          <p class="mt-4 leading-8 text-ink/70">The goal is not to change who you are. The goal is to help you look refreshed, feel supported, and move forward with confidence.</p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" class="btn btn-navy justify-center">${icon("phone")} Book A Consultation</a>
            <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
        </div>
        <div>${imageBox("tiana", "rounded-[1.5rem] shadow-luxe")}</div>
      </div>
    </section>
    <section class="section-shell bg-mist">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Our Approach</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Natural Looking Results Start With A Thoughtful Plan</h2>
          <p class="mt-4 leading-8 text-ink/68">Aesthetic and wellness care should never feel rushed, confusing, or overly generic. At Elite VitaMed, every treatment starts with understanding what you want to improve, how you want to feel, and what kind of result you are hoping for.</p>
          <p class="mt-3 leading-8 text-ink/68">Whether you are interested in Botox or neurotoxins, dermal fillers, facial balancing, IV drips, regenerative aesthetics, skin tightening, or intimate wellness, your care should feel clear, comfortable, and personalized.</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          ${values.map((item) => `
            <article class="luxe-card p-7">
              <div class="icon-badge mb-5">${icon(item[2])}</div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3>
              <p class="mt-3 text-sm leading-7 text-ink/66">${item[1]}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    <section id="concierge" class="section-shell bg-white scroll-mt-36">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Why Clients Choose Elite VitaMed</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Premium Care With The Privacy and Convenience Of Concierge Appointments</h2>
          <p class="mt-4 leading-8 text-ink/68">Elite VitaMed combines provider led aesthetic and wellness care with a more private, convenient experience. This is not a shortcut version of care. It is premium care delivered in a way that better fits your life.</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          ${differences.map((item) => `<article class="rounded-2xl border border-navy/10 bg-mist/70 p-5"><div class="icon-badge mb-4">${icon(item[2])}</div><h3 class="font-serif text-2xl font-semibold text-navy">${item[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/65">${item[1]}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center"><p class="eyebrow">What We Offer</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Aesthetic and Wellness Treatments Designed Around Your Goals</h2><p class="mt-4 leading-8 text-ink/68">Elite VitaMed offers a range of provider led treatments designed to support confidence, wellness, and long term care planning.</p></div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          ${treatments.map((item) => `<article class="luxe-card p-6"><div class="icon-badge mb-4">${icon(item[2])}</div><h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${item[1]}</p></article>`).join("")}
        </div>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="#services" class="btn btn-navy justify-center">${icon("arrow")} View Treatments</a><a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Treatment Assessment</a></div>
      </div>
    </section>
    ${homeConcierge()}
    ${homeAssessment()}
    ${homeResults()}
    ${homeReviews()}
    ${homeFinancing()}
    ${homeFaq()}
    ${homeFinalCta()}
  `;
}

function assessmentPage() {
  const whyUnderstand = ["Which treatment category may fit your goals", "Which concerns should be discussed during consultation", "Whether you may be better suited for injectables, skin treatments, IV therapy, regenerative aesthetics, or intimate wellness", "Whether a provider consultation should come before choosing a specific treatment", "Which next step may make the most sense for your goals"];
  const helpWith = ["Looking more refreshed", "Softening lines and wrinkles", "Restoring facial volume", "Improving facial balance", "Enhancing lips, cheeks, chin, or jawline", "Refreshing tired looking under eyes", "Supporting skin glow and texture", "Improving the look of firmness or mild laxity", "Exploring PRP or PRF", "Supporting hair restoration goals", "Choosing an IV drip or vitamin shot", "Discussing intimate wellness privately", "Understanding where to start before booking"];
  const howItWorks = [
    ["Answer A Few Questions", "You will answer questions about your goals, concerns, preferences, and which areas you want to improve."],
    ["Get A Suggested Starting Point", "Your answers may guide you toward a treatment category or specific treatment direction that may be worth discussing."],
    ["Review Your Recommended Next Step", "Your result may point you toward a treatment page, consultation, phone call, or booking option."],
    ["Confirm With Your Provider", "Your provider will review your goals, anatomy, medical history, treatment history, and candidacy before making final recommendations."]
  ];
  const assessments = [
    { featured: true, title: "Start With The Main Treatment Assessment", bestFor: "Best for clients who are not sure where to begin.", lead: "This assessment can help guide you toward:", items: ["Injectables", "Regenerative Aesthetics", "Skin and Tightening", "IV and Wellness", "Intimate Wellness", "A provider consultation", "A phone consultation", "A treatment recommendation page"], cta: "Start Treatment Assessment", href: "#contact/contact-form", intent: "treatment-assessment", icon: "shield" },
    { title: "Injectables Assessment", bestFor: "Best for clients interested in Botox, filler, facial balancing, PDO threads, Sculptra, Radiesse, or non surgical facial rejuvenation.", lead: "This assessment may help if you are wondering about:", items: ["Botox or neurotoxins", "Dermal fillers", "Restylane", "Radiesse", "Sculptra", "PDO threads", "Lip filler", "Cheek filler", "Chin filler", "Jawline contouring", "Under eye rejuvenation", "Facial balancing", "Non surgical face lift planning"], cta: "Start Injectable Assessment", href: "#injectables-assessment", icon: "syringe" },
    { title: "Skin and Tightening Assessment", bestFor: "Best for clients interested in skin glow, texture, firmness, mild laxity, contouring, or skin rejuvenation.", lead: "This assessment may help if you are wondering about:", items: ["Breeze", "WonderTouch", "Ultimate Glow & Lift", "Facial Contouring", "Microneedling with Stem Cells", "Chemical Peels", "Skin texture", "Glow support", "Firmness support", "Fine lines", "Acne related texture concerns"], cta: "Start Skin Assessment", href: "#contact/contact-form", intent: "treatment-assessment", icon: "sparkle" },
    { title: "IV Therapy Assessment", bestFor: "Best for clients interested in hydration support, wellness support, vitamin shots, or IV drip therapy.", lead: "This assessment may help if you are wondering about:", items: ["Hydration IV", "Energy IV", "Immunity IV", "Beauty IV", "Recovery IV", "Vitamin Shots", "Travel recovery", "Post event support", "Energy support", "Wellness maintenance"], cta: "Start IV Therapy Assessment", href: "#contact/contact-form", intent: "treatment-assessment", icon: "droplet" },
    { title: "Regenerative Aesthetics Assessment", bestFor: "Best for clients interested in PRP, PRF, hair restoration, or collagen focused treatment planning.", lead: "This assessment may help if you are wondering about:", items: ["PRP and PRF", "Hair Restoration", "Collagen Stimulation Treatments", "Skin quality support", "Under eye support", "Hair thinning concerns", "Texture support", "Natural looking rejuvenation"], cta: "Start Regenerative Assessment", href: "#contact/contact-form", intent: "treatment-assessment", icon: "leaf" },
    { title: "Intimate Wellness Assessment", bestFor: "Best for clients who want a private, respectful way to discuss feminine wellness or vaginal tightening options.", lead: "This assessment may help if you are wondering about:", items: ["Feminine Wellness", "Vaginal Tightening", "Private consultation options", "Tissue support concerns", "Intimate confidence", "Postpartum changes, when medically appropriate", "Age related changes", "Whether medical evaluation should come first"], cta: "Start Private Assessment", href: "#contact/contact-form", intent: "phone-consultation", icon: "heart" }
  ];
  const afterAssessment = ["Booking an appointment", "Requesting a phone consultation", "Starting with injectables", "Starting with skin and tightening", "Starting with IV drip therapy", "Starting with regenerative aesthetics", "Requesting a private intimate wellness consultation", "Reviewing a specific treatment page", "Discussing a combination treatment plan"];
  const treatmentPaths = [
    ["Injectables", "For clients interested in softening expression lines, restoring volume, contouring features, supporting facial balance, or refreshing their appearance without surgery.", ["Botox or Neurotoxins", "Dermal Fillers", "Restylane Fillers", "Radiesse Fillers", "Sculptra", "PDO Threads", "Facial Balancing", "Non Surgical Face Lift", "Jawline Contouring", "Under Eye Rejuvenation"], "syringe"],
    ["Skin and Tightening", "For clients interested in improving skin quality, glow, texture, firmness, and non surgical contouring support.", ["Breeze", "WonderTouch", "Ultimate Glow & Lift", "Facial Contouring", "Microneedling with Stem Cells", "Chemical Peels"], "sparkle"],
    ["Regenerative Aesthetics", "For clients interested in gradual support for skin quality, collagen response, hair restoration planning, or natural looking rejuvenation.", ["PRP and PRF", "Hair Restoration", "Collagen Stimulation Treatments"], "leaf"],
    ["IV and Wellness", "For clients interested in hydration support, energy support, recovery planning, beauty focused wellness, immune support planning, or vitamin shots.", ["Hydration IV", "Energy IV", "Immunity IV", "Beauty IV", "Recovery IV", "Vitamin Shots"], "droplet"],
    ["Intimate Wellness", "For clients who want a private, respectful consultation around feminine wellness, tissue support concerns, or vaginal tightening discussions.", ["Feminine Wellness", "Vaginal Tightening", "Private Consultation"], "heart"]
  ];
  const whyUse = ["I know what bothers me, but I do not know what treatment I need.", "I want to look refreshed, but not overdone.", "I am interested in injectables, but I do not know where to start.", "I want better skin, but I am unsure which treatment makes sense.", "I want IV therapy, but I do not know which drip to choose.", "I am curious about PRP or PRF, but I need more guidance.", "I want a private consultation before discussing intimate wellness.", "I want provider led guidance before booking."];
  const assessmentFaq = [
    ["What is the Elite VitaMed Treatment Assessment?", "The Treatment Assessment is an educational tool that helps guide you toward the treatment category or next step that may best fit your goals."],
    ["Is the assessment a medical recommendation?", "No. The assessment is a starting point only. Final treatment recommendations depend on provider evaluation, your goals, anatomy, medical history, treatment history, and what is appropriate for you."],
    ["What if I do not know which assessment to take?", "Start with the main Treatment Assessment. It can help guide you toward the right category."],
    ["Can I book without taking the assessment?", "Yes. If you already know which treatment you want, you can book your appointment directly. Your provider will still confirm whether the treatment is appropriate during your consultation."],
    ["What if I get a result but want a different treatment?", "You can still discuss other options during your consultation. Your provider will help determine which treatment direction is safest and most appropriate."],
    ["Can the assessment recommend multiple treatments?", "Yes. Some clients may be guided toward a combination plan, especially if their goals involve facial balancing, skin quality, firmness, volume, or overall rejuvenation."],
    ["Is there an IV specific assessment?", "Yes. The IV Therapy Assessment can help guide clients toward Hydration IV, Energy IV, Immunity IV, Beauty IV, Recovery IV, Vitamin Shots, or an IV Therapy Phone Consult."],
    ["Is there a private assessment for intimate wellness?", "Yes. The Intimate Wellness Assessment is designed to be private and respectful for clients who want to discuss Feminine Wellness or Vaginal Tightening options."]
  ];
  return `
    <section class="hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-20 sm:px-6 lg:grid-cols-[1fr_.86fr] lg:px-8 lg:pt-24">
        <div class="reveal">
          <p class="eyebrow">Treatment Assessment in New Hampshire</p>
          <h1 class="mt-4 max-w-4xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Not Sure Which Treatment Is Right For You?</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-3xl leading-8">Start with the Elite VitaMed Treatment Assessment to get a clearer starting point for aesthetic, wellness, injectable, skin, regenerative, IV, and intimate wellness treatments.</p>
          <p class="hero-copy mt-4 max-w-3xl leading-7">Choosing the right treatment can feel overwhelming when there are so many options. The Treatment Assessment helps guide you toward the treatment category that may best match your goals, concerns, and comfort level before you book.</p>
          <p class="hero-copy mt-4 max-w-3xl text-sm leading-7 text-white/65">Your result is educational and does not replace a provider consultation. Final recommendations depend on your goals, anatomy, medical history, treatment history, and what is appropriate for you.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#assessment/assessment-options" class="btn btn-gold justify-center">${icon("sparkle")} Start Treatment Assessment</a>
            <a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-ghost justify-center">${icon("calendar")} Book Your Appointment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Provider led care performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          <div class="relative z-10 overflow-hidden rounded-[2rem] border border-champagne/30 bg-white/8 p-3 shadow-luxe backdrop-blur">
            ${imageBox("assessment", "min-h-[25rem] rounded-[1.5rem]")}
            <div class="mt-3 grid gap-3 sm:grid-cols-3">
              ${["Injectables", "IV Wellness", "Full Plan"].map((item) => `<span class="rounded-full border border-champagne/25 bg-white/10 px-3 py-3 text-center text-xs font-bold uppercase tracking-[.14em] text-soft-gold">${item}</span>`).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">Why Start Here</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Why Start With A Treatment Assessment?</h2><p class="mt-4 leading-8 text-ink/70">You do not need to know exactly what to book before reaching out.</p><p class="mt-4 leading-8 text-ink/70">Many clients know what they want to improve, but they are not sure whether Botox, filler, Sculptra, Radiesse, PDO threads, skin tightening, PRP, IV therapy, or another option is the best fit.</p><p class="mt-4 text-sm leading-7 text-ink/60">The Treatment Assessment gives you a more informed starting point so you can move forward with more clarity.</p></div><div class="rounded-[1.5rem] border border-navy/10 bg-ivory p-6 sm:p-8"><p class="text-sm font-bold uppercase tracking-[.12em] text-soft-gold/90">This assessment may help you understand</p><ul class="mt-4 space-y-3 text-sm leading-7 text-ink/70">${whyUnderstand.map((x) => `<li class="flex gap-2">${icon("sparkle", "mt-1 text-champagne")} <span>${x}</span></li>`).join("")}</ul></div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">What It Helps With</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What The Assessment Can Help With</h2><p class="mt-4 leading-8 text-ink/68">The Treatment Assessment may help guide clients who are interested in:</p></div><div class="mt-8 flex flex-wrap justify-center gap-2">${helpWith.map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">How It Works</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">How It Works</h2></div><div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${howItWorks.map((x, i) => `<article class="rounded-2xl border border-navy/10 bg-mist/70 p-5"><p class="treatment-card-label">Step ${i + 1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>

    <section class="section-shell bg-mist"><div id="assessment-options" class="mx-auto max-w-7xl scroll-mt-36 px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Assessment Options</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Choose The Assessment That Fits Your Goals</h2></div><div class="mt-10 grid gap-5 lg:grid-cols-2">${assessments.map((a) => `<article class="luxe-card flex flex-col p-6 sm:p-7 ${a.featured ? "border-champagne/45 shadow-gold lg:col-span-2" : ""}"><div class="icon-badge mb-4">${icon(a.icon)}</div><h3 class="font-serif text-3xl font-semibold text-navy">${a.title}</h3><p class="mt-3 text-sm font-bold uppercase tracking-[.12em] text-soft-gold/90">${a.bestFor}</p><p class="mt-4 text-sm leading-7 text-ink/66">${a.lead}</p><div class="mt-3 flex flex-wrap gap-2">${a.items.map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div><div class="mt-auto pt-6"><a href="${a.href}" ${a.intent ? `data-contact-intent="${a.intent}"` : ""} class="btn ${a.featured ? "btn-gold" : "btn-navy"} justify-center">${icon("arrow")} ${a.cta}</a></div></article>`).join("")}</div></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 sm:px-10 lg:grid-cols-[1fr_auto]"><div><p class="eyebrow">Still Deciding?</p><h2 class="mt-3 font-serif text-4xl font-semibold">Not Sure Which Assessment To Choose?</h2><p class="mt-3 max-w-2xl leading-7 text-white/70">Start with the main Treatment Assessment.</p><p class="mt-3 max-w-2xl text-sm leading-7 text-white/60">It is designed to help guide you toward the right category before you choose a specific treatment path.</p></div><div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="#assessment/assessment-options" class="btn btn-gold justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn btn-ghost justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">After Your Assessment</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Happens After Your Assessment?</h2><p class="mt-4 leading-8 text-ink/70">After completing the assessment, you may be guided toward a recommended next step. Your result may suggest:</p><p class="mt-5 text-sm leading-7 text-ink/60">Your result is not a final medical recommendation. It is a starting point to help guide your consultation.</p></div><div class="flex flex-wrap content-start gap-2">${afterAssessment.map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Provider Led Review</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Your Final Treatment Plan Comes From Provider Evaluation</h2><p class="mt-5 leading-8 text-ink/70">The assessment helps narrow the starting point, but your provider makes final recommendations.</p><p class="mt-4 leading-8 text-ink/70">Elite VitaMed treatments are performed by a Nurse Practitioner and certified injector. Your provider will review your goals, anatomy, medical history, medications, treatment history, and candidacy before recommending any treatment.</p><p class="mt-4 text-sm leading-7 text-ink/60">This helps make sure your plan is personalized, appropriate, and aligned with your desired outcome.</p></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Treatment Paths</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Treatment Paths The Assessment May Recommend</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${treatmentPaths.map((p) => `<article class="luxe-card flex flex-col p-6"><div class="icon-badge mb-4">${icon(p[3])}</div><h3 class="font-serif text-2xl font-semibold text-navy">${p[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${p[1]}</p><p class="mt-4 text-xs font-bold uppercase tracking-[.12em] text-soft-gold/90">May Include</p><div class="mt-2 flex flex-wrap gap-2">${p[2].map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></article>`).join("")}</div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Why Clients Use It</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Why Clients Use The Assessment</h2><p class="mt-4 leading-8 text-ink/68">Clients often use the Treatment Assessment when they are thinking:</p></div><div class="mt-9 grid gap-5 md:grid-cols-2">${whyUse.map((x) => `<article class="luxe-card p-6"><p class="font-serif text-2xl leading-8 text-navy">"${x}"</p></article>`).join("")}</div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Google Reviews</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2><p class="mt-4 leading-8 text-ink/68">Clients trust Elite VitaMed for personalized aesthetic and wellness care performed by a Nurse Practitioner and certified injector, with the privacy and convenience of concierge appointments.</p><div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div><p class="mt-2 text-sm font-bold text-navy">Rated 5.0 stars on Google · 100+ reviews</p></div><div class="mt-9 grid gap-5 md:grid-cols-2">${reviewCards(2)}</div><div class="mt-8 text-center"><a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Reviews</a></div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Assessment FAQ</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Treatment Assessment Questions</h2></div><div class="mt-8">${faqList(assessmentFaq)}</div></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Find Your Best Starting Point?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">You do not have to guess which treatment is right for you.</p><p class="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/60">Start the Elite VitaMed Treatment Assessment and get a clearer path toward provider led aesthetic and wellness care in New Hampshire.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="#assessment/assessment-options" class="btn btn-gold justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-ghost justify-center">${icon("calendar")} Book Your Appointment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

function membershipsPage() {
  const whyJoin = ["A more structured self care routine", "Help staying consistent with treatments", "A simple way to plan care throughout the year", "Provider led guidance instead of guessing", "Aesthetic maintenance support", "Skin health and glow maintenance", "IV and wellness support", "Priority access or preferred booking options, if offered", "A more personalized long term treatment plan", "A premium concierge care experience"];
  const membershipOptions = [
    {
      name: "Skin and Glow Membership",
      bestFor: "Clients who want consistent skin maintenance, glow support, texture improvement, and seasonal skin refresh planning.",
      mayInclude: ["Monthly or recurring skin treatment credit", "Preferred access to skin and tightening treatments", "Treatment planning for Breeze, chemical peels, or microneedling", "Member savings on select skin treatments, if offered", "Provider led skincare and treatment guidance", "Priority booking, if offered"],
      idealFor: "Clients focused on smoother texture, glow, skin quality, and a more consistent skin care routine.",
      cta: "Join Skin and Glow Membership", icon: "sparkle"
    },
    {
      name: "Injectables Maintenance Membership",
      bestFor: "Clients who want a more consistent way to maintain Botox, filler, facial balancing, or injectable treatment planning.",
      mayInclude: ["Monthly treatment credit", "Injectable maintenance planning", "Preferred pricing on select injectable treatments, if offered", "Priority booking, if offered", "Provider led facial assessment", "Treatment planning for Botox, fillers, Sculptra, Radiesse, or PDO threads when appropriate"],
      idealFor: "Clients who want to maintain a refreshed, natural looking appearance with ongoing provider led injectable care.",
      cta: "Join Injectables Membership", icon: "syringe"
    },
    {
      name: "IV and Wellness Membership",
      bestFor: "Clients who want ongoing wellness support through IV drip therapy, vitamin shots, hydration support, and recovery planning.",
      mayInclude: ["Monthly IV drip or wellness credit", "Preferred access to IV drip therapy", "Vitamin shot options, if offered", "Hydration, energy, beauty, immunity, or recovery support planning", "Provider led wellness review", "Priority booking, if offered"],
      idealFor: "Clients who want a structured way to support hydration, energy, recovery, beauty focused wellness, or general wellness maintenance.",
      cta: "Join IV and Wellness Membership", icon: "gem"
    },
    {
      name: "Elite Concierge Membership",
      bestFor: "Clients who want a more complete provider led aesthetic and wellness plan with access to multiple treatment categories.",
      mayInclude: ["Monthly treatment credit", "Customized annual treatment planning", "Access to injectables, skin and tightening, regenerative aesthetics, and IV wellness support", "Preferred member savings, if offered", "Priority scheduling, if offered", "Private concierge treatment planning", "Ongoing provider led guidance"],
      idealFor: "Clients who want a premium, high touch approach to maintaining aesthetic and wellness goals throughout the year.",
      cta: "Join Elite Concierge Membership", icon: "shield"
    }
  ];
  const howItWorks = [
    ["Choose Your Membership Focus", "Select the membership that best fits your current goals, whether that is skin, injectables, IV wellness, or a more complete aesthetic and wellness plan."],
    ["Meet With Your Provider", "Your provider will review your goals, treatment history, medical history, and what you want to maintain or improve over time."],
    ["Create Your Treatment Rhythm", "Your membership helps create a more consistent plan for appointments, maintenance, and treatment timing."],
    ["Use Your Member Benefits", "Depending on the membership selected, benefits may include treatment credits, preferred pricing, priority booking, or access to specific treatment options."],
    ["Adjust As Your Goals Change", "Your treatment plan can evolve over time as your skin, wellness goals, or aesthetic priorities change."]
  ];
  const membershipBenefits = ["Consistent treatment planning", "Monthly treatment credits", "Provider led guidance", "Preferred member savings, if offered", "Priority booking, if offered", "A more organized aesthetic routine", "A more predictable wellness plan", "Access to multiple treatment categories", "Support for long term maintenance", "A premium concierge care experience"];
  const whoFor = ["Want to stay consistent with treatments", "Prefer a planned approach to self care", "Like having a provider guide your options", "Want to maintain results over time", "Are interested in skin, injectables, IV wellness, or combination care", "Want a more premium concierge experience", "Want a simpler way to budget for ongoing treatments", "Want to stop guessing what to book next"];
  const includedCategories = [
    ["Injectables", "Membership planning may include injectable treatments such as Botox or neurotoxins, dermal fillers, Radiesse, Restylane, Sculptra, PDO threads, facial balancing, and non surgical face lift planning when appropriate.", "syringe"],
    ["Skin and Tightening", "Membership planning may include Breeze, WonderTouch, Ultimate Glow & Lift, facial contouring, microneedling with stem cells, or chemical peels depending on your skin goals and candidacy.", "sparkle"],
    ["Regenerative Aesthetics", "Membership planning may include PRP, PRF, hair restoration, or collagen stimulation treatments when appropriate.", "shield"],
    ["IV and Wellness", "Membership planning may include IV drip therapy, vitamin shots, hydration support, energy support, recovery planning, beauty focused wellness, or immune support planning in appropriate candidates.", "gem"]
  ];
  const internalLinks = [
    ["Treatments", "#services"], ["Injectables", "#injectables"], ["Skin and Tightening", "#skin-tightening"], ["Regenerative Aesthetics", "#regenerative-aesthetics"], ["IV and Wellness", "#iv-wellness"], ["Intimate Wellness", "#intimate-wellness"], ["Treatment Assessment", "#assessment"], ["Results", "#results"], ["Contact", "#contact"]
  ];
  const membershipFaq = [
    ["What are Elite VitaMed memberships?", "Elite VitaMed memberships are ongoing aesthetic and wellness care options designed to help clients stay consistent with treatments, maintenance, and provider led planning."],
    ["Do memberships include injectables?", "Some memberships may include injectable treatment planning or member benefits for injectables, depending on the final membership structure. Exact inclusions should be confirmed before joining."],
    ["Do memberships include IV therapy?", "Some memberships may include IV drip therapy, vitamin shots, or wellness support depending on the selected membership."],
    ["Can I use my membership for skin treatments?", "Membership options may include skin and tightening treatments such as Breeze, WonderTouch, Ultimate Glow & Lift, microneedling with stem cells, or chemical peels depending on the membership selected."],
    ["Is a membership right for first time clients?", "Yes, a membership may be appropriate for first time clients who want an ongoing treatment plan, but your provider may recommend starting with a consultation or treatment assessment first."],
    ["Can my membership plan change over time?", "Your treatment plan may evolve as your goals, skin, wellness needs, or aesthetic priorities change. Membership structure and flexibility should be confirmed with Elite VitaMed before joining."],
    ["Are results guaranteed with a membership?", "No. Memberships support consistency and planning, but individual results vary based on treatment selection, anatomy, health history, skin quality, lifestyle, and how your body responds."],
    ["Can I finance membership treatments?", "Elite VitaMed offers financing through Cherry for eligible clients. Approval, payment plans, and eligibility are subject to Cherry's terms."]
  ];
  return `
    <section class="treatment-detail-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">${particles()}<div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24"><div class="reveal max-w-4xl"><p class="eyebrow">Aesthetic and Wellness Memberships in New Hampshire</p><h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Make Self Care More Consistent, Personalized, and Easy To Maintain</h1><div class="gold-rule mt-6"><span></span></div><p class="hero-copy mt-6 max-w-3xl leading-8">Elite VitaMed memberships are designed for clients who want ongoing provider led aesthetic and wellness care with a more structured way to stay consistent.</p><p class="hero-copy mt-4 max-w-3xl leading-7">Whether your goals include refreshed skin, injectable maintenance, IV wellness support, or a more complete aesthetic plan, Elite VitaMed memberships help you build a personalized routine around your goals, lifestyle, and treatment needs.</p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="#memberships/membership-options" class="btn btn-gold justify-center">${icon("gem")} Explore Membership Options</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a></div><p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Membership care is guided by a Nurse Practitioner and certified injector.</p></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">What They Are</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Elite VitaMed Memberships Are</h2><p class="mt-5 leading-8 text-ink/70">Elite VitaMed memberships are designed for clients who want a more consistent approach to aesthetic and wellness care.</p><p class="mt-4 leading-8 text-ink/70">Instead of waiting until concerns feel urgent, a membership gives you a structured way to maintain your skin, support your wellness goals, and plan treatments throughout the year with provider led guidance.</p><p class="mt-4 leading-8 text-ink/70">Your membership can help create a more intentional rhythm for your care, whether that includes skin treatments, injectables, IV drip therapy, vitamin shots, regenerative aesthetics, or a customized combination plan.</p><p class="mt-4 text-sm leading-7 text-ink/60">Memberships are not one size fits all. Your provider will help you choose the option that best aligns with your goals, treatment preferences, lifestyle, and what is appropriate for you.</p></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">Why Join</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Why Join A Membership</h2><p class="mt-4 leading-8 text-ink/70">Most aesthetic and wellness results are easier to maintain with consistency. A membership may be a strong fit if you want:</p><p class="mt-5 text-sm leading-7 text-ink/60">The goal is to make your care feel easier to plan, easier to maintain, and more aligned with your long term goals.</p></div><div class="flex flex-wrap content-start gap-2">${whyJoin.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>

    <section id="membership-options" class="section-shell bg-white scroll-mt-36"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Membership Options</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Choose The Membership That Fits Your Goals</h2><p class="mt-4 text-sm leading-7 text-ink/60">Final membership names, pricing, and exact inclusions will be confirmed before publishing.</p></div><div class="mt-10 grid gap-5 lg:grid-cols-2">${membershipOptions.map(m => `<article class="luxe-card flex flex-col p-6 sm:p-7"><div class="icon-badge mb-4">${icon(m.icon)}</div><h3 class="font-serif text-3xl font-semibold text-navy">${m.name}</h3><p class="mt-3 text-sm font-bold uppercase tracking-[.12em] text-soft-gold/90">Best For</p><p class="mt-1 text-sm leading-7 text-ink/66">${m.bestFor}</p><p class="mt-4 text-sm font-bold uppercase tracking-[.12em] text-soft-gold/90">May Include</p><ul class="mt-2 space-y-2 text-sm leading-6 text-ink/66">${m.mayInclude.map(x => `<li class="flex gap-2">${icon("sparkle", "mt-1 text-champagne")} <span>${x}</span></li>`).join("")}</ul><p class="mt-4 text-sm font-bold uppercase tracking-[.12em] text-soft-gold/90">Ideal For</p><p class="mt-1 text-sm leading-7 text-ink/66">${m.idealFor}</p><div class="mt-auto pt-6"><a href="#contact/contact-form" data-contact-intent="membership" class="btn btn-navy justify-center">${icon("gem")} ${m.cta}</a></div></article>`).join("")}</div></div></section>

    <section class="section-shell bg-mist"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">How It Works</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">How Memberships Work</h2><p class="mt-4 leading-8 text-ink/68">A membership creates a clear, provider led rhythm for your aesthetic and wellness care across the year.</p></div><div class="grid gap-4 sm:grid-cols-2">${howItWorks.map((x, i) => `<article class="rounded-2xl border border-navy/10 bg-white p-5"><p class="treatment-card-label">Step ${i + 1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Membership Benefits</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Membership Benefits May Include</h2></div><div class="mt-8 flex flex-wrap justify-center gap-2">${membershipBenefits.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-7 text-center text-sm leading-7 text-ink/58">Final membership benefits, pricing, eligibility, and terms should be confirmed before publishing.</p></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">Who They Are For</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Who Memberships Are For</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed memberships may be a strong fit for clients who want ongoing care instead of occasional one off treatments. Memberships may be ideal if you:</p><p class="mt-5 text-sm leading-7 text-ink/60">Memberships may not be the right fit for every client. Your provider can help determine whether a membership makes sense based on your goals and treatment plan.</p></div><div class="flex flex-wrap content-start gap-2">${whoFor.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">What May Be Included</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Treatment Categories That May Be Included</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2">${includedCategories.map(x => `<article class="luxe-card p-6"><div class="icon-badge mb-4">${icon(x[2])}</div><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>

    <section class="section-shell bg-mist"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">Provider Led Membership Planning</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">A Better Way To Maintain Your Aesthetic and Wellness Goals</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed memberships are designed around provider led care, not generic packages.</p></article><article class="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8"><p class="leading-8 text-ink/70">Your provider will help determine which treatments may make sense for your goals, which options should be spaced out, which treatments may work well together, and which treatments may not be appropriate for you.</p><p class="mt-4 text-sm leading-7 text-ink/64">This helps keep your plan intentional, safe, and aligned with your long term goals.</p></article></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 sm:px-10 lg:grid-cols-[1fr_auto]"><div><p class="eyebrow">Not Sure Where To Start?</p><h2 class="mt-3 font-serif text-4xl font-semibold">Not Sure Which Membership Is Right For You?</h2><p class="mt-3 max-w-2xl leading-7 text-white/70">You do not need to know the perfect membership before reaching out.</p><p class="mt-3 max-w-2xl text-sm leading-7 text-white/60">Start with a treatment assessment or request a phone consultation. Elite VitaMed can help you choose the membership path that best fits your aesthetic goals, wellness goals, and treatment preferences.</p></div><div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="#assessment" class="btn btn-gold justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn btn-ghost justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Google Reviews</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2><p class="mt-4 leading-8 text-ink/68">Clients trust Elite VitaMed for personalized aesthetic and wellness care performed by a Nurse Practitioner and certified injector, with the privacy and convenience of concierge appointments.</p><div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div><p class="mt-2 text-sm font-bold text-navy">Rated 5.0 stars on Google · 100+ reviews</p></div><div class="mt-9 grid gap-5 md:grid-cols-2">${reviewCards(2)}</div><div class="mt-8 flex justify-center"><a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Reviews</a></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Membership FAQ</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Membership Questions</h2></div><div class="mt-8">${faqList(membershipFaq)}</div></div></section>

    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Financing Available</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Start Your Treatment Plan Now, Pay Over Time</h2><p class="mt-4 max-w-4xl leading-8 text-ink/70">Elite VitaMed offers financing through Cherry, making it easier for eligible clients to move forward with aesthetic, wellness, and treatment planning options.</p><p class="mt-3 max-w-4xl text-sm leading-7 text-ink/64">With Cherry financing, eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_CHERRY_URL}" target="_blank" rel="noopener" data-integration-placeholder="cherry" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a></div><p class="mt-5 text-xs leading-6 text-ink/58">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Explore More</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Related Pages</h2></div><div class="mt-8 flex flex-wrap justify-center gap-3">${internalLinks.map(([label, route]) => `<a href="${route}" class="btn border border-navy/15 bg-ivory text-navy justify-center">${icon("arrow")} ${label}</a>`).join("")}<a href="${PLACEHOLDER_BOOKING_URL}" class="btn border border-navy/15 bg-ivory text-navy justify-center">${icon("calendar")} Book Now</a></div></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Make Your Care More Consistent?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Elite VitaMed memberships are designed to help you maintain your aesthetic and wellness goals with a more personalized, provider led plan.</p><p class="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/60">Explore membership options, start the treatment assessment, or request a phone consultation to find the best fit.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="#memberships/membership-options" class="btn btn-gold justify-center">${icon("gem")} Explore Membership Options</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

const faqGroups = [
  ["General Questions", [
    ["What is Elite VitaMed?", "Elite VitaMed provides premium aesthetic and wellness treatments in New Hampshire, including injectables, skin and tightening treatments, regenerative aesthetics, IV drip therapy, vitamin shots, intimate wellness consultations, and treatment planning. Treatments are performed with a provider led approach by a Nurse Practitioner and certified injector."],
    ["Who performs the treatments?", "Treatments are performed by a Nurse Practitioner and certified injector. Elite VitaMed focuses on provider led care, safety, candidacy, natural looking results, and personalized treatment planning."],
    ["What does provider led care mean?", "Provider led care means your treatment plan is guided by a qualified provider who reviews your goals, anatomy, health history, treatment history, and what is appropriate for you before making recommendations. The goal is to avoid generic treatment planning and help you choose a treatment path that fits your needs."],
    ["Do I need to know which treatment I want before booking?", "No. Many clients know what they want to improve, but they are not sure which treatment is right. You can start with the Treatment Assessment, request a phone consultation, or book a consultation so your provider can help guide you."],
    ["What treatments does Elite VitaMed offer?", "Elite VitaMed offers treatments across several categories: injectables, regenerative aesthetics, skin and tightening, IV and wellness, and intimate wellness. Treatment options may include Botox or neurotoxins, dermal fillers, Radiesse, Restylane, Sculptra, PDO threads, facial balancing, PRP and PRF, hair restoration, collagen stimulation treatments, Breeze, WonderTouch, Ultimate Glow &amp; Lift, microneedling with stem cells, chemical peels, IV drip therapy, vitamin shots, feminine wellness, and vaginal tightening consultations."]
  ]],
  ["Booking and Appointments", [
    ["How do I book an appointment?", "You can book directly through the website, start a treatment assessment, or contact Elite VitaMed to request guidance before booking."],
    ["What if I am not sure where to start?", "Start with the Treatment Assessment. It is designed to help guide you toward the treatment category that may best fit your goals."],
    ["Can I request a phone consultation first?", "Yes. A phone consultation is a helpful option if you have questions, are new to treatments, or want help choosing the right starting point."],
    ["Do you offer mobile or concierge appointments?", "Elite VitaMed provides aesthetic and wellness care with a concierge focused approach. Mobile or in home availability may depend on the treatment, location, schedule, and provider recommendation. Availability should be confirmed when booking."],
    ["How should I prepare for my appointment?", "Preparation depends on the treatment you are receiving. Your provider may give you instructions related to skincare, medications, hydration, alcohol, exercise, sun exposure, or aftercare planning. If you are unsure, contact Elite VitaMed before your appointment."]
  ]],
  ["Treatment Assessment", [
    ["What is the Treatment Assessment?", "The Treatment Assessment is an educational tool that helps guide you toward the treatment category or next step that may fit your goals. It does not replace consultation or provider evaluation."],
    ["Is the Treatment Assessment a medical recommendation?", "No. Your assessment result is only a starting point. Final recommendations depend on provider evaluation, your goals, anatomy, medical history, treatment history, and what is appropriate for you."],
    ["What assessments are available?", "Elite VitaMed may offer a Full Treatment Assessment, Injectables Assessment, Skin and Tightening Assessment, IV Therapy Assessment, Regenerative Aesthetics Assessment, and Intimate Wellness Assessment."],
    ["Can I still book if I skip the assessment?", "Yes. If you already know which treatment you want, you can book directly. Your provider will still confirm whether the treatment is appropriate during your consultation."]
  ]],
  ["Injectables", [
    ["What injectable treatments does Elite VitaMed offer?", "Injectable treatments may include Botox or neurotoxins, dermal fillers, Restylane, Radiesse, Sculptra, PDO threads, facial balancing, jawline contouring, under eye rejuvenation, lip filler, cheek filler, chin filler, and non surgical face lift planning."],
    ["How do I know whether I need Botox or filler?", "Botox and filler are used for different concerns. Botox or neurotoxins may be discussed for expression related lines and muscle movement. Fillers may be discussed for volume, contour, facial balancing, and structure. Your provider will evaluate your goals and anatomy before recommending a treatment plan."],
    ["Will injectables make me look overdone?", "Elite VitaMed focuses on refreshed, balanced, natural looking treatment planning. The goal is not to change your face or chase trends. The goal is to support your features in a way that still feels like you."],
    ["How long do injectable results last?", "Longevity depends on the treatment used, treatment area, amount placed, metabolism, lifestyle, and how your body responds. Your provider will explain expected timelines during your consultation."],
    ["Are injectable results immediate?", "Some injectable treatments may create visible changes sooner, while others develop gradually. Dermal fillers may show more immediate contour or volume changes, while Sculptra and collagen focused treatments may develop over time."],
    ["Can I combine injectable treatments?", "Combination plans may be appropriate for some clients. Your provider may discuss Botox, fillers, Sculptra, Radiesse, PDO threads, facial balancing, or skin treatments depending on your goals."]
  ]],
  ["Skin and Tightening", [
    ["What skin and tightening treatments does Elite VitaMed offer?", "Skin and Tightening treatments include Breeze, WonderTouch, Ultimate Glow &amp; Lift, Facial Contouring, Microneedling with Stem Cells, and Chemical Peels."],
    ["What is Breeze?", "Breeze is a skin focused treatment that may be discussed for clients who want support for glow, texture, and a more refreshed looking complexion."],
    ["What is WonderTouch?", "WonderTouch may be discussed for clients interested in non surgical tightening support, tone support, and contouring goals in appropriate candidates."],
    ["What is Ultimate Glow &amp; Lift?", "Ultimate Glow &amp; Lift combines Breeze and WonderTouch into 1 treatment direction for clients who want skin refresh support along with firmness or contouring support."],
    ["What skin treatment is best for texture?", "The best treatment depends on your skin, sensitivity, history, and goals. Microneedling with stem cells, chemical peels, Breeze, or other options may be discussed depending on provider evaluation."],
    ["Do skin and tightening treatments replace surgery?", "No. Skin and tightening treatments may support mild to moderate concerns in appropriate candidates, but they do not replace surgery for significant laxity, advanced sagging, or excess skin."]
  ]],
  ["Regenerative Aesthetics", [
    ["What is regenerative aesthetics?", "Regenerative aesthetics focuses on treatments that may support skin quality, collagen response, hair restoration planning, and natural looking rejuvenation over time."],
    ["What regenerative treatments does Elite VitaMed offer?", "Regenerative Aesthetics may include PRP and PRF, Hair Restoration, and Collagen Stimulation Treatments."],
    ["What is the difference between PRP and PRF?", "PRP and PRF both use components from your own blood, but they are processed differently and may be selected for different goals. Your provider will explain which option may be appropriate based on your concerns and candidacy."],
    ["Can PRP or PRF help with hair restoration?", "PRP or PRF may be discussed as part of a hair restoration plan for appropriate candidates. Hair concerns can have many causes, so your provider may recommend additional evaluation depending on your history and symptoms."],
    ["Do collagen stimulation treatments work right away?", "Collagen focused treatments are typically gradual. Some treatments may create early visible changes, while collagen related improvement may develop over time and may require a series or maintenance plan."]
  ]],
  ["IV and Wellness", [
    ["What IV and wellness treatments does Elite VitaMed offer?", "IV and Wellness treatments may include IV Drip Therapy, Hydration IV, Energy IV, Immunity IV, Beauty IV, Recovery IV, and Vitamin Shots."],
    ["What is IV Drip Therapy?", "IV Drip Therapy is a wellness treatment that delivers fluids and selected nutrients through an intravenous infusion. It may be discussed for hydration support, nutrient replenishment, recovery planning, and wellness goals in appropriate candidates."],
    ["Which IV drip should I choose?", "The right IV drip depends on your goals, health history, medications, symptoms, and provider evaluation. If you are unsure, start with the IV Therapy Assessment or request an IV Therapy Phone Consult."],
    ["Does IV therapy cure illness?", "No. IV therapy does not cure, prevent, or treat illness and does not replace medical care. It may be discussed as supportive wellness care in appropriate candidates."],
    ["What is the difference between IV therapy and vitamin shots?", "IV therapy delivers fluids and selected nutrients through an intravenous infusion. Vitamin shots are delivered by injection and may be discussed for clients who want a quicker wellness support option."],
    ["Is IV therapy right for everyone?", "No. IV therapy is not appropriate for everyone. Certain medical conditions, medications, allergies, kidney concerns, heart concerns, pregnancy status, active illness, or hydration concerns may affect candidacy."]
  ]],
  ["Intimate Wellness", [
    ["What is intimate wellness?", "Intimate Wellness is a private consultation based treatment category focused on feminine wellness concerns, tissue support goals, intimate confidence, and non surgical treatment discussions in appropriate candidates."],
    ["What intimate wellness treatments does Elite VitaMed offer?", "Intimate Wellness includes Feminine Wellness and Vaginal Tightening consultations."],
    ["Is intimate wellness private?", "Yes. Intimate wellness consultations are designed to be discreet, respectful, and provider led."],
    ["Is vaginal tightening right for everyone?", "No. Vaginal tightening is not appropriate for everyone. Candidacy depends on your anatomy, symptoms, goals, medical history, pregnancy status, postpartum status, prior procedures, and provider evaluation."],
    ["Is intimate wellness the same as gynecologic care?", "No. Elite VitaMed's intimate wellness care does not replace gynecologic care. If your concern involves pain, bleeding, infection symptoms, urinary symptoms, pelvic symptoms, or new medical changes, medical evaluation may be recommended first."],
    ["Can I request a private consultation before discussing details?", "Yes. You can request a private consultation and share your concerns at your comfort level."]
  ]],
  ["Results", [
    ["Are results guaranteed?", "No. Individual results vary. Your outcome depends on your anatomy, treatment plan, health history, treatment history, lifestyle, healing response, and provider evaluation."],
    ["Will I look natural?", "Elite VitaMed focuses on natural looking, balanced treatment planning. The goal is to help you look refreshed and confident, not overdone."],
    ["How long do results last?", "Longevity depends on the treatment selected, treatment area, your metabolism, skin quality, lifestyle, and maintenance plan. Your provider will explain expected timelines during your consultation."],
    ["Do some treatments take longer to show results?", "Yes. Some treatments may create visible changes sooner, while others develop gradually. Collagen stimulation, regenerative aesthetics, microneedling, and hair restoration plans may require more time and consistency."],
    ["Can I combine treatments for better results?", "Combination treatment planning may be appropriate for some clients. Your provider will determine whether combining treatments is safe, suitable, and aligned with your goals."]
  ]],
  ["Memberships", [
    ["Does Elite VitaMed offer memberships?", "Yes. Elite VitaMed may offer memberships for clients who want a more consistent approach to aesthetic and wellness care."],
    ["What can memberships include?", "Memberships may include treatment credits, skin care planning, injectable maintenance, IV wellness support, priority booking, preferred member benefits, or provider led treatment planning depending on the final membership structure."],
    ["Are memberships good for first time clients?", "Memberships may be appropriate for first time clients who want ongoing care, but a consultation or treatment assessment may be recommended first."],
    ["Can membership plans change over time?", "Your treatment plan may evolve as your goals, skin, wellness needs, or aesthetic priorities change. Membership structure and flexibility should be confirmed before joining."]
  ]],
  ["Financing", [
    ["Does Elite VitaMed offer financing?", "Yes. Elite VitaMed offers financing through Cherry for eligible clients."],
    ["What can financing be used for?", "Financing may be available for aesthetic, wellness, and treatment planning options, depending on eligibility and Cherry's terms."],
    ["How does Cherry financing work?", "With Cherry financing, eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront."],
    ["Is financing approval guaranteed?", "No. Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms."]
  ]],
  ["Safety and Candidacy", [
    ["How does Elite VitaMed determine if I am a candidate?", "Your provider reviews your goals, anatomy, medical history, medications, allergies, treatment history, and what is appropriate for you before recommending treatment."],
    ["Why do some treatments require consultation first?", "Some treatments require more detailed evaluation because candidacy depends on anatomy, health history, symptoms, medications, skin condition, or safety considerations."],
    ["What if I am pregnant or breastfeeding?", "Certain treatments may not be appropriate during pregnancy or breastfeeding. Your provider will review your health status and discuss what options may or may not be suitable."],
    ["What if I have a medical condition?", "Certain medical conditions or medications may affect treatment candidacy. Your provider will review your history before recommending any treatment."],
    ["Can I receive treatment if I have an active infection or illness?", "Treatment may need to be postponed if you have an active infection, illness, skin irritation, or symptoms that require medical evaluation. Your provider will guide you based on your situation."]
  ]]
];

function resultsGalleryCategories() {
  return [
    ["Injectables", ["Botox and Neurotoxins", "Dermal Fillers", "Lip Filler", "Cheek Filler", "Chin Filler", "Jawline Contouring", "Under Eye Rejuvenation", "Radiesse Fillers", "Restylane Fillers", "Sculptra", "PDO Threads", "Facial Balancing", "Non Surgical Face Lift"]],
    ["Regenerative Aesthetics", ["PRP and PRF", "Hair Restoration", "Collagen Stimulation Treatments"]],
    ["Skin and Tightening", ["Breeze", "WonderTouch", "Ultimate Glow & Lift", "Facial Contouring", "Microneedling with Stem Cells", "Chemical Peels"]],
    ["IV and Wellness", ["IV Drip Therapy", "Vitamin Shots", "Intimate Wellness"]]
  ];
}

function resultsGalleryCards() {
  const beforeAfters = [
    { src: "./assets/before-after-1.webp", caption: "Refreshed, balanced result after a provider led treatment plan." },
    { src: "./assets/before-after-2.webp", caption: "Smoother texture and a more rested appearance over time." }
  ];
  return beforeAfters.map((b) => `
    <article class="luxe-card overflow-hidden">
      <img src="${b.src}" alt="Before and after result at Elite VitaMed" loading="lazy" class="block w-full" />
      <div class="p-6">
        <p class="treatment-card-label">Before &amp; After</p>
        <p class="mt-2 text-sm leading-7 text-ink/66">${b.caption}</p>
        <p class="mt-3 text-xs leading-6 text-ink/55">Individual results vary. Photos are examples only and depend on anatomy, treatment plan, healing response, and provider evaluation.</p>
      </div>
    </article>
  `).join("");
}

function resultsFeaturedTransformations() {
  return [
    {
      eyebrow: "Injectable Results",
      copy: "Injectable treatments may help support smoother looking expression lines, restored volume, facial contouring, lip enhancement, jawline definition, and overall facial balance.",
      items: ["Botox or neurotoxins", "Lip filler", "Cheek filler", "Chin filler", "Jawline contouring", "Under eye rejuvenation", "Facial balancing", "Radiesse", "Restylane", "Sculptra", "PDO threads"],
      cta: "Explore Injectables", route: "#injectables", icon: "syringe"
    },
    {
      eyebrow: "Skin and Tightening Results",
      copy: "Skin and tightening treatments may help support smoother looking texture, improved glow, firmer looking skin, mild contouring support, and refreshed skin quality.",
      items: ["Breeze", "WonderTouch", "Ultimate Glow & Lift", "Facial Contouring", "Microneedling with Stem Cells", "Chemical Peels"],
      cta: "Explore Skin and Tightening", route: "#skin-tightening", icon: "sparkle"
    },
    {
      eyebrow: "Regenerative Aesthetic Results",
      copy: "Regenerative aesthetic treatments may support skin quality, collagen response, hair restoration planning, and natural looking rejuvenation over time.",
      items: ["PRP and PRF", "Hair Restoration", "Collagen Stimulation Treatments"],
      cta: "Explore Regenerative Aesthetics", route: "#regenerative-aesthetics", icon: "shield"
    },
    {
      eyebrow: "IV and Wellness Client Experience",
      copy: "IV and wellness treatments are supportive wellness treatments rather than traditional before and after cosmetic procedures. Results and client experiences may vary based on hydration status, lifestyle, health history, wellness goals, and provider evaluation.",
      items: ["Hydration IV", "Energy IV", "Immunity IV", "Beauty IV", "Recovery IV", "Vitamin Shots"],
      cta: "Explore IV and Wellness", route: "#iv-wellness", icon: "gem"
    }
  ];
}

function resultsPage() {
  const galleryCategories = resultsGalleryCategories();
  const featured = resultsFeaturedTransformations();
  const differentiators = [
    ["Provider Led Planning", "Your treatment is performed by a Nurse Practitioner and certified injector. Every recommendation begins with a provider evaluation so your plan is based on your anatomy, goals, health history, and what is appropriate for you.", "users"],
    ["Natural Looking Outcomes", "Elite VitaMed focuses on refreshed, balanced results. The goal is not to overfill, overtreat, or chase trends. The goal is to help you look like yourself, only more rested, confident, and supported.", "sparkle"],
    ["Personalized Treatment Combinations", "Many clients benefit from more than 1 treatment type. Depending on your goals, your plan may include injectables, skin treatments, regenerative aesthetics, IV and wellness support, or a phased approach over time.", "gem"],
    ["Clear Expectations", "Your provider will explain what each treatment can realistically support, what limitations exist, what downtime may be expected, and whether a series or maintenance plan may be recommended.", "shield"]
  ];
  const expectationFactors = ["Your starting anatomy", "Your skin quality", "Your age and lifestyle", "Your medical history", "Your treatment history", "The treatment selected", "The amount or intensity used", "Your healing response", "Your consistency with aftercare", "Whether a series or maintenance plan is followed"];
  const popularGoals = ["Looking less tired", "Softer lines and wrinkles", "More facial balance", "More defined lips", "A more sculpted jawline", "Cheek volume support", "Chin and profile balance", "Under eye refresh planning", "Better skin texture", "Improved glow", "Firmer looking skin", "Hair restoration support", "Collagen support", "Hydration and wellness support", "Private feminine wellness concerns"];
  const journeySteps = [
    ["Start With Your Goals", "Tell Elite VitaMed what you want to improve, how natural you want the result to look, and what concerns matter most to you."],
    ["Receive A Provider Led Evaluation", "Your Nurse Practitioner and certified injector will review your anatomy, skin quality, medical history, treatment history, and candidacy."],
    ["Choose The Right Treatment Plan", "Your plan may involve 1 treatment or a combination of treatments depending on your goals and what is appropriate for you."],
    ["Review Expectations Before Treatment", "You will understand what the treatment may support, what limitations exist, what aftercare may involve, and when results may develop."],
    ["Maintain Results Over Time", "Some treatments may require maintenance, a series, or a phased plan. Your provider will help you understand how to support your results long term."]
  ];
  const internalLinks = [
    ["Injectables", "#injectables"], ["Botox or Neurotoxins", "#botox-neurotoxins"], ["Dermal Fillers", "#dermal-fillers"], ["Radiesse Fillers", "#radiesse-fillers"], ["Restylane Fillers", "#restylane-fillers"], ["Sculptra", "#sculptra"], ["PDO Threads", "#pdo-threads"], ["Facial Balancing", "#facial-balancing"], ["Non Surgical Face Lift", "#non-surgical-face-lift"], ["Regenerative Aesthetics", "#regenerative-aesthetics"], ["Skin and Tightening", "#skin-tightening"], ["IV and Wellness", "#iv-wellness"], ["Intimate Wellness", "#intimate-wellness"], ["Treatment Assessment", "#assessment"], ["Contact Elite VitaMed", "#contact"]
  ];
  const resultsFaq = [
    ["Are results guaranteed?", "No. Individual results vary. Your outcome depends on your anatomy, treatment plan, treatment history, medical history, lifestyle, healing response, and provider evaluation."],
    ["How do I know which treatment will give me the best result?", "The best way to start is with a provider led consultation or treatment assessment. Your provider will evaluate your goals and recommend a plan based on what is appropriate for you."],
    ["Do before and after photos show what I can expect?", "Before and after photos can help you understand the types of improvements that may be possible, but they do not guarantee your individual result."],
    ["Will I look natural?", "Elite VitaMed focuses on natural looking, balanced treatment planning. The goal is to help you look refreshed and confident, not overdone."],
    ["How long do results last?", "Longevity depends on the treatment selected, treatment area, your metabolism, skin quality, lifestyle, and maintenance plan. Your provider will explain expected timelines during your consultation."],
    ["Do some treatments take longer to show results?", "Yes. Some treatments may create visible changes sooner, while others develop gradually. Collagen stimulation, regenerative aesthetics, microneedling, and hair restoration plans may require more time and consistency."],
    ["Can I combine treatments for better results?", "Combination plans may be appropriate for some clients. Depending on your goals, your provider may discuss injectables, skin treatments, regenerative aesthetics, IV and wellness care, or a phased treatment plan."],
    ["What should I do if I am not sure where to start?", "Start with the treatment assessment or request a phone consultation. Elite VitaMed can help you understand which treatment direction may fit your goals."]
  ];
  return `
    <section class="treatment-detail-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">${particles()}<div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24"><div class="reveal max-w-4xl"><p class="eyebrow">Elite VitaMed Results in New Hampshire</p><h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Natural Looking Results, Personalized Treatment Plans, and Provider Led Care</h1><div class="gold-rule mt-6"><span></span></div><p class="hero-copy mt-6 max-w-3xl leading-8">Explore real client results, treatment transformations, and the type of refreshed, balanced outcomes Elite VitaMed is known for.</p><p class="hero-copy mt-4 max-w-3xl leading-7">Elite VitaMed provides premium aesthetic and wellness treatments performed by a Nurse Practitioner and certified injector. Every result begins with a thoughtful consultation, a personalized treatment plan, and a focus on helping clients look refreshed, confident, and natural.</p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a></div><p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Results Introduction</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Results That Look Refreshed, Not Overdone</h2><p class="mt-5 leading-8 text-ink/70">At Elite VitaMed, the goal is not to make you look like someone else. The goal is to help you look refreshed, balanced, and confident in a way that still feels like you.</p><p class="mt-4 leading-8 text-ink/70">Every treatment plan is based on your goals, anatomy, skin quality, treatment history, medical history, and what is appropriate for you. Whether you are exploring injectables, skin and tightening treatments, regenerative aesthetics, IV therapy, or intimate wellness, your provider will help guide you toward the safest and most appropriate next step.</p><p class="mt-4 text-sm leading-7 text-ink/60">Individual results vary. Before and after outcomes depend on your starting point, treatment selected, provider evaluation, treatment consistency, and how your body responds.</p></div></section>

    <section id="before-after" class="section-shell bg-ivory scroll-mt-36"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Before and After Gallery</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Before and After Results</h2><p class="mt-4 leading-8 text-ink/68">This section showcases real client before and after photos across the treatment categories below.</p></div><div class="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">${galleryCategories.map(([name, items]) => `<article class="luxe-card p-5"><h3 class="font-serif text-2xl font-semibold text-navy">${name}</h3><div class="mt-4 flex flex-wrap gap-2">${items.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></article>`).join("")}</div><div class="mt-9 grid gap-5 md:grid-cols-2">${resultsGalleryCards()}</div><p class="mt-8 text-center text-sm leading-7 text-ink/58">Individual results vary. Final outcomes depend on anatomy, treatment plan, healing response, treatment history, and provider evaluation.</p></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Featured Results</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Featured Treatment Transformations</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2">${featured.map(f => `<article class="luxe-card flex flex-col p-6 sm:p-7"><div class="icon-badge mb-4">${icon(f.icon)}</div><h3 class="font-serif text-3xl font-semibold text-navy">${f.eyebrow}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${f.copy}</p><div class="mt-5 flex flex-wrap gap-2">${f.items.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div><div class="mt-auto pt-6"><a href="${f.route}" class="btn btn-navy justify-center">${icon("arrow")} ${f.cta}</a></div></article>`).join("")}</div></div></section>

    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">The Elite VitaMed Difference</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Makes Elite VitaMed Results Different</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2">${differentiators.map(x => `<article class="luxe-card p-6"><div class="icon-badge mb-4">${icon(x[2])}</div><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">Before and After Expectations</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What To Know Before Comparing Results</h2><p class="mt-4 leading-8 text-ink/70">Before and after photos are helpful, but they are not a guarantee of what your result will look like. Your outcome depends on several factors, including:</p><div class="mt-5 flex flex-wrap gap-2">${expectationFactors.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div><div class="rounded-[1.5rem] border border-navy/10 bg-ivory p-6 sm:p-8"><p class="eyebrow">Timing</p><h3 class="mt-3 font-serif text-3xl font-semibold text-navy">Some Results Are Immediate, Others Develop Over Time</h3><p class="mt-4 leading-8 text-ink/70">Some treatments may create visible changes sooner, while others work gradually over time. For example, filler may create more immediate volume or contour support, while collagen stimulation treatments, PRP, PRF, microneedling, and hair restoration plans may develop more gradually.</p><p class="mt-4 text-sm leading-7 text-ink/64">Your provider will help you understand what is realistic for your goals before treatment begins.</p></div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Client Reviews</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2><p class="mt-4 leading-8 text-ink/68">Clients trust Elite VitaMed for personalized aesthetic and wellness care performed by a Nurse Practitioner and certified injector, with the privacy and convenience of concierge appointments.</p><div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div><p class="mt-2 text-sm font-bold text-navy">Rated 5.0 stars on Google · 100+ reviews</p></div><div class="mt-9 grid gap-5 lg:grid-cols-3">${reviewCards(3)}</div><div class="mt-8 flex justify-center"><a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Reviews</a></div></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 sm:px-10 lg:grid-cols-[1fr_auto]"><div><p class="eyebrow">Treatment Assessment</p><h2 class="mt-3 font-serif text-4xl font-semibold">Not Sure Which Treatment Fits Your Goals?</h2><p class="mt-3 max-w-2xl leading-7 text-white/70">You do not need to know exactly what treatment you need before starting. Many clients know what they want to improve, but they are unsure whether Botox, filler, Sculptra, Radiesse, PDO threads, PRP, skin tightening, chemical peels, IV therapy, or another treatment is the right fit.</p><p class="mt-3 max-w-2xl text-sm leading-7 text-white/60">Start with a treatment assessment and get a clearer starting point before booking.</p></div><div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="#assessment" class="btn btn-gold justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn btn-ghost justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Popular Result Goals</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Clients Often Come To Elite VitaMed Wanting Support With</h2></div><div class="mt-8 flex flex-wrap justify-center gap-2">${popularGoals.map(x => `<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-7 text-center text-sm leading-7 text-ink/60">Your provider will help determine which treatment direction may be appropriate based on your goals and evaluation.</p></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">Your Results Journey</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">From First Goal To Lasting Results</h2><p class="mt-4 leading-8 text-ink/68">Every result at Elite VitaMed follows a clear, provider led path designed around your goals and what is appropriate for you.</p></div><div class="grid gap-4 sm:grid-cols-2">${journeySteps.map((x, i) => `<article class="rounded-2xl border border-navy/10 bg-white p-5"><p class="treatment-card-label">Step ${i + 1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>

    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Financing Available</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Start Your Treatment Plan Now, Pay Over Time</h2><p class="mt-4 max-w-4xl leading-8 text-ink/70">Elite VitaMed offers financing through Cherry, making it easier for eligible clients to move forward with aesthetic, wellness, and treatment planning options.</p><p class="mt-3 max-w-4xl text-sm leading-7 text-ink/64">With Cherry financing, eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_CHERRY_URL}" target="_blank" rel="noopener" data-integration-placeholder="cherry" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a></div><p class="mt-5 text-xs leading-6 text-ink/58">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Explore More</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Treatment Options</h2></div><div class="mt-8 flex flex-wrap justify-center gap-3">${internalLinks.map(([label, route]) => `<a href="${route}" class="btn border border-navy/15 bg-ivory text-navy justify-center">${icon("arrow")} ${label}</a>`).join("")}</div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Results FAQs</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Questions About Results</h2></div><div class="mt-8">${faqList(resultsFaq)}</div></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Start Your Own Elite VitaMed Result?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Whether your goal is to look refreshed, support facial balance, improve skin quality, explore regenerative aesthetics, or begin with wellness care, Elite VitaMed can help you choose the right starting point.</p><p class="mx-auto mt-3 max-w-3xl text-sm leading-7 text-white/60">Book your appointment, start the treatment assessment, or request a phone consultation to begin with provider led care.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

function faqPage() {
  const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return `
    <section class="hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div class="reveal max-w-4xl">
          <p class="eyebrow">Elite VitaMed FAQ</p>
          <h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Answers To Common Questions Before You Book</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-3xl leading-8">Learn more about Elite VitaMed treatments, provider led care, appointment options, treatment assessments, financing, and what to expect before your visit.</p>
          <p class="hero-copy mt-4 max-w-3xl leading-7">Whether you are new to aesthetic and wellness treatments or already know what you are interested in, this FAQ page can help you feel more confident about your next step.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Care is performed by a Nurse Practitioner and certified injector.</p>
        </div>
      </div>
    </section>
    <section class="section-shell bg-white"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Before You Book</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Have Questions Before Booking?</h2><p class="mt-5 leading-8 text-ink/70">Choosing the right treatment can feel overwhelming, especially if you are comparing injectables, skin treatments, IV therapy, regenerative aesthetics, or intimate wellness options.</p><p class="mt-4 leading-8 text-ink/70">Elite VitaMed is built around provider led care, thoughtful treatment planning, and realistic expectations. You do not need to know exactly what to book before reaching out. You can start with a treatment assessment, request a phone consultation, or book directly if you already know which treatment you are interested in.</p></div></section>
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">FAQ Categories</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Find The Answers You Need</h2>
          <p class="mt-4 leading-8 text-ink/68">Browse by topic or open any question below. Final treatment recommendations are always confirmed by the provider.</p>
        </div>
        <nav class="faq-category-nav mt-9 flex flex-wrap justify-center gap-2" aria-label="FAQ categories">
          ${faqGroups.map(([title]) => `<a href="#faq" data-faq-target="faq-${slug(title)}">${title}</a>`).join("")}
        </nav>
      </div>
    </section>
    <section class="section-shell bg-white pt-0">
      <div class="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
        ${faqGroups.map(([title, items]) => `
          <section id="faq-${slug(title)}" class="faq-group scroll-mt-36">
            <p class="eyebrow">${title}</p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-navy">${title}</h2>
            <div class="mt-5 space-y-3">
              ${items.map(([question, answer]) => `
                <details class="faq-item">
                  <summary><span>${question}</span>${icon("arrow")}</summary>
                  <p>${answer}</p>
                </details>
              `).join("")}
            </div>
          </section>
        `).join("")}
      </div>
    </section>
    <section class="bg-navy-deep px-4 py-16 text-white">
      <div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10">
        <p class="eyebrow">Your Next Step</p>
        <h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Still Have Questions? Start With The Right Next Step</h2>
        <p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">If you still have questions, Elite VitaMed can help you choose the best starting point.</p>
        <div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          <a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a>
          <a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn btn-ghost justify-center">${icon("heart")} Request A Private Consultation</a>
        </div>
      </div>
    </section>
  `;
}

// Provider review required before publishing.
// Unit ranges are educational estimates and should be confirmed or edited by the provider.
const neurotoxinAreas = [
  ["forehead-lines", "Forehead Lines", "Upper Face", "Horizontal forehead lines", "10 to 20 units", "Neurotoxins may help soften the appearance of forehead lines caused by repeated facial movement.", "Clients concerned with visible forehead lines or a tired, tense appearance.", "Forehead treatment should be customized carefully to preserve natural movement and avoid heaviness.", 50, 20],
  ["frown-lines", "Frown Lines", "Upper Face", "Lines between the brows", "15 to 25 units", "Neurotoxins may help soften the appearance of lines between the eyebrows, often called 11 lines.", "Clients who look tense, tired, or upset even when relaxed.", "Final placement and units depend on muscle strength, anatomy, and provider evaluation.", 50, 29],
  ["crows-feet", "Crow's Feet", "Upper Face", "Lines around the outer eyes", "10 to 24 units total", "Neurotoxins may help soften the appearance of smile lines around the outer corners of the eyes.", "Clients who notice lines around the eyes when smiling or squinting.", "Treatment should be customized to preserve natural expression.", 73, 37],
  ["brow-lift", "Brow Lift", "Upper Face", "Mild brow heaviness or desire for a subtle lifted look", "4 to 10 units", "Strategic neurotoxin placement may help support a subtle lifted appearance around the brows.", "Clients who want a more open, refreshed eye area.", "This result is subtle and depends heavily on anatomy.", 30, 33],
  ["bunny-lines", "Bunny Lines", "Mid Face", "Lines on the upper nose", "4 to 10 units", "Neurotoxins may help soften small lines that appear on the nose when smiling, laughing, or scrunching.", "Clients who notice nose lines during expression.", "This area is often treated conservatively.", 50, 43],
  ["lip-flip", "Lip Flip", "Lower Face", "Upper lip shape", "4 to 8 units", "A lip flip may use neurotoxin placement around the upper lip to help the lip appear slightly more visible when smiling.", "Clients who want a subtle lip enhancement without adding filler volume.", "This does not replace lip filler and results are typically subtle.", 50, 55],
  ["gummy-smile", "Gummy Smile", "Lower Face", "Excess gum show when smiling", "2 to 6 units", "Neurotoxins may be discussed for clients who show more gum tissue when smiling due to upper lip movement.", "Clients looking for a subtle improvement in smile balance.", "Candidacy depends on smile anatomy and provider evaluation.", 42, 51],
  ["downturned-smile", "Downturned Smile", "Lower Face", "Corners of the mouth pulling downward", "4 to 8 units", "Neurotoxin treatment may be discussed for muscles that pull the corners of the mouth downward.", "Clients who feel their mouth looks sad, tired, or downturned at rest.", "Often considered as part of lower face balancing.", 39, 61],
  ["chin-dimpling", "Chin Dimpling", "Lower Face", "Dimpled or orange peel chin texture", "4 to 10 units", "Neurotoxins may help soften the appearance of chin dimpling caused by mentalis muscle activity.", "Clients who notice texture or dimpling in the chin area.", "Final treatment depends on muscle activity and facial anatomy.", 50, 68],
  ["jawline-slimming", "Jawline Slimming", "Jawline and Neck", "Square or heavy jawline related to muscle activity", "20 to 50 units total", "Neurotoxins may be used to target jaw muscles when jaw width is related to muscle activity.", "Clients interested in a softer or slimmer lower face appearance.", "Not every jawline concern is muscle related. Provider evaluation is required.", 28, 70],
  ["masseter-botox", "Masseter Botox", "Jawline and Neck", "Prominent masseter muscles", "20 to 50 units total", "Masseter Botox targets the chewing muscles and may be discussed for jawline slimming or jaw tension concerns.", "Clients with strong jaw muscles, jaw tension, or clenching concerns.", "Provider evaluation is needed to determine whether this is appropriate.", 72, 69],
  ["tmj-teeth-grinding", "TMJ and Teeth Grinding", "Jawline and Neck", "Jaw tension, clenching, or grinding concerns", "20 to 60 units total", "Neurotoxins may be discussed for clients with muscle related jaw tension or teeth grinding concerns.", "Clients who experience clenching, grinding, or jaw tension.", "This should be evaluated by a qualified provider and may require dental or medical coordination.", 77, 75],
  ["neck-bands", "Neck Bands", "Jawline and Neck", "Vertical neck bands", "10 to 40 units total", "Neurotoxins may be used to soften the appearance of vertical neck bands caused by platysma muscle activity.", "Clients concerned with visible neck bands or neck tension appearance.", "This area requires careful provider evaluation.", 54, 84],
  ["nefertiti-lift", "Nefertiti Lift", "Jawline and Neck", "Lower face and neck definition", "20 to 50 units total", "A Nefertiti Lift is a neurotoxin technique focused on the jawline and neck to support a more refined lower face appearance.", "Clients interested in jawline refinement, lower face support, or neck appearance.", "Results are subtle and depend on anatomy, muscle activity, and candidacy.", 35, 80]
].map(([id, label, category, concern, estimatedUnits, description, bestFor, note, x, y]) => ({ id, label, category, concern, estimatedUnits, description, bestFor, note, x, y }));

const FACE_MAP_ZONE_LAYOUT = {
  "forehead-lines": [34, 15, 0], "frown-lines": [15, 11, 0], "crows-feet": [18, 10, 0], "brow-lift": [21, 8, -9],
  "bunny-lines": [10, 11, 0], "lip-flip": [20, 7, 0], "gummy-smile": [15, 6, 0], "downturned-smile": [17, 8, -12],
  "chin-dimpling": [20, 10, 0], "jawline-slimming": [21, 28, -23], "masseter-botox": [21, 28, 23],
  "tmj-teeth-grinding": [18, 23, 18], "neck-bands": [19, 29, 0], "nefertiti-lift": [24, 20, -22],
  temples: [18, 16, 0], "under-eyes": [23, 10, 0], cheeks: [27, 20, -18], "smile-lines": [14, 17, -18],
  lips: [22, 8, 0], "marionette-lines": [15, 16, -12], chin: [24, 12, 0], jawline: [25, 25, -26],
  "lower-face-threads": [42, 25, 0], "neck-support": [34, 20, 0], "skin-quality": [52, 48, 0], "neck-tightening": [36, 26, 0]
};

function faceTreatmentZones(areas) {
  return `<div class="face-zone-layer" aria-hidden="true">${areas.map((area, index) => {
    const [width, height, rotate] = FACE_MAP_ZONE_LAYOUT[area.id] || [18, 14, 0];
    return `<span class="face-treatment-zone zone-tone-${index % 5}" style="--x:${area.x}%;--y:${area.y}%;--zone-width:${width}%;--zone-height:${height}%;--zone-rotate:${rotate}deg" data-map-zone="${area.id}"></span>`;
  }).join("")}</div>`;
}

function neurotoxinFaceMap() {
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Botox and Neurotoxin Treatment Map</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Common Neurotoxin Treatment Areas</h2>
          <p class="mt-4 leading-8 text-ink/68">See common areas where Botox or neurotoxins may be used to soften expression lines, support facial balance, and address muscle related concerns.</p>
          <p class="mt-3 text-sm leading-7 text-ink/60">Unit ranges are educational estimates only. Actual units vary based on anatomy, muscle strength, treatment goals, product used, prior treatment history, and provider evaluation. Some treatment areas may be considered off label. Final treatment recommendations and dosing are determined by the provider.</p>
        </div>
        <div class="neuro-map-shell mt-10 grid gap-7 lg:grid-cols-[.92fr_1.08fr]">
          <div class="neuro-face-card">
            <div class="neuro-face-stage">
              <img class="neuro-face" src="./assets/treatment-face-map.webp" alt="Front-facing facial treatment map illustration for Botox and neurotoxin education" />
              ${faceTreatmentZones(neurotoxinAreas)}
              ${neurotoxinAreas.map((area) => `<button class="neuro-marker" type="button" style="--x:${area.x}%;--y:${area.y}%" data-neuro-area="${area.id}" aria-label="Learn about ${area.label}"><span></span><small>${area.label}</small></button>`).join("")}
            </div>
            <p class="mt-4 text-center text-sm leading-6 text-ink/60">Select a gold marker to explore an area. Hyperhidrosis may also be discussed as a specialty neurotoxin treatment.</p>
            <p class="mt-3 rounded-xl border border-champagne/25 bg-white/75 px-4 py-3 text-center text-xs leading-5 text-ink/60">This educational map applies to male and female clients. Actual treatment areas and amounts vary by individual anatomy, muscle strength, goals, and provider evaluation.</p>
          </div>
          <article class="neuro-info-card" data-neuro-info>
            <p class="eyebrow" data-neuro-category>Educational Guide</p>
            <h3 class="mt-3 font-serif text-4xl font-semibold text-navy" data-neuro-label>Select A Treatment Area</h3>
            <p class="mt-4 leading-8 text-ink/70" data-neuro-description>Click a point on the face map to learn more about common Botox and neurotoxin treatment areas, what they may help with, and why provider evaluation matters.</p>
            <div class="mt-6 hidden space-y-4" data-neuro-details>
              <div><p class="treatment-card-label">Category</p><p class="mt-1 text-base leading-7 text-ink/72" data-neuro-category-detail></p></div>
              <div><p class="treatment-card-label">Common Concern</p><p class="mt-1 text-base leading-7 text-ink/72" data-neuro-concern></p></div>
              <div><p class="treatment-card-label">Estimated Units</p><p class="mt-1 text-base font-bold leading-7 text-navy" data-neuro-estimated-units></p><p class="text-sm text-ink/55">Typical range only. Provider will confirm.</p></div>
              <div><p class="treatment-card-label">Best For</p><p class="mt-1 text-base leading-7 text-ink/72" data-neuro-best-for></p></div>
              <div><p class="treatment-card-label">Provider Note</p><p class="mt-1 text-base leading-7 text-ink/72" data-neuro-note></p></div>
              <p class="rounded-xl border border-champagne/25 bg-ivory p-4 text-sm leading-6 text-ink/65">Unit ranges are educational estimates only. Final units are determined by the provider after evaluation.</p>
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="${bookingRouteForCurrentPage()}" class="btn btn-navy justify-center">${icon("calendar")} Book Your Appointment</a>
              <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Injectable Assessment</a>
            </div>
          </article>
        </div>
        <p class="mx-auto mt-8 max-w-5xl text-center text-sm leading-7 text-ink/60">Estimated unit ranges are provided for educational purposes only. Actual units vary by client and depend on anatomy, muscle strength, treatment goals, product used, prior treatment history, and provider evaluation. Some treatment areas may be considered off label. Final treatment areas and units are determined by the provider.</p>
      </div>
    </section>
  `;
}

// Provider review required before publishing.
// Filler ranges are educational estimates and should be confirmed or edited by the provider.
const dermalFillerAreas = [
  ["temples", "Temples", "Upper Face", "Temple hollowing or volume support", "0.5 to 1 mL per side", "Temple filler may be discussed for clients with hollowing or volume changes in the upper face.", "Clients interested in subtle upper face volume support and facial harmony.", "This area requires careful anatomy review and conservative planning.", 29, 28],
  ["under-eyes", "Under Eyes", "Mid Face", "Under eye hollowing or shadowing", "0.5 to 1 mL total", "Under eye rejuvenation may be discussed for hollowing or shadowing that contributes to a tired appearance.", "Clients with appropriate anatomy who want a refreshed under eye appearance.", "Filler is not the right fit for every under eye concern. PRF, skin support, or another approach may be discussed.", 68, 40],
  ["cheeks", "Cheeks", "Mid Face", "Cheek support or midface volume loss", "1 to 2 mL total", "Cheek filler may help support contour, midface volume, and a more refreshed appearance.", "Clients interested in cheek support, midface balance, or a broader facial balancing plan.", "The amount used depends on anatomy, existing volume, and the desired degree of support.", 29, 46],
  ["smile-lines", "Smile Lines", "Mid Face", "Visible nasolabial folds", "0.5 to 1 mL per side", "Smile line filler may be discussed for folds that extend from the sides of the nose toward the corners of the mouth.", "Clients interested in softening visible folds as part of a balanced treatment plan.", "Cheek support or a broader facial plan may be considered before treating this area directly.", 64, 54],
  ["lips", "Lips", "Lower Face", "Lip shape, symmetry, border definition, or volume", "0.5 to 1 mL total", "Lip filler may be discussed for subtle volume support, shape, symmetry, or border definition.", "Clients who want a personalized, natural looking lip enhancement plan.", "A conservative approach can help preserve balance with the rest of the face.", 50, 61],
  ["marionette-lines", "Marionette Lines", "Lower Face", "Lines extending downward from the mouth corners", "0.5 to 1 mL per side", "Marionette line filler may be discussed for lower face folds or mouth corner support.", "Clients interested in lower face rejuvenation and a softer appearance around the mouth.", "Structure, laxity, and muscle movement should be evaluated as part of planning.", 66, 67],
  ["chin", "Chin", "Lower Face", "Chin projection or profile balance", "0.5 to 1.5 mL total", "Chin filler may be discussed to support profile balance, lower face harmony, or subtle structural refinement.", "Clients interested in chin projection, proportion, or facial balancing.", "Chin planning should consider the lips, jawline, and overall facial profile.", 50, 75],
  ["jawline", "Jawline", "Lower Face", "Jawline definition or lower face contour", "1 to 3 mL total", "Jawline contouring may be discussed for clients who want a more defined or balanced lower face appearance.", "Clients interested in lower face contour, profile support, or chin and jawline harmony.", "A plan may involve filler, Radiesse, neurotoxins, or a combination depending on anatomy and goals.", 28, 72]
].map(([id, label, category, concern, estimatedMl, description, bestFor, note, x, y]) => ({ id, label, category, concern, estimatedMl, description, bestFor, note, x, y }));

function dermalFillerFaceMap() {
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Dermal Filler Treatment Map</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Common Dermal Filler Treatment Areas</h2>
          <p class="mt-4 leading-8 text-ink/68">See common areas where dermal fillers may be discussed to support volume, contour, structure, and facial balance.</p>
          <p class="mt-3 text-sm leading-7 text-ink/60">mL ranges are educational estimates only. Actual amounts vary based on anatomy, product used, treatment goals, prior treatment history, and provider evaluation. Not every client is a candidate for every area. Final recommendations are determined by the provider.</p>
        </div>
        <div class="neuro-map-shell mt-10 grid gap-7 lg:grid-cols-[.92fr_1.08fr]">
          <div class="neuro-face-card">
            <div class="neuro-face-stage">
              <img class="neuro-face" src="./assets/treatment-face-map.webp" alt="Front-facing facial treatment map illustration for dermal filler education" />
              ${faceTreatmentZones(dermalFillerAreas)}
              ${dermalFillerAreas.map((area) => `<button class="neuro-marker" type="button" style="--x:${area.x}%;--y:${area.y}%" data-filler-area="${area.id}" aria-label="Learn about ${area.label}"><span></span><small>${area.label}</small></button>`).join("")}
            </div>
            <p class="mt-4 text-center text-sm leading-6 text-ink/60">Select a gold marker to explore an area. Your provider will recommend the appropriate product, placement, and amount after evaluation.</p>
            <p class="mt-3 rounded-xl border border-champagne/25 bg-white/75 px-4 py-3 text-center text-xs leading-5 text-ink/60">This educational map applies to male and female clients. Actual treatment areas and amounts vary by individual anatomy, goals, and provider evaluation.</p>
          </div>
          <article class="neuro-info-card" data-filler-info>
            <p class="eyebrow" data-filler-category>Educational Guide</p>
            <h3 class="mt-3 font-serif text-4xl font-semibold text-navy" data-filler-label>Select A Treatment Area</h3>
            <p class="mt-4 leading-8 text-ink/70" data-filler-description>Click a point on the face map to learn more about common dermal filler treatment areas, estimated mL ranges, and why provider evaluation matters.</p>
            <div class="mt-6 hidden space-y-4" data-filler-details>
              <div><p class="treatment-card-label">Category</p><p class="mt-1 text-base leading-7 text-ink/72" data-filler-category-detail></p></div>
              <div><p class="treatment-card-label">Common Concern</p><p class="mt-1 text-base leading-7 text-ink/72" data-filler-concern></p></div>
              <div><p class="treatment-card-label">Estimated mL</p><p class="mt-1 text-base font-bold leading-7 text-navy" data-filler-estimated-ml></p><p class="text-sm text-ink/55">Typical educational range only. Provider will confirm.</p></div>
              <div><p class="treatment-card-label">Best For</p><p class="mt-1 text-base leading-7 text-ink/72" data-filler-best-for></p></div>
              <div><p class="treatment-card-label">Provider Note</p><p class="mt-1 text-base leading-7 text-ink/72" data-filler-note></p></div>
              <p class="rounded-xl border border-champagne/25 bg-ivory p-4 text-sm leading-6 text-ink/65">mL ranges are educational estimates only. Final product, placement, and amount are determined by the provider after evaluation.</p>
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="${bookingRouteForCurrentPage()}" class="btn btn-navy justify-center">${icon("calendar")} Book Your Appointment</a>
              <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Injectable Assessment</a>
            </div>
          </article>
        </div>
        <p class="mx-auto mt-8 max-w-5xl text-center text-sm leading-7 text-ink/60">Estimated mL ranges are provided for educational purposes only. Actual amounts vary by client and depend on anatomy, product used, treatment goals, prior treatment history, and provider evaluation. Final treatment areas, product selection, placement, and amounts are determined by the provider.</p>
      </div>
    </section>
  `;
}

const fullFacePlanningAreas = [
  ["temples", "Temples", "Upper Face", "Temple support may be discussed when upper face volume patterns affect overall balance.", 29, 28],
  ["under-eyes", "Under Eyes", "Mid Face", "Under eye support may be evaluated alongside the cheeks, temples, and skin quality.", 68, 40],
  ["cheeks", "Cheeks", "Mid Face", "Cheek support may be discussed when midface structure or volume patterns affect facial harmony.", 29, 46],
  ["smile-lines", "Smile Lines", "Mid Face", "Smile lines may be evaluated as part of a broader support plan rather than as an isolated concern.", 64, 54],
  ["lips", "Lips", "Lower Face", "Lip shape, symmetry, and proportion may be evaluated alongside the chin and profile.", 50, 61],
  ["marionette-lines", "Marionette Area", "Lower Face", "The marionette area may be evaluated when lower face support, movement, or laxity affects the overall plan.", 66, 67],
  ["chin", "Chin", "Lower Face", "Chin projection and proportion may be discussed as part of profile and lower face balancing.", 50, 75],
  ["jawline", "Jawline", "Lower Face", "Jawline support may be evaluated alongside the chin, neck, lower face, and profile.", 28, 72],
  ["neck-bands", "Neck", "Jawline and Neck", "The neck may be evaluated when skin quality, laxity, or muscle activity affects the treatment plan.", 54, 84]
].map(([id, label, category, description, x, y]) => ({ id, label, category, description, x, y }));

function facialPlanningFaceMap(mode) {
  const eyebrow = "Facial Balancing Treatment Map";
  const title = "Explore Areas Considered During Facial Balancing";
  const description = "See common areas your provider may evaluate when building a personalized plan focused on facial harmony, proportion, and natural looking refinement.";
  const note = "This map is an educational planning guide, not a recommendation to treat every area. Your provider will determine which areas and treatment options may fit your goals.";
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">${eyebrow}</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${title}</h2>
          <p class="mt-4 leading-8 text-ink/68">${description}</p>
        </div>
        <div class="neuro-map-shell mt-10 grid gap-7 lg:grid-cols-[.92fr_1.08fr]">
          <div class="neuro-face-card">
            <div class="neuro-face-stage">
              <img class="neuro-face" src="./assets/treatment-face-map.webp" alt="Front-facing facial planning map illustration" />
              ${faceTreatmentZones(fullFacePlanningAreas)}
              ${fullFacePlanningAreas.map((area) => `<button class="neuro-marker" type="button" style="--x:${area.x}%;--y:${area.y}%" data-planning-area="${area.id}" aria-label="Learn about ${area.label}"><span></span><small>${area.label}</small></button>`).join("")}
            </div>
            <p class="mt-4 text-center text-sm leading-6 text-ink/60">Select a gold marker to explore an area that may be considered during personalized treatment planning.</p>
            <p class="mt-3 rounded-xl border border-champagne/25 bg-white/75 px-4 py-3 text-center text-xs leading-5 text-ink/60">This educational map applies to male and female clients. Actual treatment areas vary by individual anatomy, skin quality, goals, and provider evaluation.</p>
          </div>
          <article class="neuro-info-card" data-planning-info>
            <p class="eyebrow" data-planning-category>Educational Planning Guide</p>
            <h3 class="mt-3 font-serif text-4xl font-semibold text-navy" data-planning-label>Select A Treatment Area</h3>
            <p class="mt-4 leading-8 text-ink/70" data-planning-description>${note}</p>
            <div class="mt-6 hidden space-y-4" data-planning-details>
              <div><p class="treatment-card-label">Area</p><p class="mt-1 text-base leading-7 text-ink/72" data-planning-category-detail></p></div>
              <div><p class="treatment-card-label">Why It May Be Evaluated</p><p class="mt-1 text-base leading-7 text-ink/72" data-planning-area-description></p></div>
              <p class="rounded-xl border border-champagne/25 bg-ivory p-4 text-sm leading-6 text-ink/65">${note}</p>
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="${bookingRouteForCurrentPage()}" class="btn btn-navy justify-center">${icon("calendar")} Book Your Appointment</a>
              <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Injectable Assessment</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

const nonSurgicalLiftAreas = [
  ["forehead-lines", "Forehead Lines", "Neurotoxins", "neurotoxins", "Neurotoxins may be discussed when expression related forehead lines affect a refreshed appearance.", 50, 20],
  ["brow-lift", "Brows", "Neurotoxins", "neurotoxins", "Strategic neurotoxin placement may be discussed for subtle brow support in appropriate candidates.", 30, 33],
  ["crows-feet", "Crow's Feet", "Neurotoxins", "neurotoxins", "Neurotoxins may be discussed for expression related lines around the outer eyes.", 73, 37],
  ["temples", "Temples", "Fillers or Biostimulators", "biostimulators", "Fillers or biostimulators may be discussed when temple support contributes to a balanced plan.", 29, 28],
  ["under-eyes", "Under Eyes", "Fillers or Skin Support", "fillers", "Under eye concerns may be evaluated for filler, regenerative support, skin support, or another appropriate option.", 68, 40],
  ["cheeks", "Cheeks", "Fillers or Biostimulators", "biostimulators", "Cheek support may be discussed to support midface structure, contour, and a refreshed appearance.", 29, 46],
  ["smile-lines", "Smile Lines", "Fillers or Structural Support", "fillers", "Smile lines may be evaluated as part of a broader support plan rather than treated in isolation.", 64, 54],
  ["lips", "Lips", "Dermal Fillers", "fillers", "Lip shape, symmetry, and proportion may be evaluated as part of lower face balance.", 50, 61],
  ["marionette-lines", "Marionette Area", "Fillers or Structural Support", "fillers", "The marionette area may be evaluated when lower face support, movement, or laxity affects the overall plan.", 66, 67],
  ["chin", "Chin", "Dermal Fillers", "fillers", "Chin projection and proportion may be discussed as part of profile and lower face balance.", 50, 75],
  ["jawline", "Jawline", "Fillers or Structural Support", "fillers", "Jawline support may be evaluated alongside the chin, neck, and lower face profile.", 28, 72],
  ["lower-face-threads", "Lower Face", "PDO Threads", "threads", "PDO threads may be discussed for subtle lower face lift and support when candidacy is appropriate.", 58, 72],
  ["neck-bands", "Neck Bands", "Neurotoxins", "neurotoxins", "Neurotoxins may be discussed when platysma activity or visible neck bands affect the plan.", 54, 84],
  ["neck-tightening", "Neck Tightening", "Skin Tightening", "skin-tightening", "Skin tightening options may be discussed for mild laxity, firmness, or neck support goals.", 40, 86],
  ["skin-quality", "Skin Quality", "Skin Tightening", "skin-tightening", "Skin tightening or skin support options may be discussed when texture, firmness, or laxity affects the overall result.", 50, 50]
].map(([id, label, treatment, family, description, x, y]) => ({ id, label, treatment, family, description, x, y }));

function nonSurgicalLiftZones() {
  return `<div class="face-zone-layer" aria-hidden="true">${nonSurgicalLiftAreas.map((area) => {
    const [width, height, rotate] = FACE_MAP_ZONE_LAYOUT[area.id] || [18, 14, 0];
    return `<span class="face-treatment-zone family-${area.family}" style="--x:${area.x}%;--y:${area.y}%;--zone-width:${width}%;--zone-height:${height}%;--zone-rotate:${rotate}deg" data-lift-zone="${area.id}"></span>`;
  }).join("")}</div>`;
}

function nonSurgicalLiftLegend() {
  return `<div class="treatment-map-legend mt-5" aria-label="Treatment map color guide">
    <span><i class="family-neurotoxins"></i> Neurotoxins</span>
    <span><i class="family-fillers"></i> Fillers or Structural Support</span>
    <span><i class="family-biostimulators"></i> Biostimulators</span>
    <span><i class="family-threads"></i> PDO Threads</span>
    <span><i class="family-skin-tightening"></i> Skin Tightening</span>
  </div>`;
}

function nonSurgicalLiftFaceMap() {
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Non Surgical Face Lift Planning Map</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore A Personalized Combination Treatment Plan</h2>
          <p class="mt-4 leading-8 text-ink/68">A non surgical face lift may combine multiple treatment types. The colors below show common areas where neurotoxins, fillers or structural support, biostimulators, PDO threads, and skin tightening may be discussed.</p>
          ${nonSurgicalLiftLegend()}
        </div>
        <div class="neuro-map-shell mt-10 grid gap-7 lg:grid-cols-[.92fr_1.08fr]">
          <div class="neuro-face-card">
            <div class="neuro-face-stage">
              <img class="neuro-face" src="./assets/treatment-face-map.webp" alt="Front-facing educational non surgical face lift combination treatment map" />
              ${nonSurgicalLiftZones()}
              ${nonSurgicalLiftAreas.map((area) => `<button class="neuro-marker" type="button" style="--x:${area.x}%;--y:${area.y}%" data-lift-area="${area.id}" aria-label="Learn about ${area.label}"><span></span><small>${area.label}</small></button>`).join("")}
            </div>
            <p class="mt-4 text-center text-sm leading-6 text-ink/60">Select a gold marker to explore an area and the treatment family that may be considered.</p>
            <p class="mt-3 rounded-xl border border-champagne/25 bg-white/75 px-4 py-3 text-center text-xs leading-5 text-ink/60">This educational map applies to male and female clients. Actual treatment areas and treatment combinations vary by individual anatomy, skin quality, muscle activity, laxity, goals, and provider evaluation.</p>
          </div>
          <article class="neuro-info-card" data-lift-info>
            <p class="eyebrow" data-lift-treatment>Combination Planning Guide</p>
            <h3 class="mt-3 font-serif text-4xl font-semibold text-navy" data-lift-label>Select A Treatment Area</h3>
            <p class="mt-4 leading-8 text-ink/70" data-lift-description>A non surgical face lift is not one standard procedure and does not replace surgery. Click a point to explore treatment options that may be considered after provider evaluation.</p>
            <div class="mt-6 hidden space-y-4" data-lift-details>
              <div><p class="treatment-card-label">Treatment Family</p><p class="mt-1 text-base font-bold leading-7 text-navy" data-lift-treatment-detail></p></div>
              <div><p class="treatment-card-label">Planning Note</p><p class="mt-1 text-base leading-7 text-ink/72" data-lift-area-description></p></div>
              <p class="rounded-xl border border-champagne/25 bg-ivory p-4 text-sm leading-6 text-ink/65">This map is educational only. Your provider will determine whether a staged combination plan or another approach is appropriate. A non surgical face lift does not replace a surgical facelift.</p>
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="${bookingRouteForCurrentPage()}" class="btn btn-navy justify-center">${icon("calendar")} Book Your Appointment</a>
              <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Injectable Assessment</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

const pdoThreadAreas = [
  ["brow-lift", "Brow Lift", "Upper Face", "Threads may be discussed to support a more open, subtly lifted appearance around the brows and eyes.", "4 to 10 threads may be discussed.", 50, 29, [[46, 31, 16, -150], [54, 31, 16, -30]]],
  ["temple-lift", "Temple Lift", "Upper Face", "Threads may be discussed for subtle temple and lateral face support when appropriate for your anatomy.", "4 to 8 threads may be discussed.", 29, 35, [[38, 39, 16, -135], [62, 39, 16, -45]]],
  ["under-eye-tightening", "Under Eye Tightening", "Eye Area", "Smooth threads may be discussed to support skin quality beneath the eyes in carefully selected candidates.", "Multiple smooth threads may be discussed.", 70, 43, [[43, 44, 11, -170], [57, 44, 11, -10]]],
  ["mid-face-lift", "Mid Face Lift", "Mid Face", "Threads may be discussed to support sagging cheeks and improve the look of mid face descent.", "6 to 20 threads may be discussed.", 30, 53, [[43, 56, 20, -145], [57, 56, 20, -35]]],
  ["smile-lines", "Smile Lines", "Mid Face", "Threads may be discussed when smile lines are influenced by mid face descent or tissue laxity.", "4 to 10 threads may be discussed.", 68, 57, [[44, 59, 16, -155], [56, 59, 16, -25]]],
  ["marionette-lift", "Marionette Line Lift", "Lower Face", "Threads may be discussed when marionette lines or downturned mouth corners are related to tissue descent.", "4 to 10 threads may be discussed.", 66, 66, [[44, 67, 18, -150], [56, 67, 18, -30]]],
  ["jowl-lift", "Jowl Lift", "Lower Face", "Threads may be discussed to support sagging tissue along the jawline and improve the look of early jowling.", "6 to 16 threads may be discussed.", 72, 71, [[43, 73, 25, -155], [57, 73, 25, -25]]],
  ["jawline-contouring", "Jawline Contouring", "Lower Face", "Threads may be discussed to support jawline definition and improve the look of mild lower face laxity.", "8 to 20 threads may be discussed.", 28, 76, [[43, 77, 28, -165], [57, 77, 28, -15]]],
  ["chin-enhancement", "Chin Enhancement", "Lower Face", "Threads may be discussed to support chin contour and lower face balance in appropriate candidates.", "4 to 8 threads may be discussed.", 50, 79, [[47, 80, 12, -135], [53, 80, 12, -45]]],
  ["neck-lift", "Neck Lift", "Neck", "Threads may be discussed for mild neck laxity, softening, or skin support after careful provider evaluation.", "10 to 20 threads may be discussed.", 45, 87, [[46, 89, 22, -110], [54, 89, 22, -70]]],
  ["neck-lines", "Horizontal Neck Lines", "Neck", "Smooth threads may be included in a broader plan for visible horizontal neck lines and skin quality concerns.", "Thread type and number depend on the treatment plan.", 57, 91, [[42, 91, 18, 0], [52, 94, 18, 0]]],
  ["decolletage", "Decolletage Rejuvenation", "Decolletage", "Smooth threads may be discussed to support crepey texture and skin quality across the decolletage.", "Multiple smooth threads may be discussed.", 50, 96, [[42, 97, 16, -10], [58, 97, 16, -170]]]
].map(([id, label, category, description, range, x, y, vectors]) => ({ id, label, category, description, range, x, y, vectors }));

function pdoThreadVectors() {
  return `<div class="thread-vector-layer" aria-hidden="true">${pdoThreadAreas.map((area, index) => area.vectors.map(([x, y, length, rotate]) => `<span class="thread-vector vector-tone-${index % 4}" style="--x:${x}%;--y:${y}%;--vector-length:${length}%;--vector-rotate:${rotate}deg" data-thread-vector="${area.id}"></span>`).join("")).join("")}</div>`;
}

function pdoThreadFaceMap() {
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">PDO Thread Planning Map</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Areas Where Thread Support May Be Discussed</h2>
          <p class="mt-4 leading-8 text-ink/68">Directional lines illustrate common planning paths for PDO threads. They are educational examples only and do not represent a treatment recommendation or exact placement.</p>
        </div>
        <div class="neuro-map-shell mt-10 grid gap-7 lg:grid-cols-[.92fr_1.08fr]">
          <div class="neuro-face-card">
            <div class="neuro-face-stage">
              <img class="neuro-face" src="./assets/treatment-face-map.webp" alt="Front-facing educational PDO thread planning map illustration" />
              ${pdoThreadVectors()}
              ${pdoThreadAreas.map((area) => `<button class="neuro-marker" type="button" style="--x:${area.x}%;--y:${area.y}%" data-thread-area="${area.id}" aria-label="Learn about ${area.label}"><span></span><small>${area.label}</small></button>`).join("")}
            </div>
            <p class="mt-4 text-center text-sm leading-6 text-ink/60">Select a gold marker to explore an area. Thread type, direction, number, and placement depend on provider evaluation.</p>
            <p class="mt-3 rounded-xl border border-champagne/25 bg-white/75 px-4 py-3 text-center text-xs leading-5 text-ink/60">This educational map applies to male and female clients. Actual treatment paths vary by individual anatomy, skin quality, laxity, goals, and provider evaluation.</p>
          </div>
          <article class="neuro-info-card" data-thread-info>
            <p class="eyebrow" data-thread-category>Educational Planning Guide</p>
            <h3 class="mt-3 font-serif text-4xl font-semibold text-navy" data-thread-label>Select A Thread Support Area</h3>
            <p class="mt-4 leading-8 text-ink/70" data-thread-description>Click a point on the map to learn more about areas where PDO thread support may be discussed. Final candidacy and placement are determined by your provider.</p>
            <div class="mt-6 hidden space-y-4" data-thread-details>
              <div><p class="treatment-card-label">Area</p><p class="mt-1 text-base leading-7 text-ink/72" data-thread-category-detail></p></div>
              <div><p class="treatment-card-label">Planning Note</p><p class="mt-1 text-base leading-7 text-ink/72" data-thread-area-description></p></div>
              <div><p class="treatment-card-label">General Planning Range</p><p class="mt-1 text-base leading-7 text-ink/72" data-thread-range></p></div>
              <p class="rounded-xl border border-champagne/25 bg-ivory p-4 text-sm leading-6 text-ink/65">Directional lines are educational examples only. Final thread type, direction, number, and placement depend on anatomy, skin quality, candidacy, and provider evaluation.</p>
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="${bookingRouteForCurrentPage()}" class="btn btn-navy justify-center">${icon("calendar")} Book Your Appointment</a>
              <a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Injectable Assessment</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function botoxPage() {
  const benefits = [
    ["Softens Expression Related Lines", "Neurotoxins may help soften the appearance of lines caused by repeated facial movement."],
    ["Supports A Refreshed Look", "When performed thoughtfully, treatment can help you look more rested and refreshed without changing your natural features."],
    ["Can Support Facial Balance", "Certain treatments may be used as part of a broader facial balancing plan for the lower face, jawline, chin, and neck."],
    ["Quick Treatment Experience", "Appointments are typically efficient, making them a convenient option for clients with busy schedules."],
    ["Personalized To Your Goals", "Your plan is based on your facial movement, anatomy, comfort level, and desired outcome."]
  ];
  const treatmentAreas = [
    ["Nefertiti Lift", "Supports a more refined appearance along the jawline and neck."],
    ["Neck Bands", "Focuses on vertical bands caused by platysma muscle activity."],
    ["Jawline Slimming", "May be considered when lower-face width is related to muscle activity."],
    ["Masseter Botox", "May be discussed for jawline slimming, jaw tension, or clenching concerns."],
    ["TMJ and Teeth Grinding", "May be discussed for muscle related jaw tension or grinding concerns."],
    ["Downturned Smile", "May be considered as part of a lower-face balancing plan."],
    ["Chin Dimpling", "May help soften texture related to mentalis muscle activity."]
  ];
  const steps = [
    ["Consultation and Assessment", "Your provider reviews your goals, treatment history, facial movement, anatomy, and concerns."],
    ["Personalized Treatment Planning", "Appropriate treatment areas, expected outcome, limitations, and aftercare are explained."],
    ["Treatment", "Small amounts of neurotoxin are injected into specific muscles based on your plan."],
    ["Aftercare Guidance", "You receive instructions and guidance on what to expect after treatment."],
    ["Follow Up If Needed", "Recommendations depend on the area treated, your goals, and provider guidance."]
  ];
  const candidates = ["Want natural looking refinement", "Are concerned with fine lines or expression lines", "Are interested in jawline, chin, neck, or lower face balancing", "Want a treatment plan guided by a qualified provider", "Understand that results vary", "Are not pregnant or breastfeeding", "Do not have certain medical conditions or contraindications", "Are willing to follow pre care and aftercare instructions"];
  const comparisons = [
    ["Botox or Neurotoxins", "Best for expression related lines, muscle activity, jawline or lower face muscle concerns, and certain facial balancing goals."],
    ["Dermal Fillers", "Best for volume, shape, contour, lip enhancement, cheek support, chin projection, jawline definition, under eye concerns, and facial balancing."],
    ["Sculptra", "Best for clients interested in gradual collagen support and natural looking volume improvement over time."],
    ["PDO Threads", "Best for clients who may be interested in subtle lifting or skin support without surgery, depending on candidacy."],
    ["Facial Balancing", "Best for clients who want a more complete treatment plan instead of treating one isolated area."]
  ];
  const faqs = [
    ["What is the difference between Botox and neurotoxins?", "Botox is a brand name commonly associated with a broader category of injectable treatments called neurotoxins or neuromodulators. These treatments are used to temporarily relax targeted muscles. Your provider can explain which product is appropriate for your goals."],
    ["What areas can neurotoxins treat?", "Neurotoxins may be used for areas such as forehead lines, frown lines, crow's feet, neck bands, chin dimpling, jawline concerns, masseter muscles, downturned smile, and other facial movement related concerns. Final treatment areas are determined after provider evaluation."],
    ["What is a Nefertiti Lift?", "A Nefertiti Lift is a neurotoxin treatment focused on the lower face, jawline, and neck area. It may be discussed for clients who want a more refined appearance along the jawline and neck."],
    ["Can Botox help with TMJ or teeth grinding?", "Neurotoxin treatment may be discussed for jaw tension, clenching, teeth grinding, or TMJ related concerns. A provider evaluation is needed to determine whether this is appropriate."],
    ["What is Masseter Botox?", "Masseter Botox targets the masseter muscles in the jaw. It may be considered for jawline slimming, jaw tension, or clenching related concerns, depending on the client's anatomy and goals."],
    ["Does Botox or neurotoxin treatment hurt?", "Most clients describe the treatment as quick and tolerable. You may feel a small pinch during injection. Your provider can explain what to expect before treatment."],
    ["How long does Botox or neurotoxin treatment take?", "The treatment itself is typically quick, but appointment time may vary depending on consultation, treatment areas, and provider review."],
    ["When will I see results?", "Results are not immediate. Neurotoxin effects typically appear gradually and vary by person, product, and treatment area."],
    ["How long do results last?", "Duration varies depending on the product used, treatment area, dose, muscle activity, metabolism, and individual response. Your provider can discuss expected timing during your appointment."],
    ["Is there downtime?", "Most clients can return to normal daily activities after treatment, but temporary redness, swelling, tenderness, or bruising can occur."],
    ["Will I look frozen?", "The goal at Elite VitaMed is natural looking refinement. Your provider will create a plan based on your goals, facial movement, and desired outcome."],
    ["Am I a candidate for Botox or neurotoxins?", "Candidacy depends on your goals, medical history, treatment area, anatomy, and what is appropriate for you. Your provider will review this before treatment."]
  ];
  return `
    <section class="treatment-detail-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <div class="reveal max-w-4xl"><p class="eyebrow">Mobile Botox and Neurotoxin Treatments in New Hampshire</p><h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Smooth Fine Lines, Refresh Your Look, and Feel More Confident</h1><div class="gold-rule mt-6"><span></span></div><p class="hero-copy mt-6 max-w-3xl leading-8">Elite VitaMed offers Botox and neurotoxin treatments performed by a Nurse Practitioner and certified injector, with the privacy and convenience of mobile or in home concierge appointments.</p><p class="hero-copy mt-4 max-w-3xl leading-7">Neurotoxin treatments can help soften the appearance of expression related lines, support facial balance, and create a more refreshed look when performed with a thoughtful, personalized approach.</p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Injectable Assessment</a></div><p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p></div>
      </div>
    </section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">What It Is</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Are Botox and Neurotoxin Treatments?</h2><p class="mt-5 leading-8 text-ink/70">Botox is one of the most well known names for a category of injectable treatments often called neurotoxins or neuromodulators. These treatments are used to temporarily relax targeted muscles that contribute to certain facial lines, expression related wrinkles, and muscle related concerns.</p><p class="mt-4 leading-8 text-ink/70">Your provider evaluates your goals, facial movement, anatomy, treatment history, and comfort level before recommending a plan. The goal is to help you look refreshed and natural, not frozen or overdone.</p></div><div><p class="eyebrow">Who It Helps</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Who May Be Interested In Neurotoxin Treatments?</h2><div class="mt-5 flex flex-wrap gap-2">${["Forehead lines","Frown lines","Crow's feet","Neck bands","Jawline heaviness","Jaw tension or teeth grinding concerns","Chin dimpling","A downturned smile","Lower face balance","A more refreshed appearance"].map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-5 text-sm leading-7 text-ink/60">Final candidacy is always determined by provider evaluation.</p></div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Benefits</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Why Clients Choose Botox and Neurotoxins</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">${benefits.map(x=>`<article class="luxe-card p-5"><div class="icon-badge mb-4">${icon("sparkle")}</div><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    ${neurotoxinFaceMap()}
    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Treatment Areas</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Botox and Neurotoxin Treatment Areas</h2><p class="mt-4 leading-8 text-ink/68">Not every client is a candidate for every area, and some uses may be considered off label. Your provider will determine what is appropriate during consultation.</p></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${treatmentAreas.map(x=>`<article class="rounded-2xl border border-navy/10 bg-mist/70 p-5"><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8"><div><p class="eyebrow">Ideal Candidates</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Who May Be A Good Candidate?</h2><p class="mt-4 leading-8 text-ink/68">You may be a good candidate for Botox or neurotoxin treatment if you are looking for a non surgical option to soften expression related lines, support facial balance, or address muscle related concerns in the face, jawline, or neck.</p><p class="mt-4 text-sm leading-7 text-ink/60">Final candidacy is always confirmed by the provider before treatment.</p></div><div class="flex flex-wrap content-start gap-2">${candidates.map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">What To Expect</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Happens During Your Appointment</h2><p class="mt-4 leading-8 text-ink/68">Most clients are able to return to normal daily activities after treatment, but temporary redness, swelling, tenderness, or minor bruising may occur. Results develop gradually and timing varies by person, product, treatment area, and individual response.</p></div><div class="grid gap-4 sm:grid-cols-2">${steps.map((x,i)=>`<article class="rounded-2xl border border-navy/10 bg-white p-5"><p class="treatment-card-label">Step ${i+1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article class="rounded-[1.5rem] border border-navy/10 bg-ivory p-6 sm:p-8"><p class="eyebrow">Downtime</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy">Is There Downtime After Botox or Neurotoxins?</h2><p class="mt-4 leading-8 text-ink/70">Most clients are able to return to normal daily activities after neurotoxin treatment, but temporary redness, swelling, tenderness, or minor bruising at the injection site may occur.</p><p class="mt-4 text-sm leading-7 text-ink/64">Your provider will give you specific aftercare instructions. Results are not immediate. Neurotoxin effects typically develop gradually, and timing can vary by person, product, treatment area, and individual response.</p></article><article class="rounded-[1.5rem] border border-navy/10 bg-mist p-6 sm:p-8"><p class="eyebrow">Results</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy">What Results Can You Expect?</h2><p class="mt-4 leading-8 text-ink/70">Botox and neurotoxin treatments are designed to create a temporary softening effect in treated areas. The goal is not to erase every line or create a frozen look. The goal is to support a refreshed, natural looking result that fits your facial movement and goals.</p><p class="mt-4 text-sm leading-7 text-ink/64">Results depend on the area treated, muscle strength, anatomy, previous treatment history, dose and placement, and your body's individual response. Individual results vary.</p></article></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Treatment Comparison</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Botox, Fillers, Sculptra, and PDO Threads: What Is The Difference?</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">${comparisons.map(x=>`<article class="luxe-card p-5"><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div><div class="mt-8 text-center"><p class="leading-7 text-ink/68">Not sure which option fits your goals? Start with the Injectable Treatment Assessment or request a consultation.</p><a href="#assessment" class="btn btn-navy mt-5 justify-center">${icon("sparkle")} Start Injectable Assessment</a></div></div></section>
    <section class="section-shell bg-white"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Safety</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Safety and Provider Review Matter</h2><p class="mt-5 leading-8 text-ink/70">Botox and neurotoxin treatments should always be performed by a qualified provider with appropriate training and product knowledge. Before treatment, your provider reviews your goals, medical history, treatment history, current concerns, and factors that may affect candidacy.</p><p class="mt-4 leading-8 text-ink/70">Tell your provider if you are pregnant, breastfeeding, have a history of neuromuscular conditions, have had previous reactions to neurotoxins, are taking medications that may affect treatment, or have health concerns that should be reviewed first. Some treatment areas or uses may be considered off label.</p><p class="mt-5 rounded-2xl border border-champagne/25 bg-ivory p-5 text-sm leading-7 text-ink/65">This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, health history, and what is appropriate for you.</p></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">Your Provider</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Care Performed By A Nurse Practitioner and Certified Injector</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed takes a provider led approach to aesthetic and wellness care. Your Botox or neurotoxin treatment is performed by a Nurse Practitioner and certified injector who understands the importance of facial anatomy, natural looking results, safety, and personalized treatment planning.</p><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="#about" class="btn btn-navy justify-center">${icon("users")} Meet Tiana</a><a href="${bookingRouteForCurrentPage()}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("calendar")} Book A Consultation</a></div></article><article><p class="eyebrow">New Hampshire Concierge Aesthetic Care</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Mobile Botox and Neurotoxin Treatments in New Hampshire</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed offers mobile Botox and neurotoxin treatments in New Hampshire and surrounding areas. This concierge model allows clients to receive premium aesthetic care in a private, comfortable setting while still being treated by a qualified provider.</p><p class="mt-4 text-sm leading-7 text-ink/64">Whether you are interested in a Nefertiti Lift, neck bands, jawline slimming, masseter Botox, TMJ and teeth grinding support, downturned smile, chin dimpling, or a full injectable consultation, Elite VitaMed helps you choose the right next step with provider led guidance.</p></article></div></section>
    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Related Treatments</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Related Injectable Treatments</h2></div><div class="mt-8 flex flex-wrap justify-center gap-3">${["Dermal Fillers","Facial Balancing","Sculptra","PDO Threads","Injectable Treatment Assessment","Injectables Consultation"].map(x=>`<a href="${x === "Dermal Fillers" ? "#dermal-fillers" : x === "Facial Balancing" ? "#facial-balancing" : x === "Sculptra" ? "#sculptra" : x === "PDO Threads" ? "#pdo-threads" : x.includes("Assessment") ? "#assessment" : x.includes("Consultation") ? "#contact" : "#injectables"}" class="rounded-full border border-navy/10 bg-mist px-5 py-3 text-sm font-bold text-navy transition hover:border-champagne hover:bg-ivory">${x}</a>`).join("")}</div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Frequently Asked Questions</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Botox and Neurotoxin Questions</h2></div><div class="mt-8 space-y-3">${faqs.map(x=>`<details class="faq-item"><summary><span>${x[0]}</span>${icon("arrow")}</summary><p>${x[1]}</p></details>`).join("")}</div></div></section>
    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Not Sure What You Need?</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Explore Botox or Neurotoxin Treatments?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Injectable Assessment</a><a href="#contact" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

function dermalFillersPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Mobile Dermal Fillers in New Hampshire",
    title: "Restore Volume, Enhance Facial Balance, and Refresh Your Look",
    subheadline: "Elite VitaMed offers dermal filler treatments, including Radiesse fillers, Restylane fillers, jawline contouring, and under eye rejuvenation, performed by a Nurse Practitioner and certified injector.",
    supportingCopy: "Dermal fillers may help support volume, contour, structure, and facial harmony when placed with a thoughtful, personalized approach. Your treatment plan is guided by your anatomy, goals, treatment history, and provider evaluation.",
    primaryCta: "Book Your Appointment",
    secondaryCta: "Start Injectable Assessment",
    thirdCta: "Request A Phone Consultation",
    trustLine: "Performed by a Nurse Practitioner and certified injector.",
    icon: "gem",
    introEyebrow: "What They Are",
    introTitle: "What Are Dermal Fillers?",
    introCopy: [
      "Dermal fillers are injectable aesthetic treatments used to support volume, contour, shape, and facial balance. Depending on the product used and the area treated, fillers may be discussed for lips, cheeks, chin, jawline, under eyes, smile lines, facial structure, and overall facial balancing.",
      "Different fillers are designed for different goals. Some are used for soft, flexible movement. Others may be selected for structure, contour, or collagen stimulating support. Your provider will evaluate your features, goals, skin quality, and comfort level before recommending a filler plan."
    ],
    whoTitle: "Who May Be Interested In Dermal Fillers?",
    whoCopy: "Dermal fillers may be a good fit for clients who want a non surgical way to restore volume, enhance shape, improve facial balance, or create a more refreshed appearance.",
    whoFor: ["Volume loss","Thin lips","Cheek support","Chin balance","Jawline definition","Under eye hollowing","Smile lines","Facial asymmetry","Profile balancing","Natural looking refinement"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Explore Dermal Filler Treatment Paths",
    optionsCopy: "Dermal fillers can be used in different ways depending on your goals, anatomy, facial balance, and provider recommendation. Your treatment plan may focus on volume, contour, structure, softness, or full face harmony.",
    paths: [
      ["Radiesse Fillers","Radiesse may be discussed for clients who want structure, contour, and collagen stimulating support. It may be considered for areas where definition, support, or rejuvenation is desired.",["Facial structure","Contour support","Lower face support","Jawline definition","Collagen stimulation goals"],"Explore Radiesse Fillers","#radiesse-fillers"],
      ["Restylane Fillers","Restylane fillers are hyaluronic acid based fillers that may be discussed for volume, contour, shape, and soft tissue support. Product selection depends on the treatment area and desired result.",["Lip enhancement","Cheek support","Under eye discussions","Facial lines","Natural looking volume support"],"Explore Restylane Fillers","#restylane-fillers"],
      ["Lip Filler","Lip filler may be discussed for clients who want to enhance lip shape, restore volume, improve symmetry, or create a more defined lip border.",["Thin lips","Lip shape","Lip symmetry","Border definition","Subtle volume support"],"Explore Lip Filler"],
      ["Cheek Filler","Cheek filler may be discussed for clients who want midface support, restored volume, or a more lifted and refreshed appearance.",["Midface volume loss","Cheek support","Facial structure","A more lifted appearance","Full face balancing"],"Explore Cheek Filler"],
      ["Chin Filler","Chin filler may be discussed for clients who want profile balance, lower face harmony, or subtle structural support in the chin area.",["Chin projection","Profile balancing","Lower face harmony","Facial proportion"],"Explore Chin Filler"],
      ["Jawline Contouring","Jawline contouring may be discussed for clients who want a more defined, balanced, or structured lower face appearance. A plan may involve filler, Radiesse, neurotoxins, or a combination.",["Jawline definition","Lower face balance","Profile support","Chin and jawline harmony","A sculpted appearance"],"Explore Jawline Contouring","#jawline-contouring"],
      ["Under Eye Rejuvenation","Under eye rejuvenation may be discussed for hollowness, shadowing, or a tired looking under eye area. Treatment may involve filler, PRF, skin support, or another approach.",["Tired looking eyes","Under eye hollowing","Tear trough concerns","Shadowing related to volume loss","Careful provider guidance"],"Explore Under Eye Rejuvenation","#under-eye-rejuvenation"],
      ["Smile Lines","Smile line filler may be discussed for folds that run from the sides of the nose toward the corners of the mouth. Planning may involve filler, cheek support, or a broader balancing approach.",["Nasolabial folds","Smile lines","Midface support discussions","Softening visible folds"],"Explore Smile Line Filler"],
      ["Marionette Lines","Marionette line filler may be discussed for lines or folds extending downward from the corners of the mouth. This area may also involve structure, laxity, or muscle movement.",["Lower face lines","Mouth corner support","A tired or downturned appearance","Lower face rejuvenation"],"Explore Marionette Line Filler"],
      ["Facial Balancing With Fillers","Facial balancing looks at the face as a whole instead of treating one isolated feature. It may involve lips, cheeks, chin, jawline, under eyes, or other areas.",["Full face harmony","Multiple areas of concern","Profile balancing","Natural looking refinement","Personalized planning"],"Explore Facial Balancing"],
      ["Lower Face Rejuvenation","Lower face rejuvenation may be discussed for changes around the mouth, chin, jawline, and lower face structure. A plan may include filler, Radiesse, neurotoxins, skin tightening, or a combination.",["Lower face volume loss","Mouth corner support","Jawline definition","Chin balance","Marionette lines"],"Explore Lower Face Rejuvenation"]
    ],
    benefitsTitle: "Why Clients Choose Dermal Fillers",
    benefits: [
      ["Restores Volume Support","Dermal fillers may help restore or support volume in areas where fullness has changed over time."],
      ["Enhances Facial Contour","Fillers may support contour in areas such as the lips, cheeks, chin, jawline, or under eyes."],
      ["Supports Facial Balance","Fillers may be part of a facial balancing plan when multiple areas need to be evaluated together."],
      ["Non Surgical Option","Fillers offer a non surgical option for clients who want refinement, contour, or volume support."],
      ["Personalized To Your Anatomy","Your provider selects a treatment plan based on your features, history, and desired result."]
    ],
    mapSection: dermalFillerFaceMap(),
    candidatesTitle: "Who May Be An Ideal Candidate For Dermal Fillers?",
    candidatesCopy: "An ideal candidate for dermal fillers is someone who wants a personalized, non surgical approach to volume support, contour, or facial balance and understands that the right product and placement depend on provider evaluation.",
    candidates: ["Want natural looking refinement","Have volume loss or facial support changes","Want lip, cheek, chin, or jawline enhancement","Are interested in profile or facial balancing","Understand that results vary","Are not pregnant or breastfeeding","Do not have contraindications that make treatment inappropriate","Are willing to follow pre care and aftercare instructions"],
    expectTitle: "What Happens During A Dermal Filler Appointment?",
    downtimeTitle: "Is There Downtime After Dermal Fillers?",
    downtime: "Downtime depends on the product used, treatment area, amount placed, and your individual response. Temporary swelling, redness, tenderness, bruising, firmness, or minor discomfort may occur. Your provider will explain aftercare instructions.",
    steps: [
      ["Consultation and Goal Review","Your provider reviews your goals, concerns, previous treatments, medical history, and the type of result you want."],
      ["Facial Assessment","Your provider evaluates facial structure, balance, volume patterns, skin quality, symmetry, and treatment areas."],
      ["Product and Placement Planning","Your provider determines which filler product and placement approach may be appropriate."],
      ["Treatment","If appropriate, filler is placed carefully according to your personalized plan."],
      ["Aftercare Guidance","You receive aftercare instructions, what to expect, and when to follow up if needed."]
    ],
    focusEyebrow: "Treatment Areas",
    focusTitle: "Common Dermal Filler Treatment Areas",
    focusItems: ["Lips","Cheeks","Chin","Jawline","Under eyes","Smile lines","Lower face","Temples, if appropriate","Facial balancing","Profile balancing"],
    resultsTitle: "What Results Can You Expect From Dermal Fillers?",
    resultsCopy: "Results depend on the product, treatment area, placement, anatomy, amount used, treatment history, swelling response, and provider recommendation. Some results may be visible soon after treatment, but swelling and settling can affect the final appearance.",
    comparisonTitle: "Dermal Fillers, Botox, Sculptra, Radiesse, or Facial Balancing?",
    comparisons: [
      ["Dermal Fillers","Often discussed for more immediate volume, contour, shape, lips, cheeks, chin, jawline, under eyes, and facial structure."],
      ["Botox or Neurotoxins","Often discussed for expression related lines, muscle movement, jawline slimming, neck bands, and lower face muscle concerns."],
      ["Sculptra","Often discussed for gradual collagen support and natural looking rejuvenation over time."],
      ["Radiesse","Often discussed for structure, contour, and collagen stimulating support, depending on candidacy and treatment area."],
      ["Facial Balancing","Often discussed when multiple areas need to be evaluated together for a more complete treatment plan."],
      ["PDO Threads","Often discussed for subtle lifting or skin support in appropriate candidates."]
    ],
    comparisonCta: "Not sure whether filler, neurotoxins, Sculptra, Radiesse, facial balancing, or PDO threads fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Filler Safety and Provider Skill Matter",
    safetyCopy: [
      "Dermal fillers should always be performed by a qualified provider with appropriate training, product knowledge, and an understanding of facial anatomy. Before treatment, your provider reviews your goals, history, current concerns, and factors that may affect candidacy.",
      "Tell your provider if you are pregnant, breastfeeding, have a history of filler reactions, active infection, recent dental work or upcoming dental procedures, medical conditions, medications that may affect bruising or healing, or any health concerns. Some filler uses may be considered off label.",
      "Dermal fillers carry potential risks, including swelling, bruising, lumps, infection, vascular complications, and other adverse effects. Rare but serious complications can occur. Provider training, product selection, anatomy knowledge, and candidacy review matter."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your goals, anatomy, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Dermal Filler Treatment Guided By A Nurse Practitioner and Certified Injector",
    providerCopy: "Elite VitaMed takes a provider led approach to dermal fillers and injectable treatment planning. Your care is guided by a Nurse Practitioner and certified injector who understands facial anatomy, product selection, placement, safety, and natural looking results.",
    localEyebrow: "New Hampshire Dermal Filler Treatment",
    localTitle: "Dermal Filler Consultations and Treatments in New Hampshire",
    localCopy: "Elite VitaMed offers dermal filler consultations and treatment planning in New Hampshire and surrounding areas. Whether you are interested in lips, cheeks, chin, jawline, under eyes, Radiesse, Restylane, or facial balancing, your next step begins with provider guided planning.",
    related: [["Injectables","#injectables"],["Botox or Neurotoxins","#botox-neurotoxins"],["Sculptra","#sculptra"],["Facial Balancing","#facial-balancing"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure Which Filler Option Is Right For You?",
    consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "If you are unsure whether dermal filler, Radiesse, Restylane, neurotoxins, Sculptra, facial balancing, or another injectable option fits your goals, start with the Injectable Treatment Assessment.",
    faqTitle: "Dermal Filler Questions",
    faqs: [
      ["What are dermal fillers?","Dermal fillers are injectable aesthetic treatments used to support volume, contour, shape, and facial balance. They may be discussed for lips, cheeks, chin, jawline, under eyes, smile lines, and other areas."],
      ["What filler treatments does Elite VitaMed offer?","Treatment planning may include Radiesse fillers, Restylane fillers, jawline contouring, under eye rejuvenation, lip filler, cheek filler, chin filler, and facial balancing."],
      ["What is the difference between Radiesse and Restylane?","Radiesse may be discussed for structure, contour, and collagen stimulating support. Restylane fillers are hyaluronic acid based fillers that may support volume, contour, and soft tissue."],
      ["What is jawline contouring?","Jawline contouring focuses on definition, balance, or structure in the lower face. Depending on anatomy, this may involve filler, Radiesse, neurotoxins, or a combination."],
      ["What is under eye rejuvenation?","Under eye rejuvenation is a treatment discussion for hollowing, shadowing, or a tired looking appearance. Options depend on anatomy and provider evaluation."],
      ["How do I know if I need filler or Botox?","Neurotoxins are often used for expression related lines and muscle movement. Dermal fillers are often used for volume, contour, and structure. Start with an Injectable Assessment if you are unsure."],
      ["Will filler look natural?","The goal is natural looking refinement. Your provider creates a plan based on anatomy, goals, and comfort level."],
      ["Is there downtime after filler?","Temporary swelling, redness, tenderness, bruising, or firmness may occur. Downtime depends on the treatment area, product, and individual response."],
      ["How long do dermal fillers last?","Duration varies depending on the product, treatment area, amount placed, metabolism, and individual response."],
      ["Can filler be combined with other treatments?","In some cases, fillers may be combined with neurotoxins, Sculptra, PRF, skin treatments, or facial balancing based on provider recommendation."],
      ["Who performs dermal filler treatments?","Dermal filler treatments are performed by a Nurse Practitioner and certified injector."]
    ],
    finalTitle: "Ready To Explore Dermal Fillers?",
    finalCopy: "Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function sculptraPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Sculptra in New Hampshire",
    title: "Gradual Collagen Support For A More Refreshed, Natural Looking Appearance",
    subheadline: "Elite VitaMed offers Sculptra treatments for clients interested in gradual facial rejuvenation, collagen support, and natural looking volume improvement over time.",
    supportingCopy: "Sculptra may be discussed for clients who want a subtle, progressive approach to facial aging, volume loss, and collagen support. Your treatment is performed by a Nurse Practitioner and certified injector, with mobile or in home concierge appointments available in New Hampshire and surrounding areas.",
    primaryCta: "Book Your Appointment",
    secondaryCta: "Start Injectable Assessment",
    thirdCta: "Request A Phone Consultation",
    trustLine: "Performed by a Nurse Practitioner and certified injector.",
    icon: "sparkle",
    introEyebrow: "What It Is",
    introTitle: "What Is Sculptra?",
    introCopy: [
      "Sculptra is an injectable treatment made with poly-L-lactic acid, often referred to as PLLA. It is commonly discussed as a biostimulatory injectable because it is designed to support the body's natural collagen production over time.",
      "Unlike traditional dermal fillers that are often used for more immediate volume or contour, Sculptra is typically used as a gradual treatment option. Your provider evaluates your goals, facial structure, volume patterns, skin quality, treatment history, and candidacy before recommending a plan."
    ],
    whoTitle: "Who May Be Interested In Sculptra?",
    whoCopy: "Sculptra may be a good fit for clients who want a gradual, natural looking approach to facial rejuvenation rather than an instant filler effect.",
    whoFor: ["Facial volume loss","Collagen loss","A hollow or tired looking appearance","Early facial aging","Loss of facial support","Skin quality changes","Gradual improvement","Natural looking rejuvenation","Long term planning","Full face refresh goals"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Common Sculptra Treatment Areas",
    optionsCopy: "Sculptra may be discussed for areas where collagen support, facial structure, or gradual volume improvement may be desired. Some uses or areas may be considered off label. Your provider will explain what is appropriate and safe for your goals.",
    paths: [
      ["Cheeks and Midface","Sculptra may be discussed for gradual support in areas where facial volume patterns have changed over time.",["Cheeks","Midface","Facial support","Gradual rejuvenation"],"Discuss Cheek and Midface Support"],
      ["Temples, If Appropriate","Temple treatment may be discussed after careful evaluation of anatomy, candidacy, goals, and safety.",["Temple hollowing","Facial balance","Provider evaluation","Careful planning"],"Discuss Temple Support"],
      ["Lower Face and Jawline Support","Sculptra may be considered as part of a broader plan for gradual lower face support and facial rejuvenation.",["Lower face","Jawline support","Smile line support","Marionette area support"],"Discuss Lower Face Support"],
      ["Full Face Rejuvenation Planning","Sculptra may be part of a thoughtful, staged approach for clients interested in natural looking collagen support over time.",["Facial aging","Volume patterns","Skin quality","Long term planning"],"Explore Full Face Planning"]
    ],
    benefitsTitle: "Why Clients Consider Sculptra",
    benefits: [
      ["Supports Collagen Over Time","Sculptra may help support collagen production gradually, making it an option for long term rejuvenation planning."],
      ["Natural Looking Progression","Because results develop over time, Sculptra may appeal to clients who want subtle improvement rather than a sudden change."],
      ["Addresses Facial Volume Changes","Sculptra may be discussed for areas where volume loss or facial support changes are a concern."],
      ["Works In A Full Face Plan","Sculptra may be part of a broader injectable plan that includes fillers, neurotoxins, Radiesse, PDO threads, or facial balancing."],
      ["Provider Guided Strategy","Your provider determines whether Sculptra is appropriate based on anatomy, timeline, treatment goals, and expectations."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For Sculptra?",
    candidatesCopy: "An ideal candidate for Sculptra is someone who wants a gradual, provider guided approach to facial rejuvenation and understands that results develop over time.",
    candidates: ["Want natural looking improvement","Are interested in collagen support","Have facial volume loss or support changes","Prefer gradual results instead of immediate filler style volume","Are open to a series of treatments if recommended","Understand that results vary","Are not pregnant or breastfeeding","Are willing to follow aftercare instructions"],
    expectTitle: "What Happens During A Sculptra Appointment?",
    downtimeTitle: "Is There Downtime With Sculptra?",
    downtime: "Temporary swelling, redness, tenderness, bruising, firmness, or mild discomfort may occur after treatment. Some swelling may make the area appear fuller at first, but this initial appearance is not the final result. Your provider will explain aftercare instructions based on your plan.",
    steps: [
      ["Consultation and Goal Review","Your provider reviews your goals, concerns, previous injectable history, medical history, and the improvement you hope to see."],
      ["Facial Assessment","Your provider evaluates facial volume, skin quality, structure, symmetry, and whether Sculptra is appropriate."],
      ["Treatment Planning","Your provider explains placement, realistic expectations, and whether a series of sessions or another option may be recommended."],
      ["Treatment","If appropriate, Sculptra is injected into selected areas based on your treatment plan."],
      ["Aftercare and Follow Up","You receive aftercare instructions and guidance on what to expect as results gradually develop."]
    ],
    focusEyebrow: "Treatment Areas",
    focusTitle: "Common Sculptra Treatment Areas",
    focusItems: ["Cheeks","Temples, if appropriate","Midface","Lower face","Jawline support","Smile line support","Marionette area support","Full face rejuvenation planning"],
    resultsTitle: "What Results Can You Expect From Sculptra?",
    resultsCopy: "Sculptra results are gradual. Some clients may notice temporary fullness shortly after treatment due to swelling or product placement, but this is not the final result. The intended effect develops over time as collagen support builds gradually.",
    comparisonTitle: "Sculptra, Radiesse, Dermal Fillers, or PDO Threads?",
    comparisons: [
      ["Sculptra","Often discussed for gradual collagen support, natural looking volume improvement over time, and long term facial rejuvenation planning."],
      ["Radiesse","Often discussed for structure, contour, and collagen stimulating support, depending on candidacy and treatment area."],
      ["Dermal Fillers","Often discussed for more immediate volume, shape, contour, lips, cheeks, chin, jawline, under eyes, and facial balancing."],
      ["PDO Threads","Often discussed for subtle lifting, mild laxity, and non surgical support in appropriate candidates."],
      ["Botox or Neurotoxins","Often discussed for expression related lines, muscle movement, jawline slimming, neck bands, and lower face concerns."],
      ["Facial Balancing","Often discussed when multiple areas need to be evaluated together for a complete treatment plan."]
    ],
    comparisonCta: "Not sure whether Sculptra, Radiesse, filler, PDO threads, or neurotoxins fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Sculptra Requires Careful Planning and Provider Skill",
    safetyCopy: [
      "Sculptra should be performed by a qualified provider with appropriate training, product knowledge, anatomy knowledge, and careful patient selection.",
      "Tell your provider if you are pregnant, breastfeeding, have active infection, a history of keloids or hypertrophic scarring, autoimmune concerns, bleeding concerns, medication concerns, previous filler in the treatment area, previous reactions to injectables, or any health issue that should be reviewed.",
      "Potential risks can include swelling, bruising, tenderness, redness, lumps, nodules, asymmetry, infection, inflammation, and other adverse effects. Some treatment areas, techniques, or uses may be considered off label."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, skin quality, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Sculptra Treatment Guided By A Nurse Practitioner and Certified Injector",
    providerCopy: "Elite VitaMed takes a provider led approach to Sculptra and injectable treatment planning. Your care is guided by a Nurse Practitioner and certified injector who understands facial anatomy, collagen support, realistic expectations, safety, and long term aesthetic planning.",
    localEyebrow: "New Hampshire Sculptra Treatment",
    localTitle: "Sculptra Consultations and Treatments in New Hampshire",
    localCopy: "Elite VitaMed offers Sculptra consultations and treatment planning in New Hampshire and surrounding areas. This provider led approach helps clients explore collagen support, facial rejuvenation, volume support, and long term injectable planning with careful guidance.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Facial Balancing","#facial-balancing"],["Botox or Neurotoxins","#botox-neurotoxins"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure If Sculptra Is Right For You?",
    consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "If you are unsure whether Sculptra, Radiesse, dermal fillers, PDO threads, neurotoxins, or another injectable option fits your goals, start with the Injectable Treatment Assessment.",
    faqTitle: "Sculptra Questions",
    faqs: [
      ["What is Sculptra?","Sculptra is an injectable treatment made with poly-L-lactic acid. It is often discussed as a collagen stimulating injectable because it is designed to support the body's natural collagen production over time."],
      ["How is Sculptra different from dermal filler?","Traditional dermal fillers are often used for more immediate volume, shape, or contour. Sculptra is typically discussed for gradual collagen support and natural looking improvement over time."],
      ["Is Sculptra the same as Radiesse?","No. Sculptra and Radiesse are different injectable options. Both may be discussed for collagen support, but they work differently and may be selected for different goals."],
      ["Who is a good candidate for Sculptra?","A good candidate may be someone interested in gradual collagen support, facial rejuvenation, and natural looking improvement. Final candidacy depends on provider evaluation."],
      ["How many Sculptra treatments will I need?","The number of treatments depends on your goals, anatomy, age, treatment history, and provider recommendation. Some clients may need a series of sessions."],
      ["When will I see Sculptra results?","Sculptra results are gradual. Timing varies by client and treatment plan."],
      ["Is there downtime after Sculptra?","Temporary swelling, redness, tenderness, bruising, firmness, or mild discomfort may occur. Your provider will explain aftercare instructions."],
      ["Can Sculptra be combined with other injectables?","In some cases, yes. Sculptra may be combined with other injectables depending on your goals and provider recommendation."],
      ["Is Sculptra reversible?","Sculptra is not reversed the same way some hyaluronic acid fillers can be. Provider skill, planning, and candidacy review are important."],
      ["Will Sculptra look natural?","The goal is natural looking rejuvenation. Because Sculptra develops gradually, it may be a fit for clients who want subtle improvement over time."],
      ["Can I get Sculptra at home?","Elite VitaMed offers mobile or in home concierge appointments in New Hampshire and surrounding areas, depending on availability, candidacy, and service area."],
      ["Who performs Sculptra treatments?","Sculptra treatments are performed by a Nurse Practitioner and certified injector."]
    ],
    finalTitle: "Ready To Explore Sculptra?",
    finalCopy: "Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function facialBalancingPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Facial Balancing in New Hampshire",
    title: "A Personalized Approach To Looking Refreshed, Balanced, and Natural",
    subheadline: "Elite VitaMed offers facial balancing consultations and treatment planning for clients who want a more harmonious, refreshed appearance without looking overdone.",
    supportingCopy: "Facial balancing looks at your features as a whole instead of focusing on one isolated area. Depending on your goals, your plan may include dermal fillers, Botox or neurotoxins, Sculptra, Radiesse, PDO threads, skin support, or a staged approach.",
    primaryCta: "Book Your Appointment",
    secondaryCta: "Start Injectable Assessment",
    thirdCta: "Request A Phone Consultation",
    trustLine: "Performed by a Nurse Practitioner and certified injector.",
    icon: "users",
    mapSection: facialPlanningFaceMap("balancing"),
    introEyebrow: "What It Is",
    introTitle: "What Is Facial Balancing?",
    introCopy: [
      "Facial balancing is a personalized aesthetic approach that evaluates the face as a whole instead of treating only one feature at a time.",
      "The goal is to support harmony between your features, improve the appearance of proportion, and create a refreshed result that still looks like you. Your provider reviews your goals, facial structure, profile, symmetry, volume patterns, movement, skin quality, treatment history, and comfort level before recommending a plan."
    ],
    whoTitle: "Who May Be Interested In Facial Balancing?",
    whoCopy: "Facial balancing may be a good fit for clients who feel like one feature is affecting the overall harmony of their face, or who want a more complete treatment plan instead of guessing which area to treat.",
    whoFor: ["Facial proportion","Profile balance","Volume loss","Chin or jawline definition","Lip balance","Cheek support","Under eye hollowing","Lower face heaviness","Facial asymmetry","Natural looking refinement","Full face refresh goals","Personalized planning"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Common Areas Evaluated During Facial Balancing",
    optionsCopy: "Facial balancing can involve several areas depending on your anatomy, goals, and provider recommendation. Some clients may benefit from a staged plan.",
    paths: [
      ["Lips, Cheeks, and Chin","These features may be evaluated together to support proportion, profile balance, volume, and a refreshed appearance.",["Lip balance","Cheek support","Chin projection","Facial proportion"],"Discuss Feature Balance"],
      ["Jawline and Lower Face","The lower face may be evaluated for definition, harmony, volume patterns, muscle movement, or laxity concerns.",["Jawline definition","Lower face heaviness","Mouth area support","Profile balance"],"Discuss Lower Face Balance"],
      ["Under Eyes and Temples","Careful evaluation may help determine whether filler, PRF, skin support, or another approach is appropriate.",["Under eye hollowing","Tired appearance","Temple support, if appropriate","Provider guidance"],"Discuss Under Eye Support"],
      ["Brows, Neck, and Facial Movement","Neurotoxins or other options may be discussed when movement, neck bands, or lower face muscle activity affect the overall plan.",["Facial movement","Brows","Neck and jawline","Muscle related concerns"],"Discuss Movement Related Concerns"],
      ["Full Face Profile","A full face assessment helps identify which areas matter most and whether a staged approach is appropriate.",["Overall harmony","Profile balance","Multiple concerns","Natural looking refinement"],"Explore Full Face Planning"]
    ],
    benefitsTitle: "Why Clients Consider Facial Balancing",
    benefits: [
      ["Looks At The Whole Face","Facial balancing considers how your features work together instead of treating one area in isolation."],
      ["Supports Natural Looking Harmony","The goal is to create refreshed, balanced results that fit your features and do not look overdone."],
      ["Helps You Avoid Guessing","A consultation can help identify which areas may matter most for your goals."],
      ["Can Combine Treatment Options","Depending on your needs, your plan may involve filler, neurotoxins, Sculptra, Radiesse, PDO threads, skin support, or a staged plan."],
      ["Personalized Provider Guidance","Your provider determines what is appropriate based on your anatomy, history, comfort level, and desired outcome."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For Facial Balancing?",
    candidatesCopy: "An ideal candidate for facial balancing is someone who wants a personalized, provider guided approach to facial harmony and natural looking refinement.",
    candidates: ["Want a more balanced or refreshed appearance","Are unsure which treatment area matters most","Want to improve proportion or profile balance","Are interested in filler, neurotoxins, Sculptra, Radiesse, or a combination plan","Want natural looking refinement","Understand that results vary","Are open to a consultation and safety review","Are willing to follow pre care and aftercare instructions"],
    expectTitle: "What Happens During A Facial Balancing Appointment?",
    downtimeTitle: "Is There Downtime With Facial Balancing?",
    downtime: "Downtime depends on which treatments are included in your facial balancing plan. Temporary swelling, redness, tenderness, bruising, firmness, or minor discomfort may occur. Your provider will explain what to expect based on your specific treatment plan.",
    steps: [
      ["Consultation and Goal Review","Your provider asks about your goals, concerns, treatment history, comfort level, and what kind of result you want."],
      ["Full Face Assessment","Your provider evaluates facial structure, symmetry, volume, profile balance, skin quality, and facial movement."],
      ["Treatment Planning","Your provider explains which areas may be contributing most and whether filler, neurotoxins, Sculptra, Radiesse, PDO threads, or another option may be appropriate."],
      ["Treatment, If Appropriate","If you are a candidate and ready to move forward, treatment may be performed according to your personalized plan."],
      ["Aftercare and Follow Up","You receive aftercare instructions, expectations, and guidance on whether a staged approach or follow up may be recommended."]
    ],
    focusEyebrow: "Treatment Areas",
    focusTitle: "Common Areas Evaluated During Facial Balancing",
    focusItems: ["Lips","Cheeks","Chin","Jawline","Under eyes","Temples, if appropriate","Smile lines","Marionette area","Lower face","Brows","Neck and jawline","Full face profile","Overall facial harmony"],
    resultsTitle: "What Results Can You Expect From Facial Balancing?",
    resultsCopy: "Facial balancing results depend on the treatments used, areas treated, anatomy, product choice, placement, dosage, skin quality, treatment history, and individual response. Some changes may be visible sooner, while others may develop gradually over time.",
    comparisonTitle: "Facial Balancing, Fillers, Botox, Sculptra, or PDO Threads?",
    comparisons: [
      ["Facial Balancing","Best for clients who want a full face evaluation and personalized plan instead of treating one isolated concern."],
      ["Dermal Fillers","Often discussed for volume, contour, lips, cheeks, chin, jawline, under eyes, and facial structure."],
      ["Botox or Neurotoxins","Often discussed for expression lines, muscle movement, jawline slimming, neck bands, and lower face muscle concerns."],
      ["Sculptra","Often discussed for gradual collagen support and natural looking facial rejuvenation over time."],
      ["Radiesse","Often discussed for structure, contour, and collagen stimulating support."],
      ["PDO Threads","Often discussed for subtle lifting or skin support in appropriate candidates."]
    ],
    comparisonCta: "Not sure whether facial balancing, filler, neurotoxins, Sculptra, Radiesse, or PDO threads fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Facial Balancing Requires Provider Skill and Careful Planning",
    safetyCopy: [
      "Because facial balancing may involve multiple treatment areas or treatment types, provider evaluation is important. Before treatment, your provider reviews your goals, treatment history, medical history, current concerns, previous injectables, allergies, medications, and any factors that may affect candidacy.",
      "Tell your provider if you are pregnant, breastfeeding, have active infection, recent dental work or upcoming dental procedures, a history of reactions to injectable products, autoimmune concerns, bleeding concerns, medication concerns, previous filler or threads, or any health issue that should be reviewed.",
      "Potential risks depend on the treatments used and may include swelling, bruising, tenderness, redness, lumps, asymmetry, infection, inflammation, vascular complications, thread related concerns, or other adverse effects. Some uses or treatment areas may be considered off label."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, skin quality, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Facial Balancing Guided By A Nurse Practitioner and Certified Injector",
    providerCopy: "Elite VitaMed takes a provider led approach to facial balancing and injectable treatment planning. Your care is guided by a Nurse Practitioner and certified injector who understands anatomy, proportion, facial movement, safety, and natural looking results.",
    localEyebrow: "New Hampshire Facial Balancing Treatment",
    localTitle: "Facial Balancing Consultations in New Hampshire",
    localCopy: "Elite VitaMed offers facial balancing consultations and treatment planning in New Hampshire and surrounding areas. This provider led approach helps clients explore fillers, Botox or neurotoxins, Sculptra, Radiesse, PDO threads, skin support, and full face rejuvenation with careful guidance.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Botox or Neurotoxins","#botox-neurotoxins"],["Sculptra","#sculptra"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure What You Need?",
    consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "If you are unsure whether facial balancing, dermal fillers, Botox or neurotoxins, Sculptra, Radiesse, PDO threads, or another injectable option fits your goals, start with the Injectable Treatment Assessment.",
    faqTitle: "Facial Balancing Questions",
    faqs: [
      ["What is facial balancing?","Facial balancing is a personalized aesthetic approach that evaluates the face as a whole instead of treating one isolated area. It may involve fillers, neurotoxins, Sculptra, Radiesse, PDO threads, skin support, or a staged treatment plan."],
      ["Is facial balancing the same as filler?","Not always. Filler may be part of facial balancing, but facial balancing is the overall planning approach."],
      ["Who is facial balancing for?","Facial balancing may be a good fit for clients who want a more harmonious, refreshed appearance and are unsure which area or treatment would make the biggest difference."],
      ["What areas are commonly treated?","Common areas may include lips, cheeks, chin, jawline, under eyes, smile lines, lower face, brows, neck, and overall profile balance."],
      ["Will facial balancing make me look overdone?","The goal is natural looking refinement. Your treatment plan is customized to your features, goals, and comfort level."],
      ["Can facial balancing be done in one appointment?","Sometimes, but not always. Some clients may benefit from a staged approach depending on the treatments involved, amount needed, budget, comfort level, and safety considerations."],
      ["What is the difference between facial balancing and a non surgical face lift?","Facial balancing focuses on overall harmony, proportion, and feature balance. A non surgical face lift is usually more focused on lifting, support, and rejuvenation without surgery."],
      ["Is there downtime?","Downtime depends on the treatments used. Temporary swelling, redness, tenderness, bruising, or firmness may occur with injectables."],
      ["How do I know what I need?","Start with the Injectable Treatment Assessment or book a consultation. Your provider can evaluate your goals, facial structure, and treatment options."],
      ["Can facial balancing include Botox?","Yes. Botox or neurotoxins may be included if muscle movement, expression lines, jawline slimming, or lower face muscle activity is part of the concern."],
      ["Can facial balancing include Sculptra or Radiesse?","Yes. Sculptra or Radiesse may be discussed if collagen support, structure, or longer term rejuvenation goals are part of the plan."],
      ["Who performs facial balancing treatments?","Facial balancing treatments are performed by a Nurse Practitioner and certified injector."]
    ],
    finalTitle: "Ready To Explore Facial Balancing?",
    finalCopy: "Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function nonSurgicalFaceLiftPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Non Surgical Face Lift in New Hampshire",
    title: "Lift, Refresh, and Rebalance Your Look Without Surgery",
    subheadline: "Elite VitaMed offers non surgical face lift consultations and treatment planning for clients interested in a refreshed, lifted, and more balanced appearance without traditional surgery.",
    supportingCopy: "A non surgical face lift is not one single treatment. It is a personalized approach that may include dermal fillers, Botox or neurotoxins, Sculptra, Radiesse, PDO threads, skin tightening, or facial balancing depending on your goals and candidacy.",
    primaryCta: "Book Your Appointment",
    secondaryCta: "Start Injectable Assessment",
    thirdCta: "Request A Phone Consultation",
    trustLine: "Performed or guided by a Nurse Practitioner and certified injector.",
    icon: "sparkle",
    mapSection: nonSurgicalLiftFaceMap(),
    introEyebrow: "What It Is",
    introTitle: "What Is A Non Surgical Face Lift?",
    introCopy: [
      "A non surgical face lift is a personalized aesthetic treatment plan designed to support a more lifted, refreshed, and balanced appearance without traditional surgery.",
      "Instead of using one standard procedure, a non surgical face lift may combine different treatment options based on what is causing the concern. The goal is to create a natural looking refresh, not an overfilled or overdone appearance."
    ],
    whoTitle: "Who May Be Interested In A Non Surgical Face Lift?",
    whoCopy: "A non surgical face lift may be a good fit for clients who want a more refreshed or supported appearance but are not ready for surgery.",
    whoFor: ["Mild sagging","Lower face heaviness","Loss of facial volume","Softening jawline definition","Hollow or tired looking features","Smile lines or marionette lines","Skin laxity","Neck or lower face concerns","Facial imbalance","Early signs of aging","A refreshed look without surgery","Personalized combination planning"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Explore Non Surgical Face Lift Treatment Paths",
    optionsCopy: "A non surgical face lift may combine several treatment types based on anatomy, goals, skin quality, laxity, and provider recommendation. It does not replace a surgical facelift.",
    paths: [
      ["Dermal Fillers and Radiesse","Fillers or Radiesse may be discussed for volume support, structure, contour, cheeks, chin, jawline, and lower face rejuvenation.",["Volume support","Facial structure","Jawline definition","Lower face balance"],"Discuss Fillers and Radiesse"],
      ["Botox or Neurotoxins","Neurotoxins may be discussed for expression lines, muscle movement, lower face concerns, jawline slimming, neck bands, or a Nefertiti Lift.",["Expression lines","Muscle movement","Jawline and neck","Lower face balance"],"Discuss Neurotoxins"],
      ["Sculptra","Sculptra may be considered for gradual collagen support and natural looking facial rejuvenation over time.",["Collagen support","Gradual results","Facial rejuvenation","Long term planning"],"Discuss Sculptra"],
      ["PDO Threads","PDO threads may be discussed for subtle lifting, mild laxity, and skin support in appropriate candidates.",["Subtle lift","Mild laxity","Lower face support","Careful candidacy review"],"Discuss PDO Threads"],
      ["Skin Tightening and Facial Balancing","Skin support or facial balancing may be part of a staged plan for firmness, texture, harmony, and natural looking refresh goals.",["Skin firmness","Texture support","Full face harmony","Staged planning"],"Explore Combination Planning"]
    ],
    benefitsTitle: "Why Clients Consider A Non Surgical Face Lift",
    benefits: [
      ["Supports A Refreshed Appearance","A non surgical face lift may help improve the appearance of tired, hollow, sagging, or less defined features."],
      ["Personalized To Your Face","Your provider evaluates your full face instead of treating one isolated area."],
      ["Can Combine Treatment Options","Depending on your goals, your plan may include fillers, neurotoxins, PDO threads, Sculptra, Radiesse, skin tightening, or facial balancing."],
      ["No Traditional Surgery","This approach may fit clients who want non surgical rejuvenation and are not ready for a surgical facelift."],
      ["Provider Guided Planning","Your plan is built around anatomy, skin quality, treatment history, comfort level, and realistic expectations."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For A Non Surgical Face Lift?",
    candidatesCopy: "An ideal candidate for a non surgical face lift is someone with mild to moderate aesthetic concerns who wants a provider guided, non surgical approach to facial rejuvenation.",
    candidates: ["Want a more refreshed or lifted appearance","Have mild sagging or early laxity","Have volume loss or facial hollowing","Want better facial balance or structure","Are not ready for surgery","Understand results are not the same as a surgical facelift","Are open to combination treatment planning","Want realistic expectations before beginning"],
    expectTitle: "What Happens During A Non Surgical Face Lift Consultation?",
    downtimeTitle: "Is There Downtime With A Non Surgical Face Lift?",
    downtime: "Downtime depends on which treatments are included in your plan. Temporary swelling, redness, tenderness, bruising, firmness, tightness, sensitivity, or minor discomfort may occur depending on the treatments used. Your provider will explain what to expect.",
    steps: [
      ["Consultation and Goal Review","Your provider reviews your goals, concerns, treatment history, medical history, comfort level, and desired outcome."],
      ["Full Face Evaluation","Your provider evaluates structure, volume loss, skin quality, laxity, symmetry, muscle movement, jawline support, and lower face balance."],
      ["Treatment Planning","Your provider explains which options may be appropriate and whether a staged plan is recommended."],
      ["Treatment, If Appropriate","If you are a candidate and ready to move forward, treatment may be performed according to your personalized plan."],
      ["Aftercare and Follow Up","You receive aftercare instructions based on the treatments used and guidance on follow up."]
    ],
    focusEyebrow: "Treatment Areas",
    focusTitle: "Common Areas Evaluated For A Non Surgical Face Lift",
    focusItems: ["Cheeks","Midface","Lower face","Jawline","Chin","Smile lines","Marionette lines","Under eyes","Temples, if appropriate","Neck","Brows, if appropriate","Overall facial balance","Full face profile"],
    resultsTitle: "What Results Can You Expect From A Non Surgical Face Lift?",
    resultsCopy: "Results depend on the treatments used, anatomy, skin quality, degree of laxity, volume loss, product selection, treatment areas, treatment history, and individual response. A non surgical face lift should not be expected to create the same result as a surgical facelift.",
    comparisonTitle: "Non Surgical Face Lift, Facial Balancing, Filler, Threads, or Surgical Facelift?",
    comparisons: [
      ["Non Surgical Face Lift","Best for clients who want a customized, non surgical rejuvenation plan focused on lifting, support, structure, and refresh."],
      ["Facial Balancing","Best for clients who want a full face evaluation focused on harmony, proportion, and natural looking feature balance."],
      ["Dermal Fillers","Often discussed for volume support, contour, cheeks, chin, jawline, under eyes, lips, and facial structure."],
      ["Sculptra and Radiesse","Often discussed for gradual collagen support, structure, contour, and longer term rejuvenation planning."],
      ["PDO Threads","Often discussed for subtle lifting, mild laxity, and skin support in appropriate candidates."],
      ["Surgical Facelift or Neck Lift","May be more appropriate for advanced laxity, more significant sagging, or clients seeking a more dramatic surgical result."]
    ],
    comparisonCta: "Not sure whether you need a non surgical face lift, facial balancing, filler, Sculptra, Radiesse, PDO threads, or skin tightening? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Non Surgical Face Lift Planning Requires Provider Skill and Realistic Expectations",
    safetyCopy: [
      "Because a non surgical face lift may involve multiple treatment types, provider evaluation is important. Before treatment, your provider reviews goals, history, current concerns, previous injectables, allergies, medications, skin quality, and factors that may affect candidacy.",
      "Tell your provider if you are pregnant, breastfeeding, have active infection, recent dental work or upcoming dental procedures, a history of reactions to injectable products, autoimmune concerns, bleeding concerns, medication concerns, previous filler or threads, previous facial surgery, implanted devices, or any health issue that should be reviewed.",
      "Potential risks depend on the treatments used and may include swelling, bruising, tenderness, redness, lumps, asymmetry, infection, inflammation, vascular complications, thread related concerns, skin sensitivity, or other adverse effects. Some uses or treatment areas may be considered off label."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. A non surgical face lift does not replace a surgical facelift. Final treatment recommendations depend on your individual goals, anatomy, skin quality, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Non Surgical Face Lift Planning Guided By A Nurse Practitioner and Certified Injector",
    providerCopy: "Elite VitaMed takes a provider led approach to non surgical facial rejuvenation. Your care is guided by a Nurse Practitioner and certified injector who understands anatomy, facial balance, skin quality, safety, realistic expectations, and natural looking results.",
    localEyebrow: "New Hampshire Non Surgical Face Lift Care",
    localTitle: "Non Surgical Face Lift Consultations in New Hampshire",
    localCopy: "Elite VitaMed offers non surgical face lift consultations and treatment planning in New Hampshire and surrounding areas. This provider led approach helps clients explore fillers, Botox or neurotoxins, Sculptra, Radiesse, PDO threads, skin tightening, and facial balancing with careful guidance.",
    related: [["Injectables","#injectables"],["Facial Balancing","#facial-balancing"],["Dermal Fillers","#dermal-fillers"],["Sculptra","#sculptra"],["Botox or Neurotoxins","#botox-neurotoxins"],["Skin and Tightening","#skin-tightening"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure Where To Start?",
    consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "If you are unsure whether a non surgical face lift, facial balancing, filler, Sculptra, Radiesse, PDO threads, neurotoxins, or skin tightening fits your goals, start with the Injectable Treatment Assessment.",
    faqTitle: "Non Surgical Face Lift Questions",
    faqs: [
      ["What is a non surgical face lift?","A non surgical face lift is a personalized treatment approach that may use injectables, PDO threads, skin tightening, or combination planning to support a more refreshed, lifted, and balanced appearance without traditional surgery."],
      ["Is a non surgical face lift the same as a surgical facelift?","No. A non surgical face lift does not replace a surgical facelift. Surgical procedures may be more appropriate for advanced laxity or clients seeking a more dramatic and longer lasting result."],
      ["What treatments can be included?","A plan may include dermal fillers, Botox or neurotoxins, Sculptra, Radiesse, PDO threads, skin tightening, facial balancing, or a staged combination approach."],
      ["Who is a good candidate?","A good candidate may be someone with mild to moderate concerns who wants a non surgical approach and understands that results are different from surgery."],
      ["What areas can be treated?","Common areas may include cheeks, midface, lower face, jawline, chin, under eyes, smile lines, marionette lines, neck, and overall profile."],
      ["Will I look overdone?","The goal is natural looking refinement. Your provider creates a plan based on your features, goals, comfort level, and realistic expectations."],
      ["Is there downtime?","Downtime depends on the treatments used. Temporary swelling, bruising, tenderness, redness, tightness, or sensitivity may occur."],
      ["Can I do everything in one appointment?","Sometimes, but not always. Some clients may benefit from a staged approach for safety, comfort, budget, and more natural looking progression."],
      ["How long do results last?","Duration depends on the treatments used, products selected, treatment areas, individual response, and maintenance plan."],
      ["How do I know if I need fillers, threads, or skin tightening?","Start with the Injectable Treatment Assessment or book a consultation. Your provider can evaluate anatomy, skin quality, laxity, and goals."],
      ["Can a non surgical face lift include Sculptra or Radiesse?","Yes. Sculptra or Radiesse may be discussed if collagen support, structure, or longer term rejuvenation goals are part of your plan."],
      ["Who performs non surgical face lift treatments?","Treatments are performed or guided by a Nurse Practitioner and certified injector."]
    ],
    finalTitle: "Ready To Explore A Non Surgical Face Lift?",
    finalCopy: "Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function radiesseFillersPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Radiesse Fillers in New Hampshire",
    title: "Restore Structure, Support Collagen, and Refresh Your Natural Contours",
    subheadline: "Radiesse is an injectable treatment that may help improve facial structure, soften visible volume loss, and support a refreshed, more balanced appearance.",
    supportingCopy: "Elite VitaMed offers provider led Radiesse treatments in New Hampshire, performed by a Nurse Practitioner and certified injector. Your treatment plan is designed around your goals, facial anatomy, treatment history, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Injectable Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "gem",
    introEyebrow: "What It Is", introTitle: "What Is Radiesse?", introCopy: [
      "Radiesse is an injectable filler made with calcium hydroxylapatite, also known as CaHA, suspended in a gel carrier. It is often considered for clients who want support for facial structure, contour, and age related volume changes.",
      "Unlike some traditional hyaluronic acid fillers that are primarily used for soft volume and hydration, Radiesse may be discussed when the goal is more structural support, contour refinement, and collagen stimulation planning.",
      "At Elite VitaMed, Radiesse is never approached as a one size fits all treatment. Your provider will evaluate your anatomy, facial movement, skin quality, volume patterns, and desired outcome before recommending whether Radiesse is appropriate."
    ],
    whoTitle: "Who May Be Interested In Radiesse?", whoCopy: "Radiesse may be a strong fit for clients who want a more lifted, structured, or contoured look without surgery.",
    whoFor: ["Loss of facial definition","Softening along the jawline","Lower face volume changes","Deeper smile lines or folds","A less defined chin","Early signs of facial aging","Natural looking improvement","Facial balancing goals"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Explore Radiesse Treatment Goals", optionsCopy: "Radiesse may be considered when the goal is structural support, contour refinement, or collagen stimulation planning. Final areas and treatment recommendations depend on provider evaluation.",
    paths: [
      ["Jawline Definition","Radiesse may be discussed for clients seeking structural support or a more defined lower face contour.",["Jawline definition","Lower face structure","Profile support","Facial balancing"],"Book A Radiesse Consultation"],
      ["Chin Contouring","Radiesse may be discussed when chin contour and lower facial profile are part of a broader structural plan.",["Chin contouring","Lower face balance","Profile planning","Structural support"],"Discuss Chin Contouring"],
      ["Lower Face Support","Radiesse may be discussed for smile lines, lower face folds, and areas where structural support may be appropriate.",["Lower face support","Smile lines","Marionette area","Natural looking rejuvenation"],"Discuss Lower Face Support"]
    ],
    benefitsTitle: "Why Clients Consider Radiesse", benefits: [
      ["Facial Structure","Radiesse may help support facial structure and more defined lower face contours."],["Contour Support","Treatment may be discussed for jawline, chin, and lower face contour goals."],["Facial Fold Support","Radiesse may be discussed for softening moderate facial folds in appropriate candidates."],["Collagen Support Planning","Radiesse may be part of a longer term plan focused on collagen stimulation."],["Personalized Care","Your treatment plan is based on anatomy, goals, history, and provider evaluation."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For Radiesse?", candidatesCopy: "You may be a candidate for Radiesse if you want injectable treatment for structure, contour, or facial rejuvenation and prefer a provider led plan that looks natural and balanced.",
    candidates: ["Want facial structure or contour support","Prefer natural looking refinement","Are interested in jawline or chin definition","Want provider led treatment planning","Understand that results vary","Are open to a phased plan","Want to compare injectable options"],
    expectTitle: "What Happens During A Radiesse Appointment?", downtimeTitle: "Is There Downtime After Radiesse?",
    downtime: "Downtime can vary depending on the treatment area, amount used, injection technique, and your individual response. Temporary swelling, tenderness, redness, bruising, or firmness near the treated area may occur. Your provider will explain what to expect and when to reach out with concerns.",
    steps: [["Consultation and Facial Assessment","Your provider reviews your concerns, goals, medical history, prior injectable treatments, and treatment areas."],["Structure and Balance Review","Your provider evaluates facial structure, volume patterns, skin quality, symmetry, and natural movement."],["Treatment Planning","If Radiesse is appropriate, your provider explains the plan, realistic expectations, and potential risks."],["Treatment","Treatment is performed carefully and conservatively with a focus on balance and safety."],["Aftercare","Your provider explains aftercare instructions and when to follow up."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Common Radiesse Treatment Areas",
    focusItems: ["Jawline definition","Chin contouring","Lower face support","Smile lines","Marionette area support","Facial balancing","Cheek or midface structure, when appropriate","Hand rejuvenation, only if offered and clinically appropriate"],
    resultsTitle: "What Results Can You Expect From Radiesse?", resultsCopy: "Radiesse results should look refreshed, balanced, and aligned with your natural facial structure. Before and after results vary based on your starting anatomy, age related changes, skin quality, product selection, amount used, and how your body responds. Your provider may recommend a phased treatment plan.",
    comparisonTitle: "Radiesse Compared To Similar Treatments", comparisons: [
      ["Radiesse vs Dermal Fillers","Traditional dermal fillers are often used for soft volume, contouring, hydration, or feature enhancement. Radiesse may be considered when the goal is more structural support and collagen stimulation planning."],["Radiesse vs Sculptra","Sculptra is often discussed for gradual collagen support and broader facial rejuvenation over time. Radiesse may be preferred when a client wants more immediate structural support in specific areas."],["Radiesse vs PDO Threads","PDO threads may be discussed for lifting support and tissue repositioning in select candidates. Radiesse may be discussed for contour, structure, and volume support."],["Radiesse vs Non Surgical Face Lift","A non surgical face lift may include a customized combination of treatments. Radiesse can be one part of a larger rejuvenation plan when appropriate."]
    ],
    comparisonCta: "Not sure whether Radiesse, dermal filler, Sculptra, PDO threads, or another injectable treatment fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Radiesse Safety and Provider Skill Matter", safetyCopy: [
      "Radiesse should only be performed by a qualified provider with a strong understanding of facial anatomy, injectable technique, treatment planning, and safety protocols.",
      "Your provider reviews your medical history, treatment history, allergies, medications, aesthetic goals, prior filler history, treatment area, and what is safest for you before recommending treatment.",
      "Potential side effects may include swelling, bruising, tenderness, redness, firmness, asymmetry, lumps, or other injection related reactions. Your provider will review risks, aftercare, and when to seek medical guidance."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Provider Led Injectable Care In New Hampshire", providerCopy: "Your Radiesse treatment is performed by a Nurse Practitioner and certified injector with a focus on safety, anatomy, natural looking results, and personalized treatment planning. Every injectable treatment begins with a thoughtful assessment so your provider can recommend what is appropriate for your face, your goals, and your long term treatment plan.",
    localEyebrow: "New Hampshire Radiesse Treatment", localTitle: "Radiesse Fillers in New Hampshire",
    localCopy: "Elite VitaMed provides Radiesse fillers in New Hampshire for clients seeking provider led aesthetic care with the privacy and convenience of mobile or in home concierge appointments.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Restylane Fillers","#restylane-fillers"],["Sculptra","#sculptra"],["PDO Threads","#pdo-threads"],["Facial Balancing","#facial-balancing"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Botox or Neurotoxins","#botox-neurotoxins"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure If Radiesse Is Right For You?", consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "Radiesse may be a strong option for structure, contour, and collagen stimulation planning, but it is not the right fit for every face or every goal. Start with an injectable assessment or request a phone consultation to discuss your options.",
    faqTitle: "Radiesse Questions", faqs: [
      ["Is Radiesse the same as regular filler?","Radiesse is a type of injectable filler, but it is different from many hyaluronic acid fillers. It is commonly discussed for structure, contour, and collagen stimulation planning."],["What areas can Radiesse treat?","Radiesse may be considered for areas such as the jawline, chin, lower face, smile lines, and other areas where structural support may be appropriate."],["Does Radiesse stimulate collagen?","Radiesse may support collagen stimulation as part of the body's natural response to treatment. Your provider can explain realistic expectations."],["Is Radiesse right for lips?","Radiesse is not typically used for soft, highly mobile areas like the lips. Your provider may discuss lip filler or another appropriate option."],["How soon will I see results?","Some visible improvement may be noticed after treatment, with changes continuing to settle as swelling improves."],["How long does Radiesse last?","Longevity varies by person, treatment area, amount used, metabolism, and treatment plan."],["Can Radiesse be combined with other treatments?","Radiesse may be part of a larger injectable or facial balancing plan based on your goals and provider recommendation."]
    ],
    finalTitle: "Ready To Explore Radiesse In New Hampshire?", finalCopy: "If you are interested in facial structure, contour, and collagen stimulation planning, Radiesse may be worth discussing during your consultation."
  });
}

function restylaneFillersPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Restylane Fillers in New Hampshire", title: "Soften, Shape, and Refresh Your Features With Restylane Fillers",
    subheadline: "Restylane fillers are hyaluronic acid injectable treatments that may help restore volume, smooth visible folds, enhance facial contours, and support a naturally refreshed appearance.",
    supportingCopy: "Elite VitaMed offers provider led Restylane filler treatments in New Hampshire, performed by a Nurse Practitioner and certified injector. Each treatment plan is customized around your facial anatomy, goals, treatment history, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Injectable Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "gem",
    introEyebrow: "What They Are", introTitle: "What Are Restylane Fillers?", introCopy: [
      "Restylane is a family of hyaluronic acid dermal fillers used in aesthetic treatment planning for facial volume, contouring, smoothing, and feature enhancement.",
      "Different Restylane products may be selected for different goals, such as lip enhancement, cheek support, facial balancing, chin contouring, or softening moderate facial folds.",
      "Your provider evaluates your goals, facial structure, skin quality, movement, and treatment history before recommending the best approach."
    ],
    whoTitle: "Who May Be Interested In Restylane Fillers?", whoCopy: "Restylane may be a strong fit for clients who want soft, natural looking enhancement without an overfilled appearance.",
    whoFor: ["Loss of facial volume","Thinning lips","Deeper smile lines","Softening facial contours","Folds around the mouth","Balanced facial proportions","Cheek volume changes","Chin or lower face imbalance","A tired appearance","Subtle facial asymmetry"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Explore Restylane Filler Goals", optionsCopy: "Different Restylane products may be selected for different treatment goals. Your provider will determine the appropriate product, area, and amount based on your anatomy and desired result.",
    paths: [
      ["Lip Enhancement","Certain Restylane products may be discussed for lip shape, fullness, and soft volume support.",["Lip enhancement","Lip shape","Soft volume","Natural looking refinement"],"Discuss Lip Filler"],
      ["Cheek and Midface Support","Restylane may be discussed for cheek support, midface volume, and broader facial balancing goals.",["Cheek support","Midface volume","Facial balancing","A refreshed appearance"],"Discuss Cheek Filler"],
      ["Smoothing and Contouring","Restylane may be discussed for facial folds, chin contouring, lower face balance, and other areas when appropriate.",["Smile lines","Chin contouring","Lower face balance","Facial folds"],"Book A Restylane Consultation"]
    ],
    benefitsTitle: "Why Clients Consider Restylane Fillers", benefits: [
      ["Natural Looking Volume","Restylane may help support subtle, balanced volume enhancement."],["Softer Facial Folds","Treatment may be discussed for visible folds and smoothing goals."],["Feature Enhancement","Restylane may support lips, cheeks, chin, and facial contour goals."],["Customizable Planning","Different Restylane products may be selected for different treatment areas and desired results."],["Non Surgical Option","Restylane offers a provider guided injectable option for clients seeking refinement without surgery."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For Restylane?", candidatesCopy: "You may be a candidate for Restylane fillers if you want natural looking injectable treatment for volume, contour, or facial balancing.",
    candidates: ["Want natural looking refinement","Want soft volume or contour support","Are interested in lip, cheek, or chin enhancement","Want facial balancing guidance","Understand that results vary","Prefer a provider led plan","Are open to a phased plan"],
    expectTitle: "What Happens During A Restylane Filler Appointment?", downtimeTitle: "Is There Downtime After Restylane?",
    downtime: "Downtime varies depending on the treatment area, amount used, injection technique, and your individual response. Temporary swelling, bruising, redness, tenderness, firmness, or mild unevenness may occur as the filler settles. Your provider will explain what to expect and when to reach out with concerns.",
    steps: [["Consultation and Facial Assessment","Your provider reviews your aesthetic goals, anatomy, prior injectable history, medical history, movement, and treatment areas."],["Product Selection","Your provider determines whether a Restylane product may be appropriate for your desired outcome."],["Treatment Planning","Your provider explains realistic expectations, safety considerations, and the personalized treatment plan."],["Treatment","Treatment is performed with a focus on balance, precision, and natural looking refinement."],["Aftercare","Your provider explains aftercare instructions and when to follow up."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Common Restylane Treatment Areas",
    focusItems: ["Lip filler","Cheek filler","Chin filler","Smile lines","Marionette lines","Lower face balancing","Facial balancing","Jawline support, when appropriate","Under eye rejuvenation, when appropriate","Hand rejuvenation, only if offered and clinically appropriate"],
    resultsTitle: "What Results Can You Expect From Restylane?", resultsCopy: "Restylane filler results should look balanced, refreshed, and aligned with your natural features. Before and after results vary based on your starting anatomy, treatment area, product used, amount placed, provider technique, and how your body responds.",
    comparisonTitle: "Restylane Compared To Similar Treatments", comparisons: [
      ["Restylane vs Radiesse","Restylane is a hyaluronic acid filler that may be used for soft volume, shaping, smoothing, and facial balancing. Radiesse may be considered for more structural support and collagen stimulation planning."],["Restylane vs Sculptra","Restylane may provide more immediate volume or contour support in specific areas. Sculptra is often discussed for gradual collagen support over time."],["Restylane vs Botox","Restylane may help address volume, contour, and folds. Botox or neurotoxins may help soften expression related lines by relaxing targeted muscles."],["Restylane vs Facial Balancing","Facial balancing is the overall strategy. Restylane may be one tool used within that strategy."]
    ],
    comparisonCta: "Not sure whether Restylane, Radiesse, Sculptra, Botox, or another injectable option fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Restylane Safety and Provider Skill Matter", safetyCopy: [
      "Restylane filler should be performed by a qualified provider with training in facial anatomy, injectable technique, treatment planning, and safety protocols.",
      "Your provider reviews your medical history, allergies, medications, prior filler history, current concerns, treatment goals, anatomy, treatment area, and what is safest for you before making a recommendation.",
      "Potential side effects may include swelling, bruising, redness, tenderness, firmness, lumps, asymmetry, or other injection related reactions. Your provider discusses risks, aftercare, and when to seek medical guidance."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Provider Led Restylane Filler Treatments In New Hampshire", providerCopy: "Your Restylane treatment is performed by a Nurse Practitioner and certified injector with a focus on safety, anatomy, natural looking results, and personalized treatment planning. Every filler plan begins with a thoughtful provider evaluation, so your treatment can be selected based on what makes sense for your face, not a generic template.",
    localEyebrow: "New Hampshire Restylane Treatment", localTitle: "Restylane Fillers in New Hampshire",
    localCopy: "Elite VitaMed provides Restylane fillers in New Hampshire for clients looking for provider led injectable care, natural looking enhancement, and a premium concierge treatment experience.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Radiesse Fillers","#radiesse-fillers"],["Sculptra","#sculptra"],["PDO Threads","#pdo-threads"],["Facial Balancing","#facial-balancing"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Botox or Neurotoxins","#botox-neurotoxins"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure If Restylane Is Right For You?", consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "Restylane may be a strong option for soft volume, smoothing, lip enhancement, contouring, or facial balancing, but the right treatment depends on your anatomy and goals. Start with an injectable assessment or request a phone consultation.",
    faqTitle: "Restylane Questions", faqs: [
      ["Is Restylane the same as dermal filler?","Restylane is a brand family of hyaluronic acid dermal fillers. Different Restylane products may be selected for different treatment goals."],["What areas can Restylane treat?","Restylane may be discussed for lips, smile lines, cheeks, chin, lower face, facial folds, contouring, and other areas depending on the product used."],["Is Restylane good for lips?","Certain Restylane products may be considered for lip enhancement, lip shape, or soft lip volume."],["How soon will I see results?","Some improvement may be visible shortly after treatment, although swelling can temporarily affect the appearance."],["How long does Restylane last?","Longevity varies by person, product used, treatment area, amount placed, metabolism, and lifestyle factors."],["Can Restylane look natural?","Restylane can be used conservatively to support natural looking improvement. The outcome depends on product selection, placement, amount used, technique, and anatomy."],["Is Restylane reversible?","Hyaluronic acid fillers may be dissolved in certain situations using an appropriate dissolving agent. Your provider can discuss this if it is relevant to your plan."]
    ],
    finalTitle: "Ready To Explore Restylane Fillers In New Hampshire?", finalCopy: "If you are interested in smoother folds, softer volume, lip enhancement, facial contouring, or natural looking facial balancing, Restylane may be worth discussing during your consultation."
  });
}

function jawlineContouringPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Jawline Contouring in New Hampshire", title: "Define Your Jawline and Bring Balance Back To Your Lower Face",
    subheadline: "Jawline contouring is a customized injectable treatment approach that may help improve lower face definition, support facial balance, and create a more refined profile.",
    supportingCopy: "Elite VitaMed offers provider led jawline contouring in New Hampshire, performed by a Nurse Practitioner and certified injector. Your treatment plan may include dermal filler, Radiesse, chin support, Botox, or facial balancing depending on your anatomy, goals, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Injectable Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "gem",
    introEyebrow: "What It Is", introTitle: "What Is Jawline Contouring?", introCopy: [
      "Jawline contouring is a customized injectable treatment approach designed to support definition, structure, and balance in the lower face.",
      "Rather than treating the jawline in isolation, Elite VitaMed evaluates the chin, jawline, cheeks, neck transition, and facial proportions. In some cases, chin filler, facial balancing, masseter Botox, or a broader injectable plan may create a more natural looking result.",
      "Jawline contouring may involve hyaluronic acid dermal fillers, Radiesse, Botox or neurotoxins, or a combination approach. Final recommendations depend on your anatomy, medical history, treatment history, goals, and provider evaluation."
    ],
    whoTitle: "Who May Be Interested In Jawline Contouring?", whoCopy: "Jawline contouring may be a strong fit for clients who want a more sculpted, balanced, or defined lower face without surgery.",
    whoFor: ["A softer or less defined jawline","Early jowling or lower face heaviness","Weak chin projection","Lack of lower face balance","A less defined side profile","Facial asymmetry","Blending between the jawline and neck","A sharper facial contour"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Explore Jawline Contouring Treatment Paths", optionsCopy: "The right lower face plan depends on your anatomy, structure, skin quality, muscle activity, and goals. Your provider will determine whether one treatment or a combination approach is appropriate.",
    paths: [
      ["Jawline Definition","Direct jawline support may be discussed for clients who want a cleaner, more structured lower face contour.",["Jawline definition","Lower face structure","Side profile balance","Natural looking refinement"],"Book A Jawline Consultation"],
      ["Chin and Jawline Balance","Chin support may be discussed when projection or facial proportion affects the appearance of the jawline.",["Chin projection","Profile balance","Lower face harmony","Facial proportion"],"Discuss Chin Support"],
      ["Masseter and Lower Face Planning","Botox or a broader facial balancing plan may be discussed when muscle activity or multiple lower face concerns affect the result.",["Masseter activity","Jawline slimming","Facial balancing","Combination planning"],"Discuss Your Options"]
    ],
    benefitsTitle: "Why Clients Consider Jawline Contouring", benefits: [
      ["More Definition","Treatment may help support a more defined jawline and lower face contour."],["Balanced Profile","Planning may improve chin and jawline harmony from the side profile."],["Facial Proportion","A customized plan can support more balanced facial proportions."],["Non Surgical Option","Jawline contouring offers a non surgical approach for appropriate candidates."],["Personalized Planning","Your treatment is guided by anatomy, goals, history, and provider evaluation."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For Jawline Contouring?", candidatesCopy: "You may be a candidate if you want more definition in the lower face and prefer a subtle to moderate, non surgical improvement that still looks natural with your face.",
    candidates: ["Good overall health","Realistic expectations","Mild to moderate loss of definition","A naturally softer jawline","Chin or lower face imbalance","Interest in injectable planning","No contraindications that make treatment inappropriate"],
    expectTitle: "What Happens During A Jawline Contouring Appointment?", downtimeTitle: "Is There Downtime After Jawline Contouring?",
    downtime: "Downtime varies depending on the treatment approach, product used, amount placed, injection technique, and your individual response. Temporary swelling, bruising, tenderness, redness, firmness, or mild unevenness may occur as the area settles. Your provider will explain aftercare and when to reach out with concerns.",
    steps: [["Consultation and Assessment","Your provider reviews your goals, medical history, prior treatments, and lower face concerns."],["Profile and Anatomy Review","Your provider evaluates chin projection, jawline definition, volume patterns, skin quality, and facial proportions."],["Treatment Planning","Your provider explains whether filler, Radiesse, Botox, or another option is appropriate."],["Treatment","Treatment is performed with a focus on precision, symmetry, proportion, and natural looking structure."],["Aftercare","You receive personalized aftercare instructions and follow up guidance."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Common Jawline Contouring Treatment Areas",
    focusItems: ["Jawline definition","Chin support","Lower face contour","Pre jowl area","Mandibular angle","Side profile balance","Lower face asymmetry","Facial balancing","Masseter area, when appropriate","Neck and jawline transition, when appropriate"],
    resultsTitle: "What Results Can You Expect From Jawline Contouring?", resultsCopy: "Jawline contouring results should look structured, balanced, and natural to your face. Before and after results vary based on your starting anatomy, chin projection, jawline structure, skin quality, product used, amount placed, provider technique, and how your body responds. A phased approach may be recommended.",
    comparisonTitle: "Jawline Contouring Compared To Similar Treatments", comparisons: [
      ["Jawline Contouring vs Chin Filler","Chin filler focuses on shape, projection, or balance. Jawline contouring focuses on lower face structure. Many clients benefit from evaluating both together."],["Jawline Contouring vs Radiesse","Radiesse may be used when structural support or collagen stimulation planning is appropriate. Your provider may instead recommend hyaluronic acid filler or another approach."],["Jawline Contouring vs Masseter Botox","Masseter Botox focuses on relaxing muscle activity. Jawline contouring typically focuses on creating structure or definition. Some clients may benefit from a combination."],["Jawline Contouring vs PDO Threads","PDO threads may be discussed when mild lifting support is part of the goal. Injectable contouring focuses more on structure, volume, and shape."],["Jawline Contouring vs Non Surgical Face Lift","A non surgical face lift is a broader strategy that may include jawline contouring, chin support, cheek support, neurotoxins, threads, or skin tightening."]
    ],
    comparisonCta: "Not sure whether filler, Radiesse, masseter Botox, PDO threads, or another option fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Jawline Contouring Safety and Provider Skill Matter", safetyCopy: [
      "Jawline contouring should only be performed by a qualified provider with training in facial anatomy, injectable technique, vascular safety, and facial balancing.",
      "Your provider reviews your medical history, allergies, medications, prior injectable history, treatment goals, anatomy, skin quality, and what is safest for you before recommending a plan.",
      "Potential side effects may include swelling, bruising, tenderness, redness, firmness, asymmetry, lumps, or other injection related reactions. Your provider reviews risks, aftercare, and when to seek medical guidance."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Provider Led Jawline Contouring In New Hampshire", providerCopy: "Your jawline contouring treatment is performed by a Nurse Practitioner and certified injector with a focus on safety, anatomy, facial proportion, and natural looking results. Every jawline treatment begins with a detailed provider evaluation, so your plan is based on your actual anatomy, not a generic template or trend driven look.",
    localEyebrow: "New Hampshire Jawline Treatment", localTitle: "Jawline Contouring in New Hampshire", localCopy: "Elite VitaMed provides jawline contouring in New Hampshire for clients seeking provider led injectable care, natural looking facial balancing, and premium mobile or in home concierge aesthetic treatment.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Radiesse Fillers","#radiesse-fillers"],["Restylane Fillers","#restylane-fillers"],["Facial Balancing","#facial-balancing"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Masseter Botox","#botox-neurotoxins"],["PDO Threads","#pdo-threads"],["Sculptra","#sculptra"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure If Jawline Contouring Is Right For You?", consultationTitle: "Start With The Injectable Treatment Assessment", consultationCopy: "Jawline contouring may be a strong option if you want a more defined lower face, improved side profile, or better facial balance, but the right approach depends on your anatomy and goals. Start with an injectable assessment or request a phone consultation.",
    faqTitle: "Jawline Contouring Questions", faqs: [
      ["Is jawline contouring done with filler?","Jawline contouring may involve dermal filler, Radiesse, or another injectable option depending on your anatomy and goals. Some clients may also benefit from chin filler, Botox, or a broader facial balancing plan."],["Will jawline contouring make my face look sharper?","Jawline contouring may help create a more defined or structured look, but the result depends on your starting anatomy, product choice, technique, and individual response."],["Can jawline contouring help with jowls?","Jawline contouring may help improve mild lower face softness in some clients, but it does not replace surgery or advanced skin tightening."],["Do I need chin filler too?","Some clients benefit from chin support because the chin and jawline work together visually. Your provider will explain whether it should be considered."],["Is Botox used for jawline contouring?","Botox or neurotoxins may be discussed when muscle activity affects the lower face, such as in the masseter area."],["How long does jawline contouring last?","Longevity varies depending on the product, treatment area, amount placed, metabolism, lifestyle factors, and individual response."],["Will results look natural?","The goal is natural looking refinement that enhances your existing structure without making the lower face look heavy or overfilled."]
    ],
    finalTitle: "Ready To Explore Jawline Contouring In New Hampshire?", finalCopy: "If you want a more defined lower face, stronger profile, or more balanced facial structure, jawline contouring may be worth discussing during your consultation."
  });
}

function underEyeRejuvenationPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Under Eye Rejuvenation in New Hampshire", title: "Refresh Tired Looking Eyes With A Provider Led Treatment Plan",
    subheadline: "Under eye rejuvenation may help improve the appearance of tired looking eyes, hollowness, shadows, and loss of support beneath the eyes when you are an appropriate candidate.",
    supportingCopy: "Elite VitaMed offers provider led under eye rejuvenation in New Hampshire, performed by a Nurse Practitioner and certified injector. Your treatment plan may include under eye filler, PRF, skin support, cheek support, or another option depending on your anatomy, goals, medical history, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Injectable Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    introEyebrow: "What It Is", introTitle: "What Is Under Eye Rejuvenation?", introCopy: [
      "Under eye rejuvenation is a customized treatment approach for tired looking eyes, hollowness, shadows, thinning skin appearance, or loss of support beneath the lower eyelids.",
      "Not every under eye concern is caused by volume loss. Genetics, pigmentation, skin quality, fluid retention, allergies, anatomy, cheek volume loss, or true lower eyelid bags may contribute.",
      "Elite VitaMed evaluates the under eye area, cheeks, midface support, skin quality, and overall facial balance before recommending filler, PRF, cheek support, skin treatments, collagen support, or another path."
    ],
    whoTitle: "Who May Be Interested In Under Eye Rejuvenation?", whoCopy: "Under eye rejuvenation may be a strong fit for clients who feel their eyes make them look more tired than they feel.",
    whoFor: ["Hollowing beneath the eyes","Tear trough shadows","A tired or sunken appearance","Loss of lower eyelid to cheek support","Mild midface volume changes","Skin quality changes","Darkness caused by shadowing","A more rested appearance"],
    candidacyNote: "Significant bags, fluid retention, loose skin, pigmentation, or certain anatomy may require another treatment or specialist evaluation.",
    optionsTitle: "Explore Under Eye Rejuvenation Treatment Paths", optionsCopy: "Under eye concerns can have different causes. Your provider will choose a conservative plan based on anatomy, candidacy, and what is contributing to the concern.",
    paths: [
      ["Under Eye Filler","Hyaluronic acid filler may be discussed for select clients with hollowness or tear trough shadowing caused by volume loss.",["Tear trough hollows","Shadowing","Conservative planning","Appropriate anatomy"],"Discuss Under Eye Filler"],
      ["PRF and Skin Support","PRF or other skin support options may be discussed when the goal is focused more on skin quality and natural tissue response than volume.",["Skin quality","Natural rejuvenation","Collagen support","Regenerative planning"],"Discuss PRF"],
      ["Cheek and Midface Support","Sometimes cheek or midface support creates a better transition beneath the eye than treating directly under the eye.",["Cheek support","Midface balance","Lower eyelid transition","Facial balancing"],"Discuss Cheek Support"]
    ],
    benefitsTitle: "Why Clients Consider Under Eye Rejuvenation", benefits: [
      ["More Rested Look","Treatment may support a more refreshed, rested appearance."],["Softer Hollows","A personalized plan may soften the appearance of under eye hollows."],["Smoother Transition","Planning may improve the transition between the lower eyelid and cheek."],["Natural Looking Care","Treatment is planned conservatively to avoid a heavy or overfilled look."],["Candidate First Approach","Your provider identifies the cause before recommending a treatment path."]
    ],
    candidatesTitle: "Who May Be An Ideal Candidate For Under Eye Rejuvenation?", candidatesCopy: "You may be a candidate if you have mild to moderate hollowness or shadowing caused by volume loss or loss of support beneath the eyes and understand that filler is not always the right option.",
    candidates: ["Mild to moderate hollowness","A visible tear trough or shadow","Good overall health","Realistic expectations","Skin quality that can support treatment","No contraindications","A desire for subtle improvement"],
    expectTitle: "What Happens During An Under Eye Rejuvenation Appointment?", downtimeTitle: "Is There Downtime After Under Eye Rejuvenation?",
    downtime: "Downtime varies depending on the treatment used, your anatomy, injection technique, and individual response. Temporary swelling, bruising, tenderness, redness, or mild unevenness may occur. Because the skin is thin and delicate, the under eye area can be more prone to visible swelling or bruising than some other areas.",
    steps: [["Consultation and Assessment","Your provider reviews your concerns, anatomy, medical history, allergies, medications, and prior injectable history."],["Cause and Candidacy Review","Your provider evaluates whether hollowing, pigmentation, swelling, skin quality, cheek support, or another factor is contributing."],["Treatment Planning","Your provider explains whether filler, PRF, cheek support, skin treatments, or another option is appropriate."],["Conservative Treatment","If treatment is recommended, it is performed with precision and restraint for a natural looking result."],["Aftercare","You receive aftercare guidance based on your specific treatment plan."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Common Under Eye Rejuvenation Focus Areas",
    focusItems: ["Tear troughs","Under eye hollows","Lower eyelid to cheek transition","Midface support","Cheek support","Shadows caused by hollowing","Skin quality around the eyes","Facial balance around the eyes and cheeks"],
    resultsTitle: "What Results Can You Expect From Under Eye Rejuvenation?", resultsCopy: "Under eye rejuvenation should look subtle, refreshed, and natural. The goal is not to erase every line, shadow, or sign of aging. Before and after results vary based on your starting anatomy, skin quality, cheek support, treatment type, product selection, provider technique, and how your body responds.",
    comparisonTitle: "Under Eye Rejuvenation Compared To Similar Treatments", comparisons: [
      ["Under Eye Rejuvenation vs Under Eye Filler","Under eye filler may support hollowness or tear trough shadowing in select candidates. Under eye rejuvenation is the broader strategy and may involve other options."],["Under Eye Rejuvenation vs PRF","PRF may be discussed when filler is not the best fit or the goal is focused more on skin quality and natural tissue response over time."],["Under Eye Rejuvenation vs Cheek Filler","Sometimes treating cheek or midface support creates a better transition beneath the eyes than treating directly under the eye."],["Under Eye Rejuvenation vs Skin Treatments","Skin treatments may be discussed when the main concern is texture, dullness, fine lines, or skin quality rather than hollowing."],["Under Eye Rejuvenation vs Lower Eyelid Surgery","If the main concern is significant bags, loose skin, or fat pad protrusion, a surgical consultation may be more appropriate."]
    ],
    comparisonCta: "Not sure whether under eye filler, PRF, cheek support, skin treatments, or another option fits your goals? Start with the Injectable Treatment Assessment.",
    safetyTitle: "Under Eye Safety and Careful Candidacy Review Matter", safetyCopy: [
      "The under eye area is delicate. Injectable treatment should only be performed by a qualified provider with training in facial anatomy, injectable safety, and under eye assessment.",
      "Your provider evaluates anatomy, skin quality, medical history, prior filler history, swelling tendencies, treatment goals, and what is safest for you before recommending treatment.",
      "Potential side effects may include swelling, bruising, redness, tenderness, unevenness, firmness, puffiness, or other injection related reactions. Rare but serious complications can occur. Your provider reviews risks, aftercare, and when to seek medical attention."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Provider Led Under Eye Rejuvenation In New Hampshire", providerCopy: "Your under eye rejuvenation treatment is performed by a Nurse Practitioner and certified injector with a focus on safety, anatomy, conservative planning, and natural looking results. Every under eye treatment begins with a detailed provider evaluation because this area requires precision, restraint, and the right candidate selection.",
    localEyebrow: "New Hampshire Under Eye Treatment", localTitle: "Under Eye Rejuvenation in New Hampshire", localCopy: "Elite VitaMed provides under eye rejuvenation in New Hampshire for clients seeking provider led aesthetic care, natural looking results, and a premium mobile or in home concierge treatment experience.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Restylane Fillers","#restylane-fillers"],["Facial Balancing","#facial-balancing"],["Sculptra","#sculptra"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Regenerative Aesthetics","#regenerative-aesthetics"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure If Under Eye Rejuvenation Is Right For You?", consultationTitle: "Start With The Injectable Treatment Assessment", consultationCopy: "Under eye concerns can come from hollowing, pigmentation, skin quality, swelling, cheek support, or natural anatomy. The right treatment depends on identifying the cause first. Start with an injectable assessment or request a phone consultation.",
    faqTitle: "Under Eye Rejuvenation Questions", faqs: [
      ["Is under eye rejuvenation the same as under eye filler?","Not always. Under eye filler may be one option, but the broader plan may involve filler, PRF, cheek support, skin treatments, or another approach."],["What causes under eye hollows?","Under eye hollows may be related to genetics, aging, volume loss, midface support changes, skin thinning, facial anatomy, or shadowing."],["Can filler fix dark circles?","Filler may help when darkness is caused by hollowing or shadowing, but it may not improve pigmentation, vascular darkness, allergies, or discoloration."],["Is under eye filler right for everyone?","No. Some clients are better suited for PRF, cheek filler, skin support, skincare, or surgical evaluation."],["Can under eye rejuvenation look natural?","Yes, when the right candidate receives the right treatment plan. The goal is subtle improvement that makes the eyes look more rested."],["Will this help under eye bags?","It may help some clients with shadowing or mild hollowing, but it is not a replacement for surgery and may not correct true under eye bags."],["How soon will I see results?","Timing depends on the treatment used. Filler related changes may be visible shortly after treatment, while PRF and collagen support options may take more time."],["How long do results last?","Longevity varies depending on the treatment used, anatomy, metabolism, lifestyle factors, and individual response."]
    ],
    finalTitle: "Ready To Explore Under Eye Rejuvenation In New Hampshire?", finalCopy: "If tired looking eyes, under eye hollows, or tear trough shadows are affecting how refreshed you look, under eye rejuvenation may be worth discussing during your consultation."
  });
}

function pdoThreadsFinancing() {
  return `
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Financing Available</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Start Your Treatment Plan Now, Pay Over Time</h2><p class="mt-4 max-w-4xl leading-8 text-ink/70">Elite VitaMed offers financing through Cherry, making it easier for eligible clients to move forward with personalized aesthetic and wellness treatment planning.</p><p class="mt-3 max-w-4xl text-sm leading-7 text-ink/64">With Cherry financing, eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_CHERRY_URL}" target="_blank" rel="noopener" data-integration-placeholder="cherry" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a></div><p class="mt-5 text-xs leading-6 text-ink/58">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p></div></section>
  `;
}

function pdoThreadTreatmentAreaBreakdown() {
  const areas = [
    ["PDO Brow Lift and Fox Eye Lift","Support for drooping brows and a more open, lifted appearance around the eyes.",["Heavy looking upper eyelids caused by brow position","Drooping outer brows","Tired looking eyes"],"4 to 10 threads may be discussed."],
    ["PDO Mid Face Lift","Support for sagging cheeks and the appearance of mid face descent.",["Flattened cheeks","Early facial sagging","Loss of cheek definition"],"6 to 20 threads may be discussed."],
    ["PDO Threads For Smile Lines","Support for nasolabial folds when folds are influenced by mid face descent or tissue laxity.",["Smile lines","Mid face descent","Early aging around the mouth"],"4 to 10 threads may be discussed."],
    ["PDO Marionette Line Lift","Lower face support when marionette lines or downturned mouth corners relate to tissue descent.",["Marionette lines","Downturned mouth corners","Lower face heaviness"],"4 to 10 threads may be discussed."],
    ["PDO Jawline Contouring","Support for jawline definition and the appearance of mild lower face laxity.",["Mild jowling","Loss of jawline definition","Softening along the lower face"],"8 to 20 threads may be discussed."],
    ["PDO Jowl Lift","Support for sagging tissue along the jawline and the appearance of early jowling.",["Jowls","Sagging lower face","Mild skin laxity"],"6 to 16 threads may be discussed."],
    ["PDO Chin Enhancement","Support for chin contour and lower face balance in appropriate candidates.",["Chin contour goals","Lower face balance","Profile refinement"],"4 to 8 threads may be discussed."],
    ["PDO Temple Lift","Subtle support through the temples and lateral face in carefully selected candidates.",["Temple support","Lateral face softening","Subtle lift goals"],"4 to 8 threads may be discussed."],
    ["PDO Under Eye Tightening","Smooth threads may be discussed to support skin quality beneath the eyes.",["Crepey under eye texture","Skin quality support","Natural looking refinement"],"Multiple smooth threads may be discussed."],
    ["Full Face PDO Thread Lift","A personalized combination of thread paths may be discussed for full face support goals.",["Multiple areas of concern","Full face planning","Subtle non surgical lift goals"],"20 to 60+ threads may be discussed."],
    ["PDO Neck Lift","Support for mild neck laxity and the appearance of loose or crepey texture.",["Mild neck laxity","Skin support","Non surgical neck goals"],"10 to 20 threads may be discussed."],
    ["Horizontal Neck Lines","Smooth threads may be part of a broader plan for visible horizontal neck lines.",["Horizontal neck lines","Skin quality","Combination planning"],"Thread type and number depend on the treatment plan."],
    ["PDO Decolletage Rejuvenation","Smooth threads may be discussed for crepey texture and skin quality across the decolletage.",["Crepey texture","Skin quality support","Decolletage rejuvenation"],"Multiple smooth threads may be discussed."]
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Treatment Area Breakdown</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore PDO Thread Treatment Areas</h2>
          <p class="mt-4 leading-8 text-ink/68">PDO threads can be used in several areas depending on your anatomy, concerns, and candidacy. These general planning ranges are educational examples only. They are not quotes, guarantees, or final treatment recommendations.</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          ${areas.map((area) => `<article class="luxe-card flex flex-col p-6"><p class="treatment-card-label">${area[3]}</p><h3 class="mt-3 font-serif text-3xl font-semibold text-navy">${area[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${area[1]}</p><div class="mt-5 flex flex-wrap gap-2">${area[2].map((item) => `<span class="treatment-best-chip">${item}</span>`).join("")}</div></article>`).join("")}
        </div>
        <p class="mt-7 rounded-2xl border border-champagne/25 bg-ivory p-5 text-sm leading-7 text-ink/65">Your provider determines the appropriate thread type, number, direction, and placement after evaluating your anatomy, skin quality, degree of laxity, goals, and medical history.</p>
      </div>
    </section>
  `;
}

function pdoThreadsPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "PDO Threads in New Hampshire",
    title: "Lift, Support, and Refresh Your Features Without Surgery",
    subheadline: "PDO threads are a non surgical aesthetic treatment that may help support mild facial laxity, improve visible contours, and encourage collagen support over time.",
    supportingCopy: "Elite VitaMed offers provider led PDO thread treatments in New Hampshire, performed by a Nurse Practitioner and certified injector. Your treatment plan may focus on the brows, cheeks, jawline, jowls, neck, under eyes, or full face depending on your anatomy, goals, treatment history, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Injectable Assessment", thirdCta: "Request A Phone Consultation",
    trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    mapSection: pdoThreadFaceMap(),
    introEyebrow: "What They Are", introTitle: "What Are PDO Threads?", introCopy: [
      "PDO threads are dissolvable sutures placed beneath the skin to help support targeted areas of the face, jawline, neck, or decolletage. Depending on the thread type and placement technique, PDO threads may be used to create subtle lifting support, improve the look of mild laxity, and encourage collagen support as part of a longer term aesthetic plan.",
      "PDO threads are not a surgical facelift and they do not replace surgery for advanced skin laxity. They are best viewed as a non surgical option for appropriate candidates who want natural looking improvement, better support, and a refreshed appearance without a surgical procedure.",
      "At Elite VitaMed, PDO thread treatments are customized. Your provider will assess your skin quality, facial structure, volume patterns, degree of laxity, and desired outcome before recommending whether threads, filler, Radiesse, Sculptra, Botox, skin tightening, or a combination plan is the best fit."
    ],
    whoTitle: "Who May Be Interested In PDO Threads?",
    whoCopy: "PDO threads may be a strong fit for clients who want subtle lifting support, improved facial definition, or collagen focused rejuvenation without surgery.",
    whoFor: ["Mild to moderate facial sagging","Early jowling","Softening along the jawline","Drooping brows","Heavy looking upper eyelids caused by brow position","Mid face descent","Flattened cheek support","Smile lines related to facial descent","Marionette lines","Loose neck skin","Crepey texture around the neck or decolletage","A tired or less lifted facial appearance"],
    candidacyNote: "Final treatment recommendations are always determined after provider evaluation.",
    optionsTitle: "Explore PDO Thread Treatment Paths",
    optionsCopy: "PDO threads may be used in different ways depending on the treatment area, thread type, skin quality, and your goals.",
    paths: [
      ["Thread Lift","A PDO thread lift may be discussed for clients interested in a subtle lifted appearance without surgery. This option may be considered for certain areas of the face or neck where mild laxity is present.",["Mild sagging","Lower face support","Jawline support","Non surgical lift goals","Realistic expectations"],"Book A Thread Lift Consultation"],
      ["Jawline PDO Threads","Jawline PDO threads may be discussed for clients who want to support the appearance of a more defined or lifted jawline. The right approach depends on whether the concern is skin laxity, volume loss, muscle activity, or facial structure.",["Jawline softness","Mild lower face laxity","Lower face support","Comparing threads, filler, and neurotoxins","Provider guidance"],"Explore Jawline Threads"],
      ["Lower Face PDO Threads","Lower face PDO threads may be discussed for clients concerned with mild heaviness, sagging, or loss of support around the lower face. Depending on the concern, a combination plan may be recommended.",["Lower face heaviness","Mild sagging","Marionette area support","Early aging changes","Non surgical rejuvenation"],"Explore Lower Face Threads"],
      ["Neck PDO Threads","Neck PDO threads may be discussed for clients concerned with mild neck laxity or skin support. The neck requires careful evaluation because some concerns may be better addressed with neurotoxins, skin tightening, or surgical consultation.",["Mild neck laxity","Skin support","Non surgical neck options","Comparing threads and neck tightening","Realistic expectations"],"Explore Neck Threads"],
      ["PDO Threads With Injectable Planning","PDO threads may sometimes be discussed as part of a larger injectable plan that includes filler, neurotoxins, Sculptra, Radiesse, or facial balancing. This can help address multiple concerns such as laxity, volume loss, muscle pull, and facial structure.",["Multiple areas of concern","Full face refresh goals","Comparing threads and fillers","Personalized planning","A staged treatment plan"],"Start Injectable Assessment"]
    ],
    benefitsTitle: "Why Clients Consider PDO Threads", benefits: [
      ["Subtle Lift","PDO threads may help support a subtle lifted appearance in appropriate candidates."],
      ["Improved Facial Contours","Treatment planning may focus on a more supported, refreshed facial contour."],
      ["Jawline Definition","Threads may be discussed to support the appearance of a cleaner jawline."],
      ["Cheek Support","Mid face thread paths may support a more refreshed cheek contour."],
      ["Smile Line Support","Threads may be discussed when smile lines or marionette areas relate to tissue descent."],
      ["Brow Position","Brow support may be discussed for appropriate candidates who want a more open eye area."],
      ["Mild Jowling","Threads may be included in a plan focused on early lower face softening."],
      ["Skin Quality","Some thread plans may support firmer looking skin texture over time."],
      ["Collagen Support","PDO threads may be included in a longer term collagen focused plan."],
      ["Non Surgical Planning","Threads offer a natural looking rejuvenation option without surgery for appropriate candidates."]
    ],
    treatmentAreaSection: pdoThreadTreatmentAreaBreakdown(),
    candidatesTitle: "Who May Be An Ideal Candidate For PDO Threads?",
    candidatesCopy: "You may be a candidate for PDO threads if you have mild to moderate skin laxity and want a non surgical treatment option for lifting support or collagen focused rejuvenation. PDO threads provide subtle to moderate support, not the same result as a surgical facelift.",
    candidates: ["Mild to moderate facial laxity","Early jowling or lower face softness","Drooping brow position","Loss of cheek support","Loose or crepey neck texture","Good overall health","Realistic expectations","Interest in a natural looking result","No contraindications that would make treatment inappropriate"],
    expectTitle: "What Happens During A PDO Thread Appointment?",
    downtimeTitle: "Is There Downtime With PDO Threads?",
    downtime: "Downtime varies by client, treatment area, thread placement, and individual healing response. Temporary swelling, tenderness, bruising, tightness, puckering, dimpling, or mild discomfort may occur after treatment. Some clients may need to limit certain facial movements, strenuous activity, massage, or pressure on the treated area during the initial healing period. Your provider will explain your specific aftercare instructions before and after treatment.",
    steps: [
      ["Consultation and Goal Review","Your provider reviews your goals, treatment history, medical history, facial structure, degree of laxity, and what kind of result you are hoping for."],
      ["Skin and Facial Assessment","Your provider evaluates skin quality, laxity, tissue support, facial balance, and whether PDO threads are appropriate."],
      ["Treatment Plan","Your provider explains which areas may be treated, what results are realistic, what risks exist, and whether another treatment may be a better fit."],
      ["Treatment","If appropriate, PDO threads are placed beneath the skin according to your treatment plan."],
      ["Aftercare and Follow Up","You receive aftercare instructions and guidance on what to expect as the area heals and settles."]
    ],
    focusEyebrow: "Treatment Areas", focusTitle: "Common PDO Thread Treatment Areas",
    focusItems: ["Brows and fox eye lift planning","Temples","Under eyes","Cheeks and mid face","Smile lines","Marionette lines","Jawline","Jowls","Chin","Neck","Horizontal neck lines","Decolletage","Full face refresh planning"],
    resultsTitle: "What Results Can You Expect From PDO Threads?",
    resultsCopy: "PDO thread results depend on your anatomy, skin quality, degree of laxity, treatment area, thread placement, number of threads used, aftercare, and individual healing response. Some clients may notice a change sooner, while final settling and healing may take time. The result is generally intended to be subtle and supportive rather than surgical or dramatic. PDO threads do not replace a facelift or neck lift.",
    comparisonTitle: "How Do PDO Threads Compare To Other Treatments?",
    comparisons: [
      ["PDO Threads vs Dermal Fillers","Threads are often discussed for subtle lifting and support. Dermal fillers are often discussed for volume, contour, and structure."],
      ["PDO Threads vs Radiesse","Threads focus on directional support. Radiesse may be discussed for structure, contour, and collagen stimulating support."],
      ["PDO Threads vs Sculptra","Threads may create a more immediate supported appearance. Sculptra is often discussed for gradual collagen support over time."],
      ["PDO Threads vs Botox","Threads support tissue positioning. Botox or neurotoxins are often discussed for expression lines and muscle related concerns."],
      ["PDO Threads vs Surgical Facelift","Threads do not replace surgery. Surgical procedures may be more appropriate for advanced laxity or structural concerns."],
      ["PDO Threads vs Skin Tightening","Threads may support mild laxity along planned paths. Skin tightening treatments may be discussed for firmness, texture, and broader skin quality goals."]
    ],
    comparisonCta: "Not sure whether PDO threads, filler, Sculptra, Radiesse, neurotoxins, or skin tightening fits your goals? Start with the Injectable Treatment Assessment or request a consultation.",
    safetyTitle: "PDO Threads Require Careful Provider Evaluation",
    safetyCopy: [
      "PDO threads should be performed by a qualified provider with appropriate training, anatomy knowledge, and careful patient selection. At Elite VitaMed, care is provider led and built around candidacy, safety, and realistic expectations.",
      "Tell your provider if you are pregnant, breastfeeding, have active infection, open wounds, autoimmune concerns, a history of poor wound healing, bleeding concerns, medication concerns, previous facial surgery, previous thread treatments, or any health issue that should be reviewed before treatment.",
      "Potential risks can include swelling, bruising, tenderness, dimpling, puckering, asymmetry, thread visibility, infection, inflammation, discomfort, and the need for additional care or correction."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, skin quality, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: "Provider Led PDO Thread Treatments In New Hampshire",
    providerCopy: "Elite VitaMed takes a provider led approach to PDO threads and injectable treatment planning. Your care is guided by a Nurse Practitioner and certified injector who understands the importance of safety, facial anatomy, realistic expectations, and personalized planning. Each treatment plan is shaped around your anatomy, skin quality, degree of laxity, goals, and whether threads or another option may be more appropriate.",
    localEyebrow: "New Hampshire PDO Thread Care", localTitle: "PDO Threads and Thread Lift Consultations in New Hampshire",
    localCopy: "Elite VitaMed offers PDO thread consultations and treatment planning in New Hampshire and surrounding areas. This provider led approach helps clients explore thread lifts, jawline threads, lower face support, neck threads, and non surgical rejuvenation options with careful guidance and realistic expectations.",
    related: [["Injectables","#injectables"],["Dermal Fillers","#dermal-fillers"],["Radiesse Fillers","#radiesse-fillers"],["Restylane Fillers","#restylane-fillers"],["Sculptra","#sculptra"],["Facial Balancing","#facial-balancing"],["Non Surgical Face Lift","#non-surgical-face-lift"],["Jawline Contouring","#jawline-contouring"],["Under Eye Rejuvenation","#under-eye-rejuvenation"],["Botox or Neurotoxins","#botox-neurotoxins"],["Skin Rejuvenation","#skin-tightening"],["Microneedling with Stem Cells","#regenerative-aesthetics"],["Full Treatment Assessment","#assessment"],["Injectable Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure If PDO Threads Are Right For You?", consultationTitle: "Start With The Injectable Treatment Assessment",
    consultationCopy: "If you are unsure whether PDO threads, dermal fillers, Sculptra, Radiesse, neurotoxins, or another injectable option fits your goals, start with the Injectable Treatment Assessment. Your result will help give you a clearer starting point before booking or speaking with the provider.",
    financingSection: pdoThreadsFinancing(),
    faqTitle: "PDO Thread Questions", faqs: [
      ["What are PDO threads?","PDO threads are absorbable threads placed beneath the skin to provide support and create a subtle lifting effect in appropriate candidates."],
      ["What do PDO threads help with?","PDO threads may be discussed for mild laxity, lower face support, jawline support, neck concerns, and subtle non surgical lift goals."],
      ["Are PDO threads the same as a facelift?","No. PDO threads do not replace a facelift or neck lift. They may be an option for certain clients with mild laxity, but surgical procedures may be more appropriate for advanced sagging."],
      ["How do I know if I am a candidate?","Candidacy depends on your anatomy, skin quality, degree of laxity, medical history, goals, and provider evaluation."],
      ["Is there downtime after PDO threads?","Downtime varies. Temporary swelling, bruising, tenderness, tightness, puckering, dimpling, or mild discomfort may occur. Your provider will explain aftercare instructions."],
      ["When will I see results?","Some changes may be visible sooner, while healing and settling can take time. Results vary by client and treatment plan."],
      ["Can PDO threads be combined with filler or Sculptra?","In some cases, yes. PDO threads may be discussed as part of a larger plan that includes filler, Sculptra, Radiesse, neurotoxins, skin tightening, or facial balancing."],
      ["Are PDO threads safe?","PDO threads should be performed by a qualified provider with appropriate training, anatomy knowledge, and careful candidacy screening. Risks and aftercare will be reviewed before treatment."],
      ["What areas can be treated with PDO threads?","Common areas may include the lower face, jawline, cheeks, neck, marionette area, nasolabial support, brows if appropriate, and full face planning."],
      ["Who performs PDO thread treatments?","Care is guided by a Nurse Practitioner and certified injector."],
      ["Should I choose PDO threads or filler?","It depends on your concern. Threads are often discussed for subtle lifting and support, while filler is often discussed for volume, contour, and structure. Your provider can help determine which option makes sense."],
      ["What if PDO threads are not right for me?","If PDO threads are not the best fit, your provider may discuss other options such as dermal fillers, Sculptra, Radiesse, neurotoxins, skin and tightening treatments, or referral when appropriate."]
    ],
    finalTitle: "Ready To Explore PDO Threads In New Hampshire?",
    finalCopy: "Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function injectablesPage() {
  const paths = [
    ["Botox or Neurotoxins", "Botox or neurotoxins may be used to temporarily soften the appearance of expression related lines and muscle related concerns.", ["Fine lines", "Wrinkles", "Expression lines", "Jawline or lower face muscle concerns", "Neck bands", "A refreshed appearance"], "Explore Neurotoxins", "#botox-neurotoxins", "syringe"],
    ["Dermal Fillers", "Dermal fillers may be used to support volume, contour, shape, and facial balance for areas such as lips, cheeks, chin, jawline, and under eyes.", ["Volume loss", "Lip enhancement", "Cheek support", "Chin projection", "Jawline definition", "Facial balancing"], "Explore Dermal Fillers", "#dermal-fillers", "gem"],
    ["Sculptra", "Sculptra may be discussed for clients who want gradual collagen support and natural looking improvement over time.", ["Gradual improvement", "Collagen support", "Facial aging", "Volume support over time", "Natural looking rejuvenation"], "Explore Sculptra", "#sculptra", "sparkle"],
    ["Radiesse", "Radiesse may be discussed for clients who want structure, contour, and collagen stimulating support.", ["Facial structure", "Contour support", "Lower face support", "Collagen stimulation goals", "Comparing injectable options"], "Explore Radiesse", "#radiesse-fillers", "gem"],
    ["Restylane Fillers", "Restylane hyaluronic acid fillers may be discussed for soft volume, shaping, smoothing, and facial balancing.", ["Lip enhancement", "Cheek support", "Facial folds", "Chin contouring", "Natural looking volume"], "Explore Restylane Fillers", "#restylane-fillers", "gem"],
    ["PDO Threads", "PDO threads may be discussed for clients interested in subtle lifting or skin support without surgery. This option depends heavily on candidacy.", ["Mild laxity", "Subtle lift", "Lower face support", "Non surgical lifting goals", "Alternatives to surgery"], "Explore PDO Threads", "#pdo-threads", "sparkle"],
    ["Facial Balancing", "Facial balancing is a personalized approach that looks at the face as a whole instead of focusing on only one area.", ["Full face refresh goals", "Facial harmony", "Multiple areas of concern", "Clients unsure what they need", "Personalized planning"], "Explore Facial Balancing", "#facial-balancing", "users"],
    ["Non Surgical Face Lift", "A non surgical face lift approach may combine multiple injectable or skin support options based on your anatomy, goals, and provider recommendation.", ["Lower face concerns", "Mild sagging", "Volume loss", "Facial structure support", "Non surgical rejuvenation"], "Explore Face Lift", "#non-surgical-face-lift", "sparkle"],
    ["Injectables Consultation", "If you are not sure which injectable treatment is right for you, a consultation is the best place to start.", ["First time injectable clients", "Comparing treatment options", "Clients who want a full face plan", "Provider guidance before booking"], "Book Consultation", "#contact", "calendar"]
  ];
  const benefits = [
    ["Refreshed Appearance", "Injectables may help soften visible signs of aging and support a more rested, refreshed look."],
    ["Natural Looking Refinement", "A personalized injectable plan can help enhance your features without making you look overdone."],
    ["Facial Balance", "Injectables can be used as part of a facial balancing plan to support proportion, harmony, and structure."],
    ["Non Surgical Treatment Options", "Injectables offer non surgical options for clients who want aesthetic improvement without a surgical procedure."],
    ["Personalized Treatment Planning", "Your plan is based on your goals, anatomy, movement, treatment history, and what is appropriate for you."]
  ];
  const steps = [
    ["Consultation and Goal Review", "Your provider will ask about your goals, concerns, treatment history, medical history, and what kind of result you want."],
    ["Facial Assessment", "Your provider will evaluate your facial structure, movement, volume, symmetry, and treatment areas."],
    ["Personalized Treatment Plan", "You will receive guidance on which injectable treatment or combination of treatments may fit your goals."],
    ["Treatment", "If appropriate, your injectable treatment will be performed by a Nurse Practitioner and certified injector."],
    ["Aftercare and Follow Up Guidance", "You will receive aftercare instructions and guidance on what to expect after treatment."]
  ];
  const faqs = [
    ["What are injectable treatments?", "Injectable treatments are non surgical aesthetic treatments that may help address concerns such as lines, wrinkles, volume loss, facial balance, collagen support, and facial structure."],
    ["What injectable treatments does Elite VitaMed offer?", "Treatment options may include Botox or neurotoxins, dermal fillers, Sculptra, Radiesse, PDO threads, facial balancing, non surgical face lift options, and injectable consultations."],
    ["How do I know which injectable I need?", "If you are unsure, start with the Injectable Treatment Assessment or request a consultation. Your provider can help determine which option may fit your goals."],
    ["What is the difference between Botox and filler?", "Botox or neurotoxins are often used for expression related lines and muscle movement. Dermal fillers are often used for volume, contour, and structure."],
    ["Is Sculptra the same as filler?", "Sculptra is different from traditional dermal filler because it is often discussed for gradual collagen support over time."],
    ["What is facial balancing?", "Facial balancing is a personalized approach that looks at the face as a whole and may involve multiple injectable options."],
    ["Are injectables painful?", "Most injectable treatments are generally quick and tolerable, but comfort varies by client and treatment area."],
    ["Is there downtime after injectables?", "Downtime depends on the treatment and areas treated. Temporary swelling, redness, tenderness, or bruising may occur."],
    ["How long do injectable results last?", "Duration varies depending on the injectable used, treatment area, individual response, metabolism, and treatment plan."],
    ["Will I look overdone?", "The goal at Elite VitaMed is natural looking refinement. Your treatment plan is customized to your goals, facial features, and comfort level."],
    ["Can I get injectables at home?", "Elite VitaMed offers mobile or in home concierge appointments in New Hampshire and surrounding areas, depending on availability and service area."],
    ["Who performs injectable treatments?", "Injectable treatments are performed by a Nurse Practitioner and certified injector."]
  ];
  return `
    <section class="treatment-detail-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">${particles()}<div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24"><div class="reveal max-w-4xl"><p class="eyebrow">Mobile Injectable Treatments in New Hampshire</p><h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Injectables Designed To Help You Look Refreshed, Balanced, and Confident</h1><div class="gold-rule mt-6"><span></span></div><p class="hero-copy mt-6 max-w-3xl leading-8">Elite VitaMed offers Botox or neurotoxins, dermal fillers, Sculptra, Radiesse, PDO threads, facial balancing, and injectable consultations performed by a Nurse Practitioner and certified injector.</p><p class="hero-copy mt-4 max-w-3xl leading-7">Whether you want to soften fine lines, restore volume, support facial balance, or create a more refreshed appearance, your injectable treatment plan should be personalized to your goals, facial structure, treatment history, and comfort level.</p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Injectable Assessment</a></div><p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p></div></div></section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">What They Are</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Are Injectable Treatments?</h2><p class="mt-5 leading-8 text-ink/70">Injectable treatments are non surgical aesthetic treatments designed to address concerns such as fine lines, wrinkles, volume loss, facial structure, facial balance, collagen support, and signs of aging.</p><p class="mt-4 leading-8 text-ink/70">Different injectable treatments work in different ways. Some relax muscle movement, some support volume or contour, and others may support collagen stimulation or subtle lifting goals.</p></div><div><p class="eyebrow">Who They Help</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Who May Be A Good Fit For Injectables?</h2><div class="mt-5 flex flex-wrap gap-2">${["Fine lines or wrinkles","Forehead lines","Frown lines","Crow's feet","Volume loss","Thin lips","Cheek support","Chin or jawline definition","Under eye hollowing","Smile lines","Lower face heaviness","Facial imbalance","Collagen loss","A tired appearance"].map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-5 text-sm leading-7 text-ink/60">Final treatment recommendations are always determined after provider evaluation.</p></div></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Injectable Treatment Options</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Injectable Treatment Paths</h2><p class="mt-4 leading-8 text-ink/68">Each injectable option serves a different purpose. Your provider can help determine which option, or combination of options, may fit your goals.</p></div><div class="mt-10 grid gap-5 md:grid-cols-2">${paths.map(x=>`<article class="treatment-overview-card luxe-card flex flex-col p-5 sm:p-6"><div class="icon-badge mb-4">${icon(x[5])}</div><h3 class="font-serif text-3xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${x[1]}</p><div class="mt-5 flex flex-wrap gap-2">${x[2].map(y=>`<span class="treatment-best-chip">${y}</span>`).join("")}</div><div class="mt-auto pt-6"><a href="${x[4]}" class="btn btn-navy justify-center">${icon("arrow")} ${x[3]}</a></div></article>`).join("")}</div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Benefits</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Why Clients Choose Injectables</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">${benefits.map(x=>`<article class="luxe-card p-5"><div class="icon-badge mb-4">${icon("sparkle")}</div><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">Candidacy</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Who May Be An Ideal Candidate For Injectables?</h2><p class="mt-4 leading-8 text-ink/70">An ideal candidate wants a personalized, non surgical approach to aesthetic care and understands that the best treatment depends on individual goals, anatomy, history, and provider evaluation.</p><div class="mt-5 flex flex-wrap gap-2">${["Natural looking refinement","Softening lines or wrinkles","Restoring volume or structure","A balanced appearance","Provider led planning","Consultation and safety review"].map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-5 text-sm leading-7 text-ink/60">Final candidacy is always confirmed by the provider.</p></article><article><p class="eyebrow">Treatment Areas</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Common Injectable Treatment Areas</h2><p class="mt-4 leading-8 text-ink/70">Injectables may be discussed for several areas of the face, jawline, and neck. The right areas depend on your goals and provider evaluation.</p><div class="mt-5 flex flex-wrap gap-2">${["Forehead","Frown lines","Crow's feet","Brows","Lips","Cheeks","Chin","Jawline","Under eyes","Smile lines","Lower face","Neck bands","Masseter muscles","Full face balancing"].map(x=>`<span class="treatment-option-chip">${x}</span>`).join("")}</div></article></div></section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">What To Expect</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Happens During An Injectable Appointment?</h2><p class="mt-4 leading-8 text-ink/68">Downtime depends on the type of injectable treatment, the areas treated, and your individual response. Your provider will explain what to expect based on your plan.</p></div><div class="grid gap-4 sm:grid-cols-2">${steps.map((x,i)=>`<article class="rounded-2xl border border-navy/10 bg-ivory p-5"><p class="treatment-card-label">Step ${i+1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><article><p class="eyebrow">Treatment Comparison</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Which Injectable Option May Fit Your Goals?</h2><div class="mt-6 grid gap-3 sm:grid-cols-2">${paths.slice(0,6).map(x=>`<div class="rounded-xl border border-navy/10 bg-white p-4"><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></div>`).join("")}</div><a href="#assessment" class="btn btn-navy mt-6 justify-center">${icon("sparkle")} Start Injectable Assessment</a></article><article class="rounded-[1.5rem] border border-navy/10 bg-white p-6 sm:p-8"><p class="eyebrow">Results</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy">What Results Can You Expect From Injectables?</h2><p class="mt-4 leading-8 text-ink/70">Injectable results depend on the treatment used, areas treated, product choice, anatomy, treatment history, dosage, placement, and individual response.</p><p class="mt-4 text-sm leading-7 text-ink/64">Some treatments create visible changes sooner, while others develop gradually. The goal is to create a result that feels refreshed, balanced, and aligned with your natural features. Individual results vary.</p></article></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">Your Provider</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Injectable Care Performed By A Nurse Practitioner and Certified Injector</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed takes a provider led approach to injectable care. Your treatment is guided by facial anatomy, natural looking results, safety, and personalized planning.</p><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="#about" class="btn btn-navy justify-center">${icon("users")} Meet Tiana</a><a href="${bookingRouteForCurrentPage()}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("calendar")} Book A Consultation</a></div></article><article><p class="eyebrow">New Hampshire Concierge Injectable Care</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Mobile Injectables in New Hampshire</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed offers mobile injectable treatments in New Hampshire and surrounding areas. This concierge model allows clients to receive premium aesthetic care in a private, comfortable setting while still being treated by a qualified provider.</p></article></div></section>
    <section class="section-shell bg-white"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Safety</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Provider Review and Safety Come First</h2><p class="mt-5 leading-8 text-ink/70">Injectable treatments should always be performed by a qualified provider with appropriate training, product knowledge, and an understanding of facial anatomy. Before treatment, your provider will review your goals, treatment history, medical history, current concerns, and any factors that may affect candidacy.</p><p class="mt-5 rounded-2xl border border-champagne/25 bg-ivory p-5 text-sm leading-7 text-ink/65">This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your individual goals, anatomy, medical history, treatment history, and what is appropriate for you.</p></div></section>
    ${homeFinancing()}
    <section class="section-shell bg-mist"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Frequently Asked Questions</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Injectables Questions</h2></div><div class="mt-8 space-y-3">${faqs.map(x=>`<details class="faq-item"><summary><span>${x[0]}</span>${icon("arrow")}</summary><p>${x[1]}</p></details>`).join("")}</div></div></section>
    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Not Sure What You Need?</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Explore Injectable Treatments?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Book your appointment, start the Injectable Treatment Assessment, or request a phone consultation if you are not sure where to begin.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Injectable Assessment</a><a href="#contact" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

function regenerativeAestheticsPage() {
  const paths = [
    ["PRP", "PRP, or platelet rich plasma, uses a processed sample of your own blood to concentrate plasma components that may be used in certain aesthetic or wellness treatment plans.", ["Hair restoration goals", "Skin rejuvenation", "Collagen support", "A natural approach", "Long term planning"], "Explore PRP", "#prp-prf"],
    ["PRF", "PRF, or platelet rich fibrin, is another blood derived treatment option that may be discussed for gradual regenerative aesthetic support.", ["Skin quality support", "Under eye discussions", "Natural looking support", "Collagen support", "Comparing PRP and PRF"], "Explore PRF", "#prp-prf"],
    ["Hair Restoration", "Regenerative hair restoration treatments may be discussed for clients experiencing hair thinning or early hair density concerns.", ["Hair thinning", "Early density concerns", "Non surgical options", "Long term hair support", "Provider guidance"], "Explore Hair Restoration", "#hair-restoration"],
    ["Skin Rejuvenation", "Regenerative skin rejuvenation treatments may be used as part of a plan to support texture, tone, glow, and overall skin quality.", ["Dull skin", "Texture concerns", "Uneven tone", "Early aging concerns", "Gradual improvement"], "Explore Skin Rejuvenation", "#skin-tightening"],
    ["Collagen Stimulation Treatments", "Collagen stimulation treatments may be discussed for clients who want gradual support for skin firmness, texture, and long term aesthetic maintenance.", ["Collagen loss", "Skin quality", "Gradual rejuvenation", "Long term planning", "Subtle support"], "Explore Collagen Stimulation", "#collagen-stimulation"]
  ];
  const benefits = [
    ["Gradual, Natural Looking Support", "Regenerative treatments may be considered by clients who prefer a more gradual approach to aesthetic improvement."],
    ["Skin Quality Focus", "These treatments may support goals related to texture, tone, glow, and overall skin appearance."],
    ["Hair Restoration Support", "Regenerative options such as PRP may be discussed for clients interested in hair restoration support."],
    ["Long Term Planning", "Regenerative aesthetics can be part of a broader plan for ongoing skin, hair, and aesthetic maintenance."],
    ["Personalized Provider Guidance", "Your treatment plan is based on your goals, history, treatment area, and what is appropriate for you."]
  ];
  const steps = [
    ["Consultation and Goal Review", "Your provider will review your goals, concerns, treatment history, medical history, and what you are hoping to improve."],
    ["Treatment Area Evaluation", "Your provider will evaluate the treatment area, whether that is skin, scalp, under eyes, or another area of concern."],
    ["Personalized Treatment Plan", "You will receive guidance on which regenerative option may fit your goals and what expectations are realistic."],
    ["Treatment", "If appropriate, your regenerative treatment will be performed by a Nurse Practitioner and certified injector."],
    ["Aftercare and Follow Up", "You will receive aftercare instructions and follow up guidance based on the treatment performed."]
  ];
  const faqs = [
    ["What is regenerative aesthetics?", "Regenerative aesthetics is a category of treatments focused on supporting natural rejuvenation, skin quality, hair restoration goals, collagen support, and long term aesthetic planning."],
    ["What treatments are included under regenerative aesthetics?", "This category may include PRP, PRF, hair restoration, skin rejuvenation, and collagen stimulation treatments."],
    ["What is PRP?", "PRP stands for platelet rich plasma. It involves processing a sample of your own blood to concentrate platelet rich plasma that may be used in certain aesthetic or hair restoration treatment plans."],
    ["What is PRF?", "PRF stands for platelet rich fibrin. It is another blood derived treatment option that may be discussed for regenerative aesthetic support."],
    ["Can regenerative aesthetics help with hair thinning?", "PRP or PRF may be discussed for clients interested in hair restoration support. Whether it is appropriate depends on your hair loss pattern, health history, goals, and provider evaluation."],
    ["Can regenerative aesthetics help with skin rejuvenation?", "Regenerative treatments may be discussed for skin quality, texture, tone, collagen support, and overall rejuvenation goals."],
    ["How many treatments will I need?", "The number of treatments depends on the treatment selected, treatment area, goals, individual response, and provider recommendation."],
    ["Is there downtime?", "Downtime depends on the specific treatment and area. Temporary redness, swelling, tenderness, bruising, or irritation may occur."],
    ["Are regenerative results immediate?", "Some regenerative aesthetic results may develop gradually over time. Your provider will explain realistic expectations."],
    ["Who performs regenerative aesthetic treatments?", "Treatments are performed by a Nurse Practitioner and certified injector."],
    ["Am I a candidate for regenerative aesthetics?", "Candidacy depends on your goals, health history, treatment area, and what is appropriate for you."],
    ["Should I start with regenerative aesthetics or injectables?", "It depends on your goals. If you are unsure, start with the Full Treatment Assessment or request a phone consultation."]
  ];
  return `
    <section class="treatment-detail-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">${particles()}<div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24"><div class="reveal max-w-4xl"><p class="eyebrow">Regenerative Aesthetics in New Hampshire</p><h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Support Natural Rejuvenation With Provider Led Regenerative Aesthetics</h1><div class="gold-rule mt-6"><span></span></div><p class="hero-copy mt-6 max-w-3xl leading-8">Elite VitaMed offers regenerative aesthetic treatments designed to support skin quality, hair restoration goals, collagen support, and natural looking rejuvenation.</p><p class="hero-copy mt-4 max-w-3xl leading-7">Whether you are interested in PRP, PRF, hair restoration, skin rejuvenation, or collagen stimulation treatments, your care is guided by a Nurse Practitioner and certified injector.</p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a></div><p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p></div></div></section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">What It Is</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Is Regenerative Aesthetics?</h2><p class="mt-5 leading-8 text-ink/70">Regenerative aesthetics is a treatment category focused on supporting natural rejuvenation, skin quality, hair restoration goals, and collagen related concerns.</p><p class="mt-4 leading-8 text-ink/70">These treatments may be discussed for clients who want to improve skin appearance, support hair restoration goals, or explore gradual, natural looking improvement.</p></div><div><p class="eyebrow">Who It Helps</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Who May Be Interested In Regenerative Aesthetics?</h2><div class="mt-5 flex flex-wrap gap-2">${["Hair thinning","Skin quality","Dull skin","Texture concerns","Collagen loss","Early signs of aging","Skin rejuvenation","Long term maintenance","Natural looking improvement"].map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-5 text-sm leading-7 text-ink/60">Final candidacy is always determined by provider evaluation.</p></div></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Treatment Options</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Explore Regenerative Aesthetic Treatments</h2><p class="mt-4 leading-8 text-ink/68">Each regenerative option supports a different goal. Your provider can help determine which path may fit your skin, hair, and long term aesthetic plan.</p></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${paths.map(x=>`<article class="luxe-card flex flex-col p-6"><div class="icon-badge mb-4">${icon("sparkle")}</div><h3 class="font-serif text-3xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${x[1]}</p><div class="mt-5 flex flex-wrap gap-2">${x[2].map(y=>`<span class="treatment-best-chip">${y}</span>`).join("")}</div><div class="mt-auto pt-6"><a href="${x[4] || "#contact"}" class="btn btn-navy justify-center">${icon("arrow")} ${x[3]}</a></div></article>`).join("")}</div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Benefits</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Why Clients Consider Regenerative Aesthetics</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">${benefits.map(x=>`<article class="luxe-card p-5"><div class="icon-badge mb-4">${icon("sparkle")}</div><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">What To Expect</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Happens During A Regenerative Aesthetics Appointment?</h2><p class="mt-4 leading-8 text-ink/68">Downtime depends on the specific treatment, area, and your individual response. Temporary redness, swelling, tenderness, sensitivity, bruising, or mild irritation may occur.</p></div><div class="grid gap-4 sm:grid-cols-2">${steps.map((x,i)=>`<article class="rounded-2xl border border-navy/10 bg-ivory p-5"><p class="treatment-card-label">Step ${i+1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">Treatment Areas</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Common Regenerative Aesthetic Treatment Areas</h2><div class="mt-5 flex flex-wrap gap-2">${["Scalp and hairline","Under eyes","Face","Neck","Decollete","Texture concerns","Dull skin","Areas for collagen support"].map(x=>`<span class="treatment-option-chip">${x}</span>`).join("")}</div></article><article><p class="eyebrow">Results</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">What Results Can You Expect?</h2><p class="mt-4 leading-8 text-ink/70">Results depend on the treatment used, treatment area, number of sessions, individual response, health history, aftercare, and provider recommendation.</p><p class="mt-4 text-sm leading-7 text-ink/64">Some clients may need a series of treatments. Some results may appear gradually rather than immediately. Individual results vary.</p></article></div></section>
    <section class="section-shell bg-white"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Safety</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Provider Review and Medical Oversight Matter</h2><p class="mt-5 leading-8 text-ink/70">Regenerative aesthetics should be approached carefully and performed by a qualified provider. Before treatment, your provider reviews your goals, treatment history, medical history, current concerns, and factors that may affect candidacy.</p><p class="mt-4 leading-8 text-ink/70">Tell your provider if you are pregnant, breastfeeding, have a history of blood disorders, active infection, autoimmune concerns, medication concerns, or health issues that should be reviewed before treatment.</p><p class="mt-5 rounded-2xl border border-champagne/25 bg-ivory p-5 text-sm leading-7 text-ink/65">This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final treatment recommendations depend on your goals, medical history, treatment history, and what is appropriate for you. Individual results vary.</p></div></section>
    ${homeFinancing()}
    <section class="section-shell bg-mist"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Frequently Asked Questions</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Regenerative Aesthetics Questions</h2></div><div class="mt-8 space-y-3">${faqs.map(x=>`<details class="faq-item"><summary><span>${x[0]}</span>${icon("arrow")}</summary><p>${x[1]}</p></details>`).join("")}</div></div></section>
    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Not Sure What You Need?</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Explore Regenerative Aesthetics?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Book your appointment, start the Full Treatment Assessment, or request a phone consultation if you are not sure where to begin.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

function detailedTreatmentCategoryPage(category) {
  const assessmentLabel = category.assessmentLabel || "Start Injectable Assessment";
  const assessmentRoute = category.assessmentRoute || "#assessment";
  const bookingRoute = category.bookingRoute || bookingRouteForCurrentPage();
  const phoneLabel = category.phoneLabel || "Request A Phone Consultation";
  const phoneRoute = category.phoneRoute || "#contact";
  const treatmentPaths = category.paths || [[
    category.optionsTitle || category.title,
    category.optionsCopy || category.supportingCopy,
    category.focusItems || category.whoFor || [],
    category.primaryCta || "Request A Consultation",
    bookingRoute
  ]];
  const candidatesSection = category.candidates ? `
    <section class="section-shell bg-mist"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">Candidacy</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.candidatesTitle}</h2><p class="mt-4 leading-8 text-ink/68">${category.candidatesCopy}</p><p class="mt-4 text-sm leading-7 text-ink/60">Final candidacy is always confirmed by the provider.</p></div><div class="flex flex-wrap content-start gap-2">${category.candidates.map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>
  ` : "";
  const downtimeSection = category.downtimeTitle ? `
    <section class="section-shell bg-white"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Downtime</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.downtimeTitle}</h2><p class="mt-5 leading-8 text-ink/70">${category.downtime}</p></div></section>
  ` : "";
  const comparisonSection = category.comparisons ? `
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Treatment Comparison</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.comparisonTitle}</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${category.comparisons.map(x=>`<article class="luxe-card p-5"><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div><div class="mt-8 text-center"><p class="leading-7 text-ink/68">${category.comparisonCta}</p><a href="${assessmentRoute}" class="btn btn-navy mt-5 justify-center">${icon("sparkle")} ${assessmentLabel}</a></div></div></section>
  ` : "";
  const providerSection = category.providerTitle ? `
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">Your Provider</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.providerTitle}</h2><p class="mt-4 leading-8 text-ink/70">${category.providerCopy}</p><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="#about" class="btn btn-navy justify-center">${icon("users")} Meet Tiana</a><a href="${phoneRoute}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon(category.providerSecondaryIcon || "calendar")} ${category.providerSecondaryLabel || "Book A Consultation"}</a></div></article><article><p class="eyebrow">${category.localEyebrow}</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.localTitle}</h2><p class="mt-4 leading-8 text-ink/70">${category.localCopy}</p></article></div></section>
  ` : "";
  const relatedSection = category.related ? `
    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">${category.relatedEyebrow || "Related Treatments"}</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.relatedTitle || "Explore Related Treatment Options"}</h2></div><div class="mt-8 flex flex-wrap justify-center gap-3">${category.related.map(x=>`<a href="${x[1]}" class="rounded-full border border-navy/10 bg-mist px-5 py-3 text-sm font-bold text-navy transition hover:border-champagne hover:bg-ivory">${x[0]}</a>`).join("")}</div></div></section>
  ` : "";
  const consultationSection = category.consultationTitle ? `
    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">${category.consultationEyebrow}</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">${category.consultationTitle}</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">${category.consultationCopy}</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${assessmentRoute}" class="btn btn-gold justify-center">${icon("sparkle")} ${assessmentLabel}</a><a href="${bookingRoute}" class="btn btn-ghost justify-center">${icon("calendar")} ${category.primaryCta}</a><a href="${phoneRoute}" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} ${phoneLabel}</a></div></div></section>
  ` : "";
  return `
    <section class="treatment-detail-hero hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">${particles()}<div class="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-24"><div class="reveal max-w-4xl"><p class="eyebrow">${category.eyebrow}</p><h1 class="mt-4 text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">${category.title}</h1><div class="gold-rule mt-6"><span></span></div><p class="hero-copy mt-6 max-w-3xl leading-8">${category.subheadline}</p><p class="hero-copy mt-4 max-w-3xl leading-7">${category.supportingCopy}</p><div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRoute}" class="btn btn-gold justify-center">${icon("calendar")} ${category.primaryCta}</a><a href="${assessmentRoute}" class="btn btn-ghost justify-center">${icon("sparkle")} ${category.secondaryCta}</a></div><p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} ${category.trustLine}</p></div></div></section>
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">${category.introEyebrow}</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.introTitle}</h2>${category.introCopy.map(x=>`<p class="mt-4 leading-8 text-ink/70">${x}</p>`).join("")}</div><div><p class="eyebrow">Who It Helps</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.whoTitle}</h2><p class="mt-4 leading-8 text-ink/70">${category.whoCopy}</p><div class="mt-5 flex flex-wrap gap-2">${category.whoFor.map(x=>`<span class="treatment-best-chip">${x}</span>`).join("")}</div><p class="mt-5 text-sm leading-7 text-ink/60">${category.candidacyNote}</p></div></div></section>
    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Treatment Options</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.optionsTitle}</h2><p class="mt-4 leading-8 text-ink/68">${category.optionsCopy}</p></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">${treatmentPaths.map(x=>`<article id="${x[5] || `treatment-${slug(x[0])}`}" class="treatment-overview-card luxe-card flex scroll-mt-36 flex-col p-5 sm:p-6"><div class="icon-badge mb-4">${icon(category.icon)}</div><h3 class="font-serif text-3xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-7 text-ink/66">${x[1]}</p><div class="mt-5 flex flex-wrap gap-2">${(x[2] || []).map(y=>`<span class="treatment-best-chip">${y}</span>`).join("")}</div><div class="mt-auto pt-6"><a href="${x[4] || phoneRoute}" class="btn btn-navy justify-center">${icon("arrow")} ${x[3]}</a></div></article>`).join("")}</div></div></section>
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Benefits</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.benefitsTitle}</h2></div><div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">${category.benefits.map(x=>`<article class="luxe-card p-5"><div class="icon-badge mb-4">${icon(category.icon)}</div><h3 class="font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-3 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    ${category.mapSection || ""}
    ${category.treatmentAreaSection || ""}
    ${candidatesSection}
    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">What To Expect</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.expectTitle}</h2><p class="mt-4 leading-8 text-ink/68">${category.downtime}</p></div><div class="grid gap-4 sm:grid-cols-2">${category.steps.map((x,i)=>`<article class="rounded-2xl border border-navy/10 bg-ivory p-5"><p class="treatment-card-label">Step ${i+1}</p><h3 class="mt-2 font-serif text-2xl font-semibold text-navy">${x[0]}</h3><p class="mt-2 text-sm leading-6 text-ink/66">${x[1]}</p></article>`).join("")}</div></div></section>
    ${downtimeSection}
    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><article><p class="eyebrow">${category.focusEyebrow}</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.focusTitle}</h2><div class="mt-5 flex flex-wrap gap-2">${category.focusItems.map(x=>`<span class="treatment-option-chip">${x}</span>`).join("")}</div></article><article><p class="eyebrow">Results</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.resultsTitle}</h2><p class="mt-4 leading-8 text-ink/70">${category.resultsCopy}</p><p class="mt-4 text-sm leading-7 text-ink/64">Individual results vary. Final expectations and recommendations are reviewed with your provider.</p></article></div></section>
    ${comparisonSection}
    <section class="section-shell bg-white"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Safety</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.safetyTitle}</h2>${category.safetyCopy.map(x=>`<p class="mt-5 leading-8 text-ink/70">${x}</p>`).join("")}<p class="mt-5 rounded-2xl border border-champagne/25 bg-ivory p-5 text-sm leading-7 text-ink/65">${category.disclaimer}</p></div></section>
    ${providerSection}
    ${relatedSection}
    ${consultationSection}
    ${category.extraSection || ""}
    ${category.financingSection || homeFinancing()}
    <section class="section-shell bg-mist"><div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">Frequently Asked Questions</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${category.faqTitle}</h2></div><div class="mt-8 space-y-3">${category.faqs.map(x=>`<details class="faq-item"><summary><span>${x[0]}</span>${icon("arrow")}</summary><p>${x[1]}</p></details>`).join("")}</div></div></section>
    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">${category.finalTitle}</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">${category.finalCopy}</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${bookingRoute}" class="btn btn-gold justify-center">${icon("calendar")} ${category.primaryCta}</a><a href="${assessmentRoute}" class="btn btn-ghost justify-center">${icon("sparkle")} ${category.secondaryCta}</a><a href="${phoneRoute}" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} ${category.thirdCta}</a></div></div></section>
  `;
}

function prpPrfPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "PRP and PRF in New Hampshire",
    title: "Support Natural Skin, Hair, and Collagen Rejuvenation With PRP and PRF",
    subheadline: "PRP and PRF are regenerative aesthetic treatments that may help support skin quality, collagen response, under eye rejuvenation planning, and hair restoration goals.",
    supportingCopy: "Elite VitaMed offers provider led PRP and PRF treatments in New Hampshire, performed by a Nurse Practitioner and certified injector. These treatments use components from your own blood and may be discussed as part of a personalized plan for skin rejuvenation, hair restoration, collagen support, or natural looking aesthetic improvement.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Treatment Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    introEyebrow: "What They Are", introTitle: "What Are PRP and PRF?", introCopy: ["PRP stands for platelet rich plasma. PRF stands for platelet rich fibrin. Both are regenerative aesthetic treatments that use components from your own blood and may be discussed for skin quality, collagen support, under eye rejuvenation, and hair restoration planning.", "During treatment, a small blood draw is typically performed. The blood is processed, then the selected components may be applied to the skin, injected into targeted areas, or used with treatments such as microneedling when appropriate.", "PRP and PRF are not traditional fillers and are not designed to create instant volume correction. They may support gradual improvement in skin quality, tissue response, and collagen focused treatment planning."],
    whoTitle: "Who May Be Interested In PRP and PRF?", whoCopy: "PRP and PRF may be a strong fit for clients who want regenerative support for skin, under eyes, hair, or collagen focused rejuvenation.",
    whoFor: ["Dull or tired looking skin","Fine lines","Crepey texture","Uneven skin quality","Mild under eye concerns","Early hair thinning","Hair shedding","Reduced hair density","Acne scarring","Collagen support","Natural looking rejuvenation"],
    candidacyNote: "Final candidacy depends on provider evaluation, medical history, treatment area, and what is appropriate for you.",
    optionsTitle: "Common PRP and PRF Treatment Paths", optionsCopy: "Your provider will determine whether PRP, PRF, or a combination approach fits your goals and treatment area.",
    paths: [
      ["Skin Rejuvenation","PRP or PRF may be discussed for skin quality, texture, glow, and collagen focused planning.",["Skin quality","Texture","Glow","Fine lines"],"Book Your Appointment"],
      ["Under Eye Support","PRF may be discussed when the goal is under eye skin quality, natural tissue response, or a gradual approach.",["Under eyes","Crepey texture","Natural support","Provider evaluation"],"Request Consultation"],
      ["Hair Restoration","PRP or PRF may be discussed for early thinning, shedding, or density support in appropriate candidates.",["Hair thinning","Scalp support","Density goals","Series planning"],"Explore Hair Restoration","#hair-restoration"],
      ["Microneedling Support","PRP or PRF may be paired with microneedling when appropriate for texture and collagen goals.",["Texture","Collagen support","Acne scarring","Skin renewal"],"Explore Microneedling","#microneedling-stem-cells"]
    ],
    benefitsTitle: "Main Benefits Of PRP and PRF", benefits: [["Skin Quality Support","May support texture, glow, and a refreshed appearance over time."],["Collagen Focused Planning","Often discussed for clients interested in gradual collagen support."],["Hair Restoration Support","May be considered for early thinning or shedding concerns in appropriate candidates."],["Natural Looking Approach","Uses components from your own blood as part of a provider guided plan."],["Combination Friendly","May be paired with microneedling, under eye planning, or other treatments when appropriate."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates usually have realistic expectations and understand that PRP and PRF results are typically gradual.",
    candidates: ["Mild skin quality concerns","Fine lines or texture changes","Dull or tired looking skin","Under eye skin quality concerns","Hair thinning concerns","Interest in collagen support","Good overall health","Realistic expectations","No contraindications that would make treatment inappropriate"],
    expectTitle: "What Happens During A PRP or PRF Appointment?", downtimeTitle: "Is There Downtime With PRP or PRF?",
    downtime: "Downtime varies by treatment area and method. Temporary redness, swelling, tenderness, bruising, sensitivity, or mild irritation may occur. Your provider will explain what to expect and how to care for the area.",
    steps: [["Consultation and Evaluation","Your provider reviews your goals, skin or hair concerns, medical history, medications, and candidacy."],["Blood Draw and Processing","A small blood draw is performed and processed according to the treatment plan."],["Treatment Planning","Your provider confirms whether PRP, PRF, microneedling support, injection, or another approach is appropriate."],["Treatment","The selected treatment is performed with attention to comfort, safety, and realistic expectations."],["Aftercare","You receive instructions on what to avoid, what to expect, and when to follow up."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Common PRP and PRF Focus Areas", focusItems: ["Face","Under eyes","Scalp","Hairline","Texture concerns","Fine lines","Acne scarring support","Collagen support","Skin quality"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results are typically gradual and vary by client. Some clients may need a series, maintenance, or combination plan depending on goals, treatment area, and provider recommendation.",
    comparisonTitle: "PRP, PRF, Filler, or Microneedling?", comparisons: [["PRP","Often discussed for skin quality, hair restoration planning, and combination treatments."],["PRF","Often discussed for gradual tissue support, under eye planning, and regenerative aesthetic support."],["Dermal Filler","Used differently and may be discussed when the goal is volume, contour, or structure."],["Microneedling","May be paired with PRP or PRF when texture, skin quality, and collagen support are priorities."],["Consultation First","Best when you are unsure whether the concern is skin quality, volume, hair related, or another factor."]],
    comparisonCta: "Not sure whether PRP, PRF, filler, or microneedling fits your goals? Start with the Treatment Assessment or request a consultation.",
    safetyTitle: "Provider Review and Safety Come First", safetyCopy: ["PRP and PRF require appropriate screening, sterile technique, and provider oversight. Your provider reviews health history, medications, treatment goals, and factors that may affect candidacy.", "Tell your provider if you are pregnant, breastfeeding, have active infection, blood related concerns, autoimmune concerns, medication concerns, poor healing, recent procedures, or health issues that should be reviewed."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your goals, medical history, treatment area, candidacy, and what is appropriate for you. Individual results vary.",
    providerTitle: "PRP and PRF Guided By A Nurse Practitioner and Certified Injector", providerCopy: "Elite VitaMed takes a provider led approach to regenerative aesthetic care. Your treatment is guided by clinical screening, realistic expectations, and personalized planning.",
    localEyebrow: "New Hampshire Regenerative Aesthetics", localTitle: "PRP and PRF in New Hampshire", localCopy: "Elite VitaMed offers PRP and PRF consultations and treatments in New Hampshire with mobile or concierge care options depending on availability and service area.",
    relatedEyebrow: "Related Regenerative Options", relatedTitle: "Explore Related Treatment Paths", related: [["Regenerative Aesthetics","#regenerative-aesthetics"],["Hair Restoration","#hair-restoration"],["Collagen Stimulation","#collagen-stimulation"],["Microneedling with Stem Cells","#microneedling-stem-cells"],["Under Eye Rejuvenation","#under-eye-rejuvenation"],["Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure Where To Start?", consultationTitle: "Start With Provider Guided Treatment Planning", consultationCopy: "If you are unsure whether PRP, PRF, hair restoration, microneedling, filler, or another treatment fits your goals, start with the Treatment Assessment or request a consultation.",
    faqTitle: "PRP and PRF Questions", faqs: [["What is PRP?","PRP stands for platelet rich plasma and uses components from your own blood as part of a regenerative treatment plan."],["What is PRF?","PRF stands for platelet rich fibrin and may be discussed for gradual regenerative aesthetic support."],["Are PRP and PRF fillers?","No. They are not traditional fillers and are not designed for instant volume correction."],["Can PRP or PRF help hair thinning?","They may be discussed for hair restoration support in appropriate candidates."],["Is there downtime?","Temporary redness, swelling, tenderness, bruising, or sensitivity may occur depending on the treatment."],["Who performs treatment?","Care is performed by a Nurse Practitioner and certified injector."]],
    finalTitle: "Ready To Explore PRP and PRF?", finalCopy: "Book your appointment, start the Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function hairRestorationPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Hair Restoration in New Hampshire", title: "Support Thinning Hair With Provider Led Regenerative Hair Restoration",
    subheadline: "Hair restoration treatments may help support scalp health, hair density goals, and regenerative treatment planning for clients experiencing thinning, shedding, or early hair changes.",
    supportingCopy: "Elite VitaMed offers provider led hair restoration treatments in New Hampshire, performed by a Nurse Practitioner and certified injector. Your plan may include PRP, PRF, regenerative scalp support, or combination planning depending on your hair concerns, health history, goals, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Treatment Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    introEyebrow: "What It Is", introTitle: "What Is Hair Restoration?", introCopy: ["Hair restoration at Elite VitaMed is a regenerative treatment approach for clients noticing thinning hair, shedding, reduced density, or early hair changes.", "Depending on goals and candidacy, regenerative options such as PRP or PRF may be discussed as part of a hair restoration plan.", "Hair thinning can be influenced by genetics, hormones, stress, nutrition, medications, medical conditions, postpartum changes, aging, and scalp health. Your provider will review your history and may recommend additional evaluation when appropriate."],
    whoTitle: "Who May Be Interested In Hair Restoration?", whoCopy: "Hair restoration may be a strong fit for clients noticing early thinning, shedding, or reduced density who want a provider led, non surgical treatment option.",
    whoFor: ["Thinning hair","Increased shedding","Wider part line","Reduced hair density","Early hairline changes","Crown thinning","Postpartum hair changes when appropriate","Age related hair changes","Interest in PRP or PRF","Non surgical hair support"],
    candidacyNote: "Hair restoration may not be appropriate for every type of hair loss. Provider evaluation determines the next step.",
    optionsTitle: "Hair Restoration Treatment Paths", optionsCopy: "Your provider will determine whether regenerative treatment, further evaluation, or another care path is appropriate.",
    paths: [["PRP or PRF Scalp Support","Regenerative options may be discussed for early thinning, shedding, or scalp support in appropriate candidates.",["PRP","PRF","Scalp support","Density goals"],"Explore PRP and PRF","#prp-prf"],["Combination Planning","Hair restoration may be paired with medical review, lifestyle support, or additional care when appropriate.",["History review","Possible labs","Maintenance planning","Provider guidance"],"Request Consultation"],["Long Term Hair Maintenance","A plan may include a series, maintenance, and follow up based on response.",["Series planning","Maintenance","Realistic expectations","Follow up"],"Book Your Appointment"]],
    benefitsTitle: "Main Benefits Of Hair Restoration Planning", benefits: [["Scalp Support","May support a healthier looking hair and scalp environment."],["Density Goals","May be discussed for early density changes in appropriate candidates."],["Non Surgical Option","Offers a provider guided non surgical pathway for select clients."],["Personalized Evaluation","Your history, pattern, and timeline matter."],["Long Term Planning","Hair support often requires consistency, maintenance, and realistic expectations."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates usually have early thinning or shedding concerns and realistic expectations about gradual results.",
    candidates: ["Early hair thinning","Mild to moderate density changes","Wider part line","Crown thinning","Hair shedding concerns","Interest in PRP or PRF","Good overall health","Realistic expectations","No contraindications that would make treatment inappropriate"],
    expectTitle: "What Happens During A Hair Restoration Appointment?", downtimeTitle: "Is There Downtime With Hair Restoration?",
    downtime: "Temporary scalp tenderness, redness, swelling, sensitivity, pinpoint bleeding, or bruising may occur. Your provider will explain aftercare and what to watch for.",
    steps: [["Consultation and Scalp Evaluation","Your provider reviews your hair concerns, timeline, medical history, medications, family history, prior treatments, and scalp condition."],["Candidacy Review","Your provider determines whether PRP, PRF, further medical evaluation, or another path may be appropriate."],["Treatment Planning","Your provider explains the recommended approach, series expectations, maintenance, and realistic outcomes."],["Treatment","If appropriate, regenerative scalp treatment is performed according to the plan."],["Follow Up","Your provider discusses aftercare, response tracking, and maintenance planning."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Hair Restoration Focus Areas", focusItems: ["Scalp","Hairline","Part line","Crown","Density support","Shedding concerns","Early thinning","Maintenance planning"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Hair restoration results are gradual and vary by client. Outcomes depend on the cause of hair changes, consistency, genetics, health history, scalp condition, and provider evaluation.",
    comparisonTitle: "Hair Restoration, PRP, PRF, or Specialist Care?", comparisons: [["PRP or PRF","May be discussed for regenerative scalp support in appropriate candidates."],["Medical Evaluation","May be recommended when hair loss could be related to hormones, nutrition, medication, illness, or another health factor."],["Surgical Hair Restoration","May be more appropriate for advanced hair loss or goals outside regenerative care."],["Maintenance Planning","Best for clients who understand hair support is usually gradual and ongoing."]],
    comparisonCta: "Not sure what is causing your hair change? Start with a consultation so your provider can guide the next step.",
    safetyTitle: "Provider Review and Medical Screening Matter", safetyCopy: ["Hair loss has many possible causes. Your provider reviews your history, medications, scalp health, and timeline before recommending treatment.", "Tell your provider if you are pregnant, breastfeeding, have active infection, scalp disease, blood related concerns, autoimmune conditions, medication concerns, recent surgery, or health issues that should be reviewed."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, dermatology evaluation, consultation, or provider evaluation. Final recommendations depend on your goals, health history, scalp condition, hair loss pattern, and what is appropriate for you.",
    providerTitle: "Hair Restoration Guided By A Nurse Practitioner and Certified Injector", providerCopy: "Elite VitaMed takes a provider led approach to regenerative hair restoration planning with careful screening, realistic expectations, and personalized follow up.",
    localEyebrow: "New Hampshire Hair Restoration", localTitle: "Hair Restoration in New Hampshire", localCopy: "Elite VitaMed offers provider led regenerative hair restoration consultations in New Hampshire, with mobile or concierge care options depending on availability and service area.",
    relatedEyebrow: "Related Regenerative Options", relatedTitle: "Explore Related Hair and Skin Support", related: [["PRP and PRF","#prp-prf"],["Regenerative Aesthetics","#regenerative-aesthetics"],["Collagen Stimulation","#collagen-stimulation"],["Treatment Assessment","#assessment"],["Phone Consultation","#contact"]],
    consultationEyebrow: "Not Sure If You Are A Candidate?", consultationTitle: "Start With A Provider Led Hair Consultation", consultationCopy: "A consultation helps determine whether regenerative hair restoration, further medical evaluation, or another care path makes sense for your hair concerns.",
    faqTitle: "Hair Restoration Questions", faqs: [["What causes hair thinning?","Hair thinning can be related to genetics, hormones, stress, nutrition, medications, medical conditions, postpartum changes, aging, or scalp health."],["Does hair restoration work for everyone?","No. Candidacy and response vary, and some clients may need medical or specialist evaluation."],["Is treatment immediate?","Hair restoration is gradual and may require a series and maintenance."],["Can PRP or PRF be used for hair?","PRP or PRF may be discussed for regenerative scalp support in appropriate candidates."],["Is there downtime?","Temporary scalp tenderness, redness, swelling, or bruising may occur."],["Who performs the treatment?","Care is guided by a Nurse Practitioner and certified injector."]],
    finalTitle: "Ready To Discuss Hair Restoration?", finalCopy: "Book your appointment, start the Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function collagenStimulationPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Collagen Stimulation Treatments in New Hampshire", title: "Support Firmer, Smoother, More Refreshed Looking Skin Over Time",
    subheadline: "Collagen stimulation treatments may help support skin quality, firmness, texture, and natural looking rejuvenation by encouraging gradual improvement over time.",
    supportingCopy: "Elite VitaMed offers provider led collagen stimulation treatments in New Hampshire. Your plan may include regenerative aesthetics, PRP, PRF, Sculptra, Radiesse, microneedling, or skin focused options depending on your goals, skin quality, anatomy, medical history, and what is appropriate for you.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Treatment Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    introEyebrow: "What They Are", introTitle: "What Are Collagen Stimulation Treatments?", introCopy: ["Collagen stimulation treatments are aesthetic options designed to support gradual improvement in skin quality, firmness, texture, and rejuvenation planning.", "This may include regenerative options, injectable biostimulators, microneedling, or skin focused treatments depending on your goals and candidacy.", "These treatments are typically not instant-fix treatments. They are often used for clients who want natural looking improvement over time."],
    whoTitle: "Who May Be Interested In Collagen Stimulation?", whoCopy: "This category may be a good fit for clients who want gradual support for skin quality, firmness, and long term aesthetic planning.",
    whoFor: ["Fine lines","Mild skin laxity","Texture changes","Loss of firmness","Skin quality support","Long term maintenance","Natural looking improvement","Collagen support","Early aging concerns"],
    candidacyNote: "Final recommendations are based on provider evaluation, anatomy, health history, and treatment goals.",
    optionsTitle: "Collagen Stimulation Treatment Paths", optionsCopy: "Your provider will recommend the option that best fits your goals, treatment area, timeline, and candidacy.",
    paths: [["Sculptra","May be discussed for gradual collagen support and natural looking facial rejuvenation over time.",["Gradual collagen support","Facial rejuvenation","Long term planning"],"Explore Sculptra","#sculptra"],["Radiesse","May be discussed for structure, contour, and collagen stimulating support in appropriate areas.",["Structure","Contour","Collagen support"],"Explore Radiesse","#radiesse-fillers"],["PRP and PRF","May be discussed for regenerative skin quality and collagen focused planning.",["Skin quality","Regenerative support","Natural approach"],"Explore PRP and PRF","#prp-prf"],["Microneedling with Stem Cells","May be discussed for texture, fine lines, acne scarring support, and collagen response.",["Texture","Fine lines","Acne scarring support"],"Explore Microneedling","#microneedling-stem-cells"]],
    benefitsTitle: "Why Clients Consider Collagen Stimulation", benefits: [["Gradual Support","Designed for improvement that develops over time."],["Skin Quality Focus","May support texture, firmness, and overall skin appearance."],["Natural Looking Planning","Often selected by clients who do not want an overfilled look."],["Combination Friendly","Can be part of a larger injectable or skin plan when appropriate."],["Long Term Maintenance","May support ongoing aesthetic planning."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates want gradual improvement, understand results vary, and are open to provider guided planning.",
    candidates: ["Mild to moderate skin quality concerns","Collagen support goals","Texture changes","Fine lines","Loss of firmness","Realistic expectations","Interest in natural looking improvement","No contraindications that make treatment inappropriate"],
    expectTitle: "What Happens During Collagen Stimulation Treatment?", downtimeTitle: "Is There Downtime?",
    downtime: "Downtime depends on the treatment selected. Temporary redness, swelling, tenderness, bruising, sensitivity, or irritation may occur. Your provider will explain aftercare based on the specific plan.",
    steps: [["Consultation","Your provider reviews your goals, skin quality, anatomy, medical history, and treatment history."],["Treatment Selection","Your provider explains which collagen focused option may fit your goals."],["Treatment Plan","You review timing, expected progression, aftercare, and whether a series is recommended."],["Treatment","The selected treatment is performed with provider oversight."],["Follow Up","Your provider discusses expected timing, maintenance, and next steps."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Collagen Support Goals", focusItems: ["Skin quality","Firmness","Texture","Fine lines","Facial rejuvenation","Acne scarring support","Long term maintenance","Natural looking improvement"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Collagen focused results are often gradual and vary by treatment, treatment area, number of sessions, individual response, and provider recommendation.",
    comparisonTitle: "Sculptra, Radiesse, PRP, PRF, or Microneedling?", comparisons: [["Sculptra","Often discussed for gradual collagen support and facial rejuvenation planning."],["Radiesse","May be discussed for structure, contour, and collagen stimulating support."],["PRP or PRF","May be discussed for regenerative support using components from your own blood."],["Microneedling","May be discussed for texture, fine lines, acne scarring support, and skin renewal."],["Consultation","Best when you are comparing options and want a provider recommendation."]],
    comparisonCta: "Start with a consultation or Treatment Assessment if you are not sure which collagen focused treatment fits your goals.",
    safetyTitle: "Provider Review and Safety Come First", safetyCopy: ["Collagen stimulation treatments should be selected carefully based on your anatomy, skin quality, goals, medical history, and treatment area.", "Tell your provider about pregnancy, breastfeeding, active infection, autoimmune concerns, poor healing, allergies, medications, recent procedures, implanted devices, or other health factors that may affect candidacy."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your goals, anatomy, skin quality, health history, treatment area, and what is appropriate for you. Individual results vary.",
    providerTitle: "Collagen Stimulation Guided By A Nurse Practitioner and Certified Injector", providerCopy: "Elite VitaMed uses provider led planning to choose collagen focused treatments carefully and set realistic expectations.",
    localEyebrow: "New Hampshire Collagen Support", localTitle: "Collagen Stimulation Treatments in New Hampshire", localCopy: "Elite VitaMed offers collagen stimulation treatment planning in New Hampshire with mobile or concierge care options depending on availability and service area.",
    relatedEyebrow: "Related Treatments", relatedTitle: "Explore Related Collagen and Skin Options", related: [["Regenerative Aesthetics","#regenerative-aesthetics"],["PRP and PRF","#prp-prf"],["Sculptra","#sculptra"],["Radiesse","#radiesse-fillers"],["Microneedling with Stem Cells","#microneedling-stem-cells"],["Skin and Tightening","#skin-tightening"]],
    consultationEyebrow: "Not Sure Which Option Fits?", consultationTitle: "Start With Provider Guided Planning", consultationCopy: "A consultation helps determine whether Sculptra, Radiesse, PRP, PRF, microneedling, or another option fits your goals.",
    faqTitle: "Collagen Stimulation Questions", faqs: [["What are collagen stimulation treatments?","They are treatments that may support gradual improvement in skin quality, firmness, texture, or rejuvenation planning."],["Are results immediate?","Many collagen focused results develop gradually and vary by treatment."],["Which treatment is best?","The best option depends on your goals, anatomy, skin quality, history, and provider evaluation."],["Can treatments be combined?","In some cases, yes. Your provider will determine whether combination planning is appropriate."],["Is there downtime?","Downtime depends on the treatment selected and your individual response."],["Who performs treatment?","Care is guided by a Nurse Practitioner and certified injector."]],
    finalTitle: "Ready To Explore Collagen Stimulation?", finalCopy: "Book your appointment, start the Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function focusedSkinPage(config) {
  return detailedTreatmentCategoryPage({
    primaryCta: "Book Your Appointment", secondaryCta: "Start Treatment Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    assessmentRoute: "#assessment", bookingRoute: bookingRouteForCurrentPage(), phoneRoute: "#contact",
    candidacyNote: "Final candidacy is always determined by provider evaluation.",
    safetyTitle: "Provider Review and Safety Come First",
    safetyCopy: ["Skin treatments should be selected with proper provider evaluation, realistic expectations, and careful aftercare planning.", "Tell your provider if you are pregnant, breastfeeding, have active infection, open wounds, recent procedures, poor healing, implanted devices, skin conditions, medication concerns, recent sun exposure, allergies, or health issues that should be reviewed."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your goals, skin quality, anatomy, medical history, treatment history, and what is appropriate for you. Individual results vary.",
    providerTitle: `${config.name} Guided By A Nurse Practitioner and Certified Injector`,
    providerCopy: `Elite VitaMed takes a provider led approach to ${config.name} treatment planning with careful screening, realistic expectations, and personalized aftercare.`,
    localEyebrow: "New Hampshire Skin and Tightening", localTitle: `${config.name} in New Hampshire`,
    localCopy: `Elite VitaMed offers ${config.name} in New Hampshire as part of provider led aesthetic and skin treatment planning.`,
    relatedEyebrow: "Related Skin Treatments", relatedTitle: "Explore Related Skin and Tightening Options",
    related: [["Skin and Tightening","#skin-tightening"],["Breeze","#breeze"],["WonderTouch","#wondertouch"],["Ultimate Glow & Lift","#ultimate-glow-lift"],["Facial Contouring","#facial-contouring"],["Microneedling with Stem Cells","#microneedling-stem-cells"],["Chemical Peels","#chemical-peels"],["Treatment Assessment","#assessment"]].filter(([label]) => label !== config.name),
    comparisonTitle: `${config.name} Compared To Similar Treatments`,
    comparisons: [
      [config.name, `Best for clients whose goals match ${config.name} after provider evaluation and safety screening.`],
      ["Skin and Tightening", "Best as the parent category when you are comparing multiple skin refresh, firmness, texture, glow, and non surgical contouring options."],
      ["Regenerative Aesthetics", "May be a better fit when the primary goal is PRP, PRF, hair restoration, collagen support, or biologic skin rejuvenation planning."],
      ["Injectables", "May be a better fit when the primary goal involves facial volume, expression lines, contouring, or facial balancing with injectable treatments."]
    ],
    comparisonCta: "Not sure which option fits your goals? Start with the Treatment Assessment or request a phone consultation.",
    consultationEyebrow: "Not Sure Which Treatment Fits?", consultationTitle: "Start With Provider Guided Skin Planning", consultationCopy: "If you are unsure which skin or tightening treatment fits your goals, start with the Treatment Assessment or request a phone consultation.",
    finalTitle: `Ready To Explore ${config.name}?`, finalCopy: "Book your appointment, start the Treatment Assessment, or request a phone consultation if you are not sure where to begin.",
    ...config
  });
}

function breezePage() {
  return focusedSkinPage({
    name: "Breeze", eyebrow: "Breeze Treatment in New Hampshire", title: "Refresh Dull, Tired Looking Skin With Breeze",
    subheadline: "Breeze is a skin focused treatment that may help support a smoother, brighter, more refreshed looking complexion.",
    supportingCopy: "Elite VitaMed offers provider led Breeze treatments in New Hampshire as part of the Skin and Tightening category. Your plan is customized around your skin quality, goals, treatment history, medical history, and what is appropriate for you.",
    introEyebrow: "What It Is", introTitle: "What Is Breeze?", introCopy: ["Breeze is a skin focused treatment path that may be discussed for clients who want a smoother, fresher, more revitalized appearance.", "Depending on provider evaluation and treatment goals, Breeze may be considered for skin quality, glow, texture, and refresh planning."],
    whoTitle: "Who May Be Interested In Breeze?", whoCopy: "Breeze may be considered for clients who want a cleaner, smoother, more polished skin refresh.",
    whoFor: ["Dull skin","Texture concerns","Tired looking complexion","Skin refresh planning","Pre event skin support when appropriate","A cleaner, polished appearance"],
    optionsTitle: "Breeze Treatment Planning", optionsCopy: "Your provider will determine whether Breeze fits your skin, goals, sensitivity, and timeline.",
    paths: [["Breeze Skin Refresh","A skin focused option for glow, texture, and refresh planning.",["Glow","Texture","Skin quality","Refresh"],"Book Breeze"],["Combination Planning","May be paired with other skin or tightening treatments when appropriate.",["Skin planning","Glow and lift goals","Provider guidance"],"Explore Ultimate Glow & Lift","#ultimate-glow-lift"]],
    benefitsTitle: "Main Benefits Of Breeze", benefits: [["Glow Support","May support a brighter, more refreshed looking complexion."],["Texture Support","May be discussed for roughness or uneven texture."],["Pre Event Planning","May be considered before an event when appropriate."],["Provider Guided","Selected based on skin quality, sensitivity, and goals."],["Combination Friendly","May fit into a broader skin and tightening plan."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates want a skin refresh and have goals that fit Breeze after provider evaluation.",
    candidates: ["Dull skin","Texture concerns","Skin refresh goals","Realistic expectations","No contraindications that make treatment inappropriate"],
    expectTitle: "What Happens During A Breeze Treatment?", downtimeTitle: "Is There Downtime With Breeze?",
    downtime: "Downtime depends on your skin response. Temporary redness, sensitivity, dryness, irritation, or mild flaking may occur depending on treatment intensity and product selection.",
    steps: [["Skin Review","Your provider reviews your skin, goals, history, and sensitivities."],["Treatment Plan","Your provider explains whether Breeze is appropriate and what to expect."],["Treatment","The treatment is performed according to the selected plan."],["Aftercare","You receive guidance on skincare, sun protection, and what to avoid."],["Follow Up","Your provider may recommend maintenance or combination planning."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Breeze Goals", focusItems: ["Dull skin","Texture","Glow","Skin refresh","Pre event planning","Skin quality"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Clients may notice a fresher, smoother, or more polished looking complexion, but results vary based on skin condition, treatment plan, and aftercare.",
    faqTitle: "Breeze Questions", faqs: [["What is Breeze?","Breeze is a skin focused treatment path that may support glow, texture, and refreshed looking skin."],["Who is Breeze for?","It may be considered for clients with dullness, texture concerns, or skin refresh goals."],["Is there downtime?","Temporary redness, sensitivity, dryness, irritation, or flaking may occur."],["Can Breeze be combined?","In some cases, yes. Your provider can determine whether combination planning is appropriate."],["Who performs Breeze?","Care is guided by a Nurse Practitioner and certified injector."]]
  });
}

function wondertouchPage() {
  return focusedSkinPage({
    name: "WonderTouch", eyebrow: "WonderTouch in New Hampshire", title: "Support Firmer Looking Skin and More Refined Contours With WonderTouch",
    subheadline: "WonderTouch is a non surgical radiofrequency treatment that may help support skin firmness, texture, tone, and contouring goals in appropriate candidates.",
    supportingCopy: "Elite VitaMed offers provider led WonderTouch treatments in New Hampshire as part of the Skin and Tightening category. Your treatment plan is customized around your skin quality, treatment area, goals, medical history, and what is appropriate for you.",
    introEyebrow: "What It Is", introTitle: "What Is WonderTouch?", introCopy: ["WonderTouch may be discussed for clients interested in skin and tightening support, contouring, and non surgical aesthetic treatment planning.", "Depending on your anatomy, goals, and provider evaluation, WonderTouch may be considered for tone, definition, firmness, or a more sculpted appearance."],
    whoTitle: "Who May Be Interested In WonderTouch?", whoCopy: "WonderTouch may be considered for clients who want non surgical support for firmness, tone, contour, or mild laxity concerns.",
    whoFor: ["Mild laxity","Tone and contour support","Facial or body treatment planning","Non surgical aesthetic support","A more refined appearance","Firmness goals"],
    optionsTitle: "WonderTouch Treatment Planning", optionsCopy: "Your provider will determine whether WonderTouch fits your anatomy, goals, treatment area, and medical history.",
    paths: [["WonderTouch Firmness Support","A radiofrequency based option for firmness, texture, tone, and contouring goals.",["Firmness","Texture","Tone","Contour"],"Book WonderTouch"],["Glow and Lift Combination","May be combined with Breeze when both refresh and tightening support are goals.",["Glow","Firmness","Combination planning"],"Explore Ultimate Glow & Lift","#ultimate-glow-lift"]],
    benefitsTitle: "Main Benefits Of WonderTouch", benefits: [["Firmness Support","May support firmer looking skin in appropriate candidates."],["Contour Planning","May be discussed for tone, definition, or a more refined appearance."],["Non Surgical Option","Offers a non surgical pathway for select skin and contour goals."],["Personalized Areas","Treatment planning depends on anatomy and area."],["Combination Friendly","May be paired with other skin treatments when appropriate."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates have realistic expectations and goals that fit non surgical radiofrequency treatment planning.",
    candidates: ["Mild laxity concerns","Firmness goals","Texture or tone concerns","Facial contouring goals","Realistic expectations","No contraindications such as certain implanted devices or health factors"],
    expectTitle: "What Happens During WonderTouch?", downtimeTitle: "Is There Downtime With WonderTouch?",
    downtime: "Downtime varies by treatment area and settings. Temporary redness, warmth, tenderness, swelling, or sensitivity may occur. Your provider will explain restrictions and aftercare.",
    steps: [["Consultation","Your provider reviews goals, anatomy, health history, and contraindications."],["Area Evaluation","Treatment areas and expectations are reviewed."],["Treatment Planning","Your provider explains settings, timing, and aftercare."],["Treatment","WonderTouch is performed according to your treatment plan."],["Aftercare","You receive guidance on what to expect and when to follow up."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common WonderTouch Goals", focusItems: ["Firmness","Mild laxity","Texture","Tone","Facial contouring","Neck or lower face support","Non surgical rejuvenation"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results vary and may develop gradually depending on treatment area, skin quality, number of sessions, and individual response.",
    faqTitle: "WonderTouch Questions", faqs: [["What is WonderTouch?","WonderTouch is a radiofrequency based skin and tightening option."],["Who is WonderTouch for?","It may be considered for firmness, texture, tone, and contouring goals in appropriate candidates."],["Is it surgical?","No. It is a non surgical treatment option."],["Is there downtime?","Temporary redness, warmth, tenderness, swelling, or sensitivity may occur."],["Can WonderTouch be combined with Breeze?","Yes, when appropriate. The combination is positioned as Ultimate Glow & Lift."]]
  });
}

function ultimateGlowLiftPage() {
  return focusedSkinPage({
    name: "Ultimate Glow & Lift", eyebrow: "Ultimate Glow & Lift in New Hampshire", title: "Refresh Your Glow and Support Firmer Looking Skin in 1 Treatment Plan",
    subheadline: "Ultimate Glow & Lift combines Breeze and WonderTouch to support smoother looking skin, improved glow, firmness, tone, and contouring goals in appropriate candidates.",
    supportingCopy: "Elite VitaMed offers provider led Ultimate Glow & Lift treatments in New Hampshire as part of the Skin and Tightening category. This combination approach is customized around your skin quality, treatment goals, anatomy, medical history, and what is appropriate for you.",
    introEyebrow: "What It Is", introTitle: "What Is Ultimate Glow & Lift?", introCopy: ["Ultimate Glow & Lift combines Breeze and WonderTouch into a more complete skin and tightening treatment direction.", "It may be discussed for clients who want both skin refresh support and tightening or contouring support in one treatment plan."],
    whoTitle: "Who May Be Interested In Ultimate Glow & Lift?", whoCopy: "This option may be considered for clients who want a combination approach for glow, texture, firmness, and a refreshed appearance.",
    whoFor: ["Dull skin","Texture changes","Mild firmness concerns","Loss of glow","Skin quality support","Facial contouring support","Combination treatment planning"],
    optionsTitle: "Combination Treatment Planning", optionsCopy: "Your provider will explain how Breeze and WonderTouch work together and whether the combination fits your goals.",
    paths: [["Breeze Component","Supports glow, texture, and skin refresh goals.",["Glow","Texture","Skin refresh"],"Explore Breeze","#breeze"],["WonderTouch Component","Supports firmness, tone, and contouring goals.",["Firmness","Tone","Contour"],"Explore WonderTouch","#wondertouch"],["Combination Plan","Designed for clients who want both refresh and lift support when appropriate.",["Glow","Lift","Firmness","Texture"],"Book Ultimate Glow & Lift"]],
    benefitsTitle: "Main Benefits Of Ultimate Glow & Lift", benefits: [["Two-Part Planning","Combines skin refresh and tightening support."],["Glow Support","May support a brighter, more polished complexion."],["Firmness Goals","May support firmer looking skin in appropriate candidates."],["Efficient Path","A more complete direction for clients with multiple skin goals."],["Provider Guided","Customized to skin quality, anatomy, and candidacy."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates want a combined skin refresh and tightening direction and are appropriate candidates for both treatment components.",
    candidates: ["Dull skin","Texture changes","Mild firmness concerns","Glow goals","Combination planning goals","Realistic expectations","No contraindications"],
    expectTitle: "What Happens During Ultimate Glow & Lift?", downtimeTitle: "Is There Downtime?",
    downtime: "Downtime depends on your skin response and treatment intensity. Temporary redness, warmth, sensitivity, swelling, dryness, or irritation may occur.",
    steps: [["Consultation","Your provider reviews goals, skin, anatomy, health history, and candidacy."],["Combination Plan","Your provider explains how Breeze and WonderTouch may be used."],["Treatment","The selected combination plan is performed."],["Aftercare","You receive skincare, sun protection, and activity guidance."],["Follow Up","Your provider may recommend maintenance or a series if appropriate."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Ultimate Glow & Lift Goals", focusItems: ["Glow","Texture","Firmness","Tone","Facial contouring","Skin quality","Pre event refresh","Non surgical rejuvenation"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results vary and may include a fresher, smoother, firmer looking appearance depending on skin quality, treatment plan, and response.",
    faqTitle: "Ultimate Glow & Lift Questions", faqs: [["What is Ultimate Glow & Lift?","It is a combination treatment direction using Breeze and WonderTouch."],["Who is it for?","It may fit clients who want both skin refresh and tightening support."],["Is there downtime?","Temporary redness, warmth, sensitivity, dryness, swelling, or irritation may occur."],["Is it right for everyone?","No. Your provider will confirm candidacy for each component."],["Who performs treatment?","Care is guided by a Nurse Practitioner and certified injector."]]
  });
}

function facialContouringSkinPage() {
  return focusedSkinPage({
    name: "Facial Contouring", eyebrow: "Facial Contouring in New Hampshire", title: "Refine Your Natural Features With Provider Led Facial Contouring",
    subheadline: "Facial contouring may help support a more defined, balanced, and refreshed appearance by improving the look of facial structure, skin firmness, and overall proportions.",
    supportingCopy: "Elite VitaMed offers provider led facial contouring in New Hampshire as part of the Skin and Tightening category. Your treatment plan is customized around your facial structure, skin quality, goals, treatment history, medical history, and what is appropriate for you.",
    introEyebrow: "What It Is", introTitle: "What Is Facial Contouring?", introCopy: ["Facial contouring is a personalized treatment direction focused on improving the look of facial definition, balance, and proportions.", "Planning may involve skin tightening, injectable treatments, facial balancing, or another option depending on your anatomy and goals."],
    whoTitle: "Who May Be Interested In Facial Contouring?", whoCopy: "Facial contouring may be a fit for clients who want more definition, balance, or refinement without looking overdone.",
    whoFor: ["Facial definition","Jawline support","Lower face concerns","Cheek contour","Chin balance","Mild laxity","Facial balance","Natural looking refinement"],
    optionsTitle: "Facial Contouring Treatment Paths", optionsCopy: "Your provider will determine whether contouring should involve skin support, injectables, or combination planning.",
    paths: [["Skin and Tightening Support","May be discussed when firmness or laxity affects contour.",["Firmness","Skin quality","Mild laxity"],"Explore Skin and Tightening","#skin-tightening"],["Injectable Contouring","May be discussed when structure, projection, or volume support is part of the goal.",["Jawline","Chin","Cheeks","Balance"],"Explore Injectables","#injectables"],["Facial Balancing","May be discussed when multiple features influence the overall result.",["Full face planning","Harmony","Proportion"],"Explore Facial Balancing","#facial-balancing"]],
    benefitsTitle: "Main Benefits Of Facial Contouring", benefits: [["Definition Support","May support a more refined facial appearance."],["Personalized Planning","Built around anatomy, goals, and facial proportions."],["Natural Looking Approach","Focuses on balance rather than overcorrection."],["Combination Friendly","May involve skin support, fillers, neurotoxins, or other options."],["Provider Guided","Final recommendations depend on evaluation."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates want refined contour or balance and understand the best plan depends on anatomy.",
    candidates: ["Jawline definition goals","Chin or cheek balance goals","Mild skin laxity","Facial balance concerns","Realistic expectations","Interest in provider guided planning"],
    expectTitle: "What Happens During Facial Contouring Planning?", downtimeTitle: "Is There Downtime?",
    downtime: "Downtime depends on the treatment selected. Skin tightening, injectables, or combination treatments each have different aftercare and temporary effects.",
    steps: [["Facial Assessment","Your provider evaluates facial structure, skin quality, proportions, and goals."],["Treatment Selection","Your provider explains whether skin support, injectables, or a combination makes sense."],["Personalized Plan","You review expected results, limitations, downtime, and safety considerations."],["Treatment","Treatment is performed based on the selected plan."],["Aftercare","You receive specific aftercare based on the treatment used."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Facial Contouring Areas", focusItems: ["Jawline","Chin","Cheeks","Lower face","Neck","Skin firmness","Facial balance","Profile support"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results vary based on treatment type, anatomy, skin quality, product or device used, and individual response.",
    faqTitle: "Facial Contouring Questions", faqs: [["Is facial contouring filler?","It can involve filler, but it may also include skin tightening, neurotoxins, or facial balancing depending on the plan."],["Can it look natural?","The goal is natural looking refinement and balance."],["Is there downtime?","Downtime depends on the treatment selected."],["Can facial contouring help the jawline?","Jawline support may be discussed depending on anatomy and goals."],["Who performs treatment?","Care is guided by a Nurse Practitioner and certified injector."]]
  });
}

function microneedlingStemCellsPage() {
  return focusedSkinPage({
    name: "Microneedling with Stem Cells", eyebrow: "Microneedling with Stem Cells in New Hampshire", title: "Support Smoother Texture, Skin Quality, and Collagen Renewal",
    subheadline: "Microneedling with stem cells may help support smoother looking skin, improved texture, collagen response, and overall skin rejuvenation in appropriate candidates.",
    supportingCopy: "Elite VitaMed offers provider led microneedling with stem cells in New Hampshire as part of the Skin and Tightening category. Your treatment is customized around your skin quality, concerns, treatment history, medical history, and what is appropriate for you.",
    introEyebrow: "What It Is", introTitle: "What Is Microneedling with Stem Cells?", introCopy: ["Microneedling is a skin rejuvenation treatment that creates controlled microchannels in the skin as part of collagen focused treatment planning.", "A provider selected topical or regenerative support product may be used as part of the treatment plan when appropriate."],
    whoTitle: "Who May Be Interested In Microneedling?", whoCopy: "Microneedling may be considered for clients who want support for texture, fine lines, acne scarring, skin quality, or collagen renewal.",
    whoFor: ["Texture concerns","Fine lines","Acne scarring support","Dull skin","Skin quality","Collagen support","Large pores appearance","Natural looking rejuvenation"],
    optionsTitle: "Microneedling Treatment Planning", optionsCopy: "Your provider will determine whether microneedling, PRP/PRF, chemical peels, or another skin treatment is the right fit.",
    paths: [["Microneedling with Stem Cells","A skin rejuvenation treatment direction focused on texture and collagen support.",["Texture","Fine lines","Skin quality","Collagen"],"Book Microneedling"],["PRP or PRF Combination","May be discussed when regenerative support is part of the plan.",["PRP","PRF","Regenerative support"],"Explore PRP and PRF","#prp-prf"],["Chemical Peel Comparison","May be discussed when tone, surface texture, or peel-based renewal is a better fit.",["Tone","Surface renewal","Glow"],"Explore Chemical Peels","#chemical-peels"]],
    benefitsTitle: "Main Benefits Of Microneedling", benefits: [["Texture Support","May support smoother looking skin texture."],["Collagen Planning","Often discussed for collagen focused skin renewal."],["Acne Scarring Support","May be considered for certain acne texture concerns."],["Skin Quality","Can fit into a broader skin rejuvenation plan."],["Provider Guided","Depth, product selection, and aftercare depend on evaluation."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates have texture, fine line, or skin quality goals and can follow aftercare instructions.",
    candidates: ["Texture concerns","Fine lines","Acne scarring support","Dull skin","Realistic expectations","No active infection or contraindications","Willing to follow aftercare"],
    expectTitle: "What Happens During Microneedling?", downtimeTitle: "Is There Downtime With Microneedling?",
    downtime: "Temporary redness, swelling, tightness, dryness, sensitivity, pinpoint bleeding, flaking, or irritation may occur. Sun protection and aftercare are important.",
    steps: [["Skin Review","Your provider reviews your skin, goals, history, and contraindications."],["Treatment Plan","Depth, product selection, and expectations are reviewed."],["Treatment","Microneedling is performed according to the plan."],["Aftercare","You receive guidance on skincare, sun protection, and what to avoid."],["Series Planning","Your provider may recommend a series depending on goals."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Microneedling Goals", focusItems: ["Texture","Fine lines","Acne scarring support","Skin quality","Collagen renewal","Dullness","Pore appearance","Overall rejuvenation"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results vary and may develop gradually. Some concerns may require a series or combination plan.",
    faqTitle: "Microneedling Questions", faqs: [["What is microneedling?","Microneedling creates controlled microchannels as part of skin rejuvenation planning."],["What are stem cells in this context?","Your provider can explain the selected topical or regenerative support product used with treatment."],["Is there downtime?","Temporary redness, tightness, sensitivity, dryness, flaking, or irritation may occur."],["How many sessions are needed?","That depends on goals, skin condition, and provider recommendation."],["Who performs treatment?","Care is guided by a Nurse Practitioner and certified injector."]]
  });
}

function chemicalPeelsPage() {
  return focusedSkinPage({
    name: "Chemical Peels", eyebrow: "Chemical Peels in New Hampshire", title: "Reveal Smoother, Brighter, More Refreshed Looking Skin",
    subheadline: "Chemical peels may help support skin renewal, smoother looking texture, improved glow, and more even looking tone in appropriate candidates.",
    supportingCopy: "Elite VitaMed offers provider led chemical peels in New Hampshire as part of the Skin and Tightening category. Your treatment is customized around your skin type, skin quality, sensitivity, treatment history, medical history, and what is appropriate for you.",
    introEyebrow: "What They Are", introTitle: "What Are Chemical Peels?", introCopy: ["Chemical peels are skin renewal treatments that use a provider selected peel solution to support exfoliation and refreshed looking skin.", "Peel selection depends on skin type, concerns, sensitivity, history, downtime tolerance, and provider evaluation."],
    whoTitle: "Who May Be Interested In Chemical Peels?", whoCopy: "Chemical peels may be considered for clients who want support for tone, texture, dullness, fine lines, or skin renewal planning.",
    whoFor: ["Dull skin","Uneven tone","Texture concerns","Fine lines","Surface congestion","Glow goals","Skin renewal","Acne related texture concerns"],
    optionsTitle: "Chemical Peel Treatment Planning", optionsCopy: "Your provider will choose the peel type and strength based on your skin and goals.",
    paths: [["Skin Renewal Peel","A peel selected for texture, tone, and glow goals.",["Texture","Tone","Glow","Renewal"],"Book Chemical Peel"],["Combination Skin Planning","Peels may be paired with other treatments when appropriate.",["Skin planning","Maintenance","Provider guidance"],"Explore Skin and Tightening","#skin-tightening"],["Microneedling Comparison","Microneedling may be discussed when collagen or texture support is the priority.",["Texture","Collagen","Acne scarring support"],"Explore Microneedling","#microneedling-stem-cells"]],
    benefitsTitle: "Main Benefits Of Chemical Peels", benefits: [["Smoother Texture","May support smoother looking skin."],["Brighter Appearance","May support glow and a refreshed complexion."],["Tone Support","May be discussed for uneven looking tone."],["Skin Renewal","Fits into skin maintenance and rejuvenation planning."],["Provider Selected","Peel type and strength are selected based on evaluation."]],
    candidatesTitle: "Who May Be An Ideal Candidate?", candidatesCopy: "Ideal candidates want skin renewal and can follow peel preparation and aftercare instructions.",
    candidates: ["Dull skin","Uneven tone","Texture concerns","Fine lines","Glow goals","Realistic expectations","No contraindications","Willing to avoid sun exposure as instructed"],
    expectTitle: "What Happens During A Chemical Peel?", downtimeTitle: "Is There Downtime With Chemical Peels?",
    downtime: "Downtime varies by peel type and skin response. Temporary redness, dryness, tightness, peeling, sensitivity, irritation, or flaking may occur. Sun protection is important.",
    steps: [["Skin Review","Your provider reviews skin type, sensitivity, medications, sun exposure, and goals."],["Peel Selection","Your provider selects an appropriate peel type and explains expected downtime."],["Treatment","The peel is applied according to the treatment plan."],["Aftercare","You receive instructions on skincare, sun protection, and what to avoid."],["Maintenance Planning","Your provider may recommend timing for future treatments."]],
    focusEyebrow: "Treatment Focus", focusTitle: "Common Chemical Peel Goals", focusItems: ["Texture","Tone","Glow","Fine lines","Dullness","Surface renewal","Skin maintenance","Pre event planning when appropriate"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results vary by peel type, skin condition, aftercare, and individual response. Some clients may need a series or maintenance plan.",
    faqTitle: "Chemical Peel Questions", faqs: [["What is a chemical peel?","A chemical peel is a provider selected skin renewal treatment used to support exfoliation and refreshed looking skin."],["Will my skin peel?","Peeling varies by peel type and individual response."],["Is there downtime?","Temporary redness, dryness, sensitivity, flaking, or peeling may occur."],["Can all skin types get peels?","Not every peel is appropriate for every skin type. Provider evaluation is required."],["Who performs chemical peels?","Care is guided by a Nurse Practitioner and certified injector."]]
  });
}

function skinTighteningPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Skin and Tightening Treatments in New Hampshire", title: "Refresh, Smooth, Tighten, and Rejuvenate Your Skin",
    subheadline: "Elite VitaMed offers Breeze, WonderTouch, Ultimate Glow & Lift, chemical peels, facial contouring, and microneedling with stem cells to support smoother, firmer, more refreshed looking skin.",
    supportingCopy: "Whether your goal is brighter skin, improved texture, a more contoured look, skin rejuvenation, or tightening support, your treatment plan is guided by provider evaluation, realistic expectations, and personalized care.",
    primaryCta: "Book Your Appointment", secondaryCta: "Start Treatment Assessment", thirdCta: "Request A Phone Consultation", trustLine: "Care performed by a Nurse Practitioner and certified injector.", icon: "sparkle",
    introEyebrow: "What They Are", introTitle: "What Are Skin and Tightening Treatments?", introCopy: ["Skin and tightening treatments are aesthetic options designed to support the appearance of smoother, firmer, brighter, and more refreshed looking skin.", "Your provider will help determine which option may be the best starting point based on your skin, goals, comfort level, timeline, and what is appropriate for you."],
    whoTitle: "Who May Be Interested In Skin and Tightening Treatments?", whoCopy: "This category may be a good fit for clients who want to improve the appearance of dullness, texture, laxity, firmness, skin tone, or overall radiance.", whoFor: ["Dull or tired looking skin","Skin texture","Uneven tone","Loss of firmness","Mild laxity","Fine lines","Acne scarring","Pre event glow","Facial contouring goals","Non surgical rejuvenation"], candidacyNote: "Final candidacy is always determined by provider evaluation.",
    optionsTitle: "Explore Skin and Tightening Treatment Paths", optionsCopy: "This category includes treatments that support skin glow, texture, tightening, contouring, and rejuvenation. Your provider can help determine which option may fit your goals best.",
    paths: [
      ["Breeze","A needle free skin treatment designed to support exfoliation, hydration, serum delivery, lymphatic support, and overall skin radiance.",["Glow and radiance","Hydration","Texture support","Pre event refresh"],"Explore Breeze","#breeze"],
      ["WonderTouch","A radiofrequency based treatment option designed to support skin tightening, texture improvement, and a more refreshed appearance.",["Skin firmness","Mild laxity","Texture support","Neck and lower face concerns"],"Explore WonderTouch","#wondertouch"],
      ["Ultimate Glow & Lift","A combined Breeze and WonderTouch experience designed to support radiance, hydration, texture, and firmness goals.",["Full skin refresh","Glow and tightening support","Texture and radiance","Pre event planning"],"Explore Ultimate Glow & Lift","#ultimate-glow-lift"],
      ["Chemical Peels","Skin resurfacing treatments that may help improve the appearance of texture, tone, dullness, fine lines, and certain surface level concerns.",["Uneven tone","Texture concerns","Fine lines","Skin refresh goals"],"Explore Chemical Peels","#chemical-peels"],
      ["Facial Contouring","A personalized approach for clients seeking a more defined, balanced, or sculpted appearance.",["Facial definition","Jawline support","Lower face concerns","Facial balance"],"Explore Facial Contouring","#facial-contouring"],
      ["Microneedling with Stem Cells","A skin rejuvenation treatment designed to support texture, tone, and overall skin quality with provider guided product selection.",["Skin texture","Fine lines","Acne scarring","Collagen support"],"Explore Microneedling with Stem Cells","#microneedling-stem-cells"]
    ],
    benefitsTitle: "Why Clients Consider Skin and Tightening Treatments", benefits: [["Refreshed Appearance","These treatments may help improve the appearance of tired, dull, textured, or less vibrant looking skin."],["Texture Support","Several options may be discussed for clients who want smoother, more polished looking skin."],["Firmness Goals","WonderTouch and Ultimate Glow & Lift may support tightening and firmness focused goals."],["Flexible Planning","Treatments may be used alone or as part of a broader aesthetic plan."],["Personalized To Your Skin","Your provider helps choose an option based on your skin, timeline, sensitivity, comfort level, and goals."]],
    expectTitle: "What Happens During A Skin and Tightening Appointment?", downtime: "Downtime depends on the selected treatment, intensity, area, and your individual skin response. Your provider will explain temporary effects and aftercare before treatment.",
    steps: [["Consultation and Goal Review","Your provider reviews your skin goals, treatment history, timeline, and concerns."],["Skin Evaluation","Your provider evaluates skin quality, texture, sensitivity, and treatment areas."],["Treatment Recommendation","Your provider recommends the most appropriate starting point."],["Treatment","Your selected treatment is performed according to your provider's plan."],["Aftercare and Follow Up","You receive aftercare instructions and guidance on what to expect."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Common Treatment Areas", focusItems: ["Face","Neck","Jawline","Lower face","Cheeks","Chin","Decollete","Scalp, if appropriate for Breeze"],
    resultsTitle: "What Results Can You Expect?", resultsCopy: "Results depend on the selected treatment, treatment area, skin quality, number of sessions, individual response, and provider recommendation. Some goals may require a series of sessions.",
    safetyTitle: "Provider Review and Safety Come First", safetyCopy: ["Skin and tightening treatments should be approached with proper provider evaluation, realistic expectations, and careful treatment planning.", "Tell your provider if you are pregnant, breastfeeding, have active infection, open wounds, recent procedures, poor healing, implanted devices, metal implants in the treatment area, skin conditions, medication concerns, recent sun exposure, or health issues that should be reviewed."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your goals, skin quality, anatomy, history, device availability, product selection, and what is appropriate for you.",
    faqTitle: "Skin and Tightening Questions", faqs: [["What treatments does Elite VitaMed offer?","Elite VitaMed offers Breeze, WonderTouch, Ultimate Glow & Lift, chemical peels, facial contouring, and microneedling with stem cells."],["What is Breeze?","Breeze is a needle free skin treatment designed to support exfoliation, hydration, serum delivery, lymphatic support, and radiance."],["What is WonderTouch?","WonderTouch is a radiofrequency based option designed to support tightening, texture improvement, and a refreshed appearance."],["What is Ultimate Glow & Lift?","Ultimate Glow & Lift combines Breeze and WonderTouch to support glow and tightening goals."],["Is there downtime?","Downtime depends on the treatment and individual skin response. Your provider will explain what to expect."],["Can treatments be combined?","In some cases, combining treatments may be appropriate. Your provider can recommend a personalized plan."]],
    finalTitle: "Ready To Explore Skin and Tightening Treatments?", finalCopy: "Book your appointment, start the Full Treatment Assessment, or request a phone consultation if you are not sure where to begin."
  });
}

function ivDripsFinancing() {
  return `
    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Financing Available</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Start Your IV Wellness Plan Now, Pay Over Time</h2><p class="mt-4 max-w-4xl leading-8 text-ink/70">Elite VitaMed offers financing through Cherry, making it easier for eligible clients to move forward with IV drip and wellness treatment planning.</p><p class="mt-3 max-w-4xl text-sm leading-7 text-ink/64">With Cherry financing, eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_CHERRY_URL}" target="_blank" rel="noopener" data-integration-placeholder="cherry" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a><a href="${bookingRouteForCurrentPage()}" class="btn btn-gold justify-center">${icon("calendar")} Book Your IV Appointment</a></div><p class="mt-5 text-xs leading-6 text-ink/58">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p></div></section>
  `;
}

function ivTherapyPhoneConsultSection() {
  return `
    <section class="section-shell bg-ivory"><div class="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"><p class="eyebrow">Prefer To Talk First?</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Request An IV Therapy Phone Consult</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-ink/70">If you have questions before booking, an IV Therapy Phone Consult can help you review your goals, health history, treatment options, and which drip or Vitamin Injection may be appropriate. This is a helpful option if you are new to IV therapy, unsure which option to choose, or want provider guided direction before scheduling.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="#contact" class="btn btn-navy justify-center">${icon("phone")} Request IV Therapy Phone Consult</a><a href="#assessment" class="btn btn-gold justify-center">${icon("sparkle")} Start IV Therapy Assessment</a></div></div></section>
  `;
}

function ivDripsPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "IV Drip Therapy in New Hampshire", title: "Support Hydration, Energy, Recovery, and Wellness With Provider Led IV Therapy",
    subheadline: "Elite VitaMed offers IV drip therapy and Vitamin Injections designed to support hydration, nutrient replenishment, recovery, beauty, energy, and wellness goals in appropriate candidates.",
    supportingCopy: "IV drip therapy at Elite VitaMed is performed with a provider led approach and customized around your goals, health history, lifestyle, medications, and what is appropriate for you. Choose from Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, or Vitamin Injections based on your needs and provider recommendation.",
    primaryCta: "Book Your IV Appointment", secondaryCta: "Start IV Therapy Assessment", thirdCta: "Request IV Therapy Phone Consult", assessmentLabel: "Start IV Therapy Assessment", phoneLabel: "Request IV Therapy Phone Consult",
    trustLine: "Provider led IV and wellness care in New Hampshire.", icon: "droplet",
    introEyebrow: "What It Is", introTitle: "What Is IV Drip Therapy?", introCopy: [
      "IV drip therapy is a wellness treatment that delivers fluids and selected nutrients through an intravenous infusion. It may be discussed for hydration support, nutrient replenishment, recovery planning, energy support, immune support planning, beauty focused wellness, or general wellness maintenance.",
      "At Elite VitaMed, IV drip therapy is not approached as a generic treatment. Your provider reviews your health history, medications, allergies, current symptoms, wellness goals, and candidacy before recommending an IV option.",
      "IV therapy may be a helpful supportive wellness option for appropriate clients, but it does not replace medical care, nutrition, sleep, hydration, or treatment for illness."
    ],
    whoTitle: "Who IV Drip Therapy Is For", whoCopy: "IV drip therapy may be a fit for clients who want provider led wellness support, hydration support, or nutrient support.",
    whoFor: ["Hydration goals","Travel recovery","Post event recovery","Energy support","Busy schedules","Exercise recovery planning","Beauty and glow support","Immune support planning","Nutrient replenishment","Wellness maintenance","General wellness optimization","A more personalized way to choose IV support"],
    candidacyNote: "IV therapy may not be appropriate for every client. Candidacy depends on health history, medications, allergies, hydration status, current symptoms, pregnancy status, and provider evaluation.",
    optionsTitle: "IV Drip Options", optionsCopy: "Each drip supports a different wellness goal. Your provider will help determine which option may be appropriate based on your health history, symptoms, medications, goals, and candidacy.",
    paths: [
      ["Hydration & Recovery Drip","A hydration focused drip for clients who want fluid support, recovery planning, and wellness support after travel, events, busy weeks, or feeling depleted.",["Hydration support","Travel recovery","Post event support","Busy weeks","Feeling run down","General wellness maintenance"],"Book Hydration & Recovery Drip"],
      ["Energy & Performance Drip","A wellness option for clients who want support for energy, nutrient replenishment, active lifestyles, and demanding schedules.",["Low energy support","Busy schedules","Travel demands","Performance support","Lifestyle support","Nutrient support"],"Book Energy & Performance Drip"],
      ["Detox & Cleanse Drip","A wellness support option for clients who want a guided reset after travel, events, stress, or feeling off track. This is not a medical detox or treatment for illness.",["Wellness reset goals","Feeling sluggish","Post travel support","Post event support","Wellness optimization"],"Book Detox & Cleanse Drip"],
      ["Beauty Glow Drip","A beauty focused IV option for clients who want nutrient support related to skin, glow, hydration, and beauty focused wellness goals.",["Beauty and glow","Skin hydration support","Pre event wellness planning","Skin and wellness support","Aesthetic care support"],"Book Beauty Glow Drip"],
      ["Metabolism & Weight Management Drip","A wellness support option that may be discussed alongside healthy lifestyle habits, nutrition, movement, and provider guided planning.",["Metabolism support discussions","Weight management support","Healthy routines","Wellness optimization","Provider guided care"],"Book Metabolism & Weight Management Drip"],
      ["Immunity Boost Drip","A wellness option for clients interested in immune support planning and nutrient replenishment during busy seasons, travel, or stress.",["Seasonal wellness support","Travel wellness planning","Immune support goals","Nutrient replenishment","Wellness maintenance"],"Book Immunity Boost Drip"],
      ["Myers' Cocktail","A classic IV therapy option that may include a blend of vitamins, minerals, and fluids depending on provider protocol and candidacy.",["Classic IV wellness blend","General wellness support","Hydration support","Energy support discussions","Provider guided planning"],"Book Myers' Cocktail"],
      ["NAD+ Therapy","An advanced wellness option for clients interested in NAD+ support and provider guided wellness planning. Screening and expectations are especially important.",["Advanced wellness support","NAD+ conversations","Energy support discussions","Cellular wellness support","Provider guided care"],"Request NAD+ Therapy Consult"],
      ["Vitamin Injections","A quicker wellness support option for clients who may not need a full IV drip appointment.",["Energy support","Vitamin support","Nutrient replenishment","Wellness maintenance","Busy schedules","Shorter appointments"],"Explore Vitamin Injections"]
    ],
    benefitsTitle: "Main Benefits", benefits: [["Hydration Goals","IV drip therapy and Vitamin Injections may support hydration goals in appropriate candidates."],["Nutrient Replenishment","Selected options may be discussed for vitamin support and nutrient replenishment."],["Energy and Recovery Planning","Some options may be considered for energy support, travel recovery, post event support, or exercise recovery planning."],["Beauty and Glow Support","Beauty focused options may support skin hydration and glow goals as part of a broader wellness plan."],["Provider Led Selection","Your plan is selected after reviewing health history, goals, medications, and candidacy."]],
    candidatesTitle: "Ideal Candidates", candidatesCopy: "You may be a candidate for IV drip therapy if you are interested in hydration support, vitamin support, nutrient replenishment, or wellness planning with provider oversight.",
    candidates: ["Hydration goals","Energy support goals","Recovery goals","Travel or event recovery needs","Beauty and glow support goals","Interest in IV therapy","Interest in Vitamin Injections","Good overall health","Realistic expectations","No contraindications that would make treatment inappropriate"],
    expectTitle: "What Happens During An IV Drip Appointment?", downtimeTitle: "Is There Downtime With IV Drips?",
    downtime: "Downtime is typically minimal for many clients, but your response depends on your health history, treatment type, hydration status, and individual response. Some clients may experience temporary soreness, bruising, redness, tenderness, lightheadedness, or sensitivity at the IV or injection site.",
    steps: [["Provider Led Review","Your provider reviews wellness goals, hydration goals, medical history, medications, allergies, recent illness history, pregnancy status when relevant, and comfort with IV therapy."],["Treatment Recommendation","If appropriate, your provider recommends an IV drip or Vitamin Injection based on your goals and candidacy."],["Treatment Experience","An IV is placed and the selected fluid and nutrient blend is administered while your comfort is monitored."],["Vitamin Injection Option","If a Vitamin Injection is recommended instead, your provider explains how it may fit your wellness goals."],["Aftercare Guidance","You receive guidance about hydration, activity, and what to monitor after treatment."]],
    focusEyebrow: "Treatment Areas and Wellness Goals", focusTitle: "IV Drip Therapy and Vitamin Injections May Focus On",
    focusItems: ["Hydration support","Energy support","Recovery support","Immune support planning","Beauty and glow support","Vitamin support","Nutrient replenishment","Travel support","Post event support","Exercise recovery planning","Wellness maintenance","General wellness optimization"],
    resultsTitle: "Before and After Expectations", resultsCopy: "IV drip therapy is a supportive wellness treatment, not a cosmetic before and after procedure in the same way injectables or skin treatments may be. Some clients may feel refreshed or supported after treatment, while others may notice more subtle effects. Individual responses vary.",
    comparisonTitle: "IV Drip Therapy Compared To Similar Treatments", comparisons: [
      ["IV Drip Therapy vs Vitamin Injections","IV drip therapy may be discussed when a client wants fluid support and selected nutrient support through an infusion. Vitamin Injections may be discussed when a client wants a quicker injection based wellness support option."],["IV Drip Therapy vs Oral Supplements","Oral supplements are taken by mouth and may be part of a wellness routine. IV drip therapy delivers fluids and selected nutrients intravenously."],["IV Drip Therapy vs Hydration Drinks","Hydration drinks may support daily hydration habits. IV therapy may be discussed when a client wants provider led hydration support through an infusion."],["IV Drip Therapy vs Wellness Visits","A wellness visit may involve broader evaluation, lab work, medical guidance, or long term health planning. IV drip therapy is supportive wellness care and should not replace medical evaluation when symptoms or health concerns need deeper review."]
    ],
    comparisonCta: "Not sure which IV drip is right for you? Start with the IV Therapy Assessment or request an IV Therapy Phone Consult.",
    safetyTitle: "Medical Screening and Provider Oversight Matter", safetyCopy: [
      "IV drip therapy and Vitamin Injections should be performed by a qualified provider who understands medical screening, IV placement, vitamin support, treatment safety, and appropriate candidacy.",
      "IV therapy and Vitamin Injections may not be appropriate for everyone. Certain medical conditions, medications, allergies, pregnancy status, kidney concerns, heart concerns, active illness, hydration issues, or ingredient sensitivities may affect candidacy.",
      "IV therapy does not cure, prevent, or treat illness and does not replace medical care, nutrition, sleep, hydration, or treatment for illness."
    ],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your health history, goals, current symptoms, medications, and provider evaluation. Individual results vary.",
    providerTitle: "Provider Led IV Drip Therapy In New Hampshire", providerCopy: "Your IV drip therapy treatment is performed with provider led oversight and a focus on safety, candidacy, realistic expectations, and personalized treatment planning. Every IV therapy plan begins with a thoughtful review so your care is based on your health history, wellness goals, and what is appropriate for you.",
    providerSecondaryLabel: "Request IV Therapy Phone Consult", providerSecondaryIcon: "phone",
    localEyebrow: "Local IV Therapy", localTitle: "IV Drip Therapy in New Hampshire",
    localCopy: "Elite VitaMed provides IV drip therapy in New Hampshire for clients seeking provider led hydration support, vitamin support, nutrient replenishment, recovery planning, and wellness optimization.",
    relatedEyebrow: "Related IV and Wellness Options", relatedTitle: "Explore IV Drips and Wellness Support",
    related: [["IV and Wellness","#iv-wellness"],["Hydration & Recovery Drip","#iv-drips/treatment-hydration-recovery-drip"],["Energy & Performance Drip","#iv-drips/treatment-energy-performance-drip"],["Detox & Cleanse Drip","#iv-drips/treatment-detox-cleanse-drip"],["Beauty Glow Drip","#iv-drips/treatment-beauty-glow-drip"],["Metabolism & Weight Management Drip","#iv-drips/treatment-metabolism-weight-management-drip"],["Immunity Boost Drip","#iv-drips/treatment-immunity-boost-drip"],["Myers' Cocktail","#iv-drips/treatment-myers-cocktail"],["NAD+ Therapy","#iv-drips/treatment-nad-therapy"],["Vitamin Injections","#iv-drips/treatment-vitamin-injections"],["IV Therapy Assessment","#assessment"],["Full Treatment Assessment","#assessment"]],
    consultationEyebrow: "Not Sure Which IV Drip To Choose?", consultationTitle: "Start With The IV Therapy Assessment",
    consultationCopy: "Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, and Vitamin Injections all support different goals. The right option depends on your health history, lifestyle, symptoms, and desired support.",
    extraSection: ivTherapyPhoneConsultSection(), financingSection: ivDripsFinancing(),
    faqTitle: "IV Drip Questions", faqs: [
      ["What is IV drip therapy?","IV drip therapy is a wellness treatment that delivers fluids and selected nutrients through an intravenous infusion. It may be discussed for hydration support, nutrient replenishment, recovery planning, and wellness goals in appropriate candidates."],["Which IV drip should I choose?","The best option depends on your goals, health history, current symptoms, medications, and provider evaluation. If you are unsure, start with the IV Therapy Assessment or request an IV Therapy Phone Consult."],["What IV drips does Elite VitaMed offer?","Elite VitaMed's IV drip therapy options include Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, and Vitamin Injections."],["Is IV therapy right for everyone?","No. IV therapy is not appropriate for everyone. Your provider will review your health history, medications, allergies, current symptoms, and goals before recommending treatment."],["Does IV therapy cure illness?","No. IV therapy does not cure, prevent, or treat illness and does not replace medical care. It may be discussed as supportive wellness care in appropriate candidates."],["What is the difference between IV therapy and Vitamin Injections?","IV therapy delivers fluids and selected nutrients through an intravenous infusion. Vitamin Injections are delivered by injection and may be a quicker option for certain wellness support goals."],["Can I get a Vitamin Injection instead of an IV drip?","Vitamin Injections may be discussed for clients who want a shorter appointment or may not need a full IV infusion. Your provider will determine what is appropriate."],["How long does an IV appointment take?","Appointment timing may vary depending on the drip selected, setup, provider evaluation, and how you respond during treatment. Elite VitaMed can confirm timing when you book."],["Do I need a consultation before IV therapy?","A provider led review is important before IV therapy to confirm candidacy, health history, allergies, medications, and goals."]
    ],
    finalTitle: "Ready To Book IV Drip Therapy In New Hampshire?", finalCopy: "If you are interested in hydration support, energy support, immune support planning, beauty focused wellness, recovery support, NAD+ Therapy, Myers' Cocktail, or Vitamin Injections, Elite VitaMed can help you choose the right starting point."
  });
}

function ivWellnessPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "IV and Wellness Treatments in New Hampshire", title: "Support Hydration, Recovery, Energy, and Wellness With Provider Led IV Care",
    subheadline: "Elite VitaMed offers IV drip therapy and vitamin injections designed to support hydration, nutrient replenishment, recovery, beauty, and wellness goals in appropriate candidates.",
    supportingCopy: "IV and wellness treatments at Elite VitaMed are performed with a provider led approach by a Nurse Practitioner and certified injector. Your plan may include IV drip therapy, vitamin injections, or wellness support based on your goals, health history, lifestyle, and what is appropriate for you.",
    primaryCta: "Book Your IV Appointment", secondaryCta: "Start IV Therapy Assessment", thirdCta: "Request IV Therapy Phone Consult", assessmentLabel: "Start IV Therapy Assessment", phoneLabel: "Request IV Therapy Phone Consult", trustLine: "Provider led IV and wellness care in New Hampshire.", icon: "droplet",
    introEyebrow: "What It Is", introTitle: "What IV and Wellness Treatments Are", introCopy: [
      "IV and wellness is a treatment category focused on hydration support, nutrient replenishment, recovery planning, wellness optimization, and vitamin based support.",
      "At Elite VitaMed, this category includes IV drip therapy and vitamin injections. IV drip therapy delivers fluids and selected nutrients through an intravenous infusion, while vitamin injections are delivered through an injection and may be discussed for clients who want a quicker wellness support option.",
      "IV therapy and vitamin injections do not replace medical care, nutrition, sleep, hydration, or treatment for illness. Final recommendations depend on your health history, goals, current symptoms, medications, and provider evaluation."
    ],
    whoTitle: "Who IV and Wellness Treatments Are For", whoCopy: "IV and wellness treatments may be a fit for clients who want provider led support for hydration, recovery, nutrient replenishment, or general wellness goals.",
    whoFor: ["Hydration goals","Travel recovery","Post event recovery","Energy support","Wellness maintenance","Beauty and glow support","Immune support planning","Exercise recovery","Nutrient replenishment","Vitamin support","General wellness optimization","A provider led alternative to guessing which option to choose"], candidacyNote: "IV and wellness treatments may also be helpful for clients who are unsure whether an IV drip or vitamin injection makes more sense for their goals.",
    optionsTitle: "Treatment Options", optionsCopy: "Each treatment path supports a different wellness goal. Your provider reviews your health history, goals, medications, and candidacy before recommending an option.",
    paths: [
      ["IV Drip Therapy","A provider guided IV option for hydration, wellness, recovery, or nutrient focused care.",["Hydration support","Wellness support","Recovery support","Mobile IV care"],"Explore IV Drip Therapy","#iv-drips"],
      ["Hydration & Recovery Drip","A hydration focused drip for fluid support, recovery planning, travel recovery, post event support, and feeling depleted.",["Hydration support","Travel recovery","Post event recovery","Feeling run down","Wellness maintenance"],"Explore Hydration & Recovery","#iv-drips/treatment-hydration-recovery-drip"],
      ["Energy & Performance Drip","A wellness option for energy support, nutrient replenishment, active lifestyles, performance support, and demanding schedules.",["Low energy support","Busy schedules","Travel demands","Performance support","Nutrient support"],"Explore Energy & Performance","#iv-drips/treatment-energy-performance-drip"],
      ["Detox & Cleanse Drip","A wellness reset option for clients who want support after travel, events, stress, or feeling off track. This is not a medical detox.",["Wellness reset goals","Feeling sluggish","Post travel support","Post event support","Wellness optimization"],"Explore Detox & Cleanse","#iv-drips/treatment-detox-cleanse-drip"],
      ["Beauty Glow Drip","A beauty focused wellness option for skin hydration, glow, radiance, and pre event wellness planning.",["Beauty and glow support","Skin hydration support","Pre event planning","General skin support","Aesthetic care support"],"Explore Beauty Glow","#iv-drips/treatment-beauty-glow-drip"],
      ["Metabolism & Weight Management Drip","A wellness support option that may be discussed alongside healthy habits and provider guided planning.",["Metabolism support discussions","Weight management support","Healthy routines","Wellness optimization","Provider guided care"],"Explore Metabolism Support","#iv-drips/treatment-metabolism-weight-management-drip"],
      ["Immunity Boost Drip","A wellness option for immune support planning and nutrient replenishment during busy seasons, travel, or stress.",["Seasonal wellness support","Travel wellness planning","Immune support goals","Nutrient replenishment","Wellness maintenance"],"Explore Immunity Boost","#iv-drips/treatment-immunity-boost-drip"],
      ["Myers' Cocktail","A classic IV therapy option that may include a blend of vitamins, minerals, and fluids depending on provider protocol.",["Classic IV wellness blend","General wellness support","Hydration support","Provider guided planning"],"Explore Myers' Cocktail","#iv-drips/treatment-myers-cocktail"],
      ["NAD+ Therapy","An advanced wellness option for clients interested in NAD+ support and provider guided wellness planning.",["Advanced wellness support","NAD+ conversations","Energy support discussions","Provider guided care"],"Explore NAD+ Therapy","#iv-drips/treatment-nad-therapy"],
      ["Vitamin Injections","A quicker wellness support option for clients who may not need a full IV drip appointment.",["Energy support","Nutrient support","Wellness maintenance","Busy schedules","Faster appointment"],"Explore Vitamin Injections","#iv-drips/treatment-vitamin-injections"]
    ],
    benefitsTitle: "Main Benefits", benefits: [["Hydration and Nutrient Support","IV and wellness treatments may help support hydration goals and nutrient replenishment."],["Energy and Recovery Planning","Treatment options may be discussed for energy support, travel recovery, post event support, or exercise recovery planning."],["Beauty and Glow Support","Beauty focused options may support skin hydration and glow goals as part of a broader aesthetic and wellness plan."],["Personalized Wellness Care","Your provider helps you choose between IV therapy, vitamin injections, or another wellness option based on your goals."],["Provider Led Treatment Selection","Care is guided by health history, screening, medications, and appropriate candidacy."]],
    candidatesTitle: "Ideal Candidates", candidatesCopy: "You may be a candidate for IV and wellness treatments if you are interested in hydration support, nutrient replenishment, vitamin support, or wellness planning with provider oversight.",
    candidates: ["Hydration goals","Wellness support goals","Interest in IV therapy","Interest in vitamin injections","A busy lifestyle","Travel or event recovery goals","Beauty and glow support goals","Good overall health","Realistic expectations","No contraindications that would make treatment inappropriate"],
    expectTitle: "What Happens During An IV or Wellness Appointment?", downtime: "Most clients return to normal daily activities, but temporary soreness, bruising, tenderness, warmth, irritation, tiredness, or lightheadedness may occur. Your provider will explain what to watch for.",
    steps: [["Goal Review","Your provider reviews your wellness goals, hydration goals, energy or recovery concerns, and comfort with IV therapy."],["Health Screening","Your medical history, medications, allergies, recent illness history, and pregnancy status when relevant are reviewed."],["Treatment Selection","Your provider determines whether IV therapy, vitamin injections, or another wellness option may be appropriate."],["Treatment Experience","If treatment is recommended, your provider explains what the selected option is intended to support and monitors your comfort."],["Aftercare Guidance","You receive personalized aftercare and follow up guidance."]],
    focusEyebrow: "Treatment Focus Areas", focusTitle: "IV and Wellness Treatments May Focus On", focusItems: ["Hydration support","Energy support","Recovery support","Immune support planning","Beauty and glow support","Vitamin support","Nutrient replenishment","Wellness maintenance","Travel support","Post event support","Exercise recovery planning","General wellness optimization"],
    comparisonTitle: "IV and Wellness Compared To Other Treatment Categories", comparisons: [["IV and Wellness vs Injectables","Injectables focus on aesthetic concerns such as expression lines, facial volume, contouring, and facial balancing. IV and wellness treatments focus more on hydration, nutrient support, recovery planning, and wellness goals."],["IV and Wellness vs Regenerative Aesthetics","Regenerative aesthetics may include PRP, PRF, hair restoration, and collagen stimulation treatments. IV and wellness treatments focus more on internal hydration and nutrient support rather than direct skin, hair, or collagen treatment."],["IV and Wellness vs Skin and Tightening","Skin and tightening treatments focus on visible skin quality, texture, firmness, glow, and facial contouring. IV and wellness treatments may support beauty and wellness goals, but they do not replace skin treatments."],["IV and Wellness vs At Home Supplements","Supplements are taken orally and may be part of a wellness routine. IV therapy and vitamin injections are provider led treatments that may be discussed for clients seeking direct hydration or vitamin support."]],
    resultsTitle: "Before And After Expectations", resultsCopy: "IV and wellness treatments are supportive wellness treatments, not cosmetic before and after procedures in the same way injectables or skin treatments may be. Some clients may feel refreshed or supported after treatment, while others may notice more subtle effects.",
    safetyTitle: "Safety Considerations", safetyCopy: ["IV and wellness treatments should be performed by a qualified provider who understands medical screening, IV placement, vitamin support, treatment safety, and appropriate candidacy.", "IV therapy and vitamin injections may not be appropriate for everyone. Certain medical conditions, medications, allergies, pregnancy status, kidney concerns, heart concerns, active illness, or hydration issues may affect candidacy.", "IV therapy and vitamin injections do not replace medical care, nutrition, sleep, hydration, or treatment for illness."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, consultation, or provider evaluation. Final recommendations depend on your goals, health history, medications, allergies, current symptoms, and what is appropriate for you.",
    providerTitle: "Provider Led IV and Wellness Care In New Hampshire", providerCopy: "Your IV and wellness treatment is performed with provider led oversight and a focus on safety, candidacy, realistic expectations, and personalized treatment planning. Every plan begins with a thoughtful review so your care is based on your health history, wellness goals, and what is appropriate for you.",
    localEyebrow: "Local IV Wellness", localTitle: "IV and Wellness Treatments in New Hampshire", localCopy: "Elite VitaMed provides IV and wellness treatments in New Hampshire for clients seeking provider led hydration support, IV drip therapy, vitamin injections, and wellness optimization.",
    related: [["IV Drip Therapy","#iv-drips"],["Hydration & Recovery Drip","#iv-drips/treatment-hydration-recovery-drip"],["Energy & Performance Drip","#iv-drips/treatment-energy-performance-drip"],["Detox & Cleanse Drip","#iv-drips/treatment-detox-cleanse-drip"],["Beauty Glow Drip","#iv-drips/treatment-beauty-glow-drip"],["Metabolism & Weight Management Drip","#iv-drips/treatment-metabolism-weight-management-drip"],["Immunity Boost Drip","#iv-drips/treatment-immunity-boost-drip"],["Myers' Cocktail","#iv-drips/treatment-myers-cocktail"],["NAD+ Therapy","#iv-drips/treatment-nad-therapy"],["Vitamin Injections","#iv-drips/treatment-vitamin-injections"],["Full Treatment Assessment","#assessment"],["IV Therapy Assessment","#assessment"],["Request IV Therapy Phone Consult","#contact"]],
    consultationEyebrow: "Not Sure Which IV or Wellness Treatment Is Right For You?", consultationTitle: "Start With The IV Therapy Assessment", consultationCopy: "Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, and Vitamin Injections all support different goals. The right option depends on your health history, lifestyle, symptoms, and desired support.",
    financingSection: ivDripsFinancing(),
    faqTitle: "IV and Wellness Questions", faqs: [["What is IV and wellness care?","IV and wellness care includes supportive treatments such as IV drip therapy and vitamin injections. These treatments may be discussed for hydration support, nutrient replenishment, recovery planning, and wellness goals in appropriate candidates."],["What IV drips does Elite VitaMed offer?","Elite VitaMed's IV drip therapy page includes Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, and Vitamin Injections."],["Are vitamin injections included in IV and wellness?","Yes. Vitamin Injections can be included within the IV and wellness category and may also be explained on the IV Drip Therapy page."],["Is IV therapy right for everyone?","No. IV therapy is not appropriate for everyone. Your provider will review your health history, medications, allergies, current symptoms, and goals before recommending treatment."],["Does IV therapy cure illness?","No. IV therapy does not cure, prevent, or treat illness and does not replace medical care. It may be discussed as supportive wellness care in appropriate candidates."],["How do I know which IV drip to choose?","If you are unsure, you can start with the IV Therapy Assessment or request an IV Therapy Phone Consult. Your provider can help determine which option may fit your goals and health history."]],
    finalTitle: "Ready To Explore IV and Wellness Treatments In New Hampshire?", finalCopy: "If you are interested in hydration support, energy support, recovery planning, beauty focused wellness, immune support planning, or vitamin injections, Elite VitaMed can help you choose the right starting point."
  });
}

function intimateWellnessPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Private Intimate Wellness Consultations in New Hampshire", title: "Private, Respectful Support For Feminine Wellness Concerns",
    subheadline: "Elite VitaMed offers private intimate wellness consultations for clients who want to discuss feminine wellness, comfort, confidence, and non surgical treatment options in a discreet provider led setting.",
    supportingCopy: "Intimate wellness care at Elite VitaMed is approached with privacy, respect, and clinical judgment. Your consultation is performed by a Nurse Practitioner and designed to help determine whether feminine wellness treatments or vaginal tightening options may be appropriate based on your goals, anatomy, medical history, symptoms, and what is safe for you.",
    primaryCta: "Request A Private Consultation", secondaryCta: "Start Treatment Assessment", thirdCta: "Book Your Appointment", trustLine: "Private, provider led care with a Nurse Practitioner.", icon: "heart",
    introEyebrow: "What It Is", introTitle: "What Intimate Wellness Is", introCopy: [
      "Intimate wellness is a treatment category focused on private, respectful conversations around feminine wellness, intimate confidence, tissue changes, comfort, and aesthetic or functional concerns that may affect how a client feels in their body.",
      "At Elite VitaMed, this category includes Feminine Wellness and Vaginal Tightening. These treatments are not approached casually or generically. They require a thoughtful consultation, medical history review, candidacy screening, and a clear understanding of what the client is hoping to improve.",
      "Intimate wellness is a sensitive area of care, and not every concern is appropriate for an aesthetic wellness treatment. Some symptoms may require medical evaluation, lab work, gynecologic care, pelvic floor therapy, or referral before any treatment is considered."
    ],
    whoTitle: "Who Intimate Wellness Is For", whoCopy: "Intimate wellness may be a fit for clients who want a private consultation to discuss changes or concerns related to feminine wellness, confidence, comfort, or tissue support.",
    whoFor: ["Feminine wellness goals","Changes in intimate confidence","Concerns about tissue firmness or laxity","Questions about vaginal tightening options","Interest in non surgical feminine wellness support","Postpartum related changes, when medically appropriate","Age related tissue changes","A desire to understand available options","A private provider led consultation before making a decision"],
    candidacyNote: "Intimate wellness treatment is not appropriate for every concern. If you are experiencing pain, bleeding, infection symptoms, new or unusual discharge, urinary symptoms, pelvic symptoms, or any significant medical change, your provider may recommend medical evaluation first.",
    optionsTitle: "Treatment Options", optionsCopy: "Feminine Wellness and Vaginal Tightening begin with private consultation, medical history review, candidacy screening, and realistic expectation setting.",
    paths: [
      ["Feminine Wellness","A private consultation and treatment planning category for clients who want to discuss intimate wellness goals in a respectful, provider led setting.",["Private wellness concerns","Intimate confidence","Tissue support goals","Age related changes","Questions about non surgical options"],"Explore Feminine Wellness","#feminine-wellness"],
      ["Vaginal Tightening","A consultation based treatment area for clients interested in non surgical options that may support the appearance or feeling of tissue firmness in appropriate candidates.",["Tissue laxity concerns","Postpartum tissue changes","Age related changes","Non surgical tightening support","Private consultation"],"Explore Vaginal Tightening","#vaginal-tightening"]
    ],
    benefitsTitle: "Main Benefits", benefits: [["Private Discussion","Intimate wellness consultations create a respectful place to discuss sensitive concerns."],["Better Understanding","Your provider helps you understand available options and whether treatment may be appropriate."],["Provider Led Planning","Care is guided by your goals, anatomy, medical history, symptoms, and candidacy."],["Realistic Expectations","Your provider explains possible benefits, limitations, downtime, and when another evaluation may be needed."],["Referral Guidance","If medical evaluation is more appropriate, your provider can recommend a safer next step."]],
    candidatesTitle: "Ideal Candidates", candidatesCopy: "You may be a candidate for an intimate wellness consultation if you want to privately discuss feminine wellness concerns and learn whether treatment options may be appropriate for you.",
    candidates: ["Feminine wellness goals","Questions about vaginal tightening","Interest in non surgical options","Interest in private provider led care","Postpartum or age related concerns, when medically appropriate","Desire for discreet education before treatment","Good overall health","Realistic expectations","No active symptoms that require medical evaluation first"],
    expectTitle: "What Happens During An Intimate Wellness Consultation?", downtime: "Some consultations involve no treatment at all. If treatment is recommended, your provider will explain possible downtime, temporary effects, restrictions, risks, and aftercare before anything is performed.",
    steps: [["Private Goal Review","Your provider reviews your goals, concerns, medical history, medications, pregnancy or postpartum status when relevant, prior procedures, symptoms, comfort level, and expectations."],["Candidacy Screening","Your provider determines whether treatment may be appropriate or whether medical evaluation or referral should be considered first."],["Education and Options","You can ask questions and understand what options may or may not be appropriate."],["Treatment Planning","If treatment is recommended, your provider explains the plan, expected experience, aftercare, safety considerations, and realistic expectations."],["Next Step","Your consultation may lead to treatment, further evaluation, referral, or a different care path."]],
    focusEyebrow: "Treatment Focus Areas", focusTitle: "Intimate Wellness May Focus On", focusItems: ["Feminine wellness consultation","Vaginal tightening discussion","Tissue laxity concerns","Intimate confidence","Postpartum related changes, when medically appropriate","Age related tissue changes","Comfort and wellness goals","Medical review and candidacy screening"],
    comparisonTitle: "Intimate Wellness Compared To Other Treatment Categories", comparisons: [["Intimate Wellness vs Injectables","Injectables focus on facial aesthetics, expression lines, volume, contouring, and facial balancing. Intimate wellness focuses on private feminine wellness concerns and requires sensitive medical review."],["Intimate Wellness vs IV and Wellness","IV and wellness treatments focus on hydration support, nutrient replenishment, recovery planning, and wellness goals. Intimate wellness focuses on feminine wellness concerns and tissue support discussions."],["Intimate Wellness vs Regenerative Aesthetics","Regenerative aesthetics may focus on PRP, PRF, hair restoration, and collagen stimulation treatments for skin, hair, or aesthetic rejuvenation. Intimate wellness is focused on private feminine wellness concerns."],["Intimate Wellness vs Gynecologic Care","Gynecologic care is medical care for reproductive and pelvic health. Intimate wellness at Elite VitaMed is not a replacement for gynecologic care."]],
    resultsTitle: "Before And After Expectations", resultsCopy: "Intimate wellness outcomes vary based on the concern, treatment selected, anatomy, health history, tissue quality, provider recommendation, and individual response. The goal is not to promise a specific result. The goal is to provide private, provider led guidance and determine whether a treatment may support your personal goals in a safe and appropriate way.",
    safetyTitle: "Safety Considerations", safetyCopy: ["Intimate wellness treatments should only be performed after a thoughtful provider evaluation and medical history review.", "Intimate wellness treatments may not be appropriate for everyone. Candidacy depends on your medical history, symptoms, anatomy, pregnancy status, postpartum status, medications, prior procedures, active infections, and what is safest for you.", "If your concern involves pain, bleeding, infection signs, urinary symptoms, pelvic symptoms, new discharge, or new medical changes, your provider may recommend medical evaluation first."],
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, gynecologic evaluation, consultation, or provider evaluation. Final recommendations depend on your goals, medical history, symptoms, anatomy, treatment history, and what is appropriate for you.",
    providerTitle: "Private, Provider Led Intimate Wellness Care In New Hampshire", providerCopy: "Your intimate wellness consultation is guided by a Nurse Practitioner with a focus on privacy, safety, candidacy, and respectful treatment planning. Every recommendation begins with a thoughtful consultation because this area of care deserves discretion, clinical judgment, and a plan based on your individual needs.",
    localEyebrow: "Local Intimate Wellness", localTitle: "Intimate Wellness Consultations in New Hampshire", localCopy: "Elite VitaMed provides private intimate wellness consultations in New Hampshire for clients seeking provider led feminine wellness care, vaginal tightening discussions, and discreet treatment planning.",
    related: [["Feminine Wellness","#feminine-wellness"],["Vaginal Tightening","#vaginal-tightening"],["Full Treatment Assessment","#assessment"],["Contact Elite VitaMed","#contact"],["IV and Wellness","#iv-wellness"],["Regenerative Aesthetics","#regenerative-aesthetics"],["Skin and Tightening","#skin-tightening"]],
    consultationEyebrow: "Not Sure Where To Start?", consultationTitle: "Start With A Private Consultation", consultationCopy: "Intimate wellness concerns can feel personal, and you do not need to know exactly which treatment is right before reaching out.",
    faqTitle: "Intimate Wellness Questions", faqs: [["What is intimate wellness?","Intimate wellness is a private consultation based treatment category focused on feminine wellness concerns, tissue support goals, intimate confidence, and non surgical treatment discussions in appropriate candidates."],["What treatments are included in intimate wellness?","Elite VitaMed's Intimate Wellness category includes Feminine Wellness and Vaginal Tightening."],["Is intimate wellness private?","Yes. Intimate wellness consultations are designed to be discreet, respectful, and provider led."],["Is vaginal tightening right for everyone?","No. Vaginal tightening is not appropriate for everyone. Candidacy depends on anatomy, medical history, symptoms, goals, pregnancy status, postpartum status, and provider evaluation."],["Do I need a consultation first?","Yes. A consultation is important because intimate wellness concerns require medical history review, symptom screening, candidacy evaluation, and realistic expectation setting."],["What if I have pain or symptoms?","If you have pain, bleeding, infection symptoms, urinary symptoms, pelvic symptoms, or new unexplained changes, medical evaluation may be recommended before any aesthetic or wellness treatment is considered."],["Is this the same as gynecologic care?","No. Elite VitaMed's intimate wellness care does not replace gynecologic care. Medical symptoms should be evaluated by the appropriate medical provider."]],
    finalTitle: "Ready To Request A Private Intimate Wellness Consultation?", finalCopy: "If you want to discuss feminine wellness, vaginal tightening, or private treatment options in a respectful provider led setting, Elite VitaMed can help you understand the safest starting point."
  });
}

function feminineWellnessPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Private Feminine Wellness Consultations in New Hampshire", title: "Discreet, Respectful Care For Feminine Wellness Concerns",
    subheadline: "Feminine Wellness at Elite VitaMed provides a private, provider led space to discuss intimate wellness goals, confidence, tissue changes, and whether non surgical options may be appropriate for you.",
    supportingCopy: "Elite VitaMed offers private Feminine Wellness consultations in New Hampshire with a Nurse Practitioner. Your consultation is designed to help you understand your options, review your health history, discuss your goals, and determine whether treatment may be appropriate or whether medical evaluation should come first.",
    primaryCta: "Request A Private Consultation", secondaryCta: "Start Treatment Assessment", thirdCta: "Book Your Appointment", trustLine: "Private, provider led care with a Nurse Practitioner.", icon: "heart",
    introEyebrow: "What It Is", introTitle: "What Feminine Wellness Is", introCopy: [
      "Feminine Wellness is a private consultation based treatment area for clients who want to discuss intimate wellness concerns in a respectful, discreet, and provider led setting.",
      "This may include conversations around tissue changes, intimate confidence, postpartum changes, age related concerns, comfort, and whether non surgical treatment options may be appropriate.",
      "At Elite VitaMed, Feminine Wellness is never approached as a generic treatment. This area requires privacy, clinical judgment, careful screening, and realistic expectations."
    ],
    whoTitle: "Who Feminine Wellness Is For", whoCopy: "Feminine Wellness may be a fit for clients who want a private conversation about intimate wellness, confidence, and possible treatment options.",
    whoFor: ["Feminine wellness goals","Intimate confidence","Tissue support concerns","Postpartum changes, when medically appropriate","Age related changes","Questions about non surgical options","Vaginal tightening discussions","Comfort with treatment options","A private provider led consultation","A discreet place to ask questions before deciding what to do next"],
    candidacyNote: "If you are experiencing pain, bleeding, infection symptoms, new or unusual discharge, urinary symptoms, pelvic symptoms, or new unexplained changes, your provider may recommend medical evaluation before any aesthetic or wellness treatment is considered.",
    benefitsTitle: "Main Benefits", benefits: [["Private Support","A discreet place to discuss sensitive concerns."],["Treatment Clarity","A clearer understanding of available options and whether treatment may be appropriate."],["Provider Led Review","Your provider reviews candidacy, symptoms, history, goals, and safety considerations."],["Realistic Expectations","The consultation helps clarify what may be possible and what limitations exist."],["Referral Guidance","If medical evaluation is needed, your provider can recommend the safer next step."]],
    candidatesTitle: "Ideal Candidates", candidatesCopy: "You may be a candidate for a Feminine Wellness consultation if you want private, respectful guidance around intimate wellness concerns and want to understand whether non surgical treatment options may be appropriate.",
    candidates: ["Feminine wellness goals","Interest in private provider led care","Questions about intimate tissue changes","Interest in vaginal tightening discussions","Postpartum or age related concerns, when medically appropriate","Desire for discreet education before treatment","Good overall health","Realistic expectations","No active symptoms that require medical evaluation first"],
    expectTitle: "What To Expect", downtimeTitle: "Downtime", downtime: "Downtime depends on the treatment recommended, treatment area, technique, and your individual response. Some clients may experience temporary sensitivity, tenderness, redness, swelling, irritation, or mild discomfort depending on the treatment performed.",
    steps: [["Private Consultation","Your provider reviews your goals, concerns, medical history, medications, allergies, pregnancy or postpartum status when relevant, prior procedures, symptoms, comfort level, and expectations."],["Safety Review","Your provider determines whether treatment may be appropriate or whether medical evaluation should come first."],["Education","You can ask questions, share concerns at your comfort level, and learn what options may or may not fit your situation."],["Treatment Planning","If treatment is recommended, your provider explains the plan, expected experience, aftercare, safety considerations, and realistic expectations."],["Aftercare Guidance","You receive specific guidance, including any hygiene instructions, activity restrictions, or follow up recommendations based on your plan."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Feminine Wellness May Involve Discussion Around", focusItems: ["Private feminine wellness concerns","Intimate confidence","Tissue support goals","Vaginal tightening discussion","Postpartum related changes, when medically appropriate","Age related tissue changes","Comfort and wellness goals","Treatment candidacy","Medical review and referral guidance when needed"],
    comparisonTitle: "Feminine Wellness Compared To Similar Treatments", comparisons: [["Feminine Wellness vs Vaginal Tightening","Feminine Wellness is the broader consultation and treatment planning category. Vaginal Tightening is one possible treatment discussion within that category."],["Feminine Wellness vs Intimate Wellness","Intimate Wellness is the overall website category. Feminine Wellness is a specific page within that category focused on private consultation, education, and provider led guidance."],["Feminine Wellness vs Gynecologic Care","Gynecologic care is medical care for reproductive and pelvic health. Feminine Wellness at Elite VitaMed is not a replacement for gynecologic evaluation, diagnosis, or treatment."],["Feminine Wellness vs General Wellness","General wellness may focus on hydration, vitamins, lifestyle, energy, or overall support. Feminine Wellness focuses on private concerns related to intimate confidence, tissue support, and non surgical treatment discussions when appropriate."]],
    safetyTitle: "Safety Considerations", safetyCopy: ["Feminine Wellness treatments should only be considered after a thoughtful provider evaluation and medical history review.", "Treatment may not be appropriate for everyone. Candidacy depends on your medical history, symptoms, anatomy, pregnancy status, postpartum status, medications, prior procedures, active infections, and what is safest for you.", "Feminine Wellness at Elite VitaMed does not replace gynecologic care. If you have medical symptoms or concerns that require diagnosis or treatment, your provider may recommend evaluation with the appropriate medical professional."],
    resultsTitle: "Before And After Expectations", resultsCopy: "Feminine Wellness outcomes vary based on the concern, treatment selected, anatomy, health history, tissue quality, provider recommendation, and individual response. The goal is not to promise a specific result. The goal is to provide private, provider led guidance and determine whether a treatment may support your personal goals in a safe and appropriate way.",
    providerTitle: "Private, Provider Led Feminine Wellness Care In New Hampshire", providerCopy: "Your Feminine Wellness consultation is guided by a Nurse Practitioner with a focus on privacy, safety, candidacy, realistic expectations, and respectful treatment planning. Every recommendation begins with a thoughtful consultation because this area of care deserves discretion, clinical judgment, and a plan based on your individual needs.",
    localEyebrow: "Local Feminine Wellness", localTitle: "Feminine Wellness Consultations in New Hampshire", localCopy: "Elite VitaMed provides Feminine Wellness consultations in New Hampshire for clients seeking private, provider led intimate wellness care and discreet treatment planning.",
    related: [["Intimate Wellness","#intimate-wellness"],["Vaginal Tightening","#vaginal-tightening"],["Full Treatment Assessment","#assessment"],["Contact Elite VitaMed","#contact"],["IV and Wellness","#iv-wellness"],["Regenerative Aesthetics","#regenerative-aesthetics"],["Skin and Tightening","#skin-tightening"]],
    consultationEyebrow: "Not Sure Where To Start?", consultationTitle: "Request A Private Consultation", consultationCopy: "Feminine wellness concerns can feel personal, and you do not need to know exactly which treatment is right before reaching out.",
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, gynecologic evaluation, consultation, or provider evaluation. Final recommendations depend on your goals, medical history, symptoms, anatomy, treatment history, and what is appropriate for you.",
    faqTitle: "Feminine Wellness Questions", faqs: [["What is Feminine Wellness?","Feminine Wellness is a private consultation based treatment area focused on intimate wellness concerns, tissue support goals, confidence, and education around non surgical treatment options in appropriate candidates."],["Is Feminine Wellness private?","Yes. Feminine Wellness consultations are designed to be discreet, respectful, and provider led."],["What concerns can I discuss?","You can discuss feminine wellness goals, tissue support concerns, intimate confidence, postpartum changes when medically appropriate, age related changes, questions about vaginal tightening, and whether treatment options may be appropriate."],["Is this the same as gynecologic care?","No. Feminine Wellness at Elite VitaMed does not replace gynecologic care."],["Do I need a consultation before treatment?","Yes. A consultation is important because Feminine Wellness concerns require medical history review, symptom screening, candidacy evaluation, and realistic expectation setting."],["What if I have pain or unusual symptoms?","If you have pain, bleeding, infection symptoms, urinary symptoms, pelvic symptoms, or new unexplained changes, medical evaluation may be recommended before any aesthetic or wellness treatment is considered."],["Is vaginal tightening part of Feminine Wellness?","Vaginal Tightening may be discussed as part of Feminine Wellness when appropriate. Your provider will determine whether it is suitable based on your goals, anatomy, health history, symptoms, and candidacy."]],
    finalTitle: "Ready To Request A Private Feminine Wellness Consultation?", finalCopy: "If you want to discuss feminine wellness, intimate confidence, tissue support concerns, or possible treatment options in a respectful provider led setting, Elite VitaMed can help you understand the safest starting point."
  });
}

function vaginalTighteningPage() {
  return detailedTreatmentCategoryPage({
    eyebrow: "Private Vaginal Tightening Consultations in New Hampshire", title: "Discreet, Provider Led Support For Feminine Wellness and Tissue Concerns",
    subheadline: "Vaginal Tightening at Elite VitaMed is a private consultation based treatment option for clients who want to discuss intimate tissue changes, feminine wellness goals, and whether non surgical options may be appropriate.",
    supportingCopy: "Elite VitaMed offers private Vaginal Tightening consultations in New Hampshire with a Nurse Practitioner. Your consultation is designed to review your goals, anatomy, medical history, symptoms, treatment history, and candidacy before determining whether treatment may be appropriate or whether medical evaluation should come first.",
    primaryCta: "Request A Private Consultation", secondaryCta: "Start Treatment Assessment", thirdCta: "Book Your Appointment", trustLine: "Private, provider led care with a Nurse Practitioner.", icon: "heart",
    introEyebrow: "What It Is", introTitle: "What Vaginal Tightening Is", introCopy: [
      "Vaginal Tightening is a private intimate wellness treatment discussion focused on concerns related to tissue laxity, intimate confidence, and feminine wellness goals.",
      "At Elite VitaMed, Vaginal Tightening is not approached as a generic treatment or a quick aesthetic add on. This is a sensitive area of care that requires privacy, careful screening, medical history review, and realistic expectations.",
      "Your provider will help determine whether Vaginal Tightening may be appropriate, whether another treatment direction should be considered, or whether medical evaluation should happen before any treatment is discussed."
    ],
    whoTitle: "Who Vaginal Tightening Is For", whoCopy: "Vaginal Tightening may be a fit for clients who want a private, respectful consultation around intimate tissue concerns and feminine wellness goals.",
    whoFor: ["Tissue laxity concerns","Postpartum changes, when medically appropriate","Age related intimate tissue changes","Intimate confidence","Questions about non surgical tightening options","Private provider led guidance","Understanding candidacy before treatment","A discreet consultation before making a decision"],
    candidacyNote: "Vaginal Tightening may not be appropriate for every client. If you are experiencing pain, bleeding, infection symptoms, new or unusual discharge, urinary symptoms, pelvic symptoms, recent surgery concerns, or any new unexplained changes, your provider may recommend medical evaluation first.",
    benefitsTitle: "Main Benefits", benefits: [["Private Discussion","A consultation may help support private discussion of sensitive concerns."],["Treatment Education","Your provider explains available options, limitations, and whether treatment may be appropriate."],["Provider Led Candidacy Review","Your anatomy, goals, symptoms, history, and treatment history are reviewed before recommendations are made."],["Clearer Expectations","You receive realistic guidance before moving forward."],["Referral Guidance","If medical evaluation is needed, your provider can recommend a safer starting point."]],
    candidatesTitle: "Ideal Candidates", candidatesCopy: "You may be a candidate for a Vaginal Tightening consultation if you want private guidance around tissue support concerns and want to understand whether non surgical treatment options may be appropriate.",
    candidates: ["Tissue laxity concerns","Interest in feminine wellness support","Interest in private provider led care","Postpartum or age related concerns, when medically appropriate","Questions about non surgical options","Desire for discreet education before treatment","Good overall health","Realistic expectations","No active symptoms that require medical evaluation first"],
    expectTitle: "What To Expect", downtimeTitle: "Downtime", downtime: "Downtime depends on the treatment recommended, treatment area, technique, and your individual response. Some clients may experience temporary sensitivity, tenderness, redness, swelling, irritation, or mild discomfort depending on the treatment performed.",
    steps: [["Private Consultation","Your provider reviews your goals, concerns, medical history, medications, allergies, pregnancy or postpartum status when relevant, prior procedures, symptoms, comfort level, and expectations."],["Candidacy Screening","Your provider determines whether treatment may be appropriate or whether medical evaluation should be considered first."],["Education","You can ask questions, share only what you are comfortable sharing, and understand what options may or may not be appropriate."],["Treatment Planning","If treatment is recommended, your provider explains the treatment plan, expected experience, aftercare, safety considerations, and realistic expectations."],["Aftercare Guidance","Your provider explains hygiene instructions, activity restrictions, follow up guidance, and when to reach out with concerns."]],
    focusEyebrow: "Treatment Areas", focusTitle: "Vaginal Tightening May Involve Discussion Around", focusItems: ["Tissue laxity concerns","Feminine wellness goals","Intimate confidence","Postpartum related changes, when medically appropriate","Age related tissue changes","Private treatment planning","Medical review and candidacy screening","Referral guidance when needed"],
    comparisonTitle: "Vaginal Tightening Compared To Similar Treatments", comparisons: [["Vaginal Tightening vs Feminine Wellness","Feminine Wellness is the broader consultation and treatment planning page. Vaginal Tightening is a more specific treatment discussion within that category."],["Vaginal Tightening vs Intimate Wellness","Intimate Wellness is the overall website category. Vaginal Tightening is one specific treatment page within that category, focused on tissue laxity concerns and non surgical tightening discussions in appropriate candidates."],["Vaginal Tightening vs Gynecologic Care","Gynecologic care is medical care for reproductive and pelvic health. Vaginal Tightening at Elite VitaMed is not a replacement for gynecologic evaluation, diagnosis, or treatment."],["Vaginal Tightening vs Pelvic Floor Therapy","Pelvic floor therapy may be recommended for certain pelvic floor concerns, muscle function, discomfort, or postpartum recovery needs. Vaginal Tightening is a different type of intimate wellness discussion."]],
    safetyTitle: "Safety Considerations", safetyCopy: ["Vaginal Tightening should only be considered after a thoughtful provider evaluation and medical history review.", "Treatment may not be appropriate for everyone. Candidacy depends on your medical history, symptoms, anatomy, pregnancy status, postpartum status, medications, prior procedures, active infections, and what is safest for you.", "Elite VitaMed does not position Vaginal Tightening as a treatment for pain, infection, urinary symptoms, pelvic symptoms, or medical conditions. If you have symptoms, medical evaluation may be recommended before any aesthetic or wellness treatment is considered."],
    resultsTitle: "Before And After Expectations", resultsCopy: "Vaginal Tightening outcomes vary based on the concern, treatment selected, anatomy, health history, tissue quality, provider recommendation, and individual response. The goal is not to promise a specific result. The goal is to provide private, provider led guidance and determine whether treatment may support your personal goals in a safe and appropriate way.",
    providerTitle: "Private, Provider Led Vaginal Tightening Consultations In New Hampshire", providerCopy: "Your Vaginal Tightening consultation is guided by a Nurse Practitioner with a focus on privacy, safety, candidacy, realistic expectations, and respectful treatment planning. Every recommendation begins with a thoughtful consultation because this area of care deserves discretion, clinical judgment, and a plan based on your individual needs.",
    localEyebrow: "Local Vaginal Tightening", localTitle: "Vaginal Tightening Consultations in New Hampshire", localCopy: "Elite VitaMed provides Vaginal Tightening consultations in New Hampshire for clients seeking private, provider led intimate wellness care and discreet treatment planning.",
    related: [["Intimate Wellness","#intimate-wellness"],["Feminine Wellness","#feminine-wellness"],["Full Treatment Assessment","#assessment"],["Contact Elite VitaMed","#contact"],["IV and Wellness","#iv-wellness"],["Regenerative Aesthetics","#regenerative-aesthetics"],["Skin and Tightening","#skin-tightening"]],
    consultationEyebrow: "Not Sure If Vaginal Tightening Is Right For You?", consultationTitle: "Request A Private Consultation", consultationCopy: "Vaginal Tightening is a private and personal decision, and the right next step depends on your anatomy, health history, goals, symptoms, and candidacy.",
    disclaimer: "This page is for educational purposes only and does not replace medical advice, diagnosis, gynecologic evaluation, consultation, or provider evaluation. Final recommendations depend on your goals, medical history, symptoms, anatomy, treatment history, and what is appropriate for you.",
    faqTitle: "Vaginal Tightening Questions", faqs: [["What is Vaginal Tightening?","Vaginal Tightening is a private consultation based intimate wellness treatment discussion focused on tissue laxity concerns, feminine wellness goals, and whether non surgical treatment options may be appropriate."],["Is Vaginal Tightening private?","Yes. Vaginal Tightening consultations are designed to be discreet, respectful, and provider led."],["Is Vaginal Tightening right for everyone?","No. Candidacy depends on anatomy, symptoms, goals, medical history, pregnancy status, postpartum status, prior procedures, and provider evaluation."],["Do I need a consultation first?","Yes. Intimate wellness concerns require medical history review, symptom screening, candidacy evaluation, and realistic expectation setting."],["Can Vaginal Tightening be discussed after childbirth?","Vaginal Tightening may be discussed for postpartum related concerns when medically appropriate. Provider clearance or additional evaluation may be recommended first."],["Can Vaginal Tightening treat pain or medical symptoms?","No. Elite VitaMed does not position Vaginal Tightening as a treatment for pain, infection, urinary symptoms, pelvic symptoms, or medical conditions."],["Is this the same as gynecologic care?","No. Vaginal Tightening at Elite VitaMed does not replace gynecologic care."],["What if I am not sure whether this is the right place to start?","You can request a private consultation. Your provider can help determine whether this is appropriate or whether another type of evaluation should come first."]],
    finalTitle: "Ready To Request A Private Vaginal Tightening Consultation?", finalCopy: "If you want to discuss tissue laxity concerns, feminine wellness, intimate confidence, or possible treatment options in a respectful provider led setting, Elite VitaMed can help you understand the safest starting point."
  });
}

function injectablesAssessmentTail() {
  const disclaimer = "This tool provides results that are generally close to what a qualified practitioner may recommend based on your responses, including an estimate of the treatments you are most likely to receive. It does not provide medical advice, a diagnosis, or a final treatment plan. A comprehensive facial assessment is still performed during your appointment, and final recommendations, eligibility, and dosage may vary based on your anatomy, goals, and clinical findings.";
  const factors = ["Your facial structure", "Your natural movement", "Your treatment goals", "Your comfort level", "Your prior treatment history", "Your long term aesthetic plan", "Your safety and candidacy"];
  const concerns = ["Lines and wrinkles", "Forehead lines", "Frown lines", "Crow's feet", "Smile lines", "Marionette lines", "Thin lips", "Flat cheeks", "Weak chin profile", "Soft jawline definition", "Jowls", "Under eye hollowness", "Facial asymmetry", "Loss of facial volume", "Skin laxity", "Tired looking face"];
  const faq = [
    ["Is this assessment a medical recommendation?", disclaimer],
    ["What if I do not know whether I need Botox or filler?", "That is exactly what the assessment is for. Many clients know what they want to improve but are unsure which treatment fits."],
    ["Can I still book if I already know what treatment I want?", "Yes. If you already know what you want, you can book your appointment directly. Your provider will still confirm whether that treatment is appropriate during your evaluation."],
    ["Will I be told exactly what I need?", "You may receive a suggested starting point based on your answers, but your provider will make final recommendations after reviewing your anatomy, goals, and medical history."],
    ["What treatments can the assessment recommend?", "The assessment may guide you toward Botox or neurotoxins, dermal fillers, Restylane, Radiesse, Sculptra, PDO threads, facial balancing, under eye rejuvenation, jawline contouring, lip filler, cheek filler, chin filler, or a non surgical face lift consultation."],
    ["Is this only for people who have had injectables before?", "No. The assessment is helpful for both first time clients and clients who have had injectables before but want a better plan."],
    ["Can I request a phone consultation instead?", "Yes. If you would rather talk through your options before booking, you can request a phone consultation."]
  ];
  const startAssessment = "#injectables-assessment/assessment";
  return `
    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 sm:px-10 lg:grid-cols-[1fr_auto]"><div><p class="eyebrow">Start Your Injectables Assessment</p><h2 class="mt-3 font-serif text-4xl font-semibold">Get A Clearer Idea Of Where To Begin Before Booking</h2><p class="mt-3 max-w-2xl leading-7 text-white/70">Take a few minutes to map your goals to treatment directions worth discussing with your provider.</p><p class="mt-3 max-w-2xl text-xs leading-6 text-white/55">${disclaimer}</p></div><div class="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href="${startAssessment}" class="btn btn-gold justify-center">${icon("sparkle")} Start Injectable Assessment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn btn-ghost justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">Why Start With An Assessment?</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Avoid Guessing Between Treatments That Work Differently</h2><p class="mt-4 leading-8 text-ink/70">Most people know what they want to improve, but they do not always know which treatment actually fits that concern.</p><p class="mt-4 text-sm leading-7 text-ink/60">The assessment helps you avoid guessing and gives you a more informed path into your consultation.</p></div><div class="rounded-[1.5rem] border border-navy/10 bg-ivory p-6 sm:p-8"><p class="text-sm font-bold uppercase tracking-[.12em] text-soft-gold/90">For Example</p><p class="mt-3 leading-8 text-ink/70">Under eye tiredness may relate to hollowing, cheek support, skin quality, pigmentation, or anatomy. Jawline concerns may involve filler, Radiesse, chin support, Botox, PDO threads, or a broader facial balancing plan.</p></div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl items-center gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">Provider Led Care</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Injectable Guidance From A Nurse Practitioner and Certified Injector</h2><p class="mt-4 leading-8 text-ink/70">Elite VitaMed provides premium injectable treatments in New Hampshire with a provider led approach. Your care is performed by a Nurse Practitioner and certified injector who evaluates your goals, facial anatomy, treatment history, and what is appropriate for you.</p><p class="mt-4 text-sm leading-7 text-ink/64">The goal is not to chase trends or overfill the face. The goal is to help you look refreshed, balanced, and confident in a way that still feels like you.</p><div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="#about" class="btn btn-navy justify-center">${icon("users")} Meet Tiana</a><a href="${PLACEHOLDER_BOOKING_URL}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("calendar")} Book A Consultation</a></div></div><div>${imageBox("tiana", "min-h-[22rem] rounded-[1.5rem] shadow-luxe")}</div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto grid max-w-7xl gap-9 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"><div><p class="eyebrow">A More Thoughtful Way To Start</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Recommendations Should Be Personal, Precise, and Guided By Anatomy</h2><p class="mt-4 leading-8 text-ink/70">At Elite VitaMed, every recommendation is based on provider evaluation, not a generic treatment menu. Your plan considers:</p></div><div class="flex flex-wrap content-start gap-2">${factors.map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>

    <section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Google Reviews</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2><p class="mt-4 leading-8 text-ink/68">Clients trust Elite VitaMed for personalized aesthetic and wellness care performed by a Nurse Practitioner and certified injector, with the privacy and convenience of concierge appointments.</p><div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div><p class="mt-2 text-sm font-bold text-navy">Rated 5.0 stars on Google · 100+ reviews</p></div><div class="mt-9 grid gap-5 md:grid-cols-2">${reviewCards(2)}</div><div class="mt-8 text-center"><a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Reviews</a></div></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Common Concerns</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">This Assessment Can Help Sort Through Common Injectable Concerns</h2><p class="mt-4 leading-8 text-ink/68">You do not need to know the treatment name before reaching out. You only need to know what you want help improving.</p></div><div class="mt-8 flex flex-wrap justify-center gap-2">${concerns.map((x) => `<span class="treatment-best-chip">${x}</span>`).join("")}</div></div></section>

    <section class="section-shell bg-ivory"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Financing Available</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Start Your Treatment Plan Now, Pay Over Time</h2><p class="mt-4 max-w-4xl leading-8 text-ink/70">Elite VitaMed offers financing through Cherry, making it easier for eligible clients to move forward with aesthetic, wellness, and treatment planning options.</p><p class="mt-3 max-w-4xl text-sm leading-7 text-ink/64">With Cherry financing, eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_CHERRY_URL}" target="_blank" rel="noopener" data-integration-placeholder="cherry" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a><a href="${startAssessment}" class="btn btn-gold justify-center">${icon("sparkle")} Start Injectable Assessment</a></div><p class="mt-5 text-xs leading-6 text-ink/58">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p></div></section>

    <section class="section-shell bg-white"><div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div class="text-center"><p class="eyebrow">FAQ</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Injectables Assessment Questions</h2></div><div class="mt-8">${faqList(faq)}</div></div></section>

    <section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Find Your Best Injectable Starting Point?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">You do not have to guess between Botox, filler, Sculptra, Radiesse, PDO threads, or facial balancing. Start the assessment and get a clearer path toward the options that may fit your goals.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${startAssessment}" class="btn btn-gold justify-center">${icon("sparkle")} Start Injectable Assessment</a><a href="${PLACEHOLDER_BOOKING_URL}" class="btn btn-ghost justify-center">${icon("calendar")} Book Your Appointment</a><a href="#contact/contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>
  `;
}

function bookingEmbed(menuUrl, menuId) {
  return `<iframe src="${menuUrl}" title="Book an appointment with Elite VitaMed" style="width:100%;border:none;overflow:hidden;min-height:78vh;" scrolling="no" id="${menuId}"></iframe>`;
}

function bookPage() {
  const seg = (location.hash.split("/")[1] || "").toLowerCase();
  const menuKey = BOOKING_MENUS[seg] ? seg : "all";
  const headings = {
    all: "Book Your Appointment",
    injectables: "Book An Injectable Appointment",
    iv: "Book IV Therapy and Wellness",
    skin: "Book A Skin Treatment"
  };
  const tabs = [["all", "All Services"], ["injectables", "Injectables"], ["iv", "IV and Wellness"], ["skin", "Skin Rejuvenation"]];
  return `
    <section class="section-shell bg-ivory">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Book Online</p>
          <h1 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">${headings[menuKey]}</h1>
          <p class="mt-4 leading-8 text-ink/68">Choose a service and a time that works for you. Care is performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="mt-7 flex flex-wrap justify-center gap-2">
          ${tabs.map(([key, label]) => `<a href="#book${key === "all" ? "" : "/" + key}" class="rounded-full border px-4 py-2 text-sm font-bold ${key === menuKey ? "border-navy/20 bg-navy text-white" : "border-navy/15 bg-white text-navy"}">${label}</a>`).join("")}
        </div>
        <div class="mt-7 overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white p-2 shadow-luxe sm:p-3">${bookingEmbed(BOOKING_MENUS[menuKey], "ghl-book-" + menuKey)}</div>
        <p class="mt-6 text-center text-xs leading-6 text-ink/55">A consultation and provider evaluation are required before any treatment. Individual results vary.</p>
      </div>
    </section>
  `;
}

// Specials / promotions band. SAMPLE offers — replace with confirmed promos before launch.
function specialsSection(theme) {
  const dark = theme !== "light";
  const specials = [
    {
      badge: "New Client Special",
      title: "Injectable New Client Special",
      items: [
        ["Botox", "$9.99 / unit", "Unlimited units · 40-unit minimum"],
        ["Dermal Fillers", "$499", "Per 1ml syringe"],
        ["PDO Threads", "$500", "Per area · full face or neck"]
      ],
      note: "New client special. $50 deposit required to book.",
      cta: "Book Injectables",
      href: "#book/injectables"
    },
    {
      badge: "Limited Time",
      title: "IV Drip Therapy Special",
      items: [
        ["Any IV Drip", "$50 OFF", "New client special"],
        ["IV Drip Packages", "20% OFF", "Save on a package plan"]
      ],
      note: "$50 deposit required to book. Ask about add-on vitamin boosts.",
      cta: "Book IV Therapy",
      href: "#book/iv"
    }
  ];
  const wrap = dark ? "bg-navy-deep text-white" : "bg-mist text-navy";
  const sub = dark ? "text-white/70" : "text-ink/68";
  const card = dark ? "border-champagne/25 bg-white/5" : "border-navy/10 bg-white shadow-luxe";
  const cardTitle = dark ? "text-white" : "text-navy";
  const cardDetail = dark ? "text-white/55" : "text-ink/55";
  const divide = dark ? "divide-white/10" : "divide-navy/10";
  const price = dark ? "text-champagne" : "text-navy";
  const fine = dark ? "text-white/45" : "text-ink/50";
  return `
    <section class="section-shell ${wrap}" data-section="specials">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Current Specials</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Specials and Promotions</h2>
          <p class="mt-4 leading-8 ${sub}">New client injectable pricing and IV drip savings, all delivered with provider led care. Ask your provider which offer fits your goals.</p>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          ${specials.map((s) => `
            <article class="flex flex-col rounded-[1.5rem] border ${card} p-7 sm:p-8">
              <span class="self-start rounded-full bg-soft-gold px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-navy">${s.badge}</span>
              <h3 class="mt-4 font-serif text-2xl font-semibold ${cardTitle}">${s.title}</h3>
              <ul class="mt-5 divide-y ${divide}">
                ${s.items.map(([name, amount, detail]) => `
                  <li class="flex items-baseline justify-between gap-4 py-3">
                    <div>
                      <p class="font-semibold ${cardTitle}">${name}</p>
                      ${detail ? `<p class="mt-0.5 text-xs leading-5 ${cardDetail}">${detail}</p>` : ""}
                    </div>
                    <p class="shrink-0 font-serif text-2xl font-semibold ${price}">${amount}</p>
                  </li>
                `).join("")}
              </ul>
              <p class="mt-4 text-xs leading-6 ${fine}">${s.note}</p>
              <a href="${s.href}" class="btn btn-gold mt-6 justify-center">${icon("calendar")} ${s.cta}</a>
            </article>
          `).join("")}
        </div>
        <p class="mt-7 text-center text-xs leading-6 ${fine}">Offers are for new clients and are subject to provider evaluation and may change. Individual results vary.</p>
      </div>
    </section>
  `;
}

const pages = {
  home: () => `
    ${homeHero()}
    ${homeServices()}
    ${specialsSection("dark")}
    ${homeFinancing()}
    ${homeAssessment()}
    ${homeInjectables()}
    ${homeIvWellness()}
    ${homeConcierge()}
    ${homeTiana()}
    ${homeResults()}
    ${homeReviews()}
    ${homeMemberships()}
    ${homeFaq()}
    ${homeFinalCta()}
  `,

  about: aboutPage,

  services: () => `
    ${servicesHero()}
    ${servicesIntro()}
    ${servicesCategories()}
    ${servicesProviderCare()}
    ${specialsSection("light")}
    ${servicesNextSteps()}
    ${homeFinancing()}
    ${servicesFaq()}
    ${servicesFinalCta()}
  `,

  injectables: injectablesPage,

  "botox-neurotoxins": botoxPage,

  "dermal-fillers": dermalFillersPage,

  "radiesse-fillers": radiesseFillersPage,

  "restylane-fillers": restylaneFillersPage,

  "jawline-contouring": jawlineContouringPage,

  "under-eye-rejuvenation": underEyeRejuvenationPage,

  sculptra: sculptraPage,

  "facial-balancing": facialBalancingPage,

  "non-surgical-face-lift": nonSurgicalFaceLiftPage,

  "pdo-threads": pdoThreadsPage,

  "regenerative-aesthetics": regenerativeAestheticsPage,

  "prp-prf": prpPrfPage,

  "hair-restoration": hairRestorationPage,

  "collagen-stimulation": collagenStimulationPage,

  "skin-tightening": skinTighteningPage,

  breeze: breezePage,

  wondertouch: wondertouchPage,

  "ultimate-glow-lift": ultimateGlowLiftPage,

  "facial-contouring": facialContouringSkinPage,

  "microneedling-stem-cells": microneedlingStemCellsPage,

  "chemical-peels": chemicalPeelsPage,

  "iv-wellness": ivWellnessPage,

  "iv-drips": ivDripsPage,

  "intimate-wellness": intimateWellnessPage,

  "feminine-wellness": feminineWellnessPage,

  "vaginal-tightening": vaginalTighteningPage,

  assessment: assessmentPage,

  memberships: membershipsPage,

  results: resultsPage,

  faq: faqPage,

  book: bookPage,

  "injectables-assessment": () => (window.INJECTABLES_ASSESSMENT_HTML || "") + injectablesAssessmentTail(),

  contact: () => `${contactHero()}${contactOptions()}${contactForm()}${contactLocation()}${contactExpect()}${contactReasons()}${contactProviderCare()}${contactTreatmentCategories()}${contactPrivateConsult()}${contactReviews()}${contactFaq()}${contactFinalCta()}`
};

function render() {
  const rawPage = (location.hash || "#home").replace("#", "");
  const [page, sectionTarget] = rawPage.split("/");
  const app = document.querySelector("#app");
  const renderPage = pages[page] || pages.home;
  destroyHeroParticles();
  destroyPageMotion();
  app.innerHTML = renderPage();
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${page}`);
  });
  const pageMeta = {
    injectables: {
      title: "Injectables in New Hampshire | Botox, Fillers, Sculptra and Facial Balancing",
      description: "Elite VitaMed offers mobile injectable treatments in New Hampshire, including Botox or neurotoxins, dermal fillers, Sculptra, Radiesse, PDO threads, and facial balancing, performed by a Nurse Practitioner and certified injector."
    },
    "regenerative-aesthetics": {
      title: "Regenerative Aesthetics in New Hampshire | PRP, PRF, Hair Restoration and Skin Rejuvenation",
      description: "Elite VitaMed offers regenerative aesthetics in New Hampshire, including PRP, PRF, hair restoration, skin rejuvenation, and collagen support treatments performed with provider led care."
    },
    "prp-prf": {
      title: "PRP and PRF in New Hampshire | Elite VitaMed",
      description: "PRP and PRF treatments in New Hampshire for skin rejuvenation, under eye support, collagen stimulation, and hair restoration planning. Provider led care by a Nurse Practitioner and certified injector."
    },
    "hair-restoration": {
      title: "Hair Restoration in New Hampshire | Elite VitaMed",
      description: "Hair restoration in New Hampshire using provider led regenerative treatment planning for thinning hair, shedding concerns, and scalp support. Performed by a Nurse Practitioner and certified injector."
    },
    "collagen-stimulation": {
      title: "Collagen Stimulation Treatments in New Hampshire | Elite VitaMed",
      description: "Collagen stimulation treatments in New Hampshire for skin quality, firmness, texture, and natural looking rejuvenation. Provider led care by a Nurse Practitioner and certified injector."
    },
    "skin-tightening": {
      title: "Skin and Tightening Treatments in New Hampshire | Breeze, WonderTouch, Chemical Peels and Microneedling",
      description: "Elite VitaMed offers skin and tightening treatments in New Hampshire, including Breeze, WonderTouch, Ultimate Glow & Lift, chemical peels, facial contouring, and microneedling with stem cells."
    },
    breeze: {
      title: "Breeze Treatment in New Hampshire | Elite VitaMed",
      description: "Breeze treatment in New Hampshire for clients interested in refreshed skin, smoother texture, glow support, and provider led skin rejuvenation planning."
    },
    wondertouch: {
      title: "WonderTouch in New Hampshire | Elite VitaMed",
      description: "WonderTouch treatment in New Hampshire for skin tightening support, facial contouring, texture, firmness, and non surgical rejuvenation planning."
    },
    "ultimate-glow-lift": {
      title: "Ultimate Glow & Lift in New Hampshire | Elite VitaMed",
      description: "Ultimate Glow & Lift in New Hampshire combines Breeze and WonderTouch for skin refresh, firmness support, glow, and non surgical contouring planning."
    },
    "facial-contouring": {
      title: "Facial Contouring in New Hampshire | Elite VitaMed",
      description: "Facial contouring in New Hampshire for clients who want more definition, balance, and a refreshed appearance through provider led aesthetic treatment planning."
    },
    "microneedling-stem-cells": {
      title: "Microneedling with Stem Cells in New Hampshire | Elite VitaMed",
      description: "Microneedling with stem cells in New Hampshire for skin texture, fine lines, collagen support, acne scarring support, and provider led skin rejuvenation planning."
    },
    "chemical-peels": {
      title: "Chemical Peels in New Hampshire | Elite VitaMed",
      description: "Chemical peels in New Hampshire for smoother texture, brighter looking skin, uneven tone, fine lines, and skin renewal planning. Provider led care by a Nurse Practitioner and certified injector."
    },
    "iv-wellness": {
      title: "IV and Wellness Treatments in New Hampshire | Elite VitaMed",
      description: "Explore IV and wellness treatments in New Hampshire, including Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, and Vitamin Injections."
    },
    "intimate-wellness": {
      title: "Intimate Wellness in New Hampshire | Feminine Wellness and Private Provider Led Care",
      description: "Elite VitaMed offers intimate wellness consultations in New Hampshire with private, provider led care focused on confidence, comfort, education, and personalized treatment planning."
    },
    "feminine-wellness": {
      title: "Feminine Wellness in New Hampshire | Elite VitaMed",
      description: "Private feminine wellness consultations in New Hampshire for clients who want discreet, provider led guidance around intimate wellness, confidence, and treatment options."
    },
    "vaginal-tightening": {
      title: "Vaginal Tightening in New Hampshire | Elite VitaMed",
      description: "Private vaginal tightening consultations in New Hampshire for clients who want discreet, provider led guidance around feminine wellness, tissue support, and treatment options."
    },
    "botox-neurotoxins": {
      title: "Botox and Neurotoxin Treatments in New Hampshire | Elite VitaMed",
      description: "Explore Botox and neurotoxin treatments in New Hampshire with Elite VitaMed. Learn about common treatment areas, candidacy, aftercare, and provider guided planning."
    },
    "dermal-fillers": {
      title: "Dermal Fillers in New Hampshire | Radiesse, Restylane, Jawline and Under Eye Filler",
      description: "Elite VitaMed offers mobile dermal fillers in New Hampshire, including Radiesse fillers, Restylane fillers, jawline contouring, and under eye rejuvenation, performed by a Nurse Practitioner and certified injector."
    },
    "radiesse-fillers": {
      title: "Radiesse Fillers in New Hampshire | Elite VitaMed",
      description: "Radiesse fillers in New Hampshire for facial contouring, volume support, and collagen stimulation planning. Provider led injectable care by a Nurse Practitioner and certified injector."
    },
    "restylane-fillers": {
      title: "Restylane Fillers in New Hampshire | Elite VitaMed",
      description: "Restylane fillers in New Hampshire for lips, facial volume, contouring, smoothing, and natural looking facial balancing. Provider led injectable care by a Nurse Practitioner and certified injector."
    },
    "jawline-contouring": {
      title: "Jawline Contouring in New Hampshire | Elite VitaMed",
      description: "Jawline contouring in New Hampshire for clients who want a more defined, balanced, and refreshed lower face. Provider led injectable care by a Nurse Practitioner and certified injector."
    },
    "under-eye-rejuvenation": {
      title: "Under Eye Rejuvenation in New Hampshire | Elite VitaMed",
      description: "Under eye rejuvenation in New Hampshire for tired looking eyes, hollowness, shadows, and facial balance. Provider led aesthetic care by a Nurse Practitioner and certified injector."
    },
    sculptra: {
      title: "Sculptra in New Hampshire | Collagen Stimulator and Facial Rejuvenation",
      description: "Elite VitaMed offers Sculptra in New Hampshire for clients interested in gradual collagen support, natural looking facial rejuvenation, and provider led injectable treatment planning."
    },
    "facial-balancing": {
      title: "Facial Balancing in New Hampshire | Fillers, Botox and Full Face Rejuvenation",
      description: "Elite VitaMed offers facial balancing in New Hampshire using provider led injectable treatment planning, including fillers, Botox or neurotoxins, Sculptra, Radiesse, and personalized consultation."
    },
    "non-surgical-face-lift": {
      title: "Non Surgical Face Lift in New Hampshire | Fillers, Threads and Facial Rejuvenation",
      description: "Elite VitaMed offers non surgical face lift consultations in New Hampshire using provider led treatment planning with fillers, Botox or neurotoxins, PDO threads, Sculptra, Radiesse, and skin support options."
    },
    "pdo-threads": {
      title: "PDO Threads in New Hampshire | Elite VitaMed",
      description: "PDO thread treatments in New Hampshire for facial lifting, jawline definition, brow support, neck rejuvenation, and collagen support. Provider led aesthetic care by a Nurse Practitioner and certified injector."
    },
    "iv-drips": {
      title: "IV Drip Therapy in New Hampshire | Elite VitaMed",
      description: "IV drip therapy in New Hampshire for Hydration & Recovery Drip, Energy & Performance Drip, Detox & Cleanse Drip, Beauty Glow Drip, Metabolism & Weight Management Drip, Immunity Boost Drip, Myers' Cocktail, NAD+ Therapy, and Vitamin Injections."
    }
  };
  const defaultMeta = "Premium mobile concierge injectables, IV therapy, and wellness care in New Hampshire.";
  document.title = pageMeta[page]?.title || `${page.charAt(0).toUpperCase() + page.slice(1)} | Elite VitaMed Aesthetics`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", pageMeta[page]?.description || defaultMeta);
  const kickerTitle = document.getElementById("header-kicker-title");
  if (kickerTitle) kickerTitle.textContent = headerKickerFor(page);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  if (HERO_PARTICLES_ENABLED) {
    heroParticlesTimer = window.setTimeout(() => {
      heroParticlesTimer = undefined;
      initHeroParticles();
    }, 40);
  }
  setupContactPage();
  if (page === "injectables-assessment") window.setupInjectablesAssessment?.();
  setupFaqCategoryNav();
  setupNeurotoxinMap();
  setupDermalFillerMap();
  setupFacialPlanningMap();
  setupNonSurgicalLiftMap();
  setupPdoThreadMap();
  setupPageMotion();
  if (sectionTarget) {
    window.setTimeout(() => {
      document.getElementById(sectionTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }
}

function setupNeurotoxinMap() {
  const info = document.querySelector("[data-neuro-info]");
  if (!info) return;

  const markers = [...document.querySelectorAll("[data-neuro-area]")];
  const zones = [...document.querySelectorAll("[data-map-zone]")];
  const fields = {
    category: info.querySelector("[data-neuro-category]"),
    label: info.querySelector("[data-neuro-label]"),
    description: info.querySelector("[data-neuro-description]"),
    details: info.querySelector("[data-neuro-details]"),
    categoryDetail: info.querySelector("[data-neuro-category-detail]"),
    concern: info.querySelector("[data-neuro-concern]"),
    estimatedUnits: info.querySelector("[data-neuro-estimated-units]"),
    bestFor: info.querySelector("[data-neuro-best-for]"),
    note: info.querySelector("[data-neuro-note]")
  };

  function selectArea(id) {
    const area = neurotoxinAreas.find((item) => item.id === id);
    if (!area) return;
    markers.forEach((marker) => {
      marker.classList.toggle("is-selected", marker.dataset.neuroArea === id);
      marker.setAttribute("aria-pressed", marker.dataset.neuroArea === id ? "true" : "false");
    });
    zones.forEach((zone) => zone.classList.toggle("is-selected", zone.dataset.mapZone === id));
    fields.category.textContent = area.category;
    fields.label.textContent = area.label;
    fields.description.textContent = area.description;
    fields.categoryDetail.textContent = area.category;
    fields.concern.textContent = area.concern;
    fields.estimatedUnits.textContent = area.estimatedUnits;
    fields.bestFor.textContent = area.bestFor;
    fields.note.textContent = area.note;
    fields.details.classList.remove("hidden");
  }

  markers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => selectArea(marker.dataset.neuroArea));
    marker.addEventListener("mouseenter", () => selectArea(marker.dataset.neuroArea));
  });
}

function setupDermalFillerMap() {
  const info = document.querySelector("[data-filler-info]");
  if (!info) return;

  const markers = [...document.querySelectorAll("[data-filler-area]")];
  const zones = [...document.querySelectorAll("[data-map-zone]")];
  const fields = {
    category: info.querySelector("[data-filler-category]"),
    label: info.querySelector("[data-filler-label]"),
    description: info.querySelector("[data-filler-description]"),
    details: info.querySelector("[data-filler-details]"),
    categoryDetail: info.querySelector("[data-filler-category-detail]"),
    concern: info.querySelector("[data-filler-concern]"),
    estimatedMl: info.querySelector("[data-filler-estimated-ml]"),
    bestFor: info.querySelector("[data-filler-best-for]"),
    note: info.querySelector("[data-filler-note]")
  };

  function selectArea(id) {
    const area = dermalFillerAreas.find((item) => item.id === id);
    if (!area) return;
    markers.forEach((marker) => {
      marker.classList.toggle("is-selected", marker.dataset.fillerArea === id);
      marker.setAttribute("aria-pressed", marker.dataset.fillerArea === id ? "true" : "false");
    });
    zones.forEach((zone) => zone.classList.toggle("is-selected", zone.dataset.mapZone === id));
    fields.category.textContent = area.category;
    fields.label.textContent = area.label;
    fields.description.textContent = area.description;
    fields.categoryDetail.textContent = area.category;
    fields.concern.textContent = area.concern;
    fields.estimatedMl.textContent = area.estimatedMl;
    fields.bestFor.textContent = area.bestFor;
    fields.note.textContent = area.note;
    fields.details.classList.remove("hidden");
  }

  markers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => selectArea(marker.dataset.fillerArea));
    marker.addEventListener("mouseenter", () => selectArea(marker.dataset.fillerArea));
  });
}

function setupFacialPlanningMap() {
  const info = document.querySelector("[data-planning-info]");
  if (!info) return;

  const markers = [...document.querySelectorAll("[data-planning-area]")];
  const zones = [...document.querySelectorAll("[data-map-zone]")];
  const fields = {
    category: info.querySelector("[data-planning-category]"),
    label: info.querySelector("[data-planning-label]"),
    description: info.querySelector("[data-planning-description]"),
    details: info.querySelector("[data-planning-details]"),
    categoryDetail: info.querySelector("[data-planning-category-detail]"),
    areaDescription: info.querySelector("[data-planning-area-description]")
  };

  function selectArea(id) {
    const area = fullFacePlanningAreas.find((item) => item.id === id);
    if (!area) return;
    markers.forEach((marker) => {
      marker.classList.toggle("is-selected", marker.dataset.planningArea === id);
      marker.setAttribute("aria-pressed", marker.dataset.planningArea === id ? "true" : "false");
    });
    zones.forEach((zone) => zone.classList.toggle("is-selected", zone.dataset.mapZone === id));
    fields.category.textContent = area.category;
    fields.label.textContent = area.label;
    fields.description.textContent = area.description;
    fields.categoryDetail.textContent = area.category;
    fields.areaDescription.textContent = area.description;
    fields.details.classList.remove("hidden");
  }

  markers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => selectArea(marker.dataset.planningArea));
    marker.addEventListener("mouseenter", () => selectArea(marker.dataset.planningArea));
  });
}

function setupNonSurgicalLiftMap() {
  const info = document.querySelector("[data-lift-info]");
  if (!info) return;

  const markers = [...document.querySelectorAll("[data-lift-area]")];
  const zones = [...document.querySelectorAll("[data-lift-zone]")];
  const fields = {
    treatment: info.querySelector("[data-lift-treatment]"),
    label: info.querySelector("[data-lift-label]"),
    description: info.querySelector("[data-lift-description]"),
    details: info.querySelector("[data-lift-details]"),
    treatmentDetail: info.querySelector("[data-lift-treatment-detail]"),
    areaDescription: info.querySelector("[data-lift-area-description]")
  };

  function selectArea(id) {
    const area = nonSurgicalLiftAreas.find((item) => item.id === id);
    if (!area) return;
    markers.forEach((marker) => {
      marker.classList.toggle("is-selected", marker.dataset.liftArea === id);
      marker.setAttribute("aria-pressed", marker.dataset.liftArea === id ? "true" : "false");
    });
    zones.forEach((zone) => zone.classList.toggle("is-selected", zone.dataset.liftZone === id));
    fields.treatment.textContent = area.treatment;
    fields.label.textContent = area.label;
    fields.description.textContent = area.description;
    fields.treatmentDetail.textContent = area.treatment;
    fields.areaDescription.textContent = area.description;
    fields.details.classList.remove("hidden");
  }

  markers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => selectArea(marker.dataset.liftArea));
    marker.addEventListener("mouseenter", () => selectArea(marker.dataset.liftArea));
  });
}

function setupPdoThreadMap() {
  const info = document.querySelector("[data-thread-info]");
  if (!info) return;

  const markers = [...document.querySelectorAll("[data-thread-area]")];
  const vectors = [...document.querySelectorAll("[data-thread-vector]")];
  const fields = {
    category: info.querySelector("[data-thread-category]"),
    label: info.querySelector("[data-thread-label]"),
    description: info.querySelector("[data-thread-description]"),
    details: info.querySelector("[data-thread-details]"),
    categoryDetail: info.querySelector("[data-thread-category-detail]"),
    areaDescription: info.querySelector("[data-thread-area-description]"),
    range: info.querySelector("[data-thread-range]")
  };

  function selectArea(id) {
    const area = pdoThreadAreas.find((item) => item.id === id);
    if (!area) return;
    markers.forEach((marker) => {
      marker.classList.toggle("is-selected", marker.dataset.threadArea === id);
      marker.setAttribute("aria-pressed", marker.dataset.threadArea === id ? "true" : "false");
    });
    vectors.forEach((vector) => vector.classList.toggle("is-selected", vector.dataset.threadVector === id));
    fields.category.textContent = area.category;
    fields.label.textContent = area.label;
    fields.description.textContent = area.description;
    fields.categoryDetail.textContent = area.category;
    fields.areaDescription.textContent = area.description;
    fields.range.textContent = area.range;
    fields.details.classList.remove("hidden");
  }

  markers.forEach((marker) => {
    marker.setAttribute("aria-pressed", "false");
    marker.addEventListener("click", () => selectArea(marker.dataset.threadArea));
    marker.addEventListener("mouseenter", () => selectArea(marker.dataset.threadArea));
  });
}

function setupContactPage() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const shell = document.querySelector("[data-contact-form-shell]");
  const confirmation = document.querySelector("[data-contact-confirmation]");
  const errors = form.querySelector("[data-contact-errors]");
  const requestType = form.querySelector('[name="request_type"]');

  function setIntent(intent) {
    requestType.value = intent;
    document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  document.querySelectorAll("[data-contact-intent]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      setIntent(link.dataset.contactIntent);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const invalid = [];
    const firstName = form.querySelector('[name="first_name"]');
    const phone = form.querySelector('[name="phone"]');
    const email = form.querySelector('[name="email"]');
    const treatmentInterest = form.querySelector('[name="treatment_interest"]');

    form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    form.querySelectorAll("[aria-describedby]").forEach((field) => field.removeAttribute("aria-describedby"));
    form.querySelectorAll("[data-field-error]").forEach((message) => message.remove());

    if (!firstName.value.trim()) invalid.push([firstName, "Enter your first name."]);
    if (!phone.value.trim() && !email.value.trim()) {
      invalid.push([phone, "Enter a phone number or email address.", [phone, email]]);
    }
    if (!treatmentInterest.value) invalid.push([treatmentInterest, "Tell us what you are interested in."]);

    invalid.forEach(([field, message, relatedFields = [field]]) => {
      const errorId = `contact-error-${field.name}`;
      const inlineError = document.createElement("span");
      inlineError.id = errorId;
      inlineError.className = "contact-inline-error";
      inlineError.dataset.fieldError = "";
      inlineError.textContent = message;
      field.closest("label")?.append(inlineError);
      relatedFields.forEach((relatedField) => {
        relatedField.setAttribute("aria-invalid", "true");
        relatedField.setAttribute("aria-describedby", errorId);
      });
    });
    if (invalid.length) {
      errors.innerHTML = `<div class="contact-error-summary" role="alert"><strong>Please review your request.</strong><ul>${invalid.map(([, message]) => `<li>${message}</li>`).join("")}</ul></div>`;
      invalid[0][0].focus();
      return;
    }

    errors.innerHTML = "";
    shell.classList.add("hidden");
    confirmation.classList.remove("hidden");
    confirmation.focus();
  });

  document.querySelector("[data-contact-reset]")?.addEventListener("click", () => {
    form.reset();
    requestType.value = "general-question";
    form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    form.querySelectorAll("[aria-describedby]").forEach((field) => field.removeAttribute("aria-describedby"));
    form.querySelectorAll("[data-field-error]").forEach((message) => message.remove());
    errors.innerHTML = "";
    confirmation.classList.add("hidden");
    shell.classList.remove("hidden");
    form.querySelector('[name="first_name"]').focus();
  });
}

function setupFaqCategoryNav() {
  document.querySelectorAll("[data-faq-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`#${link.dataset.faqTarget}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function setupMenu() {
  const button = document.querySelector("#menuButton");
  const menu = document.querySelector("#mobileMenu");
  if (!button || !menu) return;

  function normalizeHashHref(href) {
    if (href.startsWith("#")) return href;
    const url = new URL(href, location.href);
    const currentPath = location.pathname.split("/").pop() || "index.html";
    const targetPath = url.pathname.split("/").pop() || "index.html";
    if (url.origin === location.origin && targetPath === currentPath && url.hash) return url.hash;
    return "";
  }

  function navigateHashLink(href) {
    const hash = normalizeHashHref(href);
    if (!hash) return false;
    const currentHash = location.hash || "#home";
    if (hash === currentHash) {
      render();
    } else {
      location.hash = hash;
    }
    return true;
  }

  function closeMobileMenu() {
    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
    menu.querySelectorAll("details[open]").forEach((details) => {
      details.open = false;
    });
  }

  button.addEventListener("click", () => {
    const open = menu.classList.toggle("hidden") === false;
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  menu.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    closeMobileMenu();

    if (normalizeHashHref(href)) {
      event.preventDefault();
      navigateHashLink(href);
    }
  });

  document.querySelectorAll(".nav-group").forEach((group) => {
    const trigger = group.querySelector(".nav-trigger");
    let closeTimer;

    group.addEventListener("mouseenter", () => {
      clearTimeout(closeTimer);
      group.classList.remove("dismissed");
      document.querySelectorAll(".nav-group.open").forEach((openGroup) => {
        if (openGroup !== group) openGroup.classList.remove("open");
      });
      group.classList.add("open");
    });

    group.addEventListener("mouseleave", () => {
      closeTimer = setTimeout(() => {
        group.classList.remove("open");
        group.classList.remove("dismissed");
      }, 240);
    });

    trigger.addEventListener("click", () => {
      document.querySelectorAll(".nav-group").forEach((openGroup) => {
        openGroup.classList.remove("open");
        openGroup.classList.add("dismissed");
      });
      trigger.blur();
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-group")) {
      document.querySelectorAll(".nav-group.open").forEach((group) => group.classList.remove("open"));
    }
  });

  document.querySelectorAll(".mega-menu a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      document.querySelectorAll(".nav-group").forEach((group) => {
        group.classList.remove("open");
        group.classList.add("dismissed");
      });
      link.blur();
      if (normalizeHashHref(href)) {
        event.preventDefault();
        navigateHashLink(href);
      }
    });
  });
}

window.addEventListener("hashchange", render);
setupMenu();
render();
