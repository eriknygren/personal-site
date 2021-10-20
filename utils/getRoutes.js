export default async () => {
  const { $content } = require('@nuxt/content')
  const articles = await $content('portfolio')
    .only(['slug'])
    .sortBy('importance', 'desc')
    .fetch()

  return articles.map((file) => `/portfolio/${file.slug}/`)
}
