<template>
  <div class="portfolio-card h-60">
    <NuxtLink :to="article._path" :title="article.description">
      <div>
        <div class="portfolio-image-wrapper">
          <img
            class="img"
            :class="{ 'img-grayscale': grayscale }"
            :src="`/logos/${article.img}`"
          />
        </div>
        <p class="portfolio-label">{{ article.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  article: PortfolioArticle
  grayscale?: boolean
}>()
</script>
