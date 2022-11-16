// React Stuff

// Custom Imports

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";

// Image Imports
import { TOP } from "../../../assets/cdns/images/SUPPORT_IMGS";

// Styling
import styles from "../../../styles/views/support/Support.module.css";

const Top = () => {
  return (
    <div id={styles.top}>
      <BackgroundImage
        src={TOP}
        width="100%"
        height="100%"
        className={styles.top_bg}
      >
        <div className={styles.top_bg_overlay}>
          <div>
            <h1 className="jpSUPPORT_TOP_HEADING">Our Support.</h1>

            <p className="jpSUPPORT_TOP_P">
              OnlyJojo is here for any issue regarding purchasing or browsing
              products as well as providing 100% Free customer support.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
