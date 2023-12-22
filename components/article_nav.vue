<template>
  <div class="article-nav pl-4 pt-4">
    <div>
      <NuxtLink class="font-semibold hover:underline" to="/">
        &lt;&lt; Back
      </NuxtLink>
    </div>
    <h3 class="font-semibold text-black/80 select-none pt-2">
      TABLE OF CONTENTS
    </h3>
    <ul>
      <li
        v-for="link of toc.links"
        :key="link.id"
        class="pt-1 pb-1"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink class="hover:underline text-black/75" :to="`#${link.id}`">{{
          link.text
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import type { Toc } from '@nuxt/content/dist/runtime/types'

defineProps<{
  toc: Toc
}>()
</script>
