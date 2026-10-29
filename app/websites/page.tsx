import Image from 'next/image'
import Link from 'next/link'
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
          <p className="eyebrow">For businesses / Design & development</p>
          <h1>
            Your business.
            <br />
            <span>Clearly online.</span>
          </h1>
          <p>
            A website should make your work easy to understand and your business
            easy to contact. I design and build it with you, from the first
            conversation to the handover.
          </p>
          <div className="actions">
            <a className="button" href={mailto('A website for my business')}>
              Tell me about your website ↗
            </a>
            <a className="button secondary" href="#websites">
              See the work ↓
            </a>
          </div>
        </section>
        <section
          id="websites"
          className="section gallery-section"
          aria-labelledby="gallery-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Client websites</p>
              <h2 id="gallery-title">
                Real businesses.
                <br />
                Their own identity.
              </h2>
            </div>
            <p>Stationary previews. Take your time.</p>
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
                    0{i + 1} /{' '}
                    {s.status === 'in-progress' ? 'In development' : 'Website'}
                  </span>
                  <h3>
                    <a href={s.url}>{s.name} ↗</a>
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
                        Read case study →
                      </Link>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section" aria-labelledby="packages">
          <p className="eyebrow">02 / Scope & ownership</p>
          <div className="section-heading">
            <h2 id="packages">
              A clear place
              <br />
              to start.
            </h2>
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
                  Ask for a quote ↗
                </a>
              </article>
            ))}
          </div>
        </section>
        <section className="section">
          <p className="eyebrow">03 / The process</p>
          <h2>
            One person.
            <br />
            From brief to handover.
          </h2>
          <ol className="process-grid">
            {process.map((p, i) => (
              <li key={p.title}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="section">
          <p className="eyebrow">04 / Useful to know</p>
          <h2>Before we start.</h2>
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
      />
    </>
  )
}
