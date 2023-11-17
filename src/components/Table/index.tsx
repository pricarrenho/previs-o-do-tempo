import { useEffect, useState } from "react";
import { getWeatherByCapital } from "../../services/weather/getWeatherByCapital";
import { WeatherByCapital } from "../../services/weather/getWeatherByCapital/types";
import styles from "./styles.module.scss";

export function Table() {
  const [cities, setCities] = useState<WeatherByCapital>();

  const initTable = async () => {
    const data = await getWeatherByCapital();

    setCities(data);
  };

  useEffect(() => {
    initTable();
  }, []);

  if (!cities?.length) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Capitais</h2>

      <div className={styles.tablesWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Min</th>
              <th>Máx</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cities
              .map((city) => {
                return (
                  <tr key={city.query.custom_id}>
                    <td>{`${city.query.forecast.forecastday[0].day.mintemp_c.toFixed(
                      0
                    )}º`}</td>
                    <td>{`${city.query.forecast.forecastday[0].day.maxtemp_c.toFixed(
                      0
                    )}º`}</td>
                    <td>{city.query.q}</td>
                  </tr>
                );
              })
              .slice(0, 5)}
          </tbody>
        </table>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Min</th>
              <th>Máx</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cities
              .map((city) => {
                return (
                  <tr key={city.query.custom_id}>
                    <td>{`${city.query.forecast.forecastday[0].day.mintemp_c.toFixed(
                      0
                    )}º`}</td>
                    <td>{`${city.query.forecast.forecastday[0].day.maxtemp_c.toFixed(
                      0
                    )}º`}</td>
                    <td>{city.query.q}</td>
                  </tr>
                );
              })
              .slice(5, 10)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
