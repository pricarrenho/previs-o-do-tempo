import { Container } from "../../components/Container";
import { WeatherCard } from "../../components/WeatherCard";
import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { useHome } from "./useHome";
import styles from "./styles.module.scss";
import { highlight } from "../../utils/highlight";

export function Home() {
  const {
    city,
    allCities,
    showDropdown,
    selectedCity,
    setCity,
    handleCloseCard,
    handleSelectCity,
    handleInputFocus,
    handleInputBlur,
  } = useHome();

  return (
    <Container>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Previsão do tempo</h1>

        <div className={styles.inputWrapper}>
          <Input
            name="search"
            type="text"
            placeholder="Insira aqui o nome da cidade"
            value={city}
            onChange={setCity}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onClear={setCity}
          />

          {showDropdown && (
            <div className={styles.dropdown}>
              {allCities
                ?.filter((item) =>
                  item.name.toLowerCase().includes(city.toLowerCase())
                )
                .slice(0, 10)
                .map((item, index) => {
                  return (
                    <button
                      onMouseDown={() => handleSelectCity(item)}
                      className={styles.dropdownItem}
                      key={index + item.name}
                      dangerouslySetInnerHTML={{
                        __html: highlight(`${item.name} - ${item.uf}`, city),
                      }}
                    ></button>
                  );
                })}

              {allCities?.filter((item) =>
                item.name.toLowerCase().includes(city.toLowerCase())
              ).length === 0 && (
                <button className={styles.dropdownItem}>
                  Nenhum resultado para <b>{city}</b>
                </button>
              )}
            </div>
          )}
        </div>

        {selectedCity ? (
          <WeatherCard value={selectedCity} handleCloseCard={handleCloseCard} />
        ) : (
          <>
            <div className={styles.divider}></div>

            <Table />
          </>
        )}
      </div>
    </Container>
  );
}
