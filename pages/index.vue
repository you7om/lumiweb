<template>
  <LumiHome />
</template>

<script setup>
import LumiHome from "~/components/LumiHome.vue";

useSeoMeta({
  title: "LumiWeb – Webentwicklung & Webdesign in Dresden",
  description:
    "Webseiten für kleine Unternehmen und Selbstständige aus Dresden. Onepager ab 450 €, mehrseitig ab 900 €. Jetzt anfragen.",
  ogTitle: "LumiWeb – Webentwicklung & Webdesign in Dresden",
  ogDescription:
    "Webseiten für kleine Unternehmen und Selbstständige aus Dresden. Onepager ab 450 €, mehrseitig ab 900 €. Jetzt anfragen.",
  ogImage: "https://lumiweb.de/og-image.png",
  ogUrl: "https://lumiweb.de",
  ogType: "website",
  twitterTitle: "LumiWeb – Webentwicklung & Webdesign in Dresden",
  twitterDescription:
    "Webseiten für kleine Unternehmen und Selbstständige aus Dresden. Onepager ab 450 €, mehrseitig ab 900 €. Jetzt anfragen.",
  twitterImage: "https://lumiweb.de/og-image.png",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "LumiWeb",
        description:
          "Professionelle Webentwicklung und Webdesign. Individuelle Webseiten mit Nuxt.js/Vue.js und WordPress.",
        url: "https://lumiweb.de",
        founder: {
          "@type": "Person",
          name: "Julia Koval",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dresden",
          addressCountry: "DE",
        },
        serviceArea: {
          "@type": "Place",
          name: "Dresden, Deutschland",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Webdesign & Webentwicklung",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Individuelle Webseiten mit Nuxt.js/Vue.js",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "WordPress-Webseiten",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Webdesign & UX-Design",
              },
            },
          ],
        },
      }),
    },
  ],
});
</script>

<style scoped></style>
