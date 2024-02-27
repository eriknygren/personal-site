// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'localhost:3000',
    },
  },
  experimental: { appManifest: false },
  app: {
    head: {
      title: 'Erik Nygren: software developer - portfolio site',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Portfolio site for Erik Nygren, a web developer based in London, UK',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/logos/erikportfolio.jpg',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
      autoSubfolderIndex: false,
    },
  },
  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
})
