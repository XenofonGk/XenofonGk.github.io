import { Link, useNavigate, useParams } from 'react-router-dom'
import { projects, alsoBuilt, findProject } from '../data/projects.js'
import ProjectModal from '../components/ProjectModal.jsx'

export default function ProjectsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const active = slug ? findProject(slug) : null
  const index = active ? projects.indexOf(active) : -1

  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§02</span>
            <span>Projects</span>
            <span className="line" aria-hidden="true"></span>
            <span>As-built</span>
          </p>
          <h2>Selected work</h2>
          <div className="prose">
            <p>
              Open any project for the write-up and, where there is one, a demo you can run
              here in the page.
            </p>
          </div>

          <div className="proj-list">
            {projects.map((p, i) => (
              <Link className="proj-row" to={`/projects/${p.slug}`} key={p.slug}>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <h3>
                    {p.title}
                    {p.demo && <span className="badge">Live demo</span>}
                  </h3>
                  <p>{p.summary}</p>
                  <span className="tags">{p.stack.join(' · ')}</span>
                </span>
                <span className="go">Open →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout">
            <span className="n">§03</span>
            <span>Also built</span>
            <span className="line" aria-hidden="true"></span>
          </p>
          <h2>Smaller pieces</h2>
          <div className="proj-list">
            {alsoBuilt.map((p) => (
              <a
                className="proj-row"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                key={p.title}
              >
                <span className="idx">—</span>
                <span>
                  <h3>{p.title}</h3>
                  <p>{p.note}</p>
                </span>
                <span className="go">Repo ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <ProjectModal
          project={active}
          prev={index > 0 ? projects[index - 1] : null}
          next={index < projects.length - 1 ? projects[index + 1] : null}
          onClose={() => navigate('/projects')}
        />
      )}
    </>
  )
}
