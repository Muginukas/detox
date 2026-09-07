import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <div className="page container">
      <div className="empty">
        <h1>{t('notFound.title')}</h1>
        <p>{t('notFound.text')}</p>
        <Link to="/" className="btn btn--primary">
          {t('notFound.home')}
        </Link>
      </div>
    </div>
  )
}
