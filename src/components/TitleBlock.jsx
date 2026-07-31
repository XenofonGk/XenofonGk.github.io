import { profile } from '../data/profile.js'

/*
 * The footer is styled as a drawing's title block — the boxed panel in the
 * corner of a technical drawing carrying drawn-by, date, scale and revision.
 */
export default function TitleBlock() {
  return (
    <footer className="title-block">
      <div className="wrap">
        <div className="grid">
          <div className="cell">
            <span className="k">Drawn by</span>
            <span className="v">{profile.name}</span>
          </div>
          <div className="cell">
            <span className="k">Location</span>
            <span className="v">{profile.location}</span>
          </div>
          <div className="cell">
            <span className="k">Contact</span>
            <span className="v">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
          </div>
          <div className="cell">
            <span className="k">Revision</span>
            <span className="v">2026 · Rev. 03</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
