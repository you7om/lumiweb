<template>
  <div
    ref="rootEl"
    class="hero-blobs absolute inset-0 overflow-hidden pointer-events-none"
    :style="{ background }"
    aria-hidden="true"
  >
    <!-- Vorlage für WebGL und Fallback (ohne WebGL / bei reduced motion bleibt dieses SVG sichtbar).
         viewBox 1500 × 1000, "slice" verhält sich wie background-size: cover -->
    <svg
      ref="artEl"
      class="absolute inset-0 w-full h-full"
      :style="{ opacity: ready ? 0 : 1 }"
      viewBox="0 0 1500 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <template v-for="(blob, i) in blobs" :key="`defs-${i}`">
          <filter
            :id="`${uid}-blur-${i}`"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur :stdDeviation="blob.blur ?? 6" />
          </filter>

          <template v-for="(layer, j) in blob.layers" :key="`grad-${i}-${j}`">
            <radialGradient
              v-if="layer.type === 'radial'"
              :id="`${uid}-grad-${i}-${j}`"
              gradientUnits="userSpaceOnUse"
              :cx="layer.cx"
              :cy="layer.cy"
              :r="layer.r"
            >
              <stop
                v-for="([offset, color, opacity = 1], k) in layer.stops"
                :key="k"
                :offset="offset"
                :stop-color="color"
                :stop-opacity="opacity"
              />
            </radialGradient>
            <linearGradient
              v-else
              :id="`${uid}-grad-${i}-${j}`"
              gradientUnits="userSpaceOnUse"
              :x1="layer.x1"
              :y1="layer.y1"
              :x2="layer.x2"
              :y2="layer.y2"
            >
              <stop
                v-for="([offset, color, opacity = 1], k) in layer.stops"
                :key="k"
                :offset="offset"
                :stop-color="color"
                :stop-opacity="opacity"
              />
            </linearGradient>
          </template>
        </template>

        <radialGradient
          v-for="(cloud, i) in aura"
          :id="`${uid}-aura-${i}`"
          :key="`aura-grad-${i}`"
        >
          <stop offset="0" :stop-color="cloud.color" :stop-opacity="cloud.opacity ?? 0.5" />
          <stop offset="0.5" :stop-color="cloud.color" :stop-opacity="(cloud.opacity ?? 0.5) * 0.6" />
          <stop offset="1" :stop-color="cloud.color" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Gesamtdeckkraft für Schleier und Formen: kleiner = zarter -->
      <g :opacity="intensity" data-intensity>
        <!-- Weicher Farbschleier hinter den Formen -->
        <g class="hero-aura" data-layer="aura">
          <ellipse
            v-for="(cloud, i) in aura"
            :key="`aura-${i}`"
            class="hero-aura__cloud"
            :data-aura="i"
            :cx="cloud.cx"
            :cy="cloud.cy"
            :rx="cloud.rx"
            :ry="cloud.ry"
            :transform="`rotate(${cloud.rotate ?? 0} ${cloud.cx} ${cloud.cy})`"
            :fill="`url(#${uid}-aura-${i})`"
          />
        </g>

        <!-- Jede Form ist eine eigene Ebene, die WebGL einzeln bewegt -->
        <g
          v-for="(blob, i) in blobs"
          :key="`blob-${i}`"
          class="hero-blob"
          :data-blob="i"
          :data-layer="`blob-${i}`"
          :filter="`url(#${uid}-blur-${i})`"
          :opacity="blob.opacity ?? blobOpacity"
        >
          <path
            v-for="(layer, j) in blob.layers"
            :key="j"
            :d="blob.path"
            :fill="`url(#${uid}-grad-${i}-${j})`"
          />
        </g>
      </g>
    </svg>

    <!-- WebGL-Ebene: zeigt dieselben Formen, schwebend animiert -->
    <canvas
      ref="canvasEl"
      class="absolute inset-0 w-full h-full"
      :style="{ opacity: ready ? intensity : 0 }"
    ></canvas>

    <!-- Feine Körnung wie im Originalbild, bewegt sich nicht mit -->
    <svg
      v-if="grain"
      class="absolute inset-0 w-full h-full"
      viewBox="0 0 1500 1000"
      preserveAspectRatio="xMidYMid slice"
    >
      <filter :id="`${uid}-grain`">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect
        width="1500"
        height="1000"
        :filter="`url(#${uid}-grain)`"
        opacity="0.12"
        style="mix-blend-mode: multiply"
      />
    </svg>
  </div>
