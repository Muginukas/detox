import { useTranslation } from 'react-i18next'
import type { Lang } from '../types/content'
import { DEFAULT_LANG, isLang } from './i18nContent'

/** Dabartinė kalba, jau susiaurinta iki palaikomų. */
export function useLang(): Lang {
  const { i18n } = useTranslation()
  const base = i18n.resolvedLanguage ?? i18n.language ?? DEFAULT_LANG
  return isLang(base) ? base : DEFAULT_LANG
}
