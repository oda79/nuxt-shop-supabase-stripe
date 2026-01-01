/// <reference types="nuxt" />
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  srcDir: 'app',
  extends: ['./layers/base', './layers/shop-commerce'],
  alias: {
    // stable aliases to layers
    '@base': fileURLToPath(new URL('./layers/base', import.meta.url)),
    '@commerce': fileURLToPath(new URL('./layers/shop-commerce', import.meta.url)),
  },
  dir: {
    public: fileURLToPath(new URL('./public', import.meta.url)), 
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
