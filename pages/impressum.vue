<template>
  <div class="min-h-screen py-16 px-4">
    <div class="w-3/5 mx-auto">
      <!-- Header -->
      <div class="mb-12 text-center">
        <h1 class="impressum-title">Impressum</h1>
      </div>

      <!-- Sections -->
      <div class="space-y-10 text-(--primary-black)">
        <!-- Anbieter -->
        <section>
          <h2 class="section-heading">Webseitenbetreiber / Anbieter</h2>
          <p class="section-subtitle">Angaben gemäß § 5 DDG:</p>
          <p class="section-text">
            Iuliia Koval<br />
            LumiWeb<br />
            c/o SourceArt<br />
            Tuttlingerstraße 45<br />
            78333 Stockach<br />
            Deutschland
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Kontakt -->
        <section>
          <h2 class="section-heading">Kontakt</h2>
          <p class="section-text">
            E-Mail:
            <a href="mailto:info@lumiweb.de" class="section-link">
              kontakt@lumiweb.de </a
            ><br />
            Telefon: +49 176 32615478
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Verantwortlich für Inhalte -->
        <section>
          <h2 class="section-heading">
            Verantwortlich für Inhalte nach § 18 Abs. 2 MStV
          </h2>
          <p class="section-text">
            Iuliia Koval<br />
            c/o SourceArt<br />
            Tuttlingerstraße 45<br />
            78333 Stockach
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Unternehmensform -->
        <section>
          <h2 class="section-heading">Unternehmensform</h2>
          <p class="section-text">Freiberuflerin</p>
          <p class="section-text">
            Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen
            (Kleinunternehmerregelung).
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Verbraucherstreitbeilegung -->
        <section>
          <h2 class="section-heading">
            Verbraucherstreitbeilegung / Universalschlichtungsstelle
          </h2>
          <p class="section-text">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Haftung für Inhalte -->
        <section>
          <h2 class="section-heading">Haftung für Inhalte</h2>
          <p class="section-text">
            Als Dienstanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte
            auf dieser Website nach den allgemeinen Gesetzen verantwortlich.
            Nach §§ 8 bis 10 DDG bin ich als Dienstanbieterin jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
            oder Sperrung der Nutzung von Informationen nach den allgemeinen
            Gesetzen bleiben hiervon unberührt.
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Haftung für Links -->
        <section>
          <h2 class="section-heading">Haftung für Links</h2>
          <p class="section-text">
            Diese Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
            Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
        </section>

        <hr class="section-hr" />

        <!-- Urheberrecht -->
        <section>
          <h2 class="section-heading">Urheberrecht</h2>
          <p class="section-text">
            Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung der jeweiligen Autorin.
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
  title: "Impressum – LUMI Web",
  description: "Impressum von LumiWeb – Julia Koval, Webentwicklung Dresden.",
  robots: "noindex, follow",
});
</script>

<style scoped>
@reference "tailwindcss";

.impressum-title {
  @apply text-2xl 2xl:text-4xl font-bold uppercase text-(--primary-orange) mb-3;
}

.section-heading {
  @apply text-left text-xl 2xl:text-2xl font-bold text-(--primary-orange) uppercase mb-3;
}

.section-subtitle {
  @apply text-sm text-(--primary-black) opacity-60 mb-3;
}

.section-text {
  @apply mb-4;
}

.section-hr {
  @apply border-(--primary-orange) opacity-15;
}

.section-link {
  @apply text-(--primary-orange) underline underline-offset-2 hover:opacity-70 transition-opacity;
}
</style>
