// Import our custom CSS
import "../scss/styles.scss"
// Import all of Bootstrap's JS
// import * as bootstrap from "bootstrap";
import { fetchCurrentWeather } from "./api"
import { parseWeatherData } from "./utils"

const rawData = await fetchCurrentWeather("Tartu, Estonia")
parseWeatherData(rawData)
