// React Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";
import { FadeLeft } from "../../../assets/animations/Fades";

// Library Items
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { FaCartPlus } from "react-icons/fa";

// Asset Imports
import AddToCartList from "../../../assets/functions/AddToCartList";
import {
  BT_Joseph,
  DAUB_Josuke,
  GW_Diavolo,
  PB_Dio,
  SDC_Jotaro,
  SO_Jolyne,
} from "../../../assets/data/objects/Figures";
import {
  BT_Set,
  DAUB_Set,
  GW_Set,
  PB_Set,
  SDC_Set,
  SO_Set,
} from "../../../assets/data/objects/Manga";
import {
  GW_JOBROS_Tshirt,
  JOLYNE_Tshirt,
  JOSEPH_AND_CAESAR_Tshirt,
  JOSUKE_AND_KOICHI_Tshirt,
  MUDA_PURPLE_Tshirt,
  PURPLE_JBA_Hat,
} from "../../../assets/data/objects/Clothing";

// Image Imports
import {
  BT_SET,
  DAUB_SET,
  DIAVOLO_GW,
  DIO_PB,
  GW_JOBROS_TSHIRT,
  GW_SET,
  JOLYNE_SO,
  JOLYNE_TSHIRT,
  JOSEPH_AND_CAESAR_TSHIRT,
  JOSEPH_BT,
  JOSUKE_AND_KOICHI_TSHIRT,
  JOSUKE_DAUB,
  JOTARO_SDC,
  MUDA_PURPLE_TSHIRT,
  PB_SET,
  PURPLE_JBA_HAT,
  SDC_SET,
  SO_SET,
} from "../../../assets/cdns/images/STORE_IMAGES";
import { MENACING_GIF } from "../../../assets/cdns/images/global";

// Styling
import styles from "../../../styles/views/home/Home.module.css";

