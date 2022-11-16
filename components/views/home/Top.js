// React Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";
import { FadeDown } from "../../../assets/animations/Fades";

// Library Items
import Slider from "react-slick";
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports
import {
  TOP_S1,
  TOP_S2,
  TOP_S3,
  TOP_S4,
  TOP_S5,
  TOP_S6,
  TOP_S1_IMG,
  TOP_S2_IMG,
  TOP_S3_IMG,
  TOP_S4_IMG,
  TOP_S5_IMG,
  TOP_S6_IMG,
} from "../../../assets/cdns/images/INDEX_IMAGES";

// Styling
import styles from "../../../styles/views/home/Home.module.css";

const Top = () => {
  const router = useRouter(); // rooter

  const topSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    centerMode: false,
    arrows: true,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 8000,
    cellPadding: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.top} className="overrides_Top">
      <Slider {...topSettings}>
        <div
          className={`${styles.top_slider_slide} overrides_Top_Slider_Slide`}
          id={styles.slide1}
        >
          <BackgroundImage
            src={TOP_S1}
            width="100%"
            height="100%"
            className={styles.top_slider_slide_bg}
          ></BackgroundImage>
          <div className={styles.top_slider_slide_cnt}>
            <motion.div
              className={styles.top_slider_slide_cnt_inner}
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={FadeDown}
            >
              <div
                className={`${styles.top_slider_slide_cnt_img}  overrides_Top_Slider_Slide_Image`}
              >
                {/* */}
                <img data-src={TOP_S1_IMG} className="lazyload" />
                <div className={styles.top_slider_slide_img}></div>
              </div>
              <div
                className={`${styles.top_slider_slide_cnt_text} overrides_Top_Slider_Slide_Text`}
              >
                <span className="jp_BROWSE">Browse</span>

                <h1 className="jp_PHANTOM_BLOOD">
                  Phantom
                  <br />
                  <span className={`${styles.purple_text}`}> Blood</span>.
                </h1>

                <div>
                  <a
                    className="page-transition jp_FIGURES"
                    onClick={() => {
                      LinkPushing(
                        router,
                        "/store/#pb_Figures/",
                        "/store/#pb_Figures/"
                      );
                    }}
                  >
                    Figures
                  </a>

                  <a
                    className="page-transition jp_MANGA"
                    onClick={() => {
                      LinkPushing(
                        router,
                        "/store/#pb_Manga/",
                        "/store/#pb_Manga/"
                      );
                    }}
                  >
                    Manga
                  </a>

                  <a
                    className="page-transition jp_CLOTHING"
                    onClick={() => {
                      LinkPushing(
                        router,
                        "/store/#pb_Clothing/",
                        "/store/#pb_Clothing/"
                      );
                    }}
                  >
                    Clothing
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div
          className={`${styles.top_slider_slide} overrides_Top_Slider_Slide`}
          id={styles.slide2}
        >
          <BackgroundImage
            src={TOP_S2}
            width="100%"
            height="100%"
            className={styles.top_slider_slide_bg}
          >
            <div className={styles.top_slider_slide_cnt}>
              <div className={styles.top_slider_slide_cnt_inner}>
                <div
                  className={`${styles.top_slider_slide_cnt_img}  overrides_Top_Slider_Slide_Image`}
                >
                  <img data-src={TOP_S2_IMG} className="lazyload" />
                  <div className={styles.top_slider_slide_img}></div>
                </div>
                <div
                  className={`${styles.top_slider_slide_cnt_text} overrides_Top_Slider_Slide_Text`}
                >
                  <span className="jp_BROWSE">Browse</span>

                  <h1 className="jp_BATTLE_TENDENCY">
                    Battle
                    <br />
                    <span className={styles.purple_text}> Tendency</span>.
                  </h1>

                  <div>
                    <a
                      className="page-transition jp_FIGURES"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#bt_Figures/",
                          "/store/#bt_Figures/"
                        );
                      }}
                    >
                      Figures
                    </a>

                    <a
                      className="page-transition jp_MANGA"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#bt_Manga/",
                          "/store/#bt_Manga/"
                        );
                      }}
                    >
                      Manga
                    </a>

                    <a
                      className="page-transition jp_CLOTHING"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#bt_Clothing/",
                          "/store/#bt_Clothing/"
                        );
                      }}
                    >
                      Clothing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <div
          className={`${styles.top_slider_slide} overrides_Top_Slider_Slide`}
          id={styles.slide3}
        >
          <BackgroundImage
            src={TOP_S3}
            width="100%"
            height="100%"
            className={styles.top_slider_slide_bg}
          >
            <div className={styles.top_slider_slide_cnt}>
              <div className={styles.top_slider_slide_cnt_inner}>
                <div
                  className={`${styles.top_slider_slide_cnt_img}  overrides_Top_Slider_Slide_Image`}
                >
                  {/* */}
                  <img data-src={TOP_S3_IMG} className="lazyload" />
                  <div className={styles.top_slider_slide_img}></div>
                </div>
                <div
                  className={`${styles.top_slider_slide_cnt_text} overrides_Top_Slider_Slide_Text`}
                >
                  <span className="jp_BROWSE">Browse</span>

                  <h1 className="jp_STARDUST_CRUSADERS">
                    Stardust
                    <br />
                    <span className={styles.purple_text}> Crusaders</span>.
                  </h1>

                  <div>
                    <a
                      className="page-transition jp_FIGURES"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#sdcs_Figures/",
                          "/store/#sdcs_Figures/"
                        );
                      }}
                    >
                      Figures
                    </a>

                    <a
                      className="page-transition jp_MANGA"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#sdcs_Manga/",
                          "/store/#sdcs_Manga/"
                        );
                      }}
                    >
                      Manga
                    </a>

                    <a
                      className="page-transition jp_CLOTHING"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#sdcs_Clothing/",
                          "/store/#sdcs_Clothing/"
                        );
                      }}
                    >
                      Clothing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <div
          className={`${styles.top_slider_slide} overrides_Top_Slider_Slide`}
          id={styles.slide4}
        >
          <BackgroundImage
            src={TOP_S4}
            width="100%"
            height="100%"
            className={styles.top_slider_slide_bg}
          >
            <div className={styles.top_slider_slide_cnt}>
              <div className={styles.top_slider_slide_cnt_inner}>
                <div
                  className={`${styles.top_slider_slide_cnt_img}  overrides_Top_Slider_Slide_Image`}
                >
                  <img data-src={TOP_S4_IMG} className="lazyload" />
                  <div className={styles.top_slider_slide_img}></div>
                </div>
                <div
                  className={`${styles.top_slider_slide_cnt_text} overrides_Top_Slider_Slide_Text`}
                >
                  <span className="jp_BROWSE">Browse</span>

                  <h1 className="jp_DIAMONDS_ARE_UNBREAKABLE">
                    Diamond is
                    <br />
                    <span className={styles.purple_text}>Unbreakable</span>.
                  </h1>

                  <div>
                    <a
                      className="page-transition jp_FIGURES"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#daub_Figures/",
                          "/store/#daub_Figures/"
                        );
                      }}
                    >
                      Figures
                    </a>

                    <a
                      className="page-transition jp_MANGA"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#daub_Manga/",
                          "/store/#daub_Manga/"
                        );
                      }}
                    >
                      Manga
                    </a>

                    <a
                      className="page-transition jp_CLOTHING"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#daub_Clothing/",
                          "/store/#daub_Clothing/"
                        );
                      }}
                    >
                      Clothing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <div
          className={`${styles.top_slider_slide} overrides_Top_Slider_Slide`}
          id={styles.slide5}
        >
          <BackgroundImage
            src={TOP_S5}
            width="100%"
            height="100%"
            className={styles.top_slider_slide_bg}
          >
            <div className={styles.top_slider_slide_cnt}>
              <div className={styles.top_slider_slide_cnt_inner}>
                <div
                  className={`${styles.top_slider_slide_cnt_img}  overrides_Top_Slider_Slide_Image`}
                >
                  <img data-src={TOP_S5_IMG} className="lazyload" />
                  <div className={styles.top_slider_slide_img}></div>
                </div>
                <div
                  className={`${styles.top_slider_slide_cnt_text} overrides_Top_Slider_Slide_Text`}
                >
                  <span className="jp_BROWSE">Browse</span>

                  <h1 className="jp_GOLDEN_WIND">
                    Golden
                    <br />
                    <span className={styles.purple_text}> Wind</span>.
                  </h1>

                  <div>
                    <a
                      className="page-transition jp_FIGURES"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#gw_Figures/",
                          "/store/#gw_Figures/"
                        );
                      }}
                    >
                      Figures
                    </a>

                    <a
                      className="page-transition jp_MANGA"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#gw_Manga/",
                          "/store/#gw_Manga/"
                        );
                      }}
                    >
                      Manga
                    </a>

                    <a
                      className="page-transition jp_CLOTHING"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#gw_Clothing/",
                          "/store/#gw_Clothing/"
                        );
                      }}
                    >
                      Clothing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <div
          className={`${styles.top_slider_slide} overrides_Top_Slider_Slide`}
          id={styles.slide6}
        >
          <BackgroundImage
            src={TOP_S6}
            width="100%"
            height="100%"
            className={styles.top_slider_slide_bg}
          >
            <div className={styles.top_slider_slide_cnt}>
              <div className={styles.top_slider_slide_cnt_inner}>
                <div
                  className={`${styles.top_slider_slide_cnt_img}  overrides_Top_Slider_Slide_Image`}
                >
                  <img data-src={TOP_S6_IMG} className="lazyload" />
                  <div className={styles.top_slider_slide_img}></div>
                </div>
                <div
                  className={`${styles.top_slider_slide_cnt_text} overrides_Top_Slider_Slide_Text`}
                >
                  <span className="jp_BROWSE">Browse</span>

                  <h1 className="jp_STONE_OCEAN">
                    Stone
                    <br />
                    <span className={styles.purple_text}> Ocean</span>.
                  </h1>

                  <div>
                    <a
                      className="page-transition jp_FIGURES"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#so_Figures/",
                          "/store/#so_Figures/"
                        );
                      }}
                    >
                      Figures
                    </a>

                    <a
                      className="page-transition jp_MANGA"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#so_Manga/",
                          "/store/#so_Manga/"
                        );
                      }}
                    >
                      Manga
                    </a>

                    <a
                      className="page-transition jp_CLOTHING"
                      onClick={() => {
                        LinkPushing(
                          router,
                          "/store/#so_Clothing/",
                          "/store/#so_Clothing/"
                        );
                      }}
                    >
                      Clothing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundImage>
        </div>
      </Slider>
    </div>
  );
};

export default Top;
