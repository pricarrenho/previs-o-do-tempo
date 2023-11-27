export type CardData = {
  name: string;
  uf: string;
  currentWeather: string;
  weatherCondition: string;
  maxTemp: string;
  minTemp: string;
  tempSensation: string;
  humidity: string;
  wind: string;
  nextFiveDays: NextFiveDaysProps[];
};

type NextFiveDaysProps = {
  date: string;
  day: {
    mintemp_c: number;
    maxtemp_c: number;
  };
};

export type getWeatherBySearchProps = {
  name: string;
  uf: string;
};
