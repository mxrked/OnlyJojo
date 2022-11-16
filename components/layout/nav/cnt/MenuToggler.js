// React/Next Stuff
import { useEffect } from "react";

// Styling
import styles from "../../../../styles/layout/nav/Nav.module.css";

const MenuToggler = () => {
  // Toggle Menu
  useEffect(() => {
    document.getElementById("menuToggler").addEventListener("click", () => {
      sessionStorage.setItem("Menu Toggled.", true);
      document.body.style.overflowY = "hidden";

      setTimeout(() => {
        document.getElementById("menu").style.height = "100%";
      }, 600);

      setTimeout(() => {
        document.getElementById("menuCntInner").classList.remove("deactive");
        document.getElementById("menu").style.overflowY = "auto";
      }, 1500);
    });
  }, []);

  return (
    <div id={styles.menuTogglerHolder}>
      <button id="menuToggler">
        <span className="page-transition" />
        <span className="page-transition" />
        <span className="page-transition" />
      </button>
    </div>
  );
};

export default MenuToggler;
