<template>
  <div class="container min-h-screen flex flex-col">
    <div>gday</div>
    <div class="w-full flex flex-col flex-grow">
      <div>
        <h3
          class="text-2xl select-none pb-4 pt-4 md:pt-0 border-t border-black md:border-0"
        >
          SELECTED WORK
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 w-full">
        <div v-for="(entry, index) in portfolio" :key="`entry-${index}`">
          <portfolio-card class="flex-grow" :article="entry" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const portfolio = ref(
  await queryContent('portfolio').sort({ importance: -1 }).find()
)
</script>
