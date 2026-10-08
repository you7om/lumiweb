<template>
  <div>
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 
      bg-(--primary-cream)/75 backdrop-blur-xl shadow-sm border-b border-(--primary-black)/8 2xl:border-none"
    >
      <div class="w-full 2xl:w-3/4 mx-auto px-5 2xl:px-0">
        <div class="flex items-center justify-between h-16 md:h-18">
          <!-- Logo / Name -->
          <a class="flex items-center gap-2 group cursor-pointer" @click="goToMainPage">
            <span
              class="text-xl font-bold tracking-tight text-(--primary-black) group-hover:text-(--primary-orange) transition-colors duration-300"
            >
               <span class="text-(--primary-orange)">Lumi</span>Web
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
          class="md:hidden bg-(--primary-cream)/95 backdrop-blur-xl border-t border-(--primary-black)/8 px-5 pb-6 pt-4"
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
      class="hero-section relative min-h-[80vh] flex items-center overflow-hidden"
    >
      <HeroBlobs v-bind="heroMotion" />

      <div class="hero-content relative z-10 w-full max-w-3/4 mx-auto px-5 lg:px-0 pt-28 pb-20">
        <!-- Headline oben zentriert -->
        <div class="text-center mb-5 lg:mb-12 flex flex-col items-center gap-4">
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
            <span class="text-(--primary-orange)">die Vertrauen schaffen</span>
          </h1>
        </div>

        <!-- Untertext für Mobile -->
        <p
          class="lg:hidden text-lg text-center text-(--primary-black)/70 leading-relaxed max-w-md mx-auto mb-2"
        >
          Webseiten und Web-Apps für kleine Unternehmen und Selbstständige.
          Aus Dresden, remote und vor Ort.
        </p>

        <!-- Info-Blöcke: Technologien, Für wen, Leistungen, Standort -->
        <div
          class="hidden lg:grid lg:grid-cols-4 gap-x-6 gap-y-8 lg:gap-x-10 justify-items-center text-center max-w-2xl lg:max-w-4xl mx-auto"
        >
          <div class="flex flex-col">
            <p
              class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
            >
              Technologien
            </p>
            <p class="text-(--primary-black) leading-relaxed">
              WordPress · Nuxt.js · Vue.js<br />HTML · CSS · Tailwind
            </p>
          </div>

          <div class="flex flex-col">
            <p
              class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
            >
              Für wen
            </p>
            <p class="text-(--primary-black) leading-relaxed">
              Kleine Unternehmen<br />& Selbstständige
            </p>
          </div>

          <div class="flex flex-col">
            <p
              class="text-base font-semibold text-(--primary-orange) uppercase tracking-widest mb-1"
            >
              Leistungen
            </p>
            <p class="text-(--primary-black) leading-relaxed">
              Onepager · Mehrseitig<br />Responsive · Login-Bereiche
            </p>
          </div>

          <div class="flex flex-col">
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

        <!-- Buttons unten zentriert -->
        <div class="flex flex-col sm:flex-row justify-center gap-3 mt-5 lg:mt-12">
          <a href="/leistungen" class="btn-orange"> Leistungen ansehen </a>
          <a href="#kontakt" class="btn"> Kontakt aufnehmen </a>
        </div>
      </div>
    </section>

    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const scrolled = ref(false);
const menuOpen = ref(false);

// Auf der Startseite (und ihrer Testversion /lab) schwebt der Header langsamer und sanfter,
// passend zu den Lumi-Formen darunter
const route = useRoute();
const heroMotion = computed(() =>
  ["/", "/lab"].includes(route.path)
    ? { speed: 0.3, wobble: 10, repel: 28, mouseEase: 0.32, intensity: 0.74 }
    : {},
);

const navItems = [
  { label: "Über mich", href: "#about" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Projekte", href: "/projects" },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

const goToMainPage = () => {
  navigateTo("/");
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