</template>

<script>
// Eigener Block, weil defineProps() keine Variablen aus <script setup> verwenden darf.

// ===== Farben =====
// Eine gemeinsame Palette für Formen und Farbschleier, abgestimmt auf --primary-orange.
const CREAM = "#fbefe4";
const PEACH = "#f9cdaa";
const HONEY = "#f5b867";
const APRICOT = "#f29b6b";
const CORAL = "#ec7d6a";
const ROSE = "#ec8b9c";
const LILAC = "#efc6d3";

// ===== Farbschleier =====
// Weiche Farbwolken hinter den Formen (Verlauf-Vorlage, um 90° gedreht).
// cx / cy: Mittelpunkt · rx / ry: Radien · rotate: Drehung in Grad · opacity: Stärke in der Mitte
const defaultAura = [
  { cx: 1350, cy: 120, rx: 420, ry: 260, color: CREAM, opacity: 0.8 }, // Creme oben rechts
  { cx: 680, cy: 260, rx: 440, ry: 240, rotate: 10, color: HONEY, opacity: 0.4 }, // Honig oben Mitte
  { cx: 300, cy: 830, rx: 420, ry: 250, color: APRICOT, opacity: 0.45 }, // Apricot unten links
  { cx: 560, cy: 670, rx: 380, ry: 95, rotate: 56, color: LILAC, opacity: 0.6 }, // Flieder-Band
  { cx: 1150, cy: 790, rx: 420, ry: 210, rotate: -35, color: ROSE, opacity: 0.45 }, // Rosé-Bogen unten
  { cx: 1330, cy: 580, rx: 170, ry: 330, rotate: 10, color: ROSE, opacity: 0.35 }, // Rosé-Bogen rechts
];

// ===== Schweben =====
// x / y:     wie weit die Ebene treibt (in Rastereinheiten, 1500 = volle Breite)
// duration:  Sekunden für einen Schwebe-Zyklus (größer = langsamer)
// rotate:    maximale Drehung in Grad
// scale:     wie stark die Ebene "atmet" (0.02 = ±2 %)
const defaultAuraFloat = { x: 26, y: 18, duration: 24, rotate: 1.5, scale: 0.025 };

// ===== Formen =====
// Koordinaten im Raster 1500 × 1000 (Werte außerhalb ragen über den Rand).
// path:    Umriss der Form (SVG-Pfad)
// blur:    Weichzeichnung der Kante
// layers:  Verläufe, die übereinander gemalt werden (unterste zuerst).
//          radial: cx, cy, r  ·  linear: x1, y1, x2, y2  ·  stops: [Position, Farbe, Deckkraft (optional)]
// float:   Schwebe-Bewegung (siehe oben)
const defaultBlobs = [
  // Oben links: große Bohne, oben Koralle, rechts Honig, unten links hell
  {
    path: "M -60 -60 L 800 -60 C 812 40, 765 132, 670 156 C 578 178, 518 205, 468 282 C 398 398, 296 500, 122 530 C 40 543, -20 540, -60 536 Z",
    blur: 5,
    float: { x: 38, y: 26, duration: 18, rotate: 2.5, scale: 0.025 },
    layers: [
      {
        type: "linear",
        x1: 300, y1: -20, x2: 260, y2: 520,
        stops: [[0, CORAL], [0.45, APRICOT], [1, APRICOT]],
      },
      {
        type: "radial",
        cx: 640, cy: 150, r: 260,
        stops: [[0, HONEY, 0.55], [1, HONEY, 0]],
      },
      {
        type: "radial",
        cx: 270, cy: 440, r: 330,
        stops: [[0, PEACH], [0.45, PEACH], [1, PEACH, 0]],
      },
    ],
  },
  // Oben rechts: Kugel, oben links hell, unten rechts dunkel
  {
    path: "M 1300 -150 C 1490 -150, 1640 0, 1640 190 C 1640 390, 1480 535, 1300 532 C 1110 528, 982 380, 982 200 C 982 10, 1110 -150, 1300 -150 Z",
    blur: 5,
    float: { x: 32, y: 38, duration: 16, rotate: 3, scale: 0.03 },
    layers: [
      {
        type: "radial",
        cx: 1170, cy: 70, r: 520,
        stops: [[0, CREAM], [0.3, PEACH], [0.7, APRICOT], [1, CORAL]],
      },
      {
        type: "radial",
        cx: 1500, cy: 510, r: 200,
        stops: [[0, ROSE], [1, ROSE, 0]],
      },
    ],
  },
  // Unten Mitte: Bohne, oben hell, unten links Koralle mit Rosé
  {
    path: "M 250 1080 C 244 950, 275 845, 342 792 C 402 745, 444 700, 502 622 C 562 560, 642 545, 722 556 C 832 572, 922 642, 936 762 C 946 862, 940 970, 924 1080 Z",
    blur: 12,
    float: { x: 42, y: 28, duration: 17, rotate: 3.5, scale: 0.03 },
    layers: [
      {
        type: "linear",
        x1: 800, y1: 560, x2: 300, y2: 1050,
        stops: [[0, APRICOT], [0.55, APRICOT], [0.85, CORAL], [1, ROSE]],
      },
      {
        type: "radial",
        cx: 720, cy: 640, r: 300,
        stops: [[0, PEACH], [0.4, PEACH], [1, PEACH, 0]],
      },
    ],
  },
];
</script>

