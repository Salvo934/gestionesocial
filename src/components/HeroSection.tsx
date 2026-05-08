import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import {
  getPackagesAriaList,
  getPackagesMidDotLine,
  whatsappHref,
} from '../config'

const PACKAGE_LINE_MID_DOT = getPackagesMidDotLine()

const WA_REQUEST = whatsappHref(
  'Ciao, ti scrivo dalla pagina pacchetti agenzie basket. Vorrei capire quale piano copre meglio il mio caso (roster, frequenza news, tempi). Quando puoi rispondere corto anche solo su WhatsApp?',
)

const POINTS = [
  'Nel preventivo: quanti contenuti social al mese, formati inclusi e tempi prima di pubblicare.',
  'WhatsApp riservata a revisioni puntuali e a cosa postare quando cambia il mercato.',
  'Tone of voice, grafica e testi allineati al brand che mostrate a club e sponsor.',
] as const

const AUTOPLAY_MS = 7800

/** Sfondo hero: file in `public/` */
const HERO_BACKGROUND_VIDEO_SRC = '/sfondohero2.mp4'

const SLIDES = [
  {
    eyebrow: 'Gestione social · Basket & agenzie',
    headline: (
      <>
        Ci occupiamo noi dei{' '}
        <span className="pkg-hero-title-accent">social degli atleti</span>: post, stories e coerenza
        sul brand della vostra agenzia.
      </>
    ),
    lead:
      'Portiamo in feed firme, media day e notizie di mercato: calendario, impaginazione e copy pronti da pubblicare, senza perdere giorni sulla creazione contenuti.',
    dotLabel: 'Social del roster sempre alimentati e curati',
  },
  {
    eyebrow: 'Piani modulari · Volumi social chiari',
    headline: (
      <>
        Picchi di stagione e feed che esplode? Teniamo sotto controllo volumi e tempi nei{' '}
        <span className="pkg-hero-title-accent">social</span> senza rinunciare a qualità dichiarata.
      </>
    ),
    lead: `${PACKAGE_LINE_MID_DOT}: contenuti inclusi per mese e consegna in capitolato, più WhatsApp quando serve decidere sul feed in velocità.`,
    dotLabel: 'Capacità sui contenuti concordata prima dell’accordo',
  },
] as const

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const touchStart = useRef<number | null>(null)
  const bgVideoRef = useRef<HTMLVideoElement | null>(null)
  const sliderId = useId()

  const n = SLIDES.length

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const el = bgVideoRef.current
    if (!el) return
    if (reduceMotion) {
      el.pause()
    } else {
      void el.play().catch(() => {
        /* autoplay bloccati: resta primo frame fino all’interazione */
      })
    }
  }, [reduceMotion])

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + n) % n)
    },
    [n],
  )

  const goTo = useCallback((i: number) => {
    setIndex(i)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return undefined
    const intervalId = window.setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(intervalId)
  }, [paused, reduceMotion, n])

  const eyebrowIds = useMemo(() => SLIDES.map((_, i) => `${sliderId}-eyebrow-${i}`), [sliderId])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (start == null) return
    const delta = start - e.changedTouches[0].clientX
    if (delta > 56) go(1)
    else if (delta < -56) go(-1)
  }

  return (
    <section
      className={`pkg-hero${reduceMotion ? ' pkg-hero--reduce-motion' : ''}`}
      aria-roledescription="carousel"
      aria-label="Hero — gestione social e contenuti pubblicati sul roster basket"
    >
      <div className="pkg-hero-media" aria-hidden="true">
        <video
          ref={bgVideoRef}
          className="pkg-hero-bg-video"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src={HERO_BACKGROUND_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="pkg-hero-bg-readability" />
      </div>
      <div className="pkg-hero-shell">
        <h1 id="pkg-hero-title" className="pkg-sr-only">
          Gestione social per roster basket · post e stories curati · piani per agenzie e rappresentanze —
          KataHero
        </h1>

        <div className="pkg-hero-grid">
          <div
            className="pkg-hero-copy"
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
          >
            <div className="pkg-hero-slider" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
              <div
                className="pkg-hero-slider-view"
                style={{ ['--hero-slides']: n } as React.CSSProperties}
                tabIndex={0}
                aria-label={`Slide Hero. Usa freccia sinistra e destra per cambiare. Slide attiva ${index + 1} di ${n}.`}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') {
                    e.preventDefault()
                    go(-1)
                  }
                  if (e.key === 'ArrowRight') {
                    e.preventDefault()
                    go(1)
                  }
                }}
              >
                <div
                  className="pkg-hero-slider-track"
                  style={{
                    transform: `translate3d(-${(index * 100) / n}%, 0, 0)`,
                  }}
                >
                  {SLIDES.map((slide, i) => (
                    <article
                      key={`hero-slide-${i}`}
                      className="pkg-hero-slide"
                      id={`${sliderId}-slide-${i}`}
                      aria-hidden={i !== index}
                      aria-labelledby={eyebrowIds[i]}
                    >
                      <p id={eyebrowIds[i]} className="pkg-hero-eyebrow">
                        {slide.eyebrow}
                      </p>
                      <p className="pkg-hero-title">{slide.headline}</p>
                      <p className="pkg-hero-lead">{slide.lead}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="pkg-hero-slider-controls" aria-hidden="false">
                <button type="button" className="pkg-hero-slider-btn" aria-label="Slide precedente" onClick={() => go(-1)}>
                  <span aria-hidden>‹</span>
                </button>

                <div className="pkg-hero-slider-dots">
                  {SLIDES.map((slide, i) => (
                    <button
                      key={`dot-${i}`}
                      type="button"
                      aria-label={`Slide ${i + 1}: ${slide.dotLabel}`}
                      aria-current={i === index ? 'true' : undefined}
                      className={`pkg-hero-slider-dot${i === index ? ' pkg-hero-slider-dot--active' : ''}`}
                      onClick={() => goTo(i)}
                    />
                  ))}
                </div>

                <button type="button" className="pkg-hero-slider-btn" aria-label="Slide successiva" onClick={() => go(1)}>
                  <span aria-hidden>›</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pkg-hero-rail">
            <aside className="pkg-hero-aside" aria-label="Come gestiamo i social">
              <p className="pkg-hero-aside-kicker">Sul feed, in pratica</p>
              <ul className="pkg-hero-features">
                {POINTS.map((text, i) => (
                  <li key={text} className="pkg-hero-feature">
                    <span className="pkg-hero-feature-index" aria-hidden>
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="pkg-hero-feature-text">{text}</p>
                  </li>
                ))}
              </ul>
            </aside>

            <div className="pkg-hero-rail-footer">
              <div className="pkg-hero-actions">
                <a
                  className="pkg-btn pkg-btn-primary pkg-hero-primary-cta"
                  href={WA_REQUEST}
                  aria-label="Richiedi proposta o informazioni via WhatsApp"
                >
                  <span className="pkg-hero-cta-txt pkg-hero-cta-txt--m" aria-hidden="true">
                    Richiedi proposta via WhatsApp
                  </span>
                  <span className="pkg-hero-cta-txt pkg-hero-cta-txt--d" aria-hidden="true">
                    Info via WhatsApp
                  </span>
                  <span className="pkg-hero-primary-cta-ico" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  className="pkg-btn pkg-btn-secondary pkg-hero-secondary-cta"
                  href="#pacchetti"
                  aria-label={`Apri il listino piani ${getPackagesAriaList()}`}
                >
                  <span className="pkg-hero-cta-txt pkg-hero-cta-txt--m" aria-hidden="true">
                    Listino piani {PACKAGE_LINE_MID_DOT}
                  </span>
                  <span className="pkg-hero-cta-txt pkg-hero-cta-txt--d" aria-hidden="true">
                    Listino piani
                  </span>
                </a>
              </div>

              <p className="pkg-hero-note">
                Da <strong className="pkg-hero-price">390&nbsp;€</strong> / mese · canale WhatsApp prioritario · risposta
                durante l&apos;orario lavorativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
