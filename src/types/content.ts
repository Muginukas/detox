export const LANGS = ['lt', 'en', 'ru'] as const
export type Lang = (typeof LANGS)[number]

/** Tekstas visomis palaikomomis kalbomis. */
export type Localized<T = string> = Record<Lang, T>

/** Sritis: kūnas / protas / siela. */
export type Domain = 'body' | 'mind' | 'soul'

/** Toksinų kategorijos. */
export type Toxin = 'basics' | 'smoking' | 'food' | 'metals' | 'microplastics'

/**
 * Įrodymų lygis. Turinys neatmetamas pagal šį lauką — jis tik pasako
 * skaitytojui, kokio pobūdžio žinojimu metodas remiasi.
 */
export type EvidenceLevel = 'researched' | 'emerging' | 'traditional'

export interface Source {
  title: string
  url?: string
}

export interface Article {
  slug: string
  toxin: Toxin
  domains: Domain[]
  evidence: EvidenceLevel
  readingMinutes: number
  title: Localized
  summary: Localized
  /** Markdown. */
  body: Localized
  /** Įspėjimas metodams, kurie gali pakenkti. */
  safety?: Localized
  sources?: Source[]
}

export interface ProtocolStep {
  id: string
  text: Localized
  /** Nebūtinas paaiškinimas po žingsniu. */
  note?: Localized
}

export interface ProtocolDay {
  /** Diena nuo 1. */
  day: number
  title: Localized
  focus: Localized
  steps: ProtocolStep[]
}

export interface Protocol {
  slug: string
  toxin: Toxin
  domains: Domain[]
  evidence: EvidenceLevel
  /** Dienų skaičius. */
  duration: number
  title: Localized
  summary: Localized
  intro: Localized
  safety?: Localized
  days: ProtocolDay[]
  /** Susijusių straipsnių slug'ai. */
  related?: string[]
}

export interface Habit {
  id: string
  domains: Domain[]
  icon: string
  title: Localized
  hint: Localized
}
