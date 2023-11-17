import { ContainerProps } from "./types";
import styles from "./styles.module.scss";

export function Container({ children, ...props }: ContainerProps) {
  return (
    <div {...props} className={styles.container}>
      {children}
    </div>
  );
}
