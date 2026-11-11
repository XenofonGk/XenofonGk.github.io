import { education, site } from './site'
import { portfolio, projectPath, type PortfolioProject } from './portfolio'

const current = portfolio.experience[0]

/** schema.org Person, built only from facts already on the site. */
export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#person`,
  name: site.name,
  url: site.url,
  image: `${site.url}/xenofon.webp`,
  jobTitle: site.role,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Toronto',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  alumniOf: { '@type': 'CollegeOrUniversity', name: education.school },
  worksFor: current
    ? { '@type': 'Organization', name: current.organization }
    : undefined,
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    'TypeScript',
    'React',
    'C#',
    'ASP.NET Core',
    'PHP',
    'Symfony',
    'C',
    'C++',
    'PostgreSQL',
    'Docker',
  ],
}

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  name: site.brand,
  url: site.url,
  author: { '@id': `${site.url}/#person` },
  inLanguage: 'en',
}

export function caseStudyLd(p: PortfolioProject) {
  const url = `${site.url}${projectPath(p)}`
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: p.title,
      description: p.summary,
      url,
      author: { '@type': 'Person', name: site.name, url: site.url },
      keywords: p.stack.join(', '),
      image: p.media
        .filter((m) => m.type === 'image')
        .map((m) => `${site.url}${m.src}`),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Work',
          item: `${site.url}/projects`,
        },
        { '@type': 'ListItem', position: 3, name: p.title, item: url },
      ],
    },
  ]
}
