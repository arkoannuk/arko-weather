import { fetchCurrentWeather } from "./api"
import { parseWeatherData } from "./utils"

document
  .getElementById("weatherLocation")
  .addEventListener("submit", async (event) => {
    event.preventDefault()
    const location = document.getElementById("locationInput").value
    try {
      console.log(parseWeatherData(await fetchCurrentWeather(location)))
    } catch (error) {
      console.error(error)
    }
  })
