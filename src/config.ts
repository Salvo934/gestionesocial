/**
 * Numero WhatsApp in formato E.164 senza + (Italia: es. 393274597773).
 */
export const WHATSAPP_E164 = '393274597773'

export const KATAHERO_URL = 'https://www.katahero.com'

/** Profilo Instagram (landing / footer). */
export const INSTAGRAM_PROFILE_URL =
  'https://www.instagram.com/katahero?igsh=b2tpbmM4bGQyazcw'

/** Email contatti footer. */
export const CONTACT_EMAIL = 'salvo.bonavita9808@gmail.com'

/** Telefono mostrato in footer (stesso E.164 di WHATSAPP_E164). */
export const CONTACT_PHONE_DISPLAY = '+39 327 459 7773'

/** Path immagine logo (`/logo.svg` o URL). `null` mostra il wordmark testuale. */
export const LOGO_SRC: string | null = null

export function whatsappHref(message: string): string {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`
}

export type AgencyPackage = {
  id: string
  name: string
  priceLabel: string
  subtitle: string
  includes: string[]
  idealFor: string
  ctaLabel: string
  recommended?: boolean
}

/** Tre piani confrontabili voce su voce (stesso numero di righe per cliente e budget). */
export const PACKAGES: AgencyPackage[] = [
  {
    id: 'rookie',
    name: 'Rookie',
    priceLabel: '349 € / mese',
    subtitle: 'Pochi atleti: comunque un feed ordinato e credibile verso club e sponsor.',
    includes: [
      'Fino a 10 post o story al mese, con grafica e testi già pronti',
      'Impaginazione sulle vostre linee guida visive (colori, logo, stile)',
      'Contenuti su firme, partite e mercato, con lo stesso “formato” sul feed',
      'File pronti da pubblicare voi o dal cliente finale',
      'Partiamo da foto, testi e comunicati che ci mandate voi; 1 giro di modifiche incluso',
      'Di solito vi consegniamo entro 2 giorni lavorativi dal materiale completo',
      'WhatsApp nei giorni feriali per domande e piccoli aggiustamenti',
    ],
    idealFor:
      'chi segue pochi giocatori ma vuole dimostrare di avere un reparto social serio.',
    ctaLabel: 'Chiedi info su Rookie',
  },
  {
    id: 'rising',
    name: 'Rising',
    priceLabel: '549 € / mese',
    subtitle:
      'Stagione con tante notizie: frequenza costante senza improvvisare ogni settimana.',
    recommended: true,
    includes: [
      'Fino a 20 contenuti al mese (post e story), grafica e testi inclusi',
      'Grafica e tono di scrittura come da brief che concordiamo con voi',
      'Supporto su firme, trasferimenti, convocazioni e traguardi del roster',
      'Mini calendario mensile: vedete in anticipo cosa esce e quando',
      'Consegna entro 24/48 ore lavorative dopo il vostro ok su testi e impaginazione',
      'Revisioni incluse nei limiti scritti nel contratto',
      'WhatsApp per allineamenti rapidi quando la settimana si riempie',
    ],
    idealFor:
      'agenzie che hanno già molte notizie al mese e vogliono un referente social stabile.',
    ctaLabel: 'Chiedi info su Rising',
  },
  {
    id: 'all-star',
    name: 'All-star',
    priceLabel: '749 € / mese',
    subtitle:
      'Roster grande e mercato “caldo”: più contenuti e priorità quando contano di più.',
    includes: [
      'Fino a 30 contenuti al mese; caroselli più lunghi quando serve raccontare un blocco di notizie',
      'Più attenzione creativa nei giorni di picco mercato / visibilità',
      'Messaggi coerenti su più profili, in linea con cosa raccontate a sponsor e club',
      'Possibilità di esportare il materiale quando fate report al cliente',
      'Fino a 3 richieste “prioritarie” al mese: risposta entro 1 giorno lavorativo se il materiale è completo',
      'Elenco delle consegne aggiornato, anche per chi non segue tutte le chat',
      'Nei giorni delicati si possono concordare in anticipo tempi più stretti (scritti nel contratto)',
    ],
    idealFor:
      'roster ampio e sponsor pesanti: tanti contenuti mentre gestite più trattative.',
    ctaLabel: 'Chiedi info su All-star',
  },
]

/** Es. `Rookie · Rising · All-star` — sempre allineato a PACKAGES */
export function getPackagesMidDotLine(): string {
  return PACKAGES.map((p) => p.name).join(' · ')
}

/** Es. `Rookie, Rising e All-star` per aria-label */
export function getPackagesAriaList(): string {
  const names = PACKAGES.map((p) => p.name)
  if (names.length === 0) return ''
  if (names.length === 1) return names[0]
  return `${names.slice(0, -1).join(', ')} e ${names[names.length - 1]}`
}

export const COMMUNICATE_ITEMS = [
  'Firme e trasferimenti',
  'Conferme e rinnovi',
  'Prestazioni degli atleti',
  'Convocazioni e premi',
  'Debutti e milestone',
  'News di roster',
] as const

export const EXTRAS_ROWS: { label: string; value: string }[] = [
  { label: 'Contenuto extra semplice', value: '20 €' },
  { label: 'Post extra grafico', value: '30–40 €' },
  { label: 'Story extra', value: '10 €' },
  { label: 'Carosello extra', value: '60–80 €' },
  { label: 'Reel/video', value: 'Da quotare a parte' },
  { label: 'Urgenze extra', value: '+25%' },
]
