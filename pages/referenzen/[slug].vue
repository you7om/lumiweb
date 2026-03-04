<template>
  <div>
    <RefDescription :project="project" />
    <RefLaptop :project="project" />
    <RefFeatures :project="project" />
    <RefMobile :project="project" />
    <Kontakt />
    <TheFooter />
  </div>
</template>

<script setup>
import RefDescription from "~/components/Referenzen/RefDescription.vue";
import RefFeatures from "~/components/Referenzen/RefFeatures.vue";
import RefLaptop from "~/components/Referenzen/RefLaptop.vue";
import RefMobile from "~/components/Referenzen/RefMobile.vue";
import TheFooter from "~/components/UI/TheFooter.vue";


import { referenzen } from "~/data/referenzen.js";

definePageMeta({
  layout: "referenzen",
})

const route = useRoute();
const project = referenzen.find((p) => p.slug === route.params.slug);
</script>

<style scoped></style>
