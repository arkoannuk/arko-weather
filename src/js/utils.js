export function parseWeatherData(rawData) {
  const currentKeys = [
    "cloud",
    "condition.code",
    "condition.icon",
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
  ]

  const locationKeys = ["lat", "localtime_epoch", "lon", "tz_id"]

  currentKeys.forEach((key) => {
    if (key in rawData.current) {
      delete rawData.current[key]
    }
  })

  locationKeys.forEach((key) => {
    if (key in rawData.location) {
      delete rawData.location[key]
    }
  })

  const parsedData = rawData
  return parsedData
}
