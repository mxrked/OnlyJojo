// React/Next Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Asset Imports
import LinkPushing from "../../../../assets/hooks/LinkPushing";
import {
  BT_KWS,
  HOME_KWS,
  INFO_KWS,
  PB_KWS,
  STORE_KWS,
  SUPPORT_KWS,
  SDC_KWS,
  DAUB_KWS,
  GW_KWS,
  SO_KWS,
} from "../../../../assets/data/arrays/Keywords";

// Image Import
import { SEARCH } from "../../../../assets/cdns/images/NAV_IMGS";
import { MENACING } from "../../../../assets/cdns/images/global";

// Library Imports
import { BackgroundImage } from "react-image-and-background-image-fade";
import { FaSearch, FaTimes } from "react-icons/fa";

// Styling
import styles from "../../../../styles/layout/nav/Nav.module.css";

const Search = () => {
  var i;
  const env = process.env.NODE_ENV;
  const router = useRouter(); // rooter

  // Defaults
  useEffect(() => {
    document.getElementById("searchCntInner").classList.toggle("deactive");
    document.getElementById("fallingMenacings").classList.toggle("deactive");
  }, []);

  // Close Search
  useEffect(() => {
    document.getElementById("searchCloser").addEventListener("click", () => {
      sessionStorage.removeItem("Search Toggled.");
      document.getElementById("search").style.overflowY = "hidden";

      document.getElementById("searchIpt").value = "";
      document.querySelectorAll("#searchLinks li").forEach((link) => {
        link.style.display = "flex";
      });
      document.getElementById("searchCntInner").style.pointerEvents = "none";
      document.getElementById("searchCntInner").classList.toggle("deactive");

      document.getElementById("fallingMenacings").classList.toggle("deactive");

      setTimeout(() => {
        document.getElementById("search").style.height = "0";
      }, 800);

      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 1700);
    });
  }, []);

  // This will be used to show/hide the search hint if the input the user types does not exist
  function triggerSearchHint() {
    var hiddenLinkLength = document.querySelectorAll(
      "#searchLinks li[style='display: none;']"
    ).length;

    var shownLinkLength = document.querySelectorAll("#searchLinks li").length;

    if (hiddenLinkLength >= shownLinkLength) {
      document.getElementById("searchHint").style.display = "flex";
    } else {
      document.getElementById("searchHint").style.display = "none";
    }
  }

  // This will reroute the user based on what they input
  function rerouteToLink(kws, route) {
    const iptVal = document.getElementById("searchIpt").value.toLowerCase();

    for (i = 0; i < kws.length; i++) {
      if (iptVal.indexOf(kws[i]) > -1) {
        if (env == "development") {
          router.push(route);
        }

        if (env == "production") {
          router.push("/" + route);
        }
      }
    }
  }

  // This will filter the search links
  function filterSearchLinks() {
    var ipt, filter, links, links_li, link, txtVal;

    ipt = document.getElementById("searchIpt");
    filter = ipt.value.toUpperCase();
    links = document.getElementById("searchLinks");
    links_li = links.getElementsByTagName("li");

    for (i = 0; i < links_li.length; i++) {
      link = links_li[i].getElementsByTagName("a")[0];
      txtVal = link.textContent || link.innerText;

      if (txtVal.toUpperCase().indexOf(filter) > -1) {
        links_li[i].style.display = "";
      } else {
        links_li[i].style.display = "none";
      }

      triggerSearchHint();
    }
  }

  // This will hold all of the reroutes and will be used to decide which one to take the user to
  function decidingRoute() {
    rerouteToLink(HOME_KWS, "/");
    rerouteToLink(INFO_KWS, "info/");
    rerouteToLink(SUPPORT_KWS, "support/");
    rerouteToLink(STORE_KWS, "store/");
    rerouteToLink(PB_KWS, "store/pb/");
    rerouteToLink(BT_KWS, "store/bt/");
    rerouteToLink(SDC_KWS, "store/sdcs/");
    rerouteToLink(DAUB_KWS, "store/daub/");
    rerouteToLink(GW_KWS, "store/gw/");
    rerouteToLink(SO_KWS, "store/so/");
  }

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <BackgroundImage
        src={SEARCH}
        width="100%"
        height="100%"
        className={styles.search_bg}
      />

      <div
        className={`${styles.falling_menacings} page-transition`}
        id="fallingMenacings"
      >
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
        <img
          data-src={MENACING}
          alt="Menacing."
          className={`${styles.falling_menacing} lazyload`}
        />
      </div>

      <div className={styles.search_cnt}>
        <div
          id="searchCntInner"
          className={`${styles.search_cnt_inner} page-transition`}
        >
          <div className={styles.search_cnt_inner_top}>
            <h3 className="jp_SEARCH">Search</h3>

            <button id="searchCloser">
              <span className="jp_CLOSE">Close</span>

              <FaTimes />
            </button>
          </div>

          <div className={styles.search_cnt_inner_main}>
            <div className={styles.search_cnt_inner_input_holder}>
              <div>
                <input
                  type="text"
                  autoComplete="off"
                  id="searchIpt"
                  className="jp-keyboards"
                  onKeyUp={() => {
                    filterSearchLinks();
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      decidingRoute();
                    }
                  }}
                />

                <button
                  id="searchGo"
                  className="page-transition"
                  onClick={() => {
                    decidingRoute();
                  }}
                >
                  <FaSearch />
                </button>
              </div>

              <ul id="searchLinks">
                <span id="searchHint">There is no result for that..</span>

                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/", "/");
                    }}
                    className="page-transition jp_SEARCH_HOME"
                  >
                    Home/Index
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/info/", "/info/");
                    }}
                    className="page-transition jp_SEARCH_ABOUT"
                  >
                    About Us/Info
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/support/", "/support/");
                    }}
                    className="page-transition jp_SEARCH_SUPPORT"
                  >
                    Our Support/Contact
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/", "/store/");
                    }}
                    className="page-transition jp_SEARCH_PRODUCTS"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/#pb/", "/store/#pb/");
                    }}
                    className="page-transition jp_SEARCH_PHANTOM_BLOOD"
                  >
                    Phantom Blood - Products
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/#bt/", "/store/#bt/");
                    }}
                    className="page-transition jp_SEARCH_BATTLE_TENDENCY"
                  >
                    Battle Tendency - Products
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/#sdcs/", "/store/#sdcs/");
                    }}
                    className="page-transition jp_SEARCH_STARDUST_CRUSADERS"
                  >
                    Stardust Crusaders - Products
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/#daub/", "/store/#daub/");
                    }}
                    className="page-transition jp_SEARCH_DIAMONDS_ARE_UNBREAKABLE"
                  >
                    Diamonds are Unbreakable - Products
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/#gw/", "/store/#gw/");
                    }}
                    className="page-transition jp_SEARCH_GOLDEN_WIND"
                  >
                    Golden Wind - Products
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      LinkPushing(router, "/store/#so/", "/store/#so/");
                    }}
                    className="page-transition jp_SEARCH_STONE_OCEAN"
                  >
                    Stone Ocean - Products
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
