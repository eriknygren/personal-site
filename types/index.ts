import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

export {}
declare global {
  interface PortfolioArticle extends MarkdownParsedContent {
    title: string
    description: string
    img: string
  }
  interface PortfolioPost extends MarkdownParsedContent {
    title: string
    description: string
  }
}
