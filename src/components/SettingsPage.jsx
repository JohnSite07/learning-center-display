import { useSettings } from '../contexts/SettingsContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Settings, Clock, Repeat, MapPin, Thermometer, RotateCcw, Globe, Type } from 'lucide-react'
import { getCityNames } from '../data/cities'
import { northAmericanTimezones, timeFontSizes, timeFormats, dateFormats } from '../data/timezones'

const SettingsPage = () => {
  const { settings, updateSetting, resetSettings } = useSettings()

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to default values?')) {
      resetSettings()
    }
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <Button variant="outline" onClick={handleReset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset to Defaults
          </Button>
        </div>

        <div className="grid gap-6">
          
          {/* Presentation Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Presentation Timing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Display Duration */}
              <div className="space-y-2">
                <Label htmlFor="displayDuration">Display Duration per File (seconds)</Label>
                <Input
                  id="displayDuration"
                  type="number"
                  min="1"
                  max="300"
                  value={settings.displayDuration}
                  onChange={(e) => updateSetting('displayDuration', parseInt(e.target.value) || 10)}
                />
                <p className="text-sm text-gray-500">
                  How long each file will be displayed before moving to the next
                </p>
              </div>

              {/* Auto Play */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="autoPlay">Auto Play</Label>
                  <p className="text-sm text-gray-500">
                    Automatically advance to the next file
                  </p>
                </div>
                <Switch
                  id="autoPlay"
                  checked={settings.autoPlay}
                  onCheckedChange={(checked) => updateSetting('autoPlay', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Loop Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Repeat className="w-5 h-5 mr-2" />
                Loop Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Loop Mode */}
              <div className="space-y-2">
                <Label htmlFor="loopMode">Loop Mode</Label>
                <Select
                  value={settings.loopMode}
                  onValueChange={(value) => updateSetting('loopMode', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="continuous">Continuous Loop</SelectItem>
                    <SelectItem value="count">Loop Specific Number of Times</SelectItem>
                    <SelectItem value="time">Stop at Specific Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Loop Count (only show if mode is 'count') */}
              {settings.loopMode === 'count' && (
                <div className="space-y-2">
                  <Label htmlFor="loopCount">Number of Loops</Label>
                  <Input
                    id="loopCount"
                    type="number"
                    min="1"
                    max="100"
                    value={settings.loopCount}
                    onChange={(e) => updateSetting('loopCount', parseInt(e.target.value) || 1)}
                  />
                  <p className="text-sm text-gray-500">
                    How many times to cycle through all files
                  </p>
                </div>
              )}

              {/* Stop Time (only show if mode is 'time') */}
              {settings.loopMode === 'time' && (
                <div className="space-y-2">
                  <Label htmlFor="stopTime">Stop Time</Label>
                  <Input
                    id="stopTime"
                    type="time"
                    value={settings.stopTime}
                    onChange={(e) => updateSetting('stopTime', e.target.value)}
                  />
                  <p className="text-sm text-gray-500">
                    Presentation will stop at this time of day
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Time Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Time Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Timezone */}
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select
                  value={settings.timezone}
                  onValueChange={(value) => updateSetting('timezone', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {northAmericanTimezones.map((tz) => (
                      <SelectItem key={tz.value} value={tz.value}>
                        {tz.label} ({tz.utcOffset})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">
                  Select the timezone for time display
                </p>
              </div>

              {/* Time Format */}
              <div className="space-y-2">
                <Label htmlFor="timeFormat">Time Format</Label>
                <Select
                  value={settings.timeFormat}
                  onValueChange={(value) => updateSetting('timeFormat', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timeFormats.map((format) => (
                      <SelectItem key={format.value} value={format.value}>
                        {format.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Format */}
              <div className="space-y-2">
                <Label htmlFor="dateFormat">Date Format</Label>
                <Select
                  value={settings.dateFormat}
                  onValueChange={(value) => updateSetting('dateFormat', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {dateFormats.map((format) => (
                      <SelectItem key={format.value} value={format.value}>
                        {format.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Font Size */}
              <div className="space-y-2">
                <Label htmlFor="timeFontSize">Time Font Size</Label>
                <Select
                  value={settings.timeFontSize}
                  onValueChange={(value) => updateSetting('timeFontSize', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timeFontSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        {size.label} ({size.size})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Show Seconds */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="showSeconds">Show Seconds</Label>
                  <p className="text-sm text-gray-500">
                    Display seconds in the time
                  </p>
                </div>
                <Switch
                  id="showSeconds"
                  checked={settings.showSeconds}
                  onCheckedChange={(checked) => updateSetting('showSeconds', checked)}
                />
              </div>

              {/* Show Timezone */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="showTimezone">Show Timezone</Label>
                  <p className="text-sm text-gray-500">
                    Display timezone information
                  </p>
                </div>
                <Switch
                  id="showTimezone"
                  checked={settings.showTimezone}
                  onCheckedChange={(checked) => updateSetting('showTimezone', checked)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Weather Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Thermometer className="w-5 h-5 mr-2" />
                Weather Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Weather Location */}
              <div className="space-y-2">
                <Label htmlFor="weatherLocation">Location</Label>
                <Select
                  value={settings.weatherLocation}
                  onValueChange={(value) => updateSetting('weatherLocation', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60">
                    {getCityNames().map((cityName) => (
                      <SelectItem key={cityName} value={cityName}>
                        {cityName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-gray-500">
                  Select a North American city for weather information
                </p>
              </div>

              {/* Temperature Unit */}
              <div className="space-y-2">
                <Label htmlFor="weatherUnit">Temperature Unit</Label>
                <Select
                  value={settings.weatherUnit}
                  onValueChange={(value) => updateSetting('weatherUnit', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="celsius">Celsius (°C)</SelectItem>
                    <SelectItem value="fahrenheit">Fahrenheit (°F)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Current Settings Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Current Configuration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 mb-2">Presentation</h4>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Display Duration:</span>
                    <span className="font-medium">{settings.displayDuration}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Auto Play:</span>
                    <span className="font-medium">{settings.autoPlay ? 'Enabled' : 'Disabled'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loop Mode:</span>
                    <span className="font-medium capitalize">{settings.loopMode}</span>
                  </div>
                  {settings.loopMode === 'count' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loop Count:</span>
                      <span className="font-medium">{settings.loopCount}</span>
                    </div>
                  )}
                  {settings.loopMode === 'time' && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stop Time:</span>
                      <span className="font-medium">{settings.stopTime}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 mb-2">Time Display</h4>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Timezone:</span>
                    <span className="font-medium text-xs">{northAmericanTimezones.find(tz => tz.value === settings.timezone)?.label || 'Eastern Time'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Format:</span>
                    <span className="font-medium">{settings.timeFormat === '12hour' ? '12-hour' : '24-hour'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date Format:</span>
                    <span className="font-medium capitalize">{settings.dateFormat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Font Size:</span>
                    <span className="font-medium">{timeFontSizes.find(size => size.value === settings.timeFontSize)?.label || 'Large'}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 mb-2">Weather</h4>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-xs">{settings.weatherLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Temperature Unit:</span>
                    <span className="font-medium">{settings.weatherUnit === 'celsius' ? 'Celsius' : 'Fahrenheit'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Show Seconds:</span>
                    <span className="font-medium">{settings.showSeconds ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Show Timezone:</span>
                    <span className="font-medium">{settings.showTimezone ? 'Yes' : 'No'}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
