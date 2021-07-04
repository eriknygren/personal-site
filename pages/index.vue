<template>
  <div class="container flex flex-col">
    <div class="flex-grow grid grid-cols-1 md:grid-cols-3 md:pt-4">
      <div class="md:col-span-2 w-full">
        <img
          class="splash-img mx-auto"
          src="https://picsum.photos/800/600?grayscale"
        />
      </div>
      <div class="md:col-span-1 w-full text-left flex flex-col">
        <div class="flex-grow">
          <h1 class="text-5xl font-semibold">Hej, I'm Erik</h1>
          <p class="text-2xl pt-4">
            I build (web)apps, with a focus on
            <span class="color-loop-1">modern web technologies</span>,
            <span class="color-loop-2">interactivity</span>,
            <span class="color-loop-3">media</span> and
            <span class="color-loop-4">real time performance</span>.
          </p>
        </div>
        <div class="md:text-right pt-4 pb-4 md:pt-0 md:pb-0">
          <span class="select-none font-semibold">contact: </span
          ><code>hello@eriknygren.dev</code>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col flex-grow">
      <div><h3 class="text-2xl select-none pb-4 pt-4">SELECTED WORK</h3></div>
      <div
        v-for="(articles, index) in articleRows"
        :key="index"
        class="grid grid-cols-1 md:grid-cols-3 w-full"
      >
        <PortfolioEntry
          v-for="article of articles"
          :key="article.slug"
          class="flex-grow"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>
<script>
import chunk from 'lodash/chunk'
import PortfolioEntry from '@/components/PortfolioEntry.vue'

export default {
  components: [PortfolioEntry],
  async asyncData({ $content }) {
    const articles = await $content('portfolio')
      .only(['title', 'description', 'slug', 'importance', 'img'])
      .sortBy('importance', 'desc')
      .fetch()
    return {
      articles,
    }
  },
  computed: {
    articleRows() {
      return chunk(this.articles, 3)
    },
  },
}
</script>
