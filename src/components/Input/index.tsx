import { InputProps } from "./types";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import styles from "./styles.module.scss";

export function Input({
  value,
  placeholder,
  name,
  type,
  onChange,
  onFocus,
  onBlur,
  onClear,
}: InputProps) {
  const renderClear = () => (
    <button className={styles.inputButtonClear} onClick={() => onClear("")}>
      <IoClose color="#505050" size={20} />
    </button>
  );

  const renderSearch = () => (
    <div className={styles.inputIcon}>
      <FaSearch color="#505050" size={18} />
    </div>
  );

  const currentInput = {
    clear: renderClear,
    search: renderSearch,
  };

  const isInputFilled = value.length > 0;

  const inputStatus = isInputFilled ? "clear" : "search";

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

      {currentInput[inputStatus]()}
    </div>
  );
}
