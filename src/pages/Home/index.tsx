import { Container } from "../../components/Container";
import { WeatherCard } from "../../components/WeatherCard";
import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { useHome } from "./useHome";
import styles from "./styles.module.scss";

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
            rightIcon="search"
            value={city}
            onChange={setCity}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />

          {showDropdown && (
            <div className={styles.dropdown}>
              {allCities
                ?.filter((item) =>
                  item.name.toLowerCase().includes(city.toLowerCase())
                )
                .map((item, index) => {
                  return (
                    <button
                      onMouseDown={() => handleSelectCity(item)}
                      className={styles.dropdownItem}
                      key={index + item.name}
                    >
                      {item.name}
                    </button>
                  );
                })}
            </div>
          )}
        </div>

        <WeatherCard value={selectedCity} handleCloseCard={handleCloseCard} />

        <div className={styles.divider}></div>

        <Table />
      </div>
    </Container>
  );
}
