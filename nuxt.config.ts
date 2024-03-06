export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  css: [
    "./assets/css/styles.css"
  ],
  i18n: {
    defaultLocale: "en",
    strategy: "prefix_and_default",
    langDir: "i18n/",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "French",
        file: "fr.json",
      },
    ],
  },
  router: {
    routes: [
      {
        path: "/",
        component: "~/pages/index.vue",
      },
      {
        path: "/contact",
        component: "~/pages/contact.vue",
      },
      {
        path: "/about",
        component: "~/pages/about.vue",
      },
    ],
  },
});
