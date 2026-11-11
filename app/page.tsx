import Image from 'next/image'
import Link from 'next/link'
import Callout from '@/components/Callout'
import DemoPanel from '@/components/DemoPanel'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import MutationExample from '@/components/MutationExample'
import ProjectRecord from '@/components/ProjectRecord'
import { portfolio, selectedWork } from '@/lib/portfolio'
import { education, liveWork, site } from '@/lib/site'
import { pageMetadata } from '@/lib/metadata'
import { personLd, websiteLd } from '@/lib/structured-data'

export const metadata = pageMetadata(
  'Xenofon Gkioka, full-stack developer in Toronto',
  'Former construction site supervisor who builds software to spec: client websites, developer tools, and C and C++ running in the browser.',
  '/',
)

const tags = ['On spec', 'On time', 'Load-bearing']

export default function Home() {
  const [mercell, spinworks, construction] = portfolio.experience
  return (
    <>
      <JsonLd data={[personLd, websiteLd]} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell">
          <Callout n="00" note={`Rev. ${new Date().getFullYear()}`}>
            {site.name} / {site.location}
          </Callout>
          <h1 id="hero-title" className="display">
            I build software the way I used to build <em>houses</em>.
          </h1>
          <div className="hero-lower">
            <p className="lede">
              Full-stack developer working in React, TypeScript, C# and .NET.
              Software Engineer Intern at Mercell in Copenhagen in 2026.
              Formerly a construction site supervisor in Toronto.
            </p>
            <div>
              <ul className="hero-tags mono" aria-label="Working principles">
                {tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="actions">
                <Link href="#selected-work" className="button">
                  See the work <span aria-hidden="true">↓</span>
                </Link>
                <a href={site.cv} className="button secondary">
                  CV (PDF) <span aria-hidden="true">↗</span>
                </a>
                <Link className="button secondary" href="/websites">
                  Websites for businesses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shell">
        <section aria-labelledby="record-title" className="spec-strip">
          <h2 id="record-title" className="sr-only">
            Experience and education
          </h2>
          <dl>
            <div>
              <dt>Studying / {education.location}</dt>
              <dd>
                <strong>{education.school}</strong>
                {education.program}, expected {education.expected}.
              </dd>
            </div>
            {[mercell, spinworks, construction].filter(Boolean).map((e) => (
              <div key={e.organization}>
                <dt>{[e.period, e.location].filter(Boolean).join(' / ')}</dt>
                <dd>
                  <strong>{e.organization}</strong>
                  {e.role}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          id="selected-work"
          className="section"
          aria-labelledby="work-title"
        >
          <Callout n="01" note="As-built">
            Selected work
          </Callout>
          <div className="section-heading">
            <h2 id="work-title">From problem to working code.</h2>
            <Link className="text-link" href="/projects">
              All engineering work <span aria-hidden="true">→</span>
            </Link>
          </div>
          {selectedWork.map((p, i) => (
            <ProjectRecord project={p} index={i} key={p.id} />
          ))}
          <MutationExample />
        </section>

        <section className="section" aria-labelledby="live-title">
          <Callout n="02" note="Open any of them">
            On site now
          </Callout>
          <div className="section-heading">
            <h2 id="live-title">Live, not mock-ups.</h2>
            <p>
              Client sites, services on my home server, and compiled code you
              can run without installing anything.
            </p>
          </div>
          <table className="schedule">
            <caption className="sr-only">Live work you can open</caption>
            <thead>
              <tr>
                <th scope="col">Address</th>
                <th scope="col">What it is</th>
                <th scope="col">Kind</th>
              </tr>
            </thead>
            <tbody>
              {liveWork.map((w) => (
                <tr key={w.url}>
                  <th scope="row">
                    {w.url.startsWith('/') ? (
                      <Link href={w.url}>
                        {w.address} <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <a href={w.url}>
                        {w.address} <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </th>
                  <td>{w.what}</td>
                  <td className="mono">{w.kind}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="section demo-section" aria-labelledby="demo-title">
          <div>
            <Callout n="03">Run the code</Callout>
            <h2 id="demo-title">C++, in your browser.</h2>
            <p>
              ArenaCore is a turn-based combat engine. Choose an opponent,
              change a fighter’s attributes, and let the compiled engine
              calculate each round.
            </p>
            <a
              className="text-link"
              href="https://github.com/XenofonGk/Cpp/tree/main/ArenaCore"
            >
              Read the source <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="demo-stage">
            <div className="demo-poster">
              <span className="eyebrow">ArenaCore / Interactive C++</span>
              <p aria-hidden="true">
                Choose.
                <br />
                Fight.
                <br />
                <span>Reset.</span>
              </p>
              <span className="mono">C++ → WebAssembly → browser</span>
            </div>
            <DemoPanel demo="arenacore" label="Launch ArenaCore" />
          </div>
        </section>

        <section
          className="section about-preview"
          aria-labelledby="about-title"
        >
          <Image
            src="/xenofon.webp"
            alt="Xenofon Gkioka"
            width={640}
            height={640}
            sizes="(max-width: 700px) 200px, 260px"
          />
          <div>
            <Callout n="04">The person behind the work</Callout>
            <h2 id="about-title">A practical route into software.</h2>
            <p>
              IT support in Athens. B2B development at Spinworks. A move to
              Toronto and work as a construction site supervisor. Computer
              Programming at Seneca Polytechnic, then an internship at Mercell
              in Copenhagen.
            </p>
            <p>
              I build software the way I used to build houses: to spec, on time,
              and made to last.
            </p>
            <Link href="/about" className="text-link">
              More about me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </div>
      <Footer sheet="A-00 / Home" />
    </>
  )
}
