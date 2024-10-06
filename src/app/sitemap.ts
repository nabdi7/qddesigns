import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.qdwebdesigns.com/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.qdwebdesigns.com/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
        url: 'https://www.qdwebdesigns.com/pricing',
        lastModified: new Date(),
        priority: 0.6,
      },
    {
      url: 'https://www.qdwebdesigns.com/services',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
        url: 'https://www.qdwebdesigns.com/projects',
        lastModified: new Date(),
        priority: 0.5,
      },
    {
      url: 'https://www.qdwebdesigns.com/contact',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}