<script setup>
import { ref, onMounted, onBeforeUnmount, useId } from "vue";

const props = defineProps({
  blobs: { type: Array, default: () => defaultBlobs },
  aura: { type: Array, default: () => defaultAura },
  auraFloat: { type: Object, default: () => defaultAuraFloat },
  background: { type: String, default: "#f4e8db" },
  grain: { type: Boolean, default: true },
  // Deckkraft von Schleier und Formen (0 – 1)
  intensity: { type: Number, default: 0.8 },
  // Deckkraft nur der Kreise (0 – 1), einzelne Kreise können eigene "opacity" haben
  blobOpacity: { type: Number, default: 0.7 },
  // Tempo der Animation (1 = normal, 0.5 = halb so schnell)
  speed: { type: Number, default: 0.75 },
  // Wie stark die Formen wie im Wasser wabern (in Rastereinheiten)
  wobble: { type: Number, default: 12 },
  // Wie weit die Formen der Maus ausweichen (in Rastereinheiten, 0 = aus)
  repel: { type: Number, default: 50 },
  // Wie schnell die Formen auf die Maus reagieren (1 = normal, kleiner = träger und sanfter)
  mouseEase: { type: Number, default: 1 },
});

// Eindeutige IDs, falls die Komponente mehrfach auf einer Seite steht
const uid = `hb${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

// ===== WebGL-Shader =====

const VIEW_W = 1500;
const VIEW_H = 1000;
// Rand um den sichtbaren Bereich (in Rastereinheiten), damit beim Treiben keine abgeschnittenen Kanten auftauchen
const MARGIN = 200;

const VERTEX_SHADER = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform sampler2D uTex;
uniform vec2 uViewOrigin;
uniform vec2 uViewSize;
uniform vec2 uTexOrigin;
uniform vec2 uTexSize;
uniform vec2 uOffset;
uniform vec2 uCenter;
uniform float uScale;
uniform float uAngle;
uniform float uTime;
uniform float uWobble;
uniform float uSeed;
uniform vec2 uMouse;
uniform float uPush;
uniform float uPushRadius;
varying vec2 vUv;

void main() {
  // Pixel -> Rasterkoordinate (1500 × 1000)
  vec2 p = uViewOrigin + vUv * uViewSize;

  // Maus: Farbe rund um den Zeiger wird weich nach außen verdrängt (wie eine Hand im Wasser)
  vec2 dm = p - uMouse;
  p -= dm / uPushRadius * uPush * 1.6 * exp(-dot(dm, dm) / (uPushRadius * uPushRadius));

  // Bewegung rückwärts anwenden: Wo lag dieser Punkt in der unbewegten Form?
  vec2 q = p - uOffset - uCenter;
  float c = cos(uAngle);
  float s = sin(uAngle);
  q = vec2(c * q.x + s * q.y, -s * q.x + c * q.y) / uScale + uCenter;

  // Wasser: langsame, sich überlagernde Wellen verformen die Form sanft
  q += uWobble * vec2(
    sin(q.y * 0.0072 + uTime * 0.55 + uSeed) + 0.5 * sin(q.y * 0.013 - uTime * 0.37 + uSeed * 2.1),
    cos(q.x * 0.0064 + uTime * 0.5 + uSeed * 1.3) + 0.5 * cos(q.x * 0.011 + uTime * 0.3 + uSeed * 0.7)
  );

  vec2 uv = (q - uTexOrigin) / uTexSize;
  if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) {
    gl_FragColor = vec4(0.0);
    return;
  }
  // Texturen kommen mit "geradem" Alpha an; hier einmal mit Alpha multiplizieren, wie es das Überblenden erwartet
  vec4 tex = texture2D(uTex, uv);
  gl_FragColor = vec4(tex.rgb * tex.a, tex.a);
}`;

