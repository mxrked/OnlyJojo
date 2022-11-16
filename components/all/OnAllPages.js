// Next/React stuff
import { useEffect } from "react";

// Library Imports
// import aos from "aos";

// Component Imports
import BackToTop from "../js/BackToTop";
import Loading from "../js/Loading";
import Menu from "../layout/nav/cnt/Menu";
import Search from "../layout/nav/cnt/Search";
import LanguagePicker from "../js/LanguagePicker";
import GlobalJP from "../translations/GlobalJP";
import FooterJP from "../translations/FooterJP";
import CreatorTools from "../js/CreatorTools";

const OnAllPages = () => {
  // Initializors
  useEffect(() => {
    //   aos.init({
    //     once: true,
    //     delay: "800",
    //     duration: "1000",
    //   });

    sessionStorage.removeItem("Menu Toggled.");
    sessionStorage.removeItem("Search Toggled.");
    sessionStorage.removeItem("Store All");
  }, []);

  return (
    <div id="onAllPages">
      <Menu />
      <Search />
      <BackToTop />
      <Loading />
      <LanguagePicker />
      <GlobalJP />
      <FooterJP />
      <CreatorTools />
    </div>
  );
};

export default OnAllPages;
