<template>
  <div class="container">
    <div>
      <h1 class="title">erik-personal-site</h1>
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    // fetch our article here
    const article = await $content('hello').fetch()
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
