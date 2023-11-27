export type WeatherByCapital = Cities[];

export type Cities = {
  id: number;
  minTemp: number;
  maxTemp: number;
  query: string;
};

export type WeatherResponse = {
  query: {
    custom_id: string;
    q: string;
    forecast: {
      forecastday: {
        day: {
          mintemp_c: string;
          maxtemp_c: string;
        };
      }[];
    };
  };
};
