import { PACKAGES, whatsappHref } from '../config'

function packageWaMessage(name: string): string {
  return `Ciao, vorrei informazioni sulla linea "${name}" (comunicazione social per agenzie e procuratori basket). Rispondi quando puoi anche solo con una fascia oraria utile per una call corta.`
}

export function PackagesSection() {
  return (
    <section
      id="pacchetti"
      className="pkg-packages pkg-packages-section"
      aria-labelledby="pkg-packages-title"
    >
      <div className="pkg-inner">
        <header className="pkg-packages-head">
          <p className="pkg-eyebrow pkg-packages-eyebrow">Pacchetti social</p>
          <h2
            id="pkg-packages-title"
            className="pkg-section-title pkg-packages-focus"
          >
            Piano sul roster chiaro 
          </h2>
          <p className="pkg-section-sub pkg-packages-intro">
            Stesso livello su grafica e testi per tutti e tre i piani: cambia solo quanti contenuti incluiamo al mese e quanto possiamo stringere i tempi
            nei picchi di mercato. Sapete sempre cosa vi aspetta prima di firmare.
          </p>
        </header>

        <div className="pkg-cards pkg-cards-equal">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={
                pkg.recommended ? 'pkg-card pkg-card-featured' : 'pkg-card'
              }
            >
              {pkg.recommended ? (
                <span className="pkg-card-ribbon">Consigliato</span>
              ) : null}

              <div className="pkg-card-body">
                <div className="pkg-card-main">
                  <header className="pkg-card-head">
                    <h3 className="pkg-card-name">{pkg.name}</h3>
                    <p className="pkg-card-price">{pkg.priceLabel}</p>
                    <p className="pkg-card-tagline">{pkg.subtitle}</p>
                  </header>

                  <div className="pkg-card-block">
                    <p className="pkg-card-label">Cosa c’è dentro</p>
                    <ul className="pkg-card-list">
                      {pkg.includes.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="pkg-card-ideal">
                  <span className="pkg-card-ideal-label">Perfetto se</span>
                  {pkg.idealFor}
                </p>
              </div>

              <a
                className={`pkg-btn pkg-btn-block ${pkg.recommended ? 'pkg-btn-primary' : 'pkg-btn-secondary'}`}
                href={whatsappHref(packageWaMessage(pkg.name))}
              >
                {pkg.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
