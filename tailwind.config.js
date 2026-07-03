/** Tailwind build config — compiled by build.mjs into assets/tailwind.css.
 * Mirrors the theme previously declared inline for the CDN build.
 * Content globs scan the SOURCE files (generated pages are produced from these). */
module.exports = {
  content: ["./template.html", "./assets/app.js", "./assets/injectables-assessment.js"],
  theme: {
    extend: {
      colors: {
        navy: "#06324a",
        "navy-deep": "#031d2e",
        champagne: "#d5a85e",
        "soft-gold": "#f3dfb8",
        ivory: "#fbf7ee",
        mist: "#edf6f8",
        ink: "#142536"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"]
      },
      boxShadow: {
        luxe: "0 24px 70px rgba(3, 29, 46, .14)",
        gold: "0 18px 50px rgba(213, 168, 94, .22)"
      }
    }
  },
  plugins: []
};
