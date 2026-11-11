import type { MetadataRoute } from 'next'
import { caseStudies, projectPath } from '@/lib/portfolio'
import { site } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/projects',
    '/websites',
    '/about',
    ...caseStudies.map(projectPath),
  ]
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : path.startsWith('/projects/') ? 0.7 : 0.8,
  }))
}
