import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "http://api.weatherapi.com/v1/forecast.json",
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
    lang: "pt",
  },
});
