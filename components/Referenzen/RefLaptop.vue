<template>
  <div class="hidden lg:block w-full mx-auto pt-10 pb-0 lg:py-20 px-8 2xl:px-0 bg-white">
    <div class="mx-auto w-full lg:w-2/3 2xl:w-3/5">
      <div class="relative rounded-xl overflow-hidden shadow-xl border border-black/5">
        <img :src="images[current]" alt="" class="w-full h-auto block" />

        <template v-if="images.length > 1">
          <button
            @click="prev"
            aria-label="Vorheriges Bild"
            class="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-(--primary-black) shadow-md hover:bg-white transition-colors"
          >
            <span class="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            @click="next"
            aria-label="Nächstes Bild"
            class="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full bg-white/80 text-(--primary-black) shadow-md hover:bg-white transition-colors"
          >
            <span class="material-symbols-outlined">chevron_right</span>
          </button>
        </template>
      </div>

      <div v-if="images.length > 1" class="flex justify-center gap-2 mt-4">
        <button
          v-for="(_, index) in images"
          :key="index"
          @click="current = index"
          :aria-label="`Bild ${index + 1} anzeigen`"
          class="w-2.5 h-2.5 rounded-full transition-colors"
          :class="index === current ? 'bg-(--primary-orange)' : 'bg-black/15 hover:bg-black/30'"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  project: Object,
});

const images = computed(() => {
  const src = props.project?.imgLaptopHeader;
  return Array.isArray(src) ? src : [src];
});

const current = ref(0);

function next() {
  current.value = (current.value + 1) % images.value.length;
}

function prev() {
  current.value = (current.value - 1 + images.value.length) % images.value.length;
}
</script>

<style scoped></style>
