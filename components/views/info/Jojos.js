// React/Next stuff
import { useEffect } from "react";

// Library Items
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Custom Imports
import { FadeLeft } from "../../../assets/animations/Fades";

// Image Imports
import {
  GIORNO,
  JOLYNE,
  JONATHAN,
  JOSEPH,
  JOSUKE,
  JOTARO,
} from "../../../assets/cdns/images/INFO_IMGS";
import { MENACING_GIF } from "../../../assets/cdns/images/global";

// Styling
import styles from "../../../styles/views/info/Info.module.css";

const JOJO = (props) => {
  return (
    <div className={`${styles.jojo} row`}>
      <div
        className={`${styles.jojo_side} col-lg-4 col-md-4 col-sm-3 col-xs-12`}
      >
        <div className={styles.jojo_side_img_holder}>
          <img
            data-src={props.jojoImg}
            className="lazyload"
            alt={props.jojoName}
          />

          <div
            className={`${styles.jojo_details} page-transition jojo-details`}
          >
            <div className={styles.jojo_detail}>
              <span className={styles.jojo_detail_name}>Birthday:</span>
              <span className={styles.jojo_detail_text}>{props.jojoBday}</span>
            </div>
            <div className={styles.jojo_detail}>
              <span className={styles.jojo_detail_name}>Power:</span>
              <span className={styles.jojo_detail_text}>{props.jojoPower}</span>
            </div>
            <div className={styles.jojo_detail}>
              <span className={styles.jojo_detail_name}>Likes:</span>
              <span className={styles.jojo_detail_text}>{props.jojoLikes}</span>
            </div>
            <div className={styles.jojo_detail}>
              <span className={styles.jojo_detail_name}>Dislikes:</span>
              <span className={styles.jojo_detail_text}>
                {props.jojoDislikes}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.jojo_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
      >
        <div className={styles.jojo_side_text}>
          <h2 className="jpINFO_JOJO_NAME">{props.jojoName}</h2>

          <p className="jpINFO_JOJO_P_1">{props.jojoTxt1}</p>
          <p className="jpINFO_JOJO_P_2">{props.jojoTxt2}</p>

          <a
            href={props.jojoWiki}
            target="_blank"
            rel="noreferrer" // Needs to be here as it is deemed as a risk to Next.js and will cause an error
            className="page-transition jpINFO_JOJO_VIEW_WIKI"
          >
            View Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

const Jojos = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Hide hovers if user is translated to japanese
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      document.querySelectorAll(".jojo-details").forEach((details) => {
        details.style.display = "none";
      });
      document.getElementById("hover_hint").style.display = "none";
    }
  }, []);

  return (
    <div id={styles.jojos}>
      <motion.div
        className={styles.jojos_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <div className={styles.jojos_heading}>
          <h1 className="jpINFO_JOJO_HEADING">Meet the Jojos.</h1>

          <img
            data-src={MENACING_GIF}
            className="lazyload"
            alt="Menacing GIF"
          />
        </div>

        <span className={styles.hover_hint} id="hover_hint">
          Hover over an image to view certain details related to the respected
          JoJo.
        </span>

        <div className={`${styles.jojos_box} container-fluid`}>
          <div className={styles.jojo_row_holder}>
            <JOJO
              jojoImg={JONATHAN}
              jojoBday="April 4, 1868."
              jojoPower="Ripple (Hamon)."
              jojoLikes="Danny, Erina, Family and honor."
              jojoDislikes="No honor, bullies."
              jojoName="Jonathan Joestar"
              jojoTxt1="The main protagonist of part 1 (Phantom Blood)."
              jojoTxt2="He is known for his gentleman like personality and loyalty to his family. He has the power to wield Ripple (Hamon)."
              jojoWiki="https://jojo.fandom.com/wiki/Jonathan_Joestar"
            />
          </div>
          <div className={styles.jojo_row_holder}>
            <JOJO
              jojoImg={JOSEPH}
              jojoBday="September 27, 1920."
              jojoPower="Ripple (Hamon) and Hermit Purple (Stand)."
              jojoLikes="Comic books and manga, Holly, Trolling."
              jojoDislikes="Cows, Dio Brando."
              jojoName="Joseph Joestar"
              jojoTxt1="The main protagonist of part 2 (Battle Tendency) as well as a supporting character in part 3 (Stardust Crusaders)."
              jojoTxt2="He is known for his charismatic and wacky personality and is the only Joestar to wield both Ripple (Hamon) and a Stand."
              jojoWiki="https://jojo.fandom.com/wiki/Joseph_Joestar"
            />
          </div>
          <div className={styles.jojo_row_holder}>
            <JOJO
              jojoImg={JOTARO}
              jojoBday="1970."
              jojoPower="Star Platinum (Stand)."
              jojoLikes="Books about airplanes and ships, His moms cooking."
              jojoDislikes="Loud women, Dio Brando."
              jojoName="Jotaro Kujo"
              jojoTxt1="The main protagonist in part 3 (Stardust Crusaders) as well as a supporting character in both parts 4 and 6 (Diamond is Unbreakable, Stone Ocean)."
              jojoTxt2="He is known for his serious and brave personality and is one of the most powerful Stand users. Wielding Star Platinum!"
              jojoWiki="https://jojo.fandom.com/wiki/Jotaro_Kujo"
            />
          </div>
          <div className={styles.jojo_row_holder}>
            <JOJO
              jojoImg={JOSUKE}
              jojoBday="1983."
              jojoPower="Crazy Diamond (Stand)."
              jojoLikes="Video games, TV and Music."
              jojoDislikes="Insults towards his hair, Turtles."
              jojoName="Josuke Higashikata"
              jojoTxt1="The main protagonist in part 4 (Diamond is Unbreakable)."
              jojoTxt2="He is known for being a good hearted person and cares for his friends and allies. Josuke wields the Stand; Crazy Diamond!"
              jojoWiki="https://jojo.fandom.com/wiki/Josuke_Higashikata"
            />
          </div>
          <div className={styles.jojo_row_holder}>
            <JOJO
              jojoImg={GIORNO}
              jojoBday="April 16, 1985."
              jojoPower="Golden Experience (Stand)."
              jojoLikes="Being a leader, Chocolate."
              jojoDislikes="Losing allies, Diavolo."
              jojoName="Giorno Giovanna"
              jojoTxt1="The main protagonist in part 5 (Golden Wind)."
              jojoTxt2="He is known for being a prominent leader and brave person. He is one of the most powerful Stand users. Wielding Golden Experience Requiem!"
              jojoWiki="https://jojo.fandom.com/wiki/Giorno_Giovanna"
            />
          </div>
          <div className={styles.jojo_row_holder}>
            <JOJO
              jojoImg={JOLYNE}
              jojoBday="~1992."
              jojoPower="Stone Free (Stand)."
              jojoLikes="Her father, Emporio."
              jojoDislikes="Enrico Pucci, White Snake."
              jojoName="Jolyne Kujo"
              jojoTxt1="The main protagonist of part 6 (Stone Ocean)."
              jojoTxt2="She is known for her smart and quick thinking nature in dire situations. She is the wielder of the Stand; Stone Free!"
              jojoWiki="https://jojo.fandom.com/wiki/Jolyne_Cujoh"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Jojos;
