import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, INSTAGRAM_PROFILE_URL, KATAHERO_URL, WHATSAPP_E164 } from '../config'

export function SiteFooter() {
  const telHref = `tel:+${WHATSAPP_E164}`

  return (
    <footer className="pkg-footer">
      <div className="pkg-footer-inner">
        <span className="pkg-footer-brand">
          KataHero<span className="pkg-logo-dot">.</span>
        </span>
        <p className="pkg-footer-meta">
          Personal branding, siti e contenuti per atleti —{' '}
          <a href={KATAHERO_URL}>katahero.com</a>
        </p>

        <section className="pkg-footer-contact" aria-labelledby="pkg-footer-contact-title">
          <h2 id="pkg-footer-contact-title" className="pkg-footer-contact-title">
            Contatti e social
          </h2>
          <ul className="pkg-footer-contact-list">
            <li>
              <a className="pkg-footer-contact-link" href={telHref}>
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="pkg-footer-contact-link" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                className="pkg-footer-contact-link"
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram · @katahero
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  )
}
