<template>
  <div class="bg-(--primary-orange) py-10 lg:py-20">
    <div class="w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <!-- Überschrift -->
      <div class="text-center mb-10">
        <h3>Warum mit mir?</h3>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--primary-beige)/10 border border-(--primary-beige)/20 rounded-lg overflow-hidden"
      >
        <div class="feature-card" v-for="item in reasons" :key="item.title">
          <span class="material-symbols-outlined feature-icon">{{ item.icon }}</span>
          <p class="feature-title">{{ item.title }}</p>
          <p class="feature-text">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const reasons = [
  {
    icon: "handshake",
    title: "Persönliche Betreuung von Anfang bis Ende",
    desc: "Du bekommst Zwischenstände zu sehen und kannst jederzeit Feedback geben.",
  },
  {
    icon: "forum",
    title: "Ich nehme mir Zeit für deine Fragen",
    desc: "Keine Frage ist zu klein. Ich erkläre dir alles so, dass du es verstehst.",
  },
  {
    icon: "receipt_long",
    title: "Transparente Preise",
    desc: "Bevor wir starten, weißt du, was deine Webseite kostet.",
  },
  {
    icon: "code",
    title: "Moderne Technik statt Baukasten",
    desc: "Ich programmiere deine Seite mit Vue.js und Nuxt. Sie lädt schnell und läuft sauber.",
  },
  {
    icon: "touch_app",
    title: "Benutzerfreundliche Lösungen",
    desc: "Deine Besucher finden sich sofort zurecht, egal ob am Handy oder am Laptop.",
  },
  {
    icon: "apps",
    title: "Individuelle Web-Apps",
    desc: "Du brauchst mehr als eine Webseite? Ich entwickle auch Anwendungen nach deinen Wünschen.",
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
