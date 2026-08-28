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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const extras = [
  {
    icon: "post_add",
    title: "Zusätzliche Seiten",
    desc: "Mehr Raum für dein Angebot, deine Themen oder Unterseiten.",
  },
  {
    icon: "lock_person",
    title: "Login-Bereich",
    desc: "Ein geschützter Bereich für deine Kunden oder Mitglieder.",
  },
  {
    icon: "animation",
    title: "Spezielle Animationen",
    desc: "Kleine Interaktionen, die deine Website lebendiger machen.",
  },
  {
    icon: "calendar_month",
    title: "Buchungssysteme",
    desc: "Deine Kunden buchen direkt auf der Website.",
  },
  {
    icon: "link",
    title: "Externe Schnittstellen",
    desc: "Anbindung an Tools, die du bereits nutzt.",
  },
  {
    icon: "assignment",
    title: "Besondere Formulare",
    desc: "Individuelle Formulare für spezielle Anfragen.",
  },
  {
    icon: "settings",
    title: "Individuelle Funktionen",
    desc: "Maßgeschneiderte Funktionen für deine Abläufe.",
  },
  {
    icon: "translate",
    title: "Mehrsprachigkeit",
    desc: "Deine Website in mehreren Sprachen umsetzen.",
  },
  {
    icon: "build",
    title: "Wartung & Pflege nach Launch",
    desc: "Technische Updates, Änderungen und laufende Betreuung deiner Website.",
  },
  {
    icon: "search",
    title: "SEO-Optimierung",
    desc: "Bessere Sichtbarkeit deiner Website in Suchmaschinen wie Google.",
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

@media (min-width: 768px) {
  .feature-card--mobile-only {
    display: none;
  }
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
</style>
