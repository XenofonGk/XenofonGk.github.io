import Link from 'next/link'
import Callout from '@/components/Callout'
import Footer from '@/components/Footer'
import ProjectRecord from '@/components/ProjectRecord'
import { archivedWork, engineeringWork } from '@/lib/portfolio'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Engineering work',
  'Developer tools, full-stack prototypes, a home server and compiled C and C++ demonstrations, with source, evidence and limitations.',
  '/projects',
)

export default function Projects() {
  return (
    <>
      <div className="shell">
        <section className="page-intro">
          <Callout n="00" note={`${engineeringWork.length} sheets`}>
            Engineering / Drawing set
          </Callout>
          <h1>
            Work you can <em>look inside.</em>
          </h1>
          <p>
            Tools that ask better questions, applications shaped by real
            workflows, a server I run myself, and native code brought to the
            browser. Each sheet states its current scope and limitations.
          </p>
          <Link href="/websites" className="text-link">
            Looking for client websites? <span aria-hidden="true">→</span>
          </Link>
        </section>
        <section aria-label="Engineering projects">
          {engineeringWork.map((p, i) => (
            <ProjectRecord
              headingLevel={2}
              project={p}
              index={i}
              key={p.id}
              withDemo
            />
          ))}
        </section>
        {archivedWork.length > 0 && (
          <section className="section" aria-labelledby="archive-title">
            <Callout n="99">Archive</Callout>
            <h2 id="archive-title">Other explorations.</h2>
            {archivedWork.map((p) => (
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
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </article>
            ))}
          </section>
        )}
      </div>
      <Footer sheet="A-10 / Engineering work" />
    </>
  )
}
