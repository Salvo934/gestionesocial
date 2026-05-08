import { useEffect, useId, useState } from 'react'
import { KATAHERO_URL, LOGO_SRC, whatsappHref } from '../config'

const NAV_LINKS = [
  { href: '#contesto', label: 'Contesto' },
  { href: '#comunicazione', label: 'Comunicazione' },
  { href: '#pacchetti', label: 'Pacchetti' },
  { href: '#extra', label: 'Extra' },
] as const

const HEADER_WA_HREF = whatsappHref(
  'Ciao, ti scrivo dalla pagina pacchetti agenzie basket. Vorrei capire quale piano copre meglio il mio caso (roster, frequenza news, tempi).',
)

/** Sottotitolo sotto il brand: distingue questa landing dal sito katahero.com generico */
const HEADER_PAGE_TAGLINE = 'Gestione social'

const DESKTOP_NAV_MQ = '(min-width: 768px)'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileRootId = useId()

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)

    const mq = window.matchMedia(DESKTOP_NAV_MQ)
    const prevOverflow = document.body.style.overflow
    if (!mq.matches) document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      if (!mq.matches) document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_NAV_MQ)
    const onChange = () => {
      if (mq.matches) setMenuOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const closeNav = () => setMenuOpen(false)

  const menuLabelOpen = menuOpen ? 'Chiudi menu' : 'Apri menu'

  return (
    <>
      <header
        className={`pkg-topnav pkg-topnav--hero-bg${menuOpen ? ' pkg-topnav--mnav-open' : ''}`}
      >
        <div className="pkg-topnav-bar">
          <div className="pkg-topnav-bar-inner">
            <div className="pkg-topnav-row">
              <a
                className="pkg-topnav-logo"
                href={KATAHERO_URL}
                aria-label={`KataHero — ${HEADER_PAGE_TAGLINE}`}
              >
                {LOGO_SRC != null && LOGO_SRC !== '' ? (
                  <span className="pkg-topnav-brand">
                    <img
                      className="pkg-logo-img"
                      src={LOGO_SRC}
                      alt=""
                      width={140}
                      height={36}
                      aria-hidden
                    />
                    <span className="pkg-topnav-tagline">{HEADER_PAGE_TAGLINE}</span>
                  </span>
                ) : (
                  <span className="pkg-topnav-brand">
                    <span className="pkg-topnav-logo-text-row">
                      <span className="pkg-topnav-logo-text">
                        KataHero<span className="pkg-logo-dot">.</span>
                      </span>
                    </span>
                    <span className="pkg-topnav-tagline">{HEADER_PAGE_TAGLINE}</span>
                    <span className="pkg-topnav-logo-line" aria-hidden />
                  </span>
                )}
              </a>

              <nav className="pkg-topnav-pill" aria-label="Principale">
                <ul>
                  {NAV_LINKS.map(({ href, label }) => (
                    <li key={href}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pkg-topnav-actions">
                <a className="pkg-topnav-cta-consulenza" href={HEADER_WA_HREF}>
                  Richiedi consulenza<span aria-hidden>→</span>
                </a>
                <button
                  type="button"
                  className="pkg-topnav-menu-trigger"
                  aria-expanded={menuOpen}
                  aria-controls={mobileRootId}
                  aria-label={menuLabelOpen}
                  onClick={() => setMenuOpen((x) => !x)}
                >
                  <span className="pkg-sr-only">Menu</span>
                  <span className="pkg-topnav-menu-bars" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        id={mobileRootId}
        className={`pkg-mnav${menuOpen ? ' pkg-mnav--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <button
          type="button"
          className="pkg-mnav-scrim"
          aria-label="Chiudi menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeNav}
        />
        <aside className="pkg-mnav-panel">
          <div className="pkg-mnav-accent" aria-hidden />

          <div className="pkg-mnav-head">
            <div className="pkg-mnav-head-copy">
              <p className="pkg-mnav-kicker">Menu</p>
              <p className="pkg-mnav-title">Pacchetti agenzie</p>
              <p className="pkg-mnav-subtitle">Basket · Social · Coordinamento WhatsApp</p>
            </div>
            <button type="button" className="pkg-mnav-close" aria-label="Chiudi menu" onClick={closeNav}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="pkg-mnav-body" aria-label="Pagina">
            <ul className="pkg-mnav-list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="pkg-mnav-link" onClick={closeNav}>
                    <span>{label}</span>
                    <span className="pkg-mnav-link-arrow" aria-hidden>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a className="pkg-mnav-footer-cta" href={HEADER_WA_HREF} onClick={closeNav}>
              Richiedi consulenza su WhatsApp
            </a>
          </nav>
        </aside>
      </div>
    </>
  )
}
