import { useI18n } from '../i18n/index.jsx'
import { cv } from '../data/cv.js'
import Icon from '../components/Icon.jsx'

/* The CV as a page. Print styles strip the site chrome so "Print" produces the
   same one-page document as the PDFs. */
export default function CvPage() {
  const { t, lang } = useI18n()

  return (
    <>
      <section className="section page-head no-print">
        <div className="wrap">
          <p className="page-kicker mono">{t('cv.label')}</p>
          <h1 className="stencil">{t('cv.title')}</h1>
          <p className="section-intro">{t('cv.intro')}{lang !== 'en' && ` ${t('cv.englishOnly')}`}</p>
          <div className="cta-row">
            <button type="button" className="btn solid" onClick={() => window.print()}>{t('cv.print')}</button>
            <a className="btn" href="/cv/Xenofon_Gkioka_CV.pdf" download>{t('cv.pdfLetter')} <Icon name="down" /></a>
            <a className="btn" href="/cv/Xenofon_Gkioka_CV_A4.pdf" download>{t('cv.pdfA4')} <Icon name="down" /></a>
          </div>
        </div>
      </section>

      <section className="section cv-sheet-wrap">
        <div className="wrap">
          <article className="cv-sheet" lang="en" aria-label="CV">
            <header className="cv-head">
              <h2>{cv.name}</h2>
              <p>{cv.contact.join('  ·  ')}</p>
              <p>
                {cv.links.map((l, i) => (
                  <span key={l.href}>{i > 0 && '  ·  '}<a href={l.href}>{l.label}</a></span>
                ))}
              </p>
            </header>

            <h3>Summary</h3>
            <p>{cv.summary}</p>

            <h3>Technical skills</h3>
            <dl className="cv-skills">
              {cv.skills.map(([k, v]) => (
                <div key={k}><dt>{k}:</dt> <dd>{v}</dd></div>
              ))}
            </dl>

            <h3>Experience</h3>
            {cv.experience.map((e) => (
              <div className="cv-item" key={e.role + e.when}>
                <p className="cv-line"><span><strong>{e.role}</strong>{e.org && `, ${e.org}`}</span><span>{e.when}</span></p>
                {(e.context || e.where) && (
                  <p className="cv-line cv-sub"><em>{e.context}</em><span>{e.where}</span></p>
                )}
                <ul>{e.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}

            <h3>Projects</h3>
            {cv.projects.map((p) => (
              <div className="cv-item" key={p.name}>
                <p className="cv-line"><span><strong>{p.name}</strong> | {p.stack}</span><span>{p.link}</span></p>
                <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              </div>
            ))}

            <h3>Education</h3>
            {cv.education.map((e) => (
              <p className="cv-line" key={e.school}><span><strong>{e.school}</strong>, {e.what}</span><span>{e.when}</span></p>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}
