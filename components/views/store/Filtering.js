// React/Next stuff
import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";

// Library Items
import { FaCaretDown, FaFilter, FaSearch, FaTimes } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";

// Styling
import styles from "../../../styles/views/store/Store.module.css";

const Filtering = () => {
  const router = useRouter(); // rooter

  useEffect(() => {
    //! Filter Drop Downs
    // Resets check state for cbs
    document.querySelectorAll(".dd-cb").forEach((cb) => {
      cb.checked = false;
    });

    // This will be used to toggle/hide the filter dropdowns
    function toggleFilterDD(toggler, dd) {
      toggler.addEventListener("change", () => {
        if (toggler.checked) {
          dd.style.display = "block";
        } else {
          dd.style.display = "none";
        }
      });
    }

    // Drop Down Toggler Instances
    toggleFilterDD(
      document.querySelectorAll(".dd-cb")[0],
      document.getElementById("figuresDD")
    );
    toggleFilterDD(
      document.querySelectorAll(".dd-cb")[1],
      document.getElementById("mangaDD")
    );
    toggleFilterDD(
      document.querySelectorAll(".dd-cb")[2],
      document.getElementById("clothingDD")
    );

    // This will be used to close a specific filter dropdown
    function closeFilterDD(dd, cb) {
      dd.style.display = "none";
      cb.checked = false;
    }

    // This is for closing all of the filter dds
    function closeAllFilterDDS() {
      document.querySelectorAll(".dd").forEach((dd) => {
        dd.style.display = "none";
      });
      document.querySelectorAll(".dd-cb").forEach((cb) => {
        cb.checked = false;
      });
    }

    // Closes all filters on product type part click
    document.querySelectorAll(".dd-li").forEach((li) => {
      li.addEventListener("click", () => {
        closeAllFilterDDS();
      });
    });

    // Closes the opened filter dd if the user unfocuses off of it
    document.querySelector(".store_Cnt").addEventListener("click", () => {
      if (document.querySelectorAll(".dd-cb")[0] !== document.activeElement) {
        closeFilterDD(
          document.getElementById("figuresDD"),
          document.querySelectorAll(".dd-cb")[0]
        );
      }

      if (document.querySelectorAll(".dd-cb")[1] !== document.activeElement) {
        closeFilterDD(
          document.getElementById("mangaDD"),
          document.querySelectorAll(".dd-cb")[1]
        );
      }

      if (document.querySelectorAll(".dd-cb")[2] !== document.activeElement) {
        closeFilterDD(
          document.getElementById("clothingDD"),
          document.querySelectorAll(".dd-cb")[2]
        );
      }
    });

    //! Filter Advanced
    // Toggle/Hide Advanced Filtering
    function advancedFilterState() {
      if (document.getElementById("filterAdvancedCB").checked) {
        document.getElementById("filterAdvanced").style.height = "300px";
        document.querySelector(".fa-icon").style.transform = "rotate(0deg)";
      } else {
        document.getElementById("filterAdvanced").style.height = "0";
        document.querySelector(".fa-icon").style.transform = "rotate(45deg)";
      }
    }
    // Search Item By Name
    function filterSearchItemByName() {
      var i;
      var ipt,
        filter,
        names,
        names_name,
        namesVal,
        ipt = document.getElementById("filterSearchByNameIpt");
      filter = ipt.value.toUpperCase();
      names = document.getElementsByClassName("product-name");

      // By Name
      for (i = 0; i < names.length; i++) {
        names_name = names[i];
        namesVal = names_name.textContent || names_name.innerText;

        if (namesVal.toUpperCase().indexOf(filter) > -1) {
          names[i].closest(".product").style.display = "";
        } else {
          names[i].closest(".product").style.display = "none";
        }
      }
    }

    // Search Item By Type
    function filterSearchItemByType() {
      var i;
      var ipt,
        filter,
        types,
        types_type,
        typesVal,
        ipt = document.getElementById("filterSearchByTypeIpt");
      filter = ipt.value.toUpperCase();
      types = document.getElementsByClassName("product-type");

      // By Name
      for (i = 0; i < types.length; i++) {
        types_type = types[i];
        typesVal = types_type.textContent || types_type.innerText;

        if (typesVal.toUpperCase().indexOf(filter) > -1) {
          types[i].closest(".product").style.display = "";
        } else {
          types[i].closest(".product").style.display = "none";
        }
      }
    }

    // This will be used to show all items in a single instance
    function showAllProducts() {
      document.querySelectorAll(".product").forEach((product) => {
        product.style.display = "grid";
      });
    }

    // This will be used to check if either of the filter search inputs are empty, then it will show all the products
    function checkingForFilterSearchClears() {
      if (
        document.getElementById("filterSearchByNameIpt").value === "" ||
        document.getElementById("filterSearchByTypeIpt").value === ""
      ) {
        showAllProducts();
      }
    }

    document
      .getElementById("filterAdvancedCB")
      .addEventListener("change", () => {
        advancedFilterState();
      });

    // By Name Events
    document
      .getElementById("filterSearchByNameIpt")
      .addEventListener("focus", () => {
        document.getElementById("filterSearchByTypeIpt").value = "";

        // Shows all items when cleared instead of having blank white space
        checkingForFilterSearchClears();
      });
    document
      .getElementById("filterSearchByNameIpt")
      .addEventListener("keyup", () => {
        filterSearchItemByName();
      });

    // By Type Events
    document
      .getElementById("filterSearchByTypeIpt")
      .addEventListener("focus", () => {
        document.getElementById("filterSearchByNameIpt").value = "";

        // Shows all items when cleared instead of having blank white space
        checkingForFilterSearchClears();
      });
    document
      .getElementById("filterSearchByTypeIpt")
      .addEventListener("keyup", () => {
        filterSearchItemByType();
      });
  }, []);

  return (
    <div id={styles.filtering}>
      <div className={styles.filtering_cnt}>
        <div id={styles.filteringCntL}>
          <div>
            <FaFilter className={styles.fa_icon} />{" "}
            <span className="jpSTOREFILTER_SPAN">Filter</span>
          </div>
        </div>
        <div id={styles.filteringCntR}>
          <div className={styles.dd_sets}>
            <div className={styles.filter_dd_set}>
              <label>
                <FaCaretDown className={styles.fa_icon} />

                <span className="jp_FIGURES">Figures</span>

                <input type="checkbox" className="dd-cb" />
              </label>

              <ul id="figuresDD" className="dd">
                <li
                  className="dd-li jp_PHANTOM_BLOOD"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#pb_Figures/",
                      "/store/#pb_Figures/"
                    );
                  }}
                >
                  Phantom Blood
                </li>
                <li
                  className="dd-li jp_BATTLE_TENDENCY"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#bt_Figures/",
                      "/store/#bt_Figures/"
                    );
                  }}
                >
                  Battle Tendency
                </li>
                <li
                  className="dd-li jp_STARDUST_CRUSADERS"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#sdcs_Figures/",
                      "/store/#sdcs_Figures/"
                    );
                  }}
                >
                  Stardust Crusaders
                </li>
                <li
                  className="dd-li jp_DIAMONDS_ARE_UNBREAKABLE"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#daub_Figures/",
                      "/store/#daub_Figures/"
                    );
                  }}
                >
                  Diamond is Unbreakable
                </li>
                <li
                  className="dd-li jp_GOLDEN_WIND"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#gw_Figures/",
                      "/store/#gw_Figures/"
                    );
                  }}
                >
                  Golden Wind
                </li>
                <li
                  className="dd-li jp_STONE_OCEAN"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#so_Figures/",
                      "/store/#so_Figures/"
                    );
                  }}
                >
                  Stone Ocean
                </li>
              </ul>
            </div>
            <div className={styles.filter_dd_set}>
              <label>
                <FaCaretDown className={styles.fa_icon} />

                <span className="jp_MANGA">Manga</span>

                <input type="checkbox" className="dd-cb" />
              </label>

              <ul id="mangaDD" className="dd">
                <li
                  className="dd-li jp_PHANTOM_BLOOD"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#pb_Manga/",
                      "/store/#pb_Manga/"
                    );
                  }}
                >
                  Phantom Blood
                </li>
                <li
                  className="dd-li jp_BATTLE_TENDENCY"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#bt_Manga/",
                      "/store/#bt_Manga/"
                    );
                  }}
                >
                  Battle Tendency
                </li>
                <li
                  className="dd-li jp_STARDUST_CRUSADERS"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#sdcs_Manga/",
                      "/store/#sdcs_Manga/"
                    );
                  }}
                >
                  Stardust Crusaders
                </li>
                <li
                  className="dd-li jp_DIAMONDS_ARE_UNBREAKABLE"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#daub_Manga/",
                      "/store/#daub_Manga/"
                    );
                  }}
                >
                  Diamond is Unbreakable
                </li>
                <li
                  className="dd-li jp_GOLDEN_WIND"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#gw_Manga/",
                      "/store/#gw_Manga/"
                    );
                  }}
                >
                  Golden Wind
                </li>
                <li
                  className="dd-li jp_STONE_OCEAN"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#so_Manga/",
                      "/store/#so_Manga/"
                    );
                  }}
                >
                  Stone Ocean
                </li>
              </ul>
            </div>
            <div className={styles.filter_dd_set}>
              <label>
                <FaCaretDown className={styles.fa_icon} />

                <span className="jp_CLOTHING">Clothing</span>

                <input type="checkbox" className="dd-cb" />
              </label>

              <ul id="clothingDD" className="dd">
                <li
                  className="dd-li jp_PHANTOM_BLOOD"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#pb_Clothing/",
                      "/store/#pb_Clothing/"
                    );
                  }}
                >
                  Phantom Blood
                </li>
                <li
                  className="dd-li jp_BATTLE_TENDENCY"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#bt_Clothing/",
                      "/store/#bt_Clothing/"
                    );
                  }}
                >
                  Battle Tendency
                </li>
                <li
                  className="dd-li jp_STARDUST_CRUSADERS"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#sdcs_Clothing/",
                      "/store/#sdcs_Clothing/"
                    );
                  }}
                >
                  Stardust Crusaders
                </li>
                <li
                  className="dd-li jp_DIAMONDS_ARE_UNBREAKABLE"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#daub_Clothing/",
                      "/store/#daub_Clothing/"
                    );
                  }}
                >
                  Diamond is Unbreakable
                </li>
                <li
                  className="dd-li jp_GOLDEN_WIND"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#gw_Clothing/",
                      "/store/#gw_Clothing/"
                    );
                  }}
                >
                  Golden Wind
                </li>
                <li
                  className="dd-li jp_STONE_OCEAN"
                  onClick={() => {
                    LinkPushing(
                      router,
                      "/store/#so_Clothing/",
                      "/store/#so_Clothing/"
                    );
                  }}
                >
                  Stone Ocean
                </li>
              </ul>
            </div>
            <div className={styles.filter_dd_set}>
              <button
                id="showAll"
                onClick={() => {
                  LinkPushing(router, "/store/", "onlyjojo/store/");
                  document.getElementById("filterSearchByNameIpt").value = "";
                  document.getElementById("filterSearchByTypeIpt").value = "";
                }}
              >
                <BsGridFill className={styles.bs_icon} />
                <span className="jp_ALL">All</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className={styles.filter_advanced_cb_holder}
          id="filterAdvancedHolder"
        >
          <label>
            <input type="checkbox" id="filterAdvancedCB" />
            <FaTimes className={`${styles.fa_icon} fa-icon page-transition`} />
            <span className="jpSTOREADVANCED_LABEL">Advanced</span>
          </label>
        </div>

        <div
          id="filterAdvanced"
          className={`${styles.filter_advanced} page-transition`}
        >
          <div className={styles.filter_advanced_cnt}>
            <div id={styles.filterSearchByName}>
              <div>
                <input
                  type="text"
                  id="filterSearchByNameIpt"
                  placeholder="Search By Name.."
                />

                <FaSearch className={styles.fa_icon} />
              </div>
            </div>
            <div id={styles.filterSearchByType}>
              <div>
                <input
                  type="text"
                  id="filterSearchByTypeIpt"
                  placeholder="Search By Type.."
                />

                <FaSearch className={styles.fa_icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtering;
