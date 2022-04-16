// React/Next stuff
import { useEffect } from "react";

// Custom Imports
import { FadeDown } from "../../../assets/animations/Fades";

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports
import { KILLER_QUEEN_BG } from "../../../assets/cdns/images/global";

// Styling
import styles from "../../../styles/views/store/Store.module.css";

const Top = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.top}>
      <BackgroundImage
        src={KILLER_QUEEN_BG}
        width="100%"
        height="100%"
        className={styles.top_bg}
      >
        <div className={styles.top_bg_overlay}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={FadeDown}
          >
            <h1 className="jpSTORETOP_HEADING">Browse Our Products.</h1>

            <p className="jpSTORETOP_P">
              View items by parts and categories like figures, manga, and
              clothing.
            </p>
          </motion.div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
