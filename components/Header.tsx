'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { site } from '@/lib/site'
export default function Header() {
  const path = usePathname()
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand">
          xg<span aria-hidden="true">/</span>builds
          <span className="sr-only"> home</span>
        </Link>
        <nav aria-label="Main">
          <Link
            href="/projects"
            aria-current={path.startsWith('/projects') ? 'page' : undefined}
          >
            Work
          </Link>
          <Link
            href="/websites"
            aria-current={path === '/websites' ? 'page' : undefined}
          >
            Websites
          </Link>
          <Link
            href="/about"
            aria-current={path === '/about' ? 'page' : undefined}
          >
            About
          </Link>
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
