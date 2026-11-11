import { site, mailto } from '@/lib/site'

type Props = {
  heading?: string
  sub?: string
  subject?: string
  /** Shown in the title block, like the sheet name on a drawing. */
  sheet: string
}

/** Contact call plus a drawing title block: drawn by, location, sheet and
    revision, the boxed panel in the corner of a technical drawing. */
export default function Footer({
  heading = 'Let’s build something useful.',
  sub = 'For a role, a website, or a conversation about the work.',
  subject,
  sheet,
}: Props) {
  const year = new Date().getFullYear()
  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <div className="footer-call">
          <div>
            <p className="eyebrow">Contact / {site.location}</p>
            <h2>{heading}</h2>
            <p>{sub}</p>
          </div>
          <a className="contact-link" href={mailto(subject)}>
            {site.email}
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
        <dl className="title-block">
          <div>
            <dt>Drawn by</dt>
            <dd>{site.name}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Sheet</dt>
            <dd>{sheet}</dd>
          </div>
          <div>
            <dt>Revision</dt>
            <dd>Rev. {year}</dd>
          </div>
          <div className="title-block-links">
            <dt>Elsewhere</dt>
            <dd>
              <a href={site.cv}>CV (PDF)</a>
              <a href={site.github}>
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={site.linkedin}>
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="#top">
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </footer>
  )
}
