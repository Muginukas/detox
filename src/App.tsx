import { HashRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProgressProvider } from './state/ProgressContext'
import { HomePage } from './pages/HomePage'
import { LibraryPage } from './pages/LibraryPage'
import { ArticlePage } from './pages/ArticlePage'
import { ProtocolsPage } from './pages/ProtocolsPage'
import { ProtocolPage } from './pages/ProtocolPage'
import { ProgressPage } from './pages/ProgressPage'
import { SettingsPage } from './pages/SettingsPage'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="zinynas" element={<LibraryPage />} />
            <Route path="zinynas/:slug" element={<ArticlePage />} />
            <Route path="protokolai" element={<ProtocolsPage />} />
            <Route path="protokolai/:slug" element={<ProtocolPage />} />
            <Route path="pazanga" element={<ProgressPage />} />
            <Route path="nustatymai" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ProgressProvider>
  )
}
