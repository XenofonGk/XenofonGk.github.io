import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { ProjectMedia } from '@/components/ProjectRecord'
import { portfolio } from '@/lib/portfolio'
import { pageMetadata } from '@/lib/metadata'
const caseStudies = portfolio.projects.filter((p) => p.caseStudy !== null)
export const dynamicParams = false
export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }))
}
type Props = { params: Promise<{ slug: string }> }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const p = caseStudies.find((p) => p.slug === slug)
  return p ? pageMetadata(p.title, p.summary, `/projects/${p.slug}`) : {}
}
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const p = caseStudies.find((p) => p.slug === slug)
  if (!p?.caseStudy) notFound()
  const c = p.caseStudy
  return (
    <>
      <article className="shell case-study">
        <div className="page-intro">
          <Link href="/projects" className="eyebrow">
            ← Back to work
          </Link>
          <p className="eyebrow case-kicker">
            Case study / {p.status.replaceAll('-', ' ')}
          </p>
          <h1>{p.title}</h1>
          <p>{p.summary}</p>
          <dl className="case-facts">
            <div>
              <dt>Responsibility</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{p.stack.join(' / ')}</dd>
            </div>
          </dl>
          <div className="link-row">
            {p.links.map((l) => (
              <a href={l.url} key={l.url}>
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
        {p.media.map((m, i) => (
          <figure
            className={`case-media ${m.height > m.width ? 'case-media-portrait' : ''}`}
            key={m.src}
          >
            <ProjectMedia media={m} priority={i === 0} />
            <figcaption>
              <span>
                {p.title} / {m.type === 'image' ? 'Screenshot' : 'Recording'}{' '}
                {i + 1}
              </span>
              <span>Actual project capture</span>
            </figcaption>
          </figure>
        ))}
        <div className="case-body">
          <section>
            <p className="eyebrow">01 / The problem</p>
            <h2>What needed to change.</h2>
            <p>{c.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 / Constraints</p>
            <h2>The boundaries of the work.</h2>
            <ul>
              {c.constraints.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>
          <section>
            <p className="eyebrow">03 / Technical decisions</p>
            <h2>Choices and tradeoffs.</h2>
            {c.decisions.map((d) => (
              <div className="decision" key={d.choice}>
                <h3>{d.choice}</h3>
                <p>{d.reason}</p>
                <p className="alternative">
                  Alternative considered: {d.alternative}
                </p>
              </div>
            ))}
          </section>
          <section>
            <p className="eyebrow">04 / Verification</p>
            <h2>What the evidence supports.</h2>
            <p>{c.verification}</p>
            {p.evidence.map((e) => (
              <div className="evidence-item" key={e.claim}>
                <h3>{e.claim}</h3>
                <p>{e.scope}</p>
                <p className="eyebrow">
                  {e.basis.replaceAll('-', ' ')}
                  {e.checkedAt ? ` / Checked ${e.checkedAt}` : ''}
                </p>
                {e.url && <a href={e.url}>{e.label} ↗</a>}
              </div>
            ))}
          </section>
          <section>
            <p className="eyebrow">05 / Limitations</p>
            <h2>Where the work stands.</h2>
            <ul>
              {c.limitations.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
      <Footer />
    </>
  )
}
