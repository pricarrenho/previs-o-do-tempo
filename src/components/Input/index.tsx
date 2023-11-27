import { InputProps } from "./types";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.scss";

export function Input({
  value,
  placeholder,
  name,
  type,
  rightIcon,
  onChange,
  onFocus,
  onBlur,
}: InputProps) {
  const icons = {
    search: <FaSearch color="#505050" size={18} />,
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        className={styles.input}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      {rightIcon && (
        <div className={styles.iconContainer}>{icons[rightIcon]}</div>
      )}
    </div>
  );
}
