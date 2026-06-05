<template>
  <div class="py-12 lg:py-16 px-8 lg:px-0">
    <div class="w-full 2xl:w-3/4 mx-auto">
      <div class="banner">
        <span class="badge">Designkonzept</span>
        <h3>Dieser Stil gefällt dir?</h3>
        <p class="subtext">
          Der Entwurf ist noch frei. Melde dich – ich setze ihn individuell für dich um.
        </p>
        <a href="#kontakt" class="btn">
          Kontaktiere mich
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

.banner {
  @apply flex flex-col items-center text-center gap-6
    px-8 py-12 lg:px-16 lg:py-14;
}

.badge {
  @apply text-xs uppercase tracking-[0.2em] text-(--primary-orange)/60 font-semibold;
}

h3 {
  @apply text-4xl font-bold text-(--primary-black) tracking-tight;
}

.subtext {
  @apply text-(--primary-black)/80 text-base lg:text-xl max-w-md;
}

.btn {
  @apply mt-2 px-8 py-4 rounded-full bg-(--primary-orange) text-white
    font-bold text-sm tracking-wide hover:opacity-90 transition-opacity;
}
</style>
