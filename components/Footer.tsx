import { site, mailto } from '@/lib/site'
type Props = {
  heading?: string
  sub?: string
  subject?: string
  withCv?: boolean
}
export default function Footer({
  heading = 'Let’s build something useful.',
  sub = 'For a role, a website, or a conversation about the work.',
  subject,
}: Props) {
  return (
    <footer id="contact" className="site-footer">
      <div className="shell">
        <p className="eyebrow">Contact / Toronto, Canada</p>
        <div className="footer-call">
          <div>
            <h2>{heading}</h2>
            <p>{sub}</p>
          </div>
          <a className="contact-link" href={mailto(subject)}>
            {site.email}
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <ul>
            <li>
              <a href={site.cv}>CV (PDF)</a>
            </li>
            <li>
              <a href={site.github}>GitHub ↗</a>
            </li>
            <li>
              <a href={site.linkedin}>LinkedIn ↗</a>
            </li>
          </ul>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
