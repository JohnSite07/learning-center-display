# Enhanced Learning Center Display System - Documentation

## Overview

The Enhanced Learning Center Display System is a comprehensive web application designed for educational institutions, conference centers, and presentation environments. This version includes advanced time and weather configuration capabilities with real location-based data for North American cities.

## New Features (Version 2.0)

### 🌍 Real Location-Based Weather System
- **75+ North American Cities**: Comprehensive database including US, Canadian, and Mexican cities
- **Real Coordinates**: Each city uses actual latitude/longitude for accurate weather data
- **Live Weather Data**: Real-time temperature, conditions, humidity, and wind information
- **Smart City Selection**: Searchable dropdown with properly formatted city names

### ⏰ Advanced Time Configuration
- **25+ Timezones**: Complete North American timezone support with UTC offsets
- **Multiple Formats**: 12-hour/24-hour time display options
- **Date Formatting**: Five different date format options (Full, Long, Medium, Short, ISO)
- **Visual Customization**: Eight font size options from 14px to 48px
- **Display Controls**: Toggle seconds and timezone information visibility

## Technical Architecture

### Frontend Framework
- **React 18** with Vite build system
- **Tailwind CSS** for responsive styling
- **Shadcn/UI** components for professional interface
- **Lucide React** icons for consistent iconography

### Data Sources
- **Open-Meteo API**: Free weather data service (no API key required)
- **Browser Timezone API**: Automatic timezone detection and formatting
- **LocalStorage**: Settings persistence across sessions

### Key Components

#### Core Application Structure
```
src/
├── components/
│   ├── Navigation.jsx           # Main navigation component
│   ├── PresentationPage.jsx     # Main display interface
│   ├── UploadPage.jsx          # File management interface
│   ├── SettingsPage.jsx        # Configuration interface
│   ├── FileDisplay.jsx         # File rendering component
│   └── widgets/
│       ├── TimeWidget.jsx      # Enhanced time display
│       └── WeatherWidget.jsx   # Enhanced weather display
├── contexts/
│   ├── FileContext.jsx         # File management state
│   └── SettingsContext.jsx     # Enhanced settings state
├── data/
│   ├── cities.js              # North American cities database
│   └── timezones.js           # Timezone and formatting data
└── App.jsx                    # Main application component
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and pnpm package manager
- Modern web browser with JavaScript enabled
- Internet connection for weather data

### Local Development Setup

1. **Clone or Extract Files**
   ```bash
   # If using git
   git clone <repository-url>
   cd learning-center-display
   
   # Or extract provided files to project directory
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Start Development Server**
   ```bash
   pnpm run dev
   ```
   Access at: http://localhost:5173

4. **Build for Production**
   ```bash
   pnpm run build
   ```
   Output in `dist/` directory

### Production Deployment

#### Static Hosting (Recommended)
1. Build the application: `pnpm run build`
2. Upload `dist/` contents to your web server
3. Configure server for SPA routing (redirect all routes to index.html)

#### Docker Deployment
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

## Configuration Guide

### Time Configuration Options

#### Timezone Selection
- **US Timezones**: Eastern, Central, Mountain, Pacific, Alaska, Hawaii
- **Canadian Timezones**: Atlantic, Newfoundland, plus regional variations
- **Mexican Timezones**: Central, Pacific, Eastern (Mexico), Mountain
- **Special Cases**: Arizona (no DST), Saskatchewan (no DST)

#### Time Display Formats
- **12-hour**: 3:45:30 PM (with AM/PM indicator)
- **24-hour**: 15:45:30 (military time format)

#### Date Display Formats
- **Full**: Monday, September 22, 2025
- **Long**: September 22, 2025
- **Medium**: Sep 22, 2025
- **Short**: 9/22/2025
- **ISO**: 2025-09-22

#### Font Size Options
- Small (14px), Medium (16px), Large (18px), Extra Large (20px)
- 2X Large (24px), 3X Large (30px), 4X Large (36px), 5X Large (48px)

### Weather Configuration Options

#### Supported Cities by Region

