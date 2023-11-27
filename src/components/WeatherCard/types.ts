export type CardProps = {
  value: string;
  handleCloseCard: () => void;
};

export type CardData = {
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
