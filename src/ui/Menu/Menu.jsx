import { useNavigate } from "react-router";
import MenuButton from "../MenuButton/MenuButton";
import styles from "./Menu.module.css";
import { ROUTER } from "../../router.config";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <MenuButton onClick={() => navigate(`${ROUTER.citizen}/1`)}>
        Для Жителя
      </MenuButton>
      <MenuButton onClick={() => navigate(`${ROUTER.developer}/1`)}>
        Для Девелопера
      </MenuButton>
      <MenuButton onClick={() => navigate(`${ROUTER.integrator}/1`)}>
        Для Интегратора
      </MenuButton>
      <MenuButton onClick={() => navigate(`${ROUTER.managementCompany}/1`)}>
        Для Управляющей компании
      </MenuButton>
    </div>
  );
}
