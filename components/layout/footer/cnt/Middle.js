// React/Next Stuff
import { useRouter } from "next/router";

// Asset Imports
import LinkPushing from "../../../../assets/hooks/LinkPushing";

// Styling
import styles from "../../../../styles/layout/footer/Footer.module.css";

const Middle = () => {
  const router = useRouter(); // rooter

  return (
    <div id={styles.middle} className={styles.footer_main_side_cnt}>
      <div className={styles.footer_links_set}>
        <h4 className="jp_VIEWS">Views</h4>

        <ul>
          <li>
            <a
              className="page-transition jp_HOME"
              onClick={() => {
                LinkPushing(router, "/", "onlyjojo/");
              }}
            >
              Home/Index
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_ABOUT_US"
              onClick={() => {
                LinkPushing(router, "/info/", "onlyjojo/info/");
              }}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_OUR_SUPPORT"
              onClick={() => {
                LinkPushing(router, "/support/", "onlyjojo/support/");
              }}
            >
              Our Support
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_OUR_STORE"
              onClick={() => {
                LinkPushing(router, "/store/", "onlyjojo/store/");
              }}
            >
              Our Store
            </a>
          </li>
          <li className={styles.fake_link}>&nbsp;</li>
          <li className={styles.fake_link}>&nbsp;</li>
        </ul>
      </div>
      <div className={styles.footer_links_set}>
        <h4 className="jp_PRODUCTS">Products</h4>

        <ul>
          <li>
            <a
              className="page-transition jp_PHANTOM_BLOOD"
              onClick={() => {
                LinkPushing(router, "/store/#pb/", "onlyjojo/store/#pb/");
              }}
            >
              Phantom Blood
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_BATTLE_TENDENCY"
              onClick={() => {
                LinkPushing(router, "/store/#bt/", "onlyjojo/store/#bt/");
              }}
            >
              Battle Tendency
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_STARDUST_CRUSADERS"
              onClick={() => {
                LinkPushing(router, "/store/#sdcs/", "onlyjojo/store/#sdcs/");
              }}
            >
              Stardust Crusaders
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_DIAMONDS_ARE_UNBREAKABLE"
              onClick={() => {
                LinkPushing(router, "/store/#daub/", "onlyjojo/store/#daub/");
              }}
            >
              Diamonds are Unbreakable
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_GOLDEN_WIND"
              onClick={() => {
                LinkPushing(router, "/store/#gw/", "onlyjojo/store/#gw/");
              }}
            >
              Golden Wind
            </a>
          </li>
          <li>
            <a
              className="page-transition jp_STONE_OCEAN"
              onClick={() => {
                LinkPushing(router, "/store/#so/", "onlyjojo/store/#so/");
              }}
            >
              Stone Ocean
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Middle;
