<template>
  <div class="w-full 2xl:w-3/4 mx-auto my-20 px-8 2xl:px-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">

      <!-- Linke Seite: Text -->
      <div class="flex flex-col justify-between bg-white px-12 py-14">

        <!-- Badge -->
        <div class="mb-6">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary-orange) bg-(--primary-orange)/10 px-4 py-1.5 rounded-full">
            Webseite
          </span>
        </div>

        <!-- Titel -->
        <div class="mb-8">
          <h3>Kraut voll Glück</h3>
          <h4>Kräuterführungen & Wildpflanzen-Workshops</h4>
        </div>

        <!-- Text -->
        <div class="flex flex-col gap-4 mb-8">
          <p>
            Die Website präsentiert saisonale Spaziergänge, bei denen Teilnehmer
            essbare Wildpflanzen kennenlernen und nachhaltig sammeln können.
          </p>
          <p>
            Das Design orientiert sich an den Farben der Natur — grüne Töne und
            viel Weißraum sorgen für eine ruhige, einladende Atmosphäre.
          </p>
        </div>

        <!-- Trennlinie -->
        <div class="border-t border-gray-100 pt-8">
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Übersichtliches Layout
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Für mobile Geräte optimiert
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Harmonisches Farbkonzept
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Über-mich-Seite mit persönlicher Geschichte
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Kontaktformular für Anfragen & Buchungen
            </li>
          </ul>
        </div>
      </div>

      <!-- Rechte Seite: Bild -->
      <div class="relative flex items-end justify-center bg-(--primary-orange)/80 overflow-hidden pt-10">
        <!-- Dezenter Hintergrundkreis -->
        <div class="absolute w-80 h-80 rounded-full bg-(--primary-orange)/15 "></div>
        <img
                  src="/img/kraut-voll-header.png"

          class="relative z-10 w-3/5 h-auto rounded-t-2xl shadow-2xl mt-auto"
        />
      </div>

    </div>
  </div>
</template>

<script setup></script>

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
</style>