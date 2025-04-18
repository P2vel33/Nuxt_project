// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "usebootstrap",
    "nuxt-nodemailer",
    // [
    //   "nuxt-mail",
    //   {
    //     message: {
    //       to: "vespoladra@gufum.com",
    //     },
    //     smtp: {
    //       host: "fudromomla@gufum.com",
    //       port: 587,
    //     },
    //   },
    // ],
  ],
  nodemailer: {
    from: '"John Doe" <garrick.becker@ethereal.email>',
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "garrick.becker@ethereal.email",
      pass: "hR2m6MTsEwQWbqKkMy",
    },
  },
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
