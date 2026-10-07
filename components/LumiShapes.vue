<template>
  <!-- Liegt fest hinter der ganzen Seite. Sektionen mit eigenem Hintergrund decken sie ab. -->
  <div class="lumi-shapes" aria-hidden="true">
    <canvas ref="canvasEl" class="lumi-shapes__layer"></canvas>

    <!-- Feine Körnung, bewegt sich nicht mit -->
    <svg class="lumi-shapes__layer" preserveAspectRatio="none">
      <filter id="lumi-shapes-grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="100%"
        height="100%"
        filter="url(#lumi-shapes-grain)"
        opacity="0.06"
        style="mix-blend-mode: multiply"
      />
    </svg>
  </div>
</template>

<script setup>
// Scroll-Effekt: Die Formen verwandeln sich von Sektion zu Sektion.
// Sektionen werden im Markup mit data-lumi="<figur>" markiert:
//   ohne data-lumi-top: Figur ist erreicht, wenn die Sektion mittig im Bild steht
//   data-lumi-top="0.6": Figur ist erreicht, wenn die Oberkante der Sektion bei 60 % der Bildhöhe steht
// Der Seitenanfang zeigt immer die Figur "hero" (verdeckt vom echten Header, der beim Scrollen ausblendet).
import { ref, onMounted, onBeforeUnmount } from "vue";
import { formations, COUNT, AURA_COUNT, BACKGROUND } from "~/lib/lumiFormations.js";

const props = defineProps({
  // Tempo der Schwebe-Bewegung (1 = normal)
  speed: { type: Number, default: 0.3 },
  // Wie stark die Formen wie im Wasser wabern (in Rastereinheiten)
  wobble: { type: Number, default: 10 },
  // Wie weit die Formen der Maus ausweichen (in Rastereinheiten, 0 = aus)
  repel: { type: Number, default: 28 },
  // Wie schnell die Formen dem Scrollen folgen: Anteil des Abstands, der pro Bild aufgeholt wird.
  // Kleiner = träger und sanfter (0.03 ≈ eine halbe Sekunde Nachlauf), größer = direkter.
  scrollEase: { type: Number, default: 0.009 },
});

const VIEW_W = 1500;
const VIEW_H = 1000;
const ELEMENT_SIZE = 18; // Werte pro Element in den flachen Arrays
const AURA_SIZE = 7; // Werte pro Farbwolke

// ===== WebGL-Shader =====

const VERTEX_SHADER = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
#define N ${COUNT}
#define M ${AURA_COUNT}
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uPx;
uniform float uUnit;
uniform vec4 uA[N];     // x, y, halbe Breite, halbe Höhe (CSS-Pixel)
uniform vec4 uB[N];     // Drehung, Rechteck-Anteil, Lichtpunkt x, y
uniform vec4 uC[N];     // Lichtfarbe, Eckenrundung
uniform vec3 uD[N];     // Grundfarbe
uniform vec3 uE[N];     // Randfarbe
uniform vec4 uAura[M];  // x, y, Radius, Stärke
uniform vec3 uAuraCol[M];
uniform vec3 uBg;
uniform float uMerge;
uniform float uSoft;
uniform float uOpacity;
uniform float uTime;
uniform float uWobble;
uniform float uHeroCover; // Deckkraft des Headers (0 = ausgeblendet oder nicht vorhanden)
uniform vec2 uMouse;
uniform float uPush;
uniform float uPushRadius;

float sdEllipse(vec2 p, vec2 ab) {
  p = abs(p) + 1e-4;
  float k0 = length(p / ab);
  float k1 = length(p / (ab * ab));
  return k0 * (k0 - 1.0) / k1;
}

float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

// Weiche Vereinigung: nahe Formen fließen ineinander
float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

