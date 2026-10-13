import { useI18n } from '../i18n/index.jsx'
import AsBuilt from '../components/AsBuilt.jsx'
import Inspection from '../components/Inspection.jsx'

/* The home server: the as-built drawing, the live reading, and how a change
   gets from a push to production. */
export default function EnginePage() {
  const { t } = useI18n()
  const steps = t('engine.steps')
  const notes = t('home.hostPoints')

  return (
    <>
      <section className="section page-head">
        <div className="wrap">
          <p className="page-kicker mono" data-reveal>{t('engine.label')}</p>
          <h1 className="stencil" data-reveal>{t('engine.title')}</h1>
          <p className="section-intro" data-reveal>{t('engine.intro')}</p>
        </div>
      </section>

      <section className="section drawing-sheet" aria-labelledby="asbuilt-title">
        <div className="wrap">
          <AsBuilt />
          <div className="engine-grid">
            <div>
              <h2 data-reveal>{t('engine.statusTitle')}</h2>
              <div data-reveal><Inspection /></div>
            </div>
            <div>
              <h2 data-reveal>{t('home.hostTitle')}</h2>
              <ol className="notes" data-reveal>
                {notes.map((p, i) => (
                  <li key={p.slice(0, 20)}><span className="n data">{i + 1}.</span><span>{p}</span></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="steps-title">
        <div className="wrap">
          <h2 id="steps-title" data-reveal>{t('engine.stepsTitle')}</h2>
          <ol className="steps-rail" data-reveal>
            {steps.map((s, i) => (
              <li key={s.slice(0, 20)}>
                <span className="step-no stencil" aria-hidden="true">{i + 1}</span>
                <p>{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="backup-title">
        <div className="wrap backup-box" data-reveal>
          <h2 id="backup-title">{t('engine.backupTitle')}</h2>
          <p>{t('engine.backupBody')}</p>
          <p className="fine">{t('engine.privateNote')}</p>
        </div>
      </section>
    </>
  )
}
