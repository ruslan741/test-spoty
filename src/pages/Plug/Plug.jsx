import { useNavigate } from "react-router";
import styles from "./Plug.module.css";
import { useEffect } from "react";
import { ROUTER } from "../../router.config";
import { useAnimation } from "../../hooks/useAnimation";

export default function Plug() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleUserActivity = (event) => {
      event.stopPropagation();
      event.preventDefault();
      navigate(ROUTER.main);
    };

    const options = { passive: false };

    window.addEventListener("mousemove", handleUserActivity, options);
    window.addEventListener("mousedown", handleUserActivity, options);
    window.addEventListener("keydown", handleUserActivity, options);
    window.addEventListener("touchstart", handleUserActivity, options);

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("mousedown", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
    };
  }, [navigate]);

  const { show, key } = useAnimation();

  return (
    <div className={styles.wrapper}>
      <div key={key} className={styles.background}></div>
      <div className={`${styles.content} ${show ? styles.fadeIn : ""}`}>
        <div className={styles.title}>Добро пожаловать в СберСити!</div>
        <div className={`text ${styles.textContainer}`}>
          <div>
            Что же такое умный город?
            <br />
            Разбираемся вместе на примере технологий, реализованных
            <br />в проекте: в квартире, в доме и на прилегающей территории.
          </div>
          <div>
            Приглашаем исследовать взаимосвязь систем, которые стоят
            <br />
            на службе вашего комфорта и безопасности.
          </div>
        </div>
        <div style={{ margin: "0 auto" }}>
          <div className={styles.start}>Нажмите для начала</div>
        </div>
      </div>
    </div>
  );
}
