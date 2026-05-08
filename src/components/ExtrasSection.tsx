import { EXTRAS_ROWS } from '../config'

export function ExtrasSection() {
  return (
    <section
      id="extra"
      className="pkg-band pkg-band-white pkg-extra-section"
      aria-labelledby="pkg-extra-title"
      aria-describedby="pkg-extra-desc"
    >
      <div className="pkg-inner">
        <header className="pkg-extra-head">
          <p className="pkg-eyebrow pkg-packages-eyebrow">Fuori dai piani</p>
          <h2 id="pkg-extra-title" className="pkg-section-title pkg-extra-title">
            Extra a consumo
          </h2>
          <p id="pkg-extra-desc" className="pkg-section-sub pkg-extra-lead">
            Quando serve uscire dai volumi del mese: annunci signer, contenuti urgenti,
            caroselli o formati lunghi fuori lista. Qui i riferimenti indicativi: in
            conferma sempre preventivo scritto prima di partire.
          </p>
        </header>

        <div className="pkg-extra-panel">
          <dl className="pkg-extra-def">
            {EXTRAS_ROWS.map((row) => (
              <div key={row.label} className="pkg-extra-row">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>

          <p className="pkg-extra-foot">
            Urgenze, weekend e festivi sono validi solo dopo messaggio confermato; eventuali
            percentuali sulle ore ordinarie sono già segnate in tabella.
          </p>
        </div>
      </div>
    </section>
  )
}
