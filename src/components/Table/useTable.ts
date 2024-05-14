import { useEffect, useState } from "react";
import { CitiesType } from "../../services/location/getCity/types";
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

  const initTable = async (value: CitiesType) => {
    const data = await getWeatherBySearch(value);

    if (data) {
      setCities((prevCities) => [...prevCities, data]);
    }
  };

  useEffect(() => {
    capitals.forEach((capital) => {
      initTable(capital);
    });
  }, []);

  console.log(cities);

  return { cities };
};
