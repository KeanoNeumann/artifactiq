<template>
  <v-app class="mx-4">
    <v-app-bar :elevation="4" style="background-color: #f7fbfc" class="py-4">
      <v-img
        class="my-2"
        style="cursor: pointer"
        src="/wappen.png"
        max-width="300"
        contain
        @click="navigateTo('/portal')"
      ></v-img>

      <div class="flex justify-between">
        <!-- <NuxtLink to="aboutUs">
          <div class="mr-12 nav-button">Über uns</div>
        </NuxtLink>
        <NuxtLink to="pricing">
          <div class="mr-12 nav-button">Pricing</div>
        </NuxtLink> -->
        <!-- <NuxtLink to="/contact">
          <div class="mr-12 nav-button">Kontakt</div>
        </NuxtLink> -->
      </div>

      <template #append>
        <!-- <NuxtLink to="/portal">
          <v-btn rounded="xl" variant="flat" color="#0f5f96" class="mr-8"
            >Zum Portal</v-btn
          >
        </NuxtLink>
        <a href="https://facebook.com/artifactiq" target="blank"
          ><v-btn icon="mdi-facebook" size="medium"></v-btn
        ></a>
        <a href="https://www.instagram.com/artifact.iq" target="blank"
          ><v-btn icon="mdi-instagram" size="medium" class="mx-2"></v-btn
        ></a> -->
      </template>
    </v-app-bar>
    <v-main class="mt-10">
      <slot />
    </v-main>
    <v-footer class="w-full flex justify-center">
      <!-- <web-footer></web-footer> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
