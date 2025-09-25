import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFiles } from '../contexts/FileContext'
import { useSettings } from '../contexts/SettingsContext'
import { Button } from '@/components/ui/button'
import { Settings, Upload } from 'lucide-react'
import TimeWidget from './widgets/TimeWidget'
import WeatherWidget from './widgets/WeatherWidget'
import FileDisplay from './FileDisplay'

const PresentationPage = () => {
  const { files, getCurrentFile, nextFile, currentFileIndex } = useFiles()
  const { settings } = useSettings()
  const [isPlaying, setIsPlaying] = useState(false)

  // Auto-advance files based on settings
  useEffect(() => {
    if (!settings.autoPlay || files.length === 0) return

    const interval = setInterval(() => {
      nextFile()
    }, settings.displayDuration * 1000)

    return () => clearInterval(interval)
  }, [settings.autoPlay, settings.displayDuration, files.length, nextFile])

  // Check stop conditions
  useEffect(() => {
    if (settings.loopMode === 'time') {
      const now = new Date()
      const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
      
      if (currentTime >= settings.stopTime) {
        setIsPlaying(false)
      }
    }
  }, [settings.loopMode, settings.stopTime])

  const currentFile = getCurrentFile()

  return (
    <div className="min-h-screen bg-gray-300">
      {/* Navigation Controls - Hidden in fullscreen mode */}
      <div className="absolute top-4 right-4 z-10 flex space-x-2 opacity-20 hover:opacity-100 transition-opacity">
        <Link to="/upload">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </Link>
        <Link to="/settings">
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
        </Link>
      </div>

      {/* Main Layout Container */}
      <div className="w-full h-screen">
        <div className="bg-gray-400 p-6 h-full rounded-lg shadow-lg">
          <div className="flex h-full gap-6">
            
            {/* Main Content Area */}
            <div className="basis-3/4 rounded-lg shadow-inner p-8 flex items-center justify-center">
              {currentFile ? (
                <FileDisplay file={currentFile} />
              ) : (
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-4">📄</div>
                  <h2 className="text-2xl font-semibold mb-2">No Content Available</h2>
                  <p className="text-lg mb-6">Upload documents, slides, or videos to display here</p>
                  <Link to="/upload">
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Files
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Right Sidebar - Widgets */}
            <div className="basis-1/4 bg-teal-600 rounded-lg shadow-inner p-6 flex flex-col gap-6">
              
              {/* Time Widget */}
              <div className="bg-gray-200 rounded-lg p-6 flex-1 flex items-center justify-center">
                <TimeWidget />
              </div>

              {/* Weather Widget */}
              <div className="bg-gray-200 rounded-lg p-6 flex-1 flex items-center justify-center">
                <WeatherWidget />
              </div>

            </div>
          </div>

          {/* File Navigation Indicator */}
          {files.length > 0 && (
            <div className="mt-4 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <span className="text-white text-sm">
                  {currentFileIndex + 1} of {files.length}
                </span>
                <div className="flex space-x-1">
                  {files.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentFileIndex ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PresentationPage
