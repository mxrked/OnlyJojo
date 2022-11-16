// React/Next Stuff
import { useEffect } from "react";

// Image Imports
import { B2T } from "../../assets/cdns/images/global";

// Styling
import styles from "../../styles/js/Js.module.css";

const BackToTop = () => {
  // Display/Hiding and Triggering B2T
  useEffect(() => {
    function b2TState() {
      const wY = window.scrollY;

      if (wY <= 50) {
        document.getElementById("backToTop").style.bottom = "-120px";
      } else {
        document.getElementById("backToTop").style.bottom = "20px";
      }
    }

    window.addEventListener("scroll", b2TState);
    window.addEventListener("load", b2TState);
    document.getElementById("backToTop").addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <button id="backToTop" className={`${styles.back_to_top} page-transition`}>
      <img
        data-src={B2T}
        className="page-transition lazyload"
        alt="Stand Arrow B2T."
      />
    </button>
  );
};

export default BackToTop;
