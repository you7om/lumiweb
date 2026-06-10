<template>
  <div class="min-h-screen flex items-center justify-center">
    <svg
      width="555"
      height="900"
      viewBox="0 0 185 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="card-clip">
          <rect width="185" height="300" rx="0" />
        </clipPath>
      </defs>

      <!-- Background -->
      <rect width="185" height="300" fill="#C84230" rx="0" />

      <g clip-path="url(#card-clip)">
        <!-- Top-right corner circles -->
        <g stroke="#F2E9DD" stroke-width="1" fill="none" opacity="0.60">
          <circle cx="185" cy="-30" r="50" />
          <circle cx="185" cy="-30" r="70" />
          <circle cx="185" cy="-30" r="90" />
          <circle cx="185" cy="-30" r="110" />
          <circle cx="185" cy="-30" r="130" />
     
        </g>

        <!-- Bottom-left corner circles -->
        <g stroke="#F2E9DD" stroke-width="1" fill="none" opacity="0.60">
          <circle cx="0" cy="330" r="50" />
          <circle cx="0" cy="330" r="70" />
          <circle cx="0" cy="330" r="90" />
          <circle cx="0" cy="330" r="110" />
          <circle cx="0" cy="330" r="130" />

       
        </g>

        <!-- Circle -->
        <circle
          cx="92"
          cy="128"
          r="46"
          stroke="#F2E9DD"
          stroke-width="1.4"
          fill="none"
        />

        <!-- L -->
        <text
          x="92"
          y="143"
          font-family="Cormorant Garamond, serif"
          font-size="42"
          font-weight="600"
          fill="#F2E9DD"
          text-anchor="middle"
        >
          L
        </text>

        <!-- LUMIWEB -->
        <text
          x="92"
          y="195"
          font-family="Outfit, sans-serif"
          font-size="9"
          font-weight="400"
          fill="#F2E9DD"
          text-anchor="middle"
          letter-spacing="6"
        >
          LUMIWEB
        </text>

        <!-- Badge background -->
        <rect x="22" y="205" width="140" height="14" fill="#F2E9DD" rx="2" />

        <!-- Badge text -->
        <text
          x="92"
          y="212"
          font-family="Outfit, sans-serif"
          font-size="6.5"
          font-weight="600"
          fill="#C84230"
          text-anchor="middle"
          dominant-baseline="central"
          letter-spacing="1.2"
        >
          WEBDESIGN &amp; ENTWICKLUNG
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Outfit:wght@400;600&display=swap",
    },
  ],
});
</script>

<style>
body {
  background: white !important;
}

@media print {
  @page {
    size: 185mm 300mm;
    margin: 0;
  }

  body {
    margin: 0;
  }

  svg {
    width: 185mm;
    height: 300mm;
  }
}
</style>
