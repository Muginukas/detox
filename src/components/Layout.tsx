import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Disclaimer } from './Disclaimer'

const NAV = [
  { to: '/', key: 'home', end: true },
  { to: '/zinynas', key: 'library', end: false },
  { to: '/protokolai', key: 'protocols', end: false },
  { to: '/pazanga', key: 'progress', end: false },
  { to: '/nustatymai', key: 'settings', end: false },
] as const

export function Layout() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <div className="shell">
      <header className="header">
        <div className="container header__inner">
          <NavLink to="/" className="brand">
            <span className="brand__mark" aria-hidden="true">
              ❖
            </span>
            <span className="brand__text">
              <strong>{t('app.name')}</strong>
              <span className="brand__tagline">{t('app.tagline')}</span>
            </span>
          </NavLink>

          <nav className={`nav${open ? ' nav--open' : ''}`} aria-label={t('nav.menu')}>
            {NAV.map((item) => (
              <NavLink
                key={item.key}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav__link${isActive ? ' nav__link--active' : ''}`}
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ))}
            <div className="nav__lang">
              <LanguageSwitcher />
            </div>
          </nav>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-label={t('nav.menu')}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <Disclaimer />
          <p className="faint footer__meta">
            {t('app.name')} · {t('app.tagline')}
          </p>
        </div>
      </footer>
    </div>
  )
}
