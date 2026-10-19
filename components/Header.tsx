'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { Container } from './ui'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/websites', label: 'Websites' },
  { href: '/projects', label: 'Projects' },
]

export default function Header() {
  const path = usePathname()
  const isActive = (href: string) => (href === '/' ? path === '/' : path.startsWith(href))
  return (
    <header>
      <Container className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-5">
        <Link href="/" className="font-display text-[23px] font-bold text-ink no-underline">
          xgbuilds
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? 'page' : undefined}
              className={`inline-flex min-h-11 items-center rounded-lg px-3 text-[16px] font-medium no-underline transition-colors sm:px-3.5 ${
                isActive(n.href) ? 'bg-surface text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {n.label}
            </Link>
          ))}
          <span className="ml-1 sm:ml-2">
            <ThemeToggle />
          </span>
        </nav>
      </Container>
    </header>
  )
}
