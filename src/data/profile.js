/*
 * Bio, work history, skills and contact details.
 * Edit these arrays to update the About and Contact pages.
 */

export const profile = {
  name: 'Xenofon Gkioka',
  role: 'Software Engineer',
  location: 'Toronto, CA / Copenhagen, DK',
  email: 'ksenofwn58@gmail.com',
  github: 'https://github.com/XenofonGk',
  linkedin: 'https://linkedin.com/in/xenofongkioka',
}

export const specs = [
  ['Based', 'Toronto / Copenhagen'],
  ['Focus', 'Full-Stack — React, C#/.NET'],
  ['Current', 'SWE Intern, Mercell'],
  ['Education', 'Seneca Polytechnic'],
  ['Languages', 'Greek, English'],
  ['Status', 'CA PR · EU Citizen'],
]

export const jobs = [
  {
    title: 'Software Engineer Intern',
    co: 'Mercell',
    date: 'Jun 2026 – Present',
    bullets: [
      'Built a document library and a shared file-uploader component in React and TypeScript, both shipped to production for platform users.',
      'Resolved accessibility violations across key user flows, bringing them into WCAG compliance.',
      'Delivered features in a fast-paced Agile environment — daily stand-ups, sprint planning, backlog refinement, PI planning.',
    ],
  },
  {
    title: 'Junior Backend Developer',
    co: 'Spinworks',
    date: 'Aug 2021 – Aug 2022',
    bullets: [
      'Built and maintained B2B e-commerce platforms using PHP, Symfony, and OroCommerce.',
      'Rewrote slow database queries impacting page load on high-traffic storefronts.',
      'Ran code reviews and integration testing in a Git-based workflow before production deploys.',
    ],
  },
  {
    title: 'Site Supervisor',
    co: 'CanEra Homes',
    date: 'Sep 2022 – May 2026',
    bullets: [
      'Promoted from crew member to supervisor; led crews and coordinated timelines under strict deadlines.',
      'Managed on-site conflict resolution and resource allocation in high-pressure environments.',
    ],
  },
  {
    title: 'Campus Coordinator',
    co: 'Seneca Student Federation',
    date: 'Feb 2026 – Present',
    bullets: [
      'Elected to represent the student body at Newnham Campus, liaising between students, SSF, and administration.',
    ],
  },
]

export const skills = [
  { name: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'PHP', 'C', 'C++'] },
  { name: 'Frameworks', items: ['ASP.NET Core MVC', 'EF Core', 'React', 'Symfony', 'OroCommerce'] },
  { name: 'Data & Infra', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Docker', 'Git'] },
  { name: 'Practice', items: ['OOP Design', 'Agile / Scrum', 'Relational DB Design', 'WCAG / a11y'] },
]
