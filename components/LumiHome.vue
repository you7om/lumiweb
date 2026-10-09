<template>
  <!-- Startseite mit Lumi-Formen-Scroll-Effekt (genutzt von pages/index.vue und pages/lab.vue).
       Alle Anpassungen an den Sektionen stehen unten im Style-Block und gelten nur hier,
       nicht auf den Unterseiten wie Leistungen oder Projekte. -->
  <div ref="pageEl" class="home-page">
    <LumiShapes />

    <!-- Die ganze Seite liegt einheitlich auf Beige mit den schwebenden Formen; nur der Footer ist dunkler.
         Das Layout hat keinen Footer, jede Seite bindet ihn selbst ein. -->
    <div class="home-cta" data-lumi="heroSpread" data-lumi-top="0.1"><CallToAction /></div>
    <div class="home-services" data-lumi="services"><ServicesOverview /></div>
    <div class="home-projects" data-lumi="projects"><AllProjects /></div>
    <div class="home-about" data-lumi="about"><AboutMe /></div>
    <div class="home-contact" data-lumi="contact" data-lumi-top="0.6"><Kontakt /></div>
    <div class="home-footer"><TheFooter /></div>
  </div>
</template>

<script setup>
import TheFooter from "~/components/UI/TheFooter.vue";
import ServicesOverview from "~/components/ServicesOverview.vue";
import AboutMe from "~/components/AboutMe.vue";
import CallToAction from "~/components/CallToAction.vue";
import AllProjects from "~/components/Referenzen/AllProjects.vue";
import Kontakt from "~/components/Kontakt.vue";
import LumiShapes from "~/components/LumiShapes.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";


// ===== Inhalte beim Scrollen sanft einblenden =====
// Elemente, die erst erscheinen, wenn sie ins Bild scrollen
const REVEAL = [
  ".home-cta h2", ".home-cta .feature-card",
  ".home-services h2", ".home-services .serviceCard", ".home-services .btn-orange",
  ".home-projects h2", ".home-projects .project-card",
  ".home-about #about img", ".home-about #about h4", ".home-about #about p",
  ".home-contact h3", ".home-contact .email-box",
  ".home-contact .divider-or", ".home-contact .form-hint", ".home-contact form > *",
].join(", ");
// Abstand zwischen zwei Elementen, die nacheinander erscheinen
const STAGGER_MS = 220;
// Diese Karten erscheinen reihenweise (eine Reihe, dann die nächste), innerhalb der Reihe
// in zufälliger Reihenfolge bis zu ROW_SHUFFLE_MS versetzt. Alle anderen Elemente erscheinen
// einzeln nacheinander. Auf dem Handy ist jede Reihe nur eine Karte, dort also auch nacheinander.
const ROW_TOGETHER = ".home-projects .project-card";
const ROW_SHUFFLE_MS = 380;

const pageEl = ref(null);
let revealObserver = null;
// Zeitpunkt, ab dem das nächste Element bzw. die nächste Reihe erscheinen darf (Warteschlange)
let nextSlot = 0;
// Zuletzt eingereihtes Element: Container, Höhe und Startzeit seiner Reihe
let lastRow = null;

// ===== Seite erst zeigen, wenn Header und Formen bereit sind =====
// Bis dahin bleibt die Seite beige (CSS unten). Ohne WebGL oder bei langsamem Laden
// wird nach spätestens HERO_WAIT_MS trotzdem eingeblendet.
const HERO_WAIT_MS = 1500;
let readyTimer = null;

function showPage() {
  clearTimeout(readyTimer);
  document.removeEventListener("hero-blobs-ready", showPage);
  // Zwei Frames warten, damit das Canvas sein erstes Bild sicher gezeichnet hat
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.add("home-ready")));
}

