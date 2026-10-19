'use client'

import { useId, useState } from 'react'

type Props = { name: string; domain: string; url: string; image?: string }

/* Shows a preview first. The real site only loads (and can only be scrolled)
   after the visitor asks for it, so the page stays fast and scrolling past the
   card never gets stuck inside a frame. */
export default function LiveSite({ name, domain, url, image }: Props) {
  const [live, setLive] = useState(false)
  const id = useId()
  return (
    <div className="flex flex-col gap-3">
      <div id={id} className="overflow-hidden rounded-2xl border border-line bg-surface">
        {live ? (
          <iframe
            src={url}
            title={`${name}, live website`}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            className="block h-[460px] w-full bg-white sm:h-[520px]"
          />
        ) : image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={`The ${name} homepage`} className="aspect-[16/10] w-full object-cover object-top" />
        ) : (
          <div className="flex aspect-[16/10] items-end p-7">
            <span className="font-display break-words text-[clamp(22px,3vw,36px)] font-bold leading-none text-ink">{domain}</span>
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="button"
          aria-expanded={live}
          aria-controls={id}
          onClick={() => setLive((v) => !v)}
          className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-accent px-4 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
        >
          {live ? 'Back to the preview' : 'Browse the live site here'}
        </button>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-accent underline underline-offset-4"
        >
          Open {domain}<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  )
}
