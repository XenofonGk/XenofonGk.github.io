'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { site } from '@/lib/site'

const nav = [
  {
    href: '/projects',
    label: 'Work',
    match: (p: string) => p.startsWith('/projects'),
  },
  {
    href: '/websites',
    label: 'Websites',
    match: (p: string) => p === '/websites',
  },
  { href: '/about', label: 'About', match: (p: string) => p === '/about' },
]

export default function Header() {
  const path = usePathname()
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark" aria-hidden="true">
            XG
          </span>
          <span className="brand-name">
            xg<span aria-hidden="true">/</span>builds
          </span>
          <span className="sr-only"> home</span>
        </Link>
        <nav aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={n.match(path) ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
          <a href={site.cv}>
            CV <span aria-hidden="true">↗</span>
          </a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
