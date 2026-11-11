import Image from 'next/image'
import type { Media } from '@/lib/portfolio'

export default function ProjectMedia({
  media,
  priority = false,
  sizes = '(max-width: 700px) 92vw, 60vw',
}: {
  media: Media
  priority?: boolean
  sizes?: string
}) {
  if (media.type === 'image')
    return (
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={sizes}
        priority={priority}
        className="work-image"
      />
    )
  return (
    <video
      controls
      preload="none"
      poster={media.poster}
      width={media.width}
      height={media.height}
      aria-label={media.alt}
    >
      <source src={media.src} />
      <a href={media.src}>Watch: {media.alt}</a>
    </video>
  )
}
