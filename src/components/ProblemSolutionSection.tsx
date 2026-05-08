const MARQUEE_CONTEXTO_COPY =
  'Nel basket le notizie arrivano veloci: una firma, una conferma, una prestazione importante, una convocazione. Il rischio è comunicare tutto in modo disordinato o non comunicarlo affatto. KataHero aiuta procuratori e agenzie a mantenere una presenza social professionale, usando materiale e informazioni fornite dal cliente.'

export function ProblemSolutionSection() {
  return (
    <section
      id="contesto"
      className="pkg-band pkg-band-soft pkg-marquee-section"
      aria-labelledby="pkg-ps-title"
    >
      <h2 id="pkg-ps-title" className="pkg-sr-only">
        Contesto
      </h2>
      <p className="pkg-sr-only">{MARQUEE_CONTEXTO_COPY}</p>

      <div className="pkg-marquee-shell">
        <p className="pkg-marquee-kicker">Contesto</p>
        <div className="pkg-marquee" aria-hidden="true">
          <div className="pkg-marquee-viewport">
            <div className="pkg-marquee-track">
              <span className="pkg-marquee-chunk">{MARQUEE_CONTEXTO_COPY}</span>
              <span aria-hidden className="pkg-marquee-sep">
                ·
              </span>
              <span className="pkg-marquee-chunk">{MARQUEE_CONTEXTO_COPY}</span>
              <span aria-hidden className="pkg-marquee-sep">
                ·
              </span>
            </div>
          </div>
        </div>

        <div className="pkg-inner pkg-inner-narrow pkg-marquee-fallback">
          <p className="pkg-prose pkg-prose-lead">{MARQUEE_CONTEXTO_COPY}</p>
        </div>
      </div>
    </section>
  )
}
