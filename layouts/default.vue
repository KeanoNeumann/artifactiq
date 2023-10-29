<template>
  <v-app class="mx-4">
    <v-app-bar :elevation="4" style="background-color: #f7fbfc" class="py-4">
      <v-img
        class="my-2"
        style="cursor: pointer"
        @click="navigateTo('/')"
        src="wappen.png"
        max-width="300"
        contain
      ></v-img>

      <div class="flex justify-between">
        <!-- <NuxtLink to="aboutUs">
          <div class="mr-12 nav-button">Über uns</div>
        </NuxtLink>
        <NuxtLink to="pricing">
          <div class="mr-12 nav-button">Pricing</div>
        </NuxtLink> -->
        <NuxtLink to="contact">
          <div class="mr-12 nav-button">Kontakt</div>
        </NuxtLink>
      </div>

      <template #append>
        <!-- <v-btn rounded="xl" variant="flat" color="#0f5f96">Zum Portal</v-btn> -->
        <v-btn icon="mdi-facebook" size="medium"></v-btn>
        <v-btn icon="mdi-instagram" size="medium" class="mx-2"></v-btn>
      </template>
    </v-app-bar>
    <v-main class="mt-10">
      <slot />
    </v-main>
    <v-footer class="w-full flex justify-center">
      <web-footer></web-footer>
    </v-footer>
  </v-app>
</template>

<style scoped>
.nav-button {
  cursor: pointer;
  border-bottom: 1px solid #000;
}

.nav-button:hover {
  color: #0f5f96;
  font-weight: 600;
  border-bottom: 2px solid #0f5f96;
}
</style>
