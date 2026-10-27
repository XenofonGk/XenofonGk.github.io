import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import SiteCarousel from '@/components/SiteCarousel'
import { Button, Container, SectionHeading } from '@/components/ui'
import { clientSites, faq, mailto, packages, process } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Websites for small businesses',
  description:
    'Fast, accessible websites for small businesses: static sites, sites you can edit yourself, and online stores. Built to WCAG 2.1 AA, owned by you.',
}

const promises = [
  { title: 'Built to WCAG 2.1 AA', body: "Usable by everyone, and ready for Ontario's AODA rules." },
  { title: 'You own it', body: 'Your code and your domain. No lock-in, no hidden contracts.' },
  { title: 'One person, start to finish', body: 'You deal directly with the developer who builds your site.' },
]

function Check() {
  return (
    <svg className="mt-[3px] shrink-0 text-accent" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function Websites() {
  return (
    <>
      <Container>
        <section aria-labelledby="hero-title" className="max-w-[880px] pb-16 pt-10 md:pt-16">
          <h1 id="hero-title" className="font-display text-[clamp(42px,6.4vw,76px)] font-bold leading-[1]">
            A website you own, built to work for your customers.
          </h1>
          <p className="mt-7 max-w-[36em] text-[19px] leading-relaxed text-muted">
            I design and build fast, accessible sites for local businesses. You talk to the developer who builds your
            site, not a sales team.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={mailto('A website for my business')}>Email me about a website</Button>
            <Button href="#work" variant="secondary">See my work</Button>
          </div>
        </section>

        <ul aria-label="What you get" className="grid gap-x-5 gap-y-6 pb-24 md:grid-cols-3">
          {promises.map((p) => (
            <li key={p.title} className="border-t border-line pt-4">
              <p className="font-semibold">{p.title}</p>
              <p className="mt-1 text-[16px] text-muted">{p.body}</p>
            </li>
          ))}
        </ul>

        <section id="work" aria-labelledby="work-title" className="scroll-mt-6 pb-24">
          <SectionHeading id="work-title">Sites I&apos;ve built</SectionHeading>
          <SiteCarousel sites={clientSites} />
        </section>

        <section aria-labelledby="packages-title" className="pb-24">
          <SectionHeading
            id="packages-title"
            intro="Every project is quoted for your business. Tell me what you need and I'll send a clear quote, with no hidden costs."
          >
            Three ways to start
          </SectionHeading>
          <ul className="grid gap-5 lg:grid-cols-3">
            {packages.map((p) => (
              <li key={p.name} className="flex flex-col gap-4 rounded-2xl bg-surface p-8">
                <h3 className="font-display text-[26px] font-bold leading-tight">{p.name}</h3>
                <p className="text-[16px] text-muted">{p.for}</p>
                <ul className="flex flex-col gap-2.5">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2.5 text-[16px] leading-snug">
                      <Check />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-2">
                  <a className="font-semibold text-accent underline underline-offset-4" href={mailto(`Quote: ${p.name}`)}>
                    Ask for a quote
                  </a>
                </p>
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid gap-x-5 gap-y-6 md:grid-cols-2">
            <li className="border-t border-line pt-4">
              <p className="font-semibold">Monthly care plan</p>
              <p className="mt-1 text-[16px] text-muted">Hosting, backups, security updates and small edits each month. Optional.</p>
            </li>
            <li className="border-t border-line pt-4">
              <p className="font-semibold">Other languages</p>
              <p className="mt-1 text-[16px] text-muted">
                Need the site in Greek, French or another language? Translation is available as an add-on.
              </p>
            </li>
          </ul>
        </section>

        <section aria-labelledby="process-title" className="pb-24">
          <SectionHeading id="process-title">How it works</SectionHeading>
          <ol className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-5">
                <span className="text-[15px] font-semibold text-accent">Step {i + 1}</span>
                <h3 className="font-display mt-1.5 text-[22px] font-bold leading-tight">{s.title}</h3>
                <p className="mt-2 text-[16px] text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="faq-title" className="pb-16">
          <SectionHeading id="faq-title">Questions</SectionHeading>
          <dl className="max-w-[860px]">
            {faq.map((f) => (
              <div key={f.q} className="border-b border-line py-6 first:border-t">
                <dt className="text-[19px] font-semibold">{f.q}</dt>
                <dd className="mt-2 text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Container>
      <Footer
        heading="Ready to talk about your website?"
        sub="Email me and tell me about your business."
        subject="A website for my business"
      />
    </>
  )
}
