import { useState, useEffect } from 'react'
import { Clock, Globe } from 'lucide-react'
import { useSettings } from '../../contexts/SettingsContext'
import { findTimezoneByValue } from '../../data/timezones'

const TimeWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const { settings } = useSettings()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    const timeFormat = settings.timeFormat === '24hour' ? { hour12: false } : { hour12: true }
    const timeOptions = {
      timeZone: settings.timezone || 'America/New_York',
      ...timeFormat,
      hour: 'numeric',
      minute: '2-digit'
    }
    
    // Add seconds if enabled in settings
    if (settings.showSeconds) {
      timeOptions.second = '2-digit'
    }
    
    return date.toLocaleTimeString('en-US', timeOptions)
  }

  const formatDate = (date) => {
    let dateFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    // Apply date format from settings
    switch (settings.dateFormat) {
      case 'long':
        dateFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
        break
      case 'medium':
        dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }
        break
      case 'short':
        dateFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' }
        break
      case 'iso':
        dateFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
        break
      default:
        // Keep full format as default
        break
    }

    return date.toLocaleDateString('en-US', {
      timeZone: settings.timezone || 'America/New_York',
      ...dateFormatOptions
    })
  }

  const formatShortDate = (date) => {
    return date.toLocaleDateString('en-US', {
      timeZone: settings.timezone || 'America/New_York',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getCurrentTimezone = () => {
    return findTimezoneByValue(settings.timezone || 'America/New_York')
  }

  const currentTimezone = getCurrentTimezone()

  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-center mb-3">
        <Clock className="w-6 h-6 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Time and Date</h3>
      </div>
      
      {/* Timezone Info */}
      {currentTimezone && settings.showTimezone && (
        <div className="flex items-center justify-center mb-2">
          <Globe className="w-4 h-4 text-gray-500 mr-1" />
          <span className="text-xs text-gray-600">{currentTimezone.label}</span>
        </div>
      )}
      
      {/* Digital Clock */}
      <div className="mb-4">
        <div className={`${settings.timeFontSize || 'text-3xl'} font-mono font-bold text-gray-900 mb-1`}>
          {formatTime(currentTime)}
        </div>
        <div className="text-sm text-gray-600">
          {formatShortDate(currentTime)}
        </div>
      </div>

      {/* Full Date */}
      <div className="text-sm text-gray-700 leading-relaxed">
        {formatDate(currentTime)}
      </div>

      {/* Additional Time Info */}
      <div className="mt-3 pt-3 border-t border-gray-300">
        <div className="text-xs text-gray-500 space-y-1">
          <div>Week {Math.ceil((new Date(currentTime.toLocaleString('en-US', { timeZone: settings.timezone || 'America/New_York' })).getDate()) / 7)}</div>
          <div>Day {new Date(currentTime.toLocaleString('en-US', { timeZone: settings.timezone || 'America/New_York' })).getDate()}</div>
        </div>
      </div>
    </div>
  )
}

export default TimeWidget
