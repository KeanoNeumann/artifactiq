<template>
  <div>
    <v-btn @click="createCustomer">createCustomer</v-btn>
    <v-btn @click="signOut">signOut</v-btn>
    <v-btn
      @click="
        signIn('credentials', { username: 'jsmith', password: 'hunter2' })
      "
      >signIn</v-btn
    >
  </div>
</template>

<script setup>
const stripe = await useClientStripe();
const { signOut, signIn } = useAuth();

async function createCustomer() {
  const { data: count } = await useFetch("/api/stripe");
}
</script>

<style></style>
