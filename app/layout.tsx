import localFont from 'next/font/local'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import Header from '@/components/Header'
import { site } from '@/lib/site'
import './globals.css'

const archivo = localFont({
  src: './fonts/archivo.woff2',
  variable: '--font-archivo',
  weight: '100 900',
  display: 'swap',
})
const plex = localFont({
  src: [
    { path: './fonts/ibm-plex-sans-400.woff2', weight: '400' },
    { path: './fonts/ibm-plex-sans-500.woff2', weight: '500' },
    { path: './fonts/ibm-plex-sans-600.woff2', weight: '600' },
  ],
  variable: '--font-plex',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Xenofon Gkioka, full-stack developer in Toronto',
    template: '%s · xgbuilds',
  },
  description:
    'Xenofon Gkioka builds websites for small businesses and developer tools. Projects, client sites and contact.',
  openGraph: { type: 'website', siteName: 'xgbuilds', images: ['/og.png'] },
  icons: { icon: '/favicon.svg', apple: '/apple-touch-icon.png' },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f0e8' },
    { media: '(prefers-color-scheme: dark)', color: '#172022' },
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
      <body id="top" className={`${archivo.variable} ${plex.variable}`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  )
}
