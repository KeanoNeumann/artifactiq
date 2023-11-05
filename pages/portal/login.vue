<!-- file: ~/pages/login.vue -->
<template>
  <div class="w-full h-screen grid place-items-center bg-lighter">
    <v-card class="w-full sm:w-1/3 px-8 py-8 text-center">
      <v-img src="/logo.png" class="mx-auto mb-4"></v-img>

      <p>Geben Sie Ihre Benutzerdaten ein.</p>

      <v-text-field
        v-model="username"
        label="E-Mail"
        class="mt-6"
        prepend-inner-icon="mdi-account"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Passwort"
        prepend-inner-icon="mdi-lock"
        append-inner-icon="mdi-eye"
      ></v-text-field>
      <a href="register" class="text-left links">Passwort vergessen?</a>
      <div class="w-full">
        <v-btn class="mt-8" color="primary" :loading="loading" @click="send"
          >Anmelden</v-btn
        >
      </div>
      <p class="my-8">ODER ANMELDEN MIT</p>
      <div class="flex justify-center">
        <v-btn icon="mdi-facebook" color="primary"></v-btn>
        <v-btn class="mx-4" icon="mdi-twitter" color="primary"></v-btn>
        <v-btn icon="mdi-google" color="primary"></v-btn>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const { signIn } = useAuth();

const loading = ref(false);

const username = ref("");
const password = ref("");

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
</script>
