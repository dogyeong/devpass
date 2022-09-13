import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  typescript: {
    strict: true,
  },
  modules: ['@nuxt/content', '@nuxtjs/robots'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