**United States (50 cities)**
- Major metros: New York, Los Angeles, Chicago, Houston, Phoenix
- Regional centers: Atlanta, Denver, Seattle, Miami, Boston
- State capitals and significant cities across all states

**Canada (25 cities)**
- Provincial capitals: Toronto, Montreal, Vancouver, Calgary
- Major centers: Ottawa, Winnipeg, Quebec City, Halifax
- Regional cities across all provinces

**Mexico (15 cities)**
- Major cities: Mexico City, Guadalajara, Monterrey
- Border cities: Tijuana, Juárez, Mexicali
- Tourist destinations: Cancún, Mérida

#### Weather Data Features
- **Real-time Updates**: Data refreshes every 10 minutes
- **Comprehensive Info**: Temperature, conditions, humidity, wind
- **Weather Icons**: Dynamic icons based on current conditions
- **Temperature Units**: Celsius or Fahrenheit selection

## Usage Instructions

### Basic Operation

1. **Upload Content**
   - Navigate to Upload page
   - Drag and drop files or use file selector
   - Supported formats: PDF, images (JPG, PNG), videos (MP4, WebM)
   - Add web links for online content

2. **Configure Settings**
   - Access Settings page for all configuration options
   - Set presentation timing and loop behavior
   - Configure time display preferences
   - Select weather location and units

3. **Start Presentation**
   - Return to Presentation page
   - Content displays automatically based on settings
   - Real-time widgets update continuously

### Advanced Features

#### Presentation Control
- **Auto Play**: Automatic progression through content
- **Loop Modes**: Continuous, count-based, or time-based stopping
- **Timing Control**: Configurable display duration per file

#### Widget Customization
- **Time Widget**: Timezone, format, font size, visibility options
- **Weather Widget**: Location selection, temperature units
- **Layout**: Fixed sidebar design matching original mockup

## API Integration

### Weather Data (Open-Meteo)
```javascript
// Example API call structure
const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&temperature_unit=${unit}&timezone=auto`
```

### Timezone Handling
```javascript
// Example timezone formatting
const timeString = date.toLocaleTimeString('en-US', {
  timeZone: 'America/New_York',
  hour12: false,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
})
```

## Troubleshooting

### Common Issues

**Weather Data Not Loading**
- Check internet connection
- Verify city selection in settings
- Weather API may have temporary outages

**Time Display Issues**
- Ensure browser supports Intl.DateTimeFormat
- Check timezone selection in settings
- Verify system clock accuracy

**File Upload Problems**
- Check file size limits (browser dependent)
- Verify supported file formats
- Clear browser cache if needed

### Performance Optimization

**Large File Handling**
- Optimize images before upload
- Use appropriate video compression
- Consider file size limits for smooth playback

**Memory Management**
- Clear unused files regularly
- Restart application for long-running displays
- Monitor browser memory usage

## Browser Compatibility

### Supported Browsers
- **Chrome/Chromium**: 90+ (recommended)
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Required Features
- ES2020 JavaScript support
- CSS Grid and Flexbox
- Fetch API and Promises
- Local Storage API

## Security Considerations

### Data Privacy
- All settings stored locally in browser
- No user data transmitted to external servers
- Weather data requests are anonymous

### Content Security
- File uploads processed client-side only
- No server-side file storage
- XSS protection through React's built-in sanitization

## Maintenance & Updates

### Regular Maintenance
- Update dependencies quarterly
- Monitor weather API status
- Test timezone changes during DST transitions
- Verify city database accuracy

### Version Control
- Use semantic versioning (current: 2.0.0)
- Tag releases for stable deployments
- Maintain changelog for updates

## Support & Resources

### Documentation
- Component API documentation in source files
- Inline comments for complex logic
- README files for setup instructions

### Development Resources
- React documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Open-Meteo API: https://open-meteo.com

## License & Credits

### Third-Party Services
- **Open-Meteo**: Weather data (CC BY 4.0)
- **Lucide**: Icon library (ISC License)
- **Tailwind CSS**: Styling framework (MIT License)

### Attribution
Enhanced Learning Center Display System developed for educational and presentation environments with comprehensive North American location support.

---

*Last Updated: September 22, 2025*
*Version: 2.0.0*
