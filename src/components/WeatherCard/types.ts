import { CardData } from "../../services/weather/getWeatherBySearch/types";

export type CardProps = {
  value?: CardData;
  handleCloseCard: () => void;
};
