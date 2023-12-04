<template>
  <div class="container min-h-screen flex flex-col">
    <div class="flex-grow grid grid-cols-1 md:grid-cols-3 md:pt-4">
      <div class="md:col-span-2 w-full text-left">
        <div class="flex-grow">
          <h1 class="text-3xl lg:text-5xl font-semibold select-none pt-4">
            Hej, I'm Erik
          </h1>
          <p class="text-xl pt-1">
            I build (web)apps, with a focus on modern web technologies,
            interactivity, media and real time performance.
          </p>
        </div>
      </div>
      <div class="md:col-span-1"></div>
      <div class="md:col-span-3 flex-grow text-center">
        <div
          class="main-logo-fx"
          :class="[extraEffect]"
          @click="addRandomEffect"
        >
          <pre class="text-xl flicker-slow">
              {{ letters[currentLetterIndex] }}
          </pre>
        </div>
      </div>
      <div class="md:col-span-3 w-full flex flex-col px-2 justify-end">
        <div class="text-left md:text-right pt-4 pb-4 md:pt-0 md:pb-0">
          <div class="text-right pb-2">
            <a
              href="https://github.com/eriknygren"
              target="_blank"
              title="Github profile"
            >
              <img
                class="inline"
                src="/external/GitHub-Mark-32px.png"
                alt="Github"
              />
            </a>
          </div>
          <span class="select-none font-semibold">contact: </span>
          <code>hello@eriknygren.dev</code>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div>
        <h3
          class="text-2xl select-none pb-4 pt-4 md:pt-0 border-t border-black md:border-0"
        >
          SELECTED WORK
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 w-full">
        <div v-for="(entry, index) in portfolio" :key="`entry-${index}`">
          <portfolio-card
            class="flex-grow"
            :article="entry"
            :grayscale="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { letters } from '@/constants/ascii_art'

useHead({
  bodyAttrs: {
    class: 'pink-mode',
  },
})

const { data: portfolio } = await useAsyncData('portfolio', () => {
  return queryContent<PortfolioArticle>('portfolio')
    .sort({ importance: -1 })
    .find()
})

const extraEffects = ['sine', 'forward', 'quick', 'rewind', '']

const addRandomEffect = () => {
  let newFx = extraEffect.value
  while (newFx === extraEffect.value) {
    // sample a new fx, but not the existing one ^
    newFx = extraEffects[Math.floor(Math.random() * extraEffects.length)]
  }
  extraEffect.value = newFx
}

const extraEffect = ref('')

const currentLetterIndex = ref(0)
setInterval(() => {
  if (currentLetterIndex.value === letters.length - 1) {
    currentLetterIndex.value = 0
  } else {
    currentLetterIndex.value += 1
  }
}, 3000)
</script>
