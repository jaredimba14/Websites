const images = {
  hero: "url('./assets/hero-glow.png')",
  tiana: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80')",
  clinic: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80')",
  iv: "url('https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1300&q=80')",
  wellness: "url('https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1300&q=80')",
  results: "url('https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1200&q=80')"
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
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  gem: '<path d="M6 3h12l4 6-10 12L2 9l4-6Z"/><path d="M2 9h20"/><path d="m12 21 4-12-4-6-4 6 4 12Z"/>',
  menu: '<path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/>'
};

function icon(name, classes = "") {
  return `<svg class="svg-icon ${classes}" viewBox="0 0 24 24" fill="none" aria-hidden="true">${iconPaths[name] || iconPaths.sparkle}</svg>`;
}

const services = [
  ["Injectables", "Botox, dermal fillers, PDO threads, Sculptra, Radiesse, and facial balancing with a consultation-led plan.", "Authority category", "#injectables"],
  ["IV Drips and Wellness", "Hydration, energy, immunity, beauty, recovery, and vitamin injection support through mobile care.", "Wellness support", "#services"],
  ["Regenerative Aesthetics", "Future-facing PRP, PRF, collagen stimulation, and hair restoration education paths.", "Future service", "#services"],
  ["Skin and Tightening", "Educational paths for skin rejuvenation, neck tightening, laxity, and treatment candidacy.", "Future service", "#services"],
  ["Intimate Wellness", "Private, confidence-centered feminine wellness education with provider review before publication.", "Future service", "#services"]
];

