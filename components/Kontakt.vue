<template>
  <div id="kontakt" class="bg-(--primary-orange) py-10 lg:py-20 px-8 lg:px-0">
    <div class="w-full lg:w-3/4 mx-auto">
      <!-- Überschrift -->
      <div class="text-center mb-12">
        <span class="feature-badge">Lass uns über dein Projekt sprechen.</span>
        <h3>Kontaktiere mich!</h3>
      </div>

      <!-- E-Mail Hinweis -->
      <div
        class="max-w-2xl mx-auto mb-8 flex flex-col items-center gap-4"
      >
        <div class="email-box">
          <span class="email-box-label">Direkt per E-Mail</span>
          <a href="mailto:kontakt@lumiweb.de" class="email-box-link">
            kontakt@lumiweb.de
          </a>
        </div>
        <div class="divider-or">oder</div>
        <p class="form-hint">Fülle das Formular aus</p>
      </div>

      <!-- Formular -->
      <form
        @submit.prevent="sendEmail"
        class="max-w-2xl mx-auto flex flex-col gap-5"
      >
        <!-- Name + Email nebeneinander -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="flex flex-col gap-2">
            <label class="label">Name*</label>
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Dein Name"
              class="input-field"
              required
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="label">E-Mail*</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="deine@email.de"
              class="input-field"
              required
            />
          </div>
        </div>

        <!-- Betreff -->
        <div class="flex flex-col gap-2">
          <label class="label">Betreff*</label>
          <input
            id="subject"
            v-model="subject"
            type="text"
            placeholder="Worum geht es?"
            class="input-field"
            required
          />
        </div>

        <!-- Nachricht -->
        <div class="flex flex-col gap-2">
          <label class="label">Nachricht*</label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            placeholder="Platz für deine Nachricht"
            class="input-field resize-none"
            required
          />
        </div>

        <!-- Button -->
        <button type="submit" :disabled="sending" class="btn-send">
          {{ sending ? "Wird gesendet…" : "Nachricht senden" }}
        </button>

        <!-- Erfolgsmeldung -->
        <div v-if="sent" class="success-box">
          <span class="material-symbols-outlined">check_circle</span>
          <p>Danke! Deine Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei dir.</p>
        </div>

        <!-- Fehlermeldung -->
        <div v-if="sendError" class="error-box">
          <span class="material-symbols-outlined">error</span>
          <p>Leider ist etwas schiefgelaufen. Schreib mir direkt an kontakt@lumiweb.de.</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
const sending = ref(false);
const sent = ref(false);
const sendError = ref(false);

emailjs.init("AVMDmddXO7z0vEx95");

const sendEmail = () => {
  sending.value = true;
  sent.value = false;
  sendError.value = false;

  const templateParams = {
    name: name.value,
    email: email.value,
    title: subject.value,
    message: message.value,
  };

  emailjs
    .send("service_jr68bll", "template_8gp8mtj", templateParams)
    .then(() => {
      sent.value = true;
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    })
    .catch(() => {
      sendError.value = true;
    })
    .finally(() => {
      sending.value = false;
    });
};
</script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-(--primary-beige) tracking-tight mt-3;
}
.feature-badge {
  @apply text-base uppercase tracking-[0.2em] text-(--primary-beige)/60 font-semibold;
}
.label {
  @apply text-base font-semibold text-(--primary-beige)/90 uppercase tracking-wide;
}
.email-box {
  @apply flex-1 flex flex-col items-center justify-center sm:items-start gap-2
         bg-white/10 border border-white/20 rounded-xl px-6 py-4 w-full md:w-2/4;
}
.email-box-label {
  @apply text-base uppercase tracking-widest text-(--primary-beige)/80 font-semibold mx-auto;
}
.email-box-link {
  @apply text-(--primary-beige) font-semibold text-base underline underline-offset-4
         hover:text-white transition-colors duration-200 mx-auto;
}
.divider-or {
  @apply  text-sm text-(--primary-beige)/60 tracking-widest 
         shrink-0;
}
.form-hint {
  @apply flex-1 text-center  text-(--primary-beige)/80 text-base mx-auto w-2/4 uppercase font-semibold;
}
.input-field {
  @apply w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5
         text-(--primary-beige) placeholder-white/50 text-base
         focus:outline-none focus:border-white/60 focus:bg-white/15
         transition-all duration-300;
}
.btn-send {
  @apply w-full mt-3 py-4 rounded-xl bg-(--primary-beige) text-(--primary-orange)
         font-bold text-base tracking-wide
         hover:bg-white transition-all duration-300 cursor-pointer
         disabled:opacity-60 disabled:cursor-not-allowed;
}
.success-box {
  @apply flex items-center gap-3 bg-white/15 border border-white/30 rounded-xl px-6 py-4
         text-(--primary-beige) text-base font-medium;
}
.error-box {
  @apply flex items-center gap-3 bg-black/20 border border-black/20 rounded-xl px-6 py-4
         text-(--primary-beige) text-base font-medium;
}
.success-box .material-symbols-outlined,
.error-box .material-symbols-outlined {
  @apply text-2xl shrink-0;
}
</style>
