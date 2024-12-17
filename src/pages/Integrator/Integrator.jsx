import { useParams } from "react-router";
import styles from "./Integrator.module.css";
import Title from "../../ui/Title/Title";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import data from "../../data/integrator.json";
import Description from "../../ui/Description/Description";
import List from "../../ui/List/List";
import QrCode from "../../ui/QrCode/QrCode";
import Photo from "../../ui/Photo/Photo";
import { useAnimation } from "../../hooks/useAnimation";

export default function Integrator() {
  const { id } = useParams();

  const integrator = data.find((el) => el.id === Number(id));

  const { show, key } = useAnimation(id);

  return (
    <div className={styles.container}>
      <div
        key={key}
        className={`${styles.contentWrapper} ${show ? styles.fadeIn : ""}`}
      >
        <div className={styles.content}>
          <Title title={integrator.title} />
          <div className={styles.wrapper}>
            {integrator.descriptions && (
              <Description bold descriptions={integrator.descriptions} />
            )}
            <div className={styles.textContainer}>
              {integrator.list && <List list={integrator.list} />}
              {integrator.last && (
                <Description small descriptions={integrator.last} />
              )}
            </div>
            {Number(id) === data.length && (
              <QrCode style={{ marginRight: "242px" }} qr2 />
            )}
          </div>
        </div>
        {Number(id) !== data.length && <Photo id={integrator?.id} />}
      </div>
      <Pagination data={data} route={ROUTER.integrator} />
    </div>
  );
}
