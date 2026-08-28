<template>
  <div class="my-10 lg:my-20" id="leistungen">
    <div class="rounded-2xl w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <h2>Meine Leistungen</h2>

      <div class="servicesList">
        <div class="serviceSection">
          <div class="serviceSection-overlay"></div>
          <div class="serviceSection-content">
            <h3>ONEPAGER</h3>
            <div class="serviceIntro">
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
                <li>
                  <span class="material-symbols-outlined">check_small</span>
                  Impressum + Datenschutz
                </li>
                <li>
                  <span class="material-symbols-outlined">check_small</span>
                  Schnelle Umsetzung
                </li>
              </ul>
            </div>

            <div class="priceCards">
              <div class="priceCard">
                <p class="priceCard-text">
                  Du entscheidest dich für ein bestehendes Design und stellst
                  deine eigenen Inhalte bereit. Ich kümmere mich um die
                  Umsetzung.
                </p>
                <p class="price">ab 450 €</p>
              </div>
              <div class="priceCard">
                <p class="priceCard-text">
                  Ich entwickle ein individuelles Design, das zu deinem
                  Unternehmen und deinen Vorstellungen passt, und übernehme die
                  komplette Umsetzung deiner Website.
                </p>
                <p class="price">ab 850 €</p>
              </div>
            </div>

            <button class="btn-black mt-6" @click="navigateTo('/#kontakt')">
              Anfragen
            </button>
          </div>
        </div>

        <div class="serviceSection">
          <div class="serviceSection-overlay"></div>
          <div class="serviceSection-content">
            <h3>MEHRSEITIGE WEBSEITEN</h3>
            <div class="serviceIntro">
              <p>
                Mehr Seiten, mehr Raum für dein Angebot. Strukturiert aufgebaut,
                damit dein Auftritt online genauso überzeugend ist wie vor Ort.
              </p>
              <ul>
                <li>
                  <span class="material-symbols-outlined">check_small</span>
                  Bis zu 10 Seiten
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
            </div>

            <div class="priceCards">
              <div class="priceCard">
                <p class="priceCard-text">
                  Du entscheidest dich für ein bestehendes Design und stellst
                  deine eigenen Inhalte bereit. Ich kümmere mich um die
                  Umsetzung.
                </p>
                <p class="price">ab 900 €</p>
              </div>
              <div class="priceCard">
                <p class="priceCard-text">
                  Ich entwickle ein individuelles Design, das zu deinem
                  Unternehmen und deinen Vorstellungen passt, und übernehme die
                  komplette Umsetzung deiner Website.
                </p>
                <p class="price">ab 1250 €</p>
              </div>
            </div>

            <button class="btn-black mt-6" @click="navigateTo('/#kontakt')">
              Anfragen
            </button>
          </div>
        </div>

        <div class="serviceSection">
          <div class="serviceSection-overlay"></div>
          <div class="serviceSection-content">
            <h3>WEB-APP-ENTWICKLUNG</h3>
            <div class="serviceIntro">
              <p>
                Du hast eine Idee für eine App oder brauchst eine digitale
                Lösung für dein Business? Ich entwickle eine Web-App, die deine
                Abläufe vereinfacht und deinen Kunden das Leben leichter macht.
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
                <li>
                  <span class="material-symbols-outlined">check_small</span>
                  Effiziente Automatisierung deiner Abläufe
                </li>
              </ul>
            </div>

            <p class="price mt-8">ab 1900 €</p>

            <button class="btn-black mt-6" @click="navigateTo('/#kontakt')">
              Anfragen
            </button>
          </div>
        </div>
      </div>

      <div class="extraCostsBox">
        <div class="serviceSection-overlay"></div>
        <div class="serviceSection-content">
          <h4>Zusätzliche Kosten</h4>
          <ul class="extraCostsList">
            <li>
              <span class="extraCostsIcon material-symbols-outlined"
                >public</span
              >
              <p>
                <span class="font-semibold">Domain & Hosting:</span> ca. 5–10 €
                pro Monat, je nach Anbieter. Damit wird deine Domain registriert
                und deine Website online gespeichert.
              </p>
            </li>
            <li>
              <span class="extraCostsIcon material-symbols-outlined">lock</span>
              <p>
                <span class="font-semibold">SSL-Zertifikat:</span> meist
                kostenlos inklusive
              </p>
            </li>
          </ul>
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
  @apply text-(--primary-black) leading-relaxed text-xl mb-0 text-left;
}
ul {
  @apply text-left grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-lg text-(--primary-black);
}
li {
  @apply flex gap-2 text-lg text-(--primary-black) items-center;
}
.material-symbols-outlined {
  @apply text-(--primary-orange) font-extrabold;
}
.price {
  @apply text-(--primary-orange) font-bold text-2xl 2xl:text-3xl;
}

.servicesList {
  @apply flex flex-col gap-8 lg:gap-10;
}
.serviceSection {
  @apply relative overflow-hidden rounded-2xl bg-[url('/orange-abstract.jpg')] bg-cover bg-center p-6 md:p-10 lg:p-12;
}
.serviceSection-overlay {
  @apply absolute inset-0 bg-(--primary-beige)/92;
}
.serviceSection-content {
  @apply relative z-10;
}
.serviceIntro {
  @apply flex flex-col gap-4;
}
.serviceIntro p {
  @apply max-w-3xl;
}

.priceCards {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8;
}
.priceCard {
  @apply flex flex-col justify-between gap-2 bg-(--primary-beige) border border-(--primary-black)/8 shadow-sm
  rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
}
.priceCard-text {
  @apply text-(--primary-black) text-lg leading-relaxed mb-0 text-left;
}
.priceCard .price {
  @apply text-xl 2xl:text-2xl;
}

.extraCostsBox {
  @apply relative overflow-hidden rounded-2xl bg-[url('/orange-abstract.jpg')] bg-cover bg-center p-6 md:px-12 md:py-10 mt-8 2xl:mt-12;
}
.extraCostsBox h4 {
  @apply text-sm font-semibold text-left text-(--primary-orange) mb-6 tracking-[0.15em] uppercase;
}
.extraCostsList {
  @apply text-left grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10;
}
.extraCostsList li {
  @apply flex gap-4 items-start;
}
.extraCostsList p {
  @apply text-(--primary-black) text-base leading-relaxed mb-0 text-left;
}
.extraCostsIcon {
  @apply shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-(--primary-orange)/10 text-xl;
}
</style>
