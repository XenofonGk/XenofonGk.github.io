import { Link } from 'react-router-dom'

const dims = [
  { num: '4', lbl: 'Years building things' },
  { num: '2', lbl: 'Countries shipped from' },
  { num: 'C→JS', lbl: 'Compiled to run in your browser' },
  { num: '0', lbl: 'Accessibility violations' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§00</span>
            <span>Toronto → Copenhagen</span>
            <span className="line" aria-hidden="true"></span>
            <span>Rev. 2026</span>
          </p>
          <h1 className="display">
            I build software the way I used to build <em>houses</em>
          </h1>
          <p className="lede">
            Xenofon Gkioka — full-stack developer working in C#/.NET, React and TypeScript.
            Software Engineer Intern at Mercell in Copenhagen. Formerly a construction site
            supervisor in Toronto.
          </p>
          <div className="hero-meta mono" style={{ marginTop: '28px' }}>
            <span>On spec</span>
            <span>On time</span>
            <span>Load-bearing</span>
          </div>
          <div className="cta-row">
            <Link className="btn solid" to="/projects">See the work</Link>
            <Link className="btn" to="/about">About me</Link>
            <Link className="btn" to="/contact">Get in touch</Link>
          </div>

          <div className="dims">
            {dims.map((d) => (
              <div className="d" key={d.lbl}>
                <span className="num">{d.num}</span>
                <span className="lbl">{d.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§01</span>
            <span>Featured</span>
            <span className="line" aria-hidden="true"></span>
            <span>Runs in browser</span>
          </p>
          <h2>A C program, running here</h2>
          <div className="prose">
            <p>
              The train yard validator is written in C and tested with MSTest. Because all of
              its console I/O is isolated in <strong>main.c</strong>, the logic layer compiles
              cleanly to WebAssembly — so the same code the test suite exercises runs directly
              in this page. Nothing is reimplemented in JavaScript.
            </p>
          </div>
          <div className="cta-row" style={{ marginTop: '24px' }}>
            <Link className="btn solid" to="/projects/train-yard-manager">
              Open the demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
