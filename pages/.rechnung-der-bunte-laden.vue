<template>
  <div
    class="min-h-screen bg-white px-16 py-12 text-sm text-gray-800 max-w-3xl mx-auto print:px-8 print:py-8"
  >
    <!-- Header: Logo + Rechnungsinfos -->
    <div class="flex justify-between items-start mb-4">
      <!-- Logo links -->
      <div>
        <div class="mb-3">
          <p class="text-xl font-bold tracking-tight text-gray-900">
            <span class="text-orange-500">LUMI</span> WEB
          </p>
        </div>
        <p class="text-xs text-gray-500">Iuliia Koval</p>
        <p class="text-xs text-gray-500">
          Robert-Matzke-Str. 55, 01127 Dresden | Deutschland
        </p>
      </div>

      <!-- Rechnungsinfos rechts -->
      <div class="text-right">
        <div class="mb-2">
          <p class="text-xs text-gray-400 uppercase tracking-wide">
            Rechnungsnummer
          </p>
          <p class="font-semibold text-gray-900">LW-2026-001</p>
        </div>
        <div>
          <p class="text-xs text-gray-400 uppercase tracking-wide">
            Rechnungsdatum
          </p>
          <p class="text-gray-700">06.05.2026</p>
        </div>
        <div class="mt-2">
          <p class="text-xs text-gray-400 uppercase tracking-wide">
            Leistungszeitraum
          </p>
          <p class="text-gray-700">April 2026</p>
        </div>
      </div>
    </div>

    <!-- Trennlinie -->
    <hr class="border-gray-200 mb-8" />

    <!-- Empfänger -->
    <div class="mb-10">
      <p class="text-xs text-gray-400 mb-2">Rechnung an</p>
      <p class="font-semibold text-gray-900">Der bunte Laden</p>
      <p class="text-gray-600">Andreas Grolms</p>
      <p class="text-gray-600">Bürgerstraße 20</p>
      <p class="text-gray-600">01127 Dresden</p>
    </div>

    <!-- Leistungen Tabelle -->
    <table class="w-full mb-8 text-sm">
      <thead>
        <tr
          class="border-b border-gray-300 text-gray-500 text-xs uppercase tracking-wide"
        >
          <th class="text-left py-2 font-medium w-1/2">Leistung</th>
          <th class="text-center py-2 font-medium">Menge</th>
          <th class="text-right py-2 font-medium">Einzelpreis</th>
          <th class="text-right py-2 font-medium">Gesamt</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-100 align-top">
          <td class="py-5 pr-4">
            <p class="font-semibold text-gray-900 mb-1">
              Website-Erstellung (pauschal)
            </p>
            <p class="text-gray-500 text-xs leading-relaxed mb-2">
              Gestaltung und Entwicklung einer individuellen WordPress-Website
              inklusive responsivem Design, Einbindung von Google Maps sowie
              Veröffentlichung der Website und Einweisung in die Inhaltspflege.
            </p>
            <p class="text-gray-500 text-xs leading-relaxed">
              Impressum und Datenschutzerklärung wurden gestaltet und
              eingebunden. Für die inhaltliche und rechtliche Richtigkeit der
              bereitgestellten Texte wird keine Haftung übernommen.
            </p>
          </td>
          <td class="py-5 text-center text-gray-700">1</td>
          <td class="py-5 text-right text-gray-700">800,00 €</td>
          <td class="py-5 text-right font-semibold text-gray-900">800,00 €</td>
        </tr>
      </tbody>
    </table>

    <!-- Gesamtsumme rechts -->
    <div class="flex justify-end mb-4">
      <div class="w-64">
        <div
          class="flex justify-between py-1 font-semibold text-gray-900 text-base"
        >
          <span>Zu zahlen</span>
          <span>800,00 €</span>
        </div>
      </div>
    </div>

    <!-- Zahlungsfrist -->
    <p class="text-sm text-gray-600 mb-3">
      Bitte überweisen Sie den Betrag bis zum <span class="font-semibold">06.06.2026</span> auf das unten angegebene Konto.
    </p>

    <!-- § 19 Hinweis -->
    <p class="text-xs text-gray-400 mb-10">
      Gemäß § 19 UStG wird keine Umsatzsteuer berechnet.
    </p>

    <!-- Zahlungsinformationen Box -->
    <div class="bg-gray-50 border border-gray-200 rounded p-6">
      <p
        class="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4"
      >
        Zahlungsinformationen
      </p>
      <div class="grid grid-cols-2 gap-y-2 text-sm">
        <span
          class="font-semibold text-gray-700 uppercase text-xs tracking-wide"
          >NAME</span
        >
        <span class="text-gray-900">Iuliia Koval</span>
        <span
          class="font-semibold text-gray-700 uppercase text-xs tracking-wide"
          >IBAN</span
        >
        <span class="text-gray-900">DE 83 2022 0800 0027 8398 10</span>
        <span
          class="font-semibold text-gray-700 uppercase text-xs tracking-wide"
          >BIC</span
        >
        <span class="text-gray-900">SXPYDEHHXXX</span>
        <span
          class="font-semibold text-gray-700 uppercase text-xs tracking-wide"
          >Bank</span
        >
        <span class="text-gray-900">VIVID MONEY S.A.</span>
        <span class="font-semibold text-gray-700 uppercase text-xs tracking-wide">Verwendungszweck</span>
        <span class="text-gray-900">LW-2026-001</span>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="mt-12 pt-4 border-t border-gray-100 text-center text-xs text-gray-400"
    >
      <p>Lumi Web · Iuliia Koval</p>
      <p>Steuernummer: 202/282/01546 · kontakt@lumiweb.de · +49 176 32615478</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false });
</script>

<style>
* {
  font-family: 'Calibri', 'Trebuchet MS', ui-sans-serif, sans-serif !important;
}
</style>
