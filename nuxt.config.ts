/// <reference types="nuxt" />

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', //'@nuxtjs/prisma'
    '@nuxtjs/supabase'],
    icon: {
      mode: 'svg'
    },
  css: ['@/assets/css/main.css'],
  supabase: {
    types: false,
    redirect: false
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_KEY
    }
  },
  app: {
    head: {
      title: 'Nuxt Shop with Supabase & Stripe',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A simple e-commerce shop built with Nuxt 3 with Supabase & Stripe.' }
      ],
    },
  },
})