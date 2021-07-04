<template functional>
  <div class="portfolio-card h-60">
    <NuxtLink
      :to="{ name: 'portfolio-slug', params: { slug: props.article.slug } }"
      :title="props.article.description"
    >
      <div>
        <div class="portfolio-image-wrapper">
          <img class="img" :src="`/logos/${props.article.img}`" />
        </div>
        <p class="portfolio-label">{{ props.article.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    article: { type: Object, required: true },
  },
}
</script>
