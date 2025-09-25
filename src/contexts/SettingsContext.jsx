import { createContext, useContext, useState, useEffect } from 'react'

const SettingsContext = createContext()

export const useSettings = () => {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }
  return context
}

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    displayDuration: 10, // seconds per file
    loopMode: 'continuous', // 'continuous', 'count', 'time'
    loopCount: 1,
    stopTime: '17:00',
    autoPlay: true,
    weatherLocation: 'New York, NY', // default location for weather
    weatherUnit: 'celsius', // 'celsius' or 'fahrenheit'
    // Time configuration
    timezone: 'America/New_York', // default timezone
    timeFormat: '12hour', // '12hour' or '24hour'
    dateFormat: 'full', // 'full', 'long', 'medium', 'short', 'iso'
    timeFontSize: 'text-3xl', // Tailwind CSS text size class
    showSeconds: true, // show seconds in time display
    showTimezone: true // show timezone information
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('learningCenterSettings')
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings)
        setSettings(prev => ({ ...prev, ...parsedSettings }))
      } catch (error) {
        console.error('Error loading settings from localStorage:', error)
      }
    }
  }, [])

  // Save settings to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem('learningCenterSettings', JSON.stringify(settings))
  }, [settings])

  const updateSetting = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const updateSettings = (newSettings) => {
    setSettings(prev => ({
      ...prev,
      ...newSettings
    }))
  }

  const resetSettings = () => {
    setSettings({
      displayDuration: 10,
      loopMode: 'continuous',
      loopCount: 1,
      stopTime: '17:00',
      autoPlay: true,
      weatherLocation: 'New York, NY',
      weatherUnit: 'celsius',
      timezone: 'America/New_York',
      timeFormat: '12hour',
      dateFormat: 'full',
      timeFontSize: 'text-3xl',
      showSeconds: true,
      showTimezone: true
    })
  }

  const value = {
    settings,
    updateSetting,
    updateSettings,
    resetSettings
  }

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}
