function removeKeys(obj, keysToRemove) {
  keysToRemove.forEach((key) => {
    if (key in obj) {
      delete obj[key]
    }
  })
}

export function parseWeatherData(rawData) {
  const currentKeysToRemove = [
    "cloud",
    "feelslike_f",
    "is_day",
    "last_updated",
    "last_updated_epoch",
    "precip_in",
    "pressure_in",
    "pressure_mb",
    "temp_f",
    "vis_km",
    "vis_miles",
    "wind_degree",
    "wind_dir",
    "wind_mph",
    "gust_mph",
    "gust_kph",
    "precip_mm",
    "uv",
    "feelslike_c",
  ]
  const locationKeysToRemove = [
    "lat",
    "localtime_epoch",
    "lon",
    "tz_id",
    "region",
  ]
  const forecastKeysToRemove = ["astro", "date_epoch", "hour"]
  const forecastDayKeysToRemove = [
    "avghumidity",
    "avgtemp_f",
    "avgvis_km",
    "avgvis_miles",
    "daily_chance_of_snow",
    "daily_will_it_rain",
    "daily_will_it_snow",
    "maxtemp_f",
    "maxwind_kph",
    "maxwind_mph",
    "min_temp_f",
    "totalprecip_in",
    "totalprecip_mm",
    "totalsnow_cm",
    "uv",
  ]

  removeKeys(rawData.current, currentKeysToRemove)
  removeKeys(rawData.location, locationKeysToRemove)

  rawData.forecast.forecastday.forEach((forecastDay) => {
    removeKeys(forecastDay, forecastKeysToRemove)
    const forecastDayData = forecastDay.day
    removeKeys(forecastDayData, forecastDayKeysToRemove)
  })

  return rawData
}
