<template>
  <div>
    <AboutMe />
    <CallToAction />
    <MyServices />
    <AllProjects />
    <Kontakt />
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "~/components/UI/TheFooter.vue";
import MyServices from "~/components/MyServices.vue";
import AboutMe from "~/components/AboutMe.vue";
import CallToAction from "~/components/CallToAction.vue";
import AllProjects from "~/components/Referenzen/AllProjects.vue";
import Kontakt from "~/components/Kontakt.vue";

useSeoMeta({
  title: "LUMI Web – Webentwicklung & Webdesign in Dresden",
  description:
    "Moderne Webseiten für Unternehmen und Selbstständige. LumiWeb – professionelles Webdesign & Webentwicklung. Jetzt anfragen.",
  ogTitle: "LUMI Web – Webentwicklung & Webdesign in Dresden",
  ogDescription:
    "Moderne Webseiten für Unternehmen und Selbstständige. LumiWeb – professionelles Webdesign & Webentwicklung.",
  ogImage: "https://lumiweb.de/og-image.png",
  ogUrl: "https://lumiweb.de",
  ogType: "website",
  twitterTitle: "LUMI Web – Webentwicklung & Webdesign in Dresden",
  twitterDescription:
    "Moderne Webseiten für Unternehmen und Selbstständige. LumiWeb – professionelles Webdesign & Webentwicklung.",
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
          "Professionelle Webentwicklung und Webdesign in Dresden. Individuelle Webseiten mit Nuxt.js/Vue.js und WordPress.",
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
                name: "WordPress-Websites",
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
