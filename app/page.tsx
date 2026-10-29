import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import DemoPanel from '@/components/DemoPanel'
import ProjectRecord from '@/components/ProjectRecord'
import MutationExample from '@/components/MutationExample'
import { portfolio, selectedWork } from '@/lib/portfolio'
import { site } from '@/lib/site'
import { pageMetadata } from '@/lib/metadata'
export const metadata = pageMetadata(
  'Xenofon Gkioka, full-stack developer in Toronto',
  'Client websites, developer tools and C++ running in the browser. Selected work by Toronto full-stack developer Xenofon Gkioka.',
  '/',
)
export default function Home() {
  const heroMedia = selectedWork
    .find((p) => p.id === 'az-clean')
    ?.media.find((m) => m.type === 'image')
  return (
    <>
      <div className="shell">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-topline">
            <p className="eyebrow">Xenofon Gkioka / Full-stack developer</p>
            <span className="eyebrow">Toronto, Canada</span>
          </div>
          <h1 id="hero-title">
            Useful software.
            <br />
            <span>Thoughtfully built.</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-intro">
              <p>
                I build full-stack applications, developer tools, and websites
                for real businesses. From the interface to the logic underneath.
              </p>
              <div className="actions">
                <Link href="#selected-work" className="button">
                  Explore selected work <span aria-hidden="true">↓</span>
                </Link>
                <a href={site.cv} className="button secondary">
                  View CV ↗
                </a>
              </div>
              <Link className="text-link client-path" href="/websites">
                Need a website for your business? →
              </Link>
            </div>
            <figure className="hero-preview">
              <a href="https://azclean.gr" aria-label="Visit AZ Clean website">
                <Image
                  src={heroMedia?.src || '/work/azclean.jpg'}
                  alt="AZ Clean website: a Greek cleaning business with service information and direct contact actions"
                  width={heroMedia?.width || 800}
                  height={heroMedia?.height || 499}
                  priority
                  sizes="(max-width: 700px) 92vw, 46vw"
                />
              </a>
              <figcaption>
                <span>In the field / AZ Clean</span>
                <a href="/websites">Client websites ↗</a>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="evidence-strip" aria-label="Experience">
          {portfolio.experience.slice(0, 2).map((e) => (
            <div key={e.organization}>
              <p className="eyebrow">
                {e.role} / {e.period}
              </p>
              <h2>{e.organization}</h2>
              <p>{e.summary}</p>
              {e.links?.slice(0, 1).map((l) => (
                <a href={l.url} key={l.url}>
                  {l.label} ↗
                </a>
              ))}
            </div>
          ))}
          <div>
            <p className="eyebrow">Tools / Source available</p>
            <h2>Testing the tests.</h2>
            <p>Mutation testing for changed lines of code.</p>
            <a href="https://github.com/XenofonGk/ai-eng/blob/main/docs/progress/01-benchmark.md">
              Reported benchmark ↗
            </a>
          </div>
        </section>
        <section
          id="selected-work"
          className="section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2 id="work-title">
                From problem
                <br />
                to working code.
              </h2>
            </div>
            <Link className="text-link" href="/projects">
              All engineering work ↗
            </Link>
          </div>
          {selectedWork.map((p, i) => (
            <ProjectRecord project={p} index={i} key={p.id} />
          ))}
          <MutationExample />
        </section>
        <section className="section demo-section" aria-labelledby="demo-title">
          <div>
            <p className="eyebrow">02 / Run the code</p>
            <h2 id="demo-title">
              C++.
              <br />
              In your browser.
            </h2>
            <p>
              ArenaCore is a turn-based combat engine. Choose an opponent,
              change a fighter’s attributes, and let the compiled engine
              calculate each round.
            </p>
            <a
              className="text-link"
              href="https://github.com/XenofonGk/Cpp/tree/main/ArenaCore"
            >
              Read the source ↗
            </a>
          </div>
          <div className="demo-stage">
            <div className="demo-poster" aria-label="ArenaCore compiled demo">
              <span className="eyebrow">ArenaCore / Interactive C++</span>
              <p>
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
            src="/xenofon.jpg"
            alt="Xenofon Gkioka"
            width={1000}
            height={1000}
            sizes="(max-width: 700px) 55vw, 260px"
          />
          <div>
            <p className="eyebrow">03 / The person behind the work</p>
            <h2 id="about-title">
              A practical route
              <br />
              into software.
            </h2>
            <p>
              IT support in Athens. B2B development at Spinworks. A move to
              Toronto, work in construction, and software studies at Seneca.
              Then an internship at Mercell in Copenhagen.
            </p>
            <p>
              I like work with a clear purpose: understand the problem, build
              something useful, and check that it works.
            </p>
            <Link href="/about" className="text-link">
              More about me →
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
