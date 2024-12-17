import { useAnimation } from "../../hooks/useAnimation";
import GradientTextBlock from "../../ui/GradientTextBlock/GradientTextBlock";
import Menu from "../../ui/Menu/Menu";
import styles from "./MainPage.module.css";

export default function MainPage() {
  const { show, key } = useAnimation();
  return (
    <div
      key={key}
      className={`${styles.container} ${show ? styles.fadeIn : ""}`}
    >
      <GradientTextBlock />
      <Menu />
    </div>
  );
}
