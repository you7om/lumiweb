<template>
  <div class="my-10 lg:my-20">
    <div class="rounded-2xl w-full 2xl:w-3/4 mx-auto px-4 2xl:px-0">
      <h2>Häufige Fragen</h2>

      <div class="faqList">
        <details v-for="faq in faqs" :key="faq.q" class="faqItem">
          <summary>
            {{ faq.q }}
            <span class="faqIcon material-symbols-outlined">add</span>
          </summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
const faqs = [
  {
    q: "Wie läuft die Zusammenarbeit ab?",
    a: "Nach deiner Anfrage besprechen wir kurz, was du für deine Website brauchst. Anschließend erhältst du von mir ein unverbindliches Angebot. Wenn alles passt, klären wir die Inhalte und starten mit der Umsetzung. Du bekommst zwischendurch die Möglichkeit, Feedback zu geben, bevor die Website online geht.",
  },
  {
    q: "Was muss ich selbst bereitstellen?",
    a: "Für die Website benötige ich von dir in der Regel Texte, Bilder und dein Logo. Wenn du bei der Erstellung von Texten oder der Auswahl und Aufbereitung von Bildern Unterstützung möchtest, können wir das individuell besprechen.",
  },
  {
    q: "Was ist der Unterschied zwischen einer Vorlage und individuellem Webdesign?",
    a: "Bei einer Website mit Vorlage steht der grundlegende Aufbau bereits fest. Ich passe Farben, Bilder, Texte und Inhalte an dein Unternehmen an. Beim individuellen Webdesign entwickle ich Aufbau und Gestaltung speziell für dich und deine Zielgruppe.",
  },
  {
    q: "Was passiert, wenn meine Website umfangreicher wird?",
    a: "Die genannten Preise sind Einstiegspreise für einen bestimmten Umfang. Wenn während der Planung klar wird, dass deine Website mehr Seiten, Inhalte oder Funktionen benötigt, bespreche ich den zusätzlichen Aufwand mit dir und passe das Angebot entsprechend an.",
  },
  {
    q: "Wie lange dauert die Umsetzung?",
    a: "Eine einfache Website kann häufig innerhalb von 1–2 Wochen umgesetzt werden, sofern alle Inhalte rechtzeitig vorliegen. Umfangreichere oder individuell gestaltete Projekte können entsprechend länger dauern.",
  },
  {
    q: "Kann ich später weitere Seiten oder Funktionen hinzufügen?",
    a: "Ja. Deine Website kann später erweitert werden. Ob zusätzliche Seiten oder Funktionen möglich sind und welcher Aufwand dafür entsteht, hängt von der jeweiligen Erweiterung ab.",
  },
  {
    q: "Kannst du meine Website auch nach dem Launch betreuen?",
    a: "Ja. Wenn du möchtest, kann ich deine Website auch nach der Veröffentlichung weiter betreuen. Dazu können zum Beispiel technische Updates, Änderungen an Inhalten oder kleinere Anpassungen gehören. Den Umfang und die Kosten der laufenden Betreuung können wir individuell vereinbaren.",
  },
];
</script>

<style scoped>
@reference "tailwindcss";

.faqList {
  @apply flex flex-col gap-3;
}

.faqItem {
  @apply bg-(--primary-beige) border border-(--primary-black)/8 rounded-xl px-6 py-4;
}

.faqItem summary {
  @apply flex items-center justify-between gap-4 cursor-pointer select-none list-none
  text-lg lg:text-xl font-semibold text-(--primary-black) py-1;
}
.faqItem summary::-webkit-details-marker {
  display: none;
}

.faqIcon {
  @apply shrink-0 text-(--primary-orange) text-2xl transition-transform duration-300;
}
.faqItem[open] .faqIcon {
  transform: rotate(45deg);
}

.faqItem p {
  @apply text-(--primary-black)/80 leading-relaxed text-base lg:text-lg mt-3 mb-1 text-left;
}
</style>
