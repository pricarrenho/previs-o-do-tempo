export type WeatherByCapital = Cities[];

export type Cities = {
  query: {
    custom_id: number;
    forecast: {
      forecastday: [
        {
          day: {
            mintemp_c: number;
            maxtemp_c: number;
          };
        }
      ];
    };
    q: string;
  };
};
