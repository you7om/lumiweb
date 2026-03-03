<template>
  <div class="rounded-2xl w-full 2xl:w-3/4 px-10 2xl:px-0 mx-auto my-15">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-10 py-5">
      <div class="flex flex-col justify-between">
        <h3>Kraut voll Glück</h3>
        <h4>Webseite für Kräuterführungen & Wildpflanzen-Workshops</h4>
        <p>
          Die Website präsentiert saisonale Spaziergänge, bei denen Teilnehmer essbare Wildpflanzen kennenlernen und
          nachhaltig sammeln können.
        </p>
        <p>
          Im Vordergrund stand eine einfache, intuitive Navigation – damit sich
          Interessierte schnell über Termine und Inhalte informieren können,
          ohne sich durch komplizierte Menüs klicken zu müssen.
        </p>
        <p>
          Das Design orientiert sich an den Farben und Formen der Natur. Grüne
          Töne und viel Weißraum sorgen für eine ruhige,
          einladende Atmosphäre. Die Seite wirkt dadurch nicht wie ein
          gewöhnliches Buchungsportal, sondern wie eine persönliche Einladung in
          den Wald.
        </p>
        <ul>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >übersichtliches Layout
          </li>

          <li>
            <span class="material-symbols-outlined">check_small</span>responsive
            Design
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span>harmonisches Farbkonzept
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Über-mich-Seite mit persönlicher Geschichte
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Kontaktformular für Anfragen und Buchungen
          </li>
        </ul>
        <p>
          <span class="font-bold text-(--primary-orange)">Technologien:</span>
          WordPress
        </p>
      </div>

      <div class="flex items-center justify-center">
        <img
                  src="/img/kraut-voll-header.png"

          class="w-full h-auto rounded-xl shadow-lg"
        />
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
  @apply text-(--primary-black) text-left leading-relaxed text-xl my-3;
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
