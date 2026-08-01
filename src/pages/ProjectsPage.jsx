import { Link, useNavigate, useParams } from 'react-router'
import { projects, alsoBuilt, findProject } from '../data/projects.js'
import { useI18n } from '../i18n/index.jsx'
import ProjectModal from '../components/ProjectModal.jsx'

export default function ProjectsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { t } = useI18n()
  const active = slug ? findProject(slug) : null
  const index = active ? projects.indexOf(active) : -1

  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="mono callout" data-reveal>
            <span className="n">§02</span>
            <span>{t('projects.label')}</span>
            <span className="line" aria-hidden="true"></span>
            <span>{t('projects.note')}</span>
          </p>
          <h1 data-reveal>{t('projects.title')}</h1>
          <div className="prose" data-reveal>
            <p>{t('projects.intro')}</p>
          </div>

          <div className="proj-list">
            {projects.map((p, i) => (
              <Link className="proj-row" to={`/projects/${p.slug}`} key={p.slug} data-reveal>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  {/* h2 rather than h3: these sit directly under the page h1,
                      and skipping a level breaks the document outline. */}
                  <h2>
                    {t(`projects.items.${p.id}.title`)}
                    {p.demo && <span className="badge">{t('projects.liveDemo')}</span>}
                  </h2>
                  <p>{t(`projects.items.${p.id}.summary`)}</p>
                  <span className="tags">{p.stack.join(' · ')}</span>
                </span>
                <span className="go">{t('projects.open')} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout" data-reveal>
            <span className="n">§03</span>
            <span>{t('projects.alsoLabel')}</span>
            <span className="line" aria-hidden="true"></span>
          </p>
          <h2 data-reveal>{t('projects.alsoTitle')}</h2>
          <div className="proj-list">
            {alsoBuilt.map((p) => (
              <a
                className="proj-row"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                key={p.id}
                data-reveal
              >
                <span className="idx">—</span>
                <span>
                  <h3>{t(`projects.also.${p.id}.title`)}</h3>
                  <p>{t(`projects.also.${p.id}.note`)}</p>
                </span>
                <span className="go">{t('projects.repo')} ↗</span>
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