const injectables = ["Botox or Neurotoxins", "Dermal Fillers", "PDO Threads", "Sculptra", "Radiesse", "Facial Balancing"];
const PLACEHOLDER_BOOKING_URL = "https://example.com/elite-vitamed-booking-placeholder";
const PLACEHOLDER_CHERRY_URL = "https://example.com/elite-vitamed-cherry-placeholder";
const PLACEHOLDER_REVIEWS_URL = "https://example.com/elite-vitamed-google-reviews-placeholder";
const HERO_PARTICLES_ENABLED = true;
const ctas = `
    <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
    <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Now</a>
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
  const sections = [...document.querySelectorAll("#app > section")].slice(1);
  const cards = document.querySelectorAll(".luxe-card, article.rounded-2xl");

  cards.forEach((card) => card.classList.add("motion-card"));
  if (reduceMotion) return;

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

  container.querySelectorAll("canvas").forEach((canvas) => canvas.remove());
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: { enable: true, value_area: 800 }
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "bubble" },
        onclick: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
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

function conversionBand(title = "Not sure what to book?", copy = "Start with a guided assessment or request a phone consultation so the next step feels clear before scheduling.") {
  return `
    <section class="bg-navy-deep px-4 py-16 text-white">
      <div class="mx-auto grid max-w-7xl items-center gap-8 rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 sm:px-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p class="eyebrow">Conversion system</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold">${title}</h2>
          <p class="mt-3 max-w-2xl leading-7 text-white/70">${copy}</p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Now</a>
          <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
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
    <section class="hero-gradient -mt-[200px] overflow-hidden bg-navy-deep pt-[200px] text-white">
      ${particles()}
      <div class="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-20 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:pb-14 lg:pt-24">
        <div class="reveal">
          <p class="eyebrow">Provider Led Aesthetic and Wellness Care</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Top Tier Aesthetics and Wellness Care, Designed To Help You Look and Feel Your Best</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-2xl leading-8">Elite VitaMed provides premium injectable treatments, IV therapy, and wellness services performed by a Nurse Practitioner and certified injector, with the privacy and convenience of mobile concierge care.</p>
          <p class="hero-copy mt-4 max-w-2xl leading-7">Whether you already know what you want or need help choosing the right treatment, every appointment is guided by clinical expertise, personalized planning, and a commitment to natural looking results.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-navy border border-[#877b56] justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          ${imageBox("hero", "relative z-10 min-h-[31rem] rounded-[2rem] border border-champagne/30 shadow-luxe")}
        </div>
      </div>
      ${proofPanel()}
    </section>
  `;
}

function homeServices() {
  const items = [
    ["Injectables", "Neurotoxins, dermal fillers, PDO threads, Sculptra, facial balancing, and full face refresh treatments performed with precision, safety, and a natural looking approach.", "Explore Injectables", "#injectables", "syringe"],
    ["Dermal Fillers", "Personalized filler treatments for lips, cheeks, chin, jawline, under eyes, and facial balance, guided by anatomy, provider expertise, and your desired result.", "View Filler Options", "#injectables", "gem"],
    ["IV Drips and Wellness", "Mobile IV therapy and wellness support for hydration, energy, immunity, beauty, recovery, and overall wellness.", "Explore IV Therapy", "#services", "droplet"],
    ["Treatment Assessment", "Not sure what you need? Start with a personalized assessment to better understand which treatment path may fit your goals before booking.", "Start Assessment", "#assessment", "sparkle"]
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Our Services</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Premium Aesthetic and Wellness Treatments, Personalized To You</h2>
          <p class="mt-4 leading-8 text-ink/68">Elite VitaMed offers provider led injectables, IV drips, and wellness services designed to help you feel confident, refreshed, and supported with care that fits your goals.</p>
        </div>
        <div class="mt-12 grid gap-5 md:grid-cols-2">
          ${items.map((item) => `
            <article class="luxe-card p-7">
              <div class="icon-badge mb-5">${icon(item[4])}</div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3>
              <p class="service-card-copy mt-3 text-sm leading-7">${item[1]}</p>
              <a href="${item[3]}" class="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-champagne">${item[2]} ${icon("arrow")}</a>
            </article>
          `).join("")}
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
            <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          </div>
          <p class="mt-5 text-xs leading-6 text-ink/55">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
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
    ["Injectable Treatment Assessment", "For neurotoxins, filler, facial balancing, and full face refresh goals.", "syringe"],
    ["Full Treatment Assessment", "For visitors who are not sure whether they need injectables, IV therapy, wellness support, or a consultation first.", "sparkle"],
    ["IV Drip Assessment", "For hydration, energy, immunity, beauty, recovery, and wellness support.", "droplet"]
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
            <article class="luxe-card p-6">
              <div class="icon-badge mb-4">${icon(item[2])}</div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3>
              <p class="mt-3 text-sm leading-7 text-ink/66">${item[1]}</p>
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
            ${["Hydration IV", "Energy IV", "Immunity IV", "Beauty IV", "Recovery IV", "Vitamin Injections"].map((item) => `<span class="rounded-full border border-navy/10 bg-mist px-4 py-2 text-xs font-bold text-navy">${item}</span>`).join("")}
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
          <a href="#contact" class="btn btn-navy mt-7 justify-center">${icon("calendar")} Book Your Mobile Appointment</a>
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
            ["Before and after photos", "Provider-reviewed treatment photos can be featured here.", "results"],
            ["Client testimonials", "Client confidence stories and experience highlights can be featured here.", "clinic"],
            ["Natural looking results", "Thoughtful planning supports a refreshed and balanced result.", "hero"]
          ].map((item) => `
            <article class="luxe-card overflow-hidden">
              ${imageBox(item[2], "min-h-52")}
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
          <p class="mt-2 text-sm font-bold text-navy">Rated [X.X] stars on Google</p>
        </div>
        <div class="mt-9 grid gap-5 lg:grid-cols-3">
          ${["[Insert Google review here.]", "[Insert Google review here.]", "[Insert Google review here.]"].map((item) => `
            <article class="luxe-card p-6">
              <p class="text-lg tracking-[.12em] text-champagne">★★★★★</p>
              <p class="mt-4 font-serif text-2xl leading-8 text-navy">"${item}"</p>
              <p class="mt-5 text-xs font-bold uppercase tracking-[.14em] text-ink/55">Client Name · Google Review</p>
            </article>
          `).join("")}
        </div>
        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <a href="#" class="btn btn-navy justify-center">${icon("users")} Read More Google Reviews</a>
          <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
        </div>
      </div>
    </section>
  `;
}

function homeMemberships() {
  return `
    <section class="section-shell bg-mist">
      <div class="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p class="eyebrow">Memberships</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Stay Consistent With Your Aesthetic and Wellness Goals</h2>
          <p class="mt-4 max-w-3xl leading-8 text-ink/68">Memberships make it easier to maintain your results, plan ahead, and receive ongoing support throughout the year.</p>
          <p class="mt-3 max-w-3xl text-sm leading-7 text-ink/60">Elite VitaMed membership options are designed for clients who want consistency, convenience, and a more structured approach to aesthetic and wellness care.</p>
        </div>
        <a href="#memberships" class="btn btn-navy justify-center">${icon("gem")} View Membership Options</a>
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
          <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
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
            <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-navy border border-[#877b56] justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Performed by a Nurse Practitioner and certified injector.</p>
        </div>
        <div class="relative reveal">
          ${luxeOrbit()}
          ${imageBox("wellness", "relative z-10 min-h-[31rem] rounded-[2rem] border border-champagne/30 shadow-luxe")}
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
    ["Injectables", "Injectable treatments are designed to support natural looking refinement, facial balance, and refreshed confidence. This category includes neurotoxins, dermal fillers, PDO threads, Sculptra, facial balancing, and full face refresh options.", "Every injectable plan is guided by your anatomy, treatment history, comfort level, and desired outcome.", ["Fine lines", "Wrinkles", "Volume loss", "Facial balance", "Lip enhancement", "Jawline definition", "Full face refresh goals"], "Explore Injectables", "#injectables", "Start Injectable Assessment", "#assessment", "syringe"],
    ["IV Drips and Wellness", "IV drips and wellness services are designed to support hydration, energy, immunity, recovery, beauty, and overall wellness. These treatments are ideal for clients who want convenient wellness support delivered with professional care.", "Whether you are feeling depleted, preparing for an event, recovering from a busy season, or looking for ongoing wellness support, IV therapy can be a helpful place to start.", ["Hydration", "Energy support", "Immunity support", "Beauty and glow", "Recovery", "General wellness", "Vitamin support"], "Explore IV Drips and Wellness", "#services", "Start IV Drip Assessment", "#assessment", "droplet"],
    ["Treatment Assessment", "Not sure which service is right for you? Start with a treatment assessment. This helps you narrow down the best starting point based on your goals, concerns, and the type of result you are looking for.", "Your assessment result is not a final medical recommendation. It is a helpful starting point that can guide you toward the right consultation, service category, or booking path.", ["First time visitors", "Clients unsure what they need", "People comparing injectables", "People interested in IV therapy", "Anyone who wants provider guided direction before booking"], "Start Treatment Assessment", "#assessment", "Request A Phone Consultation", "#contact", "sparkle"],
    ["Memberships", "Memberships are designed for clients who want consistency, convenience, and a more structured approach to their aesthetic and wellness goals.", "If you plan to receive ongoing treatments, a membership may help you stay on track while making your care easier to maintain throughout the year.", ["Ongoing aesthetic care", "Wellness maintenance", "Clients who want consistency", "Clients planning multiple visits", "Long term treatment planning"], "View Memberships", "#memberships", "Ask About Membership Options", "#contact", "gem"],
    ["Future Services", "Elite VitaMed continues to expand with advanced aesthetic and wellness services. Future service categories may include regenerative aesthetics, skin rejuvenation and tightening, collagen support, hair restoration, and feminine wellness.", "These services will be added strategically as they become available and aligned with client needs.", ["Clients interested in advanced treatment options", "Clients planning future aesthetic goals", "Clients who want to stay updated on new services"], "View Future Services", "#services", "Join The Interest List", "#contact", "leaf"]
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
            <article class="luxe-card grid gap-7 p-7 lg:grid-cols-[1fr_.9fr]">
              <div>
                <div class="icon-badge mb-5">${icon(item[8])}</div>
                <h3 class="font-serif text-4xl font-semibold text-navy">${item[0]}</h3>
                <p class="mt-4 leading-8">${item[1]}</p>
                <p class="mt-3 text-sm leading-7">${item[2]}</p>
                <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a href="${item[5]}" class="btn btn-navy justify-center">${icon(index === 1 ? "droplet" : index === 3 ? "gem" : "sparkle")} ${item[4]}</a>
                  <a href="${item[7]}" class="btn border border-navy/15 bg-white text-navy justify-center">${icon(index === 2 ? "phone" : "arrow")} ${item[6]}</a>
                </div>
              </div>
              <div class="rounded-2xl border border-navy/10 bg-mist/75 p-5">
                <p class="eyebrow">Best For</p>
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
          <a href="#contact" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
          <a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          <a href="#contact" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a>
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
          <p class="eyebrow">Contact Elite VitaMed</p>
          <h1 class="mt-4 max-w-3xl text-balance font-serif text-[2.7rem] font-semibold leading-[.98] sm:text-6xl lg:text-7xl">Have Questions Before You Book? We're Here To Help.</h1>
          <div class="gold-rule mt-6"><span></span></div>
          <p class="hero-copy mt-6 max-w-2xl leading-8">Whether you are ready to schedule or still deciding which treatment is right for you, Elite VitaMed makes it easy to get provider led guidance before your next step.</p>
          <p class="hero-copy mt-4 max-w-2xl leading-7">Use the form below to request a phone consultation, ask a question, or get help choosing the right service. If you already know what you want, you can book your appointment directly.</p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="${PLACEHOLDER_BOOKING_URL}" target="_blank" rel="noopener" data-integration-placeholder="booking" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a>
            <a href="#assessment" class="btn btn-navy border border-[#877b56] justify-center">${icon("sparkle")} Start Treatment Assessment</a>
          </div>
          <p class="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[.14em] text-soft-gold/85">${icon("shield")} Treatments are performed by a Nurse Practitioner and certified injector.</p>
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
    ["Request A Phone Consultation", "Best if you want to talk through your goals, ask questions, or get help deciding which treatment path makes the most sense.", "Request A Phone Consultation", "#contact-form", "phone-consultation", "phone"],
    ["Book Your Appointment", "Best if you already know which service you want and are ready to schedule.", "Book Your Appointment", PLACEHOLDER_BOOKING_URL, "", "calendar"],
    ["Start Treatment Assessment", "Best if you are interested but not sure whether you need injectables, IV therapy, wellness support, or a consultation first.", "Start Treatment Assessment", "#assessment", "", "sparkle"]
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <p class="eyebrow">Contact Options</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Choose The Best Way To Reach Us</h2>
        </div>
        <div class="mt-10 grid gap-5 lg:grid-cols-3">
          ${items.map((item, index) => `
            <article class="luxe-card p-6">
              <div class="icon-badge mb-4">${icon(item[5])}</div>
              <h3 class="font-serif text-3xl font-semibold text-navy">${item[0]}</h3>
              <p class="mt-3 text-sm leading-7">${item[1]}</p>
              <a href="${item[3]}" ${item[4] ? `data-contact-intent="${item[4]}"` : ""} ${index === 1 ? `target="_blank" rel="noopener" data-integration-placeholder="booking"` : ""} class="btn btn-navy mt-6 justify-center">${icon(item[5])} ${item[2]}</a>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function contactForm() {
  const inputClass = "mt-2 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 outline-none transition focus:border-champagne";
  return `
    <section id="contact-form" class="section-shell bg-mist scroll-mt-36">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="luxe-card p-7 sm:p-9">
          <div data-contact-form-shell>
            <p class="eyebrow">Contact Elite VitaMed</p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Send Us A Message</h2>
            <p class="mt-4 max-w-3xl leading-8">Tell us what you are interested in and our team will follow up to help guide your next step.</p>
            <form class="mt-7 grid gap-4 sm:grid-cols-2" data-contact-form novalidate>
              <input type="hidden" name="request_type" value="general-question" />
              <label class="contact-field">First Name <span aria-hidden="true">*</span><input class="${inputClass}" name="first_name" autocomplete="given-name" /></label>
              <label class="contact-field">Last Name<input class="${inputClass}" name="last_name" autocomplete="family-name" /></label>
              <label class="contact-field">Phone Number<input class="${inputClass}" name="phone" inputmode="tel" autocomplete="tel" /></label>
              <label class="contact-field">Email Address<input class="${inputClass}" name="email" type="email" autocomplete="email" /></label>
              <label class="contact-field">Preferred Contact Method <span aria-hidden="true">*</span>
                <select class="${inputClass}" name="preferred_contact"><option value="">Select one</option><option>Phone call</option><option>Text message</option><option>Email</option></select>
              </label>
              <label class="contact-field">Treatment Interest <span aria-hidden="true">*</span>
                <select class="${inputClass}" name="treatment_interest"><option value="">Select one</option><option>Injectables</option><option>Neurotoxins</option><option>Dermal Fillers</option><option>Facial Balancing</option><option>IV Drips and Wellness</option><option>Memberships</option><option>Treatment Assessment</option><option>Financing Through Cherry</option><option>Not Sure Yet</option><option>Other</option></select>
              </label>
              <label class="contact-field sm:col-span-2">Best Time To Reach You<input class="${inputClass}" name="best_time" placeholder="Morning, afternoon, or evening" /></label>
              <label class="contact-field sm:col-span-2">Message<textarea class="${inputClass} min-h-32" name="message" placeholder="Tell us what you are considering."></textarea></label>
              <label class="flex items-start gap-3 text-sm leading-6 text-ink/70 sm:col-span-2">
                <input class="mt-1 h-4 w-4 accent-[#2c3e50]" type="checkbox" name="follow_up_consent" />
                <span>I agree to receive follow-up messages about my request. Final consent wording should be provider-reviewed before launch.</span>
              </label>
              <div class="sm:col-span-2" data-contact-errors aria-live="polite"></div>
              <button class="btn btn-navy justify-center sm:w-fit" type="submit">${icon("arrow")} Submit Request</button>
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

function contactProviderCare() {
  const items = [
    ["Provider Led Care", "Your care is performed by a qualified Nurse Practitioner and certified injector.", "shield"],
    ["Personalized Guidance", "Your next step is based on your goals, treatment history, comfort level, and what is appropriate for you.", "sparkle"],
    ["Concierge Convenience", "Elite VitaMed offers mobile or in home concierge care for a more private and convenient experience.", "home"],
    ["Clear Next Step", "You can book, request a phone consultation, or start a treatment assessment.", "calendar"]
  ];
  return `
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow">Why Contact Elite VitaMed?</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Get Guidance Before You Choose Your Treatment</h2>
          <p class="mt-5 leading-8">Choosing the right aesthetic or wellness treatment can feel overwhelming, especially if you are not sure where to start. Elite VitaMed offers provider led care performed by a Nurse Practitioner and certified injector, so you can feel more confident before moving forward.</p>
          <p class="mt-4 leading-8">Whether you are interested in neurotoxins, filler, facial balancing, IV therapy, wellness support, or memberships, our goal is to help you understand your options and choose the path that fits your goals.</p>
        </div>
        <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          ${items.map((item) => `<article class="rounded-2xl border border-navy/10 bg-mist/70 p-5"><div class="icon-badge mb-4">${icon(item[2])}</div><h3 class="text-xl font-bold text-navy">${item[0]}</h3><p class="mt-2 text-sm leading-6">${item[1]}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function contactServiceArea() {
  return `<section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8"><div><p class="eyebrow">Service Area</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Mobile Concierge Care In New Hampshire</h2><p class="mt-4 max-w-3xl leading-8">Elite VitaMed offers mobile or in home aesthetic and wellness services for clients in New Hampshire and surrounding areas.</p><p class="mt-3 text-sm leading-7">If you are unsure whether you are within the service area, send a message and our team can confirm availability.</p></div><div class="rounded-2xl border border-champagne/30 bg-white p-6 text-navy shadow-sm"><div class="icon-badge mb-4">${icon("home")}</div><p class="font-bold">Serving New Hampshire and surrounding areas.</p></div></div></section>`;
}

function contactPhoneConsult() {
  return `<section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Prefer To Talk First?</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Request A Phone Consultation Before Booking</h2><p class="mt-4 max-w-4xl leading-8">If you are interested in treatment but have questions, a phone consultation can help you feel more confident before scheduling. This is a good option if you are unsure what you need, want to compare services, or want help choosing the right starting point.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="#contact-form" data-contact-intent="phone-consultation" class="btn btn-navy justify-center">${icon("phone")} Request A Phone Consultation</a><a href="#assessment" class="btn border border-navy/15 bg-white text-navy justify-center">${icon("sparkle")} Start Treatment Assessment</a></div></div></section>`;
}

function contactAssessment() {
  return `<section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Not Sure What You Need?</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Start With A Treatment Assessment</h2><p class="mt-4 max-w-4xl leading-8">If you know you want to look or feel better but are not sure which service fits your goals, start with a treatment assessment. This can help guide you toward injectables, IV therapy, wellness support, or a consultation first.</p><div class="mt-6 flex flex-wrap gap-2">${["Injectable Treatment Assessment","Full Treatment Assessment","IV Drip Assessment"].map(item=>`<span class="rounded-full border border-navy/10 bg-mist px-4 py-2 text-sm font-bold text-navy">${item}</span>`).join("")}</div><a href="#assessment" class="btn btn-navy mt-7 justify-center">${icon("sparkle")} Start Treatment Assessment</a></div></section>`;
}

function contactFinancing() {
  return `<section class="section-shell bg-mist"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p class="eyebrow">Financing Available</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Ask About Cherry Financing</h2><p class="mt-4 max-w-4xl leading-8">Elite VitaMed offers financing through Cherry, making it easier for eligible clients to move forward with aesthetic and wellness treatments.</p><p class="mt-3 max-w-4xl text-sm leading-7">If cost is one of the reasons you are waiting to book, ask about Cherry financing. Eligible clients may be able to split their treatment investment into flexible payments instead of paying everything upfront.</p><div class="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_CHERRY_URL}" target="_blank" rel="noopener" data-integration-placeholder="cherry" class="btn btn-navy justify-center">${icon("gem")} Apply For Cherry Financing</a><a href="#contact-form" data-contact-intent="general-question" class="btn btn-gold justify-center">${icon("phone")} Ask A Question</a></div><p class="mt-5 text-xs leading-6">Financing is offered through Cherry. Approval, payment plans, and eligibility are subject to Cherry's terms.</p></div></section>`;
}

function contactReviews() {
  return `<section class="section-shell bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="mx-auto max-w-4xl text-center"><p class="eyebrow">Client Confidence</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Trusted For Provider Led Care and A Premium Client Experience</h2><p class="mt-4 leading-8">Clients choose Elite VitaMed because they want care that feels personal, professional, and guided by someone they can trust.</p><div class="mt-6 text-2xl tracking-[.18em] text-champagne">★★★★★</div><p class="mt-2 text-sm font-bold text-navy">Rated [X.X] stars on Google</p></div><div class="mt-9 grid gap-5 lg:grid-cols-3">${["[Insert Google review here.]","[Insert Google review here.]","[Insert Google review here.]"].map(item=>`<article class="luxe-card p-6"><p class="text-lg tracking-[.12em] text-champagne">★★★★★</p><p class="mt-4 font-serif text-2xl leading-8 text-navy">"${item}"</p></article>`).join("")}</div><div class="mt-8 text-center"><a href="${PLACEHOLDER_REVIEWS_URL}" target="_blank" rel="noopener" data-integration-placeholder="reviews" class="btn btn-navy justify-center">${icon("users")} Read More Google Reviews</a></div></div></section>`;
}

function contactFaq() {
  return `<section class="section-shell bg-ivory"><div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p class="eyebrow">Frequently Asked Questions</p><h2 class="mt-3 font-serif text-4xl font-semibold text-navy sm:text-5xl">Contact Questions</h2></div>${faqList([["What should I do if I am not sure what treatment I need?","Start with the Treatment Assessment or request a phone consultation. Both options are designed to help you choose the right starting point before booking."],["Can I ask questions before booking?","Yes. You can send a message or request a phone consultation before scheduling an appointment."],["Who performs the treatments?","Treatments are performed by a Nurse Practitioner and certified injector."],["Does Elite VitaMed offer mobile appointments?","Yes. Elite VitaMed offers mobile or in home concierge aesthetic and wellness care in New Hampshire and surrounding areas."],["Can I book directly from this page?","Yes. If you already know what service you want, you can use the Book Your Appointment button to schedule."],["Can I ask about financing?","Yes. Elite VitaMed offers financing through Cherry for eligible clients and services."]])}</div></section>`;
}

function contactFinalCta() {
  return `<section class="bg-navy-deep px-4 py-16 text-white"><div class="mx-auto max-w-7xl rounded-[1.5rem] border border-champagne/25 bg-white/5 p-7 text-center sm:px-10"><p class="eyebrow">Your Next Step</p><h2 class="mx-auto mt-3 max-w-4xl font-serif text-4xl font-semibold sm:text-5xl">Ready To Take The Next Step?</h2><p class="mx-auto mt-4 max-w-3xl leading-8 text-white/70">Book your appointment, request a phone consultation, or start with a treatment assessment if you are not sure where to begin.</p><div class="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"><a href="${PLACEHOLDER_BOOKING_URL}" target="_blank" rel="noopener" data-integration-placeholder="booking" class="btn btn-gold justify-center">${icon("calendar")} Book Your Appointment</a><a href="#assessment" class="btn btn-ghost justify-center">${icon("sparkle")} Start Treatment Assessment</a><a href="#contact-form" data-contact-intent="phone-consultation" class="btn border border-white/25 bg-white text-navy justify-center">${icon("phone")} Request A Phone Consultation</a></div></div></section>`;
}

const pages = {
  home: () => `
    ${homeHero()}
    ${homeServices()}
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

  about: () => `
    ${shell({
      eyebrow: "About Elite VitaMed",
      title: "A provider-led mobile experience built around trust.",
      copy: "This page positions Tiana as the expert guide, explains the concierge model, and gives visitors the confidence to choose a consult-first treatment path.",
      image: "tiana"
    })}
    ${splitFeature({
      eyebrow: "Treatment philosophy",
      title: "Natural-looking results, clear education, and personal follow-up.",
      copy: "The page should make the brand feel intimate and premium: one trusted provider, one clear plan, and one responsive team helping clients move from curiosity to care.",
      image: "clinic",
      bullets: [["Evaluate first", "Goals, facial structure, treatment history, and timing matter."], ["Educate before booking", "Treatment pages and quizzes answer real questions."], ["Follow through", "Phone consult and VA follow-up prevent warm leads from falling away."]]
    })}
    ${conversionBand("Meet Tiana, then choose the next step.")}
  `,

  services: () => `
    ${servicesHero()}
    ${servicesIntro()}
    ${servicesCategories()}
    ${servicesProviderCare()}
    ${servicesNextSteps()}
    ${homeFinancing()}
    ${servicesFaq()}
    ${servicesFinalCta()}
  `,

  injectables: () => `
    ${shell({
      eyebrow: "Injectables authority hub",
      title: "Botox, fillers, threads, collagen support, and facial balancing in one clear path.",
      copy: "The highest-priority hub positions Tiana as a provider who evaluates goals, facial structure, treatment history, and long-term aesthetic planning before recommending options.",
      image: "results",
      dark: true
    })}
    <section class="section-shell bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          ${injectables.map((item) => `
            <article class="luxe-card p-6">
              <div class="icon-badge mb-4">${icon(item.includes("Botox") ? "syringe" : item.includes("Threads") ? "sparkle" : item.includes("Balancing") ? "users" : "gem")}</div>
              <p class="eyebrow">Injectables</p>
              <h2 class="mt-3 font-serif text-3xl font-semibold text-navy">${item}</h2>
              <p class="mt-3 text-sm leading-7 text-ink/66">Educational page mockup with candidacy, expected process, related treatments, safety considerations, FAQs, and consultation-first CTA.</p>
              <div class="mt-5 flex flex-wrap gap-2 text-xs font-bold text-navy/70">
                <span class="rounded-full bg-mist px-3 py-2">Benefits</span>
                <span class="rounded-full bg-mist px-3 py-2">Candidates</span>
                <span class="rounded-full bg-mist px-3 py-2">FAQ</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    ${splitFeature({
      eyebrow: "Compliance-aware messaging",
      title: "Premium does not mean overpromising.",
      copy: "The hub should use careful medical language: individual results vary, final recommendations require provider evaluation, and treatment suitability depends on candidacy and health history.",
      image: "tiana",
      bullets: [["No guarantees", "Avoid absolute or guaranteed-result claims."], ["Consultation required", "Decision-making happens with Tiana."], ["Education first", "Comparison content helps users choose responsibly."]]
    })}
    ${conversionBand("Take the injectable assessment or book a consult.")}
  `,

  assessment: () => `
    ${shell({
      eyebrow: "Treatment assessment",
      title: "A guided path for clients who are interested, but not sure what to book.",
      copy: "The assessment page introduces quiz funnels that segment leads by concern, treatment goals, previous experience, timeline, comfort level, budget range, and service interest.",
      image: "wellness"
    })}
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        ${[
          ["Injectables Assessment", "Botox, filler, Sculptra, Radiesse, PDO threads, or facial balancing recommendation paths."],
          ["IV Drip Assessment", "Hydration, energy, immunity, beauty and glow, recovery, or general wellness support."],
          ["Full Treatment Assessment", "A broad intake path for clients comparing injectables, wellness, skin, regenerative, or consult-first options."]
        ].map((item) => `
          <article class="luxe-card p-7">
            <p class="eyebrow">Quiz funnel</p>
            <h2 class="mt-3 font-serif text-3xl font-semibold text-navy">${item[0]}</h2>
            <p class="mt-4 text-sm leading-7 text-ink/66">${item[1]}</p>
            <a href="#contact" class="mt-6 inline-flex items-center gap-2 font-extrabold text-champagne">Start this path ${icon("arrow")}</a>
          </article>
        `).join("")}
      </div>
    </section>
    ${splitFeature({
      eyebrow: "GHL conversion engine",
      title: "Every quiz answer should connect to a follow-up system.",
      copy: "Quiz completions route to recommendation pages, treatment interest tags, SMS/email follow-up, VA call tasks, and booked appointment tracking.",
      image: "iv",
      bullets: [["Tag interest", "Botox, filler, Sculptra, Radiesse, threads, IV drips."], ["Recommend next", "Result pages explain why a treatment may fit."], ["Follow up", "No-booking reminders and phone consult support."]]
    })}
  `,

  memberships: () => `
    ${shell({
      eyebrow: "Memberships",
      title: "Recurring care tiers for clients who want a long-term aesthetic plan.",
      copy: "Memberships should feel like a premium continuity program, not coupons. The page explains care cadence, perks, priority access, and consult-led treatment planning.",
      image: "clinic"
    })}
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        ${[
          ["Sapphire", "Entry membership for consistent wellness and appointment planning."],
          ["Tanzanite", "Middle tier for clients combining injectables and mobile wellness."],
          ["Diamond", "Premium relationship tier with elevated access and care cadence."]
        ].map((tier, index) => `
          <article class="luxe-card ${index === 1 ? "border-champagne/45 shadow-gold" : ""} p-8">
            <div class="icon-badge mb-4">${icon(index === 2 ? "gem" : "sparkle")}</div>
            <p class="eyebrow">Membership tier</p>
            <h2 class="mt-3 font-serif text-4xl font-semibold text-navy">${tier[0]}</h2>
            <p class="mt-4 text-sm leading-7 text-ink/66">${tier[1]}</p>
            <ul class="mt-6 space-y-3 text-sm text-ink/75">
              <li>✓ Treatment planning touchpoint</li>
              <li>✓ Member education and reminders</li>
              <li>✓ Booking path for mobile appointments</li>
            </ul>
            <a href="#contact" class="btn btn-navy mt-7 w-full justify-center">Ask About ${tier[0]}</a>
          </article>
        `).join("")}
      </div>
    </section>
  `,

  results: () => `
    ${shell({
      eyebrow: "Results and reviews",
      title: "Trust-building proof with careful expectation setting.",
      copy: "Results should reinforce natural-looking outcomes, client confidence, and provider credibility while avoiding guarantees or exaggerated claims.",
      image: "results",
      dark: true
    })}
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        ${["Before and after placement", "Client reviews", "Natural-looking results"].map((item) => `
          <article class="luxe-card overflow-hidden">
            ${imageBox("clinic", "min-h-56")}
            <div class="p-6">
            <div class="icon-badge mb-4">${icon(item.includes("review") ? "users" : item.includes("Before") ? "sparkle" : "shield")}</div>
            <p class="eyebrow">Trust layer</p>
              <h2 class="mt-3 font-serif text-3xl font-semibold text-navy">${item}</h2>
              <p class="mt-3 text-sm leading-7 text-ink/66">Placeholder module with provider-reviewed captions, treatment context, and individual-results-vary language.</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
    ${conversionBand("Like the direction? Start with a consultation.")}
  `,

  faq: () => `
    ${shell({
      eyebrow: "Frequently asked questions",
      title: "Answer the questions that keep qualified clients from booking.",
      copy: "FAQ content is grouped around general care, injectables, IV therapy, mobile concierge service, memberships, and booking so each concern has a clear next step.",
      image: "clinic"
    })}
    <section class="section-shell bg-white">
      <div class="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div>
          <p class="eyebrow">FAQ groups</p>
          <h2 class="mt-3 font-serif text-4xl font-semibold text-navy">Built for education, SEO, and confidence.</h2>
          <p class="mt-4 leading-8 text-ink/68">Each answer should reduce uncertainty and route the visitor back to booking, assessment, or phone consult.</p>
        </div>
        ${faqList([
          ["How do I know which treatment is right for me?", "Start with the treatment assessment or request a phone consultation. Final treatment recommendations depend on Tiana's provider evaluation."],
          ["Do you offer mobile appointments?", "Yes. The mobile concierge model is designed for private, convenient aesthetic and wellness care throughout the confirmed New Hampshire service area."],
          ["Are injectable results guaranteed?", "No. Results vary by individual, treatment history, candidacy, and provider evaluation. The site should use careful expectation-setting language."],
          ["Can I book directly?", "Yes. Ready visitors can book directly, while unsure visitors can take a quiz or request a phone consult."]
        ])}
      </div>
    </section>
  `,

  contact: () => `${contactHero()}${contactOptions()}${contactForm()}${contactProviderCare()}${contactServiceArea()}${contactPhoneConsult()}${contactAssessment()}${contactFinancing()}${contactReviews()}${contactFaq()}${contactFinalCta()}`
};

function render() {
  const page = (location.hash || "#home").replace("#", "");
  const app = document.querySelector("#app");
  const renderPage = pages[page] || pages.home;
  destroyHeroParticles();
  destroyPageMotion();
  app.innerHTML = renderPage();
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${page}`);
  });
  document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} | Elite VitaMed Aesthetics`;
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
  setupPageMotion();
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
    const preferredContact = form.querySelector('[name="preferred_contact"]');
    const treatmentInterest = form.querySelector('[name="treatment_interest"]');

    form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    form.querySelectorAll("[aria-describedby]").forEach((field) => field.removeAttribute("aria-describedby"));
    form.querySelectorAll("[data-field-error]").forEach((message) => message.remove());

    if (!firstName.value.trim()) invalid.push([firstName, "Enter your first name."]);
    if (!phone.value.trim() && !email.value.trim()) {
      invalid.push([phone, "Enter a phone number or email address.", [phone, email]]);
    }
    if (!preferredContact.value) invalid.push([preferredContact, "Choose your preferred contact method."]);
    if (!treatmentInterest.value) invalid.push([treatmentInterest, "Choose a treatment interest."]);

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

function setupMenu() {
  const button = document.querySelector("#menuButton");
  const menu = document.querySelector("#mobileMenu");
  button.addEventListener("click", () => {
    const open = menu.classList.toggle("hidden") === false;
    button.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      button.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll(".nav-group").forEach((group) => {
    const trigger = group.querySelector(".nav-trigger");
    let closeTimer;

    group.addEventListener("mouseenter", () => {
      clearTimeout(closeTimer);
      document.querySelectorAll(".nav-group.open").forEach((openGroup) => {
        if (openGroup !== group) openGroup.classList.remove("open");
      });
      group.classList.add("open");
    });

    group.addEventListener("mouseleave", () => {
      closeTimer = setTimeout(() => group.classList.remove("open"), 240);
    });

    trigger.addEventListener("click", () => {
      document.querySelectorAll(".nav-group.open").forEach((openGroup) => openGroup.classList.remove("open"));
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-group")) {
      document.querySelectorAll(".nav-group.open").forEach((group) => group.classList.remove("open"));
    }
  });

  document.querySelectorAll(".mega-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-group.open").forEach((group) => group.classList.remove("open"));
    });
  });
}

window.addEventListener("hashchange", render);
setupMenu();
render();
