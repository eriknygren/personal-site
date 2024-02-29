<template>
  <div class="p-8">
    <NuxtLink class="font-semibold hover:underline" to="/">
      &lt;&lt; Back
    </NuxtLink>
    <h1 class="pt-4 text-2xl font-bold">All posts</h1>
    <ContentList v-slot="{ list }" :query="query">
      <div v-for="article in list" :key="article._path">
        <h2 class="pt-4 text-xl">
          <NuxtLink class="hover:underline italic" :to="article._path">
            {{ article.date }}:
            <span class="font-semibold">{{ article.title }}</span> >>
          </NuxtLink>
        </h2>
      </div>
    </ContentList>
    <div class="md:hidden pt-4">
      <NuxtLink class="font-semibold hover:underline" to="/">
        &lt;&lt; Back
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

useHead({
  bodyAttrs: {
    class: 'pink-mode',
  },
})

const query: QueryBuilderParams = {
  path: '/posts',
  where: [{ hidden: { $ne: true } }],
  sort: [{ timestamp: -1, $numeric: true }],
}
</script>
