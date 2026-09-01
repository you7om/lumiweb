<template>
  <div class="hidden lg:block w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0 my-8 lg:my-12">
    <h2>Meine Pakete im Vergleich</h2>
    <div class="comparisonBox">
      <div class="comparisonTable-wrapper">
        <table class="comparisonTable">
          <thead>
            <tr>
              <th></th>
              <th>Onepager Basis</th>
              <th>Onepager Individuell</th>
              <th>Mehrseitig Basis</th>
              <th>Mehrseitig Individuell</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Umfang</td>
              <td>1 Seite · 3 Inhaltsblöcke</td>
              <td>1 Seite · 5 Inhaltsblöcke</td>
              <td>bis 5 Seiten</td>
              <td>bis 10 Seiten</td>
            </tr>
            <tr>
              <td>Design</td>
              <td>Vorlage</td>
              <td>individuell</td>
              <td>Vorlage</td>
              <td>individuell</td>
            </tr>
            <tr>
              <td>Responsive Website</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Kontaktformular</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Impressum & Datenschutz</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Zusätzliche Funktionen</td>
              <td>optional</td>
              <td>optional</td>
              <td>optional</td>
              <td>optional</td>
            </tr>
            <tr class="comparisonTable-priceRow">
              <td>Preis</td>
              <td>ab 450 €</td>
              <td>ab 850 €</td>
              <td>ab 900 €</td>
              <td>ab 1.250 €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@reference "tailwindcss";

.comparisonBox {
  @apply rounded-2xl border border-(--primary-black)/8 bg-(--primary-beige) shadow-sm p-6 md:p-10 lg:p-12;
}
.comparisonTable-wrapper {
  @apply overflow-x-auto;
}
.comparisonTable {
  @apply w-full border-collapse;
}
.comparisonTable th,
.comparisonTable td {
  @apply text-center text-lg 2xl:text-xl py-4 px-3 border-b border-(--primary-black)/10;
}
.comparisonTable th {
  @apply text-(--primary-black) font-bold uppercase text-sm 2xl:text-base tracking-[0.08em] whitespace-nowrap;
}
.comparisonTable td:first-child,
.comparisonTable th:first-child {
  @apply text-left font-semibold text-(--primary-black) whitespace-nowrap;
}
.comparisonTable tbody tr:last-child td,
.comparisonTable tbody tr:last-child th {
  @apply border-b-0;
}
.comparisonTable-priceRow td {
  @apply text-(--primary-orange) font-bold text-xl 2xl:text-2xl pt-5;
}
.comparisonTable-priceRow td:first-child {
  @apply text-(--primary-black);
}
</style>
