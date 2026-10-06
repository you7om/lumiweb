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
                Ein kompakter Webauftritt für dein Unternehmen – alle wichtigen
                Informationen übersichtlich auf einer einzigen Seite vereint.
                Alles, was deine Besucher wissen müssen, findest du dort klar
                strukturiert und durchdacht aufgebaut, für einen überzeugenden
                ersten Eindruck.
              </p>
            </div>

            <div class="priceCards">
              <div class="priceCard">
                <h4 class="priceCard-name">Onepager Basis</h4>
                <p class="priceCard-text">
                  Du entscheidest dich für ein bestehendes Design aus meiner
                  Auswahl und stellst deine eigenen Inhalte bereit. Ich kümmere
                  mich um die komplette Umsetzung.
                </p>

                <div class="priceCard-block">
                  <p class="priceCard-label">Enthalten</p>
                  <ul class="priceCard-list">
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Eine Seite
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Bestehende Designstruktur
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      3 frei wählbare Blöcke zusätzlich zu Header &amp; Footer
                      (z. B. Über mich, Meine Leistungen, Meine Werte, Kontakt,
                      Photogalerie)
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Anpassung an deine Farben und dein Branding
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Responsive Design
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Kontaktformular
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Impressum & Datenschutz (Vorlage)
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Technische Umsetzung und Veröffentlichung
                    </li>
                  </ul>
                </div>

                <p class="price">ab 450 €</p>
              </div>
              <div class="priceCard">
                <h4 class="priceCard-name">Onepager Individuell</h4>
                <p class="priceCard-text">
                  Ich entwickle ein individuelles Design, das zu deinem
                  Unternehmen, deiner Zielgruppe und deinen Vorstellungen passt,
                  und übernehme die komplette Umsetzung deiner Website.
                </p>

                <div class="priceCard-block">
                  <p class="priceCard-label">Enthalten</p>
                  <ul class="priceCard-list">
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Eine Seite
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Individuelles Webdesign
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      5 frei wählbare Inhaltsblöcke zusätzlich zu Header &amp;
                      Footer (z. B. Über mich, Meine Leistungen, Meine Werte,
                      Kontakt, Photogalerie)
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Responsive Design
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Individuelle Abstimmung während der Umsetzung
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Kontaktformular
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Impressum & Datenschutz (Vorlage)
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Technische Umsetzung und Veröffentlichung
                    </li>
                  </ul>
                </div>

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
                Mehr Seiten, mehr Raum für dein Angebot, deine Leistungen und
                dein Unternehmen. Strukturiert und übersichtlich aufgebaut,
                damit dein Auftritt online genauso überzeugend wirkt wie vor
                Ort – klar gegliedert und einfach zu navigieren.
              </p>
            </div>

            <div class="priceCards">
              <div class="priceCard">
                <h4 class="priceCard-name">Mehrseitig Basis</h4>
                <p class="priceCard-text">
                  Du entscheidest dich für ein bestehendes Design aus meiner
                  Auswahl und stellst deine eigenen Inhalte bereit. Ich kümmere
                  mich um die komplette Umsetzung.
                </p>

                <div class="priceCard-block">
                  <p class="priceCard-label">Enthalten</p>
                  <ul class="priceCard-list">
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Bis zu 5 Seiten
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Bestehende Designstruktur
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Übersichtliche Navigation für eine optimale
                      Nutzererfahrung
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Anpassung an deine Farben und dein Branding
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Responsive Design
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Kontaktformular
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Impressum & Datenschutz (Vorlage)
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Technische Umsetzung und Veröffentlichung
                    </li>
                  </ul>
                </div>

                <p class="price">ab 900 €</p>
              </div>
              <div class="priceCard">
                <h4 class="priceCard-name">Mehrseitig Individuell</h4>
                <p class="priceCard-text">
                  Ich entwickle ein individuelles Design, das zu deinem
                  Unternehmen und deinen Vorstellungen passt, und übernehme die
                  komplette Umsetzung deiner Website.
                </p>

                <div class="priceCard-block">
                  <p class="priceCard-label">Enthalten</p>
                  <ul class="priceCard-list">
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Bis zu 10 Seiten
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Individuelles Webdesign
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Individuelle Seitenstruktur und Navigation
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Responsive Design
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Individuelle Abstimmung während der Umsetzung
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Kontaktformular
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Impressum & Datenschutz (Vorlage)
                    </li>
                    <li>
                      <span class="material-symbols-outlined">check_small</span>
                      Technische Umsetzung und Veröffentlichung
                    </li>
                  </ul>
                </div>

                <p class="price">ab 1.250 €</p>
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
                Du hast eine Idee für eine App oder brauchst eine individuelle
                digitale Lösung für dein Business? Ich entwickle eine moderne
                Web-App, die deine Abläufe vereinfacht, Prozesse automatisiert
                und deinen Kunden das Leben spürbar leichter macht.
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

      <div class="extrasBox">
        <div class="serviceSection-overlay"></div>
        <div class="serviceSection-content">
          <h3>Zusätzliche Kosten</h3>
          <ul class="extrasList">
            <li class="extrasItem" v-for="item in extraCosts" :key="item.title">
              <span class="extraCostsIcon material-symbols-outlined">{{
                item.icon
              }}</span>
              <div class="extrasItem-body">
                <p class="extrasItem-title">{{ item.title }}</p>
                <p class="extrasItem-text">{{ item.desc }}</p>
              </div>
              <p class="extrasItem-price">{{ item.price }}</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="extrasBox">
        <div class="serviceSection-overlay"></div>
        <div class="serviceSection-content">
          <h3>Zusätzliche Leistungen</h3>
          <ul class="extrasList">
            <li class="extrasItem" v-for="item in extras" :key="item.title">
              <span class="extraCostsIcon material-symbols-outlined">{{
                item.icon
              }}</span>
              <div class="extrasItem-body">
                <p class="extrasItem-title">{{ item.title }}</p>
                <p class="extrasItem-text">{{ item.desc }}</p>
              </div>
              <p class="extrasItem-price">{{ item.price }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const extraCosts = [
  {
    icon: "public",
    title: "Domain & Hosting",
    desc: "Je nach Anbieter. Damit wird deine Domain registriert und deine Website online gespeichert.",
    price: "ca. 5–10 € / Monat",
  },
  {
    icon: "mail",
    title: "E-Mail-Postfach",
    desc: "Eine eigene Adresse wie info@deinedomain.de. Beim Hosting oft schon dabei.",
    price: "oft inklusive",
  },
  {
    icon: "lock",
    title: "SSL-Zertifikat",
    desc: "Verschlüsselte Verbindung für deine Website.",
    price: "meist inklusive",
  },
  {
    icon: "gavel",
    title: "Impressum & Datenschutz",
    desc: "Ich erstelle eine Vorlage und binde sie technisch ein. Ich bin keine Anwältin und biete keine Rechtsberatung.",
    price: "Vorlage inklusive",
  },
];

const extras = [
  {
    icon: "view_agenda",
    title: "Zusätzlicher Inhaltsblock",
    desc: "z. B. Über mich, Leistungen, Referenzen, Galerie, FAQ",
    price: "50 €",
  },
  {
    icon: "post_add",
    title: "Zusätzliche Seite",
    desc: "Mehr Raum für dein Angebot, deine Themen oder Unterseiten.",
    price: "80 €",
  },
  {
    icon: "translate",
    title: "Weitere Sprache",
    desc: "Deine Website in mehreren Sprachen umsetzen.",
    price: "ab 100 €",
  },
  {
    icon: "build",
    title: "Wartung & Pflege",
    desc: "Technische Updates, Änderungen und laufende Betreuung deiner Website.",
    price: "ab 20 € / Monat",
  },
  {
    icon: "edit",
    title: "Website selbst bearbeiten (CMS)",
    desc: "Inhalte jederzeit selbst bearbeiten, ganz ohne Programmierkenntnisse.",
    price: "ab 50 €",
  },
  {
    icon: "assignment",
    title: "Individuelles Formular",
    desc: "Individuelle Formulare für spezielle Anfragen.",
    price: "ab 80 €",
  },
  {
    icon: "lock_person",
    title: "Login-Bereich",
    desc: "Ein geschützter Bereich für deine Kunden oder Mitglieder.",
    price: "ab 300 €",
  },
  {
    icon: "calendar_month",
    title: "Buchungssystem",
    desc: "Deine Kunden buchen direkt auf der Website.",
    price: "ab 250 €",
  },
  {
    icon: "article",
    title: "Blog",
    desc: "Aktuelle News, Tipps oder Updates regelmäßig veröffentlichen.",
    price: "ab 100 €",
  },
  {
    icon: "search",
    title: "SEO-Grundeinrichtung",
    desc: "Seitentitel und Beschreibungen für Google einrichten und deine Website bei Google zur Aufnahme anmelden.",
    price: "ab 50 €",
  },
];
</script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-2xl font-bold text-left text-(--primary-black) mb-5 tracking-tight uppercase;
}
p {
  @apply text-(--primary-black) leading-relaxed text-base sm:text-xl mb-0 text-left;
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

.priceCards {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8;
}
.priceCard {
  @apply flex flex-col gap-4 bg-(--primary-beige) border border-(--primary-black)/8 shadow-sm
  rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
}
.priceCard-name {
  @apply text-lg font-bold text-left text-(--primary-black) tracking-tight uppercase;
}
.priceCard-text {
  @apply text-(--primary-black) text-base sm:text-lg 2xl:text-xl leading-relaxed mb-0 text-left;
}
.priceCard-block {
  @apply flex flex-col gap-2;
}
.priceCard-label {
  @apply text-sm lg:text-base font-semibold text-left text-(--primary-orange) 
  tracking-[0.10em] uppercase;
}
.priceCard-list {
  @apply grid-cols-1 text-base lg:text-lg gap-y-1.5 lg:gap-y-2;
}
.priceCard-list li {
  @apply items-start text-base lg:text-lg;
}
.priceCard .price {
  @apply text-xl 2xl:text-2xl mt-1;
}

.extraCostsIcon {
  @apply shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-(--primary-orange)/10 text-xl;
}

.extrasBox {
  @apply relative overflow-hidden rounded-2xl bg-[url('/orange-abstract.jpg')] bg-cover bg-center p-4 md:p-10 lg:p-12 mt-8 2xl:mt-12;
}
.extrasBox h3 {
  @apply text-xl sm:text-2xl;
}
.extrasList {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-x-16 2xl:gap-x-24 gap-y-0 bg-(--primary-beige) border border-(--primary-black)/8
  shadow-sm rounded-xl px-4 lg:px-8 py-1 lg:py-2;
}
/* Mobil: Preis unter dem Text, ab sm rechts daneben */
.extrasList .extrasItem {
  @apply grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] gap-x-4 gap-y-1 items-start sm:items-center
  py-4 border-b border-(--primary-black)/8;
}
/* Keine Trennlinie unter der letzten Zeile */
.extrasList .extrasItem:last-child {
  @apply border-b-0;
}
@media (min-width: 64rem) {
  .extrasList .extrasItem:nth-last-child(2):nth-child(odd) {
    border-bottom-width: 0;
  }
}
.extrasItem-body {
  @apply flex flex-col gap-0.5 min-w-0;
}
.extrasItem-title {
  @apply font-semibold text-base lg:text-lg leading-snug;
}
.extrasItem-text {
  @apply text-(--primary-black)/70 text-sm lg:text-base leading-snug;
}
.extrasItem-price {
  @apply col-start-2 sm:col-start-auto text-(--primary-orange) font-bold text-base lg:text-lg text-left sm:text-right whitespace-nowrap;
}
</style>
