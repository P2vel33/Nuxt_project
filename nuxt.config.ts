// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["usebootstrap"],
  app: {
    head: {
      title: "MyProject",
      // link:[
      //   {rel:'stylesheet',href:''}
      // ]
      meta: [{ name: "charset", content: "utf-8" }],
    },
  },
});
