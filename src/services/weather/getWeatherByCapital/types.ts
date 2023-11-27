export type WeatherByCapital = Cities[];

export type Cities = {
  id: number;
  minTemp: number;
  maxTemp: number;
  query: string;
};
