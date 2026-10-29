import type { Metadata } from 'next'
import { site } from './site'
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const image = `/social/${path === '/' ? 'home' : path.split('/').filter(Boolean).at(-1)}.png`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: site.brand,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Xenofon Gkioka — full-stack development',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}
