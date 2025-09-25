import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, CloudSnow, Wind, Thermometer, Droplets, MapPin } from 'lucide-react'
import { useSettings } from '../../contexts/SettingsContext'
import { findCityByName } from '../../data/cities'

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentCity, setCurrentCity] = useState(null)
  const { settings } = useSettings()

  // Get coordinates for the selected city
  const getCoordinates = async () => {
    try {
      const cityData = findCityByName(settings.weatherLocation || 'New York, NY')
      if (cityData) {
        setCurrentCity(cityData)
        return { latitude: cityData.lat, longitude: cityData.lon }
      } else {
        // Fallback to New York if city not found
        const fallbackCity = findCityByName('New York, NY')
        setCurrentCity(fallbackCity)
        return { latitude: fallbackCity.lat, longitude: fallbackCity.lon }
      }
    } catch (error) {
      console.error('Error getting coordinates:', error)
      const fallbackCity = findCityByName('New York, NY')
      setCurrentCity(fallbackCity)
      return { latitude: fallbackCity.lat, longitude: fallbackCity.lon }
    }
  }

  const fetchWeather = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const coords = await getCoordinates()
      
      // Using Open-Meteo API (free, no API key required)
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto&temperature_unit=${settings.weatherUnit === 'fahrenheit' ? 'fahrenheit' : 'celsius'}`
      )
      
      if (!response.ok) {
        throw new Error('Weather data unavailable')
      }
      
      const data = await response.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
    
    // Update weather every 10 minutes
    const interval = setInterval(fetchWeather, 10 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [settings.weatherUnit])

  const getWeatherIcon = (weatherCode) => {
    // Weather code mapping for Open-Meteo
    if (weatherCode === 0) return Sun // Clear sky
    if (weatherCode >= 1 && weatherCode <= 3) return Cloud // Partly cloudy
    if (weatherCode >= 51 && weatherCode <= 67) return CloudRain // Rain
    if (weatherCode >= 71 && weatherCode <= 77) return CloudSnow // Snow
    return Cloud // Default
  }

  const getWeatherDescription = (weatherCode) => {
    const descriptions = {
      0: 'Clear sky',
      1: 'Mainly clear',
      2: 'Partly cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing rime fog',
      51: 'Light drizzle',
      53: 'Moderate drizzle',
      55: 'Dense drizzle',
      56: 'Light freezing drizzle',
      57: 'Dense freezing drizzle',
      61: 'Slight rain',
      63: 'Moderate rain',
      65: 'Heavy rain',
      66: 'Light freezing rain',
      67: 'Heavy freezing rain',
      71: 'Slight snow fall',
      73: 'Moderate snow fall',
      75: 'Heavy snow fall',
      77: 'Snow grains',
      80: 'Slight rain showers',
      81: 'Moderate rain showers',
      82: 'Violent rain showers',
      85: 'Slight snow showers',
      86: 'Heavy snow showers',
      95: 'Thunderstorm',
      96: 'Thunderstorm with slight hail',
      99: 'Thunderstorm with heavy hail'
    }
    return descriptions[weatherCode] || 'Unknown'
  }

  if (loading) {
    return (
      <div className="text-center w-full">
        <div className="flex items-center justify-center mb-3">
          <Cloud className="w-6 h-6 text-gray-600 mr-2 animate-pulse" />
          <h3 className="text-lg font-semibold text-gray-800">Weather</h3>
        </div>
        <div className="text-sm text-gray-500">Loading weather data...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center w-full">
        <div className="flex items-center justify-center mb-3">
          <Cloud className="w-6 h-6 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Weather</h3>
        </div>
        <div className="text-sm text-red-500">Weather unavailable</div>
        <div className="text-xs text-gray-500 mt-1">{error}</div>
      </div>
    )
  }

  if (!weather || !weather.current) {
    return (
      <div className="text-center w-full">
        <div className="flex items-center justify-center mb-3">
          <Cloud className="w-6 h-6 text-gray-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Weather</h3>
        </div>
        <div className="text-sm text-gray-500">No weather data</div>
      </div>
    )
  }

  const { current } = weather
  const WeatherIcon = getWeatherIcon(current.weather_code)
  const tempUnit = settings.weatherUnit === 'fahrenheit' ? '°F' : '°C'

  return (
    <div className="text-center w-full">
      <div className="flex items-center justify-center mb-3">
        <Cloud className="w-6 h-6 text-gray-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-800">Weather</h3>
      </div>
      
      {/* City Location */}
      {currentCity && (
        <div className="flex items-center justify-center mb-2">
          <MapPin className="w-4 h-4 text-gray-500 mr-1" />
          <span className="text-xs text-gray-600">{currentCity.name}</span>
        </div>
      )}
      
      {/* Weather Icon and Temperature */}
      <div className="mb-4">
        <WeatherIcon className="w-12 h-12 mx-auto mb-2 text-blue-600" />
        <div className="text-2xl font-bold text-gray-900 mb-1">
          {Math.round(current.temperature_2m)}{tempUnit}
        </div>
        <div className="text-sm text-gray-600">
          {getWeatherDescription(current.weather_code)}
        </div>
      </div>

      {/* Weather Details */}
      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Droplets className="w-4 h-4 text-blue-500 mr-1" />
            <span className="text-gray-600">Humidity</span>
          </div>
          <span className="font-medium">{current.relative_humidity_2m}%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Wind className="w-4 h-4 text-gray-500 mr-1" />
            <span className="text-gray-600">Wind</span>
          </div>
          <span className="font-medium">{current.wind_speed_10m} km/h</span>
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-3 pt-3 border-t border-gray-300">
        <div className="text-xs text-gray-500">
          Updated: {new Date(current.time).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  )
}

export default WeatherWidget
