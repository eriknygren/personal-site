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
          v-for="link of toc.links"
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
        <article
          class="content-article prose sm:prose lg:prose-lg xl:prose-2xl"
        >
          <ContentRenderer :value="article" />
        </article>
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
          <portfolio-card
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
<script setup>
const { page: article, toc } = reactive(useContent())
const portfolioArticles = reactive(
  await queryContent('portfolio').sort({ importance: -1 }).limit(3).find()
)

const relatedArticles = computed(() => {
  if (article._path === undefined) return []
  if (!portfolioArticles) return []

  return portfolioArticles.filter((a) => a._path !== article._path)
})
</script>