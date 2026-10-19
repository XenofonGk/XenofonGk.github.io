import { Button, Container } from '@/components/ui'

export default function NotFound() {
  return (
    <Container className="pb-32 pt-16">
      <h1 className="font-display text-[clamp(40px,6vw,68px)] font-bold leading-none">This page isn&apos;t here.</h1>
      <p className="mt-6 max-w-[34em] text-[19px] text-muted">
        The link may be from the previous version of this site. Everything now lives on three pages.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Go to the home page</Button>
        <Button href="/projects" variant="secondary">See projects</Button>
      </div>
    </Container>
  )
}
