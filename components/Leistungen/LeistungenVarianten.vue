<template>
  <div class="my-10 lg:my-20">
    <div class="rounded-2xl w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <h2>Zwei Wege zu deiner Website</h2>
      <p class="intro">
        Für kleinere Projekte nutze ich vorbereitete Designstrukturen, das
        spart Zeit und Kosten. Für individuelle Gestaltung entwickle ich
        das Design speziell für dich.
      </p>

      <div class="variantsGrid">
        <div class="variantCard">
          <h3>Website mit Vorlage</h3>
          <p>
            Für einfache Websites steht ein klarer Grundaufbau bereits
            fest. Ich passe Farben, Bilder, Texte und dein Logo an dein
            Unternehmen an und übernehme die technische Umsetzung. So
            lässt sich deine Website schneller und kostengünstiger
            realisieren.
          </p>
        </div>

        <div class="variantCard variantCard--highlight">
          <h3>Individuelles Webdesign</h3>
          <p>
            Wenn deine Website individuell gestaltet werden soll, entwickle
            ich Aufbau und Design passend zu deinem Unternehmen, deiner
            Zielgruppe und deinen Vorstellungen. Es gibt dabei keine
            vorgegebene Designstruktur, sondern alles wird für dich
            konzipiert.
          </p>
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

.variantsGrid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6;
}
.variantCard {
  @apply flex flex-col gap-4 bg-(--primary-beige) border border-(--primary-black)/8 shadow-sm
  rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300;
}
.variantCard--highlight {
  @apply border-(--primary-orange)/30;
}
.variantCard h3 {
  @apply text-xl font-bold text-left text-(--primary-black) tracking-tight uppercase;
}
.variantCard p {
  @apply text-(--primary-black) leading-relaxed text-base lg:text-lg mb-0 text-left;
}
</style>
