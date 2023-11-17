import { weatherApi } from "../weatherApi";
import { WeatherByCapital } from "./types";

export async function getWeatherByCapital(): Promise<
  WeatherByCapital | undefined
> {
  const data = {
    locations: [
      { q: "Rio de Janeiro", custom_id: 1 },
      { q: "São Paulo", custom_id: 2 },
      { q: "Belo Horizonte", custom_id: 3 },
      { q: "Brasília", custom_id: 4 },
      { q: "Belém", custom_id: 5 },
      { q: "Salvador", custom_id: 6 },
      { q: "Curitiba", custom_id: 7 },
      { q: "Fortaleza", custom_id: 8 },
      { q: "Manaus", custom_id: 9 },
      { q: "João Pessoa", custom_id: 10 },
    ],
  };
  const params = {
    q: "bulk",
  };

  try {
    const response = await weatherApi.post("", data, { params });

    return response.data.bulk;
  } catch (error) {
    console.error(error);
  }
}
