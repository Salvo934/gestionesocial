import { KATAHERO_URL } from '../config'

export function SiteFooter() {
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
      </div>
    </footer>
  )
}
