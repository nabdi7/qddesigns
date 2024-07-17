import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.qualitydesigns.site/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.qualitydesigns.site/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
        url: 'https://www.qualitydesigns.site/pricing',
        lastModified: new Date(),
        priority: 0.6,
      },
    {
      url: 'https://www.qualitydesigns.site/services',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
        url: 'https://www.qualitydesigns.site/projects',
        lastModified: new Date(),
        priority: 0.5,
      },
    {
      url: 'https://www.qualitydesigns.site/contact',
      lastModified: new Date(),
      priority: 0.5,
    },
  ]
}