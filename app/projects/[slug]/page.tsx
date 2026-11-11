import Link from 'next/link'
import { notFound } from 'next/navigation'
import Callout from '@/components/Callout'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ProjectMedia from '@/components/ProjectMedia'
import StatusStamp from '@/components/StatusStamp'
import { basisLabel, caseStudies, projectPath } from '@/lib/portfolio'
import { pageMetadata } from '@/lib/metadata'
import { caseStudyLd } from '@/lib/structured-data'

export const dynamicParams = false
export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }))
}
type Props = { params: Promise<{ slug: string }> }
const find = (slug: string) => caseStudies.find((p) => p.slug === slug)

export async function generateMetadata({ params }: Props) {
  const p = find((await params).slug)
  return p ? pageMetadata(p.title, p.summary, projectPath(p)) : {}
}

export default async function CaseStudyPage({ params }: Props) {
  const p = find((await params).slug)
  if (!p?.caseStudy) notFound()
  const c = p.caseStudy
  const sheet = String(caseStudies.indexOf(p) + 1).padStart(2, '0')
  return (
    <>
      <JsonLd data={caseStudyLd(p)} />
      <article className="shell case-study">
        <header className="page-intro">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/projects">
              <span aria-hidden="true">←</span> Engineering work
            </Link>
          </nav>
          <Callout n={sheet} note={<StatusStamp status={p.status} />}>
            Case study /{' '}
            {p.category === 'client' ? 'Client website' : 'Engineering'}
          </Callout>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
          <dl className="title-block case-facts">
            <div>
              <dt>Responsibility</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{p.stack.join(' / ')}</dd>
            </div>
            <div>
              <dt>Open</dt>
              <dd>
                {p.links.map((l) => (
                  <a href={l.url} key={l.url}>
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </header>
        <div className="case-media-set">
          {p.media.map((m, i) => (
            <figure
              className={`case-media ${m.height > m.width ? 'case-media-portrait' : ''}`}
              key={m.src}
            >
              <ProjectMedia
                media={m}
                priority={i === 0}
                sizes={
                  m.height > m.width
                    ? '(max-width: 700px) 92vw, 430px'
                    : '(max-width: 1320px) 92vw, 1240px'
                }
              />
              <figcaption>
                <span>
                  Fig. {i + 1} / {p.title}
                </span>
                <span>
                  {m.type === 'image' ? 'Screenshot' : 'Recording'} of the
                  actual project
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="case-body">
          <section aria-labelledby="problem">
            <Callout n="01">The problem</Callout>
            <h2 id="problem">What needed to change.</h2>
            <p>{c.problem}</p>
          </section>
          <section aria-labelledby="constraints">
            <Callout n="02">Constraints</Callout>
            <h2 id="constraints">The boundaries of the work.</h2>
            <ul>
              {c.constraints.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="decisions">
            <Callout n="03">Technical decisions</Callout>
            <h2 id="decisions">Choices and tradeoffs.</h2>
            {c.decisions.map((d) => (
              <div className="decision" key={d.choice}>
                <h3>{d.choice}</h3>
                <p>{d.reason}</p>
                <p className="alternative">
                  <span className="eyebrow">Alternative considered</span>{' '}
                  {d.alternative}
                </p>
              </div>
            ))}
          </section>
          <section aria-labelledby="verification">
            <Callout n="04">Verification</Callout>
            <h2 id="verification">What the evidence supports.</h2>
            <p>{c.verification}</p>
            {p.evidence.map((e) => (
              <div className="evidence-item" key={e.claim}>
                <p className="eyebrow">
                  {basisLabel(e.basis)}
                  {e.checkedAt ? ` / Checked ${e.checkedAt}` : ''}
                </p>
                <h3>{e.claim}</h3>
                <p>{e.scope}</p>
                {e.url && (
                  <a href={e.url}>
                    {e.label} <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            ))}
          </section>
          <section aria-labelledby="limitations">
            <Callout n="05">Limitations</Callout>
            <h2 id="limitations">Where the work stands.</h2>
            <ul>
              {c.limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>
          <Link className="text-link" href="/projects">
            <span aria-hidden="true">←</span> Back to all engineering work
          </Link>
        </div>
      </article>
      <Footer sheet={`C-${sheet} / ${p.title}`} />
    </>
  )
}
