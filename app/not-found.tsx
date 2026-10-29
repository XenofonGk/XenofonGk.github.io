import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { Button, Container } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Page not found',
  description:
    'This page could not be found. Explore the selected projects and client websites.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <Container className="pb-32 pt-16">
        <h1 className="font-display text-[clamp(40px,6vw,68px)] font-bold leading-none">
          This page isn&apos;t here.
        </h1>
        <p className="mt-6 max-w-[34em] text-[19px] text-muted">
          The link may be from the previous version of this site. Explore the
          selected projects, client websites, or return to the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Go to the home page</Button>
          <Button href="/projects" variant="secondary">
            See projects
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  )
}
