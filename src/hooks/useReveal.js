import { useEffect } from 'react'

/*
 * Reveals elements marked [data-reveal] as they scroll into view.
 *
 * Uses IntersectionObserver rather than scroll handlers so it costs nothing on
 * the main thread, and unobserves each element once revealed.
 *
 * Content must never be able to stay hidden. Reveal-on-scroll fails badly when
 * it fails — the text is simply gone, with no error. So there are three ways
 * out, and only the first is the pretty one:
 *   1. the observer fires as the element enters the viewport;
 *   2. anything already on screen at mount is revealed immediately;
 *   3. a backstop timer reveals everything regardless, which covers a throttled
 *      or hidden tab, a browser without IntersectionObserver, and any case
 *      where the observer never fires at all.
 */

const BACKSTOP_MS = 1600

export function useReveal(deps = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]:not(.is-revealed)')
    if (nodes.length === 0) return undefined

    const revealAll = () => nodes.forEach((n) => n.classList.add('is-revealed'))

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // No animation wanted, no observer available, or the tab is not being
    // looked at — show everything now and skip the machinery entirely.
    if (reduced || typeof IntersectionObserver === 'undefined' || document.hidden) {
      revealAll()
      return undefined
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    )

    nodes.forEach((n) => io.observe(n))

    const backstop = window.setTimeout(revealAll, BACKSTOP_MS)

    return () => {
      window.clearTimeout(backstop)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
