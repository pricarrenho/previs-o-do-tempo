import { InputProps } from "./types";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.scss";

export function Input({ value, onChange }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Insira aqui o nome da cidade"
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      <div className={styles.iconContainer}>
        <FaSearch color="#505050" />
      </div>
    </div>
  );
}
