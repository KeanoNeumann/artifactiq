<template>
  <v-app class="mx-4">
    <v-app-bar :elevation="4" style="background-color: #f7fbfc" class="py-4">
      <v-img
        class="my-2"
        style="cursor: pointer"
        @click="navigateTo('/')"
        src="/wappen.png"
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
        <NuxtLink to="/contact">
          <div class="mr-12 nav-button">Kontakt</div>
        </NuxtLink>
      </div>

      <template #append>
        <NuxtLink to="/login">
          <v-btn rounded="xl" variant="plain" color="#0f5f96" class="mr-2"
            >Einloggen</v-btn
          >
        </NuxtLink>
        <NuxtLink to="/register">
          <v-btn rounded="xl" variant="flat" color="#0f5f96" class="mr-2"
            >Registrieren</v-btn
          >
        </NuxtLink>
      </template>
    </v-app-bar>
    <v-main class="mt-10">
      <slot />
    </v-main>
    <div>
      <web-footer></web-footer>
    </div>
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
