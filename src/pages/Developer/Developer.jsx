import { useParams } from "react-router";
import styles from "./Developer.module.css";
import data from "../../data/developer.json";
import Title from "../../ui/Title/Title";
import Description from "../../ui/Description/Description";
import QrCode from "../../ui/QrCode/QrCode";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import Photo from "../../ui/Photo/Photo";
import List from "../../ui/List/List";
import { useAnimation } from "../../hooks/useAnimation";

export default function Developer() {
  const { id } = useParams();

  const developer = data.find((el) => el.id === Number(id));

  const { show, key } = useAnimation(id);

  return (
    <div className={styles.container}>
      <div
        key={key}
        className={`${styles.contentWrapper} ${show ? styles.fadeIn : ""}`}
      >
        <div className={styles.content}>
          <Title title={developer.title} />
          <div className={styles.wrapper}>
            {developer.descriptions && (
              <Description bold descriptions={developer.descriptions} />
            )}
            {developer.list && <List list={developer.list} />}
            {Number(id) === data.length && (
              <QrCode style={{ marginRight: "144px" }} qr2 />
            )}
          </div>
        </div>
        {Number(id) !== data.length && <Photo id={developer?.id} />}
      </div>
      <Pagination data={data} route={ROUTER.developer} />
    </div>
  );
}
