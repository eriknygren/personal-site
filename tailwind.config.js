module.exports = {
  plugins: [require('@tailwindcss/typography')],
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`,
      'content/**/**.md',
    ],
  },
}
