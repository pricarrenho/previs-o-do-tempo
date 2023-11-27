import { useEffect, useState } from "react";
import { CardData } from "./types";
import { getCities } from "../../services/location/getCity";
import { getWeatherBySearch } from "../../services/weather/getWeatherBySearch";

export const useWeatherCard = (value: string) => {
  const [cardData, setCardData] = useState<CardData>();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const searchCity = async (value: string) => {
    const data = await getCities(value);
    setCity(data.nome);

    setState(data.microrregiao?.mesorregiao?.UF.sigla);
  };

  const searchWeather = async (value: string) => {
    const data = await getWeatherBySearch(value);
    setCardData(data);
  };

  useEffect(() => {
    searchCity(value);
    searchWeather(city);
  }, [value, city]);

  return { cardData, state };
};
