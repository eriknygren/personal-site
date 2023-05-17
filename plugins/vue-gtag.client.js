import VueGtag, { trackRouter } from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    enabled: process.env.NODE_ENV === 'production',
    property: {
      id: 'G-363DMVGGTX',
    },
  })
  trackRouter(useRouter())
})
