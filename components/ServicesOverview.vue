<template>
  <div class="my-10 lg:my-20" id="leistungen">
    <div class="rounded-2xl w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <h2>Meine Leistungen</h2>

      <div class="servicesGrid">
        <div class="serviceCard">
          <h3>Onepager</h3>
          <p>
            Kompakte Website für Selbstständige und kleine Unternehmen.
          </p>
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Alle Inhalte auf einer Seite
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Modernes Design
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Für mobile Geräte optimiert
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Kontaktformular inklusive
            </li>
          </ul>
          <p class="price">ab 450 €</p>
        </div>

        <div class="serviceCard">
          <h3>Mehrseitige Website</h3>
          <p>
            Mehr Raum für Leistungen, Angebote und dein Unternehmen.
          </p>
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Bis zu 10 Seiten
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Übersichtliche Navigation
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Für mobile Geräte optimiert
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Kontaktformular inklusive
            </li>
          </ul>
          <p class="price">ab 900 €</p>
        </div>

        <div class="serviceCard">
          <h3>Web-App-Entwicklung</h3>
          <p>
            Individuelle digitale Lösungen für spezielle Anforderungen.
          </p>
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Individuelle Funktionen nach deinen Wünschen
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Intuitives, nutzerfreundliches Design
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Auf allen Geräten nutzbar
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Moderne Technologien wie Vue.js & Nuxt
            </li>
          </ul>
          <p class="price">ab 1.900 €</p>
        </div>
      </div>

      <div class="text-center mt-8 lg:mt-10">
        <NuxtLink to="/leistungen" class="btn-orange">
          Leistungen &amp; Pakete ansehen
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-xl font-bold text-left text-(--primary-black) mb-3 tracking-tight uppercase;
}
p {
  @apply text-(--primary-black) leading-relaxed text-lg 2xl:text-xl mb-0 text-left;
}
ul {
  @apply flex flex-col gap-2 mt-4;
}
li {
  @apply flex gap-2 text-base lg:text-lg text-(--primary-black) items-center;
}
.material-symbols-outlined {
  @apply text-(--primary-orange) font-extrabold;
}
.price {
  @apply text-(--primary-orange) font-bold text-xl 2xl:text-2xl mt-4;
}

.servicesGrid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6;
}
.serviceCard {
  @apply flex flex-col bg-(--primary-beige) border border-(--primary-black)/8 shadow-sm
  rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
}
</style>
