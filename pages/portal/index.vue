<template>
  <div>
    <v-btn @click="logout">Logout</v-btn>
    <v-btn @click="createUser">User</v-btn>
  </div>
</template>

<script setup>
definePageMeta({ middleware: "auth" });
const { signOut } = useAuth();

function logout() {
  signOut();
}

function createUser() {
  useFetch("/api/portal/user/create", {
    method: "POST",
    body: {
      email: "keano.neumann@gmx.de",
      password: "test123",
    },
  });
}
</script>

<style></style>
