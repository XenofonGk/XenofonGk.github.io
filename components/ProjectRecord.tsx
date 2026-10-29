import Image from 'next/image'
import Link from 'next/link'
import type { PortfolioProject, Media } from '@/lib/portfolio'
export function ProjectMedia({
  media,
  priority = false,
}: {
  media: Media
  priority?: boolean
}) {
  return media.type === 'image' ? (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      sizes="(max-width: 700px) 92vw, 65vw"
      priority={priority}
      className="work-image"
    />
  ) : (
    <video
      controls
      preload="none"
      poster={media.poster}
      width={media.width}
      height={media.height}
      aria-label={media.alt}
    >
      <source src={media.src} />
      <a href={media.src}>Watch: {media.alt}</a>
    </video>
  )
}
export default function ProjectRecord({
  project,
  index,
  headingLevel = 3,
}: {
  project: PortfolioProject
  index: number
  headingLevel?: 2 | 3
}) {
  const p = project
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <article className="project-record">
      <div className="project-label">
        <span className="eyebrow">
          {String(index + 1).padStart(2, '0')} /{' '}
          {p.category === 'client' ? 'Client website' : 'Engineering'}
        </span>
        <span className="status-label">{p.status.replaceAll('-', ' ')}</span>
      </div>
      <div className="project-layout">
        <div className="project-copy">
          <Heading>
            {p.caseStudy ? (
              <Link href={`/projects/${p.slug}`}>
                {p.title} <span aria-hidden="true">↗</span>
              </Link>
            ) : (
              p.title
            )}
          </Heading>
          <p>{p.summary}</p>
          <dl className="project-facts">
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
            {p.caseStudy && (
              <Link className="text-link" href={`/projects/${p.slug}`}>
                Read case study →
              </Link>
            )}
            {p.links.slice(0, 2).map((l) => (
              <a key={l.url} href={l.url}>
                {l.label} ↗
              </a>
            ))}
          </div>
          {p.evidence.slice(0, 1).map((e) => (
            <p className="evidence-note" key={e.claim}>
              {e.claim} <span>({e.basis.replaceAll('-', ' ')}).</span>{' '}
              {e.url && <a href={e.url}>{e.label} ↗</a>}
            </p>
          ))}
        </div>
        <div className={`project-art project-art-${p.id}`}>
          {p.media[0] ? (
            <ProjectMedia media={p.media[0]} />
          ) : p.id === 'home-server' ? (
            <div className="server-diagram">
              <span className="eyebrow">Request path / Simplified</span>
              <ol aria-label="How requests reach the hosted applications">
                <li>
                  Cloudflare <span>↓</span>
                </li>
                <li>
                  Cloudflare Tunnel <span>↓</span>
                </li>
                <li>
                  Caddy reverse proxy <span>↓</span>
                </li>
                <li>Docker services</li>
              </ol>
              <p>
                Scheduled encrypted local backups are configured separately.
              </p>
            </div>
          ) : (
            <div className="artifact-note">
              <span className="eyebrow">
                {p.stack[0]} / {p.status.replaceAll('-', ' ')}
              </span>
              <p>{p.title}</p>
              <a href={p.links[0]?.url}>Explore the project ↗</a>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
