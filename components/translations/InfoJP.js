// React/Next stuff
import { useEffect } from "react";

// Asset Imports
import {
  GIORNO_GIOVANNA_jp,
  INFO_BACKGROUND_HEADING_jp,
  INFO_BACKGROUND_P_1_jp,
  INFO_BACKGROUND_P_2_jp,
  INFO_BACKGROUND_SITE_CREATOR_jp,
  INFO_GIORNO_1_jp,
  INFO_GIORNO_2_jp,
  INFO_JOLYNE_1_jp,
  INFO_JOLYNE_2_jp,
  INFO_JONATHAN_1_jp,
  INFO_JONATHAN_2_jp,
  INFO_JOSEPH_1_jp,
  INFO_JOSEPH_2_jp,
  INFO_JOSUKE_1_jp,
  INFO_JOSUKE_2_jp,
  INFO_JOTARO_1_jp,
  INFO_JOTARO_2_jp,
  INFO_MEET_THE_JOJOS_HEADING_jp,
  INFO_TOP_HEADING_jp,
  INFO_TOP_P_jp,
  JOLYNE_CUJOH_jp,
  JONATHAN_JOESTAR_jp,
  JOSEPH_JOESTAR_jp,
  JOSUKE_HIGASHIKATA_jp,
  JOTARO_KUJO_jp,
  VIEW_WIKI_jp,
} from "../../assets/data/translations/Japanese";

// Info Japanese Text
const InfoJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      document.querySelector(".jpINFO_TOP_HEADING").innerHTML =
        INFO_TOP_HEADING_jp;
      document.querySelector(".jpINFO_TOP_P").innerHTML = INFO_TOP_P_jp;
      document.querySelector(".jpINFO_BACKGROUND_HEADING").innerHTML =
        INFO_BACKGROUND_HEADING_jp;
      document.querySelector(".jpINFO_BACKGROUND_P_1").innerHTML =
        INFO_BACKGROUND_P_1_jp;
      document.querySelector(".jpINFO_BACKGROUND_SITE_CREATOR").innerHTML =
        INFO_BACKGROUND_SITE_CREATOR_jp;
      document.querySelector(".jpINFO_BACKGROUND_P_2").innerHTML =
        INFO_BACKGROUND_P_2_jp;
      document.querySelector(".jpINFO_JOJO_HEADING").innerHTML =
        INFO_MEET_THE_JOJOS_HEADING_jp;

      const jojoNames = document.querySelectorAll(".jpINFO_JOJO_NAME");
      const jojoP1 = document.querySelectorAll(".jpINFO_JOJO_P_1");
      const jojoP2 = document.querySelectorAll(".jpINFO_JOJO_P_2");

      jojoNames[0].innerHTML = JONATHAN_JOESTAR_jp;
      jojoP1[0].innerHTML = INFO_JONATHAN_1_jp;
      jojoP2[0].innerHTML = INFO_JONATHAN_2_jp;

      jojoNames[1].innerHTML = JOSEPH_JOESTAR_jp;
      jojoP1[1].innerHTML = INFO_JOSEPH_1_jp;
      jojoP2[1].innerHTML = INFO_JOSEPH_2_jp;

      jojoNames[2].innerHTML = JOTARO_KUJO_jp;
      jojoP1[2].innerHTML = INFO_JOTARO_1_jp;
      jojoP2[2].innerHTML = INFO_JOTARO_2_jp;

      jojoNames[3].innerHTML = JOSUKE_HIGASHIKATA_jp;
      jojoP1[3].innerHTML = INFO_JOSUKE_1_jp;
      jojoP2[3].innerHTML = INFO_JOSUKE_2_jp;

      jojoNames[4].innerHTML = GIORNO_GIOVANNA_jp;
      jojoP1[4].innerHTML = INFO_GIORNO_1_jp;
      jojoP2[4].innerHTML = INFO_GIORNO_2_jp;

      jojoNames[5].innerHTML = JOLYNE_CUJOH_jp;
      jojoP1[5].innerHTML = INFO_JOLYNE_1_jp;
      jojoP2[5].innerHTML = INFO_JOLYNE_2_jp;

      document.querySelectorAll(".jpINFO_JOJO_VIEW_WIKI").forEach((wiki) => {
        wiki.innerHTML = VIEW_WIKI_jp;
      });
    }
  }, []);

  return "";
};

export default InfoJP;
