import Link from 'next/link'
import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>{children}</div>
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  download?: boolean
}

const base =
  'inline-flex min-h-12 items-center justify-center rounded-[10px] px-[22px] text-base font-semibold no-underline transition-colors'
const styles = {
  primary: 'bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border border-line text-ink hover:border-ink',
}

/** A link styled as a button. External and file links use a plain <a>. */
export function Button({ href, children, variant = 'primary', download }: ButtonProps) {
  const cls = `${base} ${styles[variant]}`
  const isInternal = href.startsWith('/') && !href.endsWith('.pdf')
  if (isInternal) return <Link href={href} className={cls}>{children}</Link>
  const external = href.startsWith('http')
  return (
    <a href={href} className={cls} download={download || undefined} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

/** Inline text link. Opens external links in a new tab and says so to screen readers. */
export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      className="font-semibold text-accent underline decoration-1 underline-offset-4 hover:decoration-2"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}

export function SectionHeading({ id, children, intro }: { id: string; children: ReactNode; intro?: ReactNode }) {
  return (
    <div className="mb-8 max-w-[720px]">
      <h2 id={id} className="font-display text-[clamp(28px,3.4vw,38px)] font-bold leading-[1.1]">
        {children}
      </h2>
      {intro && <p className="mt-3 text-lg text-muted">{intro}</p>}
    </div>
  )
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="rounded-md bg-surface px-2.5 py-1 text-[13px] font-medium text-ink">{children}</li>
}
