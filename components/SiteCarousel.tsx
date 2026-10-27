'use client'

import { useEffect, useRef, useState } from 'react'
import type { ClientSite } from '@/lib/site'

/* A native scroll-snap track, so swipe, trackpad and keyboard scrolling all
   work without a library. The buttons scroll it one card at a time. */
export default function SiteCarousel({ sites }: { sites: ClientSite[] }) {
  const track = useRef<HTMLUListElement>(null)
  const [view, setView] = useState({ first: 0, last: 0, atStart: true, atEnd: false })

  useEffect(() => {
    const el = track.current
    if (!el) return
    const update = () => {
      const box = el.getBoundingClientRect()
      const seen = ([...el.children] as HTMLElement[])
        .map((s, i) => ({ i, r: s.getBoundingClientRect() }))
        .filter(({ r }) => r.left >= box.left - 2 && r.right <= box.right + 2)
        .map(({ i }) => i)
      setView({
        first: seen[0] ?? 0,
        last: seen[seen.length - 1] ?? 0,
        atStart: el.scrollLeft <= 1,
        atEnd: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
      })
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const step = (dir: 1 | -1) => {
    const el = track.current
    const card = el?.children[0] as HTMLElement | undefined
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  const arrow =
    'inline-flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink disabled:opacity-40 disabled:hover:border-line'

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Client websites">
      <ul
        ref={track}
        className="relative -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {sites.map((s, i) => (
          <li
            key={s.domain}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${sites.length}: ${s.name}`}
            className="flex w-[85%] shrink-0 snap-start flex-col gap-3 md:w-[calc(50%-10px)]"
          >
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
            <h3 className="font-display mt-2 text-[28px] font-bold leading-tight">{s.name}</h3>
            <p className="text-muted">{s.summary}</p>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent underline underline-offset-4">
              Open {s.domain}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-3">
        <button type="button" className={arrow} onClick={() => step(-1)} disabled={view.atStart} aria-label="Previous site">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button type="button" className={arrow} onClick={() => step(1)} disabled={view.atEnd} aria-label="Next site">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
        <p className="text-[15px] text-muted" aria-live="polite">
          {view.first === view.last ? view.first + 1 : `${view.first + 1}–${view.last + 1}`} of {sites.length}
        </p>
      </div>
    </div>
  )
}
