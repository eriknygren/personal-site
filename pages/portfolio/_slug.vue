<template>
  <div class="container">
    <article class="article">
      <div>
        <NuxtLink to="/">&lt;&lt; Back</NuxtLink>
      </div>
      <nuxt-content
        class="prose sm:prose lg:prose-lg xl:prose-2xl"
        :document="article"
      />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    // fetch our article here
    const article = await $content('portfolio', params.slug).fetch()
    return { article }
  },
}
</script>
