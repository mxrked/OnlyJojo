// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";

// Image Imports
import { TOP } from "../../../assets/cdns/images/INFO_IMGS";

// Styling
import styles from "../../../styles/views/info/Info.module.css";

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
            <h1 className="jpINFO_TOP_HEADING">About OnlyJojo.</h1>

            <p className="jpINFO_TOP_P">
              Learn about us and JoJo&apos;s Bizarre Adventure.
            </p>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Top;
