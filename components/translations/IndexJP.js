// React/Next stuff
import { useEffect } from "react";

// Asset Imports
import {
  INDEX_INFO_HEADING_A_jp,
  INDEX_INFO_HEADING_B_jp,
  INDEX_INFO_P_1_jp,
  INDEX_INFO_P_2_jp,
  INDEX_INFO_SOURCES_jp,
  BROWSE_jp,
  VIEW_ALL_jp,
  INDEX_BROWSE_BY_PARTS_HEADING_jp,
  INDEX_POPULAR_PRODUCTS_HEADING_jp,
  INDEX_COMMUNITY_HEADING_jp,
  INDEX_COMMUNITY_P_jp,
  INDEX_POST_1,
  INDEX_POST_2,
  INDEX_POST_3,
  INDEX_POST_AUTHOR,
  VIEW_jp,
  INDEX_SUPPORT_HEADING_JP,
  INDEX_SUPPORT_P_jp,
  CONTACT_US_jp,
  OUR_POLICIES_jp,
  FIGURES_jp,
  MANGA_jp,
  CLOTHING_jp,
} from "../../assets/data/translations/Japanese";

const IndexJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      document.querySelectorAll(".jp_BROWSE").forEach((browse) => {
        browse.innerHTML = BROWSE_jp;
      });

      document
        .querySelectorAll(".jp_PHANTOM_BLOOD_HEADING")
        .forEach((phantomH) => {
          phantomH.innerHTML = PHANTOM_BLOOD_jp;
        });

      document.querySelector("#jpINDEXINFO_HA").innerHTML =
        INDEX_INFO_HEADING_A_jp;
      document.querySelector("#jpINDEXINFO_HB").innerHTML =
        INDEX_INFO_HEADING_B_jp;
      document.querySelector("#jpINDEXINFO_P1_TXT").innerHTML =
        INDEX_INFO_P_1_jp;
      document.querySelector("#jpINDEXINFO_P2_TXT").innerHTML =
        INDEX_INFO_P_2_jp;
      document.querySelector("#jpSOURCES").innerHTML = INDEX_INFO_SOURCES_jp;

      document.querySelectorAll(".jp_VIEW_ALL").forEach((view) => {
        view.innerHTML = VIEW_ALL_jp;
      });

      document.querySelector("#jpINDEXBROWSEBYPART_HEADING").innerHTML =
        INDEX_BROWSE_BY_PARTS_HEADING_jp;

      document.querySelector("#jpINDEXPOPULARPRODUCTS_HEADING").innerHTML =
        INDEX_POPULAR_PRODUCTS_HEADING_jp;

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

      document.querySelectorAll(".e-name").forEach((ename) => {
        ename.style.display = "none";
      });

      document.querySelector("#jpINDEXCOMMUNITY_HEADING").innerHTML =
        INDEX_COMMUNITY_HEADING_jp;
      document.querySelector("#jpINDEXCOMMUNITY_P_TXT").innerHTML =
        INDEX_COMMUNITY_P_jp;
      document.querySelector("#c1 h4").innerHTML = INDEX_POST_1;
      document.querySelector("#c2 h4").innerHTML = INDEX_POST_2;
      document.querySelector("#c3 h4").innerHTML = INDEX_POST_3;
      document.querySelectorAll(".post-item span").forEach((span) => {
        span.innerHTML = INDEX_POST_AUTHOR;
      });
      document.querySelectorAll(".post-item a").forEach((a) => {
        a.innerHTML = VIEW_jp;
      });
      document.querySelector("#jpINDEXSUPPORT_HEADING").innerHTML =
        INDEX_SUPPORT_HEADING_JP;
      document.querySelector("#jpINDEXSUPPORT_P_TXT").innerHTML =
        INDEX_SUPPORT_P_jp;
      document.querySelectorAll(".jp_CONTACT_US").forEach((contact) => {
        contact.innerHTML = CONTACT_US_jp;
      });
      document.querySelectorAll(".jp_OUR_POLICIES").forEach((policy) => {
        policy.innerHTML = OUR_POLICIES_jp;
      });
    } else {
      // Hide japanese names
      document.querySelectorAll(".jp-name").forEach((ename) => {
        ename.style.display = "none";
      });
    }
  }, []);

  return "";
};

export default IndexJP;
