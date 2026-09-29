/*
 * The site's few icons, drawn once in one stroke weight so they sit with the
 * hairline rules instead of arriving as font glyphs.
 */
const PATHS = {
  external: 'M6 3h7v7M13 3 5 11M3 6v7h7',
  arrow: 'M3 8h10M9 4l4 4-4 4',
  down: 'M8 3v10M4 9l4 4 4-4',
  sun: 'M8 5.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6 13 13M3 13l1.4-1.4M11.6 4.4 13 3',
  moon: 'M13 10.2A5.5 5.5 0 0 1 5.8 3a5.5 5.5 0 1 0 7.2 7.2Z',
  close: 'M3.5 3.5l9 9M12.5 3.5l-9 9',
  back: 'M13 8H3M7 4 3 8l4 4',
}

export default function Icon({ name, size = 14 }) {
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