// ===== Logik =====

const rootEl = ref(null);
const artEl = ref(null);
const canvasEl = ref(null);
const ready = ref(false);

let gl = null;
let uniforms = {};
let layers = [];
let geometry = null;
let loadToken = 0;
let destroyed = false;

let time = 0;
let lastNow = 0;
let rafId = null;
let visible = true;
let resizeObserver = null;
let intersectionObserver = null;
let resizeTimer = null;

// Maus in Rasterkoordinaten: Ziel (tx, ty) und weich nachgezogene Position (x, y).
// strength blendet die Verdrängung beim Betreten/Verlassen sanft ein und aus.
const mouse = { x: 0, y: 0, tx: 0, ty: 0, strength: 0, target: 0 };

onMounted(() => {
  // Bei reduced motion bleibt das statische SVG
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Bei Fehlern bleibt ebenfalls einfach das SVG sichtbar
  init().catch(() => {});
});

onBeforeUnmount(() => {
  destroyed = true;
  stop();
  clearTimeout(resizeTimer);
  window.removeEventListener("pointermove", onPointerMove);
  document.documentElement.removeEventListener("pointerleave", onPointerLeave);
  resizeObserver?.disconnect();
  intersectionObserver?.disconnect();
  gl?.getExtension("WEBGL_lose_context")?.loseContext();
  gl = null;
});

async function init() {
  gl = canvasEl.value.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false });
  if (!gl) return;

  const program = gl.createProgram();
  gl.attachShader(program, compileShader(gl.VERTEX_SHADER, VERTEX_SHADER));
  gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER));
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  // Ein Rechteck über die ganze Fläche
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  for (const name of [
    "ViewOrigin", "ViewSize", "TexOrigin", "TexSize", "Offset",
    "Center", "Scale", "Angle", "Time", "Wobble", "Seed",
    "Mouse", "Push", "PushRadius",
  ]) {
    uniforms[name] = gl.getUniformLocation(program, `u${name}`);
  }

  // Ebenen übereinander zeichnen (der Shader liefert vormultiplierte Farben).
  // Texturen ohne Vormultiplizieren hochladen und das Alpha selbst im Shader einrechnen:
  // Firefox rechnet es bei SVG-Bildern sonst doppelt ein, die weichen Ränder werden dann grau und dunkel.
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);

  layers = buildLayers();
  await loadTextures();
  if (destroyed || !geometry) return;

  draw();
  ready.value = true;
  // Für Seiten, die mit dem Einblenden warten, bis der Header fertig ist (z. B. die Startseite)
  rootEl.value.dataset.ready = "";
  rootEl.value.dispatchEvent(new CustomEvent("hero-blobs-ready", { bubbles: true }));

  resizeObserver = new ResizeObserver(() => {
    const { clientWidth: w, clientHeight: h } = rootEl.value;
    if (geometry && w === geometry.w && h === geometry.h) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(loadTextures, 200);
  });
  resizeObserver.observe(rootEl.value);

  // Nur animieren, solange der Header sichtbar ist
  intersectionObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  });
  intersectionObserver.observe(rootEl.value);

  // Am Fenster lauschen, weil Text und Buttons über dem Hintergrund liegen
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onPointerLeave);

  start();
}

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

