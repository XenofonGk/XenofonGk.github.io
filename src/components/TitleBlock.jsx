import { profile } from '../data/profile.js'
import { useI18n } from '../i18n/index.jsx'

/*
 * The footer is styled as a drawing's title block — the boxed panel in the
 * corner of a technical drawing carrying drawn-by, date, scale and revision.
 */
export default function TitleBlock() {
  const { t, meta } = useI18n()

  return (
    <footer className="title-block">
      <div className="wrap">
        <div className="grid">
          <div className="cell">
            <span className="k">{t('footer.drawnBy')}</span>
            <span className="v">{profile.name}</span>
          </div>
          <div className="cell">
            <span className="k">{t('footer.location')}</span>
            <span className="v">{t('about.specValues.based')}</span>
          </div>
          <div className="cell">
            <span className="k">{t('footer.contact')}</span>
            <span className="v">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
          </div>
          <div className="cell">
            <span className="k">{t('footer.revision')}</span>
            <span className="v">2026 · Rev. 03</span>
          </div>
        </div>

        {/* Shown only when a machine-assisted locale is active. Stating this is
            the honest alternative to letting an unverified translation of
            someone's CV pass as their own writing. */}
        {!meta.verified && (
          <p className="translation-note">{t('translationNote')}</p>
        )}
      </div>
    </footer>
  )
}
