<template>
  <div>
    <AllProjects />
    <Kontakt />
    <TheFooter />
  </div>
</template>

<script setup>
import AllProjects from "~/components/Referenzen/AllProjects.vue";
import Kontakt from "~/components/Kontakt.vue";
import TheFooter from "~/components/UI/TheFooter.vue";

definePageMeta({ layout: "referenzen" });

useSeoMeta({
  title: "Projekte – LumiWeb",
  description:
    "Alle Web-Projekte von LumiWeb – Webentwicklung & Webdesign in Dresden. Individuelle Webseiten für Unternehmen und Selbstständige.",
  ogTitle: "Projekte – LumiWeb",
  ogDescription:
    "Alle Web-Projekte von LumiWeb – Webentwicklung & Webdesign in Dresden.",
  ogImage: "https://lumiweb.de/og-image.png",
  ogUrl: "https://lumiweb.de/projects",
  ogType: "website",
});
</script>

<style scoped></style>
