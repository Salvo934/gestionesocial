import { COMMUNICATE_ITEMS } from '../config'

export function CommunicateSection() {
  return (
    <section
      id="comunicazione"
      className="pkg-section pkg-section-comm"
      aria-labelledby="pkg-com-title"
    >
      <div className="pkg-inner pkg-comm-inner">
        <header className="pkg-comm-head">
          <div className="pkg-comm-head-copy">
            <p className="pkg-eyebrow pkg-comm-eyebrow">Cosa mettiamo in campo</p>
            <h2 id="pkg-com-title" className="pkg-section-title pkg-comm-title">
              Cosa comunichiamo
            </h2>
            <p className="pkg-section-sub pkg-comm-sub">
              Format pensati per agency communication: chiarezza su firme, transfer
              e prestazioni — oltre il semplice recap di game day.
            </p>
          </div>

          <div className="pkg-comm-stat" aria-hidden="true">
            <span className="pkg-comm-stat-num">6</span>
            <span className="pkg-comm-stat-label">linee editoriali</span>
            <span className="pkg-comm-stat-hint">
              pronte per post, stories e comunicazioni rapide
            </span>
          </div>
        </header>

        <ul className="pkg-comm-grid">
          {COMMUNICATE_ITEMS.map((label, index) => (
            <li key={label} className="pkg-comm-item">
              <span className="pkg-comm-num" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="pkg-comm-text">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
