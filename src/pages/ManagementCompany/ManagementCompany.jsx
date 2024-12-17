import { useParams } from "react-router";
import styles from "./ManagementCompany.module.css";
import Title from "../../ui/Title/Title";
import Pagination from "../../ui/Pagination/Pagination";
import { ROUTER } from "../../router.config";
import data from "../../data/managementCompany.json";
import Description from "../../ui/Description/Description";
import List from "../../ui/List/List";
import QrCode from "../../ui/QrCode/QrCode";
import Photo from "../../ui/Photo/Photo";
import { useAnimation } from "../../hooks/useAnimation";

export default function ManagementCompany() {
  const { id } = useParams();

  const managementCompany = data.find((el) => el.id === Number(id));

  const { show, key } = useAnimation(id);

  return (
    <div className={styles.container}>
      <div
        key={key}
        className={`${styles.contentWrapper} ${show ? styles.fadeIn : ""}`}
      >
        <div className={styles.content}>
          <Title title={managementCompany.title} />
          <div className={styles.wrapper}>
            {managementCompany.descriptions && (
              <Description bold descriptions={managementCompany.descriptions} />
            )}
            <div className={styles.textContainer}>
              {managementCompany.list && <List list={managementCompany.list} />}
              {managementCompany.last && (
                <Description descriptions={managementCompany.last} />
              )}
            </div>
            {Number(id) === data.length && (
              <QrCode style={{ marginRight: "242px" }} qr2 />
            )}
          </div>
        </div>
        {Number(id) !== data.length && <Photo id={managementCompany?.id} />}
      </div>
      <Pagination data={data} route={ROUTER.managementCompany} />
    </div>
  );
}
