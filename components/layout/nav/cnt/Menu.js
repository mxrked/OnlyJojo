// React/Next Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

// Asset Imports
import LinkPushing from "../../../../assets/hooks/LinkPushing";

// Styling
import styles from "../../../../styles/layout/nav/Nav.module.css";

const Menu = () => {
  const router = useRouter(); // rooter

  // Defaults
  useEffect(() => {
    document.getElementById("menuCntInner").classList.toggle("deactive");
  }, []);

  // Close Menu
  useEffect(() => {
    document.getElementById("menuCloser").addEventListener("click", () => {
      sessionStorage.removeItem("Menu Toggled.");
      document.getElementById("menu").style.overflow = "hidden";
      document.getElementById("menuCntInner").classList.toggle("deactive");

      setTimeout(() => {
        document.getElementById("menu").style.height = "0";
      }, 800);

      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 1700);
    });
  }, []);

  return (
    <div id="menu" className={`${styles.menu} full-second`}>
      <div className={styles.menu_cnt}>
        <div
          className={`${styles.menu_cnt_inner} page-transition`}
          id="menuCntInner"
        >
          <div className={styles.menu_cnt_inner_top}>
            <button id="menuCloser">
              <FaTimes /> <span className="jp_CLOSE">Close</span>
            </button>
          </div>

          <div className={styles.menu_cnt_inner_views}>
            <div>
              <h1 className="jp_VIEWS">Views</h1>

              <ul>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/", "/");
                    }}
                    className="page-transition jp_HOME"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/info/", "/info/");
                    }}
                    className="page-transition jp_ABOUT_US"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/", "/store/");
                    }}
                    className="page-transition jp_OUR_STORE"
                  >
                    Our Store
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/support/", "/support/");
                    }}
                    className="page-transition jp_OUR_SUPPORT"
                  >
                    Our Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.menu_cnt_inner_products}>
            <h1 className="jp_PRODUCTS">Products</h1>
            <div
              className={`${styles.menu_cnt_inner_links_box} container-fluid`}
            >
              <div className={`${styles.menu_cnt_inner_links_row} row`}>
                <div
                  className={`${styles.menu_cnt_inner_links_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div>
                    <h3 className="jp_PHANTOM_BLOOD">Phantom Blood</h3>

                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#pb_Figures/",
                              "/store/#pb_Figures/"
                            );
                          }}
                          className="page-transition jp_FIGURES"
                        >
                          Figures
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#pb_Manga/",
                              "/store/#pb_Manga/"
                            );
                          }}
                          className="page-transition jp_MANGA"
                        >
                          Manga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#pb_Clothing/",
                              "/store/#pb_Clothing/"
                            );
                          }}
                          className="page-transition jp_CLOTHING"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(router, "/store/#pb/", "/store/#pb/");
                          }}
                          className="page-transition jp_ALL"
                        >
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.menu_cnt_inner_links_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div>
                    <h3 className="jp_BATTLE_TENDENCY">Battle Tendency</h3>

                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#bt_Figures/",
                              "/store/#bt_Figures/"
                            );
                          }}
                          className="page-transition jp_FIGURES"
                        >
                          Figures
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#bt_Manga/",
                              "/store/#bt_Manga/"
                            );
                          }}
                          className="page-transition jp_MANGA"
                        >
                          Manga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#bt_Clothing/",
                              "/store/#bt_Clothing/"
                            );
                          }}
                          className="page-transition jp_CLOTHING"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(router, "/store/#bt/", "/store/#bt/");
                          }}
                          className="page-transition jp_ALL"
                        >
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.menu_cnt_inner_links_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div>
                    <h3 className="jp_STARDUST_CRUSADERS">
                      Stardust Crusaders
                    </h3>

                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#sdcs_Figures/",
                              "/store/#sdcs_Figures/"
                            );
                          }}
                          className="page-transition jp_FIGURES"
                        >
                          Figures
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#sdcs_Manga/",
                              "/store/#sdcs_Manga/"
                            );
                          }}
                          className="page-transition jp_MANGA"
                        >
                          Manga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#sdcs_Clothing/",
                              "/store/#sdcs_Clothing/"
                            );
                          }}
                          className="page-transition jp_CLOTHING"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#sdcs/",
                              "/store/#sdcs/"
                            );
                          }}
                          className="page-transition jp_ALL"
                        >
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.menu_cnt_inner_links_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div>
                    <h3 className="jp_DIAMONDS_ARE_UNBREAKABLE">Diamonds</h3>

                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#daub_Figures/",
                              "/store/#daub_Figures/"
                            );
                          }}
                          className="page-transition jp_FIGURES"
                        >
                          Figures
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#daub_Manga/",
                              "/store/#daub_Manga/"
                            );
                          }}
                          className="page-transition jp_MANGA"
                        >
                          Manga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#daub_Clothing/",
                              "/store/#daub_Clothing/"
                            );
                          }}
                          className="page-transition jp_CLOTHING"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#daub/",
                              "/store/#daub/"
                            );
                          }}
                          className="page-transition jp_ALL"
                        >
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.menu_cnt_inner_links_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div>
                    <h3 className="jp_GOLDEN_WIND">Golden Wind</h3>

                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#gw_Figures/",
                              "/store/#gw_Figures/"
                            );
                          }}
                          className="page-transition jp_FIGURES"
                        >
                          Figures
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#gw_Manga/",
                              "/store/#gw_Manga/"
                            );
                          }}
                          className="page-transition jp_MANGA"
                        >
                          Manga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#gw_Clothing/",
                              "/store/#gw_Clothing/"
                            );
                          }}
                          className="page-transition jp_CLOTHING"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(router, "/store/#gw/", "/store/#gw/");
                          }}
                          className="page-transition jp_ALL"
                        >
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.menu_cnt_inner_links_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
                >
                  <div>
                    <h3 className="jp_STONE_OCEAN">Stone Ocean</h3>

                    <ul>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#so_Figures/",
                              "/store/#so_Figures/"
                            );
                          }}
                          className="page-transition jp_FIGURES"
                        >
                          Figures
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#so_Manga/",
                              "/store/#so_Manga/"
                            );
                          }}
                          className="page-transition jp_MANGA"
                        >
                          Manga
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(
                              router,
                              "/store/#so_Clothing/",
                              "/store/#so_Clothing/"
                            );
                          }}
                          className="page-transition jp_CLOTHING"
                        >
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            LinkPushing(router, "/store/#so/", "/store/#so/");
                          }}
                          className="page-transition jp_ALL"
                        >
                          All
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
