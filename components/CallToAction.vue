<template>
  <div class="bg-(--primary-orange) py-20">
    <div class="w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0 ">
      <!-- Überschrift -->
      <div class="text-center mb-10">
        <h2>Warum mit mir?</h2>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 
        gap-px bg-(--primary-beige)/10 border border-(--primary-beige)/20 rounded-lg overflow-hidden"
      >
        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">palette</span>
          <p class="feature-title">Ein Design, das zu dir passt</p>
          <p class="feature-text">
            Farben, Schrift und Aufbau richten sich nach deiner Marke.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">edit</span>
          <p class="feature-title">Inhalte jederzeit selbst bearbeiten</p>
          <p class="feature-text">
            Mit einem einfachen CMS änderst du Texte und Bilder ohne
            Programmierkenntnisse.
          </p>
          <span class="feature-optional">Optional buchbar</span>
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
            Deine Kunden buchen rund um die Uhr direkt auf der Webseite.
          </p>
          <span class="feature-optional">Optional buchbar</span>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">search</span>
          <p class="feature-title">Schnelle Ladezeiten & bessere Sichtbarkeit bei Google</p>
          <p class="feature-text">
            Ich optimiere Bilder und Code, damit deine Seite schnell lädt.
            Google bewertet das positiv.
          </p>
        </div>

        <div class="feature-card">
          <span class="material-symbols-outlined feature-icon">star</span>
          <p class="feature-title">Umgesetzt nach deinen Wünschen</p>
          <p class="feature-text">
            Du siehst Zwischenstände und gibst Feedback, bis das Ergebnis stimmt.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

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
  @apply text-(--primary-beige) text-base lg:text-lg lg:leading-relaxed;
}

.feature-optional {
  @apply self-start text-xs uppercase tracking-[0.15em] font-semibold text-(--primary-beige)
  border border-(--primary-beige)/40 rounded-full px-3 py-1;
}
</style>
