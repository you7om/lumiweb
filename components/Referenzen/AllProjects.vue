<template>
  <div id="portfolio" class="w-full 2xl:w-3/4 px-4 2xl:px-0 mx-auto my-10 lg:my-20">
    <h2>Meine Projekte</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 lg:py-5">
      <NuxtLink
        v-for="project in referenzen"
        :key="project.slug"
        :to="`/referenzen/${project.slug}`"
        class="project-card group"
      >
        <div class="overflow-hidden rounded-t-2xl">
          <img :src="project.cardImg" :alt="project.title" class="card-img" />
        </div>
        <div class="text-area">
          <div class="flex flex-col gap-2">
            <span class="badge">{{ project.badge }}</span>
            <h4>{{ project.title }}</h4>
          </div>
          <p>{{ project.description }}</p>
          <span class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { referenzen } from "~/data/referenzen.js";
</script>

<style scoped>
@reference "tailwindcss";

.project-card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100
         hover:shadow-lg transition-all duration-300 flex flex-col;
}
.card-img {
  @apply object-cover
         group-hover:scale-105 transition-transform duration-500;
}
img {
  @apply w-full h-80;
}
.text-area {
  @apply px-6 py-8 flex flex-col flex-1 gap-3 transition-all duration-300 justify-between;
}
.badge {
  @apply text-xs font-semibold uppercase tracking-wide
         text-(--primary-orange) bg-(--primary-orange)/10
         px-3 py-1 rounded-full w-fit;
}
h4 {
  @apply text-xl font-bold text-(--primary-black) tracking-tight;
}
p {
  @apply text-lg text-(--primary-black)/80 leading-relaxed;
}
.card-btn {
  @apply mt-2 flex items-center gap-2 text-lg font-semibold
         text-(--primary-orange) group-hover:gap-2.5 transition-all duration-300 cursor-pointer w-fit;
}
.material-symbols-outlined {
  @apply text-white font-bold bg-(--primary-orange) rounded-full p-1 text-sm aspect-square inline-flex items-center justify-center leading-none;
}
</style>
