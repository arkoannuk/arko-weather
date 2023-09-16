import { fetchCurrentWeather } from "./api"
import { displayCurrent, displayForecast } from "./dom"
import { parseWeatherData } from "./utils"

document
  .getElementById("weatherLocation")
  .addEventListener("submit", async (event) => {
    event.preventDefault()
    const location = document.getElementById("locationInput").value
    try {
      const weatherData = parseWeatherData(await fetchCurrentWeather(location))
      console.log(weatherData)
      displayCurrent(weatherData)
      displayForecast(weatherData)
    } catch (error) {
      console.error(error)
    }
  })
