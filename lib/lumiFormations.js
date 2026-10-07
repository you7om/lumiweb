// ===== Lumi-Formen: Figuren für den Scroll-Effekt =====
//
// Raster: 1500 × 1000 = ein Bildschirm (wird auf jede Bildschirmgröße eingepasst).
// Jede Figur besteht aus genau 8 Elementen. Elemente mit Größe 0 sind unsichtbar
// und liegen in einer anderen Form – beim Scrollen wachsen sie aus ihr heraus.
//
// Element:
//   x / y      Mittelpunkt
//   a / b      halbe Breite / halbe Höhe
//   rot        Drehung in Grad
//   box        0 = Ellipse, 1 = abgerundetes Rechteck (Werte dazwischen = Übergang)
//   corner     Eckenrundung beim Rechteck (0 – 1)
//   light / base / rim   Farbverlauf: Lichtpunkt → Grundfarbe → Rand
//   hl         Position des Lichtpunkts in der Form (-1 bis 1)
//
// Figur:
//   merge      wie stark nahe Formen ineinanderfließen
//   soft       Weichheit der Kante
//   opacity    Deckkraft der Formen
//   aura       4 weiche Farbwolken im Hintergrund: { x, y, r, color, alpha }

export const COUNT = 8;
export const AURA_COUNT = 4;
export const BACKGROUND = "#f4e8db";

const CREAM = "#fbefe4";
const PEACH = "#f9cdaa";
const HONEY = "#f5b867";
const APRICOT = "#f29b6b";
const CORAL = "#ec7d6a";
const ROSE = "#ec8b9c";
const LILAC = "#efc6d3";
const BUTTER = "#fbf0c4";

// Hintergrund der orangenen Sektionen (= --primary-orange). Dort werden die Formen
// Ton in Ton als warme Glut gezeigt.
export const RED_BACKGROUND = "#b53720";

// Farbsets
const WARM = { light: PEACH, base: APRICOT, rim: CORAL };
const SUN = { light: CREAM, base: HONEY, rim: APRICOT };
const BLUSH = { light: CREAM, base: ROSE, rim: CORAL };
const SOFT = { light: CREAM, base: PEACH, rim: APRICOT };
const DUSK = { light: CREAM, base: LILAC, rim: ROSE };

function el(x, y, a, b, colors, options = {}) {
  return {
    x, y, a, b,
    rot: options.rot ?? 0,
    box: options.box ?? 0,
    corner: options.corner ?? 0,
    hl: options.hl ?? [-0.3, -0.4],
    ...colors,
  };
}

function circle(x, y, r, colors, options) {
  return el(x, y, r, r, colors, options);
}

// Unsichtbares Element, versteckt in einer anderen Form
function hidden(host) {
  return { ...host, a: 0, b: 0 };
}

// ===== 1. Header: die drei Blobs =====
const heroTopLeft = el(180, 190, 480, 350, WARM, { rot: -12, hl: [-0.35, 0.55] });
const heroRight = el(1305, 190, 330, 345, { light: CREAM, base: APRICOT, rim: ROSE }, { hl: [-0.45, -0.4] });
const heroBottom = el(650, 830, 300, 260, WARM, { rot: -25, hl: [0.1, -0.6] });

const hero = {
  elements: [
    heroTopLeft,
    circle(650, 10, 190, WARM, { hl: [0, 0.6] }), // Ausbuchtung oben → Bohnenform
    heroRight,
    heroBottom,
    circle(420, 960, 180, WARM, { hl: [0.3, -0.5] }), // Ausbuchtung unten links
    hidden(heroRight),
    hidden(heroBottom),
    hidden(heroTopLeft),
  ],
  merge: 110,
  soft: 6,
  opacity: 0.6,
  aura: [
    { x: 1350, y: 120, r: 450, color: CREAM, alpha: 0.6 },
    { x: 680, y: 260, r: 420, color: HONEY, alpha: 0.3 },
    { x: 1150, y: 800, r: 420, color: ROSE, alpha: 0.35 },
    { x: 300, y: 830, r: 420, color: APRICOT, alpha: 0.35 },
  ],
};

