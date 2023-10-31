<template>
  <div style="position: relative; top: -30px" class="m-2 w-full">
    <div class="flex w-full justify-center">
      <v-avatar
        color="info"
        size="x-large"
        :icon="icon"
        style="position: relative; top: 30px; overflow: visible; z-index: 1"
      ></v-avatar>
    </div>
    <v-card class="text-center" style="min-height: 230px" color="#0f5f96">
      <h2 class="mt-16 text-2xl" style="color: white !important">
        {{ title }}
      </h2>
      <v-card-text>{{ text }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  text: String,
  icon: String,
});
</script>

<style></style>
