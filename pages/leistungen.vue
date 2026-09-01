<template>
  <div>
    <MyServices />
    <ServicesAdditionalCosts />
    <ServicesComparisonTable />
    <ServicesPricingFactors />
    <ServicesFAQ />
    <Kontakt />
  </div>
</template>

<script setup>
import ServicesPricingFactors from "~/components/Services/ServicesPricingFactors.vue";
import ServicesAdditionalCosts from "~/components/Services/ServicesAdditionalCosts.vue";
import ServicesFAQ from "~/components/Services/ServicesFAQ.vue";
import MyServices from "~/components/Services/MyServices.vue";
import ServicesComparisonTable from "~/components/Services/ServicesComparisonTable.vue";
import Kontakt from "~/components/Kontakt.vue";

definePageMeta({
  layout: "leistungen",
});

useSeoMeta({
  title: "Leistungen & Preise – LUMI Web",
  description:
    "Onepager ab 450 €, mehrseitige Website ab 900 €, Web-App ab 1.900 €. Transparente Einstiegspreise für Webdesign & Webentwicklung in Dresden.",
  ogTitle: "Leistungen & Preise – LUMI Web",
  ogDescription:
    "Transparente Einstiegspreise für Webdesign & Webentwicklung – Onepager, mehrseitige Websites und Web-Apps.",
  ogImage: "https://lumiweb.de/og-image.png",
  ogUrl: "https://lumiweb.de/leistungen",
  ogType: "website",
});
</script>

<style scoped></style>
