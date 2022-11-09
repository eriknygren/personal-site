<template>
  <div>
    <div>gday</div>
    <div v-if="portfolio">
      <div v-for="(entry, index) in portfolio" :key="`entry-${index}`">
        <portfolio-card :article="entry" />
      </div>
    </div>
  </div>
</template>
<script setup>
const portfolio = ref(
  await queryContent('portfolio').sort({ importance: -1 }).find()
)
</script>
