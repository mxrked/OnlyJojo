// React/Next Stuff
import { useRouter } from "next/router";

//Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";

// Component Imports
import MenuToggler from "./cnt/MenuToggler";
import SearchToggler from "./cnt/SearchToggler";
import CartLink from "./cnt/CartLink";

// Styling
import styles from "../../../styles/layout/nav/Nav.module.css";

const Navigation = () => {
  const router = useRouter(); // rooter

  return (
    <nav id={styles.navigation}>
      <div className={`${styles.navigation_box} container-fluid`}>
        <div className={`${styles.navigation_row} row`}>
          <div
            className={`${styles.navigation_side} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
            id={styles.navigationL}
          >
            <MenuToggler />
          </div>
          <div
            className={`${styles.navigation_side} col-lg-6 col-md-6 d-lg-grid d-md-grid d-sm-none d-none`}
            id={styles.navigationM}
          >
            <div id={styles.logo}>
              <a
                className="page-transition"
                id="navLogo"
                onClick={() => {
                  LinkPushing(router, "/", "/");
                }}
              >
                <div>
                  <h1>Onlyjojo</h1>

                  <span>Bizarre Store</span>
                </div>
              </a>
            </div>
          </div>
          <div
            className={`${styles.navigation_side} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
            id={styles.navigationR}
          >
            <SearchToggler />
            <CartLink />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
