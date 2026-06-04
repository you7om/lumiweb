<template>
  <div class="w-full 2xl:w-3/4 mx-auto my-6 lg:my-15 px-4 2xl:px-0">
    <div
      class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] rounded-3xl overflow-hidden shadow-xl"
    >
      <!-- Mobile: Hero-Bild oben (nur auf Mobile, nur wenn vorhanden) -->
      <div v-if="project.imgDescriptionMobile" class="lg:hidden">
        <img :src="project.imgDescriptionMobile" class="w-full h-auto object-cover" />
      </div>

      <!-- Linke Seite: Text -->
      <div class="flex flex-col justify-start bg-white px-7 py-8 lg:px-12 lg:py-10">
        <!-- Badge -->
        <div class="mb-6">
          <span
            class="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary-orange) bg-(--primary-orange)/10 px-4 py-1.5 rounded-full"
          >
            {{ project.badge }}
          </span>
        </div>

        <!-- Titel -->
        <div class="mb-8">
          <h3>{{ project.title }}</h3>
          <h4>{{ project.description }}</h4>
        </div>

        <!-- Text -->
        <div class="flex flex-col gap-4 mb-8">
          <p v-for="text in project.texts" :key="text">{{ text }}</p>
        </div>

        <!-- Trennlinie -->
        <!-- Trennlinie -->
        <div class="border-t border-gray-100 pt-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div class="flex flex-col gap-1">
              <p class="info-label">Branche</p>
              <p class="info-value">{{ project.industry }}</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="info-label">Standort</p>
              <p class="info-value">{{ project.location }}</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="info-label">Leistungen</p>
              <p class="info-value">{{ project.services }}</p>
            </div>
            <div class="flex flex-col gap-1">
              <p class="info-label">Jahr</p>
              <p class="info-value">{{ project.year }}</p>
            </div>
          </div>

          <!-- Webseiten-Link -->
          <a
            v-if="project.url"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-(--primary-orange) text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            <span class="material-symbols-outlined text-white! text-base">open_in_new</span>
            Zur Webseite
          </a>
        </div>
      </div>

      <!-- Desktop: Screenshot rechts (nur auf Desktop) -->
      <div
        class="hidden lg:flex relative items-end justify-center bg-(--primary-orange)/80 overflow-hidden lg:pt-10"
      >
        <img
          :src="project.img"
          class="relative z-10 w-4/5 h-auto rounded-t-2xl shadow-2xl mt-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-3xl font-bold text-(--primary-orange) tracking-tight mb-2;
}
h4 {
  @apply text-base font-medium text-(--primary-black)/50 tracking-wide uppercase;
}
p {
  @apply text-(--primary-black) text-base;
}
ul {
  @apply flex flex-col gap-3;
}
li {
  @apply flex items-center gap-2 text-base text-(--primary-black);
}
.material-symbols-outlined {
  @apply text-(--primary-orange) font-extrabold;
}
.info-label {
  @apply text-base uppercase  font-semibold text-(--primary-orange);
}
.info-value {
  @apply text-base text-(--primary-black);
}
</style>
