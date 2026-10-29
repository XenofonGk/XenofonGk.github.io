'use client'
import { useState } from 'react'
export default function MutationExample() {
  const [input, setInput] = useState(1)
  return (
    <div className="mutation-example">
      <div>
        <p className="eyebrow">An illustrative boundary mutation</p>
        <h3>Would a test notice one changed character?</h3>
        <p>
          ai-eng changes code to probe the tests around it. This small example
          shows why the input matters; it does not run the project’s test suite.
        </p>
        <div className="scenario-row" aria-label="Choose an example input">
          {[1, 0, -1].map((n) => (
            <button
              key={n}
              aria-pressed={input === n}
              onClick={() => setInput(n)}
            >
              Input: {n}
            </button>
          ))}
        </div>
      </div>
      <div className="code-comparison">
        <div>
          <span>Original</span>
          <code>return amount &gt; 0</code>
          <output>{String(input > 0)}</output>
        </div>
        <div>
          <span>Mutant</span>
          <code>return amount &gt;= 0</code>
          <output>{String(input >= 0)}</output>
        </div>
        <p role="status">
          {input === 0
            ? 'At the boundary, the results differ. A test expecting false for zero would catch this mutation.'
            : 'Both versions return the same result. This input alone would miss the changed boundary.'}
        </p>
      </div>
    </div>
  )
}
