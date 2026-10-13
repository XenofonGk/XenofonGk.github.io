import { useI18n } from '../i18n/index.jsx'
import { useStatus, ago } from '../status.jsx'

/* The live reading from the home server as a panel of figures. */
export default function Inspection() {
  const { t, lang } = useI18n()
  const { phase, data } = useStatus()
  const k = (key) => t(`home.inspect.${key}`)

  const uptime = (secs) => {
    const d = Math.floor(secs / 86400)
    return d >= 1
      ? k('days').replace('{n}', d)
      : k('hours').replace('{n}', Math.max(1, Math.floor(secs / 3600)))
  }

  return (
    <section className="inspection" aria-labelledby="inspect-title" aria-busy={phase === 'loading'}>
      <header className="inspection-head">
        <h3 id="inspect-title" className="mono">{k('title')}</h3>
        <span className={`reading reading-${phase}`}>
          <span className="lamp" aria-hidden="true"></span>
          <span className="mono">{phase === 'loading' ? k('loading') : k('live')}</span>
        </span>
      </header>

      {phase === 'down' && <p className="inspection-empty">{k('unavailable')}</p>}

      {phase !== 'down' && (
        <dl className="readings" aria-live="polite">
          <div>
            <dt className="mono">{k('services')}</dt>
            <dd className="data">{data ? `${data.services.up} / ${data.services.total}` : '—'}</dd>
          </div>
          <div>
            <dt className="mono">{k('checks')}</dt>
            <dd className="data">{data?.checks ? `${data.checks.ok} / ${data.checks.total}` : '—'}</dd>
          </div>
          <div>
            <dt className="mono">{k('deploy')}</dt>
            <dd className="data">
              {data?.deploy?.at ? ago(data.deploy.at, lang) : '—'}
              {data?.deploy?.verified && <small>{k('verified')}</small>}
            </dd>
          </div>
          <div>
            <dt className="mono">{k('backup')}</dt>
            <dd className="data">{data?.backup?.at ? ago(data.backup.at, lang) : '—'}</dd>
          </div>
          <div>
            <dt className="mono">{k('uptime')}</dt>
            <dd className="data">{data ? uptime(data.uptime) : '—'}</dd>
          </div>
          <div>
            <dt className="mono">{k('taken')}</dt>
            <dd className="data">{data ? ago(data.generated, lang) : '—'}</dd>
          </div>
        </dl>
      )}
    </section>
  )
}
