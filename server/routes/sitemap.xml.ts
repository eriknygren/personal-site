import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const url = process.env.BASE_URL || 'http://localhost:3000'
  const sitemap = new SitemapStream({
    hostname: url,
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    })
  }
  sitemap.write({
    url: `${url}/posts`,
    changefreq: 'monthly',
  })
  sitemap.end()

  return streamToPromise(sitemap)
})
