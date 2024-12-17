import { useLocation } from "react-router";
import styles from "./LinkNav.module.css";

export default function LinkNav({ children, onClick, to }) {
  const location = useLocation();

  const isActive = location.pathname.includes(to);

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isActive ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}
