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
      <rect width="185" height="300" fill="#F2E9DD" rx="0" />

      <g clip-path="url(#card-clip)">
        <!-- Top-right corner circles -->
        <g stroke="#C84230" stroke-width="1" fill="none" opacity="0.20">
          <circle cx="185" cy="-30" r="50" />
          <circle cx="185" cy="-30" r="70" />
          <circle cx="185" cy="-30" r="90" />
          <circle cx="185" cy="-30" r="110" />
          <circle cx="185" cy="-30" r="130" />
        
        </g>

        <!-- Bottom-left corner circles -->
        <g stroke="#C84230" stroke-width="1" fill="none" opacity="0.20">
          <circle cx="0" cy="330" r="50" />
          <circle cx="0" cy="330" r="70" />
          <!-- <circle cx="0" cy="330" r="90" /> -->
          <!-- <circle cx="0" cy="330" r="110" />
          <circle cx="0" cy="330" r="130" /> -->
          
       
        </g>

        <!-- LUMIWEB -->
        <!-- <text
          x="17"
          y="92"
          font-family="Outfit, sans-serif"
          font-size="8"
          font-weight="400"
          fill="#7A2E1D"
          opacity="0.9"
          text-anchor="start"
          letter-spacing="6"
        >
          LUMIWEB
        </text> -->

        <!-- Julia -->
        <text
          x="17"
          y="145"
          font-family="Georgia, serif"
          font-size="32"
          font-weight="400"
          font-style="normal"
          fill="#7A2E1D"
          text-anchor="start"
        >
          Julia
        </text>

        <!-- WEBDESIGNERIN -->
        <text
          x="17"
          y="165"
          font-family="Arial, sans-serif"
          font-size="7"
          font-weight="400"
          fill="#7A2E1D"
          opacity="0.9"
          text-anchor="start"
          letter-spacing="3"
        >
          WEBDESIGNERIN
        </text>

        <!-- Linie unter WEBDESIGNERIN -->
        <line
          x1="17"
          y1="177"
          x2="168"
          y2="177"
          stroke="#7A2E1D"
          stroke-width="0.5"
          opacity="0.4"
        />

        <!-- Icon: Website -->
        <g transform="translate(17, 199)" stroke="#7A2E1D" stroke-width="0.7" fill="none" opacity="0.9">
          <circle cx="3.5" cy="3.5" r="3.2" />
          <ellipse cx="3.5" cy="3.5" rx="1.4" ry="3.2" />
          <line x1="0.3" y1="3.5" x2="6.7" y2="3.5" />
        </g>

        <!-- lumiweb.de -->
        <text
          x="29"
          y="205"
          font-family="Arial, sans-serif"
          font-size="8"
          font-weight="400"
          fill="#7A2E1D"
          opacity="1"
          text-anchor="start"
        >
          lumiweb.de
        </text>

        <!-- Icon: E-Mail -->
        <g transform="translate(17, 216)" stroke="#7A2E1D" stroke-width="0.7" fill="none" opacity="0.9">
          <rect x="0" y="0.5" width="7" height="5" rx="0.5" />
          <path d="M0.3 1 L3.5 3.3 L6.7 1" />
        </g>

        <!-- kontakt@lumiweb.de -->
        <text
          x="29"
          y="222"
          font-family="Arial, sans-serif"
          font-size="8"
          font-weight="400"
          fill="#7A2E1D"
          opacity="1"
          text-anchor="start"
        >
          kontakt@lumiweb.de
        </text>

        <!-- Icon: Telefon -->
        <g transform="translate(17, 232)" stroke="#7A2E1D" stroke-width="0.7" fill="none" opacity="0.9">
          <path d="M1 0.5c-0.5 0-1 0.5-0.9 1.2C0.5 4 3 6.5 5.3 6.9c0.7 0.1 1.2-0.4 1.2-0.9v-1c0-0.3-0.2-0.6-0.5-0.7l-1.3-0.4c-0.3-0.1-0.6 0-0.7 0.2l-0.3 0.4c-0.9-0.5-1.6-1.2-2.1-2.1l0.4-0.3c0.2-0.1 0.3-0.4 0.2-0.7L1.7 1c-0.1-0.3-0.4-0.5-0.7-0.5z" />
        </g>

        <!-- Telefonnummer -->
        <text
          x="29"
          y="238"
          font-family="Arial, sans-serif"
          font-size="8"
          font-weight="400"
          fill="#7A2E1D"
          opacity="1"
          text-anchor="start"
        >
          +49 176 32615478
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
      href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400&display=swap",
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
