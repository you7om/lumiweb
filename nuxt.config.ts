import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "LUMI Web",
      meta: [
        { name: "description", content: "Webentwicklung in Dresden" },
        {
          name: "keywords",
          content:
            "Webentwicklung, Webdeveloper, Webseite, Webdesign, Frontend, Dresden, Julia Koval",
        },

        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Julia Koval" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,200,0,200",
        },
        { rel: "icon", type: "image/png", href: "" },
      ],
    },
  },
});
