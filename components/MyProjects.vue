<template>
  <div class="my-10 lg:my-20" id="portfolio">
    <h2>Meine Projekte</h2>
    <AllProjects />
    <KrautVollOrange />
    <SecurityFirma />
  </div>
</template>

<script setup>
import AllProjects from './Projects/AllProjects.vue';
import KrautVoll from './Projects/KrautVoll.vue';
import KrautVollOrange from './Projects/KrautVollOrange.vue';
import ParkingSoft from './Projects/ParkingSoft.vue';
import SecurityFirma from './Projects/SecurityFirma.vue';

</script>

<style scoped></style>
