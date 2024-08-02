import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//- - Adjust scroll behavior for different pages, as needed. Otherwise, the default SPA behavior is applied.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.documentElement.style.scrollBehavior = "smooth";
    } else {
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