// ===== 2. Auseinandergehen: die Header-Blobs treiben sanft nach außen =====
// Gleiche Blobs, von der Bildmitte weggeschoben, etwas kleiner und kaum gedreht.
// SPREAD: wie weit nach außen (1 = gar nicht, 1.3 = 30 % weiter von der Mitte)
const SPREAD = 1.3;
const SPREAD_SIZE = 0.88;
const SPREAD_DEG = 6;

function pushFromCenter(item, factor) {
  return { ...item, x: 750 + (item.x - 750) * factor, y: 500 + (item.y - 500) * factor };
}

const heroSpread = {
  ...hero,
  elements: hero.elements.map((e) => ({
    ...pushFromCenter(e, SPREAD),
    a: e.a * SPREAD_SIZE,
    b: e.b * SPREAD_SIZE,
    rot: e.rot + SPREAD_DEG,
  })),
  aura: hero.aura.map((c) => pushFromCenter(c, 1.1)),
};

// ===== 3. Leistungen: verstreute weiche Bohnen und Ovale =====
// Kräftiger Kern, rosiger Rand, unscharfe Kanten. Je zwei Elemente ergeben eine Bohne.
const EMBER = { light: CORAL, base: APRICOT, rim: ROSE };
const PETAL = { light: APRICOT, base: PEACH, rim: ROSE };
const services = {
  elements: [
    circle(231, 411, 180, EMBER, { hl: [0.1, 0.25] }), // Bohne oben links
    circle(372, 250, 115, EMBER, { hl: [0, 0.3] }),
    circle(282, 719, 190, EMBER, { hl: [0, 0.2] }), // Bohne unten links
    circle(462, 545, 115, EMBER, { hl: [-0.2, 0.3] }),
    circle(1245, 475, 190, EMBER, { hl: [0.2, 0.2] }), // Bohne rechts
    circle(1150, 300, 115, EMBER, { hl: [0.3, 0.3] }),
    // Hinter der Überschrift (ca. x 550–950, y 190–250) bleibt es frei
    el(700, 500, 170, 130, PETAL, { rot: -8, hl: [0, 0.1] }), // Oval Mitte, hinter der mittleren Karte
    el(960, 700, 150, 125, PETAL, { rot: 12, hl: [0, 0.1] }), // Oval Mitte rechts
  ],
  merge: 60,
  soft: 18,
  opacity: 0.6,
  aura: [
    { x: 750, y: 500, r: 650, color: PEACH, alpha: 0.35 },
    { x: 200, y: 150, r: 400, color: CREAM, alpha: 0.4 },
    { x: 1300, y: 850, r: 400, color: ROSE, alpha: 0.2 },
    { x: 1200, y: 150, r: 400, color: CREAM, alpha: 0.4 },
  ],
};

// ===== 4. Projekte: große fließende Farbfelder =====
// Honig-Leuchten, Rosé-Bogen, Flieder-Band, Orange links – sehr weich, wie ein Verlauf.
const projects = {
  elements: [
    el(700, 300, 260, 300, SUN, { rot: -20, hl: [0, 0] }), // Honig oben Mitte
    el(1150, 640, 330, 160, { light: ROSE, base: ROSE, rim: CORAL }, { rot: -18, hl: [0.2, 0.3] }), // Rosé-Bogen unten
    el(1310, 380, 110, 280, BLUSH, { rot: 10, hl: [0.2, 0.3] }), // Rosé-Bogen rechts hoch
    el(230, 620, 240, 270, { light: APRICOT, base: APRICOT, rim: PEACH }, { hl: [0, 0] }), // Orange links
    el(520, 600, 70, 380, { light: LILAC, base: LILAC, rim: CREAM }, { rot: 35, hl: [0, 0] }), // Flieder-Band
    circle(130, 120, 150, { light: APRICOT, base: PEACH, rim: CREAM }, { hl: [0, 0] }), // Orange-Ecke oben links
    hidden(el(700, 300, 260, 300, SUN)),
    hidden(el(1150, 640, 330, 160, BLUSH)),
  ],
  merge: 200,
  soft: 70,
  opacity: 0.65,
  aura: [
    { x: 750, y: 500, r: 700, color: CREAM, alpha: 0.5 },
    { x: 1300, y: 200, r: 400, color: CREAM, alpha: 0.5 },
    { x: 200, y: 850, r: 400, color: PEACH, alpha: 0.3 },
    { x: 1000, y: 900, r: 400, color: ROSE, alpha: 0.2 },
  ],
};

