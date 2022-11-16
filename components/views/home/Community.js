// React/Next stuff
import { Component } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom Imports
import LinkPushing from "../../../assets/hooks/LinkPushing";
import { FadeRight } from "../../../assets/animations/Fades";

// Library Items
import { BackgroundImage } from "react-image-and-background-image-fade";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports
import { MENACING_GIF, PLATED_BG } from "../../../assets/cdns/images/global";
import { C_1, C_2, C_3 } from "../../../assets/cdns/images/INDEX_IMAGES";

// Styling
import styles from "../../../styles/views/home/Home.module.css";

class CommunityPosts extends Component {
  constructor(props) {
    super(props);

    this.createPost = this.createPost.bind(this);
  }

  createPost(props) {
    return (
      <div id={props.postID} className={`${styles.post_item} post-item`}>
        <div className={styles.post_item_bg}>
          <BackgroundImage
            src={props.postBG}
            width="100%"
            height="100%"
            className={styles.post_bg}
          />
        </div>

        <div className={styles.post_item_text}>
          <div>
            <h4>{props.postH4}</h4>

            <span>{props.postSPAN}</span>

            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam...
            </p>

            <blockquote>...</blockquote>

            <a className="page-transition jp_VIEW">Read</a>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.communityPosts}>
        <div className={`${styles.community_posts_box} container-fluid`}>
          <div className={`${styles.community_posts_row} row`}>
            <div
              className={`${styles.community_posts_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <this.createPost
                postID="c1"
                postBG={C_1}
                postH4="The JoJo's"
                postSPAN="Site Creator"
              />
            </div>
            <div
              className={`${styles.community_posts_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <this.createPost
                postID="c2"
                postBG={C_2}
                postH4="Stone Ocean Part 2"
                postSPAN="Site Creator"
              />
            </div>
            <div
              className={`${styles.community_posts_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            >
              <this.createPost
                postID="c3"
                postBG={C_3}
                postH4="The Big Bads"
                postSPAN="Site Creator"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Community_BG = () => {
  const router = useRouter(); // rooter

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.communityBG}>
      <BackgroundImage
        src={PLATED_BG}
        width="100%"
        height="100%"
        className={styles.community_bg}
      />

      <div className={styles.community_bg_overlay}>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={FadeRight}
        >
          <h1 id="jpINDEXCOMMUNITY_HEADING">The Jojo Community</h1>

          <p id="jpINDEXCOMMUNITY_P_TXT">
            Join in and see what the community has to offer regarding everything
            JBA related!
          </p>

          <div>
            <a
              className="page-transition jp_LEARN_MORE"
              onClick={() => {
                LinkPushing(router, "/info/", "/info/");
              }}
            >
              Learn More
            </a>

            <img
              data-src={MENACING_GIF}
              className="lazyload"
              alt="Menacing Text."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Community = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.community} className="overrides_Community">
      <Community_BG />

      <motion.div
        id={styles.communityPostsHolder}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
      >
        <CommunityPosts />
      </motion.div>
    </div>
  );
};

export default Community;
