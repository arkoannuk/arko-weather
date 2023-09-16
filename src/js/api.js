const apiKey = "3c438e9888994889bce55724231509"

export async function fetchCurrentWeather(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`
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
