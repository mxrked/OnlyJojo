// Component Imports
import Left from "./cnt/Left";
import Middle from "./cnt/Middle";
import Right from "./cnt/Right";

// Styling
import styles from "../../../styles/layout/footer/Footer.module.css";

const Footer = () => {
  return (
    <div id={styles.footer}>
      <div className={styles.footer_main}>
        <div className={`${styles.footer_main_box} container-fluid`}>
          <div className={`${styles.footer_main_row} row`}>
            <div
              className={`${styles.footer_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              id={styles.footerL}
            >
              <Left />
            </div>
            <div
              className={`${styles.footer_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              id={styles.footerM}
            >
              <Middle />
            </div>
            <div
              className={`${styles.footer_main_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              id={styles.footerR}
            >
              <Right />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_disclaimer} id="footerDisclaimer">
        <blockquote>
          The site creator does not own any of the content that is displayed on
          the website and all rights and creations belong to their rightful
          owners, therefore no profitable gain is obtain through this website.{" "}
          <br />
          <br /> Thank You!
        </blockquote>
      </div>
    </div>
  );
};

export default Footer;
