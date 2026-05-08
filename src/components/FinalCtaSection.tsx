import { KATAHERO_URL, whatsappHref } from '../config'

const WA_FINAL = whatsappHref(
  'Ciao! Ho letto la pagina pacchetti agenzie basket e vorrei parlare del piano più adatto.',
)

export function FinalCtaSection() {
  return (
    <section className="pkg-final" aria-labelledby="pkg-final-title">
      <div className="pkg-inner pkg-final-inner">
        <h2 id="pkg-final-title" className="pkg-final-title">
          Porta ordine alla comunicazione dei tuoi atleti.
        </h2>
        <p className="pkg-final-text">
          Scegli il pacchetto più adatto alla fase della tua agenzia e iniziamo
          a trasformare aggiornamenti, firme e prestazioni in contenuti chiari
          e professionali.
        </p>
        <div className="pkg-final-actions">
          <a className="pkg-btn pkg-btn-primary" href={WA_FINAL}>
            Scrivimi su WhatsApp
          </a>
          <a className="pkg-btn pkg-btn-ghost" href={KATAHERO_URL}>
            Torna a KataHero
          </a>
        </div>
      </div>
    </section>
  )
}