// Farbschleier + jede Form als eigene Ebene, mit Mittelpunkt für Drehung/Atmen
function buildLayers() {
  const result = [
    { key: "aura", float: props.auraFloat, center: [VIEW_W / 2, VIEW_H / 2], reach: 700, weight: 0.3 },
  ];
  props.blobs.forEach((blob, i) => {
    const box = artEl.value.querySelector(`[data-layer="blob-${i}"]`).getBBox();
    result.push({
      key: `blob-${i}`,
      float: blob.float ?? { x: 32, y: 24, duration: 18, rotate: 2.5, scale: 0.025 },
      center: [box.x + box.width / 2, box.y + box.height / 2],
      // Ab welcher Entfernung die Form der Maus ausweicht
      reach: Math.max(box.width, box.height) * 0.75,
      weight: 1,
    });
  });
  return result.map((layer, i) => ({
    ...layer,
    seed: i * 1.7 + 0.4,
    dirX: i % 2 ? -1 : 1,
    dirY: i % 3 ? 1 : -1,
    push: { x: 0, y: 0 },
    texture: null,
  }));
}

// Sichtbarer Ausschnitt des 1500 × 1000-Rasters (wie "cover") plus Rand
function computeGeometry() {
  const w = rootEl.value.clientWidth;
  const h = rootEl.value.clientHeight;
  const s = Math.max(w / VIEW_W, h / VIEW_H);
  const vw = w / s;
  const vh = h / s;
  const vx = (VIEW_W - vw) / 2;
  const vy = (VIEW_H - vh) / 2;
  const tw = vw + 2 * MARGIN;
  const th = vh + 2 * MARGIN;
  // Texturen in CSS-Pixel-Auflösung: die Formen sind weich, mehr braucht es nicht
  const maxSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const px = Math.min(s, maxSize / tw, maxSize / th);
  return {
    w, h, vx, vy, vw, vh,
    tx: vx - MARGIN, ty: vy - MARGIN, tw, th,
    pw: Math.round(tw * px), ph: Math.round(th * px),
  };
}

