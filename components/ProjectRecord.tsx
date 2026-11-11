import Link from 'next/link'
import DemoPanel from './DemoPanel'
import ProjectMedia from './ProjectMedia'
import ServerDiagram from './ServerDiagram'
import StatusStamp from './StatusStamp'
import {
  basisLabel,
  projectPath,
  sheetNumber,
  type PortfolioProject,
} from '@/lib/portfolio'

const demoLabels = {
  'train-yard': 'Launch train validator',
  arenacore: 'Launch ArenaCore',
} as const

/** One project, laid out as a sheet in a drawing set. */
export default function ProjectRecord({
  project: p,
  index,
  headingLevel = 3,
  withDemo = false,
}: {
  project: PortfolioProject
  index: number
  headingLevel?: 2 | 3
  /** Show the project's WebAssembly demo under the sheet, if it has one. */
  withDemo?: boolean
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const href = p.caseStudy ? projectPath(p) : null
  const evidence = p.evidence[0]
  const media = p.media[0]
  // Without a screenshot, the art panel shows the inspection record instead,
  // so the evidence is not repeated under the copy.
  const evidenceInArt = !media && p.id !== 'home-server' && evidence
  return (
    <article className="sheet" id={p.slug}>
      <header className="sheet-head">
        <span className="eyebrow">
          Sheet {sheetNumber(index)} /{' '}
          {p.category === 'client' ? 'Client website' : 'Engineering'}
        </span>
        <StatusStamp status={p.status} />
      </header>
      <div className="sheet-body">
        <div className="sheet-copy">
          <Heading className="sheet-title">
            {href ? <Link href={href}>{p.title}</Link> : p.title}
          </Heading>
          <p className="sheet-summary">{p.summary}</p>
          <dl className="facts">
            <div>
              <dt>Role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Stack</dt>
              <dd>{p.stack.join(' / ')}</dd>
            </div>
          </dl>
          <div className="link-row">
            {href && (
              <Link className="button" href={href}>
                Read case study <span aria-hidden="true">→</span>
              </Link>
            )}
            {p.links.map((l) => (
              <a key={l.url} href={l.url}>
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          {evidence && !evidenceInArt && (
            <p className="evidence-note">
              <span className="eyebrow">{basisLabel(evidence.basis)}</span>{' '}
              {evidence.claim}{' '}
              {evidence.url && (
                <a href={evidence.url}>
                  {evidence.label} <span aria-hidden="true">↗</span>
                </a>
              )}
            </p>
          )}
        </div>
        <div className="sheet-art">
          {media ? (
            <ProjectMedia media={media} />
          ) : p.id === 'home-server' ? (
            <ServerDiagram />
          ) : evidence ? (
            <div className="artifact-note">
              <span className="eyebrow">
                Inspection / {basisLabel(evidence.basis)}
                {evidence.checkedAt ? ` / ${evidence.checkedAt}` : ''}
              </span>
              <p>{evidence.claim}</p>
              {p.demo ? (
                <span className="mono">Runs in this page</span>
              ) : (
                p.links[0] && (
                  <a href={p.links[0].url}>
                    {p.links[0].label} <span aria-hidden="true">↗</span>
                  </a>
                )
              )}
            </div>
          ) : null}
        </div>
      </div>
      {withDemo && p.demo && (
        <div className="sheet-demo">
          <DemoPanel demo={p.demo} label={demoLabels[p.demo]} />
        </div>
      )}
    </article>
  )
}