void main() {
  vec2 p = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uPx;

  // Maus: Farbe rund um den Zeiger wird weich nach außen verdrängt
  vec2 dm = p - uMouse;
  p -= dm / uPushRadius * uPush * exp(-dot(dm, dm) / (uPushRadius * uPushRadius));

  // Wasser: langsame, sich überlagernde Wellen
  vec2 w = p / uUnit;
  p += uWobble * vec2(
    sin(w.y * 0.0072 + uTime * 0.55) + 0.5 * sin(w.y * 0.013 - uTime * 0.37 + 2.1),
    cos(w.x * 0.0064 + uTime * 0.5 + 1.3) + 0.5 * cos(w.x * 0.011 + uTime * 0.3 + 0.7)
  );

  // Hintergrund mit Farbwolken
  vec3 bg = uBg;
  for (int j = 0; j < M; j++) {
    vec2 d = p - uAura[j].xy;
    bg = mix(bg, uAuraCol[j], uAura[j].w * exp(-dot(d, d) / (uAura[j].z * uAura[j].z)));
  }

  // Formen
  float field = 1e5;
  vec3 col = vec3(0.0);
  float wsum = 0.0;
  for (int i = 0; i < N; i++) {
    vec4 a = uA[i];
    if (a.z < 0.5 || a.w < 0.5) continue;
    vec4 b = uB[i];
    float c = cos(b.x);
    float s = sin(b.x);
    vec2 q = p - a.xy;
    q = vec2(c * q.x + s * q.y, -s * q.x + c * q.y);

    float d = mix(sdEllipse(q, a.zw), sdRoundBox(q, a.zw, uC[i].w * min(a.z, a.w)), b.y);
    field = smin(field, d, uMerge);

    // Verlauf: Lichtpunkt -> Grundfarbe -> Rand
    float t = clamp(length(q / a.zw - b.zw) / 1.7, 0.0, 1.0);
    vec3 cc = t < 0.5 ? mix(uC[i].rgb, uD[i], t * 2.0) : mix(uD[i], uE[i], t * 2.0 - 1.0);
    float wgt = exp(-max(d, 0.0) / (uMerge * 0.5 + 1.0));
    col += cc * wgt;
    wsum += wgt;
  }

  vec3 shape = wsum > 0.0 ? col / wsum : bg;
  float alpha = 1.0 - smoothstep(-uSoft, uSoft, field);
  // Solange der Header (HeroBlobs) zu sehen ist, zeigt das Canvas keine Formen: Der Header malt dieselben
  // Kreise in anderem Maßstab, sonst erscheinen sie doppelt. Erst wenn der Header fast ausgeblendet ist,
  // blenden die Formen hier ein, so überlappen sich beide nie.
  alpha *= 1.0 - smoothstep(0.0, 0.35, uHeroCover);

  gl_FragColor = vec4(mix(bg, shape, alpha * uOpacity), 1.0);

}`;

// ===== Figuren vorbereiten =====

function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

// Figur -> flaches Zahlen-Array, damit zwei Figuren einfach überblendet werden können
function flatten(formation) {
  const out = [];
  for (const e of formation.elements) {
    out.push(
      e.x, e.y, e.a, e.b, (e.rot * Math.PI) / 180, e.box, e.corner,
      ...hexToRgb(e.light), ...hexToRgb(e.base), ...hexToRgb(e.rim),
      e.hl[0], e.hl[1],
    );
  }
  out.push(formation.merge, formation.soft, formation.opacity, formation.drift ?? 1);
  for (const c of formation.aura) out.push(c.x, c.y, c.r, c.alpha, ...hexToRgb(c.color));
  return out;
}

const flatFormations = Object.fromEntries(
  Object.entries(formations).map(([name, f]) => [name, flatten(f)]),
);
const bgColor = hexToRgb(BACKGROUND);

// ===== Logik =====

const canvasEl = ref(null);

let gl = null;
let u = {};
let rafId = null;
let lastNow = 0;
let time = 0;
let reducedMotion = false;
let heroOpacity = -1;

let anchors = []; // [{ scroll, flat }]
let progress = 0;
let anchorTimer = null;
let bodyObserver = null;

let width = 0;
let height = 0;
let renderScale = 1;

const mouse = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, target: 0 };
const push = Array.from({ length: COUNT }, () => ({ x: 0, y: 0 }));
const current = new Float32Array(flatFormations.hero.length);

// Puffer für die Uniforms
const bufA = new Float32Array(COUNT * 4);
const bufB = new Float32Array(COUNT * 4);
const bufC = new Float32Array(COUNT * 4);
const bufD = new Float32Array(COUNT * 3);
const bufE = new Float32Array(COUNT * 3);
const bufAura = new Float32Array(AURA_COUNT * 4);
const bufAuraCol = new Float32Array(AURA_COUNT * 3);

onMounted(() => {
  reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!init()) return;
  // Erst jetzt den beigen Body-Hintergrund ausblenden: ohne WebGL bleibt die Seite wie gehabt.
  // Das Canvas ist bereits gezeichnet.
  document.body.classList.add("lumi-shapes-active");
});

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId);
  clearTimeout(anchorTimer);
  bodyObserver?.disconnect();
  window.removeEventListener("resize", onResize);
  window.removeEventListener("scroll", requestFrame);
  window.removeEventListener("pointermove", onPointerMove);
  document.documentElement.removeEventListener("pointerleave", onPointerLeave);
  document.body.classList.remove("lumi-shapes-active");
  setHeroOpacity(1);
  gl?.getExtension("WEBGL_lose_context")?.loseContext();
  gl = null;
});

function init() {
  gl = canvasEl.value.getContext("webgl", { alpha: false, antialias: false });
  if (!gl) return false;

  const program = gl.createProgram();
  gl.attachShader(program, compileShader(gl.VERTEX_SHADER, VERTEX_SHADER));
  gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false;
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  for (const name of [
    "Res", "Px", "Unit", "A", "B", "C", "D", "E", "Aura", "AuraCol", "Bg",
    "Merge", "Soft", "Opacity", "Time", "Wobble", "Mouse", "Push", "PushRadius",
    "HeroCover",
  ]) {
    u[name] = gl.getUniformLocation(program, `u${name}`);
  }
  gl.uniform3fv(u.Bg, bgColor);

  resize();
  computeAnchors();
  progress = targetProgress();

  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", requestFrame, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onPointerLeave);

  // Sektionshöhen ändern sich z. B. wenn Bilder nachladen
  bodyObserver = new ResizeObserver(() => {
    clearTimeout(anchorTimer);
    anchorTimer = setTimeout(() => {
      computeAnchors();
      requestFrame();
    }, 150);
  });
  // Nicht body beobachten: der ist per CSS 100 % hoch und wächst nicht mit dem Inhalt
  bodyObserver.observe(document.getElementById("__nuxt") ?? document.documentElement);
  document.querySelectorAll("[data-lumi]").forEach((el) => bodyObserver.observe(el));

  // Erstes Bild sofort zeichnen, damit nie ein leeres Canvas durchscheint.
  // updateHero vorher, damit die Header-Deckkraft schon stimmt und keine Formen doppelt aufblitzen.
  blend();
  updateHero();
  draw(0);

  lastNow = performance.now();
  rafId = requestAnimationFrame(frame);
  return true;
}

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  // Die Formen sind weich: volle Retina-Auflösung bringt nichts, kostet aber Leistung
  renderScale = Math.min(window.devicePixelRatio || 1, 1);
  if (width * height > 2_500_000) renderScale *= 0.75;
  const canvas = canvasEl.value;
  canvas.width = Math.round(width * renderScale);
  canvas.height = Math.round(height * renderScale);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform2f(u.Res, canvas.width, canvas.height);
  gl.uniform1f(u.Px, renderScale);
}

function onResize() {
  resize();
  computeAnchors();
  requestFrame();
}

// Scroll-Positionen, an denen jede Figur vollständig erreicht ist
function computeAnchors() {
  const scrollY = window.scrollY;
  const list = [{ scroll: 0, flat: flatFormations.hero }];
  document.querySelectorAll("[data-lumi]").forEach((el) => {
    const flat = flatFormations[el.dataset.lumi];
    if (!flat) return;
    const rect = el.getBoundingClientRect();
    const top = rect.top + scrollY;
    const at = el.dataset.lumiTop;
    const scroll = at !== undefined ? top - height * Number(at) : top + rect.height / 2 - height / 2;
    // Anker müssen aufsteigend sein
    list.push({ scroll: Math.max(scroll, list[list.length - 1].scroll + 1), flat });
  });
  anchors = list;
}

function targetProgress() {
  const y = window.scrollY;
  for (let i = 0; i < anchors.length - 1; i++) {
    const a = anchors[i].scroll;
    const b = anchors[i + 1].scroll;
    if (y < b) return i + Math.max(0, (y - a) / (b - a));
  }
  return anchors.length - 1;
}

// Zwischen zwei Ankern: an den Enden kurz ruhen, dazwischen über fast die ganze Strecke weich überblenden.
// Je kleiner HOLD, desto länger und sanfter der Übergang.
const HOLD = 0.02;
function ease(t) {
  const x = Math.min(Math.max((t - HOLD) / (1 - 2 * HOLD), 0), 1);
  // Quintische Kurve: beginnt und endet noch weicher als smoothstep
  return x * x * x * (x * (x * 6 - 15) + 10);
}

function blend() {
  const i = Math.min(Math.floor(progress), anchors.length - 1);
  const from = anchors[i].flat;
  const to = anchors[Math.min(i + 1, anchors.length - 1)].flat;
  const t = ease(progress - i);
  for (let k = 0; k < current.length; k++) current[k] = from[k] + (to[k] - from[k]) * t;
}

// Trägheit unabhängig von der Bildrate (ease = Anteil pro Frame bei 60 Hz)
function follow(value, target, ease, dt) {
  return value + (target - value) * (1 - Math.pow(1 - ease, dt * 60));
}

function frame(now) {
  const dt = Math.min(Math.max(now - lastNow, 0) / 1000, 0.1);
  lastNow = now;

  const target = targetProgress();
  if (reducedMotion) {
    // Ohne Animation: pro Sektion die passende Figur, ohne Übergang
    progress = Math.round(target);
  } else {
    time += dt * props.speed;
    progress = follow(progress, target, props.scrollEase, dt);
  }

  blend();
  updateHero();
  updateMouse(dt);
  draw(dt);

  // Solange der Header voll deckend sichtbar ist, verdeckt er die Animation: Schleife anhalten.
  // Beim Scrollen oder Ändern der Fenstergröße wird wieder gezeichnet (requestFrame).
  const settled = Math.abs(target - progress) < 0.001;
  rafId = heroCovers() && settled ? null : requestAnimationFrame(frame);
}

function requestFrame() {
  if (rafId !== null || !gl) return;
  lastNow = performance.now();
  rafId = requestAnimationFrame(frame);
}

// Header (HeroBlobs) vorhanden, voll deckend und im Bild?
function heroCovers() {
  const hero = document.querySelector(".hero-blobs");
  return !!hero && heroOpacity === 1 && hero.getBoundingClientRect().bottom > 0;
}

// Der echte Header (HeroBlobs) bleibt unverändert sichtbar und blendet erst beim
// Losscrollen aus – dahinter fließen die Lumi-Formen weiter zur nächsten Figur.
function updateHero() {
  const t = Math.min(Math.max((progress - 0.05) / 0.7, 0), 1);
  setHeroOpacity(1 - t * t * (3 - 2 * t));
}

function setHeroOpacity(value) {
  const rounded = Math.round(value * 1000) / 1000;
  if (rounded === heroOpacity) return;
  heroOpacity = rounded;
  const hero = document.querySelector(".hero-blobs");
  if (!hero) return;
  hero.style.opacity = rounded === 1 ? "" : String(rounded);
  hero.style.visibility = rounded === 0 ? "hidden" : "";
}

// Rasterkoordinaten -> Bildschirm. Auf schmalen Bildschirmen rücken die Formen zusammen,
// damit sie sichtbar bleiben, und werden etwas kleiner.
function viewport() {
  const s = Math.max(width / VIEW_W, height / VIEW_H);
  const kx = Math.min(1, width / s / VIEW_W);
  const ky = Math.min(1, height / s / VIEW_H);
  const ks = Math.max(0.55, Math.min(kx, ky));
  return { s, kx, ky, ks };
}

function updateMouse(dt) {
  mouse.x = follow(mouse.x, mouse.tx, 0.025, dt);
  mouse.y = follow(mouse.y, mouse.ty, 0.025, dt);
  mouse.strength = follow(mouse.strength, mouse.target, 0.012, dt);
}

function onPointerMove(e) {
  if (e.pointerType !== "mouse") return;
  if (mouse.strength < 0.01) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }
  mouse.tx = e.clientX;
  mouse.ty = e.clientY;
  mouse.target = 1;
}

function onPointerLeave() {
  mouse.target = 0;
}

function draw(dt) {
  const { s, kx, ky, ks } = viewport();
  const cx = width / 2;
  const cy = height / 2;
  const g = COUNT * ELEMENT_SIZE;
  const [merge, soft, opacity, drift] = [current[g], current[g + 1], current[g + 2], current[g + 3]];

  // Maus in Rasterkoordinaten (für das Ausweichen ganzer Formen)
  const mx = VIEW_W / 2 + (mouse.tx - cx) / (kx * s);
  const my = VIEW_H / 2 + (mouse.ty - cy) / (ky * s);

  for (let i = 0; i < COUNT; i++) {
    const o = i * ELEMENT_SIZE;
    let x = current[o];
    let y = current[o + 1];
    const a = current[o + 2];
    const b = current[o + 3];

    // Schweben: jede Form mit eigenem Tempo und eigener Richtung
    const w = (2 * Math.PI) / (16 + i * 1.3);
    const dirX = i % 2 ? -1 : 1;
    const dirY = i % 3 ? 1 : -1;
    x += 22 * drift * dirX * (0.7 * Math.sin(w * time) + 0.3 * Math.sin(1.9 * w * time));
    y += 16 * drift * dirY * (0.7 * Math.sin(0.83 * w * time) + 0.3 * Math.sin(2.4 * w * time));
    const rot = current[o + 4] + ((2.5 * Math.PI) / 180) * drift * dirX * Math.sin(0.61 * w * time);
    const breathe = 1 + 0.025 * drift * Math.sin(0.71 * w * time);

    // Der Maus ausweichen
    let px = 0;
    let py = 0;
    if (mouse.target > 0 && props.repel > 0) {
      const dx = x - mx;
      const dy = y - my;
      const dist = Math.hypot(dx, dy) || 1;
      const reach = Math.max(a, b) * 1.1 + 100;
      const amount = props.repel * Math.exp(-(dist * dist) / (reach * reach));
      px = (dx / dist) * amount;
      py = (dy / dist) * amount;
    }
    push[i].x = follow(push[i].x, px, 0.007, dt);
    push[i].y = follow(push[i].y, py, 0.007, dt);
    x += push[i].x;
    y += push[i].y;

    bufA.set([cx + (x - VIEW_W / 2) * kx * s, cy + (y - VIEW_H / 2) * ky * s, a * s * ks * breathe, b * s * ks * breathe], i * 4);
    bufB.set([rot, current[o + 5], current[o + 16], current[o + 17]], i * 4);
    bufC.set([current[o + 7], current[o + 8], current[o + 9], current[o + 6]], i * 4);
    bufD.set([current[o + 10], current[o + 11], current[o + 12]], i * 3);
    bufE.set([current[o + 13], current[o + 14], current[o + 15]], i * 3);
  }

  for (let j = 0; j < AURA_COUNT; j++) {
    const o = g + 4 + j * AURA_SIZE;
    bufAura.set([cx + (current[o] - VIEW_W / 2) * kx * s, cy + (current[o + 1] - VIEW_H / 2) * ky * s, current[o + 2] * s, current[o + 3]], j * 4);
    bufAuraCol.set([current[o + 4], current[o + 5], current[o + 6]], j * 3);
  }

  gl.uniform4fv(u.A, bufA);
  gl.uniform4fv(u.B, bufB);
  gl.uniform4fv(u.C, bufC);
  gl.uniform3fv(u.D, bufD);
  gl.uniform3fv(u.E, bufE);
  gl.uniform4fv(u.Aura, bufAura);
  gl.uniform3fv(u.AuraCol, bufAuraCol);
  gl.uniform1f(u.Merge, merge * s * ks);
  gl.uniform1f(u.Soft, soft * s);
  gl.uniform1f(u.Opacity, opacity);
  gl.uniform1f(u.Unit, s);
  gl.uniform1f(u.Time, time);
  // Wabern sanft einblenden
  const ramp = Math.min(time / 10, 1);
  gl.uniform1f(u.Wobble, reducedMotion ? 0 : props.wobble * drift * s * ramp * ramp * (3 - 2 * ramp));
  gl.uniform2f(u.Mouse, mouse.x, mouse.y);
  gl.uniform1f(u.Push, props.repel * 2.56 * s * mouse.strength);
  gl.uniform1f(u.PushRadius, 260 * s);

  const hero = document.querySelector(".hero-blobs");
  gl.uniform1f(u.HeroCover, hero ? Math.max(heroOpacity, 0) : 0);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
</script>

<style>
/* Hinter allem Inhalt; Sektionen ohne eigenen Hintergrund lassen die Formen durchscheinen */
.lumi-shapes {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

.lumi-shapes__layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

body {
  transition: background-color 0.5s ease;
}

body.lumi-shapes-active {
  background-color: transparent;
}

/* Header läuft unten weich ins Beige aus (das Canvas zeigt dort keine Formen) */
body.lumi-shapes-active .hero-blobs {
  -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 140px), transparent);
  mask-image: linear-gradient(to bottom, #000 calc(100% - 140px), transparent);
}
</style>
