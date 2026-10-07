<template>
  <!-- Testumgebung für die Startseite: zeigt dieselbe Komponente, aber nicht für Suchmaschinen -->
  <LumiHome />
</template>

<script setup>
import LumiHome from "~/components/LumiHome.vue";

useSeoMeta({
  title: "Lab – Lumi-Formen",
  robots: "noindex, nofollow",
});
</script>
