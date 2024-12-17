import styles from "./Background.module.css";
import { Outlet, useLocation } from "react-router-dom";
import video from "@content/background/background.mp4";
import logo from "@content/logo/logo.svg";
import Navbar from "../Navbar/Navbar";
import { ROUTER } from "../../router.config";
import { useInactivityRedirect } from "../../hooks/useInactivityRedirect";
import QrCode from "../QrCode/QrCode";

const NOT_ALLOWED_ROUTES = [ROUTER.plug, ROUTER.main];

export default function Background() {
  useInactivityRedirect(180000);

  const location = useLocation();

  const isSmallGap = [
    ROUTER.integrator,
    ROUTER.developer,
    ROUTER.managementCompany,
  ].some((route) => location.pathname.startsWith(route));

  return (
    <div className={styles.background}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      {location.pathname === ROUTER.plug && (
        <div className={styles.qrCode}>
          <QrCode plug />
        </div>
      )}
      <div
        className={`${styles.containerPage} ${isSmallGap && styles.smallGap}`}
      >
        {!NOT_ALLOWED_ROUTES.includes(location.pathname) && <Navbar />}
        <Outlet />
      </div>
    </div>
  );
}
