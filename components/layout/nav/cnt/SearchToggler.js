// React/Next Stuff
import { useEffect } from "react";

// Library Imports
import { FaSearch } from "react-icons/fa";

// Styling
import styles from "../../../../styles/layout/nav/Nav.module.css";

const SearchToggler = () => {
  // Toggle Search
  useEffect(() => {
    document.getElementById("searchToggler").addEventListener("click", () => {
      sessionStorage.setItem("Search Toggled.", true);
      document.body.style.overflowY = "hidden";

      setTimeout(() => {
        document.getElementById("search").style.height = "100%";
      }, 600);

      setTimeout(() => {
        document.getElementById("searchCntInner").classList.remove("deactive");
        document
          .getElementById("fallingMenacings")
          .classList.remove("deactive");
        document.getElementById("searchCntInner").style.pointerEvents = "auto";
        document.getElementById("search").style.overflowY = "auto";
      }, 1500);
    });
  }, []);

  return (
    <div id={styles.searchTogglerHolder}>
      <button id="searchToggler" className="page-transition">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchToggler;
