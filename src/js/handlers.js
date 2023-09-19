import { fetchCurrentWeather, fetchUserLocation } from "./api"
import { displayCurrent, displayForecast } from "./dom"
import { parseWeatherData } from "./utils"

document.addEventListener("DOMContentLoaded", async () => {
  let location
  try {
    location = await fetchUserLocation()
  } catch (error) {
    console.error(error)
    return
  }

  try {
    const weatherData = parseWeatherData(await fetchCurrentWeather(location))
    displayCurrent(weatherData)
    displayForecast(weatherData)
  } catch (error) {
    console.error(error)
  }
})

document
  .getElementById("weatherLocation")
  .addEventListener("submit", async (event) => {
    event.preventDefault()
    const location = document.getElementById("locationInput").value
    try {
      const weatherData = parseWeatherData(await fetchCurrentWeather(location))
      displayCurrent(weatherData)
      displayForecast(weatherData)
    } catch (error) {
      console.error(error)
    }
  })
