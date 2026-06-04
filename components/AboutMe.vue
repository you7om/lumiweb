<template>
  <div
    id="about"
    class="rounded-2xl w-full 2xl:w-3/4 px-4 2xl:px-0 mx-auto my-15"
  >
    <h3>Wer bin ich?</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 py-5">
      <div class="flex items-center justify-center mx-auto md:mx-0 md:col-span-1">
        <img
          src="/img/about-photo.jpg"
          class="w-full max-w-xs md:max-w-none h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
      <div class="flex flex-col gap-4 md:col-span-2">
        <h4>
          Hallo, ich bin Julia – Junior Frontend - Entwicklerin aus Dresden mit
          einem ungewöhnlichen Weg in die Tech-Welt.
        </h4>
        <p>
          Ursprünglich komme ich aus der Psychologie. Nach meinem
          Bachelor-Abschluss habe ich gemerkt, dass mich etwas anderes wirklich
          begeistert: das Bauen von Dingen, die Menschen das Leben leichter
          machen. So begann mein Weg in die Frontend-Entwicklung – und ich habe
          es keine Sekunde bereut.
        </p>
        <p>
          Was mir aus meinem Studium geblieben ist, nutze ich jeden Tag:
          analytisches Denken, ein Gespür für Nutzerperspektiven und die
          Fähigkeit, komplexe Zusammenhänge strukturiert zu durchdenken. Das
          hilft mir nicht nur beim Coden, sondern auch dabei, Interfaces zu
          bauen, die sich wirklich intuitiv anfühlen.
        </p>
        <p>
          Meine Kenntnisse in Vue.js, Nuxt, Tailwind und JavaScript habe ich mir
          durch echte Projekte und eigenständiges Lernen angeeignet. Dabei entwickle
          ich mich mit jedem Projekt weiter und erweitere kontinuierlich meine Fähigkeiten.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-center text-(--primary-orange) mt-2 lg:mt-0 mb-1 tracking-tight uppercase;
}
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
