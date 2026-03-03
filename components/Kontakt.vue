<template>
  <div id="kontakt" class="bg-(--primary-orange) py-20 px-10 lg:px-0">
    <div class="w-full lg:w-3/4 mx-auto">
      <!-- Überschrift -->
      <div class="text-center mb-12">
        <span class="feature-badge">Hast du Fragen?</span>
        <h3>Kontaktiere mich!</h3>
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
        <button type="submit" class="btn-send">Nachricht senden</button>
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

emailjs.init("AVMDmddXO7z0vEx95");

const sendEmail = () => {
  const templateParams = {
    name: name.value,
    email: email.value,
    title: subject.value,
    message: message.value,
  };

  emailjs
    .send("service_jr68bll", "template_8gp8mtj", templateParams)
    .then(() => {
      alert("Ihre E-Mail wurde erfolgreich gesendet!");
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";
    })
    .catch(() => {
      alert("Die E-Mail konnte nicht gesendet werden.");
    });
};
</script>

<style scoped>
@reference "tailwindcss";

h3 {
  @apply text-4xl font-bold text-(--primary-beige) tracking-tight mt-3;
}
.feature-badge {
  @apply text-xs uppercase tracking-[0.2em] text-(--primary-beige)/60 font-semibold;
}
.label {
  @apply text-base font-semibold text-(--primary-beige)/90 uppercase tracking-wide;
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
         hover:bg-white transition-all duration-300 cursor-pointer;
}
</style>
