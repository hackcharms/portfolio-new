// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["~/assets/css/index.scss"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      base: {
        href: "https://hackcharms.github.io/portfolio-new/",
      },
    },
    // baseURL: "/portfolio-new/",
    buildAssetsDir: "assets",
  },
});
