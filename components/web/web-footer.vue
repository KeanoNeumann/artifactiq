<template>
  <div>
    <v-row>
      <v-col cols="3"
        ><div style="position: absolute; bottom: 0; left: 0">
          <p>© 2023 - NewDot Digital</p>
        </div></v-col
      >
      <v-col cols="6">
        <div>
          <img src="/logo.png" style="max-height: 100px" class="mx-auto my-4" />
          <div class="w-full flex justify-center">
            <div class="flex justify-center w1/4">
              <div class="mx-4 links">
                <NuxtLink to="/impressum">Impressum</NuxtLink>
              </div>
              |
              <div class="mx-4 links">
                <NuxtLink to="/privacyPolicy">Datenschutzerklärung</NuxtLink>
              </div>
              |
              <div class="mx-4 links">
                <NuxtLink to="/portal">Portal</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="3">
        <div style="position: absolute; bottom: 0; right: 0">
          <a href="https://facebook.com/artifactiq" target="blank"
            ><v-btn icon="mdi-facebook" size="medium"></v-btn
          ></a>
          <a href="https://www.instagram.com/artifact.iq" target="blank"
            ><v-btn icon="mdi-instagram" size="medium" class="mx-2"></v-btn
          ></a>
        </div>
      </v-col>
    </v-row>
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
