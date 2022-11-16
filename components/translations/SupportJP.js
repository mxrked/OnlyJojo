// React/Next stuff
import { useEffect } from "react";

// Asset Imports
import {
  CLEAR_jp,
  SEND_jp,
  SUPPORT_ABOVE_FORM_HEADING_jp,
  SUPPORT_ABOVE_FORM_P_jp,
  SUPPORT_EMAIL_jp,
  SUPPORT_FN_jp,
  SUPPORT_LN_jp,
  SUPPORT_MESSAGE_jp,
  SUPPORT_PHONE_jp,
  SUPPORT_SUBJECT_jp,
  SUPPORT_TOP_HEADING_jp,
  SUPPORT_TOP_P_jp,
} from "../../assets/data/translations/Japanese";

// Support Japanese Text
const SupportJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      document.querySelector(".jpSUPPORT_TOP_HEADING").innerHTML =
        SUPPORT_TOP_HEADING_jp;
      document.querySelector(".jpSUPPORT_TOP_P").innerHTML = SUPPORT_TOP_P_jp;
      document.querySelector(".jpSUPPORT_ABOVE_FORM_HEADING").innerHTML =
        SUPPORT_ABOVE_FORM_HEADING_jp;
      document.querySelector(".jpSUPPORT_ABOVE_FORM_P").innerHTML =
        SUPPORT_ABOVE_FORM_P_jp;

      const FORM_INPUTS = document.querySelectorAll(".frm-input");

      FORM_INPUTS[0].placeholder = SUPPORT_FN_jp;
      FORM_INPUTS[1].placeholder = SUPPORT_LN_jp;
      FORM_INPUTS[2].placeholder = SUPPORT_EMAIL_jp;
      FORM_INPUTS[3].placeholder = SUPPORT_PHONE_jp;
      FORM_INPUTS[4].placeholder = SUPPORT_SUBJECT_jp;

      document.getElementById("frmMessage").placeholder = SUPPORT_MESSAGE_jp;
      document.getElementById("frmSend").innerHTML = SEND_jp;
      document.getElementById("frmReset").innerHTML = CLEAR_jp;
    }
  }, []);

  return "";
};

export default SupportJP;
