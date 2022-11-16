// React/Next Stuff
import { useRouter } from "next/router";

// Library Imports
import { FaCopyright } from "react-icons/fa";

// Asset Imports
import LinkPushing from "../../../../assets/hooks/LinkPushing";

// Styling
import styles from "../../../../styles/layout/footer/Footer.module.css";

const Left = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.left} className={styles.footer_main_side_cnt}>
      <div className={styles.footer_logo}>
        <a
          className="page-transition"
          onClick={() => {
            LinkPushing(router, "/", "/");
          }}
        >
          <h1>OnlyJojo</h1>
        </a>
      </div>

      <div className={styles.footer_text} id="footerText">
        <p>
          The site is all things JoJo&apos;s Bizarre Adventure manga or anime.
          This site is made with love and care by a fan of the media.
        </p>

        <span className={styles.footer_copyright}>
          <FaCopyright /> <span>Copyright 2022, All Rights Reserved.</span>
        </span>
      </div>
    </div>
  );
};

export default Left;
