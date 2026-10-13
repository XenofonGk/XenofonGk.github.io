import { useI18n } from '../i18n/index.jsx'

/*
 * The home server drawn as an as-built diagram: the request path along the
 * top, the deploy path underneath, and the jobs that keep it honest at the
 * bottom. Wires carry pathLength=1 so CSS can draw them in once the sheet
 * scrolls into view.
 */

const BOXES = [
  { id: 'visitor', x: 20, y: 52, w: 150 },
  { id: 'edge', x: 230, y: 52, w: 180 },
  { id: 'proxy', x: 530, y: 52, w: 150 },
  { id: 'apps', x: 760, y: 52, w: 170 },
  { id: 'ci', x: 20, y: 212, w: 170 },
  { id: 'registry', x: 240, y: 212, w: 170 },
  { id: 'deploy', x: 530, y: 212, w: 180 },
  { id: 'backup', x: 530, y: 332, w: 180 },
  { id: 'alerts', x: 760, y: 332, w: 170 },
]
const H = 48

const WIRES = [
  // request path
  { d: 'M170 76 H230' },
  { d: 'M410 76 H530', dashed: true },
  { d: 'M680 76 H760' },
  // deploy path
  { d: 'M190 236 H240' },
  { d: 'M410 236 H530' },
  { d: 'M620 212 V160 H845 V100' },
]

export default function AsBuilt() {
  const { t } = useI18n()
  const k = (key) => t(`home.diagram.${key}`)

  return (
    <figure className="as-built" data-reveal>
      <svg viewBox="0 0 960 420" role="img" aria-labelledby="asbuilt-title asbuilt-desc">
        <title id="asbuilt-title">{k('title')}</title>
        <desc id="asbuilt-desc">{k('alt')}</desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 1 L9 5 L0 9" fill="none" stroke="currentColor" strokeWidth="1.4" />
          </marker>
        </defs>

        {/* The house: everything right of the wall runs on the laptop. */}
        <rect className="host" x="480" y="20" width="470" height="390" />
        <text className="host-label" x="496" y="40">{k('host')}</text>
        <line className="wall" x1="470" y1="20" x2="470" y2="410" />
        <text className="wall-label" transform="translate(460 400) rotate(-90)">{k('router')}</text>

        {/* Grid ticks along the top edge, like a drawing's column lines. */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <line key={i} className="tick" x1={20 + i * 76} y1="6" x2={20 + i * 76} y2="12" />
        ))}

        {WIRES.map((w, i) => (
          <path
            key={w.d}
            className={`wire${w.dashed ? ' dashed' : ''}`}
            d={w.d}
            pathLength="1"
            markerEnd="url(#arrow)"
            style={{ '--i': i }}
          />
        ))}
        <text className="wire-label" x="470" y="66" textAnchor="middle">{k('tunnel')}</text>

        {BOXES.map((b) => (
          <g key={b.id} className={`node node-${b.id}`}>
            <rect x={b.x} y={b.y} width={b.w} height={H} />
            <text x={b.x + b.w / 2} y={b.y + H / 2 + 5} textAnchor="middle">{k(b.id)}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
