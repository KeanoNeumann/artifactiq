<template>
  <div>
    <v-img src="logo.png" class="mx-auto my-4"></v-img>
    <div class="w-full flex justify-center">
      <div class="flex justify-center w1/4">
        <div class="mx-4 links">
          <NuxtLink to="impressum">Impressum</NuxtLink>
        </div>
        |
        <div class="mx-4 links">
          <NuxtLink to="privacyPolicy">Datenschutzerklärung</NuxtLink>
        </div>
        <!-- |
        <div class="mx-4 links"><NuxtLink to="portal">Portal</NuxtLink></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.links {
  color: #0f5f96;
}

.links:hover {
  color: #0f5f96;
  text-decoration: underline;
}
</style>
