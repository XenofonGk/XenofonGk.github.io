import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { Button, Container } from '@/components/ui'
import { site, timeline } from '@/lib/site'

const doors = [
  {
    href: '/websites',
    who: 'For businesses',
    title: 'A website you own, that passes accessibility checks',
    body: "Static sites, sites you can edit yourself, and online stores. Every build meets WCAG 2.1 AA, ready for Ontario's AODA rules.",
    cta: 'See websites and packages',
  },
  {
    href: '/projects',
    who: 'For recruiters',
    title: 'Engineering work you can run, not just read about',
    body: 'A mutation-testing tool that caught 27 of 59 real bugs the existing tests missed, C and C++ running in your browser, and a control plane for AI coding agents.',
    cta: 'See the projects',
  },
]

export default function Home() {
  return (
    <>
      <Container>
        <section aria-labelledby="hero-title" className="grid items-center gap-10 pb-20 pt-10 md:grid-cols-[minmax(0,1fr)_360px] md:gap-14 md:pb-24 md:pt-16 lg:grid-cols-[minmax(0,1fr)_400px]">
          <div>
            <h1 id="hero-title" className="font-display text-[clamp(44px,7vw,84px)] font-bold leading-[0.98]">
              I build websites for small businesses, and software that holds up.
            </h1>
            <p className="mt-7 max-w-[34em] text-[19px] leading-relaxed text-muted">
              I&apos;m Xenofon, a full-stack developer in Toronto. I&apos;ve shipped React features to 800,000+ users at
              Mercell, and I build fast, accessible sites for local businesses.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/websites">Get a website</Button>
              <Button href="/projects" variant="secondary">See my engineering work</Button>
            </div>
          </div>
          <Image
            src="/xenofon.jpg"
            alt="Xenofon Gkioka, smiling, in a navy t-shirt"
            width={400}
            height={400}
            priority
            className="order-first aspect-square w-full max-w-[280px] rounded-[20px] object-cover md:order-none md:max-w-none"
          />
        </section>

        <section aria-labelledby="doors" className="pb-24">
          <h2 id="doors" className="font-display mb-7 text-[clamp(28px,3.4vw,38px)] font-bold">Two ways I can help</h2>
          <ul className="grid gap-5 md:grid-cols-2">
            {doors.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="group flex h-full flex-col gap-3 rounded-2xl bg-surface p-8 text-ink no-underline transition-colors hover:bg-[color-mix(in_srgb,var(--surface)_70%,var(--line))]"
                >
                  <span className="font-semibold text-accent">{d.who}</span>
                  <span className="font-display text-[28px] font-bold leading-[1.15]">{d.title}</span>
                  <span className="text-muted">{d.body}</span>
                  <span className="mt-auto pt-2 font-semibold underline decoration-line decoration-2 underline-offset-[6px] group-hover:decoration-accent">
                    {d.cta}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="story" className="grid gap-8 pb-24 md:grid-cols-[260px_minmax(0,1fr)] md:gap-12">
          <h2 id="story" className="font-display text-[clamp(28px,3.4vw,38px)] font-bold leading-tight">How I got here</h2>
          <div>
            <p className="max-w-[38em] text-[20px] leading-[1.65]">
              I started in IT support in Athens and became a developer at Spinworks, building a B2B e-commerce
              platform. In November 2021 I moved to Canada, finished that project remotely and worked in construction
              while I set up my life here, then went back to school at Seneca. This summer I interned at Mercell in
              Copenhagen, shipping React features to more than 800,000 users.
            </p>
            <ol className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-line pt-5 sm:grid-cols-3 lg:grid-cols-5">
              {timeline.map((t) => (
                <li key={t.when + t.what}>
                  <span className="block font-semibold">{t.when}</span>
                  <span className="text-[15px] text-muted">{t.what}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Button href={site.cv} variant="secondary" download>Download CV (PDF)</Button>
            </div>
          </div>
        </section>
      </Container>
      <Footer heading="Have a project in mind?" sub="Email me about a website or a role." subject="Hello from xgbuilds.dev" />
    </>
  )
}
