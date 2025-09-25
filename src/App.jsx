import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PresentationPage from './components/PresentationPage'
import UploadPage from './components/UploadPage'
import SettingsPage from './components/SettingsPage'
import Navigation from './components/Navigation'
import { FileProvider } from './contexts/FileContext'
import { SettingsProvider } from './contexts/SettingsContext'
import './App.css'

function App() {
  return (
    <FileProvider>
      <SettingsProvider>
        <Router>
          <div className="min-h-screen bg-gray-100">
            <Routes>
              <Route path="/" element={<Navigate to="/presentation" replace />} />
              <Route path="/presentation" element={<PresentationPage />} />
              <Route path="/upload" element={
                <div className="min-h-screen">
                  <Navigation />
                  <UploadPage />
                </div>
              } />
              <Route path="/settings" element={
                <div className="min-h-screen">
                  <Navigation />
                  <SettingsPage />
                </div>
              } />
            </Routes>
          </div>
        </Router>
      </SettingsProvider>
    </FileProvider>
  )
}

export default App
