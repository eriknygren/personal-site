<template>
  <div class="container">
    <div>
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
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
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
