<template>
  <div class="w-full h-screen grid place-items-center bg-lighter">
    <v-card class="w-full sm:w-1/3 px-8 py-8 text-center">
      <v-img src="/logo.png" class="mx-auto mb-4"></v-img>

      <p>Geben Sie Ihre Benutzerdaten ein.</p>

      <v-text-field
        v-model="username"
        label="E-Mail"
        :rules="[rules.required, rules.email]"
        class="mt-6 mb-2"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        v-model="password"
        class="mb-2"
        label="Passwort"
        :append-inner-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        :append-icon="capslock ? 'mdi-apple-keyboard-caps' : ''"
        :type="showPassword ? 'text' : 'password'"
        :rules="[rules.required]"
        @click:append-inner="showPassword = !showPassword"
        @keyup="capsLock"
      ></v-text-field>
      <a href="register" class="text-left links">Passwort vergessen?</a>
      <div class="w-full">
        <v-btn class="mt-8" color="primary" :loading="loading" @click="login"
          >Anmelden</v-btn
        >
      </div>
      <p class="my-8">ODER ANMELDEN MIT</p>
      <div class="flex justify-center mb-6">
        <v-btn icon="mdi-facebook" color="primary"></v-btn>
        <v-btn class="mx-8" icon="mdi-twitter" color="primary"></v-btn>
        <v-btn icon="mdi-google" color="primary"></v-btn>
      </div>
      <p>Kein Account? <a class="links" href="register">Registrieren</a></p>
    </v-card>
    <v-snackbar v-model="snackbar" timeout="5000" color="error"
      >Die eingegebenen Benutzerdaten sind nicht korrekt.</v-snackbar
    >
  </div>
</template>

<script setup>
const { signIn } = useAuth();

const loading = ref(false);
const snackbar = ref(false);

const username = ref("");
const password = ref("");
const capslock = ref(false);
const showPassword = ref(false);

const rules = ref({
  required: (value) => !!value || "Feld benötigt.",
  email: (v) =>
    v.match(/[A-Za-z0-9\-_.+]{1,64}@[A-Za-z0-9\-_.]+\.[a-zA-Z]+/) ||
    "Die E-Mail Adresse ist ungültig",
});

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/portal",
  },
});

async function login() {
  loading.value = true;
  const { error, url } = await signIn("credentials", {
    username: username.value,
    password: password.value,
    redirect: false,
    callbackUrl: "/portal",
  });

  if (error) {
    snackbar.value = true;
    loading.value = false;
  } else {
    loading.value = false;
    return navigateTo(url, { external: true });
  }
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
