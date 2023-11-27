import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { CardProps } from "./types";
import { FaTimes } from "react-icons/fa";
import { dayOfTheWeek } from "../../utils/date";
import styles from "./styles.module.scss";
import { useWeatherCard } from "./useWeatherCard";

export function WeatherCard({ value, handleCloseCard }: CardProps) {
  const { cardData, state } = useWeatherCard(value);

  if (value.length < 2 || !cardData) return <></>;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.titleContainer}>
        <p className={styles.cityTitle}>
          {value}, {state} - Brasil
        </p>

        <button onClick={handleCloseCard}>
          <FaTimes size={24} />
        </button>
      </div>

      <p className={styles.weatherTitle}>
        {`${cardData.currentWeather}º ${cardData.weatherCondition}`}
      </p>

      <div className={styles.cardContents}>
        <div className={styles.cardContent}>
          <div className={styles.maxMinWrapper}>
            <span className={styles.maxMinTemp}>
              <FaLongArrowAltDown color="#ff8000" /> {cardData.minTemp}º
            </span>

            <span className={styles.maxMinTemp}>
              <FaLongArrowAltUp color="#ff8000" /> {cardData.maxTemp}º
            </span>
          </div>

          <p>
            Vento <span>{cardData.wind} km/h</span>
          </p>
        </div>

        <div className={styles.cardContent}>
          <p>
            Sensação <span>{cardData.tempSensation}ºC</span>
          </p>

          <p>
            Umidade <span>{cardData.humidity}%</span>
          </p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.nextDaysContentWrapper}>
        {cardData.nextFiveDays.map((item, index) => {
          if (index === 0) return;

          return (
            <div key={item.date} className={styles.nextDaysContent}>
              <p>{dayOfTheWeek(item.date)}</p>
              <div className={styles.nextDaysTemp}>
                <p>{item.day.mintemp_c.toFixed(0)}º</p>
                <p>{item.day.maxtemp_c.toFixed(0)}º</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
