// Global Styles
import "../styles/all/globals/Globals.css";
import "../styles/all/overrides/Overrides.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app-wrap">
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
