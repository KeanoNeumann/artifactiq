// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const lightTheme = {
  dark: false,
  colors: {
    primary: "#137dc5",
    secondary: "#f7fbfc",
    lighter: "#2199ea",
    darker: "#0f5f96",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: "lightTheme",
      themes: {
        lightTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
