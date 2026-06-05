<template>
  <div>
    <RefDescription :project="project" />
    <RefFullScreenshot :project="project" />
    <RefFeatures :project="project" />
    <RefLaptop :project="project" />
    <RefMobile :project="project" />
    <RefKonzeptBanner v-if="project.konzept" />
    <Kontakt />
    <TheFooter />
  </div>
</template>

<script setup>
import RefDescription from "~/components/Referenzen/RefDescription.vue";
import RefFullScreenshot from "~/components/Referenzen/RefFullScreenshot.vue";
import RefFeatures from "~/components/Referenzen/RefFeatures.vue";
import RefLaptop from "~/components/Referenzen/RefLaptop.vue";
import RefMobile from "~/components/Referenzen/RefMobile.vue";
import RefKonzeptBanner from "~/components/Referenzen/RefKonzeptBanner.vue";
import TheFooter from "~/components/UI/TheFooter.vue";

import { referenzen } from "~/data/referenzen.js";

definePageMeta({
  layout: "referenzen",
});

const route = useRoute();
const project = referenzen.find((p) => p.slug === route.params.slug);

useSeoMeta({
  title: () => `${project?.title} – Portfolio | LUMI Web`,
  description: () => project?.description,
  ogTitle: () => `${project?.title} – Portfolio | LUMI Web`,
  ogDescription: () => project?.description,
  ogImage: () =>
    project?.img ? `https://lumiweb.de${project.img}` : "https://lumiweb.de/og-image.png",
  ogUrl: () => `https://lumiweb.de/referenzen/${project?.slug}`,
  ogType: "website",
  twitterTitle: () => `${project?.title} – Portfolio | LUMI Web`,
  twitterDescription: () => project?.description,
  twitterImage: () =>
    project?.img ? `https://lumiweb.de${project.img}` : "https://lumiweb.de/og-image.png",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: () =>
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project?.title,
          description: project?.description,
          url: `https://lumiweb.de/referenzen/${project?.slug}`,
          creator: {
            "@type": "Person",
            name: "Julia Koval",
            url: "https://lumiweb.de",
          },
          dateCreated: project?.year,
          locationCreated: {
            "@type": "Place",
            name: project?.location,
          },
        }),
    },
  ],
});
</script>

<style scoped></style>
