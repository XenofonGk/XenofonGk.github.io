import { site, mailto } from '@/lib/site'
import { Button, Container } from './ui'

type Props = { heading: string; sub: string; subject?: string; withCv?: boolean }

/** The closing call to action plus the site footer. Each page sets its own wording. */
export default function Footer({ heading, sub, subject, withCv }: Props) {
  return (
    <footer className="mt-8">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-line py-14">
          <div className="max-w-[640px]">
            <p className="font-display text-[clamp(28px,3.4vw,36px)] font-bold leading-tight">{heading}</p>
            <p className="mt-2 text-muted">{sub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {withCv && (
              <Button href={site.cv} variant="secondary" download>
                Download CV
              </Button>
            )}
            <Button href={mailto(subject)}>{site.email}</Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-line py-6 text-[15px] text-muted">
          <p>© {new Date().getFullYear()} {site.name}, Toronto</p>
          <ul className="flex gap-5">
            <li><a className="hover:text-ink" href={site.github}>GitHub</a></li>
            <li><a className="hover:text-ink" href={site.linkedin}>LinkedIn</a></li>
            <li><a className="hover:text-ink" href={site.cv} download>CV</a></li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
