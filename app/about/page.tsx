import Image from 'next/image'
import Callout from '@/components/Callout'
import Footer from '@/components/Footer'
import { portfolio } from '@/lib/portfolio'
import { education, site, timeline } from '@/lib/site'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'About Xenofon',
  'From Athens to Toronto: IT support, B2B development, construction site supervision, Seneca Polytechnic and an internship at Mercell.',
  '/about',
)

export default function About() {
  return (
    <>
      <div className="shell">
        <section className="page-intro">
          <Callout n="00" note={site.location}>
            About / {site.name}
          </Callout>
          <h1>
            Built on <em>practical experience.</em>
          </h1>
        </section>
        <section className="about-preview about-page" aria-labelledby="bio">
          <Image
            src="/xenofon.webp"
            alt="Xenofon Gkioka, smiling"
            width={640}
            height={640}
            priority
            sizes="(max-width: 700px) 200px, 320px"
          />
          <div>
            <h2 id="bio">A developer in Toronto.</h2>
            <p>
              I started in IT support in Athens, then joined Spinworks as a
              Junior Software Developer, working on a B2B e-commerce platform in
              PHP, Symfony and OroCommerce. After moving to Canada in November
              2021, I finished that project remotely and worked as a
              construction site supervisor while setting up life here.
            </p>
            <p>
              I returned to software at Seneca Polytechnic in 2025, in the{' '}
              {education.program} program (expected {education.expected}). In
              the summer of 2026 I was a Software Engineer Intern at Mercell in
              Copenhagen, building React and TypeScript features in an NX
              monorepo.
            </p>
            <p>
              Today my work spans full-stack applications, tools for developers,
              and websites for businesses. I care about the details people
              encounter and the code that makes them possible.
            </p>
            <div className="actions">
              <a className="button" href={site.cv}>
                Read my CV (PDF) <span aria-hidden="true">↗</span>
              </a>
              <a className="button secondary" href={site.cvA4}>
                A4 version <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="schedule-title">
          <Callout n="01" note="Construction schedule">
            Experience / Along the way
          </Callout>
          <h2 id="schedule-title">Different settings. The same curiosity.</h2>
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
                  {[e.period, e.location].filter(Boolean).join(' / ')}
                </p>
                <h3>{e.organization}</h3>
                <p className="experience-role">{e.role}</p>
                <p>{e.summary}</p>
                {e.links?.map((l) => (
                  <a href={l.url} key={l.url}>
                    {l.label} <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </article>
            ))}
            <article>
              <p className="eyebrow">
                Expected {education.expected} / {education.location}
              </p>
              <h3>{education.school}</h3>
              <p className="experience-role">{education.program}</p>
            </article>
          </div>
        </section>
      </div>
      <Footer sheet="A-20 / About" />
    </>
  )
}
