// React Stuff
import { useEffect } from "react";

// Custom Imports
import { FadeLeft } from "../../../assets/animations/Fades";

// Library Items
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAt, FaPhoneAlt } from "react-icons/fa";

// Image Imports

// Styling
import styles from "../../../styles/views/support/Support.module.css";
import { MENACING_GIF } from "../../../assets/cdns/images/global";

const AboveForm = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.aboveForm}>
      <motion.div
        className={styles.above_form_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={styles.above_form_cnt_text}>
          <div>
            <h2 className="jpSUPPORT_ABOVE_FORM_HEADING">
              Reaching out to us.
            </h2>

            <img data-src={MENACING_GIF} className="lazyload" />
          </div>
          <p className="jpSUPPORT_ABOVE_FORM_P">
            Below are is our current contact information along with a
            contact/support form for quick and easy communication regarding your
            issues.
          </p>
        </div>

        <div className={styles.above_form_cnt_contact}>
          <a className="page-transition" href="">
            <FaPhoneAlt />

            <span>+1 (202) 555-0944</span>
          </a>

          <a className="page-transition" href="">
            <FaAt />

            <span>burner@burner.com</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default AboveForm;
