// React/Next stuff
import { useEffect } from "react";

// Asset Imports
import {
  ADVANCED_jp,
  STORE_FILTER_BY_NAME_jp,
  STORE_FILTER_BY_TYPE_jp,
  STORE_FILTER_jp,
  STORE_TOP_HEADING_jp,
  STORE_TOP_P_jp,
  MANGA_jp,
  FIGURES_jp,
  CLOTHING_jp,
} from "../../assets/data/translations/Japanese";

const StoreJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      // Hide the advanced filtering options on japanese translations...  i just dont want to mess with Japanese translations for filtering
      document.getElementById("filterAdvancedHolder").style.display = "none";
      document.getElementById("filterAdvanced").style.display = "none";

      document.querySelector(".jpSTORETOP_HEADING").innerHTML =
        STORE_TOP_HEADING_jp;
      document.querySelector(".jpSTORETOP_P").innerHTML = STORE_TOP_P_jp;
      document.querySelector(".jpSTOREFILTER_SPAN").innerHTML = STORE_FILTER_jp;
      document.querySelector(".jpSTOREADVANCED_LABEL").innerHTML = ADVANCED_jp;
      document.getElementById("filterSearchByNameIpt").placeholder =
        STORE_FILTER_BY_NAME_jp;
      document.getElementById("filterSearchByTypeIpt").placeholder =
        STORE_FILTER_BY_TYPE_jp;

      document.querySelectorAll(".product-type").forEach((type) => {
        if (type.innerHTML.indexOf("Manga") > -1) {
          type.innerHTML = MANGA_jp;
        }

        if (type.innerHTML.indexOf("Figure") > -1) {
          type.innerHTML = FIGURES_jp;
        }

        if (type.innerHTML.indexOf("Clothing") > -1) {
          type.innerHTML = CLOTHING_jp;
        }
      });

      document.querySelectorAll(".product-name").forEach((n) => {
        n.style.display = "none";
      });
      document.querySelectorAll(".product-jp-name").forEach((n) => {
        n.style.display = "block";
      });
    } else {
      // Hide japanese names
      document.querySelectorAll(".product-jp-name").forEach((n) => {
        n.style.display = "none";
      });
    }
  }, []);

  return "";
};

export default StoreJP;
