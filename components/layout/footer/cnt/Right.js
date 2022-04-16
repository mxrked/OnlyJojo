// React/Next Stuff
import { useRouter } from "next/router";

// Asset Imports
import LinkPushing from "../../../../assets/hooks/LinkPushing";

// Library Imports
import { FiSend } from "react-icons/fi";

// Styling
import styles from "../../../../styles/layout/footer/Footer.module.css";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Right = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.right} className={styles.footer_main_side_cnt}>
      <div className={styles.footer_newsletter} id="footerNewsletter">
        <h4>Sign up to newsletter</h4>

        <div>
          <input
            type="email"
            autoComplete="PREVENT_AC"
            placeholder="Your Email"
          />

          <button id="signUpToNL">
            <FiSend />
          </button>
        </div>
      </div>

      <div className={styles.footer_socials}>
        <span className="page-transition">
          <FaTwitter />
        </span>
        <span className="page-transition">
          <FaFacebook />
        </span>
        <span className="page-transition">
          <FaLinkedin />
        </span>
        <span className="page-transition">
          <FaGithub />
        </span>
      </div>

      <div className={styles.footer_contact}>
        <a className="page-transition" href="">
          burner@burner.com
        </a>
        <a className="page-transition" href="">
          +1 (202) 555-0944
        </a>
      </div>
    </div>
  );
};

export default Right;
