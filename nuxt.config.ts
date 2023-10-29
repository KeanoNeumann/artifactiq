// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@bg-dev/nuxt-s3",
    "@sidebase/nuxt-auth",
    "@unlok-co/nuxt-stripe",
    "nuxt-mail",
    "@nuxtjs/tailwindcss",
  ],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  s3: {
    client: {
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    }, // S3 client config from @aws-sdk/client-s3
    bucket: "artifactiq", // Default bucket
    publicBucketUrl: "", // Url for shared bucket
    image: {
      compression: {
        maxSizeMB: 1,
        maxWidthOrHeight: 1000,
      },
    },
    cacheControl: "", // Cache-Control response header on Object Read endpoint
  },
  stripe: {
    // Server
    server: {
      key: "sk_test_51Ntp8KDYxg98N8uOvQeN4kP5CIhE7fpx9PSuZLFQ4imOQQIbKZ0QSQXxefhfpzdqFUIO3ypjVtYOA38PiaCRj61u00EKCg8Utf",
      options: {
        // your api options override for stripe server side
        // apiVersion: "2022-11-15", // optional, default is '2022-11-15'
      },
      // CLIENT
    },
    client: {
      key: "pk_test_51Ntp8KDYxg98N8uOPaj9vIf0WIn1S9sXIoKxmwqBxG7f4PKJo3p9EnsBI0zQi4Y7bhwiP9LykbMR2XSII1hFamED00GcGWB4Xr",
      // your api options override for stripe client side
      options: {},
    },
  },
  pwa: {
    manifest: {
      name: "Nuxt 3 PWA",
      short_name: "Nuxt 3 PWA",
      description: "Testapp for Nuxt 3 PWA plugin",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  mail: {
    message: {
      to: "info@newdot.digital",
    },
    smtp: {
      host: "email-smtp.eu-central-1.amazonaws.com",
      port: 587,
      auth: {
        user: "AKIA6OAZNEBJRXCATTHW",
        pass: "BNN3689ms4OY4FXffYJUpVIXS1ZwTpWeth7UWbHvzbYW",
      },
    },
  },
});
