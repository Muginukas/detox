import type { Domain, EvidenceLevel, Localized, Toxin } from '../types/content'

interface TaxonomyItem<K extends string> {
  id: K
  label: Localized
}

export const DOMAINS: TaxonomyItem<Domain>[] = [
  { id: 'body', label: { lt: 'Kūnas', en: 'Body', ru: 'Тело' } },
  { id: 'mind', label: { lt: 'Protas', en: 'Mind', ru: 'Разум' } },
  { id: 'soul', label: { lt: 'Siela', en: 'Soul', ru: 'Душа' } },
]

export const TOXINS: TaxonomyItem<Toxin>[] = [
  { id: 'basics', label: { lt: 'Pagrindai', en: 'Fundamentals', ru: 'Основы' } },
  { id: 'smoking', label: { lt: 'Rūkymas', en: 'Smoking', ru: 'Курение' } },
  { id: 'food', label: { lt: 'Maistas', en: 'Food', ru: 'Питание' } },
  { id: 'metals', label: { lt: 'Sunkieji metalai', en: 'Heavy metals', ru: 'Тяжёлые металлы' } },
  {
    id: 'microplastics',
    label: { lt: 'Mikroplastikai', en: 'Microplastics', ru: 'Микропластик' },
  },
]

export const EVIDENCE_LEVELS: TaxonomyItem<EvidenceLevel>[] = [
  {
    id: 'researched',
    label: { lt: 'Tyrimais pagrįsta', en: 'Research-backed', ru: 'Подтверждено исследованиями' },
  },
  { id: 'emerging', label: { lt: 'Dalinai tirta', en: 'Partly studied', ru: 'Частично изучено' } },
  {
    id: 'traditional',
    label: { lt: 'Tradicinė praktika', en: 'Traditional practice', ru: 'Традиционная практика' },
  },
]

export const DOMAIN_IDS = DOMAINS.map((d) => d.id)
export const TOXIN_IDS = TOXINS.map((t) => t.id)
export const EVIDENCE_IDS = EVIDENCE_LEVELS.map((e) => e.id)

function lookup<K extends string>(items: TaxonomyItem<K>[]) {
  const map = new Map(items.map((i) => [i.id, i.label]))
  return (id: K): Localized => map.get(id) ?? { lt: id, en: id, ru: id }
}

export const domainLabel = lookup(DOMAINS)
export const toxinLabel = lookup(TOXINS)
export const evidenceLabel = lookup(EVIDENCE_LEVELS)
