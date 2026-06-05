<template>
  <div class="lg:hidden w-full bg-gray-100 py-7 px-6">
    <img :src="project.fullScreenshot" :alt="project.title" class="w-full h-auto shadow-lg rounded-sm" />
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>

<style scoped></style>
