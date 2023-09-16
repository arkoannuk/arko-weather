/* eslint-disable camelcase */
export function displayCurrent(weatherData) {
  const existingNode = document.querySelector(".currentCard")

  const currentTemplate = document
    .getElementById("currentTemplate")
    .content.cloneNode(true)

  const currentCard = currentTemplate.querySelector(".currentCard")
  const conditionText = currentCard.querySelector(".conditionText")
  const feelslike_c = currentCard.querySelector(".feelslike_c")
  const humidity = currentCard.querySelector(".humidity")
  const precip_mm = currentCard.querySelector(".precip_mm")
  const temp_c = currentCard.querySelector(".temp_c")
  const uv = currentCard.querySelector(".uv")
  const wind_kph = currentCard.querySelector(".wind_kph")

  currentCard.dataset.index = "0"
  conditionText.textContent = weatherData.current.condition.text
  feelslike_c.textContent = `${weatherData.current.feelslike_c} C`
  humidity.textContent = `${weatherData.current.humidity} Humidity`
  precip_mm.textContent = `${weatherData.current.precip_mm} mm`
  temp_c.textContent = `${weatherData.current.temp_c} C`
  uv.textContent = `${weatherData.current.uv} UV`
  wind_kph.textContent = `${weatherData.current.wind_kph} kph`

  if (existingNode) {
    existingNode.remove()
  }

  document.getElementById("currentWeather").appendChild(currentTemplate)
}

export function displayForecast(weatherData) {
  const existingNode = document.querySelector(".forecastCard")
  if (existingNode) {
    existingNode.remove()
  }

  const forecastTemplate = document
    .getElementById("forecastTemplate")
    .content.cloneNode(true)

  const forecastCard = forecastTemplate.querySelector(".forecastCard")

  for (let day = 0; day < weatherData.forecast.forecastday.length; day++) {
    const conditionText = forecastCard.querySelector(`.day${day}.conditionText`)
    const maxTemp_c = forecastCard.querySelector(`.day${day}.maxTemp_c`)
    const avgTemp_c = forecastCard.querySelector(`.day${day}.avgTemp_c`)
    const minTemp_c = forecastCard.querySelector(`.day${day}.minTemp_c`)

    conditionText.textContent =
      weatherData.forecast.forecastday[day].day.condition.text
    maxTemp_c.textContent = weatherData.forecast.forecastday[day].day.maxtemp_c
    avgTemp_c.textContent = weatherData.forecast.forecastday[day].day.avgtemp_c
    minTemp_c.textContent = weatherData.forecast.forecastday[day].day.mintemp_c
  }

  document.getElementById("forecastWeather").appendChild(forecastTemplate)
}
