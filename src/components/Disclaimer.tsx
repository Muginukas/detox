import { useTranslation } from 'react-i18next'

export function Disclaimer() {
  const { t } = useTranslation()
  return (
    <aside className="disclaimer">
      <strong>{t('disclaimer.title')}.</strong> {t('disclaimer.text')}
    </aside>
  )
}
