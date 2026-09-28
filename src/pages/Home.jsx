import { Link } from 'react-router'
import { useI18n } from '../i18n/index.jsx'
import { liveNow } from '../data/projects.js'

export default function Home() {
  const { t } = useI18n()
  const hostPoints = t('home.hostPoints')

  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <p className="eyebrow" data-reveal>
            <span className="status-dot" aria-hidden="true"></span>
            {t('home.eyebrow')}
          </p>
          <h1 className="display" data-reveal>{t('home.headline')}</h1>
          <p className="lede" data-reveal>{t('home.lede')}</p>
          <div className="cta-row" data-reveal>
            <a className="btn solid" href="#live">{t('home.ctaWork')}</a>
            <Link className="btn" to="/projects">{t('home.ctaProjects')}</Link>
            <Link className="btn ghost" to="/contact">{t('home.ctaContact')}</Link>
          </div>
        </div>
      </section>

      <section className="section" id="live" aria-labelledby="live-title">
        <div className="wrap">
          <p className="eyebrow" data-reveal>{t('home.liveLabel')}</p>
          <h2 id="live-title" data-reveal>{t('home.liveTitle')}</h2>
          <p className="section-intro" data-reveal>{t('home.liveIntro')}</p>

          <ul className="card-grid" role="list">
            {liveNow.map((c) => (
              <li className="card live-card" key={c.id} data-reveal>
                <div className="card-top">
                  <span className={`kind kind-${c.kind}`}>{t(`home.kinds.${c.kind}`)}</span>
                  <span className="live-pill">
                    <span className="status-dot" aria-hidden="true"></span>
                    {t('home.live')}
                  </span>
                </div>
                <h3>{t(`home.cards.${c.id}.title`)}</h3>
                <p>{t(`home.cards.${c.id}.note`)}</p>
                <p className="domain mono">{c.domain}</p>
                <div className="card-actions">
                  <a className="btn solid small" href={c.url} target="_blank" rel="noopener noreferrer">
                    {t('home.visit')} ↗
                  </a>
                  <Link className="btn small" to={c.to}>
                    {t(c.kind === 'client' ? 'home.caseStudy' : 'home.details')}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section band" aria-labelledby="host-title">
        <div className="wrap split">
          <div>
            <p className="eyebrow" data-reveal>{t('home.hostLabel')}</p>
            <h2 id="host-title" data-reveal>{t('home.hostTitle')}</h2>
            <p className="section-intro" data-reveal>{t('home.hostIntro')}</p>
            <div className="cta-row" data-reveal>
              <Link className="btn" to="/projects/home-server">{t('home.hostCta')}</Link>
            </div>
          </div>
          <ol className="steps" data-reveal>
            {hostPoints.map((p, i) => (
              <li key={p.slice(0, 20)}>
                <span className="step-n mono">{String(i + 1).padStart(2, '0')}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-title">
        <div className="wrap">
          <p className="eyebrow" data-reveal>{t('home.featuredLabel')}</p>
          <h2 id="featured-title" data-reveal>{t('home.featuredTitle')}</h2>
          <p className="section-intro" data-reveal>{t('home.featuredBody')}</p>
          <div className="cta-row" data-reveal>
            <Link className="btn solid" to="/projects/train-yard-manager">
              {t('home.featuredCta')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
