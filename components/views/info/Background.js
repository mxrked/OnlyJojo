// React/Next stuff
import { useEffect } from "react";

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom Imports
import { FadeRight } from "../../../assets/animations/Fades";

// Image Imports
import { JOTARO_AND_STAR_PLATINUM } from "../../../assets/cdns/images/INFO_IMGS";
import { MENACING_GIF } from "../../../assets/cdns/images/global";

// Styling
import styles from "../../../styles/views/info/Info.module.css";

const Background = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.background}>
      <motion.div
        className={styles.background_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <div className={`${styles.background_cnt_box} container-fluid`}>
          <div className={`${styles.background_cnt_row} row`}>
            <div
              className={`${styles.background_cnt_side} col-lg-8 col-md-8 col-sm-7 col-xs-12`}
              id={styles.backgroundL}
            >
              <div className={styles.background_text}>
                <div>
                  <h1 className="jpINFO_BACKGROUND_HEADING">Our Background.</h1>
                  <img
                    data-src={MENACING_GIF}
                    className="lazyload"
                    alt="Menacing GIF"
                  />
                </div>

                <p>
                  <span className="jpINFO_BACKGROUND_P_1">
                    OnlyJojo was created for the sole purpose of getting people
                    involved in the trend of Jojo&apos;s Bizarre Adventure and
                    everything it delivers. This website was created with love
                    and care by{" "}
                  </span>
                  <a
                    href="https://codingthefront.com"
                    className="page-transition jpINFO_BACKGROUND_SITE_CREATOR"
                  >
                    the site&apos;s creator
                  </a>
                  .
                </p>

                <p className="jpINFO_BACKGROUND_P_2">
                  This site was designed to have usability in mind for the user
                  and provides a clean and sleek design that matches the a
                  feeling of the anime and manga.
                </p>
              </div>
            </div>
            <div
              className={`${styles.background_cnt_side} col-lg-4 col-md-4 col-sm-5 col-xs-12`}
              id={styles.backgroundR}
            >
              <BackgroundImage
                src={JOTARO_AND_STAR_PLATINUM}
                width="100%"
                height="100%"
                className={styles.background_bg}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Background;
