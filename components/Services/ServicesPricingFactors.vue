<template>
  <div class="my-10 lg:my-20">
    <div class="rounded-2xl w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <h2>Wie setzt sich der Preis zusammen?</h2>
      <p class="intro">
        Der Preis hängt vor allem von Umfang, Funktionen und dem Grad der
        individuellen Gestaltung ab. Diese Faktoren spielen eine Rolle:
      </p>

      <div class="factorsBox">
        <div class="serviceSection-overlay"></div>
        <div class="serviceSection-content">
          <ul class="factorsList">
            <li>
              <span class="factorIcon material-symbols-outlined">expand</span>
              <p>Umfang der Website (Anzahl der Seiten und Bereiche)</p>
            </li>
            <li>
              <span class="factorIcon material-symbols-outlined">description</span>
              <p>Menge und Komplexität der Inhalte</p>
            </li>
            <li>
              <span class="factorIcon material-symbols-outlined">palette</span>
              <p>Grad der individuellen Gestaltung (Vorlage oder freies Design)</p>
            </li>
            <li>
              <span class="factorIcon material-symbols-outlined">bolt</span>
              <p>Funktionsumfang (Anzahl und Aufwand der gewünschten Funktionen)</p>
            </li>
            <li>
              <span class="factorIcon material-symbols-outlined">forum</span>
              <p>Abstimmungsaufwand und gewünschte Anpassungen</p>
            </li>
            <li>
              <span class="factorIcon material-symbols-outlined">edit_note</span>
              <p>Ob du Unterstützung bei Texten oder Bildern brauchst</p>
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

.intro {
  @apply text-(--primary-black) leading-relaxed text-base sm:text-lg lg:text-xl max-w-4xl mx-auto text-center mb-8 lg:mb-10;
}

.factorsBox {
  @apply relative overflow-hidden rounded-2xl bg-[url('/orange-abstract.jpg')] bg-cover bg-center p-6 md:px-12 md:py-10;
}
.serviceSection-overlay {
  @apply absolute inset-0 bg-(--primary-beige)/92;
}
.serviceSection-content {
  @apply relative z-10;
}

.factorsList {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5;
}
.factorsList li {
  @apply flex gap-4 items-center;
}
.factorsList p {
  @apply text-(--primary-black) text-base lg:text-lg leading-relaxed mb-0 text-left;
}
.factorIcon {
  @apply shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-(--primary-orange)/10 text-xl text-(--primary-orange);
}
</style>
