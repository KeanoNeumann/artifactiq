<template>
  <v-row>
    <v-col cols="2" v-if="!isMobile"> </v-col>
    <v-col cols="12" md="8">
      <iframe
        width="540"
        height="1050"
        src="https://14a7798c.sibforms.com/serve/MUIFAIAaIroeu4WPxaJZUdQaRkPLWk4hbe3RI8E19pByOb6MmxKN3Z96o9Fumg_uOsJdHBColijO0GIjGgAnBqMIlxJP9cGK6WgVp-ye2Saf-2U-ll-kyxia3EN1es73FVYw0N3az2VPbjR0x25H3Mbpa4a5OK0lRH62GE3Uz7P4gbGi-f66ccqcLtbzdYgLsDFq9RTBRIny89cY"
        frameborder="0"
        scrolling="auto"
        allowfullscreen
        style="
          display: block;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        "
      ></iframe>
    </v-col>
    <v-col cols="2" v-if="!isMobile"> </v-col>
  </v-row>
</template>

<script setup>
const { isMobile } = useDevice();
</script>

<style></style>
