const apiKeyWeather = "3c438e9888994889bce55724231509"
const apiKeyGeo = "037cba945d7347279b600865e82db53a"

export async function fetchCurrentWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKeyWeather}&q=${location}&days=3&aqi=no&alerts=no`
    )

    if (!response.ok) {
      const errorData = await response.json() // Parse the error response
      const errorCode = errorData.error.code
      const errorMessage = errorData.error.message
      throw new Error(`Code ${errorCode}, Message: ${errorMessage}`)
    }

    const rawData = await response.json()
    return rawData
  } catch (error) {
    console.log(error)
  }
}

export async function fetchUserLocation() {
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/ipinfo?&apiKey=${apiKeyGeo}`
    )

    if (!response.ok) {
      const error = await response.json()
      throw new Error(
        `defaulting to "New York", failed to fetch user city: ${error}`
      )
    }

    const userIpData = await response.json()
    const userLocation = `${userIpData.city.name}, ${userIpData.country.name}`
    return userLocation
  } catch (error) {
    console.log(error)
    return "New York"
  }
}