const PopularProducts = () => {
  const router = useRouter(); // rooter

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
    }
  }, []);

  const slickResponsive = [
    {
      breakpoint: 419,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 1155,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1655,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ];

  const indexSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    arrows: false,
    responsive: slickResponsive,
  };

  return (
    <div id={styles.popularProducts} className="overrides_Products">
      <motion.div
        className={styles.popular_products_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={styles.popular_products_cnt_top}>
          <div>
            <h1 id="jpINDEXPOPULARPRODUCTS_HEADING">Popular Products.</h1>{" "}
            <img
              data-src={MENACING_GIF}
              className="lazyload"
              alt="Menacing Text."
            />
          </div>

          <a
            className="page-transition jp_VIEW_ALL"
            onClick={() => {
              LinkPushing(router, "/store/", "/store/");
            }}
          >
            View All
          </a>
        </div>

        <div className={styles.popular_products_cnt_slider_holder}>
          <Slider {...indexSettings}>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {PB_Dio.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={DIO_PB}
                    className="lazyload"
                    alt={PB_Dio.name}
                  />
                </div>

                <h3 className="e-name">{PB_Dio.name}</h3>
                <h3 className="jp-name">{PB_Dio.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{PB_Dio.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Dio Brando - PB", PB_Dio);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {PB_Set.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={PB_SET}
                    className="lazyload"
                    alt={PB_Set.name}
                  />
                </div>

                <h3 className="e-name">{PB_Set.name}</h3>
                <h3 className="jp-name">{PB_Set.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{PB_Set.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Phantom Blood Set", PB_Set);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {PURPLE_JBA_Hat.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={PURPLE_JBA_HAT}
                    className="lazyload"
                    alt={PURPLE_JBA_Hat.name}
                  />
                </div>

                <h3 className="e-name">{PURPLE_JBA_Hat.name}</h3>
                <h3 className="jp-name">{PURPLE_JBA_Hat.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{PURPLE_JBA_Hat.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Purple JBA Hat", PURPLE_JBA_Hat);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {BT_Joseph.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOSEPH_BT}
                    className="lazyload"
                    alt={BT_Joseph.name}
                  />
                </div>

                <h3 className="e-name">{BT_Joseph.name}</h3>
                <h3 className="jp-name">{BT_Joseph.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{BT_Joseph.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Joseph Joestar - BT", BT_Joseph);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {BT_Set.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={BT_SET}
                    className="lazyload"
                    alt={BT_Set.name}
                  />
                </div>

                <h3 className="e-name">{BT_Set.name}</h3>
                <h3 className="jp-name">{BT_Set.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{BT_Set.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Battle Tendency Set", BT_Set);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {JOSEPH_AND_CAESAR_Tshirt.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOSEPH_AND_CAESAR_TSHIRT}
                    className="lazyload"
                    alt={JOSEPH_AND_CAESAR_Tshirt.name}
                  />
                </div>

                <h3 className="e-name">{JOSEPH_AND_CAESAR_Tshirt.name}</h3>
                <h3 className="jp-name">{JOSEPH_AND_CAESAR_Tshirt.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{JOSEPH_AND_CAESAR_Tshirt.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList(
                        "Joseph/Caesar Tshirt",
                        JOSEPH_AND_CAESAR_Tshirt
                      );
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {SDC_Jotaro.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOTARO_SDC}
                    className="lazyload"
                    alt={SDC_Jotaro.name}
                  />
                </div>

                <h3 className="e-name">{SDC_Jotaro.name}</h3>
                <h3 className="jp-name">{SDC_Jotaro.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{SDC_Jotaro.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Jotaro Kujo - SDC", SDC_Jotaro);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {SDC_Set.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={SDC_SET}
                    className="lazyload"
                    alt={SDC_Set.name}
                  />
                </div>

                <h3 className="e-name">{SDC_Set.name}</h3>
                <h3 className="jp-name">{SDC_Set.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{SDC_Set.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Stardust Crusaders Set", SDC_Set);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {MUDA_PURPLE_Tshirt.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={MUDA_PURPLE_TSHIRT}
                    className="lazyload"
                    alt={MUDA_PURPLE_Tshirt.name}
                  />
                </div>

                <h3 className="e-name">{MUDA_PURPLE_Tshirt.name}</h3>
                <h3 className="jp-name">{MUDA_PURPLE_Tshirt.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{MUDA_PURPLE_Tshirt.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Muda Purple Tshirt", MUDA_PURPLE_Tshirt);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {DAUB_Josuke.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOSUKE_DAUB}
                    className="lazyload"
                    alt={DAUB_Josuke.name}
                  />
                </div>

                <h3 className="e-name">{DAUB_Josuke.name}</h3>
                <h3 className="jp-name">{DAUB_Josuke.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{DAUB_Josuke.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Josuke Higashikata - DAUB", DAUB_Josuke);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {DAUB_Set.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={DAUB_SET}
                    className="lazyload"
                    alt={DAUB_Set.name}
                  />
                </div>

                <h3 className="e-name">{DAUB_Set.name}</h3>
                <h3 className="jp-name">{DAUB_Set.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{DAUB_Set.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Diamonds Set", DAUB_Set);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {JOSUKE_AND_KOICHI_Tshirt.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOSUKE_AND_KOICHI_TSHIRT}
                    className="lazyload"
                    alt={JOSUKE_AND_KOICHI_Tshirt.name}
                  />
                </div>

                <h3 className="e-name">{JOSUKE_AND_KOICHI_Tshirt.name}</h3>
                <h3 className="jp-name">{JOSUKE_AND_KOICHI_Tshirt.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{JOSUKE_AND_KOICHI_Tshirt.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList(
                        "Josuke/Koichi Tshirt",
                        JOSUKE_AND_KOICHI_Tshirt
                      );
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {GW_Diavolo.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={DIAVOLO_GW}
                    className="lazyload"
                    alt={GW_Diavolo.name}
                  />
                </div>

                <h3 className="e-name">{GW_Diavolo.name}</h3>
                <h3 className="jp-name">{GW_Diavolo.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{GW_Diavolo.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Diavolo - GW", GW_Diavolo);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {GW_Set.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={GW_SET}
                    className="lazyload"
                    alt={GW_Set.name}
                  />
                </div>

                <h3 className="e-name">{GW_Set.name}</h3>
                <h3 className="jp-name">{GW_Set.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{GW_Set.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Golden Wind Set", GW_Set);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {GW_JOBROS_Tshirt.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={GW_JOBROS_TSHIRT}
                    className="lazyload"
                    alt={GW_JOBROS_Tshirt.name}
                  />
                </div>

                <h3 className="e-name">{GW_JOBROS_Tshirt.name}</h3>
                <h3 className="jp-name">{GW_JOBROS_Tshirt.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{GW_JOBROS_Tshirt.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("GW Jobros Tshirt", GW_JOBROS_Tshirt);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {SO_Jolyne.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOLYNE_SO}
                    className="lazyload"
                    alt={SO_Jolyne.name}
                  />
                </div>

                <h3 className="e-name">{SO_Jolyne.name}</h3>
                <h3 className="jp-name">{SO_Jolyne.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{SO_Jolyne.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Jolyne Kujo - SO", SO_Jolyne);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {SO_Set.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={SO_SET}
                    className="lazyload"
                    alt={SO_Set.name}
                  />
                </div>

                <h3 className="e-name">{SO_Set.name}</h3>
                <h3 className="jp-name">{SO_Set.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{SO_Set.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Stone Ocean Set", SO_Set);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.popular_products_cnt_slider_slide}>
              <div className={styles.popular_products_cnt_slider_slide_inner}>
                <span className={`${styles.product_type} product-type`}>
                  {JOLYNE_Tshirt.type}
                </span>

                <div className={styles.product_img_holder}>
                  <img
                    data-src={JOLYNE_TSHIRT}
                    className="lazyload"
                    alt={JOLYNE_Tshirt.name}
                  />
                </div>

                <h3 className="e-name">{JOLYNE_Tshirt.name}</h3>
                <h3 className="jp-name">{JOLYNE_Tshirt.jName}</h3>

                <div>
                  <p className={styles.product_price}>
                    $ <strong>{JOLYNE_Tshirt.price}</strong>
                  </p>

                  <button
                    className="cart-adder page-transition"
                    onClick={() => {
                      AddToCartList("Jolyne Tshirt", JOLYNE_Tshirt);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </motion.div>
    </div>
  );
};

export default PopularProducts;
