import styles from "./NavigationIcon.module.css";
export default function NavigationIcon({ active, style }) {
  return (
    <div style={style} className={styles.wrapper}>
      <div className={`${styles.container} ${active && styles.active}`}></div>
    </div>
  );
}
