<template>
  <div
    class="tattoo-page"
    style="
      font-family: &quot;Arial&quot;, sans-serif;
      color: #111;
      background: #fff;
      overflow-x: hidden;
    "
  >
    <!-- NAV -->
    <nav
      style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 50;
        background: #111;
        padding: 0 2.5rem;
        height: 3.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      "
    >
      <span
        style="
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-size: 1.8rem;
          font-weight: 300;
          color: #fff;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        "
        >TZR's</span
      >
      <div style="display: flex; gap: 2rem; align-items: center">
        <a
          v-for="item in nav"
          :key="item.label"
          :href="item.href"
          :style="item.highlight ? {
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#fff',
            textDecoration: 'none',
            fontWeight: '700',
            background: '#9b4f48',
            padding: '0.5rem 1.25rem',
            transition: 'background 0.2s',
          } : {
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.6)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }"
          @mouseenter="e => { if (item.highlight) e.target.style.background = '#87423c'; else e.target.style.color = '#fff'; }"
          @mouseleave="e => { if (item.highlight) e.target.style.background = '#9b4f48'; else e.target.style.color = 'rgba(255,255,255,0.6)'; }"
        >
          {{ item.label }}
        </a>
      </div>
    </nav>

    <!-- HERO -->
    <section
      style="
        position: relative;
        min-height: 100vh;
        background: #111;
        display: flex;
        align-items: center;
        padding-top: 3.5rem;
        overflow: hidden;
      "
    >
      <img
        src="/examples/tattoo/hanna.jpg"
        alt="TZR's"
        style="
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.75;
          filter: grayscale(15%);
        "
      />
      <div
        style="
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(17, 17, 17, 0.92) 0%,
            rgba(17, 17, 17, 0.75) 45%,
            rgba(17, 17, 17, 0.15) 100%
          );
        "
      ></div>
      <div
        style="
          position: relative;
          z-index: 1;
          padding: 4rem 2.5rem;
          max-width: 900px;
        "
      >
        <h1
          style="margin: 0; display: flex; flex-direction: column; gap: 0.25rem"
        >
          <span
            style="
              font-family: 'Cormorant Garamond', sans-serif;
              font-weight: 200;
              font-size: clamp(3.5rem, 10vw, 8rem);
              line-height: 1;
              color: #9b4f48;
              letter-spacing: 0.15em;
              text-transform: uppercase;
            "
            >TZR's</span
          >
          <span
            style="
              font-family: &quot;Great Vibes&quot;, cursive;
              font-weight: 400;
              font-size: clamp(3rem, 9vw, 7.5rem);
              line-height: 1;
              color: #fff;
              letter-spacing: 0.02em;
              text-transform: none;
            "
            >Tattoostudio</span
          >
        </h1>
        <p
          style="
            color: rgba(255, 255, 255, 0.55);
            font-size: 0.9rem;
            line-height: 1.7;
            max-width: 28rem;
            margin-top: 2rem;
            margin-bottom: 2.5rem;
          "
        >
          Wir schaffen persönliche, zeitlose Tattoos – ausschließlich für
          Frauen. In einem geschlossenen Raum, ohne neugierige Blicke.
        </p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap">
          <a
            href="#galerie"
            style="
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              border: 2px solid #fff;
              color: #fff;
              padding: 0.8rem 2rem;
              text-decoration: none;
              transition: all 0.2s;
            "
            @mouseenter="
              (e) => {
                e.target.style.background = '#fff';
                e.target.style.color = '#111';
              }
            "
            @mouseleave="
              (e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#fff';
              }
            "
          >
            Portfolio ansehen
          </a>
          <a
            href="#termin"
            style="
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              background: #9b4f48;
              color: #fff;
              padding: 0.8rem 2rem;
              text-decoration: none;
              transition: background 0.2s;
            "
            @mouseenter="(e) => (e.target.style.background = '#87423C')"
            @mouseleave="(e) => (e.target.style.background = '#9B4F48')"
          >
            Termin anfragen
          </a>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="ueber-uns" style="background: #fff; padding: 5rem 2.5rem;">
      <div style="max-width: 1100px; margin: 0 auto;">
        <h2 style="font-size: clamp(1.8rem, 4vw, 2.8rem); font-weight: 600; text-transform: uppercase; margin-bottom: 3rem;">
          <span style="color: #9b4f48;">Über TZR'S</span>
        </h2>
        <div class="about-grid">
          <div>
            <p style="font-size: 0.875rem; line-height: 1.9; color: #444;">
              TZR'S ist ein privates Tattoostudio in Dresden – auf der Leipziger Straße 110. Gegründet von Hanna Metzner (20), mit dem Ziel, einen echten Safe Space für Frauen zu schaffen.
            </p>
            <p style="font-size: 0.875rem; line-height: 1.9; color: #444; margin-top: 1rem;">
              Jedes Tattoo ist ein individuelles Unikat. Wir arbeiten eng mit unseren Kundinnen zusammen, um ein Motiv zu entwickeln, das wirklich zu ihr passt.
            </p>
          </div>
          <div style="overflow: hidden; aspect-ratio: 3/4;">
            <img src="/examples/tattoo/hanna-2.webp" alt="Studio"
              style="width: 100%; height: 100%; object-fit: cover; object-position: top;" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div v-for="usp in usps" :key="usp.label" style="border-left: 3px solid #9b4f48; padding-left: 1rem;">
              <p style="font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #9b4f48; margin-bottom: 0.25rem;">{{ usp.label }}</p>
              <p style="font-size: 0.8rem; line-height: 1.6; color: #555;">{{ usp.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO -->
    <section id="galerie" style="background: #f5f5f5; padding: 5rem 2.5rem">
      <div style="max-width: 1100px; margin: 0 auto">
        <h2
          style="
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            margin-bottom: 3rem;
          "
        >
          <span style="color: #9b4f48">Portfolio</span>
        </h2>
        <div class="portfolio-grid">
          <!-- Zeile 1: 3 gleiche Quadrate -->
          <div style="overflow: hidden; aspect-ratio: 1/1;">
            <img src="/examples/tattoo/tattoo-3.png" alt="" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;display:block;"
              @mouseenter="e=>e.target.style.transform='scale(1.05)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
          </div>
          <div style="overflow: hidden; aspect-ratio: 1/1;">
            <img src="/examples/tattoo/tattoo-1.png" alt="" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;display:block;"
              @mouseenter="e=>e.target.style.transform='scale(1.05)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
          </div>
          <div style="overflow: hidden; aspect-ratio: 1/1;">
            <img src="/examples/tattoo/tattoo-5.png" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center top;transition:transform 0.5s;display:block;"
              @mouseenter="e=>e.target.style.transform='scale(1.05)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
          </div>
          <!-- Zeile 2: breit + quadrat -->
          <div style="overflow: hidden; aspect-ratio: 2/1; grid-column: span 2;">
            <img src="/examples/tattoo/tattoo-7.png" alt="" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;display:block;"
              @mouseenter="e=>e.target.style.transform='scale(1.03)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
          </div>
          <div style="overflow: hidden; aspect-ratio: 1/1;">
            <img src="/examples/tattoo/tattoo-4.png" alt="" style="width:100%;height:100%;object-fit:cover;transition:transform 0.5s;display:block;"
              @mouseenter="e=>e.target.style.transform='scale(1.05)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
          </div>
        </div>
      </div>
    </section>

    <!-- ARTISTS -->
    <section id="team" style="background: #fff; padding: 5rem 2.5rem">
      <div style="max-width: 1100px; margin: 0 auto">
        <h2
          style="
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 600;
            text-transform: uppercase;
            color: #9b4f48;
            margin-bottom: 3rem;
            letter-spacing: 0.05em;
          "
        >
          Künstlerinnen
        </h2>
        <div class="artists-grid">
          <div v-for="(person, i) in team" :key="person.name" style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div style="overflow: hidden; aspect-ratio: 3/4; max-height: 480px;">
              <img
                :src="i === 0 ? '/examples/tattoo/hanna-at-work.png' : '/examples/tattoo/laura-at-work.png'"
                :alt="person.name"
                style="width: 100%; height: 100%; object-fit: cover; object-position: top; filter: grayscale(15%); display: block; transition: transform 0.5s;"
                @mouseenter="e => e.target.style.transform='scale(1.03)'"
                @mouseleave="e => e.target.style.transform='scale(1)'"
              />
            </div>
            <div>
              <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                <span v-for="tag in person.tags" :key="tag"
                  style="font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: #f5f5f5; padding: 0.3rem 0.75rem; color: #333;">
                  {{ tag }}
                </span>
              </div>
              <h3 style="font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 300; text-transform: uppercase; letter-spacing: 0.08em; color: #111; margin-bottom: 0.75rem;">
                {{ person.name }}
              </h3>
              <p style="font-size: 0.6rem; font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase; color: #9b4f48; margin-bottom: 0.5rem;">{{ person.role }}</p>
              <p style="font-size: 0.875rem; line-height: 1.8; color: #555;">{{ person.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section id="prozess" style="background: #111; padding: 5rem 2.5rem">
      <div style="max-width: 1100px; margin: 0 auto">
        <h2
          style="
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            margin-bottom: 3.5rem;
          "
        >
          Buchungsprozess
        </h2>
        <div style="display: flex; flex-direction: column; gap: 0">
          <div
            v-for="(step, i) in steps"
            :key="step.title"
            style="
              display: grid;
              grid-template-columns: 80px 1fr;
              border-top: 1px solid rgba(255, 255, 255, 0.1);
              padding: 2rem 0;
              gap: 2rem;
              align-items: start;
            "
          >
            <div>
              <span
                style="
                  font-size: 0.65rem;
                  font-weight: 700;
                  letter-spacing: 0.2em;
                  text-transform: uppercase;
                  color: rgba(255, 255, 255, 0.3);
                "
                >Schritt</span
              >
              <p
                style="
                  font-size: 2.5rem;
                  font-weight: 600;
                  color: #9b4f48;
                  line-height: 1;
                  margin-top: 0.25rem;
                "
              >
                {{ String(i + 1).padStart(2, "0") }}
              </p>
            </div>
            <div style="padding-top: 0.25rem">
              <h4
                style="
                  font-size: 1.1rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  color: #fff;
                  margin-bottom: 0.5rem;
                "
              >
                {{ step.title }}
              </h4>
              <p
                style="
                  font-size: 0.85rem;
                  line-height: 1.7;
                  color: rgba(255, 255, 255, 0.45);
                "
              >
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section style="background: #fff; padding: 6rem 2.5rem 0; text-align: center; overflow: hidden;">
      <h2 style="font-size: clamp(2.5rem, 7vw, 6rem); font-weight: 600; line-height: 1.05; color: #111; margin-bottom: 1rem;">
        Bereit für dein<br />
        <span style="font-family: 'Great Vibes', cursive; font-weight: 400; color: #9b4f48; font-size: 1.2em; text-transform: none; letter-spacing: 0.02em;">Tattoo?</span>
      </h2>
      <p style="font-size: 0.9rem; color: #777; max-width: 28rem; margin: 1.5rem auto 2rem; line-height: 1.7;">
        Buche deinen Termin und lass uns gemeinsam ein Design entwickeln, das nur für dich ist.
      </p>
      <a href="#termin"
        style="display: inline-block; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; background: #9b4f48; color: #fff; padding: 1rem 3rem; text-decoration: none; transition: background 0.2s;"
        @mouseenter="(e) => (e.target.style.background = '#87423C')"
        @mouseleave="(e) => (e.target.style.background = '#9B4F48')">
        Termin anfragen
      </a>

      <!-- Foto-Collage -->
      <div class="photo-collage">
        <div style="flex: 1; overflow: hidden;">
          <img src="/examples/tattoo/hanna-at-work-2.png" alt="" style="width:100%; height:12rem; object-fit:cover; object-position:top; display:block; filter:grayscale(20%); transition:transform 0.5s;"
            @mouseenter="e=>e.target.style.transform='scale(1.04)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
        </div>
        <div style="flex: 1.3; overflow: hidden;">
          <img src="/examples/tattoo/laura-at-work-2.png" alt="" style="width:100%; height:24rem; object-fit:cover; object-position:top; display:block; filter:grayscale(10%); transition:transform 0.5s;"
            @mouseenter="e=>e.target.style.transform='scale(1.04)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
        </div>
        <div style="flex: 1.5; overflow: hidden;">
          <img src="/examples/tattoo/hanna-at-work-3.png" alt="" style="width:100%; height:17rem; object-fit:cover; object-position:top; display:block; transition:transform 0.5s;"
            @mouseenter="e=>e.target.style.transform='scale(1.04)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
        </div>
        <div style="flex: 1.3; overflow: hidden;">
          <img src="/examples/tattoo/hanna-at-work-4.png" alt="" style="width:100%; height:24rem; object-fit:cover; object-position:top; display:block; filter:grayscale(10%); transition:transform 0.5s;"
            @mouseenter="e=>e.target.style.transform='scale(1.04)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
        </div>
        <div style="flex: 1; overflow: hidden;">
          <img src="/examples/tattoo/laura-at-work-2.png" alt="" style="width:100%; height:18rem; object-fit:cover; object-position:top; display:block; filter:grayscale(20%); transition:transform 0.5s;"
            @mouseenter="e=>e.target.style.transform='scale(1.04)'" @mouseleave="e=>e.target.style.transform='scale(1)'" />
        </div>
      </div>
    </section>

    <!-- TERMIN FORM -->
    <section id="termin" style="background: #f5f5f5; padding: 5rem 2.5rem">
      <div class="contact-grid">
        <div>
          <h2
            style="
              font-size: clamp(2rem, 4vw, 3rem);
              font-weight: 600;
              text-transform: uppercase;
              margin-bottom: 1.5rem;
            "
          >
            <span style="color: #9b4f48">Kontakt</span>
          </h2>
          <p
            style="
              font-size: 0.875rem;
              line-height: 1.8;
              color: #555;
              margin-bottom: 2.5rem;
            "
          >
            Ausschließlich für Frauen.<br />
            Schreib uns deine Idee – wir melden uns innerhalb von 48 Stunden.
          </p>
          <div style="display: flex; flex-direction: column; gap: 1rem">
            <div v-for="info in kontakt" :key="info.label">
              <p
                style="
                  font-size: 0.6rem;
                  font-weight: 700;
                  letter-spacing: 0.2em;
                  text-transform: uppercase;
                  color: #9b4f48;
                  margin-bottom: 0.25rem;
                "
              >
                {{ info.label }}
              </p>
              <p style="font-size: 0.875rem; color: #333">{{ info.value }}</p>
            </div>
          </div>
        </div>
        <form
          style="display: flex; flex-direction: column; gap: 1rem"
          @submit.prevent
        >
          <input
            type="text"
            placeholder="Name"
            style="
              background: #fff;
              border: 1px solid #ddd;
              padding: 0.9rem 1.1rem;
              font-family: sans-serif;
              font-size: 0.875rem;
              outline: none;
              transition: border-color 0.2s;
              width: 100%;
            "
            onfocus="this.style.borderColor = '#9B4F48'"
            onblur="this.style.borderColor = '#ddd'"
          />
          <input
            type="email"
            placeholder="E-Mail"
            style="
              background: #fff;
              border: 1px solid #ddd;
              padding: 0.9rem 1.1rem;
              font-family: sans-serif;
              font-size: 0.875rem;
              outline: none;
              transition: border-color 0.2s;
              width: 100%;
            "
            onfocus="this.style.borderColor = '#9B4F48'"
            onblur="this.style.borderColor = '#ddd'"
          />
          <textarea
            rows="5"
            placeholder="Deine Tattoo-Idee oder Frage"
            style="
              background: #fff;
              border: 1px solid #ddd;
              padding: 0.9rem 1.1rem;
              font-family: sans-serif;
              font-size: 0.875rem;
              outline: none;
              resize: none;
              transition: border-color 0.2s;
              width: 100%;
            "
            onfocus="this.style.borderColor = '#9B4F48'"
            onblur="this.style.borderColor = '#ddd'"
          ></textarea>
          <button
            type="submit"
            style="
              background: #111;
              color: #fff;
              padding: 1rem;
              font-family: sans-serif;
              font-size: 0.75rem;
              font-weight: 700;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              border: none;
              cursor: pointer;
              transition: background 0.2s;
            "
            @mouseenter="(e) => (e.target.style.background = '#9B4F48')"
            @mouseleave="(e) => (e.target.style.background = '#111')"
          >
            Anfrage senden
          </button>
        </form>
      </div>
    </section>

    <!-- FOOTER -->
    <footer
      style="
        background: #111;
        padding: 3rem 2.5rem;
        position: relative;
        overflow: hidden;
      "
    >
      <div
        style="
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-family: 'Arial', sans-serif;
          font-weight: 600;
          font-size: clamp(5rem, 18vw, 12rem);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.04);
          pointer-events: none;
          user-select: none;
        "
      >
        TZR's TZR's TZR's
      </div>
      <div
        style="
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        "
      >
        <div>
          <p
            style="
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: rgba(255, 255, 255, 0.4);
              margin-bottom: 1rem;
            "
          >
            Adresse
          </p>
          <p
            style="
              font-size: 0.875rem;
              color: rgba(255, 255, 255, 0.7);
              line-height: 1.7;
            "
          >
            Leipziger Straße 110<br />
            01127 Dresden
          </p>
        </div>
        <div>
          <p
            style="
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: rgba(255, 255, 255, 0.4);
              margin-bottom: 1rem;
            "
          >
            Kontakt
          </p>
          <p
            style="
              font-size: 0.875rem;
              color: rgba(255, 255, 255, 0.7);
              line-height: 1.7;
            "
          >
            info@tzrs-studio.de<br />
            Nur für Frauen
          </p>
        </div>
        <div>
          <p
            style="
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: rgba(255, 255, 255, 0.4);
              margin-bottom: 1rem;
            "
          >
            Rechtliches
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.5rem">
            <a
              href="#"
              style="
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
                text-decoration: none;
              "
              >Impressum</a
            >
            <a
              href="#"
              style="
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
                text-decoration: none;
              "
              >Datenschutz</a
            >
          </div>
        </div>
        <div style="text-align: right">
          <p style="font-size: 0.65rem; color: rgba(255, 255, 255, 0.25)">
            © 2025 TZR'S Tattoostudio
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

definePageMeta({ layout: false });

const nav = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Portfolio", href: "#galerie" },
  { label: "Team", href: "#team" },
  { label: "Prozess", href: "#prozess" },
  { label: "Kontakt", href: "#termin", highlight: true },
];

const usps = [
  {
    label: "Privater Raum",
    text: "Kein öffentlicher Durchlauf – nur du und deine Tätowiererin.",
  },
  {
    label: "Nur für Frauen",
    text: "Termine und Einlass ausschließlich für Frauen.",
  },
  {
    label: "Custom Designs",
    text: "Jedes Motiv wird individuell für dich entwickelt.",
  },
  {
    label: "Professionelle Ausstattung",
    text: "Hochwertige Geräte und hygienische Standards.",
  },
];

const team = [
  {
    name: "Hanna Metzner",
    tags: ["Fine Line", "Floral", "Feminin"],
    bio: "Gründerin von TZR'S. Hanna hat mit 15 angefangen zu tätowieren und betreibt heute ihr eigenes Studio in Dresden. Ihr Stil: fein, floral, persönlich. Seit vier Jahren verfeinert sie ihre Technik mit Unterstützung erfahrener Tätowierer.",
  },
  {
    name: "Laura Lotze",
    tags: ["Neo-Tribal", "Darkstyle", "Skizzenhaft"],
    bio: "Junge Künstlerin mit ausgeprägtem eigenem Stil. Laura spezialisiert sich auf Neo-Tribal, Darkstyle und skizzenhafte Linien – kraftvolle Arbeiten mit einem unverwechselbaren Handwriting.",
  },
];

const steps = [
  {
    title: "Anfrage stellen",
    desc: "Fülle das Kontaktformular aus und beschreibe deine Idee, Vorstellungen und Platzierung.",
  },
  {
    title: "Beratung",
    desc: "Wir kontaktieren dich, um alle Details zu besprechen und das Konzept zu bestätigen.",
  },
  {
    title: "Design-Erstellung",
    desc: "Wir entwickeln ein individuelles Design basierend auf deiner Idee.",
  },
  {
    title: "Tattoo-Session",
    desc: "Du kommst ins Studio und dein Tattoo wird in einer entspannten, privaten Atmosphäre gestochen.",
  },
];

const kontakt = [
  { label: "Adresse", value: "Leipziger Straße 110, 01127 Dresden" },
  { label: "E-Mail", value: "info@tzrs-studio.de" },
  { label: "Hinweis", value: "Termine ausschließlich für Frauen" },
];
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@700&family=Cormorant+Garamond:wght@300;600&display=swap");
html {
  scroll-behavior: smooth;
}

.tattoo-page h1,
.tattoo-page h2,
.tattoo-page h3,
.tattoo-page h4 {
  all: unset;
}

/* Layout-Klassen Desktop */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.artists-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  border-top: 1px solid #eee;
  padding-top: 3rem;
}
.contact-grid {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}
.photo-collage {
  display: flex;
  align-items: flex-end;
  margin-top: 4rem;
  gap: 0.4rem;
}

/* Mobile */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .portfolio-grid {
    grid-template-columns: 1fr 1fr;
  }
  .portfolio-grid > div[style*="grid-column: span 2"] {
    grid-column: span 2;
  }
  .artists-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .photo-collage {
    overflow-x: auto;
    gap: 0.3rem;
    padding-bottom: 1rem;
  }
  .photo-collage > div {
    flex: 0 0 60vw;
  }
}
</style>
