import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { CardProps } from "./types";
import { FaTimes } from "react-icons/fa";
import { dayOfTheWeek } from "../../utils/date";
import styles from "./styles.module.scss";

export function WeatherCard({ value, handleCloseCard }: CardProps) {
  if (!value) return <></>;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.titleContainer}>
        <p className={styles.cityTitle}>
          {value.name}, {value.uf} - Brasil
        </p>

        <button onClick={handleCloseCard}>
          <FaTimes size={24} />
        </button>
      </div>

      <p className={styles.weatherTitle}>
        {`${value.currentWeather}º ${value.weatherCondition}`}
      </p>

      <div className={styles.cardContents}>
        <div className={styles.cardContent}>
          <div className={styles.maxMinWrapper}>
            <span className={styles.maxMinTemp}>
              <FaLongArrowAltDown color="#ff8000" /> {value.minTemp}º
            </span>

            <span className={styles.maxMinTemp}>
              <FaLongArrowAltUp color="#ff8000" /> {value.maxTemp}º
            </span>
          </div>

          <p>
            Vento <span>{value.wind} km/h</span>
          </p>
        </div>

        <div className={styles.cardContent}>
          <p>
            Sensação <span>{value.tempSensation}ºC</span>
          </p>

          <p>
            Umidade <span>{value.humidity}%</span>
          </p>
        </div>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.nextDaysContentWrapper}>
        {value.nextFiveDays.map((item, index) => {
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
