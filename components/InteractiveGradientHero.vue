<template>
  <section
    ref="sectionEl"
    class="relative overflow-hidden bg-cover bg-center"
    :style="{ backgroundImage: `url('${image}')` }"
    @pointermove="onPointerMove"
    @pointerleave="onPointerLeave"
  >
    <!-- WebGL-Ebene: zeigt dasselbe Bild und verformt es. Bis sie bereit ist, sieht man das Hintergrundbild. -->
    <canvas
      ref="canvasEl"
      class="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500"
      :class="ready ? 'opacity-100' : 'opacity-0'"
      aria-hidden="true"
    ></canvas>

    <!-- Inhalt -->
    <div class="relative z-10 w-full">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  image: { type: String, default: "/orange-abstract-new.jpg" },
});

// ===== Einstellungen =====

// Die Formen im Bild.
// x / y:     Mittelpunkt der Form im Bild (0 = links/oben, 1 = rechts/unten)
// radius:    wie groß der Bereich ist, der sich mitbewegt (in Bildhöhen)
// strength:  wie weit sich die Form bewegt (negativ = Gegenrichtung zur Maus)
// ease:      Trägheit (0.02 = sehr träge, 0.15 = folgt schnell)
const blobs = [
  { x: 0.175, y: 0.35, radius: 0.22, strength: 0.035, ease: 0.05 }, // links oben
  { x: 0.235, y: 0.64, radius: 0.22, strength: -0.03, ease: 0.04 }, // links unten
  { x: 0.46, y: 0.37, radius: 0.17, strength: 0.045, ease: 0.06 }, // Mitte oben
  { x: 0.45, y: 0.76, radius: 0.12, strength: -0.04, ease: 0.07 }, // Mitte unten, klein
  { x: 0.62, y: 0.59, radius: 0.16, strength: 0.05, ease: 0.055 }, // Mitte rechts
  { x: 0.81, y: 0.38, radius: 0.24, strength: -0.035, ease: 0.035 }, // rechts oben
  { x: 0.82, y: 0.75, radius: 0.14, strength: 0.04, ease: 0.065 }, // rechts unten
];

// ===== WebGL-Shader =====

const VERTEX_SHADER = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT_SHADER = `
#define COUNT ${blobs.length}
precision mediump float;
uniform sampler2D uImage;
uniform vec2 uCanvasSize;
uniform vec2 uImageSize;
uniform vec2 uCenter[COUNT];
uniform float uRadius[COUNT];
uniform vec2 uOffset[COUNT];
varying vec2 vUv;

void main() {
  // Bild wie "background-size: cover" einpassen
  float canvasRatio = uCanvasSize.x / uCanvasSize.y;
  float imageRatio = uImageSize.x / uImageSize.y;
  vec2 scale = canvasRatio > imageRatio
    ? vec2(1.0, imageRatio / canvasRatio)
    : vec2(canvasRatio / imageRatio, 1.0);
  vec2 uv = (vUv - 0.5) * scale + 0.5;

  // Jede Form verschiebt den Bereich um sich herum, nach außen weich auslaufend
  vec2 displacement = vec2(0.0);
  for (int i = 0; i < COUNT; i++) {
    vec2 d = (uv - uCenter[i]) * vec2(imageRatio, 1.0);
    float weight = exp(-dot(d, d) / (uRadius[i] * uRadius[i]));
    displacement += uOffset[i] * weight;
  }

  gl_FragColor = texture2D(uImage, clamp(uv - displacement, 0.0, 1.0));
}`;

// ===== Logik =====

const sectionEl = ref(null);
const canvasEl = ref(null);
const ready = ref(false);

// Aktueller Versatz (x, y) und Zielversatz (tx, ty) jeder Form, in Bild-Einheiten
const state = blobs.map(() => ({ x: 0, y: 0, tx: 0, ty: 0 }));

let enabled = false;
let gl = null;
let uniforms = {};
let imageSize = [1, 1];
let resizeObserver = null;
let rafId = null;
let lastTime = 0;

onMounted(() => {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Auf Touch-Geräten und bei reduced motion bleibt es beim normalen Hintergrundbild
  if (!finePointer || reducedMotion) return;

  initWebGL();
});

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId);
  resizeObserver?.disconnect();
  gl?.getExtension("WEBGL_lose_context")?.loseContext();
});

function initWebGL() {
  gl = canvasEl.value.getContext("webgl", { antialias: false });
  if (!gl) return; // Kein WebGL: Hintergrundbild bleibt sichtbar

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

  uniforms = {
    canvasSize: gl.getUniformLocation(program, "uCanvasSize"),
    imageSize: gl.getUniformLocation(program, "uImageSize"),
    center: gl.getUniformLocation(program, "uCenter"),
    radius: gl.getUniformLocation(program, "uRadius"),
    offset: gl.getUniformLocation(program, "uOffset"),
  };

  gl.uniform2fv(uniforms.center, blobs.flatMap((b) => [b.x, b.y]));
  gl.uniform1fv(uniforms.radius, blobs.map((b) => b.radius));

  const img = new Image();
  img.onload = () => {
    if (!gl) return;
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);

    imageSize = [img.naturalWidth, img.naturalHeight];
    gl.uniform2fv(uniforms.imageSize, imageSize);

    resize();
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(sectionEl.value);

    enabled = true;
    ready.value = true;
  };
  img.src = props.image;
}

function compileShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function resize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  const canvas = canvasEl.value;
  canvas.width = Math.round(canvas.clientWidth * dpr);
  canvas.height = Math.round(canvas.clientHeight * dpr);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.uniform2f(uniforms.canvasSize, canvas.width, canvas.height);
  draw();
}

function draw() {
  gl.uniform2fv(uniforms.offset, state.flatMap((s) => [s.x, s.y]));
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

function onPointerMove(e) {
  if (!enabled || e.pointerType !== "mouse") return;

  const rect = sectionEl.value.getBoundingClientRect();
  // Maus-Position relativ zur Mitte: -1 (links/oben) bis 1 (rechts/unten)
  const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

  blobs.forEach((blob, i) => {
    state[i].tx = nx * blob.strength;
    state[i].ty = ny * blob.strength;
  });

  startLoop();
}

function onPointerLeave(e) {
  if (!enabled || e.pointerType !== "mouse") return;

  // Zurück in die Ausgangsposition
  state.forEach((s) => {
    s.tx = 0;
    s.ty = 0;
  });

  startLoop();
}

function startLoop() {
  if (rafId !== null) return;
  lastTime = performance.now();
  rafId = requestAnimationFrame(tick);
}

function tick(now) {
  // Zeit seit dem letzten Frame, damit die Bewegung auf 60 Hz und 120 Hz gleich schnell ist
  const frames = Math.min(Math.max(now - lastTime, 0) / 16.67, 4);
  lastTime = now;

  let moving = false;

  blobs.forEach((blob, i) => {
    const s = state[i];
    const ease = 1 - Math.pow(1 - blob.ease, frames);

    s.x += (s.tx - s.x) * ease;
    s.y += (s.ty - s.y) * ease;

    if (Math.abs(s.tx - s.x) > 0.00005 || Math.abs(s.ty - s.y) > 0.00005) {
      moving = true;
    } else {
      s.x = s.tx;
      s.y = s.ty;
    }
  });

  draw();

  // Schleife stoppt, sobald alle Formen angekommen sind
  rafId = moving ? requestAnimationFrame(tick) : null;
}
</script>
