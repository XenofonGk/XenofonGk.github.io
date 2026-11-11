import type { Metadata } from 'next'
import Link from 'next/link'
import Callout from '@/components/Callout'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'This page could not be found. Explore the selected projects and client websites.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <div className="shell">
        <section className="page-intro">
          <Callout n="404" note="Not on the drawings">
            Missing sheet
          </Callout>
          <h1>This page isn&apos;t here.</h1>
          <p>
            The link may be from the previous version of this site. Explore the
            selected projects, client websites, or return to the homepage.
          </p>
          <div className="actions">
            <Link className="button" href="/">
              Go to the home page
            </Link>
            <Link className="button secondary" href="/projects">
              See projects
            </Link>
          </div>
        </section>
      </div>
      <Footer sheet="404 / Missing sheet" />
    </>
  )
}
