// React/Next stuff
import { useEffect } from "react";

// Asset Imports
import {
  FOOTER_COPYRIGHT_jp,
  FOOTER_DISCLAIMER_jp,
  FOOTER_TEXT_jp,
  NEWSLETTER_jp,
  SIGN_UP_TO_jp,
  THANK_YOU_jp,
} from "../../assets/data/translations/Japanese";

// Footer Japanese Text
const FooterJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      document.querySelector("#footerDisclaimer blockquote").innerHTML =
        FOOTER_DISCLAIMER_jp + "<br/><br/>" + THANK_YOU_jp;

      document.querySelector("#footerText p").innerHTML = FOOTER_TEXT_jp;
      document.querySelector("#footerText span span").innerHTML =
        FOOTER_COPYRIGHT_jp;
      document.querySelector("#footerNewsletter h4").innerHTML =
        SIGN_UP_TO_jp + " " + NEWSLETTER_jp;
    }
  }, []);

  return "";
};

export default FooterJP;
