/* eslint-disable camelcase */
export function displayCurrent(weatherData) {
  const existingNode = document.querySelector(".currentCard")

  const currentTemplate = document
    .getElementById("currentTemplate")
    .content.cloneNode(true)

  const currentCard = currentTemplate.querySelector(".currentCard")
  const locationName = currentTemplate.querySelector(".locationName")
  const locationCountry = currentTemplate.querySelector(".locationCountry")
  const locationTime = currentTemplate.querySelector(".locationTime")

  const conditionText = currentTemplate.querySelector(".conditionText")
  const humidity = currentTemplate.querySelector(".humidity")
  const temp_c = currentTemplate.querySelector(".temp_c")
  const wind_kph = currentTemplate.querySelector(".wind_kph")

  const maxTemp_c = currentTemplate.querySelector(`.day0.maxTemp_c`)
  const avgTemp_c = currentTemplate.querySelector(`.day0.avgTemp_c`)
  const minTemp_c = currentTemplate.querySelector(`.day0.minTemp_c`)
  const rainChance = currentTemplate.querySelector(`.rainChance`)

  currentCard.dataset.index = "0"
  locationName.textContent = weatherData.location.name
  locationCountry.textContent = weatherData.location.country
  locationTime.textContent = weatherData.location.localtime

  temp_c.textContent = `${weatherData.current.temp_c} C`
  conditionText.textContent = weatherData.current.condition.text
  humidity.textContent = `Humidity: ${weatherData.current.humidity}%`
  wind_kph.textContent = `Wind: ${weatherData.current.wind_kph} kp/h`

  maxTemp_c.textContent = `Max: ${weatherData.forecast.forecastday[0].day.maxtemp_c}C`
  avgTemp_c.textContent = `Avg: ${weatherData.forecast.forecastday[0].day.avgtemp_c}C`
  minTemp_c.textContent = `Min: ${weatherData.forecast.forecastday[0].day.mintemp_c}C`
  rainChance.textContent = `Rain Chance: ${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`

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

  for (let day = 1; day < weatherData.forecast.forecastday.length; day++) {
    const date = forecastCard.querySelector(`.day${day}.date`)
    const conditionText = forecastCard.querySelector(`.day${day}.conditionText`)
    const maxTemp_c = forecastCard.querySelector(`.day${day}.maxTemp_c`)
    const avgTemp_c = forecastCard.querySelector(`.day${day}.avgTemp_c`)
    const minTemp_c = forecastCard.querySelector(`.day${day}.minTemp_c`)

    date.textContent = weatherData.forecast.forecastday[day].date
    conditionText.textContent =
      weatherData.forecast.forecastday[day].day.condition.text
    maxTemp_c.textContent = `Max: ${weatherData.forecast.forecastday[day].day.maxtemp_c}C`
    avgTemp_c.textContent = `Avg: ${weatherData.forecast.forecastday[day].day.avgtemp_c}C`
    minTemp_c.textContent = `Min: ${weatherData.forecast.forecastday[day].day.mintemp_c}C`
  }

  document.getElementById("forecastWeather").appendChild(forecastTemplate)
}
