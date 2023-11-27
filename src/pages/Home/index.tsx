import { useState } from "react";
import { Container } from "../../components/Container";
import { WeatherCard } from "../../components/WeatherCard";
import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import styles from "./styles.module.scss";

export function Home() {
  const [city, setCity] = useState("");

  const handleCloseCard = () => {
    setCity("");
  };

  return (
    <Container>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Previsão do tempo</h1>

        <Input
          name="search"
          type="text"
          placeholder="Insira aqui o nome da cidade"
          rightIcon="search"
          value={city}
          onChange={setCity}
        />

        <WeatherCard value={city} handleCloseCard={handleCloseCard} />

        <div className={styles.divider}></div>

        <Table />
      </div>
    </Container>
  );
}
