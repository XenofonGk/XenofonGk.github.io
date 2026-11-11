'use client'

import dynamic from 'next/dynamic'
import { useId, useState } from 'react'
import type { DemoId } from '@/lib/portfolio'

const loading = () => (
  <p className="demo-note">Loading the WebAssembly module…</p>
)
const demos: Record<DemoId, React.ComponentType> = {
  'train-yard': dynamic(() => import('./demos/TrainYardDemo'), {
    ssr: false,
    loading,
  }),
  arenacore: dynamic(() => import('./demos/ArenaCoreDemo'), {
    ssr: false,
    loading,
  }),
}

/* The demo only downloads its WebAssembly once someone asks for it, so pages
   stay light for people who just want to read. */
export default function DemoPanel({
  demo,
  label,
}: {
  demo: DemoId
  label: string
}) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const Demo = demos[demo]
  return (
    <div className="demo-panel">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="button"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {open ? (
            <rect x="6" y="6" width="12" height="12" />
          ) : (
            <path d="M7 4.5v15l12.5-7.5z" />
          )}
        </svg>
        {open ? 'Close the demo' : label}
      </button>
      <div id={id} hidden={!open} className="demo-mount">
        {open && <Demo />}
      </div>
    </div>
  )
}
