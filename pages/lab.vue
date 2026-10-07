<template>
  <!-- Prototyp: Startseite mit Lumi-Formen-Scroll-Effekt -->
  <div>
    <LumiShapes />

    <!-- Orange Sektionen (data-lumi-red): Die Formen schweben dort Ton in Ton weiter -->
    <div data-lumi="heroSpread" data-lumi-top="0.1" data-lumi-red><CallToAction /></div>
    <div data-lumi="services"><ServicesOverview /></div>
    <div data-lumi="projects"><AllProjects /></div>
    <div data-lumi="about"><AboutMe /></div>
    <div data-lumi="contact" data-lumi-top="0.6" data-lumi-red><Kontakt /></div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "~/components/UI/TheFooter.vue";
import ServicesOverview from "~/components/ServicesOverview.vue";
import AboutMe from "~/components/AboutMe.vue";
import CallToAction from "~/components/CallToAction.vue";
import AllProjects from "~/components/Referenzen/AllProjects.vue";
import Kontakt from "~/components/Kontakt.vue";
import LumiShapes from "~/components/LumiShapes.vue";

useSeoMeta({
  title: "Lab – Lumi-Formen",
  robots: "noindex, nofollow",
});
</script>
