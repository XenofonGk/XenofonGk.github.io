import Ajv from 'ajv'
import { existsSync } from 'node:fs'
import { resolve, sep } from 'node:path'
import data from '@/content/portfolio.json'
import schema from '@/content/portfolio.schema.json'

export type Evidence = {
  claim: string
  label: string
  url: string | null
  basis: 'repository-reported' | 'source-reviewed' | 'executed'
  checkedAt: string | null
  scope: string
}
export type PortfolioLink = {
  label: string
  kind: 'live' | 'code' | 'benchmark' | 'write-up'
  url: string
}
export type Media = {
  type: 'image' | 'video'
  src: string
  alt: string
  width: number
  height: number
  poster?: string
}
export type CaseStudy = {
  problem: string
  constraints: string[]
  decisions: { choice: string; alternative: string; reason: string }[]
  verification: string
  limitations: string[]
}
export type PortfolioProject = {
  id: string
  slug: string
  title: string
  summary: string
  category: 'engineering' | 'client'
  placement: 'featured' | 'supporting' | 'archive' | 'hold'
  homepageOrder: number | null
  role: string
  stack: string[]
  status: 'live' | 'prototype' | 'in-progress' | 'archived'
  links: PortfolioLink[]
  evidence: Evidence[]
  media: Media[]
  caseStudy: CaseStudy | null
  /** An in-browser WebAssembly demo shown alongside the project. */
  demo?: DemoId
}
export type DemoId = 'train-yard' | 'arenacore'
export type Experience = {
  organization: string
  role: string
  period?: string
  location?: string
  summary: string
  links?: PortfolioLink[]
}
export type Portfolio = {
  schemaVersion: 1
  projects: PortfolioProject[]
  experience: Experience[]
}

const validator = new Ajv({ allErrors: true, validateFormats: false }).compile(
  schema,
)
export function validatePortfolio(input: unknown): asserts input is Portfolio {
  if (!validator(input))
    throw new Error(
      `Invalid portfolio content: ${JSON.stringify(validator.errors)}`,
    )
  const content = input as Portfolio
  for (const field of ['id', 'slug', 'homepageOrder'] as const) {
    const values = content.projects
      .map((p) => p[field])
      .filter((v) => v !== null)
    if (new Set(values).size !== values.length)
      throw new Error(`Duplicate project ${field}`)
  }
  const publicRoot = resolve(process.cwd(), 'public')
  const asset = (src: string) => {
    const path = resolve(publicRoot, `.${src}`)
    if (!path.startsWith(publicRoot + sep) || !existsSync(path))
      throw new Error(`Missing or unsafe media: ${src}`)
  }
  const link = (url: string) => {
    if (!['https:', 'http:'].includes(new URL(url).protocol))
      throw new Error(`Unsafe evidence link: ${url}`)
  }
  for (const project of content.projects) {
    if (project.homepageOrder !== null && project.placement !== 'featured')
      throw new Error(`Homepage project must be featured: ${project.slug}`)
    project.links.forEach((l) => link(l.url))
    project.evidence.forEach((e) => {
      if (e.url) link(e.url)
    })
    project.media.forEach((m) => {
      asset(m.src)
      if (m.poster) asset(m.poster)
    })
  }
  content.experience.forEach((e) => e.links?.forEach((l) => link(l.url)))
}
validatePortfolio(data)
export const portfolio: Portfolio = data as Portfolio

/** Featured projects, in the order the home page shows them. */
export const selectedWork = portfolio.projects
  .filter((p) => p.homepageOrder !== null)
  .sort((a, b) => a.homepageOrder! - b.homepageOrder!)

/** Projects with a full write-up at /projects/[slug]. */
export const caseStudies = portfolio.projects.filter(
  (p) => p.caseStudy !== null,
)

/** Engineering work for /projects: featured first, then supporting work in
    content order. Client websites live on /websites. */
export const engineeringWork = [
  ...selectedWork.filter((p) => p.category === 'engineering'),
  ...portfolio.projects.filter(
    (p) => p.category === 'engineering' && p.placement === 'supporting',
  ),
]

export const archivedWork = portfolio.projects.filter(
  (p) => p.placement === 'archive' || p.placement === 'hold',
)

export const projectPath = (p: PortfolioProject) => `/projects/${p.slug}`

const statusLabels: Record<PortfolioProject['status'], string> = {
  live: 'Live',
  prototype: 'Prototype',
  'in-progress': 'In progress',
  archived: 'Archived',
}
export const statusLabel = (s: PortfolioProject['status']) => statusLabels[s]

const basisLabels: Record<Evidence['basis'], string> = {
  'repository-reported': 'Repository reported',
  'source-reviewed': 'Source reviewed',
  executed: 'Executed',
}
export const basisLabel = (b: Evidence['basis']) => basisLabels[b]

/** Two-digit sheet numbers, as on a drawing set: 01, 02, ... */
export const sheetNumber = (index: number) => String(index + 1).padStart(2, '0')
