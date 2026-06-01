<template>
  <div id="portfolio" class="w-full 2xl:w-3/4 px-8 2xl:px-0 mx-auto my-10 lg:my-20">
    <h2>Meine Projekte</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2 lg:py-5">
      <!-- Karte -->
      <NuxtLink to="/referenzen/krautvollglueck" class="project-card group">
        <div class="overflow-hidden rounded-t-2xl">
          <img src="/img/kraut-voll-card.png" alt="Kraut voll Glück" class="card-img" />
        </div>
        <div class="text-area">
          <div class="flex flex-col gap-2">
            <span class="badge">Webseite</span>
            <h4>Kraut voll Glück</h4>
          </div>
          <p>Natürliche und moderne Webseite für Kräuterführungen und Workshops mit Fokus auf lokale Sichtbarkeit.</p>
          <span class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Karte -->
      <NuxtLink to="/referenzen/securetime" class="project-card group">
        <div class="overflow-hidden rounded-t-2xl">
          <img src="/img/securetime-card.png" alt="SecureTime" class="card-img" />
        </div>
        <div class="text-area">
          <div class="flex flex-col gap-2">
            <span class="badge">Webseite</span>
            <h4>SecureTime</h4>
          </div>
          <p>Marketing-Website für eine Dienstplanungs-Software für Sicherheitsdienstleister.</p>
          <span class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Karte -->
      <NuxtLink to="/referenzen/der-bunte-laden" class="project-card group">
        <div class="overflow-hidden rounded-t-2xl">
          <img src="/img/laden-card.png" alt="Der Bunte Laden" class="card-img" />
        </div>
        <div class="text-area">
          <div class="flex flex-col gap-2">
            <span class="badge">Webseite</span>
            <h4>Der Bunte Laden</h4>
          </div>
          <p>WordPress-Webseite für einen Secondhand-Shop in Dresden-Pieschen.</p>
          <span class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Karte -->
      <NuxtLink to="/referenzen/dwsd" class="project-card group">
        <div class="overflow-hidden rounded-t-2xl">
          <img src="/img/dwsd-card-1.png" alt="DWSD Sicherheit" class="card-img" />
        </div>
        <div class="text-area">
          <div class="flex flex-col gap-2">
            <span class="badge">Webseite</span>
            <h4>DWSD Sicherheit</h4>
          </div>
          <p>Webseite für einen Sicherheitsdienstleister in Dresden mit Fokus auf moderne Gestaltung und Benutzerfreundlichkeit.</p>
          <span class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </NuxtLink>

      <!-- Karte -->
      <NuxtLink to="/referenzen/parkingsoft" class="project-card group">
        <div class="overflow-hidden rounded-t-2xl">
          <img src="/img/parking-card-1.png" alt="ParkingSoft" class="card-img" />
        </div>
        <div class="text-area">
          <div class="flex flex-col gap-2">
            <span class="badge">In Entwicklung</span>
            <h4>Frankfurt Airport Parking</h4>
          </div>
          <p>Modernes Buchungsportal für Frankfurt Airport Parking - Parkplätze einfach online reservieren.</p>
          <span class="card-btn">
            Mehr erfahren
            <span class="material-symbols-outlined">arrow_forward</span>
          </span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
@reference "tailwindcss";

.project-card {
  @apply bg-white rounded-2xl shadow-sm border border-gray-100
         hover:shadow-lg transition-all duration-300 flex flex-col;
}
.card-img {
  @apply object-cover
         group-hover:scale-105 transition-transform duration-500;
}
img {
  @apply w-full h-80;
}
.text-area {
  @apply px-6 py-8 flex flex-col flex-1 gap-3 transition-all duration-300 justify-between;
}
.badge {
  @apply text-xs font-semibold uppercase tracking-wide
         text-(--primary-orange) bg-(--primary-orange)/10
         px-3 py-1 rounded-full w-fit;
}
h4 {
  @apply text-xl font-bold text-(--primary-black) tracking-tight;
}
p {
  @apply text-lg text-(--primary-black)/80 leading-relaxed;
}
.card-btn {
  @apply mt-2 flex items-center gap-2 text-lg font-semibold
         text-(--primary-orange) group-hover:gap-2.5 transition-all duration-300 cursor-pointer w-fit;
}
.material-symbols-outlined {
  @apply text-white font-bold bg-(--primary-orange) rounded-full p-1 text-sm aspect-square inline-flex items-center justify-center leading-none;
}
</style>
