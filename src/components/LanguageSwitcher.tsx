import { useTranslation } from 'react-i18next'
import { LANGS } from '../types/content'
import { useLang } from '../lib/useLang'

export function LanguageSwitcher({ full = false }: { full?: boolean }) {
  const { i18n } = useTranslation()
  const lang = useLang()

  return (
    <div className={`langswitch${full ? ' langswitch--full' : ''}`} role="group" aria-label="Language">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          className={`langswitch__btn${code === lang ? ' langswitch__btn--active' : ''}`}
          aria-pressed={code === lang}
          onClick={() => void i18n.changeLanguage(code)}
        >
          {full ? { lt: 'Lietuvių', en: 'English', ru: 'Русский' }[code] : code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
