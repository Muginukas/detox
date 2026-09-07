import { useTranslation } from 'react-i18next'

export function SafetyNote({ text }: { text: string }) {
  const { t } = useTranslation()
  if (!text) return null
  return (
    <aside className="safety" role="note">
      <strong className="safety__title">⚠ {t('safety.title')}</strong>
      <p className="safety__text">{text}</p>
    </aside>
  )
}
