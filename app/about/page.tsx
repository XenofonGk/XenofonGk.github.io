import Image from 'next/image'
import Footer from '@/components/Footer'
import { portfolio } from '@/lib/portfolio'
import { site, timeline } from '@/lib/site'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata(
  'About Xenofon',
  'From Athens to Toronto: IT support, B2B development, construction and software studies. The experience behind the work.',
  '/about',
)
export default function About() {
  return (
    <>
      <div className="shell">
        <section className="page-intro">
          <p className="eyebrow">About / Xenofon Gkioka</p>
          <h1>
            Built on
            <br />
            <span>practical experience.</span>
          </h1>
        </section>
        <section className="about-preview about-page">
          <Image
            src="/xenofon.jpg"
            alt="Xenofon Gkioka, smiling"
            width={1000}
            height={1000}
            priority
            sizes="(max-width: 700px) 80vw, 320px"
          />
          <div>
            <h2>A developer in Toronto.</h2>
            <p>
              I started in IT support in Athens, then joined Spinworks to work
              on a B2B e-commerce platform. After moving to Canada in November
              2021, I finished that project remotely and worked in construction
              while setting up life here.
            </p>
            <p>
              I returned to software studies at Seneca in 2025. In 2026 I
              interned at Mercell in Copenhagen, working on React features.
            </p>
            <p>
              Today my work spans full-stack applications, tools for developers,
              and websites for businesses. I care about the details people
              encounter and the code that makes them possible.
            </p>
            <a className="button" href={site.cv}>
              Read my CV (PDF) ↗
            </a>
          </div>
        </section>
        <section className="section">
          <p className="eyebrow">Experience / Along the way</p>
          <h2>
            Different settings.
            <br />
            The same curiosity.
          </h2>
          <ol className="timeline">
            {timeline.map((t) => (
              <li key={t.when}>
                <span className="eyebrow">{t.when}</span>
                <p>{t.what}</p>
              </li>
            ))}
          </ol>
          <div className="experience-list">
            {portfolio.experience.map((e) => (
              <article key={e.organization}>
                <p className="eyebrow">
                  {e.period} / {e.role}
                </p>
                <h3>{e.organization}</h3>
                <p>{e.summary}</p>
                {e.links?.map((l) => (
                  <a href={l.url} key={l.url}>
                    {l.label} ↗
                  </a>
                ))}
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
