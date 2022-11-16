// React/Next stuff
import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";
import { FadeUp } from "../../../assets/animations/Fades";

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports
import { SUPPORT } from "../../../assets/cdns/images/INDEX_IMAGES";

// Styling
import styles from "../../../styles/views/home/Home.module.css";

const Support = () => {
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
    <div id={styles.support} className="overrides_Support">
      <motion.div
        className={styles.support_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeUp}
      >
        <div className={styles.support_cnt_top}>
          <h1 id="jpINDEXSUPPORT_HEADING">24/7 Customer Support.</h1>

          <p id="jpINDEXSUPPORT_P_TXT">
            OnlyJojo is guaranteed to grant its users with free 24/7 customer
            support of any kind.
          </p>

          <div>
            <a
              className="page-transition jp_CONTACT_US"
              onClick={() => {
                LinkPushing(router, "/support/#Contact/", "/support/#Contact/");
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className={styles.support_cnt_bg}>
          <BackgroundImage
            src={SUPPORT}
            width="100%"
            height="100%"
            className={styles.support_bg}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Support;
