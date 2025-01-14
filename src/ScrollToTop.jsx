import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Kerib lehe alati ülesse
  }, [location]); // Igakord, kui asukoht muutub (st kui vahetatakse lehti)

  return null; // See komponent ei renderda midagi
}

export default ScrollToTop;