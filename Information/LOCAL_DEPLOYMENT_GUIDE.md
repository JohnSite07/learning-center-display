# Local Deployment Guide - Enhanced Learning Center Display System

## Quick Start

### 1. Extract Files
```bash
tar -xzf learning-center-enhanced-v2.tar.gz
cd learning-center-display
```

### 2. Install Dependencies
```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 3. Development Mode
```bash
pnpm run dev
```
Access at: http://localhost:5173

### 4. Production Build
```bash
pnpm run build
```
Files will be in `dist/` directory

## Key Enhanced Files

### New Data Files
- `src/data/cities.js` - 75+ North American cities with coordinates
- `src/data/timezones.js` - Timezone definitions and formatting options

### Enhanced Components
- `src/components/widgets/TimeWidget.jsx` - Advanced time display with timezone support
- `src/components/widgets/WeatherWidget.jsx` - Real location-based weather
- `src/components/SettingsPage.jsx` - Comprehensive configuration interface
- `src/contexts/SettingsContext.jsx` - Enhanced settings management

### Core Application Files
- `src/App.jsx` - Main application with routing
- `src/components/PresentationPage.jsx` - Main display interface
- `src/components/Navigation.jsx` - Navigation component
- `package.json` - Dependencies and scripts

## Configuration Files

### package.json
```json
{
  "name": "learning-center-display",
  "private": true,
  "version": "2.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-select": "^2.1.2",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.447.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "tailwind-merge": "^2.5.3",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.14",
    "vite": "^6.0.1"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Static Hosting Setup

### Apache (.htaccess)
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Node.js/Express Server
```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## Environment Variables (Optional)

Create `.env` file for customization:
```env
VITE_APP_TITLE="Learning Center Display"
VITE_DEFAULT_CITY="New York, NY"
VITE_DEFAULT_TIMEZONE="America/New_York"
VITE_WEATHER_UPDATE_INTERVAL=600000
```

## Testing Checklist

### Basic Functionality
- [ ] Application loads without errors
- [ ] Navigation between pages works
- [ ] File upload interface functional
- [ ] Settings save and persist

### Enhanced Features
- [ ] Time widget shows correct timezone
- [ ] Weather widget displays real location data
- [ ] City selection dropdown works
- [ ] Time format changes apply immediately
- [ ] Font size adjustments work
- [ ] Settings summary updates correctly

### Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari (if on macOS)
- [ ] Edge

## Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Check Node.js version
node --version  # Should be 18+
```

### Runtime Issues
- Check browser console for errors
- Verify internet connection for weather data
- Clear browser cache and localStorage
- Test in incognito/private mode

## Support

For issues or questions:
1. Check the comprehensive documentation
2. Review browser console for errors
3. Test with different browsers
4. Verify all files are properly extracted

---

*Enhanced Learning Center Display System v2.0*
*Ready for local deployment with real location-based weather and advanced time configuration*
