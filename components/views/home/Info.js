// React Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";
import { FadeDown } from "../../../assets/animations/Fades";

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports
import { MENACING_GIF, PLATED_BG } from "../../../assets/cdns/images/global";
import { INFO } from "../../../assets/cdns/images/INDEX_IMAGES";

// Styling
import styles from "../../../styles/views/home/Home.module.css";

const Info = () => {
  const router = useRouter(); // rooter

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.info}>
      <BackgroundImage
        src={PLATED_BG}
        width="100%"
        height="100%"
        className={styles.info_plated_bg}
      />

      <div className={`${styles.info_box} container-fluid`}>
        <motion.div
          className={`${styles.info_row} row`}
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={FadeDown}
        >
          <div
            className={`${styles.info_side} col-lg-8 col-md-8 col-sm-7 col-xs-12`}
            id={styles.infoL}
          >
            <div className={`${styles.info_side_text}`}>
              <h3 id="jpINDEXINFO_HA">What is</h3>

              <h1 id="jpINDEXINFO_HB">
                Jojo&apos;s Bizarre <br /> Adventure?
              </h1>

              <p id="jpINDEXINFO_P1_TXT">
                JoJo&apos;s Bizarre Adventure tells the story of the Joestar
                family, a family whose various members discover they are
                destined to take down supernatural foes using powers that they
                possess.
              </p>

              <p>
                <span id="jpINDEXINFO_P2_TXT">
                  The &apos;Jojo&apos; in the title refers to each
                  generation&apos;s protagonist having their name abbreviated to
                  form Jo-Jo: Jonathan Joestar, Joseph Joestar, Jotaro Kujo,
                  Josuke Higashikata, Giorno Giovanna and Jolyne Cujoh.
                </span>
                <br />
                <br />
                <a href="sources.txt" id="jpSOURCES">
                  Sources
                </a>
              </p>

              <div className={styles.links_holder}>
                <div>
                  <a
                    className="page-transition jp_LEARN_MORE"
                    onClick={() => {
                      LinkPushing(router, "/info/", "/info/");
                    }}
                  >
                    Learn More
                  </a>
                  <a
                    className="page-transition jp_OUR_STORE"
                    onClick={() => {
                      LinkPushing(router, "/store/", "/store/");
                    }}
                  >
                    View Store
                  </a>
                </div>

                <img
                  data-src={MENACING_GIF}
                  className="lazyload"
                  alt="Menacing Text."
                />
              </div>
            </div>
          </div>
          <div
            className={`${styles.info_side} col-lg-4 col-md-4 col-sm-5 col-xs-12`}
            id={styles.infoR}
          >
            <BackgroundImage
              src={INFO}
              width="100%"
              height="100%"
              className={`${styles.info_side_bg}`}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
