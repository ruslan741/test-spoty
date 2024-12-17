import styles from "./MenuButton.module.css";

export default function MenuButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
