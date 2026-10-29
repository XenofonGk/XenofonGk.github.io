'use client'

import dynamic from 'next/dynamic'
import { useId, useState } from 'react'

const loading = () => <p className="demo-note">Loading the WebAssembly module…</p>
const demos = {
  'train-yard': dynamic(() => import('./demos/TrainYardDemo'), { ssr: false, loading }),
  arenacore: dynamic(() => import('./demos/ArenaCoreDemo'), { ssr: false, loading }),
}

/* The demo only downloads its WebAssembly once someone asks for it, so the
   Projects page stays light for people who just want to read. */
export default function DemoPanel({ demo, label }: { demo: keyof typeof demos; label: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const Demo = demos[demo]
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-accent px-4 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-hover"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {open ? <rect x="6" y="6" width="12" height="12" rx="2" /> : <path d="M8 5.5v13l10.5-6.5z" />}
        </svg>
        {open ? 'Close the demo' : label}
      </button>
      <div id={id} hidden={!open} className="mt-5">
        {open && <Demo />}
      </div>
    </div>
  )
}
