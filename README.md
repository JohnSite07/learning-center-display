# Learning Center Display System

Digital signage for a learning centre. A React single-page application that runs full-screen on a
display, cycling uploaded material alongside a live clock and current weather, with everything
configurable from a settings page rather than in code.

Built for and deployed at the Prep Doctors Richmond Hill facility.

## Features

**Presentation** — full-screen display mode that renders uploaded files (images and documents) on a
rotation, intended to run unattended on a wall-mounted screen.

**Live weather** — real conditions from the [Open-Meteo](https://open-meteo.com) API: temperature,
conditions, humidity and wind. Over 75 North American cities are shipped with real latitude and
longitude, selectable from a searchable dropdown. No API key required.

**Clock and timezone** — 25+ North American timezones with UTC offsets, 12- or 24-hour display,
five date formats (full, long, medium, short, ISO), eight font sizes from 14px to 48px, and toggles
for seconds and timezone visibility.

**File management** — an upload page for adding and removing display material.

**Settings persistence** — configuration is stored in `localStorage` and survives a reload, so a
display that reboots comes back configured.

## Stack

- **React 18** with **Vite**
- **Tailwind CSS** for styling
- **shadcn/ui** on Radix primitives for the interface
- **Lucide** icons
- **Open-Meteo** for weather; the browser Timezone API for time

## Layout

```
src/
├── components/
│   ├── PresentationPage.jsx   full-screen display mode
│   ├── UploadPage.jsx         file management
│   ├── SettingsPage.jsx       configuration
│   ├── FileDisplay.jsx        file rendering
│   ├── Navigation.jsx
│   └── widgets/
│       ├── TimeWidget.jsx
│       └── WeatherWidget.jsx
├── contexts/                  FileContext, SettingsContext
├── data/                      cities.js (75+), timezones.js (25+)
└── hooks/
Information/                   design docs, deployment guide, change summary
```

## Running it

```bash
pnpm install
pnpm dev        # development server
pnpm build      # production build
pnpm preview    # serve the build
```

## Documentation

`Information/` carries the fuller write-ups: the system documentation, a requirements analysis, a
local deployment guide, and a change summary for version 2.0.
