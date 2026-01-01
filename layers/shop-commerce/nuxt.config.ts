/// <reference types="nuxt" />

export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],

  supabase: {
    types: false,
    redirect: false
  }
})