import { useParams } from "react-router";
import GradientTextBlock from "../../ui/GradientTextBlock/GradientTextBlock";
import styles from "./Citizen.module.css";
import data from "../../data/citizens.json";
import Title from "../../ui/Title/Title";
import Description from "../../ui/Description/Description";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import QrCode from "../../ui/QrCode/QrCode";
import { useAnimation } from "../../hooks/useAnimation";

export default function Citizen() {
  const { id } = useParams();

  const citizen = data.find((el) => el.id === Number(id));

  const { show, key } = useAnimation(id);

  return (
    <div className={styles.container}>
      <div className={`${styles.mainContent}`}>
        <GradientTextBlock citizen />
        <div
          key={key}
          className={`${styles.content} ${show ? styles.fadeIn : ""}`}
        >
          <Title title={citizen.title} />
          <div className={styles.wrapper}>
            <Description descriptions={citizen.descriptions} />
            {Number(id) === data.length && (
              <div className={styles.qrCode}>
                <QrCode style={{ marginRight: "144px" }} />
              </div>
            )}
          </div>
        </div>
      </div>
      <Pagination data={data} route={ROUTER.citizen} />
    </div>
  );
}
