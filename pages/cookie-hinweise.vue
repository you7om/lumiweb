<template>
  <div class="min-h-screen py-16 px-4">
    <div class="w-3/5 mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h1 class="cookie-title">Cookie-Richtlinie</h1>
      </div>

      <!-- Sections -->
      <div class="space-y-10 text-(--primary-black)">

        <!-- 1. Was sind Cookies -->
        <section>
          <h2 class="section-heading">1. Was sind Cookies?</h2>
          <p class="section-text">
            Cookies sind kleine Textdateien, die beim Besuch einer Website auf Ihrem Gerät
            gespeichert werden. Sie ermöglichen es, bestimmte Informationen zwischen
            Ihrem Browser und dem Webserver auszutauschen.
          </p>
          <p class="section-text">
            Es gibt verschiedene Arten von Cookies: technisch notwendige Cookies, die für
            den Betrieb der Website erforderlich sind, sowie optionale Cookies für Analyse-
            oder Marketingzwecke. Auf dieser Website werden ausschließlich technisch
            notwendige Cookies eingesetzt.
          </p>
        </section>

        <hr class="section-hr" />

        <!-- 2. Welche Cookies nutzen wir -->
        <section>
          <h2 class="section-heading">2. Welche Cookies verwenden wir?</h2>

          <h3 class="section-subheading">Technisch notwendige Cookies</h3>
          <p class="section-text">
            Diese Website verwendet ausschließlich technisch notwendige Cookies. Diese Cookies
            sind für den ordnungsgemäßen Betrieb der Website erforderlich und können nicht
            deaktiviert werden, ohne die Funktionalität der Seite zu beeinträchtigen.
          </p>
          <p class="section-text">
            Dazu gehören z. B. Session-Cookies, die beim Ausfüllen und Absenden des
            Kontaktformulars temporär gesetzt werden. Diese Cookies enthalten keine
            personenbezogenen Daten und werden nach dem Schließen des Browsers automatisch
            gelöscht.
          </p>

          <h3 class="section-subheading">Keine Tracking- oder Marketing-Cookies</h3>
          <p class="section-text">
            Wir verwenden keinerlei Cookies zu Analyse-, Tracking- oder Marketingzwecken.
            Es werden keine Daten an Drittanbieter wie Google Analytics, Facebook oder
            ähnliche Dienste übermittelt.
          </p>
        </section>

        <hr class="section-hr" />

        <!-- 3. Warum kein Cookie-Banner -->
        <section>
          <h2 class="section-heading">3. Warum erscheint kein Cookie-Banner?</h2>
          <p class="section-text">
            Ein Cookie-Banner ist nur dann erforderlich, wenn eine Website Cookies einsetzt,
            die nicht technisch notwendig sind – zum Beispiel für Werbung oder Analyse.
            Da diese Website ausschließlich technisch notwendige Cookies verwendet, ist
            eine ausdrückliche Einwilligung nach § 25 TDDDG nicht erforderlich und es
            wird kein Cookie-Banner angezeigt.
          </p>
        </section>

        <hr class="section-hr" />

        <!-- 4. Cookies verwalten -->
        <section>
          <h2 class="section-heading">4. Cookies im Browser verwalten</h2>
          <p class="section-text">
            Sie können Cookies in den Einstellungen Ihres Browsers jederzeit einsehen,
            verwalten und löschen. Bitte beachten Sie, dass das Deaktivieren technisch
            notwendiger Cookies die Funktionsfähigkeit der Website einschränken kann.
          </p>
          <p class="section-text">
            Anleitungen für gängige Browser:
          </p>
          <ul class="section-list">
            <li>
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" class="section-link">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="noopener noreferrer" class="section-link">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" class="section-link">
                Apple Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" class="section-link">
                Microsoft Edge
              </a>
            </li>
          </ul>
        </section>

        <hr class="section-hr" />

        <!-- 5. Weitere Infos -->
        <section>
          <h2 class="section-heading">5. Weitere Informationen</h2>
          <p class="section-text">
            Weitere Informationen zum Umgang mit Ihren personenbezogenen Daten finden Sie
            in unserer
            <a href="/datenschutz" class="section-link">Datenschutzerklärung</a>.
            Bei Fragen zu Cookies können Sie uns jederzeit unter
            <a href="mailto:info@lumiweb.de" class="section-link">info@lumiweb.de</a>
            kontaktieren.
          </p>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "lumiweb",
});

useSeoMeta({
  title: "Cookie-Hinweise – LUMI Web",
  description: "Cookie-Hinweise von LumiWeb – Julia Koval, Webentwicklung Dresden.",
  robots: "noindex, follow",
});
</script>

<style scoped>
@reference "tailwindcss";

.cookie-title {
  @apply text-2xl 2xl:text-4xl font-bold uppercase text-(--primary-orange) mb-3;
}

.section-heading {
  @apply text-left text-xl 2xl:text-2xl font-bold text-(--primary-orange) uppercase mb-4;
}

.section-subheading {
  @apply text-left text-base 2xl:text-lg font-bold text-(--primary-black) mb-2;
}

.section-text {
  @apply mb-4;
}

.section-list {
  @apply list-disc list-inside mb-4 space-y-1 pl-2;
}

.section-hr {
  @apply border-(--primary-orange) opacity-15;
}

.section-link {
  @apply text-(--primary-orange) underline underline-offset-2 hover:opacity-70 transition-opacity;
}
</style>