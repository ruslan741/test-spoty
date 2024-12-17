import styles from "./Title.module.css";

export default function Title({ title }) {
  return (
    <div className={styles.container}>
      {title.map((el, index) => (
        <span key={index}>
          {el}
          {index !== title.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
}
