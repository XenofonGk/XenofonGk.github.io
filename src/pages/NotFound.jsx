import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="mono callout">
          <span className="n">404</span>
          <span>Sheet not found</span>
          <span className="line" aria-hidden="true"></span>
        </p>
        <h1 className="display">Not on any drawing</h1>
        <p className="lede" style={{ marginTop: '20px' }}>
          That page doesn&rsquo;t exist. It may have been renamed, or the link may be wrong.
        </p>
        <div className="cta-row" style={{ marginTop: '28px' }}>
          <Link className="btn solid" to="/">Back to start</Link>
          <Link className="btn" to="/projects">See the projects</Link>
        </div>
      </div>
    </section>
  )
}
