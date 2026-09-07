import type { Lang, Localized } from '../types/content'
import { LANGS } from '../types/content'

export const DEFAULT_LANG: Lang = 'lt'

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value)
}

/** Paima tekstą pagal kalbą; jei vertimo nėra — grįžta į lietuvių. */
export function pick(value: Localized | undefined, lang: string): string {
  if (!value) return ''
  const key = isLang(lang) ? lang : DEFAULT_LANG
  return value[key] || value[DEFAULT_LANG] || ''
}
