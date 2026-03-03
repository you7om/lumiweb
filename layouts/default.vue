<template>
  <div>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      :class="
        scrolled
          ? 'bg-(--primary-beige)/80 backdrop-blur-xl shadow-sm border-b border-(--primary-black)/8 2xl:border-none'
          : 'bg-transparent'
      "
    >
      <div class="max-w-3/4 mx-auto px-5 lg:px-0">
        <div class="flex items-center justify-between h-16 md:h-18">
          <!-- Logo / Name -->
          <a href="#" class="flex items-center gap-2 group">
            <span
              class="text-xl font-bold tracking-tight text-(--primary-black) group-hover:text-(--primary-orange) transition-colors duration-300"
            >
               <span class="text-(--primary-orange)">LUMI</span> WEB
            </span>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-8">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              class="text-base font-medium text-(--primary-black)/70 hover:text-(--primary-orange) transition-colors duration-300 tracking-wide"
            >
              {{ item.label }}
            </a>
            <a
              href="#kontakt"
              class="text-sm font-medium px-5 py-2 rounded-full border border-(--primary-orange) text-(--primary-orange) hover:bg-(--primary-orange) hover:text-white transition-all duration-300"
            >
              Kontakt
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            @click="menuOpen = !menuOpen"
            class="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Menü öffnen"
          >
            <span
              class="block w-6 h-0.5 bg-(--primary-black) transition-all duration-300"
              :class="menuOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="block w-6 h-0.5 bg-(--primary-black) transition-all duration-300"
              :class="menuOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="block w-6 h-0.5 bg-(--primary-black) transition-all duration-300"
              :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="menu">
        <div
          v-if="menuOpen"
          class="md:hidden bg-(--primary-beige)/95 backdrop-blur-xl border-t border-(--primary-black)/8 px-5 pb-6 pt-4"
        >
          <nav class="flex flex-col gap-4">
            <a
              v-for="item in navItems"
              :key="item.label"
              :href="item.href"
              @click="menuOpen = false"
              class="text-base font-medium text-(--primary-black)/80 hover:text-(--primary-orange) transition-colors duration-300 py-1"
            >
              {{ item.label }}
            </a>
            <a
              href="#kontakt"
              @click="menuOpen = false"
              class="mt-2 text-center text-base font-medium px-5 py-3 rounded-full border border-(--primary-orange) text-(--primary-orange) hover:bg-(--primary-orange) hover:text-white transition-all duration-300"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </transition>
    </header>

    <!-- Hero Section -->
    <section
      class="relative min-h-screen flex items-center bg-(--primary-beige) overflow-hidden"
    >
      <div class="w-full max-w-3/4 mx-auto px-5 lg:px-0 pt-24 pb-16">
        <!-- Headline oben zentriert -->
        <div class="text-center mb-12 flex flex-col items-center gap-4">
          <span
            class="inline-flex items-center gap-2 text-sm font-medium text-(--primary-orange) bg-(--primary-orange)/10 px-4 py-1.5 rounded-full tracking-wide"
          >
            <span
              class="w-1.5 h-1.5 rounded-full bg-(--primary-orange) inline-block"
            ></span>
            Freelance Webdesign
          </span>
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-(--primary-black)"
          >
            Webseiten,
            <span class="text-(--primary-orange)">die verkaufen</span>
          </h1>
        </div>

        <!-- Mittlere Reihe: Info links | Foto Mitte | Info rechts -->
        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16"
        >
          <!-- Links -->
          <div class="flex-1 flex flex-col gap-6 text-center lg:text-right">
            <div>
              <p
                class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
              >
                Technologien
              </p>
              <p class="text-(--primary-black) leading-relaxed">
                WordPress · Nuxt.js · Vue.js<br />HTML · CSS · Tailwind
              </p>
            </div>
            <div>
              <p
                class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
              >
                Für wen
              </p>
              <p class="text-(--primary-black) leading-relaxed">
                Firmen & Privatpersonen<br />die online sichtbar sein wollen
              </p>
            </div>
          </div>

          <!-- Foto mit orangenem Kreis -->
          <div class="flex-shrink-0 flex items-center justify-center relative">
            <div
              class="absolute rounded-full bg-(--primary-orange) w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-108 xl:h-108"
            ></div>
            <img
              src="/img/header-photo.jpg"
              alt="Julia Koval"
              class="relative z-10 w-56 h-56 sm:w-68 sm:h-68 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover shadow-2xl"
            />
          </div>

          <!-- Rechts -->
          <div class="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <div>
              <p
                class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
              >
                Leistungen
              </p>
              <p class="text-(--primary-black) leading-relaxed">
                Onepager · Mehrseitig<br />Responsive · Login-Bereiche
              </p>
            </div>
            <div>
              <p
                class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
              >
                Standort
              </p>
              <p class="text-(--primary-black) leading-relaxed">
                Dresden, Deutschland<br />Remote & vor Ort
              </p>
            </div>
          </div>
        </div>

        <!-- Buttons unten zentriert -->
        <div class="flex flex-col sm:flex-row justify-center gap-3 mt-12">
          <a href="#leistungen" class="btn-orange"> Leistungen ansehen </a>
          <a href="#kontakt" class="btn"> Kontakt aufnehmen </a>
        </div>
      </div>
    </section>

    <div>
      <slot />
    </div>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);
const menuOpen = ref(false);

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über mich", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
@reference "tailwindcss";

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
