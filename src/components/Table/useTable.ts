import { useEffect, useState } from "react";
import { getWeatherByCapital } from "../../services/weather/getWeatherByCapital";
import { WeatherByCapital } from "../../services/weather/getWeatherByCapital/types";

export const useTable = () => {
  const [cities, setCities] = useState<WeatherByCapital>();

  const initTable = async () => {
    const data = await getWeatherByCapital();

    setCities(data);
  };

  useEffect(() => {
    initTable();
  }, []);

  return { cities };
};
