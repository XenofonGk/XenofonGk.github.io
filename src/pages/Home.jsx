import { useState } from 'react'
import { Link } from 'react-router'
import { useI18n } from '../i18n/index.jsx'
import { activeSites, findProject, clientWork } from '../data/projects.js'
import { profile } from '../data/profile.js'
import { useStatus, serviceUp, ago } from '../status.jsx'
import Icon from '../components/Icon.jsx'

/*
 * The home page is the notice posted on a construction site: a stencilled
 * headline on safety yellow, the building permit (with a live inspection log
 * from the home server), then the active sites. Picking a site opens its
 * permit file in place; the full file lives at /projects/<slug>.
 */

function PermitCard() {
  const { t, lang } = useI18n()
  const { phase, data } = useStatus()
  const k = (key) => t(`home.permit.${key}`)

  const state = (up) => {
    if (phase === 'loading') return { label: '…', tone: 'wait' }
    if (up === null) return { label: '—', tone: 'wait' }
    return up ? { label: k('passed'), tone: 'ok' } : { label: k('failed'), tone: 'bad' }
  }
  const rows = [
    { what: 'tasks.xgbuilds.dev', ...state(serviceUp(data, 'tasks')) },
    { what: 'resume-classifier.xgbuilds.dev', ...state(serviceUp(data, 'resume-classifier')) },
    { what: k('deploy'), label: data?.deploy?.at ? ago(data.deploy.at, lang) : '—', tone: 'plain' },
    { what: k('backup'), label: data?.backup?.at ? ago(data.backup.at, lang) : '—', tone: 'plain' },
  ]

  return (
    <aside className="permit" aria-labelledby="permit-title" data-reveal>
      <header className="permit-head">
        <h2 id="permit-title">{k('title')}</h2>
        <span className="data">{k('no')}</span>
      </header>
      <dl className="permit-grid">
        <div><dt>{k('contractor')}</dt><dd>{profile.name}</dd></div>
        <div><dt>{k('status')}</dt><dd>{k('statusValue')}</dd></div>
        <div><dt>{k('trade')}</dt><dd>{k('tradeValue')}</dd></div>
        <div><dt>{k('licensed')}</dt><dd>{k('licensedValue')}</dd></div>
      </dl>
      <div className="permit-log">
        <h3>{k('log')}</h3>
        {phase === 'down' ? (
          <p className="permit-offline">{k('offline')}</p>
        ) : (
          <ul aria-live="polite">
            {rows.map((r) => (
              <li key={r.what}>
                <span className="data">{r.what}</span>
                <strong className={`tone-${r.tone}`}>{r.label}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
      <footer className="permit-foot">
        <span>{k('last')}: {data?.generated ? ago(data.generated, lang) : '—'}</span>
        <span>{k('post')}</span>
      </footer>
    </aside>
  )
}

function stampFor(site, phase, data, t) {
  if (site.service) {
    const up = serviceUp(data, site.service)
    if (up === false) return { text: t('home.stamps.down'), tone: 'bad' }
    return { text: t('home.stamps.live'), tone: phase === 'ok' ? 'ok' : 'plain' }
  }
  return { text: t(`home.stamps.${site.stamp}`), tone: 'plain' }
}

export default function Home() {
  const { t } = useI18n()
  const { phase, data } = useStatus()
  const [picked, setPicked] = useState('ai-eng')
  const current = findProject(picked)
  const file = t(`projects.items.${picked}.file`)

  return (
    <>
      <section className="notice" aria-labelledby="notice-title">
        <div className="hazard" aria-hidden="true"></div>
        <div className="wrap notice-grid">
          <div className="notice-main">
            <p className="notice-kicker" data-reveal>{t('home.notice')}</p>
            <h1 className="stencil" id="notice-title" data-reveal>{t('home.permitTitle')}</h1>
            <p className="lede" data-reveal>{t('home.permitLede')}</p>
            <div className="cta-row" data-reveal>
              <a className="btn solid" href="#sites">{t('home.ctaSites')} <Icon name="down" /></a>
              <Link className="btn" to="/cv">{t('home.ctaCv')}</Link>
            </div>
          </div>
          <PermitCard />
        </div>
      </section>

      <section className="sites" id="sites" aria-labelledby="sites-title">
        <div className="wrap">
          <div className="sites-head">
            <h2 id="sites-title" className="stencil">{t('home.sitesTitle')}</h2>
            <p className="mono">{t('home.sitesHint')}</p>
          </div>
          <ul className="placards" role="list">
            {activeSites.map((s, i) => {
              const stamp = stampFor(s, phase, data, t)
              const on = s.id === picked
              return (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`placard${on ? ' is-on' : ''}`}
                    aria-pressed={on}
                    aria-controls="permit-file"
                    onClick={() => setPicked(s.id)}
                  >
                    <span className="placard-meta">{t('home.site')} {String(i + 1).padStart(2, '0')} · {s.trade}</span>
                    <span className="placard-name">{t(`projects.items.${s.id}.title`)}</span>
                    <span className={`stamp tone-${stamp.tone}`} style={{ '--i': i }}>{stamp.text}</span>
                  </button>
                </li>
              )
            })}
          </ul>

          <article className="file" id="permit-file" aria-live="polite" key={picked}>
            <header className="file-side">
              <span className="file-kicker">{t('home.file.label')} · {t(`projects.items.${picked}.title`)}</span>
              <h3>{t(`projects.items.${picked}.title`)}</h3>
              <p className="file-stack data">{current.stack.join(' · ')}</p>
              <div className="file-actions">
                <Link className="btn solid" to={`/projects/${current.slug}`}>{t('home.file.open')} <Icon name="arrow" /></Link>
                {current.live && (
                  <a className="btn on-ink" href={current.live} target={current.live.startsWith('https://xgbuilds.dev') ? undefined : '_blank'} rel="noopener noreferrer">
                    {t('home.file.live')} <Icon name="external" />
                  </a>
                )}
                {current.repo && (
                  <a className="btn on-ink" href={current.repo} target="_blank" rel="noopener noreferrer">
                    {t('home.file.source')} <Icon name="external" />
                  </a>
                )}
              </div>
            </header>
            <dl className="file-boxes">
              {['problem', 'approach', 'hard', 'result'].map((key, n) => (
                <div key={key} className={`box box-${key}`}>
                  <dt>{n + 1} · {t(`home.file.${key}`)}</dt>
                  <dd>{file[key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <section className="section clients" aria-labelledby="clients-title">
        <div className="wrap">
          <h2 id="clients-title" data-reveal>{t('home.clientsTitle')}</h2>
          <p className="section-intro" data-reveal>{t('home.clientsIntro')}</p>
          <ul className="client-strip" role="list">
            {clientWork.map((c) => (
              <li key={c.id} data-reveal>
                <a className="client" href={c.url} target="_blank" rel="noopener noreferrer">
                  <span className="data">{c.domain}</span>
                  <span className="client-name">{t(`work.items.${c.id}.title`)}</span>
                  <span className="client-tag">{t(`work.items.${c.id}.tagline`)}</span>
                  <Icon name="external" />
                </a>
              </li>
            ))}
          </ul>
          <Link className="btn" to="/work" data-reveal>{t('home.clientsCta')} <Icon name="arrow" /></Link>
        </div>
      </section>

      <section className="section engine-teaser" aria-labelledby="engine-title">
        <div className="wrap">
          <div className="engine-teaser-grid">
            <h2 id="engine-title" data-reveal>{t('home.engineTitle')}</h2>
            <div data-reveal>
              <p className="section-intro">{t('home.engineIntro')}</p>
              <Link className="btn solid" to="/engine-room">{t('home.engineCta')} <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section hire" aria-labelledby="hire-title">
        <div className="wrap">
          <div className="hire-box" data-reveal>
            <h2 id="hire-title" className="stencil">{t('home.contactTitle')}</h2>
            <p>{t('home.contactBody')}</p>
            <a className="btn solid" href={`mailto:${profile.email}`}>{t('home.contactCta')}</a>
          </div>
        </div>
      </section>
    </>
  )
}
