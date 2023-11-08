<template>
  <div>
    <v-btn @click="logout">Logout</v-btn>
  </div>
</template>

<script setup>
definePageMeta({ middleware: "auth" });
const { signOut } = useAuth();

function logout() {
  signOut();
}
</script>

<style></style>
