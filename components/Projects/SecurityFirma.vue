<template>
  <div class="rounded-2xl w-full 2xl:w-3/4 px-10 2xl:px-0 mx-auto my-15">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 py-5">
      <div class="flex items-center justify-center">
        <img
          src="/img/dwsd-header.png"
          class="w-full h-auto rounded-xl shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-between">
        <h3>DWSD Sicherheit</h3>
        <h4>Webseite für den Dresdner Wach- & Sicherheitsdienst</h4>
        
        <p>
          Die Website gibt einen klaren Überblick über alle angebotenen
          Dienstleistungen. Jede Leistung ist übersichtlich aufgebaut, damit
          potenzielle Kunden schnell das Richtige finden.
        </p>
        <p>
          Ein besonderes Augenmerk lag auf Seriosität und Vertrauen. Klare
          Strukturen, professionelle Bildsprache und eine direkte
          Kontaktmöglichkeit vermitteln sofort Kompetenz und Zuverlässigkeit.
        </p>
        <ul>
          <li>
            <span class="material-symbols-outlined">check_small</span>klare
            Struktur & Navigation
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span>responsive
            Design
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Kontaktformular
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Karriere-Seite mit Stellenangeboten
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Kundenstimmen & Referenzen
          </li>
        </ul>
        <p>
          <span class="font-bold text-(--primary-orange)">Technologien:</span>
          Vue, Nuxt, TailwindCSS
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-left text-(--primary-orange) mb-1 tracking-tight uppercase;
}
h4 {
  @apply text-2xl font-semibold text-left text-(--primary-black) mb-4 tracking-tight uppercase;
}
p {
  @apply text-(--primary-black) text-left leading-relaxed text-xl my-2;
}
ul {
  @apply text-left flex flex-col gap-2 text-(--primary-black) mt-3;
}
li {
  @apply flex gap-2 text-xl text-(--primary-black) items-center;
}

.material-symbols-outlined {
  @apply text-(--primary-orange) font-extrabold text-2xl;
}
</style>
