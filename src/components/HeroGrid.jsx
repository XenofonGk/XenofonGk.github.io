import { useEffect, useRef } from 'react'

/*
 * A drafting grid behind the hero that reacts to the pointer — the nearest
 * intersections brighten and drift very slightly, the way a drawing lights up
 * under a lamp being moved across it.
 *
 * Drawn to a canvas rather than the DOM because it is hundreds of points, and
 * it does nothing at all under prefers-reduced-motion or on touch, where there
 * is no pointer to follow and the animation would only cost battery.
 */
export default function HeroGrid() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduced || !fine) return undefined

    const ctx = canvas.getContext('2d')
    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const SPACING = 34
    const REACH = 150

    // Pointer position, and the smoothed value actually used for drawing.
    const target = { x: -9999, y: -9999 }
    const eased = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const readInk = () => {
      const styles = getComputedStyle(document.documentElement)
      return {
        rule: styles.getPropertyValue('--rule').trim() || '#c6bfb1',
        signal: styles.getPropertyValue('--signal').trim() || '#e63f00',
      }
    }
    let ink = readInk()

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      target.x = e.clientX - rect.left
      target.y = e.clientY - rect.top
    }
    const onLeave = () => {
      target.x = -9999
      target.y = -9999
    }

    const draw = () => {
      eased.x += (target.x - eased.x) * 0.09
      eased.y += (target.y - eased.y) * 0.09
      ctx.clearRect(0, 0, w, h)

      for (let x = SPACING; x < w; x += SPACING) {
        for (let y = SPACING; y < h; y += SPACING) {
          const dx = x - eased.x
          const dy = y - eased.y
          const dist = Math.hypot(dx, dy)
          const near = Math.max(0, 1 - dist / REACH)

          if (near <= 0.01) {
            ctx.fillStyle = ink.rule
            ctx.globalAlpha = 0.32
            ctx.fillRect(x, y, 1, 1)
          } else {
            // Push the point gently away from the cursor and grow it.
            const push = near * 5
            const px = x + (dx / (dist || 1)) * push
            const py = y + (dy / (dist || 1)) * push
            const size = 1 + near * 2.4
            ctx.fillStyle = near > 0.55 ? ink.signal : ink.rule
            ctx.globalAlpha = 0.3 + near * 0.6
            ctx.fillRect(px - size / 2, py - size / 2, size, size)
          }
        }
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const themeObserver = new MutationObserver(() => {
      ink = readInk()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove)
    document.addEventListener('pointerleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas className="hero-grid" ref={ref} aria-hidden="true" />
}
