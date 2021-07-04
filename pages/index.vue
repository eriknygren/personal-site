<template>
  <div class="container">
    <div>
      <h1 class="text-3xl">Erik perik nygrenerik</h1>
      <ul>
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="{ name: 'portfolio-slug', params: { slug: article.slug } }"
          >
            <div>
              <h2 class="font-bold">{{ article.title }}</h2>
              <p>{{ article.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('portfolio')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles,
    }
  },
}
</script>
