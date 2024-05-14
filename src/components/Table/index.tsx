import { useTable } from "./useTable";
import styles from "./styles.module.scss";

export function Table() {
  const { cities } = useTable();

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
                  <tr key={city.name}>
                    <td>{`${city.minTemp}º`}</td>
                    <td>{`${city.maxTemp}º`}</td>
                    <td>{city.name}</td>
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
                  <tr key={city.name}>
                    <td>{`${city.minTemp}º`}</td>
                    <td>{`${city.maxTemp}º`}</td>
                    <td>{city.name}</td>
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
