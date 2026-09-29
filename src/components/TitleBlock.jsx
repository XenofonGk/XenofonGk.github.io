import { profile } from '../data/profile.js'
import { useI18n } from '../i18n/index.jsx'
import Icon from './Icon.jsx'

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
          <div className="cell cell-name">
            <span className="k">{t('home.permit.contractor')}</span>
            <span className="v big">{profile.name}</span>
          </div>
          <div className="cell">
            <span className="k">{t('footer.location')}</span>
            <span className="v">{t('about.specValues.based')}</span>
          </div>
          <div className="cell">
            <span className="k">{t('footer.contact')}</span>
            <span className="v links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Icon name="external" size={12} /></a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Icon name="external" size={12} /></a>
            </span>
          </div>
          <div className="cell">
            <span className="k">{t('footer.revision')}</span>
            <span className="v">{t('home.permit.no')}</span>
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
