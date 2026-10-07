<template>
  <div
    id="about"
    class="rounded-2xl w-full 2xl:w-3/4 px-4 2xl:px-0 mx-auto my-10 lg:my-20"
  >
    <h2>Wer bin ich?</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 py-5">
      <div class="flex items-center justify-center mx-auto md:mx-0 md:col-span-1">
        <img
          src="/img/about-photo.jpg"
          alt="Julia Koval, Frontend-Entwicklerin aus Dresden"
          class="w-full max-w-xs md:max-w-none h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
      <div class="flex flex-col gap-4 md:col-span-2">
        <h4>
          Hallo, ich bin Julia, Frontend-Entwicklerin aus Dresden. Zur
          Webentwicklung bin ich über die Psychologie gekommen.
        </h4>
        <p>
          Nach meinem Bachelor in Psychologie habe ich gemerkt, dass mich
          etwas anderes begeistert: das Bauen von Dingen, die Menschen das
          Leben leichter machen. So begann mein Weg in die
          Frontend-Entwicklung, und ich habe es keine Sekunde bereut.
        </p>
        <p>
          Was mir aus meinem Studium geblieben ist, nutze ich jeden Tag:
          analytisches Denken, ein Gespür für Nutzerperspektiven und die
          Fähigkeit, komplexe Zusammenhänge strukturiert zu durchdenken. Das
          hilft mir, Oberflächen zu bauen, die Besucher ohne Anleitung
          verstehen.
        </p>
        <p>
          Meine Kenntnisse in Vue.js, Nuxt, Tailwind und JavaScript habe ich mir
          durch echte Projekte und eigenständiges Lernen angeeignet. Erzähl mir
          von deinem Projekt, ich melde mich mit einem ersten Vorschlag.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h4 {
  @apply text-2xl font-semibold text-left text-(--primary-black) my-4 tracking-tight uppercase;
}
p {
  @apply text-(--primary-black) leading-relaxed text-xl my-1 text-left 2xl:text-justify;
}
ul {
  @apply text-left flex flex-col gap-2 text-(--primary-black) mt-3;
}
li {
  @apply flex gap-2 text-xl text-(--primary-black) items-center;
}

.material-symbols-outlined {
  @apply text-(--primary-orange) font-extrabold text-2xl;
}
</style>
