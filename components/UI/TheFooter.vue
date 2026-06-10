<template>
  <footer class="w-full bg-(--primary-black) py-10 px-10 lg:px-0">
    <div
      class="w-full 2xl:w-3/4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <!-- Name & Tagline -->
      <div class="flex flex-col gap-1 text-center md:text-left">
        <span
          class="text-(--primary-orange) font-bold uppercase tracking-widest text-sm"
          >Julia Koval</span
        >
        <span class="text-(--primary-beige)/50 text-xs tracking-wide"
          >Frontend Entwicklerin · Dresden</span
        >
      </div>

      <!-- Links -->
      <div
        class="flex gap-6 text-sm text-(--primary-beige)/70 w-3/4 md:w-auto flex-wrap justify-center md:justify-start"
      >
        <NuxtLink
          to="/projects"
          class="hover:text-(--primary-orange) transition-colors duration-200"
          >Projekte</NuxtLink
        >
        <a
          href="/#about"
          class="hover:text-(--primary-orange) transition-colors duration-200"
          >Über mich</a
        >
        <a
          href="/#kontakt"
          class="hover:text-(--primary-orange) transition-colors duration-200"
          >Kontakt</a
        >
        <NuxtLink
          to="/impressum"
          class="hover:text-(--primary-orange) transition-colors duration-200"
        >
          Impressum
        </NuxtLink>
        <NuxtLink
          to="/datenschutz"
          class="hover:text-(--primary-orange) transition-colors duration-200"
        >
          Datenschutz
        </NuxtLink>
        <!-- <a
          href="#cookie-hinweise"
          class="hover:text-(--primary-orange) transition-colors duration-200"
          >Cookie-Hinweise</a
        >
        
        <a
          href="#agb"
          class="hover:text-(--primary-orange) transition-colors duration-200"
          >AGB</a
        > -->
      </div>

      <!-- Copyright -->
      <div class="text-xs text-(--primary-beige)/30 tracking-wide">
        © Copyright {{ new Date().getFullYear() }} Julia Koval
      </div>
    </div>
  </footer>
</template>

<script setup></script>
