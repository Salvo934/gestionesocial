import type { SVGProps } from 'react'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, INSTAGRAM_PROFILE_URL, KATAHERO_URL, WHATSAPP_E164 } from '../config'

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
    </svg>
  )
}

export function SiteFooter() {
  const telHref = `tel:+${WHATSAPP_E164}`

  return (
    <footer className="pkg-footer">
      <div className="pkg-footer-inner">
        <header className="pkg-footer-brand-block">
          <span className="pkg-footer-brand">
            KataHero<span className="pkg-logo-dot">.</span>
          </span>
          <p className="pkg-footer-meta">
            Personal branding, siti e contenuti per atleti —{' '}
            <a href={KATAHERO_URL}>katahero.com</a>
          </p>
        </header>

        <section className="pkg-footer-contact" aria-labelledby="pkg-footer-contact-title">
          <div className="pkg-footer-contact-head">
            <h2 id="pkg-footer-contact-title" className="pkg-footer-contact-title">
              Contatti e social
            </h2>
            <p className="pkg-footer-contact-sub">Scrivici o segui gli aggiornamenti su Instagram.</p>
          </div>

          <ul className="pkg-footer-contact-grid">
            <li>
              <a className="pkg-footer-tile" href={telHref}>
                <span className="pkg-footer-tile-glow pkg-footer-tile-glow--mint" aria-hidden />
                <span className="pkg-footer-tile-icon" aria-hidden>
                  <IconPhone className="pkg-footer-tile-svg" />
                </span>
                <span className="pkg-footer-tile-text">
                  <span className="pkg-footer-tile-label">Telefono</span>
                  <span className="pkg-footer-tile-value">{CONTACT_PHONE_DISPLAY}</span>
                </span>
              </a>
            </li>
            <li>
              <a className="pkg-footer-tile" href={`mailto:${CONTACT_EMAIL}`}>
                <span className="pkg-footer-tile-glow pkg-footer-tile-glow--violet" aria-hidden />
                <span className="pkg-footer-tile-icon" aria-hidden>
                  <IconMail className="pkg-footer-tile-svg" />
                </span>
                <span className="pkg-footer-tile-text">
                  <span className="pkg-footer-tile-label">Email</span>
                  <span className="pkg-footer-tile-value">{CONTACT_EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                className="pkg-footer-tile"
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pkg-footer-tile-glow pkg-footer-tile-glow--mint" aria-hidden />
                <span className="pkg-footer-tile-icon" aria-hidden>
                  <IconInstagram className="pkg-footer-tile-svg" />
                </span>
                <span className="pkg-footer-tile-text">
                  <span className="pkg-footer-tile-label">Instagram</span>
                  <span className="pkg-footer-tile-value">@katahero</span>
                </span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
