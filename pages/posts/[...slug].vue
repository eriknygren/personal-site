<template>
  <div>
    <article-nav :toc="toc" />
    <div class="container pt-4 pb-4">
      <article class="article">
        <div class="md:hidden">
          <NuxtLink class="font-semibold hover:underline" to="/">
            &lt;&lt; Back
          </NuxtLink>
        </div>
        <article
          class="content-article prose sm:prose lg:prose-lg xl:prose-2xl"
        >
          <ContentRenderer :value="article" />
        </article>
        <div class="pt-4 text-center">
          <span class="select-none italic">
            Any questions/comments/suggestions? Feel free to get in touch via:
          </span>
          <code class="font-semibold">hello@eriknygren.dev</code>
        </div>
        <div class="pt-4 flex">
          <NuxtLink class="font-semibold hover:underline flex-1" to="/">
            &lt;&lt; Back
          </NuxtLink>
          <NuxtLink
            class="font-semibold hover:underline flex-1 text-right"
            to="/posts"
          >
            More posts &gt;&gt;
          </NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { page: article, toc } = useContent()
const title = article.value.title
const description = article.value.description
useHead({
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
  ],
})
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0)
})
</script>
