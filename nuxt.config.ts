import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  site: {
    url: "https://lumiweb.de",
    name: "LUMI Web",
  },

  modules: ["@nuxtjs/sitemap"],

  sitemap: {
    strictNuxtContentPaths: false,
    urls: [
      { loc: "/projects/moku-cafe", changefreq: "monthly", priority: 0.8 },
      { loc: "/projects/krautvollglueck", changefreq: "monthly", priority: 0.8 },
      { loc: "/projects/parkingsoft", changefreq: "monthly", priority: 0.8 },
      { loc: "/projects/dwsd", changefreq: "monthly", priority: 0.8 },
      { loc: "/projects/securetime", changefreq: "monthly", priority: 0.8 },
      { loc: "/projects/der-bunte-laden", changefreq: "monthly", priority: 0.8 },
      { loc: "/projects/sunday-yolk", changefreq: "monthly", priority: 0.8 },
    ],
    exclude: [
      "/agb",
      "/datenschutz",
      "/impressum",
      "/cookie-hinweise",
      "/rechnung-der-bunte-laden",
    ],
  },

  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: "de" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Julia Koval" },
        { name: "google-site-verification", content: "zqwRlIUqtI7CEyp5Dz9fhxBl_YwD2ql6qTUV95XIZ_Q" },
        { property: "og:site_name", content: "LUMI Web" },
        { property: "og:locale", content: "de_DE" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,200,0,200",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      ],
    },
  },
});
