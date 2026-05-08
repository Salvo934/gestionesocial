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

/** Tre piani confrontabili voce su voce. */
export const PACKAGES: AgencyPackage[] = [
  {
    id: 'rookie',
    name: 'Rookie',
    priceLabel: '299 € / mese',
    subtitle: 'Roster contenuto: feed ordinato e credibile verso club, sponsor e brand.',
    includes: [
      'Fino a 10 contenuti al mese tra post statici, caroselli semplici e story grafiche',
      'Grafiche e testi pronti per la pubblicazione',
      'Adattamento allo stile visivo del cliente: colori, logo, font e tono',
      'Format per firme, partite, risultati, convocazioni, mercato e news',
      'File finali pronti da pubblicare',
      'Lavorazione da foto, testi, comunicati e materiali forniti dal cliente',
      '1 giro di modifiche incluso per contenuto',
      'Consegna entro 2 giorni lavorativi dal materiale completo',
      'Supporto WhatsApp nei giorni feriali per piccoli aggiustamenti',
    ],
    idealFor:
      'hai pochi profili e vuoi un feed credibile con club e sponsor.',
    ctaLabel: 'Chiedi info su Rookie',
  },
  {
    id: 'rising',
    name: 'Rising',
    priceLabel: '499 € / mese',
    subtitle: 'Più atleti: comunicazione costante, riconoscibile e professionale.',
    recommended: true,
    includes: [
      'Fino a 20 contenuti al mese tra post, caroselli e story',
      'Piano contenuti mensile semplice',
      'Grafiche e copy pronti per la pubblicazione',
      'Format personalizzati per ogni tipologia di contenuto: firme, matchday, risultati, MVP, rinnovi, trasferimenti, convocazioni',
      'Linea visiva coerente per agenzia e atleti',
      'Organizzazione del materiale ricevuto',
      '1 giro di modifiche incluso per contenuto',
      'Consegna entro 2 giorni lavorativi dal materiale completo',
      'Supporto WhatsApp nei giorni feriali',
      'Mini report mensile con riepilogo dei contenuti prodotti',
    ],
    idealFor:
      'gestisci più atleti senza rinunciare a tono uniforme e continuità.',
    ctaLabel: 'Chiedi info su Rising',
  },
  {
    id: 'all-star',
    name: 'All-star',
    priceLabel: '699 € / mese',
    subtitle:
      'Agenzie strutturate: presenza social continua per valorizzare più atleti.',
    includes: [
      'Fino a 30 contenuti al mese tra post, caroselli e story',
      'Calendario editoriale mensile',
      'Grafiche e testi pronti per pubblicazione',
      'Format dedicati per: firme e rinnovi, matchday, risultati, statistiche, convocazioni, trasferimenti, sponsor, highlights o momenti chiave',
      'Adattamento dei contenuti ai singoli atleti o squadre',
      'Coordinamento visivo completo del feed',
      '2 giri di modifiche inclusi sui contenuti principali',
      'Priorità sulla lavorazione rispetto ai pacchetti inferiori',
      'Supporto WhatsApp nei giorni feriali',
      'Report mensile contenuti + suggerimenti per il mese successivo',
    ],
    idealFor:
      'agenzia più strutturata e roster ampio da accompagnare tutta la stagione.',
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
  { label: 'Contenuto extra statico/story', value: '30 €' },
  { label: 'Carosello extra', value: '45 €' },
  { label: 'Reel semplice con materiale fornito', value: '70 €' },
  { label: 'Reel avanzato / montaggio highlights', value: 'da 150 €' },
  { label: 'Pubblicazione diretta sui profili', value: '+150 € mese' },
  { label: 'Gestione DM/commenti base', value: '+200/300 € mese' },
  { label: 'Urgenza entro 24h', value: '+20%' },
  { label: 'Strategia solo consulenza', value: '50 €/ora' },
]
