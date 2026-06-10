<template>
  <div>
    <AllProjects />
  </div>
</template>

<script setup>
import AllProjects from "~/components/Referenzen/AllProjects.vue";

definePageMeta({ layout: "referenzen" });

useSeoMeta({
  title: "Projekte – LUMI Web",
  description:
    "Alle Web-Projekte von LumiWeb – Webentwicklung & Webdesign in Dresden. Individuelle Webseiten für Unternehmen und Selbstständige.",
  ogTitle: "Projekte – LUMI Web",
  ogDescription:
    "Alle Web-Projekte von LumiWeb – Webentwicklung & Webdesign in Dresden.",
  ogImage: "https://lumiweb.de/og-image.png",
  ogUrl: "https://lumiweb.de/projects",
  ogType: "website",
});
</script>

<style scoped></style>
