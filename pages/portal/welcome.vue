<template>
  <div class="sm:mx-16 mx-2 mt-6">
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="4">
        <h1>Willkommen!</h1>
        <p>
          Herzlich willkommen bei ArtifactIQ! Wir sind begeistert, dass du dich
          uns angeschlossen hast und freuen uns darauf, dich auf deinem
          spannenden Hobby mit unseren Tools und Ressourcen zu unterstützen.
        </p>
        <br />
        <p>
          Zum Beginn wollen wir dich besser kennenlernen. Zu Beginn möchten wir
          dich etwas besser kennenlernen. Wähle dazu auf der rechten Seite einen
          Benutzernamen. Du kannst auch gern ein paar persöliche Daten von dir
          eingeben.
        </p>
      </v-col>
      <v-col cols="4">
        <v-text-field
          class="mt-16"
          label="Benutzername*"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field class="mt-6" label="Vorname"></v-text-field>
        <v-text-field label="Nachname"></v-text-field>
        <v-textarea label="Über dich"></v-textarea>
        <v-btn>Speichern</v-btn>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "portal",
});

const rules = ref({
  required: (value) => !!value || "Feld wird benötigt.",
});
</script>

<style></style>
