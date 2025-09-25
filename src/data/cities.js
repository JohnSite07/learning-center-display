// North American cities with coordinates for weather data
export const northAmericanCities = [
  // United States - Major Cities
  { name: "New York, NY", country: "USA", lat: 40.7128, lon: -74.0060, timezone: "America/New_York" },
  { name: "Los Angeles, CA", country: "USA", lat: 34.0522, lon: -118.2437, timezone: "America/Los_Angeles" },
  { name: "Chicago, IL", country: "USA", lat: 41.8781, lon: -87.6298, timezone: "America/Chicago" },
  { name: "Houston, TX", country: "USA", lat: 29.7604, lon: -95.3698, timezone: "America/Chicago" },
  { name: "Phoenix, AZ", country: "USA", lat: 33.4484, lon: -112.0740, timezone: "America/Phoenix" },
  { name: "Philadelphia, PA", country: "USA", lat: 39.9526, lon: -75.1652, timezone: "America/New_York" },
  { name: "San Antonio, TX", country: "USA", lat: 29.4241, lon: -98.4936, timezone: "America/Chicago" },
  { name: "San Diego, CA", country: "USA", lat: 32.7157, lon: -117.1611, timezone: "America/Los_Angeles" },
  { name: "Dallas, TX", country: "USA", lat: 32.7767, lon: -96.7970, timezone: "America/Chicago" },
  { name: "San Jose, CA", country: "USA", lat: 37.3382, lon: -121.8863, timezone: "America/Los_Angeles" },
  { name: "Austin, TX", country: "USA", lat: 30.2672, lon: -97.7431, timezone: "America/Chicago" },
  { name: "Jacksonville, FL", country: "USA", lat: 30.3322, lon: -81.6557, timezone: "America/New_York" },
  { name: "Fort Worth, TX", country: "USA", lat: 32.7555, lon: -97.3308, timezone: "America/Chicago" },
  { name: "Columbus, OH", country: "USA", lat: 39.9612, lon: -82.9988, timezone: "America/New_York" },
  { name: "Charlotte, NC", country: "USA", lat: 35.2271, lon: -80.8431, timezone: "America/New_York" },
  { name: "San Francisco, CA", country: "USA", lat: 37.7749, lon: -122.4194, timezone: "America/Los_Angeles" },
  { name: "Indianapolis, IN", country: "USA", lat: 39.7684, lon: -86.1581, timezone: "America/Indiana/Indianapolis" },
  { name: "Seattle, WA", country: "USA", lat: 47.6062, lon: -122.3321, timezone: "America/Los_Angeles" },
  { name: "Denver, CO", country: "USA", lat: 39.7392, lon: -104.9903, timezone: "America/Denver" },
  { name: "Boston, MA", country: "USA", lat: 42.3601, lon: -71.0589, timezone: "America/New_York" },
  { name: "El Paso, TX", country: "USA", lat: 31.7619, lon: -106.4850, timezone: "America/Denver" },
  { name: "Detroit, MI", country: "USA", lat: 42.3314, lon: -83.0458, timezone: "America/Detroit" },
  { name: "Nashville, TN", country: "USA", lat: 36.1627, lon: -86.7816, timezone: "America/Chicago" },
  { name: "Portland, OR", country: "USA", lat: 45.5152, lon: -122.6784, timezone: "America/Los_Angeles" },
  { name: "Memphis, TN", country: "USA", lat: 35.1495, lon: -90.0490, timezone: "America/Chicago" },
  { name: "Oklahoma City, OK", country: "USA", lat: 35.4676, lon: -97.5164, timezone: "America/Chicago" },
  { name: "Las Vegas, NV", country: "USA", lat: 36.1699, lon: -115.1398, timezone: "America/Los_Angeles" },
  { name: "Louisville, KY", country: "USA", lat: 38.2527, lon: -85.7585, timezone: "America/New_York" },
  { name: "Baltimore, MD", country: "USA", lat: 39.2904, lon: -76.6122, timezone: "America/New_York" },
  { name: "Milwaukee, WI", country: "USA", lat: 43.0389, lon: -87.9065, timezone: "America/Chicago" },
  { name: "Albuquerque, NM", country: "USA", lat: 35.0844, lon: -106.6504, timezone: "America/Denver" },
  { name: "Tucson, AZ", country: "USA", lat: 32.2226, lon: -110.9747, timezone: "America/Phoenix" },
  { name: "Fresno, CA", country: "USA", lat: 36.7378, lon: -119.7871, timezone: "America/Los_Angeles" },
  { name: "Sacramento, CA", country: "USA", lat: 38.5816, lon: -121.4944, timezone: "America/Los_Angeles" },
  { name: "Mesa, AZ", country: "USA", lat: 33.4152, lon: -111.8315, timezone: "America/Phoenix" },
  { name: "Kansas City, MO", country: "USA", lat: 39.0997, lon: -94.5786, timezone: "America/Chicago" },
  { name: "Atlanta, GA", country: "USA", lat: 33.7490, lon: -84.3880, timezone: "America/New_York" },
  { name: "Long Beach, CA", country: "USA", lat: 33.7701, lon: -118.1937, timezone: "America/Los_Angeles" },
  { name: "Colorado Springs, CO", country: "USA", lat: 38.8339, lon: -104.8214, timezone: "America/Denver" },
  { name: "Raleigh, NC", country: "USA", lat: 35.7796, lon: -78.6382, timezone: "America/New_York" },
  { name: "Miami, FL", country: "USA", lat: 25.7617, lon: -80.1918, timezone: "America/New_York" },
  { name: "Virginia Beach, VA", country: "USA", lat: 36.8529, lon: -75.9780, timezone: "America/New_York" },
  { name: "Omaha, NE", country: "USA", lat: 41.2565, lon: -95.9345, timezone: "America/Chicago" },
  { name: "Oakland, CA", country: "USA", lat: 37.8044, lon: -122.2711, timezone: "America/Los_Angeles" },
  { name: "Minneapolis, MN", country: "USA", lat: 44.9778, lon: -93.2650, timezone: "America/Chicago" },
  { name: "Tulsa, OK", country: "USA", lat: 36.1540, lon: -95.9928, timezone: "America/Chicago" },
  { name: "Arlington, TX", country: "USA", lat: 32.7357, lon: -97.1081, timezone: "America/Chicago" },
  { name: "New Orleans, LA", country: "USA", lat: 29.9511, lon: -90.0715, timezone: "America/Chicago" },
  { name: "Wichita, KS", country: "USA", lat: 37.6872, lon: -97.3301, timezone: "America/Chicago" },
  { name: "Cleveland, OH", country: "USA", lat: 41.4993, lon: -81.6944, timezone: "America/New_York" },
  { name: "Tampa, FL", country: "USA", lat: 27.9506, lon: -82.4572, timezone: "America/New_York" },

  // Canada - Major Cities
  { name: "Toronto, ON", country: "Canada", lat: 43.6532, lon: -79.3832, timezone: "America/Toronto" },
  { name: "Montreal, QC", country: "Canada", lat: 45.5017, lon: -73.5673, timezone: "America/Montreal" },
  { name: "Vancouver, BC", country: "Canada", lat: 49.2827, lon: -123.1207, timezone: "America/Vancouver" },
  { name: "Calgary, AB", country: "Canada", lat: 51.0447, lon: -114.0719, timezone: "America/Edmonton" },
  { name: "Edmonton, AB", country: "Canada", lat: 53.5461, lon: -113.4938, timezone: "America/Edmonton" },
  { name: "Ottawa, ON", country: "Canada", lat: 45.4215, lon: -75.6972, timezone: "America/Toronto" },
  { name: "Mississauga, ON", country: "Canada", lat: 43.5890, lon: -79.6441, timezone: "America/Toronto" },
  { name: "Winnipeg, MB", country: "Canada", lat: 49.8951, lon: -97.1384, timezone: "America/Winnipeg" },
  { name: "Quebec City, QC", country: "Canada", lat: 46.8139, lon: -71.2080, timezone: "America/Montreal" },
  { name: "Hamilton, ON", country: "Canada", lat: 43.2557, lon: -79.8711, timezone: "America/Toronto" },
  { name: "Brampton, ON", country: "Canada", lat: 43.7315, lon: -79.7624, timezone: "America/Toronto" },
  { name: "Surrey, BC", country: "Canada", lat: 49.1913, lon: -122.8490, timezone: "America/Vancouver" },
  { name: "Laval, QC", country: "Canada", lat: 45.6066, lon: -73.7124, timezone: "America/Montreal" },
  { name: "Halifax, NS", country: "Canada", lat: 44.6488, lon: -63.5752, timezone: "America/Halifax" },
  { name: "London, ON", country: "Canada", lat: 42.9849, lon: -81.2453, timezone: "America/Toronto" },
  { name: "Markham, ON", country: "Canada", lat: 43.8561, lon: -79.3370, timezone: "America/Toronto" },
  { name: "Vaughan, ON", country: "Canada", lat: 43.8361, lon: -79.4985, timezone: "America/Toronto" },
  { name: "Gatineau, QC", country: "Canada", lat: 45.4765, lon: -75.7013, timezone: "America/Montreal" },
  { name: "Saskatoon, SK", country: "Canada", lat: 52.1579, lon: -106.6702, timezone: "America/Regina" },
  { name: "Burnaby, BC", country: "Canada", lat: 49.2488, lon: -122.9805, timezone: "America/Vancouver" },
  { name: "Regina, SK", country: "Canada", lat: 50.4452, lon: -104.6189, timezone: "America/Regina" },
  { name: "Richmond, BC", country: "Canada", lat: 49.1666, lon: -123.1336, timezone: "America/Vancouver" },
  { name: "Oakville, ON", country: "Canada", lat: 43.4675, lon: -79.6877, timezone: "America/Toronto" },
  { name: "Burlington, ON", country: "Canada", lat: 43.3255, lon: -79.7990, timezone: "America/Toronto" },
  { name: "Greater Sudbury, ON", country: "Canada", lat: 46.4917, lon: -80.9930, timezone: "America/Toronto" },
  { name: "Sherbrooke, QC", country: "Canada", lat: 45.4042, lon: -71.8929, timezone: "America/Montreal" },
  { name: "Oshawa, ON", country: "Canada", lat: 43.8971, lon: -78.8658, timezone: "America/Toronto" },
  { name: "Saguenay, QC", country: "Canada", lat: 48.3150, lon: -71.0669, timezone: "America/Montreal" },
  { name: "Lévis, QC", country: "Canada", lat: 46.8000, lon: -71.1772, timezone: "America/Montreal" },
  { name: "Barrie, ON", country: "Canada", lat: 44.3894, lon: -79.6903, timezone: "America/Toronto" },
  { name: "Abbotsford, BC", country: "Canada", lat: 49.0504, lon: -122.3045, timezone: "America/Vancouver" },

  // Mexico - Major Cities
  { name: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332, timezone: "America/Mexico_City" },
  { name: "Guadalajara", country: "Mexico", lat: 20.6597, lon: -103.3496, timezone: "America/Mexico_City" },
  { name: "Monterrey", country: "Mexico", lat: 25.6866, lon: -100.3161, timezone: "America/Monterrey" },
  { name: "Puebla", country: "Mexico", lat: 19.0414, lon: -98.2063, timezone: "America/Mexico_City" },
  { name: "Tijuana", country: "Mexico", lat: 32.5149, lon: -117.0382, timezone: "America/Tijuana" },
  { name: "León", country: "Mexico", lat: 21.1619, lon: -101.6921, timezone: "America/Mexico_City" },
  { name: "Juárez", country: "Mexico", lat: 31.6904, lon: -106.4245, timezone: "America/Ojinaga" },
  { name: "Torreón", country: "Mexico", lat: 25.5428, lon: -103.4068, timezone: "America/Mexico_City" },
  { name: "Querétaro", country: "Mexico", lat: 20.5888, lon: -100.3899, timezone: "America/Mexico_City" },
  { name: "San Luis Potosí", country: "Mexico", lat: 22.1565, lon: -100.9855, timezone: "America/Mexico_City" },
  { name: "Mérida", country: "Mexico", lat: 20.9674, lon: -89.5926, timezone: "America/Merida" },
  { name: "Mexicali", country: "Mexico", lat: 32.6245, lon: -115.4523, timezone: "America/Tijuana" },
  { name: "Aguascalientes", country: "Mexico", lat: 21.8818, lon: -102.2916, timezone: "America/Mexico_City" },
  { name: "Hermosillo", country: "Mexico", lat: 29.0729, lon: -110.9559, timezone: "America/Hermosillo" },
  { name: "Saltillo", country: "Mexico", lat: 25.4232, lon: -101.0053, timezone: "America/Monterrey" },
  { name: "Cancún", country: "Mexico", lat: 21.1619, lon: -86.8515, timezone: "America/Cancun" }
]

// Helper function to find city by name
export const findCityByName = (cityName) => {
  return northAmericanCities.find(city => 
    city.name.toLowerCase().includes(cityName.toLowerCase()) ||
    cityName.toLowerCase().includes(city.name.toLowerCase())
  )
}

// Helper function to get cities by country
export const getCitiesByCountry = (country) => {
  return northAmericanCities.filter(city => city.country === country)
}

// Helper function to get all city names for dropdown
export const getCityNames = () => {
  return northAmericanCities.map(city => city.name)
}
