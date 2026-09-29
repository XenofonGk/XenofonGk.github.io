import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { clientWork } from '../data/projects.js'
import { useI18n } from '../i18n/index.jsx'
import Icon from '../components/Icon.jsx'

export default function WorkPage() {
  const { t } = useI18n()
  const { hash } = useLocation()

  // App scrolls to the top on every route change; a link such as /work#way
  // should land on its case study instead, so this runs after that.
  useEffect(() => {
    if (!hash) return
    const id = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
    }, 50)
    return () => window.clearTimeout(id)
  }, [hash])

  return (
    <>
      <section className="section page-head">
        <div className="wrap">
          <p className="page-kicker mono" data-reveal>{t('work.label')}</p>
          <h1 className="stencil" data-reveal>{t('work.title')}</h1>
          <p className="section-intro" data-reveal>{t('work.intro')}</p>
        </div>
      </section>

      {clientWork.map((w, i) => {
        const base = `work.items.${w.id}`
        const body = t(`${base}.body`)
        return (
          <section className="section case" id={w.id} key={w.id} aria-labelledby={`${w.id}-title`}>
            <div className="wrap case-grid">
              <div className="case-main">
                {/* The client's site as a posted placard: address, name and line. */}
                <div className={`elevation elevation-${w.id}`} data-reveal aria-hidden="true">
                  <span className="elevation-no">{`A-11${i + 1}`}</span>
                  <span className="data elevation-url">{w.domain}</span>
                  <span className="elevation-title">{t(`${base}.tagline`)}</span>
                </div>
                <h2 id={`${w.id}-title`} data-reveal>{t(`${base}.title`)}</h2>
                <p className="lede" data-reveal>{t(`${base}.summary`)}</p>
                <div className="prose" data-reveal>
                  {body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
                </div>
              </div>

              <aside className="case-side" data-reveal>
                <dl className="facts">
                  <div>
                    <dt>{t('work.client')}</dt>
                    <dd>{t(`${base}.client`)}</dd>
                  </div>
                  <div>
                    <dt>{t('work.role')}</dt>
                    <dd>{t(`${base}.role`)}</dd>
                  </div>
                  <div>
                    <dt>{t('work.stack')}</dt>
                    <dd>{w.stack.join(' · ')}</dd>
                  </div>
                  <div>
                    <dt>{t('work.year')}</dt>
                    <dd>{w.year}</dd>
                  </div>
                </dl>
                <a className="btn solid block" href={w.url} target="_blank" rel="noopener noreferrer">
                  {t('work.visit')} <Icon name="external" />
                </a>
              </aside>
            </div>
          </section>
        )
      })}
    </>
  )
}
