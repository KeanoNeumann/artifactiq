<template>
  <div class="sm:mx-16 mx-2 mt-6">
    <v-row>
      <v-col cols="2" v-if="!isMobile"></v-col>
      <v-col cols="12" md="8"> <h2 class="mb-6 mt-4">Kontakt</h2></v-col>
      <v-col cols="2" v-if="!isMobile"></v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-if="!isMobile"></v-col>
      <v-col cols="12" md="5">
        <h3>Kontaktformular</h3>
        <v-text-field
          label="Ihre E-Mail"
          v-model="email"
          class="mb-2"
          prepend-inner-icon="mdi-email"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          label="Ihr Name"
          v-model="name"
          prepend-inner-icon="mdi-account"
          class="mb-2"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          label="Betreff"
          v-model="subject"
          prepend-inner-icon="mdi-message"
          class="mb-2"
          :rules="[rules.required]"
        ></v-text-field>
        <v-textarea
          prepend-inner-icon="mdi-text-long"
          label="Ihre Nachricht"
          class="mb-2"
          v-model="message"
          :rules="[rules.required]"
        ></v-textarea>
        <v-btn @click="send" color="#0f5f96" variant="flat">Senden</v-btn>
      </v-col>
      <v-col cols="12" md="3" class="text-center sm:text-left">
        <h3>Anschrift</h3>
        <b style="color: #0f5f96">NewDot Digital</b><br />
        Keano Neumann<br />
        Hauptstraße 8<br />
        49326 Melle<br /><br />

        <h3>Kontakt</h3>
        <b>Tel: </b>
        <a class="links" href="tel:+4954283639990">+49 (0)5428 36399 90</a
        ><br />
        <b>E-Mail: </b>
        <a class="links" href="mailto:info@newdot.digital"
          >info@newdot.digital</a
        >
      </v-col>
      <v-col cols="2" v-if="!isMobile"></v-col>
    </v-row>
    <v-snackbar v-model="snackbar" color="success">
      Ihre Nachricht wurde gesendet!
    </v-snackbar>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "web",
});

const mail = useMail();
const { isMobile } = useDevice();

const snackbar = ref(false);
const email = ref("");
const name = ref("");
const subject = ref("");
const message = ref("");
const rules = ref({
  required: (value) => !!value || "Feld wird benötigt.",
});

const send = function () {
  if (!email.value || !name.value || !subject.value || !message.value) return;

  mail.send({
    from: "info@newdot.digital",
    subject: "[KONTAKTFORMULAR] " + subject.value,
    text: `Neue Nachricht über das Kontaktformular!
    
    E-Mail: ${email.value} 
    Name: ${name.value} 
    Betreff: ${subject.value} 
    
    Nachricht: ${message.value} `,
  });

  snackbar.value = true;
  message.value = "";
  name.value = "";
  email.value = "";
  subject.value = "";
};
</script>

<style></style>
