import { specKeys, jobs, skillGroups } from '../data/profile.js'
import { useI18n } from '../i18n/index.jsx'

export default function AboutPage() {
  const { t } = useI18n()
  const paragraphs = t('about.paragraphs')

  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="mono callout" data-reveal>
            <span className="n">§01</span>
            <span>{t('about.label')}</span>
            <span className="line" aria-hidden="true"></span>
            <span>{t('about.scale')}</span>
          </p>
          <h1 data-reveal>{t('about.title')}</h1>
          <div className="prose" data-reveal>
            {paragraphs.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
          </div>

          <div className="spec-table" data-reveal>
            {specKeys.map((k) => (
              <div className="cell" key={k}>
                <span className="k">{t(`about.specs.${k}`)}</span>
                <span className="v">{t(`about.specValues.${k}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout" data-reveal>
            <span className="n">§02</span>
            <span>{t('about.experienceLabel')}</span>
            <span className="line" aria-hidden="true"></span>
            <span>{t('about.experienceNote')}</span>
          </p>
          <h2 data-reveal>{t('about.experienceTitle')}</h2>
          {jobs.map((job) => (
            <div className="job" key={job.key} data-reveal>
              <div className="when">{t(`about.jobs.${job.key}.date`)}</div>
              <div>
                <h3>
                  {t(`about.jobs.${job.key}.title`)} <span className="co">— {job.co}</span>
                </h3>
                <ul>
                  {t(`about.jobs.${job.key}.bullets`).map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="mono callout" data-reveal>
            <span className="n">§03</span>
            <span>{t('about.skillsLabel')}</span>
            <span className="line" aria-hidden="true"></span>
            <span>{t('about.skillsNote')}</span>
          </p>
          <h2 data-reveal>{t('about.skillsTitle')}</h2>
          <div className="chip-grid" data-reveal>
            {skillGroups.map((cat) => (
              <div key={cat.key}>
                <h3>{t(`about.skillGroups.${cat.key}`)}</h3>
                <div className="chip-row">
                  {cat.items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
