import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTER } from "../router.config";

export const useInactivityRedirect = (timeout) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === ROUTER.plug) {
      return;
    }

    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        navigate(ROUTER.plug);
      }, timeout);
    };

    const handleUserActivity = () => {
      resetTimer();
    };

    resetTimer();
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("mousedown", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("touchstart", handleUserActivity);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("mousedown", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("touchstart", handleUserActivity);
    };
  }, [navigate, location.pathname, timeout]);
};