onMounted(() => {
  if (document.querySelector(".hero-blobs[data-ready]")) showPage();
  else {
    document.addEventListener("hero-blobs-ready", showPage);
    readyTimer = setTimeout(showPage, HERO_WAIT_MS);
  }

  // Bei reduced motion bleibt alles sofort sichtbar
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const targets = [...pageEl.value.querySelectorAll(REVEAL)];
  targets.forEach((el) => el.classList.add("home-reveal"));
  // Noch nicht eingeblendete Elemente
  let pending = [...targets];

  revealObserver = new IntersectionObserver(
    (entries) => {
      // Was gleichzeitig ins Bild kommt, erscheint in der Reihenfolge der Seite, eins nach dem anderen.
      // Kommt später etwas dazu, reiht es sich hinten an, statt gleichzeitig loszulaufen.
      const hits = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target);
      // Bei reihenweisen Karten die ganze Reihe mitnehmen, auch wenn eine von ihnen
      // die Sichtbarkeitsschwelle einen Moment später erreicht
      const rowMates = hits.filter((hit) => hit.matches(ROW_TOGETHER)).flatMap((hit) => {
        const top = hit.getBoundingClientRect().top;
        return pending.filter(
          (t) => t.parentElement === hit.parentElement && Math.abs(t.getBoundingClientRect().top - top) < 8,
        );
      });
      const visible = [...new Set([...hits, ...rowMates])]
        .filter((el) => pending.includes(el))
        .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
      pending = pending.filter((el) => !visible.includes(el));
      for (const el of visible) {
        revealObserver.unobserve(el);
        const now = performance.now();
        // Reihenweise Karten: gleicher Container und gleiche Höhe erscheinen gemeinsam, die nächste Reihe danach.
        // Auf dem Handy steht alles untereinander, dort also auch eins nach dem anderen.
        const top = Math.round(el.getBoundingClientRect().top);
        const sameRow =
          el.matches(ROW_TOGETHER) && lastRow && lastRow.parent === el.parentElement && Math.abs(lastRow.top - top) < 8;
        const start = sameRow ? lastRow.start : Math.max(now, nextSlot);
        if (!sameRow) nextSlot = start + STAGGER_MS;
        lastRow = { parent: el.parentElement, top, start };
        const shuffle = el.matches(ROW_TOGETHER) ? Math.random() * ROW_SHUFFLE_MS : 0;
        el.style.transitionDelay = `${Math.round(Math.max(start - now, 0) + shuffle)}ms`;
        el.classList.add("is-visible");
        // Danach aufräumen, damit Hover-Effekte der Karten wieder normal funktionieren
        const cleanup = (e) => {
          // Nur auf das eigene Ende der Bewegung reagieren, nicht auf Transitions von Kind-Elementen
          if (e.target !== el || e.propertyName !== "transform") return;
          el.removeEventListener("transitionend", cleanup);
          el.classList.remove("home-reveal", "is-visible");
          el.style.transitionDelay = "";
        };
        el.addEventListener("transitionend", cleanup);
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  );
  targets.forEach((el) => revealObserver.observe(el));
});

onBeforeUnmount(() => {
  revealObserver?.disconnect();
  clearTimeout(readyTimer);
  document.removeEventListener("hero-blobs-ready", showPage);
  document.body.classList.remove("home-ready");
});
</script>

<style scoped>
/* ===== Sanftes Einblenden beim Scrollen (Klassen setzt das Script) ===== */
/* Dreifache Klasse: stärker als die Transitions und Hover-Regeln der Karten weiter unten */
:deep(.home-reveal.home-reveal.home-reveal) {
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 2.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 2.8s cubic-bezier(0.16, 1, 0.3, 1);
}
:deep(.home-reveal.home-reveal.home-reveal.is-visible) {
  opacity: 1;
  transform: none;
}

/* ===== Gemeinsame Farben und Kartenstil der Startseite =====
   Überschriften im Orange der Seite, Text in gedämpftem Dunkel (kein hartes Schwarz),
   Karten wie bei Projekten und Leistungen: hell, feiner Rand, weicher Schatten. */
.home-page {
  --home-text: color-mix(in srgb, var(--primary-black) 78%, transparent);
  --home-text-strong: color-mix(in srgb, var(--primary-black) 88%, transparent);
  --home-text-soft: color-mix(in srgb, var(--primary-black) 58%, transparent);
  --home-card: color-mix(in srgb, #fff 60%, var(--primary-beige));
  --home-card-border: color-mix(in srgb, var(--primary-black) 8%, transparent);
  --home-card-shadow: 0 1px 3px color-mix(in srgb, var(--primary-black) 6%, transparent);
  --home-card-shadow-hover: 0 18px 36px -18px color-mix(in srgb, var(--primary-black) 30%, transparent);
}

/* Kontakt-Überschrift wie die übrigen Abschnittsüberschriften (h2) */
.home-contact :deep(h3) {
  margin-top: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: normal;
  color: var(--primary-orange);
}
/* Ohne Kurztitel über "Kontaktiere mich!": Die Überschrift sagt schon alles */
.home-contact :deep(.feature-badge) {
  display: none;
}
@media (min-width: 40rem) {
  .home-contact :deep(h3) {
    font-size: 1.875rem;
  }
}
@media (min-width: 64rem) {
  .home-contact :deep(h3) {
    font-size: 2.25rem;
  }
}

/* ===== Warum mit mir: kein eigener Hintergrund, Felder als Karten ===== */
.home-cta > :deep(div) {
  background: transparent;
}
.home-cta :deep(.grid) {
  gap: 1rem;
  background: transparent;
  border: 0;
  overflow: visible;
}
/* Auf dem Handy einspaltig: zwei Spalten sind dort zu schmal, fast jede Zeile würde getrennt */
@media (max-width: 39.99rem) {
  .home-cta :deep(.grid) {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (min-width: 64rem) {
  .home-cta :deep(.grid) {
    gap: 1.5rem;
  }
}
/* Karten wie die Leistungskarten: oranges Verlaufsbild unter beigem Schleier,
   auf jeder Karte anders gedreht bzw. gespiegelt, damit keine wie die andere aussieht */
.home-cta :deep(.feature-card) {
  /* Sicherheitsnetz für sehr lange Wörter auf schmalen Bildschirmen, ohne Silbentrennung */
  overflow-wrap: break-word;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: 1.5rem 1.25rem;
  border-radius: 1rem;
  background: transparent;
  border: 1px solid var(--home-card-border);
  box-shadow: var(--home-card-shadow);
}
.home-cta :deep(.feature-card::before) {
  content: "";
  position: absolute;
  inset: -30%;
  z-index: -1;
  background:
    linear-gradient(
      color-mix(in srgb, var(--primary-beige) 90%, transparent),
      color-mix(in srgb, var(--primary-beige) 90%, transparent)
    ),
    url("/orange-abstract.jpg") center / cover;
}
/* Nur Drehungen um 180° und Spiegelungen: Die Karten sind breiter als hoch, eine 90°-Drehung
   würde sie nicht ganz abdecken. Verschobene Bildausschnitte sorgen für weitere Abwechslung. */
.home-cta :deep(.feature-card:nth-child(6n + 2)::before) { transform: rotate(180deg); }
.home-cta :deep(.feature-card:nth-child(6n + 3)::before) { transform: scaleX(-1); }
.home-cta :deep(.feature-card:nth-child(6n + 4)::before) { transform: scaleY(-1); }
.home-cta :deep(.feature-card:nth-child(6n + 5)::before) { background-position: left top; }
.home-cta :deep(.feature-card:nth-child(6n + 6)::before) {
  transform: rotate(180deg);
  background-position: right bottom;
}
@media (min-width: 64rem) {
  .home-cta :deep(.feature-card) {
    padding: 2.25rem 2rem;
  }
}
/* Icon im orangen Kreis, wie bei den Zusatzleistungen auf der Leistungsseite */
.home-cta :deep(.feature-icon) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  font-size: 1.5rem;
  color: var(--primary-orange);
  background: color-mix(in srgb, var(--primary-orange) 10%, transparent);
}
.home-cta :deep(.feature-title) {
  color: var(--home-text-strong);
}
.home-cta :deep(.feature-text) {
  color: var(--home-text);
}
.home-cta :deep(.feature-optional) {
  display: none;
}

/* ===== Einheitlicher Hover für alle Karten: sanft 4 px anheben, weicher Schatten =====
   Die Tailwind-Klassen der Komponenten nutzen die CSS-Eigenschaften translate/scale,
   deshalb werden genau diese hier gesetzt bzw. zurückgenommen. */
.home-cta :deep(.feature-card),
.home-services :deep(.serviceCard),
.home-projects :deep(.project-card) {
  transition:
    translate 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.home-cta :deep(.feature-card:hover),
.home-services :deep(.serviceCard:hover),
.home-projects :deep(.project-card:hover) {
  translate: 0 -4px;
  box-shadow: var(--home-card-shadow-hover);
}
/* Die Komponente färbt das Feld beim Hover um; hier bleibt der Kartenhintergrund gleich */
.home-cta :deep(.feature-card:hover) {
  background-color: transparent;
}
/* Kein zusätzlicher Bild-Zoom bei den Projekten, damit alle Karten gleich reagieren */
.home-projects :deep(.project-card:hover .card-img) {
  scale: 1;
}

/* ===== Meine Leistungen: Karten etwas höher, mit dem Verlauf der Leistungsseite, Preise auf einer Linie ===== */
.home-services :deep(.serviceCard) {
  padding: 2.25rem 1.75rem;
  background:
    linear-gradient(
      color-mix(in srgb, var(--primary-beige) 90%, transparent),
      color-mix(in srgb, var(--primary-beige) 90%, transparent)
    ),
    url("/orange-abstract.jpg") center / cover;
}
.home-services :deep(.serviceCard ul) {
  gap: 0.75rem;
  margin-top: 1.5rem;
}
.home-services :deep(.serviceCard .price) {
  margin-top: auto;
  padding-top: 1.75rem;
}
@media (min-width: 64rem) {
  .home-services :deep(.serviceCard) {
    padding: 3rem 2.25rem;
  }
}

/* Mehrseitig und Web-App: dasselbe Bild, aber gedreht, damit die drei Karten nicht gleich aussehen.
   Das Bild liegt dafür in einer größeren, gedrehten Ebene hinter dem Inhalt. */
.home-services :deep(.serviceCard) {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.home-services :deep(.serviceCard:nth-child(n + 2)) {
  background: transparent;
}
.home-services :deep(.serviceCard:nth-child(n + 2)::before) {
  content: "";
  position: absolute;
  inset: -30%;
  z-index: -1;
  background:
    linear-gradient(
      color-mix(in srgb, var(--primary-beige) 90%, transparent),
      color-mix(in srgb, var(--primary-beige) 90%, transparent)
    ),
    url("/orange-abstract.jpg") center / cover;
}
.home-services :deep(.serviceCard:nth-child(2)::before) {
  transform: rotate(90deg);
}
.home-services :deep(.serviceCard:nth-child(3)::before) {
  transform: rotate(180deg);
}

/* ===== Meine Projekte: Textbereich zwischen Weiß und Beige, passend zu den hellen Screenshots ===== */
.home-projects :deep(.project-card) {
  background: var(--home-card);
  border-color: var(--home-card-border);
}

/* ===== Über mich: Foto und Text in einer Karte im Stil von Leistungen und "Warum mit mir" ===== */
/* Ohne Überschrift: Foto und Einleitung zeigen schon, worum es geht */
.home-about :deep(#about > h2) {
  display: none;
}
.home-about :deep(#about > .grid) {
  align-items: center;
  margin-top: 1rem;
  padding: 1.5rem;
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border: 1px solid var(--home-card-border);
  box-shadow: 0 20px 60px -30px color-mix(in srgb, var(--primary-black) 35%, transparent);
}
/* Gleiches Verlaufsbild unter beigem Schleier wie bei den Leistungskarten, um 180° gedreht.
   Die Karte ist breiter als hoch, eine 90°-Drehung würde sie nicht ganz abdecken. */
.home-about :deep(#about > .grid::before) {
  content: "";
  position: absolute;
  inset: -30%;
  z-index: -1;
  transform: rotate(180deg);
  background:
    linear-gradient(
      color-mix(in srgb, var(--primary-beige) 90%, transparent),
      color-mix(in srgb, var(--primary-beige) 90%, transparent)
    ),
    url("/orange-abstract.jpg") center / cover;
}
.home-about :deep(#about img) {
  aspect-ratio: 4 / 5;
  border-radius: 1.5rem;
  box-shadow: 0 18px 40px -20px color-mix(in srgb, var(--primary-black) 45%, transparent);
}
.home-about :deep(#about h4) {
  margin-top: 0;
  text-transform: none;
  letter-spacing: normal;
  line-height: 1.3;
  font-size: 1.5rem;
  color: var(--primary-orange);
}
.home-about :deep(#about p) {
  font-size: 1.125rem;
  text-align: left;
  color: var(--home-text);
}
@media (min-width: 64rem) {
  .home-about :deep(#about > .grid) {
    padding: 3rem;
    gap: 3.5rem;
  }
  .home-about :deep(#about h4) {
    font-size: 1.875rem;
  }
}

/* ===== Kontakt: kein eigener Hintergrund; Formular und E-Mail-Box als Karten, ab Desktop zweispaltig ===== */
.home-contact :deep(#kontakt) {
  background: transparent;
}
/* Gleicher Kartenstil wie Leistungen und "Warum mit mir": Verlaufsbild unter beigem Schleier */
.home-contact :deep(form),
.home-contact :deep(.email-box) {
  background:
    linear-gradient(
      color-mix(in srgb, var(--primary-beige) 90%, transparent),
      color-mix(in srgb, var(--primary-beige) 90%, transparent)
    ),
    url("/orange-abstract.jpg") center / cover;
  border: 1px solid var(--home-card-border);
  box-shadow: var(--home-card-shadow);
}
.home-contact :deep(.email-box) {
  background-position: left top;
}
/* Felder heller als die Karte, damit sie sich klar abheben */
.home-contact :deep(.input-field) {
  background-color: color-mix(in srgb, #fff 70%, transparent);
}
.home-contact :deep(form) {
  padding: 1.5rem;
  border-radius: 1.5rem;
}
.home-contact :deep(.email-box) {
  border-radius: 1rem;
}
/* Kleine Beschriftungen im Orange, wie "Enthalten" auf der Leistungsseite */
.home-contact :deep(.label),
.home-contact :deep(.email-box-label) {
  color: var(--primary-orange);
}
.home-contact :deep(.email-box-link) {
  color: var(--home-text-strong);
}
.home-contact :deep(.email-box-link:hover) {
  color: var(--primary-orange);
}
.home-contact :deep(.divider-or) {
  color: var(--home-text-soft);
}
.home-contact :deep(.form-hint) {
  color: var(--home-text);
}
.home-contact :deep(.input-field) {
  border-color: color-mix(in srgb, var(--primary-black) 12%, transparent);
  color: var(--home-text-strong);
}
.home-contact :deep(.input-field::placeholder) {
  color: var(--home-text-soft);
}
.home-contact :deep(.input-field:focus) {
  background-color: #fff;
  border-color: color-mix(in srgb, var(--primary-orange) 55%, transparent);
}
.home-contact :deep(.btn-send) {
  background-color: var(--primary-orange);
  color: var(--primary-beige);
}
.home-contact :deep(.btn-send:hover) {
  background-color: var(--primary-orange);
  opacity: 0.9;
}
.home-contact :deep(.success-box),
.home-contact :deep(.error-box) {
  color: var(--home-text-strong);
  background-color: color-mix(in srgb, var(--primary-orange) 8%, transparent);
  border-color: color-mix(in srgb, var(--primary-orange) 25%, transparent);
}
.home-contact :deep(.success-box .material-symbols-outlined),
.home-contact :deep(.error-box .material-symbols-outlined) {
  color: var(--primary-orange);
}
/* Laptop: alles in einer zentrierten Spalte, Überschrift mittig */
@media (min-width: 64rem) {
  .home-contact :deep(.email-box),
  .home-contact :deep(form) {
    width: 100%;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }
  .home-contact :deep(.email-box) {
    padding: 1.5rem;
  }
  .home-contact :deep(form) {
    padding: 2.5rem;
  }
  /* "Fülle das Formular aus" ist neben dem sichtbaren Formular überflüssig; "oder" bleibt */
  .home-contact :deep(.form-hint) {
    display: none;
  }
}

/* ===== Footer: dunkler Abschluss im Orange der Seite, mit Abstand zum Rand ===== */
.home-footer :deep(footer) {
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: var(--primary-orange);
}
.home-footer :deep(footer > div > div:nth-child(1) > span:nth-child(1)) {
  color: var(--primary-beige);
}
.home-footer :deep(footer > div > div:nth-child(1) > span:nth-child(2)) {
  color: color-mix(in srgb, var(--primary-beige) 80%, transparent);
}
.home-footer :deep(footer > div > div:nth-child(2)) {
  color: color-mix(in srgb, var(--primary-beige) 90%, transparent);
}
.home-footer :deep(footer a:hover) {
  color: #fff;
}
.home-footer :deep(footer > div > div:nth-child(3)) {
  color: color-mix(in srgb, var(--primary-beige) 75%, transparent);
}
@media (min-width: 64rem) {
  .home-footer :deep(footer) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}
</style>

<!-- Nicht scoped: betrifft Header und Body außerhalb der Komponente. Steht im CSS der Seite,
     damit es schon im ersten Bild gilt, bevor JavaScript läuft (sonst sieht man beim Laden
     kurz eine harte Kante unter dem Header, bis die Formen bereit sind). -->
<style>
/* Hintergrund von Anfang an im Beige der Formen (BACKGROUND in lumiFormations.js),
   damit beim Einblenden des Canvas kein Farbsprung entsteht. Sobald die Formen aktiv sind,
   macht LumiShapes den Body durchsichtig. */
body:has(.home-page):not(.lumi-shapes-active) {
  background-color: #f4e8db;
}

/* Header läuft unten weich ins Beige aus */
body:has(.home-page) .hero-blobs {
  -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 140px), transparent);
  mask-image: linear-gradient(to bottom, #000 calc(100% - 140px), transparent);
}
/* ===== Erst einblenden, wenn Header und Formen bereit sind =====
   Das Script setzt dann body.home-ready. Falls JavaScript hängt oder fehlt,
   erscheint die Seite nach 2,5 Sekunden trotzdem (verzögerte Animation). */
html:has(.home-page) {
  background-color: #f4e8db;
}
@keyframes home-page-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes home-page-in-ready {
  from { opacity: 0; }
  to { opacity: 1; }
}
body:has(.home-page) #__nuxt {
  opacity: 0;
  animation: home-page-in 0.8s ease 2.5s forwards;
}
body.home-ready:has(.home-page) #__nuxt {
  animation: home-page-in-ready 0.8s ease forwards;
}
@media (prefers-reduced-motion: reduce) {
  body:has(.home-page) #__nuxt {
    opacity: 1;
    animation: none;
  }
}

/* ===== Header auf Tablet und Handy etwas höher, damit der Inhalt mittiger im Bildschirm sitzt ===== */
@media (max-width: 63.99rem) {
  body:has(.home-page) .hero-section {
    min-height: 90vh;
    min-height: 90svh;
  }
}
</style>
