import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import lt from './locales/lt.json'
import en from './locales/en.json'
import ru from './locales/ru.json'
import { LANGS } from '../types/content'
import { DEFAULT_LANG } from '../lib/i18nContent'

export const LANGUAGE_NAMES: Record<string, string> = {
  lt: 'Lietuvių',
  en: 'English',
  ru: 'Русский',
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      lt: { translation: lt },
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: DEFAULT_LANG,
    supportedLngs: [...LANGS],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      // Numatytoji kalba visada lietuvių; naršyklės kalba nesekama sąmoningai.
      order: ['localStorage'],
      lookupLocalStorage: 'detox.lang',
      caches: ['localStorage'],
    },
  })

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng
})

export default i18n
