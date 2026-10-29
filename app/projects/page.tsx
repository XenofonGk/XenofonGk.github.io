import Link from 'next/link'
import Footer from '@/components/Footer'
import ProjectRecord from '@/components/ProjectRecord'
import DemoPanel from '@/components/DemoPanel'
import { portfolio } from '@/lib/portfolio'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata(
  'Engineering work',
  'Developer tools, full-stack prototypes and compiled C++ demonstrations, with source, evidence and limitations.',
  '/projects',
)
export default function Projects() {
  const order = ['ai-eng', 'kykloc', 'aoda-scan', 'arenacore', 'agentmesh']
  const projects = portfolio.projects
    .filter(
      (p) =>
        p.category === 'engineering' &&
        !['archive', 'hold'].includes(p.placement),
    )
    .sort((a, b) => {
      const ai = order.indexOf(a.id),
        bi = order.indexOf(b.id)
      return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi)
    })
  const archive = portfolio.projects.filter(
    (p) => p.placement === 'archive' || p.placement === 'hold',
  )
  return (
    <>
      <div className="shell">
        <section className="page-intro">
          <p className="eyebrow">Engineering / Selected projects</p>
          <h1>
            Work you can
            <br />
            <span>look inside.</span>
          </h1>
          <p>
            Tools that ask better questions, applications shaped by real
            workflows, and native code brought to the browser. Each project
            carries its current scope and limitations.
          </p>
          <Link href="/websites" className="text-link">
            Looking for client websites? →
          </Link>
        </section>
        <section aria-label="Engineering projects">
          {projects.map((p, i) => (
            <div key={p.id}>
              <ProjectRecord headingLevel={2} project={p} index={i} />
              {p.id === 'arenacore' && (
                <div className="inline-demo">
                  <DemoPanel demo="arenacore" label="Launch ArenaCore" />
                </div>
              )}
            </div>
          ))}
        </section>
        {archive.length > 0 && (
          <section className="section">
            <p className="eyebrow">Archive / Earlier work</p>
            <h2>Other explorations.</h2>
            {archive.map((p) => (
              <article className="archive-item" key={p.id}>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span>
                  {p.placement === 'hold'
                    ? 'Supporting placement pending verification.'
                    : 'Archived project.'}
                </span>
                {p.links.map((l) => (
                  <a href={l.url} key={l.url}>
                    {l.label} ↗
                  </a>
                ))}
              </article>
            ))}
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}
