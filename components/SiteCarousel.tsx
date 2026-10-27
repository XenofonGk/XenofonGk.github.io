'use client'

import { useState } from 'react'
import type { ClientSite } from '@/lib/site'

/* A slow, endless strip of client sites. The list is drawn twice and the track
   slides left by exactly one copy, so the loop has no visible seam. Motion
   stops on hover, on keyboard focus, with the pause button (WCAG 2.2.2), and
   entirely for visitors who ask for reduced motion, who get a swipeable row. */
export default function SiteCarousel({ sites }: { sites: ClientSite[] }) {
  const [paused, setPaused] = useState(false)
  // Repeat short lists so one copy is wider than any screen.
  const copy = sites.length < 5 ? [...sites, ...sites] : sites

  return (
    <div>
      <div className="marquee [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" data-paused={paused || undefined}>
        <div className="marquee-track flex w-max" style={{ animationDuration: `${copy.length * 14}s` }}>
          {[0, 1].map((half) => (
            <ul key={half} aria-hidden={half === 1 || undefined} className="flex shrink-0 gap-6 pr-6">
              {copy.map((s, i) => {
                const hidden = half === 1 || i >= sites.length
                return (
                  <li key={`${s.domain}-${i}`} aria-hidden={(half === 0 && hidden) || undefined} className="flex w-[min(80vw,420px)] shrink-0 flex-col gap-3">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={-1}
                      aria-hidden="true"
                      className="block overflow-hidden rounded-2xl border border-line bg-surface"
                    >
                      {s.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                      ) : (
                        <div className="flex aspect-[16/10] items-end p-7">
                          <span className="font-display break-words text-[clamp(22px,3vw,36px)] font-bold leading-none text-ink">{s.domain}</span>
                        </div>
                      )}
                    </a>
                    <h3 className="font-display mt-2 text-[26px] font-bold leading-tight">{s.name}</h3>
                    <p className="text-muted">{s.summary}</p>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={hidden ? -1 : undefined}
                      className="mt-auto font-semibold text-accent underline underline-offset-4"
                    >
                      Open {s.domain}<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="marquee-toggle inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
        >
          {paused ? 'Play' : 'Pause'} scrolling
        </button>
      </div>
    </div>
  )
}
