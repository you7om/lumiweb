<template>
  <div class="rounded-2xl w-full 2xl:w-3/4 px-10 2xl:px-0 mx-auto my-15">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-10 py-5">
      <div class="flex flex-col justify-between">
        <h3>Frankfurt Airport Parking</h3>
        <h4>Modernes Buchungsportal für Parkingsoft Frankfurt</h4>
        <p>
          Modernes Buchungsportal für Parkingsoft Frankfurt – eine Plattform,
          die es Kunden ermöglicht, sich einzuloggen und schnell und
          unkompliziert einen Parkplatz zu reservieren.
        </p>
        <p>
          Das Portal wurde mit Fokus auf eine einfache, intuitive Bedienung
          entwickelt – von der Anmeldung bis zur fertigen Buchung sind es nur
          wenige Klicks. Übersichtliche Formulare und ein klares Interface
          führen den Nutzer Schritt für Schritt durch den Buchungsprozess.
        </p>
        <p>
          Besonderes Augenmerk lag auf einer reibungslosen Nutzererfahrung auf
          allen Geräten – ob am Desktop im Büro oder schnell vom Smartphone aus
          auf dem Weg zum Flughafen.
        </p>
        <ul>
          <li>
            <span class="material-symbols-outlined">check_small</span>Login &
            Nutzerverwaltung
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Parkplatz-Buchungssystem
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span>responsive
            Design
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >übersichtlicher Buchungsablauf
          </li>
          <li>
            <span class="material-symbols-outlined">check_small</span
            >Echtzeit-Verfügbarkeit

          </li>
          
        </ul>
        <p>
          <span class="font-bold text-(--primary-orange)">Technologien:</span>
          Vue, Nuxt, TailwindCSS, JavaScript
        </p>
      </div>

      <div class="flex items-center justify-center">
        <img
          src="/img/parking-header.png"
          class="w-full h-auto rounded-xl shadow-lg"
        />
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
