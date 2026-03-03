<template>
  <div
    id="about"
    class="rounded-2xl w-full 2xl:w-3/4 px-10 2xl:px-0 mx-auto my-15"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 py-5">
      <div class="flex items-center justify-center mr-auto">
        <img
          src="/img/about-photo.jpg"
          class="w-auto h-150 rounded-xl shadow-lg"
        />
      </div>
      <div class="flex flex-col justify-between">
        <h3>Wer bin ich?</h3>
        <h4>
          Hallo, ich bin Julia – Junior Frontend-Entwicklerin aus Dresden mit
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
          durch echte Projekte und eigenständiges Lernen angeeignet – und ich
          wachse mit jedem neuen Projekt weiter.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-left text-(--primary-orange) mb-1 tracking-tight uppercase;
}
h4 {
  @apply text-2xl font-semibold text-left text-(--primary-black) mb-4 tracking-tight uppercase;
}
p {
  @apply text-(--primary-black) text-left leading-relaxed text-xl my-3;
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