// Eine Ebene des SVGs als Bild rendern. Der Umweg über ein 2D-Canvas sorgt dafür,
// dass alle Browser die Pixel gleich an WebGL übergeben (SVG-Bilder direkt behandelt Firefox anders).
async function rasterize(key, geo) {
  const clone = artEl.value.cloneNode(true);
  clone.querySelectorAll("[data-layer]").forEach((el) => {
    if (el.dataset.layer !== key) el.remove();
  });
  // Deckkraft übernimmt das Canvas als Ganzes, sonst addiert sie sich pro Ebene anders
  clone.querySelector("[data-intensity]")?.setAttribute("opacity", "1");
  clone.removeAttribute("class");
  clone.removeAttribute("style");
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("viewBox", `${geo.tx} ${geo.ty} ${geo.tw} ${geo.th}`);
  clone.setAttribute("preserveAspectRatio", "none");
  clone.setAttribute("width", geo.pw);
  clone.setAttribute("height", geo.ph);

  const svg = new XMLSerializer().serializeToString(clone);
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml" }));
  try {
    const img = new Image(geo.pw, geo.ph);
    img.src = url;
    await img.decode();
    const canvas = document.createElement("canvas");
    canvas.width = geo.pw;
    canvas.height = geo.ph;
    canvas.getContext("2d").drawImage(img, 0, 0, geo.pw, geo.ph);
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function loadTextures() {
  if (!gl) return;
  const token = ++loadToken;
  const geo = computeGeometry();
  if (geo.w === 0 || geo.h === 0) return;

  const images = await Promise.all(layers.map((layer) => rasterize(layer.key, geo)));
  // Inzwischen neu geladen oder abgebaut: Ergebnis verwerfen
  if (!gl || token !== loadToken) return;

  images.forEach((img, i) => {
    const layer = layers[i];
    if (!layer.texture) {
      layer.texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, layer.texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    }
    gl.bindTexture(gl.TEXTURE_2D, layer.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
  });

  geometry = geo;
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const canvas = canvasEl.value;
  canvas.width = Math.round(geo.w * dpr);
  canvas.height = Math.round(geo.h * dpr);
  gl.viewport(0, 0, canvas.width, canvas.height);
  if (rafId === null) draw();
}

// Schwebe-Bewegung einer Ebene zum Zeitpunkt t.
// Alle Werte starten bei 0, damit der Wechsel vom SVG zum Canvas nicht springt.
function motion(layer, t) {
  const f = layer.float;
  const w = (2 * Math.PI) / (f.duration || 30);
  return {
    x: (f.x ?? 0) * layer.dirX * (0.7 * Math.sin(w * t) + 0.3 * Math.sin(1.9 * w * t)),
    y: (f.y ?? 0) * layer.dirY * (0.7 * Math.sin(0.83 * w * t) + 0.3 * Math.sin(2.4 * w * t)),
    angle: (((f.rotate ?? 0) * Math.PI) / 180) * layer.dirX * Math.sin(0.61 * w * t),
    scale: 1 + (f.scale ?? 0) * Math.sin(0.71 * w * t),
  };
}

function draw() {
  const g = geometry;
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.uniform2f(uniforms.ViewOrigin, g.vx, g.vy);
  gl.uniform2f(uniforms.ViewSize, g.vw, g.vh);
  gl.uniform2f(uniforms.TexOrigin, g.tx, g.ty);
  gl.uniform2f(uniforms.TexSize, g.tw, g.th);
  gl.uniform1f(uniforms.Time, time);
  // Wabern sanft einblenden, damit der Start nicht springt
  const ramp = Math.min(time / 6, 1);
  gl.uniform1f(uniforms.Wobble, props.wobble * ramp * ramp * (3 - 2 * ramp));
  gl.uniform2f(uniforms.Mouse, mouse.x, mouse.y);
  gl.uniform1f(uniforms.Push, props.repel * 1.6 * mouse.strength);
  gl.uniform1f(uniforms.PushRadius, 260);

  for (const layer of layers) {
    const m = motion(layer, time);
    gl.uniform2f(uniforms.Offset, m.x + layer.push.x, m.y + layer.push.y);
    gl.uniform2f(uniforms.Center, layer.center[0], layer.center[1]);
    gl.uniform1f(uniforms.Scale, m.scale);
    gl.uniform1f(uniforms.Angle, m.angle);
    gl.uniform1f(uniforms.Seed, layer.seed);
    gl.bindTexture(gl.TEXTURE_2D, layer.texture);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

function start() {
  if (rafId !== null || !visible || !geometry) return;
  lastNow = performance.now();
  rafId = requestAnimationFrame(frame);
}

function stop() {
  if (rafId !== null) cancelAnimationFrame(rafId);
  rafId = null;
}

function frame(now) {
  // Zeit nur weiterzählen, solange animiert wird (max. 0,1 s pro Frame, z. B. nach Tab-Wechsel)
  const dt = Math.min(Math.max(now - lastNow, 0) / 1000, 0.1);
  time += dt * props.speed;
  lastNow = now;
  updatePush(dt);
  draw();
  rafId = requestAnimationFrame(frame);
}

// Trägheit unabhängig von der Bildrate (ease = Anteil pro Frame bei 60 Hz)
function follow(current, target, ease, dt) {
  return current + (target - current) * (1 - Math.pow(1 - ease, dt * 60));
}

// Formen weichen der Maus aus: je näher, desto weiter weg, träge wie im Wasser
function updatePush(dt) {
  const k = props.mouseEase;
  mouse.x = follow(mouse.x, mouse.tx, 0.08 * k, dt);
  mouse.y = follow(mouse.y, mouse.ty, 0.08 * k, dt);
  mouse.strength = follow(mouse.strength, mouse.target, 0.04 * k, dt);

  for (const layer of layers) {
    let tx = 0;
    let ty = 0;
    if (mouse.target > 0) {
      const dx = layer.center[0] - mouse.tx;
      const dy = layer.center[1] - mouse.ty;
      const dist = Math.hypot(dx, dy) || 1;
      const falloff = Math.exp(-(dist * dist) / (layer.reach * layer.reach));
      const amount = props.repel * layer.weight * falloff;
      tx = (dx / dist) * amount;
      ty = (dy / dist) * amount;
    }
    layer.push.x = follow(layer.push.x, tx, 0.025 * k, dt);
    layer.push.y = follow(layer.push.y, ty, 0.025 * k, dt);
  }
}

function onPointerMove(e) {
  if (e.pointerType !== "mouse" || !geometry) return;
  const rect = rootEl.value.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inside) {
    mouse.target = 0;
    return;
  }

  const x = geometry.vx + ((e.clientX - rect.left) / rect.width) * geometry.vw;
  const y = geometry.vy + ((e.clientY - rect.top) / rect.height) * geometry.vh;
  // Beim Hereinkommen direkt an die Maus springen, statt quer durchs Bild zu gleiten
  if (mouse.strength < 0.01) {
    mouse.x = x;
    mouse.y = y;
  }
  mouse.tx = x;
  mouse.ty = y;
  mouse.target = 1;
}

function onPointerLeave() {
  mouse.target = 0;
}
</script>
