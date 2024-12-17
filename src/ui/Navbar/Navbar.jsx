import { useNavigate } from "react-router";
import LinkNav from "../Link/LinkNav";
import styles from "./Navbar.module.css";
import { ROUTER } from "../../router.config";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        Технологии
        <br />и преимущества Умного города
      </div>
      <div className={styles.linksContainer}>
        <LinkNav
          onClick={() => navigate(`${ROUTER.citizen}/1`)}
          to={ROUTER.citizen}
        >
          Житель
        </LinkNav>
        <LinkNav
          onClick={() => navigate(`${ROUTER.developer}/1`)}
          to={ROUTER.developer}
        >
          Девелопер
        </LinkNav>
        <LinkNav
          onClick={() => navigate(`${ROUTER.integrator}/1`)}
          to={ROUTER.integrator}
        >
          Интегратор
        </LinkNav>
        <LinkNav
          onClick={() => navigate(`${ROUTER.managementCompany}/1`)}
          to={ROUTER.managementCompany}
        >
          Управляющая компания
        </LinkNav>
      </div>
    </div>
  );
}