// ===== 5. Über mich: drei große, abstrakte Bohnen und ein weiches Oval =====
// Je zwei Elemente fließen zu einer Bohne zusammen.
const about = {
  elements: [
    el(300, 470, 300, 270, SOFT, { rot: -15, hl: [-0.2, 0.3] }), // Bohne hinter dem Foto
    circle(540, 250, 175, SOFT, { hl: [0, 0.3] }),
    el(1210, 260, 240, 210, BLUSH, { rot: 20, hl: [0.2, 0.2] }), // Bohne oben rechts
    circle(1010, 140, 140, BLUSH, { hl: [0.3, 0.3] }),
    el(1150, 800, 230, 190, { light: CORAL, base: APRICOT, rim: ROSE }, { rot: -10, hl: [0, 0.1] }), // Bohne unten rechts
    circle(940, 890, 150, { light: CORAL, base: APRICOT, rim: ROSE }, { hl: [-0.2, 0] }),
    el(660, 860, 200, 140, { light: HONEY, base: PEACH, rim: ROSE }, { rot: 8, hl: [0, 0] }), // Oval unten Mitte
    hidden(el(300, 470, 300, 270, SOFT)),
  ],
  merge: 120,
  soft: 16,
  opacity: 0.6,
  // Stimmung: Butter-Gelb oben, Pfirsich unten
  aura: [
    { x: 1050, y: 180, r: 600, color: BUTTER, alpha: 0.55 },
    { x: 600, y: 800, r: 600, color: PEACH, alpha: 0.4 },
    { x: 1250, y: 800, r: 400, color: LILAC, alpha: 0.25 },
    { x: 150, y: 150, r: 350, color: CREAM, alpha: 0.5 },
  ],
};

// ===== 6. Kontakt: große weiche Bohnen links und rechts =====
// Das Formular liegt etwa bei x 400–1100. Die Bohnen reichen nur leicht über seinen Rand,
// die Mitte mit Überschrift und Feldern bleibt frei.
const contact = {
  elements: [
    el(110, 330, 300, 340, WARM, { rot: 10, hl: [0.3, 0] }), // Bohne links
    circle(260, 690, 210, WARM, { hl: [0.3, -0.2] }),
    el(1390, 300, 300, 340, BLUSH, { rot: -10, hl: [-0.3, 0] }), // Bohne rechts
    circle(1240, 670, 200, BLUSH, { hl: [-0.3, -0.2] }),
    el(1330, 970, 240, 170, SUN, { rot: 15, hl: [-0.2, -0.2] }), // Oval rechts unten
    el(170, 990, 230, 160, BLUSH, { rot: -12, hl: [0.2, -0.2] }), // Oval links unten
    hidden(el(110, 330, 300, 340, WARM)),
    hidden(el(1390, 300, 300, 340, BLUSH)),
  ],
  merge: 90,
  soft: 22,
  opacity: 0.6,
  aura: [
    { x: 100, y: 450, r: 450, color: APRICOT, alpha: 0.25 },
    { x: 1400, y: 450, r: 450, color: ROSE, alpha: 0.25 },
    { x: 750, y: 100, r: 500, color: CREAM, alpha: 0.4 },
    { x: 1300, y: 900, r: 400, color: LILAC, alpha: 0.2 },
  ],
};

export const formations = { hero, heroSpread, services, projects, about, contact };
