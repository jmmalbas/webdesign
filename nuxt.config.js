// https://nuxt.com/docs/api/configuration/nuxt-config
/* export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },

}); */

// https://nuxt.com/docs/api/configuration-nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/supabase"],
  supabase: {
    redirect: false,
  },
  router: {
    base: '/', // Set the base path of your app
  },
  components: true,
});
