<!-- file: ~/pages/login.vue -->
<template>
  <div class="w-full h-screen grid place-items-center bg-lighter">
    <v-card class="w-full sm:w-2/3 text-center">
      <v-row>
        <div class="w-2/5 bg-darker px-8 py-8 grid place-items-center">
          <div>
            <h1 class="text-white mb-8">Willkommen!</h1>
            <p class="mb-10">
              Um das Portal zu betreten, loggen Sie sich mit Ihren persönlichen
              Daten ein oder erstellen Sie sich einen Account mit dem Formular
              auf der rechnte Seite
            </p>
            <NuxtLink to="/portal/login">
              <v-btn variant="outlined" size="large">Einloggen</v-btn></NuxtLink
            >
          </div>
        </div>
        <div class="w-3/5 pr-8 pl-5 py-8">
          <v-img src="/logo.png" class="mx-auto mb-4"></v-img>

          <p>Geben Sie Ihre Benutzerdaten ein.</p>

          <v-text-field
            v-model="username"
            label="E-Mail"
            class="mt-6"
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Passwort"
            prepend-inner-icon="mdi-lock"
            :append-inner-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :append-icon="capslock ? 'mdi-apple-keyboard-caps' : ''"
            @click:append-inner="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            :rules="[rules.required, rules.min]"
            @keyup="capsLock"
          ></v-text-field>
          <div class="w-full">
            <v-btn class="mt-8" color="primary" :loading="loading" @click="send"
              >Registrieren</v-btn
            >
          </div>
          <p class="my-8">ODER REGISTRIEREN MIT</p>
          <div class="flex justify-center">
            <v-btn icon="mdi-facebook" color="primary"></v-btn>
            <v-btn class="mx-4" icon="mdi-twitter" color="primary"></v-btn>
            <v-btn icon="mdi-google" color="primary"></v-btn>
          </div>
        </div>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
const { signIn } = useAuth();

const loading = ref(false);

const username = ref("");
const password = ref("");
const capslock = ref(false);
const showPassword = ref(false);

const rules = ref({
  required: (value) => !!value || "Feld benötigt.",
  min: (v) =>
    v.length >= 8 || "Mindestens 8 Zeichen, eine Zahl und ein Sonderzeichen",
  
});

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});

function send() {
  loading.value = true;

  signIn("credentials", { username: "test", password: "hunter2" })
    .then(() => {
      loading.value = false;
      navigateTo("/portal");
    })
    .catch((error) => {
      console.log(error);
    });
}

function capsLock(event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    capslock.value = true;
  } else {
    capslock.value = false;
  }
}
</script>
