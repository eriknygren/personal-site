<template>
  <div>
    <div class="article-nav pl-4 pt-4">
      <div>
        <NuxtLink class="font-semibold hover:underline" to="/">
          &lt;&lt; Back
        </NuxtLink>
      </div>
      <h3 class="font-semibold select-none pt-2">TABLE OF CONTENTS</h3>
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          class="pt-1 pb-1"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
        >
          <NuxtLink class="hover:underline" :to="`#${link.id}`">{{
            link.text
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="container pt-4 pb-4">
      <article class="article">
        <div class="md:hidden">
          <NuxtLink class="font-semibold hover:underline" to="/">
            &lt;&lt; Back
          </NuxtLink>
        </div>
        <nuxt-content
          class="prose sm:prose lg:prose-lg xl:prose-2xl"
          :document="article"
        />
        <div class="pt-4">
          <NuxtLink class="font-semibold hover:underline" to="/">
            &lt;&lt; Back
          </NuxtLink>
        </div>
      </article>
    </div>
    <div class="container h-auto min-h-0">
      <div class="w-2/3 flex flex-col">
        <div><h3 class="text-2xl select-none pb-4 pt-4">MORE WORK</h3></div>
        <div class="grid grid-cols-1 md:grid-cols-2 w-full">
          <PortfolioEntry
            v-for="related of relatedArticles"
            :key="related.slug"
            class="flex-grow"
            :article="related"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import reject from 'lodash/reject'
import take from 'lodash/take'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('portfolio', params.slug).fetch()

    const relatedArticles = await $content('portfolio')
      .only(['title', 'description', 'slug', 'importance', 'img'])
      .limit(3)
      .fetch()
    return {
      article,
      relatedArticles: take(
        reject(relatedArticles, (ra) => ra.slug === article.slug),
        2
      ),
    }
  },
  head() {
    const title = `Portfolio: ${this.article.title}`
    const description = `Erik's portfolio, working on ${this.article.description}`
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: title,
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.$config.baseURL}/logos/${this.article.img}`,
        },
      ],
    }
  },
}
</script>
