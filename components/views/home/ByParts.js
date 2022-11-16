// React Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";
import { FadeLeft, FadeRight } from "../../../assets/animations/Fades";

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports
import {
  PRODUCTS_BY_TYPE,
  PART_1,
  PART_2,
  PART_3,
  PART_4,
  PART_5,
  PART_6,
} from "../../../assets/cdns/images/INDEX_IMAGES";
import { MENACING_GIF } from "../../../assets/cdns/images/global";

// Styling
import styles from "../../../styles/views/home/Home.module.css";

const ByParts = () => {
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
    <div id={styles.byParts}>
      <div className={`${styles.by_parts_cnt}`}>
        <div className={`${styles.by_parts_cnt_box} container-fluid`}>
          <div className={`${styles.by_parts_cnt_row} row`}>
            <motion.div
              className={`${styles.by_parts_cnt_side} col-lg-5 col-md-5 col-sm-4 col-xs-12`}
              id={styles.byPartsL}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={FadeLeft}
            >
              <BackgroundImage
                src={PRODUCTS_BY_TYPE}
                width="100%"
                height="100%"
                className={styles.by_parts_bg}
              />
            </motion.div>
            <motion.div
              className={`${styles.by_parts_cnt_side} col-lg-7 col-md-7 col-sm-8 col-xs-12`}
              id={styles.byPartsR}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={FadeRight}
            >
              <div className={styles.by_parts_top}>
                <div>
                  <div>
                    <h1 id="jpINDEXBROWSEBYPART_HEADING">Browse By Parts.</h1>

                    <img
                      data-src={MENACING_GIF}
                      className="lazyload"
                      alt="Menacing Text."
                    />
                  </div>

                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/", "/store/");
                    }}
                    className="page-transition jp_VIEW_ALL"
                  >
                    View All
                  </a>
                </div>
              </div>

              <div className={styles.by_parts_parts_holder}>
                <div className={styles.by_parts_part} id={styles.p1}>
                  <BackgroundImage
                    src={PART_1}
                    width="100%"
                    height="100%"
                    className={styles.part_bg}
                    id="iBg1"
                  />

                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#pb/", "/store/#pb/");
                    }}
                    onMouseOver={() => {
                      document.getElementById("iBg1").style.transform =
                        "scale(1.1)";
                    }}
                    onMouseLeave={() => {
                      document.getElementById("iBg1").style.transform =
                        "scale(1)";
                    }}
                  >
                    <h3 className="jp_PHANTOM_BLOOD">Phantom Blood (1)</h3>
                  </a>
                </div>
                <div className={styles.by_parts_part} id={styles.p2}>
                  <BackgroundImage
                    src={PART_2}
                    width="100%"
                    height="100%"
                    className={styles.part_bg}
                    id="iBg2"
                  />

                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#bt/", "/store/#bt/");
                    }}
                    onMouseOver={() => {
                      document.getElementById("iBg2").style.transform =
                        "scale(1.1)";
                    }}
                    onMouseLeave={() => {
                      document.getElementById("iBg2").style.transform =
                        "scale(1)";
                    }}
                  >
                    <h3 className="jp_BATTLE_TENDENCY">Battle Tendency (2)</h3>
                  </a>
                </div>
                <div className={styles.by_parts_part} id={styles.p3}>
                  <BackgroundImage
                    src={PART_3}
                    width="100%"
                    height="100%"
                    className={styles.part_bg}
                    id="iBg3"
                  />

                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#sdcs/", "/store/#sdcs/");
                    }}
                    onMouseOver={() => {
                      document.getElementById("iBg3").style.transform =
                        "scale(1.1)";
                    }}
                    onMouseLeave={() => {
                      document.getElementById("iBg3").style.transform =
                        "scale(1)";
                    }}
                  >
                    <h3 className="jp_STARDUST_CRUSADERS">
                      Stardust Crusaders (3)
                    </h3>
                  </a>
                </div>
                <div className={styles.by_parts_part} id={styles.p4}>
                  <BackgroundImage
                    src={PART_4}
                    width="100%"
                    height="100%"
                    className={styles.part_bg}
                    id="iBg4"
                  />

                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#daub/", "/store/#daub/");
                    }}
                    onMouseOver={() => {
                      document.getElementById("iBg4").style.transform =
                        "scale(1.1)";
                    }}
                    onMouseLeave={() => {
                      document.getElementById("iBg4").style.transform =
                        "scale(1)";
                    }}
                  >
                    <h3 className="jp_DIAMONDS_ARE_UNBREAKABLE">
                      Diamond is Unbreakable (4)
                    </h3>
                  </a>
                </div>
                <div className={styles.by_parts_part} id={styles.p5}>
                  <BackgroundImage
                    src={PART_5}
                    width="100%"
                    height="100%"
                    className={styles.part_bg}
                    id="iBg5"
                  />

                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#gw/", "/store/#gw/");
                    }}
                    onMouseOver={() => {
                      document.getElementById("iBg5").style.transform =
                        "scale(1.1)";
                    }}
                    onMouseLeave={() => {
                      document.getElementById("iBg5").style.transform =
                        "scale(1)";
                    }}
                  >
                    <h3 className="jp_GOLDEN_WIND">Golden Wind (5)</h3>
                  </a>
                </div>
                <div className={styles.by_parts_part} id={styles.p6}>
                  <BackgroundImage
                    src={PART_6}
                    width="100%"
                    height="100%"
                    className={styles.part_bg}
                    id="iBg6"
                  />

                  <a
                    className="page-transition"
                    onClick={() => {
                      LinkPushing(router, "/store/#so/", "/store/#so/");
                    }}
                    onMouseOver={() => {
                      document.getElementById("iBg6").style.transform =
                        "scale(1.1)";
                    }}
                    onMouseLeave={() => {
                      document.getElementById("iBg6").style.transform =
                        "scale(1)";
                    }}
                  >
                    <h3 className="jp_STONE_OCEAN">Stone Ocean (6)</h3>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByParts;
