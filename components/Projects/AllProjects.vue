<template>
  <div class="w-full 2xl:w-3/4 px-10 2xl:px-0 mx-auto my-15">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">

      <!-- Karte 1 -->
      <div class="project-card group">
        <div class="overflow-hidden rounded-t-2xl">
          <img
            src="/img/kraut-voll-card.png"
            alt="Kraut voll Glück"
            class="card-img"
          />
        </div>
        <div class="text-area">
          <span class="badge">Webseite</span>
          <h4>Kraut voll Glück</h4>
          <p>Webseite für Kräuterführungen & Wildpflanzen-Workshops in Dresden.</p>
          <button class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>

      <!-- Karte 2 (leer) -->
      <div class="project-card opacity-40">
        <div class="h-48 bg-gray-100 rounded-t-2xl flex items-center justify-center">
          <span class="text-gray-300 text-sm tracking-widest uppercase">Bald verfügbar</span>
        </div>
        <div class="text-area">
          <h4 class="text-gray-300">Nächstes Projekt</h4>
        </div>
      </div>

      <!-- Karte 3 (leer) -->
      <div class="project-card opacity-40">
        <div class="h-48 bg-gray-100 rounded-t-2xl flex items-center justify-center">
          <span class="text-gray-300 text-sm tracking-widest uppercase">Bald verfügbar</span>
        </div>
        <div class="text-area">
          <h4 class="text-gray-300">Nächstes Projekt</h4>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

.project-card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100
         hover:shadow-md transition-all duration-300;
}
.card-img {
  @apply w-full h-52 object-cover
         group-hover:scale-105 transition-transform duration-500;
}
.text-area {
  @apply p-6 flex flex-col gap-3;
}
.badge {
  @apply text-xs font-semibold uppercase tracking-wide
         text-(--primary-orange) bg-(--primary-orange)/10
         px-3 py-1 rounded-full w-fit;
}
h4 {
  @apply text-lg font-bold text-(--primary-black) tracking-tight;
}
p {
  @apply text-sm text-(--primary-black)/60 leading-relaxed;
}
.card-btn {
  @apply mt-2 flex items-center gap-1 text-sm font-semibold
         text-(--primary-orange) hover:gap-2 transition-all duration-300 cursor-pointer w-fit;
}
</style>