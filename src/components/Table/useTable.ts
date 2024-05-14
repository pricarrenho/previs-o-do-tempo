import { useEffect, useState } from "react";
import { getWeatherBySearch } from "../../services/weather/getWeatherBySearch";
import { CardData } from "../../services/weather/getWeatherBySearch/types";

const capitals = [
  { name: "Rio de Janeiro", uf: "RJ" },
  { name: "São Paulo", uf: "SP" },
  { name: "Belo Horizonte", uf: "BH" },
  { name: "Brasília", uf: "DF" },
  { name: "Belém", uf: "PA" },
  { name: "Salvador", uf: "BA" },
  { name: "Curitiba", uf: "PR" },
  { name: "Fortaleza", uf: "CE" },
  { name: "Manaus", uf: "AM" },
  { name: "João Pessoa", uf: "PB" },
];

export const useTable = () => {
  const [cities, setCities] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cityDataPromises = capitals.map((capital) =>
        getWeatherBySearch(capital)
      );

      console.log(cityDataPromises);

      const cityData = await Promise.all(cityDataPromises);

      console.log(cityData);

      const filteredData = cityData.filter(
        (data): data is CardData => data !== undefined
      );

      if (filteredData.length > 0) {
        setCities(filteredData);
      }
    };

    fetchData();
  }, []);

  return { cities };
};
