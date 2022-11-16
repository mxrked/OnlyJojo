// React/Next Stuff
import { useRouter } from "next/router";

// Library Imports
import Flags from "country-flag-icons/react/3x2";

// Styling
import styles from "../../styles/js/Js.module.css";

const LanguagePicker = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.languagePicker}>
      <div>
        <button
          id="engLang"
          onClick={() => {
            if (sessionStorage.getItem("Translate Japanese")) {
              sessionStorage.removeItem("Translate Japanese");
              router.reload();
            }
          }}
        ></button>
        <Flags.US title="English" className={styles.flag} />
      </div>

      <div>
        <button
          id="japanLang"
          onClick={() => {
            sessionStorage.setItem("Translate Japanese", true);
            router.reload();
          }}
        ></button>
        <Flags.JP title="Japanese" className={styles.flag} />
      </div>
    </div>
  );
};

export default LanguagePicker;
