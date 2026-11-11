import type { ReactNode } from 'react'

/** A numbered section label with a dimension line, the way a drawing
    labels a detail: "§01  Selected work  |———|  As-built". */
export default function Callout({
  n,
  children,
  note,
}: {
  n: string
  children: ReactNode
  note?: ReactNode
}) {
  return (
    <p className="callout">
      <span className="callout-n">§{n}</span>
      <span>{children}</span>
      <span className="callout-line" aria-hidden="true" />
      {note && <span>{note}</span>}
    </p>
  )
}
