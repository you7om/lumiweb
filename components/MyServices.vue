<template>
  <div class="my-10 lg:my-20" id="leistungen">
    <div class="rounded-2xl w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <h2>Meine Leistungen</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2 2xl:gap-12">
        <div class="serviceCard">
          <h3>ONEPAGER</h3>

          <p>
            Alle Inhalte auf einen Blick. Alles, was deine Besucher wissen
            müssen, auf einer einzigen, klar aufgebauten Seite.
          </p>
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Onepager mit klarer Struktur
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Modernes, individuelles Design
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Für mobile Geräte optimiert
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Kontaktformular inklusive
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Impressum + Datenschutz
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Schnelle Umsetzung
            </li>
          </ul>

          <div class="ml-auto mt-3"><p class="price">ab 850 €</p></div>

          <button class="btn-black my-2" @click="navigateTo('/#kontakt')">Anfragen</button>
        </div>

        <div class="serviceCard">
          <h3>MEHRSEITIGE WEBSEITEN</h3>
          <p>
            Mehr Seiten, mehr Raum für dein Angebot. Strukturiert aufgebaut,
            damit Ihr Auftritt online genauso überzeugend ist wie vor Ort.
          </p>
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Bis zu 10 Seiten mit klarer Navigation
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Übersichtliche Navigation für eine optimale Nutzererfahrung
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Für mobile Geräte optimiert
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Kontaktformular inklusive
            </li>

            <li>
              <span class="material-symbols-outlined">check_small</span>
              Impressum + Datenschutz
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Schnelle Umsetzung
            </li>
          </ul>
          <div class="ml-auto mt-3"><p class="price">ab 1250 €</p></div>

          <button class="btn-black my-2" @click="navigateTo('/#kontakt')">Anfragen</button>
        </div>

        <div class="serviceCard">
          <h3>APP-ENTWICKLUNG</h3>
          <p>
            Du hast eine Idee für eine App oder brauchst eine digitale Lösung
            für dein Business? Ich entwickle eine Web-App, die deine Abläufe
            vereinfacht und deinen Kunden das Leben leichter macht.
          </p>
          <ul>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Moderne Web-Apps
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
              Individuelle Funktionen nach deinen Wünschen
            </li>
            <li>
              <span class="material-symbols-outlined">check_small</span>
              Moderne Technologien wie Vue.js & Nuxt
            </li>
          </ul>

          <div class="ml-auto mt-3"><p class="price">ab 1900 €</p></div>

          <button class="btn-black my-2" @click="navigateTo('/#kontakt')">Anfragen</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-2xl font-bold text-left text-(--primary-black) mb-5 tracking-tight uppercase;
}
p {
  @apply text-(--primary-black)  leading-relaxed text-xl mb-5 text-justify;
}
ul {
  @apply text-left flex flex-col gap-2 text-lg text-(--primary-black) mt-3;
}
li {
  @apply flex gap-2 text-lg text-(--primary-black) items-center;
}
.serviceCard {
  @apply border border-(--primary-orange) rounded-2xl p-6 md:px-12 md:py-16 text-center justify-between flex flex-col;
}
.material-symbols-outlined {
  @apply text-(--primary-orange) font-extrabold;
}
.price {
  @apply text-(--primary-orange) font-bold text-3xl 2xl:text-4xl;
}
</style>
