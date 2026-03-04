<template>
  <div class="bg-(--primary-orange) py-20 px-10 lg:px-0">
    <div class="w-full lg:w-3/4 mx-auto">
      <!-- Überschrift -->
      <div class="text-center mb-10">
        <span class="feature-badge">Warum mit mir?</span>
        <h3>Ich kümmere mich um alles</h3>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--primary-beige)/10 border border-(--primary-beige)/20 rounded-lg overflow-hidden"
      >
        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">palette</span>
          <p class="feature-title">Ein Design, das wirklich zu dir passt</p>
          <p class="feature-text">
            Deine Website sieht aus wie du – nicht wie tausend andere.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">edit</span>
          <p class="feature-title">Inhalte jederzeit selbst bearbeiten</p>
          <p class="feature-text">
            Einfaches CMS – du änderst Texte & Bilder ohne
            Programmierkenntnisse.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">devices</span>
          <p class="feature-title">Schön auf jedem Gerät</p>
          <p class="feature-text">
            Perfekt auf dem Handy, Tablet und Computer.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon"
            >calendar_month</span
          >
          <p class="feature-title">Online-Buchung & Terminanfrage</p>
          <p class="feature-text">
            Deine Kunden buchen direkt auf der Website – zu jeder Zeit.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">search</span>
          <p class="feature-title">SEO & PageSpeed optimiert</p>
          <p class="feature-text">
            Gefunden werden auf Google mit schnellen Ladezeiten.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">star</span>
          <p class="feature-title">Umgesetzt nach deinen Wünschen</p>
          <p class="feature-text">
            Dein Feedback zählt – bis das Ergebnis stimmt. Ich gestalte alles nach deinen Wünschen, bis du zufrieden bist.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-(--primary-beige) tracking-tight mt-3;
}

.feature-badge {
  @apply text-xs uppercase tracking-[0.2em] text-(--primary-beige)/60 font-semibold;
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
