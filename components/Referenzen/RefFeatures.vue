<template>
  <div class="bg-(--primary-orange) py-10 lg:py-20 px-10 lg:px-0">
    <div class="w-full lg:w-3/4 mx-auto">
      <!-- Überschrift -->
      <div class="text-center mb-10">
        <span class="feature-badge">Eigenschaften</span>
        <h3>Das steckt drin</h3>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--primary-beige)/10 border border-(--primary-beige)/20 rounded-lg overflow-hidden"
      >
        <div
          class="feature-card"
          v-for="feature in project.features"
          :key="feature"
        >
          <span class="material-symbols-outlined feature-icon">{{
            feature.icon
          }} </span>
          <p class="feature-title">{{ feature.text }}</p>
          <p class="feature-text">
            {{ feature.desc }}
          </p>
        </div>
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
  @apply text-4xl font-bold text-(--primary-beige) tracking-tight mt-3;
}

.feature-badge {
  @apply text-xs uppercase tracking-[0.2em] text-(--primary-beige)/60 font-semibold;
}

.feature-card {
  @apply flex flex-col gap-3 p-4 2xl:p-12 bg-(--primary-orange) hover:bg-(--primary-beige)/5 transition-colors duration-300;
}

.feature-icon {
  @apply text-(--primary-beige) text-3xl;
}

.feature-title {
  @apply font-semibold text-(--primary-beige) text-base lg:text-xl leading-snug;
}

.feature-text {
  @apply text-(--primary-beige)/80 text-base lg:text-lg lg:leading-relaxed;
}
</style>
