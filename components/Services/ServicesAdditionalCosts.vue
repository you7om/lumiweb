<template>
  <div class="bg-(--primary-orange) py-10 lg:py-20">
    <div class="w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <!-- Überschrift -->
      <div class="text-center mb-10">
        <h3>Zusätzliche Leistungen</h3>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--primary-beige)/10 border border-(--primary-beige)/20 rounded-lg overflow-hidden"
      >
        <div
          class="feature-card"
          :class="{ 'feature-card--mobile-only': item.mobileOnly }"
          v-for="item in extras"
          :key="item.title"
        >
          <span class="material-symbols-outlined feature-icon">{{ item.icon }}</span>
          <p class="feature-title">{{ item.title }}</p>
          <p class="feature-text">{{ item.desc }}</p>
          <p class="feature-price">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    price: "ab 150 €",
  },
  {
    icon: "build",
    title: "Wartung & Pflege",
    desc: "Technische Updates, Änderungen und laufende Betreuung deiner Website.",
    price: "ab 30 € / Monat",
  },
  {
    icon: "edit",
    title: "Website selbst bearbeiten (CMS)",
    desc: "Inhalte jederzeit selbst bearbeiten, ganz ohne Programmierkenntnisse.",
    price: "ab 100 €",
  },
  {
    icon: "assignment",
    title: "Individuelles Formular",
    desc: "Individuelle Formulare für spezielle Anfragen.",
    price: "ab 100 €",
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
    price: "ab 150 €",
  },
  {
    icon: "search",
    title: "SEO-Optimierung",
    desc: "Bessere Sichtbarkeit deiner Website in Suchmaschinen wie Google.",
    price: "ab 100 €",
    mobileOnly: true,
  },
];
</script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-(--primary-beige) tracking-tight mt-3;
}

.feature-card {
  @apply flex flex-col gap-3 p-4 2xl:p-12 bg-(--primary-orange) hover:bg-(--primary-beige)/5 transition-colors duration-300;
}
.feature-card--mobile-only {
  @apply lg:hidden;
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

.feature-price {
  @apply text-(--primary-beige) font-bold text-base lg:text-lg mt-auto pt-2;
}
</style>
