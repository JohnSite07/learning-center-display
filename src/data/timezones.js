// North American timezones with display names and UTC offsets
export const northAmericanTimezones = [
  // United States Timezones
  {
    value: "America/New_York",
    label: "Eastern Time (ET)",
    country: "USA",
    utcOffset: "-05:00/-04:00",
    description: "New York, Washington DC, Atlanta, Miami"
  },
  {
    value: "America/Chicago",
    label: "Central Time (CT)",
    country: "USA", 
    utcOffset: "-06:00/-05:00",
    description: "Chicago, Dallas, Houston, New Orleans"
  },
  {
    value: "America/Denver",
    label: "Mountain Time (MT)",
    country: "USA",
    utcOffset: "-07:00/-06:00", 
    description: "Denver, Phoenix, Salt Lake City"
  },
  {
    value: "America/Los_Angeles",
    label: "Pacific Time (PT)",
    country: "USA",
    utcOffset: "-08:00/-07:00",
    description: "Los Angeles, San Francisco, Seattle"
  },
  {
    value: "America/Anchorage",
    label: "Alaska Time (AKT)",
    country: "USA",
    utcOffset: "-09:00/-08:00",
    description: "Anchorage, Fairbanks"
  },
  {
    value: "Pacific/Honolulu",
    label: "Hawaii Time (HST)",
    country: "USA",
    utcOffset: "-10:00",
    description: "Honolulu, Hilo"
  },
  {
    value: "America/Phoenix",
    label: "Arizona Time (MST)",
    country: "USA",
    utcOffset: "-07:00",
    description: "Phoenix, Tucson (No DST)"
  },
  {
    value: "America/Indiana/Indianapolis",
    label: "Indiana Time (ET)",
    country: "USA",
    utcOffset: "-05:00/-04:00",
    description: "Indianapolis"
  },
  {
    value: "America/Detroit",
    label: "Michigan Time (ET)",
    country: "USA",
    utcOffset: "-05:00/-04:00",
    description: "Detroit"
  },

  // Canadian Timezones
  {
    value: "America/Toronto",
    label: "Eastern Time (Canada)",
    country: "Canada",
    utcOffset: "-05:00/-04:00",
    description: "Toronto, Ottawa, Montreal"
  },
  {
    value: "America/Winnipeg",
    label: "Central Time (Canada)",
    country: "Canada",
    utcOffset: "-06:00/-05:00",
    description: "Winnipeg, Regina"
  },
  {
    value: "America/Edmonton",
    label: "Mountain Time (Canada)",
    country: "Canada",
    utcOffset: "-07:00/-06:00",
    description: "Calgary, Edmonton"
  },
  {
    value: "America/Vancouver",
    label: "Pacific Time (Canada)",
    country: "Canada",
    utcOffset: "-08:00/-07:00",
    description: "Vancouver, Victoria"
  },
  {
    value: "America/Halifax",
    label: "Atlantic Time (Canada)",
    country: "Canada",
    utcOffset: "-04:00/-03:00",
    description: "Halifax, Moncton"
  },
  {
    value: "America/St_Johns",
    label: "Newfoundland Time",
    country: "Canada",
    utcOffset: "-03:30/-02:30",
    description: "St. John's"
  },
  {
    value: "America/Montreal",
    label: "Quebec Time",
    country: "Canada",
    utcOffset: "-05:00/-04:00",
    description: "Montreal, Quebec City"
  },
  {
    value: "America/Regina",
    label: "Saskatchewan Time",
    country: "Canada",
    utcOffset: "-06:00",
    description: "Regina, Saskatoon (No DST)"
  },

  // Mexican Timezones
  {
    value: "America/Mexico_City",
    label: "Central Time (Mexico)",
    country: "Mexico",
    utcOffset: "-06:00/-05:00",
    description: "Mexico City, Guadalajara, Puebla"
  },
  {
    value: "America/Tijuana",
    label: "Pacific Time (Mexico)",
    country: "Mexico",
    utcOffset: "-08:00/-07:00",
    description: "Tijuana, Mexicali"
  },
  {
    value: "America/Monterrey",
    label: "Central Time (Monterrey)",
    country: "Mexico",
    utcOffset: "-06:00/-05:00",
    description: "Monterrey, Saltillo"
  },
  {
    value: "America/Cancun",
    label: "Eastern Time (Mexico)",
    country: "Mexico",
    utcOffset: "-05:00",
    description: "Cancún, Cozumel"
  },
  {
    value: "America/Merida",
    label: "Central Time (Yucatan)",
    country: "Mexico",
    utcOffset: "-06:00/-05:00",
    description: "Mérida, Campeche"
  },
  {
    value: "America/Hermosillo",
    label: "Mountain Time (Mexico)",
    country: "Mexico",
    utcOffset: "-07:00",
    description: "Hermosillo, Culiacán (No DST)"
  },
  {
    value: "America/Ojinaga",
    label: "Mountain Time (Chihuahua)",
    country: "Mexico",
    utcOffset: "-07:00/-06:00",
    description: "Chihuahua, Juárez"
  }
]

// Helper function to find timezone by value
export const findTimezoneByValue = (timezoneValue) => {
  return northAmericanTimezones.find(tz => tz.value === timezoneValue)
}

// Helper function to get timezones by country
export const getTimezonesByCountry = (country) => {
  return northAmericanTimezones.filter(tz => tz.country === country)
}

// Helper function to get current time in a specific timezone
export const getCurrentTimeInTimezone = (timezone) => {
  try {
    return new Date().toLocaleString('en-US', {
      timeZone: timezone,
      hour12: true,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    })
  } catch (error) {
    console.error('Error getting time for timezone:', timezone, error)
    return new Date().toLocaleString()
  }
}

// Font size options for time display
export const timeFontSizes = [
  { value: "text-sm", label: "Small", size: "14px" },
  { value: "text-base", label: "Medium", size: "16px" },
  { value: "text-lg", label: "Large", size: "18px" },
  { value: "text-xl", label: "Extra Large", size: "20px" },
  { value: "text-2xl", label: "2X Large", size: "24px" },
  { value: "text-3xl", label: "3X Large", size: "30px" },
  { value: "text-4xl", label: "4X Large", size: "36px" },
  { value: "text-5xl", label: "5X Large", size: "48px" }
]

// Time format options
export const timeFormats = [
  { value: "12hour", label: "12-hour (3:45 PM)", format: { hour12: true } },
  { value: "24hour", label: "24-hour (15:45)", format: { hour12: false } }
]

// Date format options
export const dateFormats = [
  { 
    value: "full", 
    label: "Full (Monday, September 22, 2025)",
    format: { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  },
  { 
    value: "long", 
    label: "Long (September 22, 2025)",
    format: { year: 'numeric', month: 'long', day: 'numeric' }
  },
  { 
    value: "medium", 
    label: "Medium (Sep 22, 2025)",
    format: { year: 'numeric', month: 'short', day: 'numeric' }
  },
  { 
    value: "short", 
    label: "Short (9/22/2025)",
    format: { year: 'numeric', month: 'numeric', day: 'numeric' }
  },
  { 
    value: "iso", 
    label: "ISO (2025-09-22)",
    format: { year: 'numeric', month: '2-digit', day: '2-digit' }
  }
]
