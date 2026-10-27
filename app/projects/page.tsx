import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import DemoPanel from '@/components/DemoPanel'
import Footer from '@/components/Footer'
import { Button, Container, SectionHeading, Tag, TextLink } from '@/components/ui'
import { featured, moreProjects, projects, site, type Project } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Engineering work by Xenofon Gkioka: mutation testing, C and C++ compiled to WebAssembly, accessibility audits, and a control plane for AI coding agents.',
}

/* Real output from each tool's README, shown as the tool prints it. */
const AI_ENG_OUTPUT = `packages/zod/src/v4/core/to-json-schema.ts   TRUST  40%   ~read closely
  mutation score 40% (6/15 killed)
  SURVIVED L163 optional-chain: params?.target  ->  params.target
  SURVIVED L168 nullish-default: params.processors ?? {}  ->  params.processors`

const AODA_OUTPUT = `  Grade C   14/22 pages clean (64%)
  1 critical, 3 serious, 2 moderate, 0 minor  (distinct rules)
  87 elements affected across 6 rules

  Fix first:
    critical Images must have alternative text (19 pages)
    serious  Elements must meet minimum color contrast ratio thresholds (22 pages)`

function Output({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-line">
      <figcaption className="border-b border-line bg-surface px-4 py-2 text-[13px] font-semibold text-muted">{label}</figcaption>
      <pre tabIndex={0} className="overflow-x-auto p-4 font-mono text-[13px] leading-[1.7] text-ink">
        {children}
      </pre>
    </figure>
  )
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul aria-label="Built with" className="flex flex-wrap gap-1.5">
      {tags.map((t) => <Tag key={t}>{t}</Tag>)}
    </ul>
  )
}

function Links({ project }: { project: Project }) {
  if (!project.links.length) return null
  return (
    <p className="flex flex-wrap gap-x-5 gap-y-2">
      {project.links.map((l) => <TextLink key={l.href} href={l.href}>{l.label}</TextLink>)}
    </p>
  )
}

const byId = (id: string) => projects.find((p) => p.id === id)!

export default function Projects() {
  const runnable = projects.filter((p) => p.demo)
  const pair = [byId('aoda-scan'), byId('agentmesh')]
  const kyklos = byId('kyklos')

  return (
    <>
      <Container>
        <section aria-labelledby="hero-title" className="max-w-[880px] pb-16 pt-10 md:pt-16">
          <h1 id="hero-title" className="font-display text-[clamp(42px,6.4vw,76px)] font-bold leading-[1]">
            Projects you can run, not just read about.
          </h1>
          <p className="mt-7 max-w-[36em] text-[19px] leading-relaxed text-muted">
            Testing tools, WebAssembly, accessibility and AI infrastructure, built outside client work. Every project
            links to its code, and two of them run right here.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={site.cv} download>Download CV (PDF)</Button>
            <Button href={site.github} variant="secondary">GitHub profile</Button>
          </div>
        </section>

        <article aria-labelledby="ai-eng" className="mb-24 grid gap-10 rounded-3xl bg-surface p-7 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="flex flex-col gap-4">
            <Tags tags={featured.tags} />
            <h2 id="ai-eng" className="font-display text-[clamp(30px,3.6vw,40px)] font-bold leading-[1.08]">{featured.title}</h2>
            <p className="text-muted">{featured.body}</p>
            {featured.stat && (
              <div className="border-t border-line pt-5">
                <p className="font-display text-[clamp(44px,5vw,60px)] font-bold leading-none text-accent">{featured.stat.value}</p>
                <p className="mt-2 max-w-[30em] text-[16px] text-muted">{featured.stat.label}</p>
              </div>
            )}
            <Links project={featured} />
          </div>
          <div className="min-w-0 self-center bg-bg [&_figure]:bg-bg">
            <Output label="ai-eng on a reverted zod fix, with no knowledge of the real fix">{AI_ENG_OUTPUT}</Output>
          </div>
        </article>

        <section aria-labelledby="run-title" className="pb-24">
          <SectionHeading id="run-title" intro="Both are compiled from C and C++ to WebAssembly. Every verdict comes from the compiled code, not from JavaScript.">
            Try them here
          </SectionHeading>
          <ul className="flex flex-col">
            {runnable.map((p) => (
              <li key={p.id} className="border-t border-line py-8 last:border-b">
                <article aria-labelledby={p.id} className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-10">
                  <div className="flex flex-col gap-3">
                    <Tags tags={p.tags} />
                    <h3 id={p.id} className="font-display text-[26px] font-bold leading-tight">{p.title}</h3>
                    <p className="max-w-[40em] text-muted">{p.body}</p>
                    <Links project={p} />
                  </div>
                  <div className="md:col-span-2">
                    <DemoPanel demo={p.demo!} label={p.demo === 'train-yard' ? 'Run the train yard' : 'Start a fight'} />
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="more-built" className="pb-24">
          <h2 id="more-built" className="sr-only">More featured projects</h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {pair.map((p) => (
              <article key={p.id} aria-labelledby={p.id} className="flex min-w-0 flex-col gap-4 rounded-2xl border border-line p-7 sm:p-8">
                <Tags tags={p.tags} />
                <h3 id={p.id} className="font-display text-[26px] font-bold leading-tight">{p.title}</h3>
                <p className="text-muted">{p.body}</p>
                {p.id === 'aoda-scan' && <Output label="aoda-scan summary for a 22-page site">{AODA_OUTPUT}</Output>}
                <div className="mt-auto pt-1"><Links project={p} /></div>
              </article>
            ))}
          </div>

          <article aria-labelledby={kyklos.id} className="mt-5 grid gap-8 rounded-2xl border border-line p-7 sm:p-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-accent px-2.5 py-1 text-[13px] font-semibold text-on-accent">Live demo</span>
                <Tags tags={kyklos.tags} />
              </div>
              <h3 id={kyklos.id} className="font-display text-[26px] font-bold leading-tight">{kyklos.title}</h3>
              <p className="text-muted">{kyklos.body}</p>
              <div className="mt-auto pt-1"><Links project={kyklos} /></div>
            </div>
            <div>
              <p className="font-semibold">How it&apos;s built</p>
              <ul className="mt-3 flex list-disc flex-col gap-3 pl-5 marker:text-accent">
                {kyklos.details!.map((d) => (
                  <li key={d} className="pl-1 text-[16px] text-muted">{d}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>

        <section aria-labelledby="more-title" className="pb-16">
          <SectionHeading id="more-title">More projects</SectionHeading>
          <ul>
            {moreProjects.map((p) => (
              <li key={p.title} className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-line py-6 first:border-t">
                <div className="min-w-0 flex-1 basis-[420px]">
                  <h3 className="text-[20px] font-semibold">{p.title}</h3>
                  <p className="mt-1 text-[16px] text-muted">{p.body}</p>
                </div>
                {p.link && <TextLink href={p.link.href}>{p.link.label}</TextLink>}
              </li>
            ))}
          </ul>
        </section>
      </Container>
      <Footer
        heading="Hiring a developer?"
        sub="I graduate from Seneca in April 2027. Email me about a role."
        subject="A developer role"
        withCv
      />
    </>
  )
}
