import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAnimation(id) {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [key, setKey] = useState(location.pathname);

  useEffect(() => {
    setKey(location.pathname);
    setShow(false);
    const timeoutId = setTimeout(() => setShow(true), 75);
    return () => clearTimeout(timeoutId);
  }, [location.pathname, id]);

  return { show, key };
}
