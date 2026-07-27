export default function Hero() {
  return (
    <header className="wrap hero">
      <div className="eyebrow">Toronto → Copenhagen · Rev. 2026</div>
      <h1>I build software the way I used to build houses — <em>on spec, on time, load-bearing.</em></h1>
      <p className="lede">
        Xenofon Gkioka. Full-stack developer working in C#/.NET, React, and TypeScript.
        Currently a Software Engineer Intern at Mercell in Copenhagen. Formerly a construction
        site supervisor in Toronto — I traded blueprints for architecture diagrams.
      </p>
      <div className="cta-row">
        <a className="btn solid" href="#contact">Get in touch</a>
        <a className="btn" href="#experience">See the work</a>
        <a className="btn" href="https://github.com/xenofongk" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>

      <svg
        className="elevation"
        viewBox="0 0 900 160"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Line drawing tracing a path from a house frame to a code bracket, representing the journey from construction to software"
      >
        <path d="M20,130 L20,80 L70,40 L120,80 L120,130 Z" />
        <path d="M40,130 L40,95 L60,95 L60,130" />
        <path d="M180,130 L820,130" strokeDasharray="4 8" opacity="0.5" />
        <path className="accent" d="M760,45 L800,80 L760,115 M660,45 L620,80 L660,115" />
        <text x="10" y="150">GR / CA — SITE WORK</text>
        <text x="770" y="150" textAnchor="end">DK — SOFTWARE</text>
      </svg>
    </header>
  )
}
