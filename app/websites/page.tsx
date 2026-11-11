import Image from 'next/image'
import Link from 'next/link'
import Callout from '@/components/Callout'
import Footer from '@/components/Footer'
import { clientSites, mailto, packages, process, faq } from '@/lib/site'
import { portfolio } from '@/lib/portfolio'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata(
  'Websites for small businesses',
  'Real websites, clear delivery scope and quote-based packages. Work directly with the developer building your website.',
  '/websites',
)
export default function Websites() {
  return (
    <>
      <div className="shell">
        <section className="page-intro">
          <Callout n="00" note="Quote-based">
            For businesses / Design & development
          </Callout>
          <h1>
            Your business. <em>Clearly online.</em>
          </h1>
          <p>
            A website should make your work easy to understand and your business
            easy to contact. I design and build it with you, from the first
            conversation to the handover.
          </p>
          <div className="actions">
            <a className="button" href={mailto('A website for my business')}>
              Tell me about your website <span aria-hidden="true">↗</span>
            </a>
            <a className="button secondary" href="#websites">
              See the work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="websites"
          className="section gallery-section"
          aria-labelledby="gallery-title"
        >
          <Callout n="01">Client websites</Callout>
          <div className="section-heading">
            <h2 id="gallery-title">Real businesses. Their own identity.</h2>
            <p>Each one links to the real site.</p>
          </div>
          <div className="website-gallery">
            {clientSites.map((s, i) => (
              <article
                className={`website-item ${s.image ? '' : 'website-text-only'}`}
                key={s.url}
              >
                {s.image && (
                  <a href={s.url} aria-label={`Visit ${s.name}`}>
                    <Image
                      src={s.image}
                      alt={`${s.name} website homepage`}
                      width={s.imageWidth ?? 800}
                      height={s.imageHeight ?? 499}
                      sizes="(max-width: 700px) 92vw, 50vw"
                      className="work-image"
                    />
                  </a>
                )}
                <div className="website-caption">
                  <span className="eyebrow">
                    Sheet 0{i + 1} /{' '}
                    {s.status === 'in-progress' ? 'In development' : 'Website'}
                  </span>
                  <h3>
                    <a href={s.url}>
                      {s.name} <span aria-hidden="true">↗</span>
                    </a>
                  </h3>
                  <p>{s.summary}</p>
                  <p className="eyebrow">{s.domain}</p>
                  {portfolio.projects
                    .filter(
                      (p) =>
                        p.category === 'client' &&
                        p.caseStudy &&
                        p.links.some((l) => l.url === s.url),
                    )
                    .slice(0, 1)
                    .map((p) => (
                      <Link
                        className="text-link"
                        href={`/projects/${p.slug}`}
                        key={p.id}
                      >
                        Read case study <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section" aria-labelledby="packages">
          <Callout n="02">Scope & ownership</Callout>
          <div className="section-heading">
            <h2 id="packages">A clear place to start.</h2>
            <p>
              Every project gets its own quote. We agree the scope before the
              build starts.
            </p>
          </div>
          <div className="package-grid">
            {packages.map((p) => (
              <article key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.for}</p>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <a className="text-link" href={mailto(`Quote: ${p.name}`)}>
                  Ask for a quote <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="section" aria-labelledby="process-title">
          <Callout n="03">The process</Callout>
          <h2 id="process-title">One person. From brief to handover.</h2>
          <ol className="process-grid">
            {process.map((p, i) => (
              <li key={p.title}>
                <span className="eyebrow">Stage 0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="section" aria-labelledby="faq-title">
          <Callout n="04">Useful to know</Callout>
          <h2 id="faq-title">Before we start.</h2>
          <dl className="faq">
            {faq.map((f) => (
              <div key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
      <Footer
        heading="A website that feels like your business."
        sub="Tell me what you do and what the website needs to do."
        subject="A website for my business"
        sheet="B-00 / Websites"
      />
    </>
  )
}
