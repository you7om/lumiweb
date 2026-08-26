<template>
  <div>
    <MyServices />
    <LeistungenPreisfaktoren />
    <LeistungenVarianten />
    <LeistungenZusatzkosten />
    <LeistungenFAQ />
    <Kontakt />
  </div>
</template>

<script setup>
import LeistungenPreisfaktoren from "~/components/Leistungen/LeistungenPreisfaktoren.vue";
import LeistungenVarianten from "~/components/Leistungen/LeistungenVarianten.vue";
import LeistungenZusatzkosten from "~/components/Leistungen/LeistungenZusatzkosten.vue";
import LeistungenFAQ from "~/components/Leistungen/LeistungenFAQ.vue";
import MyServices from "~/components/MyServices.vue";
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
