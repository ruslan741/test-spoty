import Description from "../Description/Description";
import styles from "./List.module.css";
export default function List({ list }) {
  return (
    <div className={styles.wrapper}>
      {list?.map((el, index) => (
        <div key={index} className={styles.container}>
          <div className={styles.icon}></div>
          <div className={styles.item}>
            <Description bold descriptions={el.title} />
            <Description descriptions={el.description} />
          </div>
        </div>
      ))}
    </div>
  );
}
