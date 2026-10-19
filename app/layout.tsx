import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Xenofon Gkioka, full-stack developer in Toronto', template: '%s · xgbuilds' },
  description:
    'Xenofon Gkioka builds accessible websites for small businesses and production software. Projects, client sites and contact.',
  openGraph: { type: 'website', siteName: 'xgbuilds', images: ['/og.png'] },
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1013' },
  ],
}

/* Runs before first paint so there is no flash of the wrong theme: a saved
   choice wins, otherwise the system setting. */
const themeScript = `(function(){try{var s=localStorage.getItem('xg-theme');var d=s?s==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.dataset.theme=d?'dark':'light'}catch(e){}})()`

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  )
}
