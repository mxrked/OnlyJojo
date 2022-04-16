// React Stuff
import { useEffect } from "react";

// Image Imports
import { BITES_THE_DUSTO } from "../../../assets/cdns/images/global";

// Styling
import styles from "../../../styles/views/cart/Cart.module.css";

const BitesTheDust = () => {
  // Defaults
  useEffect(() => {
    document.getElementById("blurryBg").classList.toggle("deactive");
    document.getElementById("btdImgH").classList.toggle("deactive");
  }, []);

  return (
    <div id={styles.bitesTheDust} className="bites_the_dust">
      <div id="blurryBg" className={`${styles.blurry_bg} full-second`} />

      <div className={`${styles.img_holder} full-second`} id="btdImgH">
        <img
          data-src={BITES_THE_DUSTO}
          className="lazyload"
          alt="Bites the Dusto.."
        />
      </div>
    </div>
  );
};

export default BitesTheDust;
