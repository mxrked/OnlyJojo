// React/Next Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Image Imports
import { LOADING } from "../../assets/cdns/images/global";

// Styling
import styles from "../../styles/js/Js.module.css";

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    document.getElementById("loadingImg").style.display = "block";
    document.getElementById("loadingImg").classList.toggle("deactive");

    // This will be used to check if the user uses the back/forward buttons or edits the url
    if (Object.keys(router.components).length == 2) {
      sessionStorage.setItem("Changing Route", true);
      checkLoader();
    }

    // router.events are used with LinkPushing links
    router.events.on("routeChangeStart", () => {
      sessionStorage.setItem("Changing Route", true);
      document.body.style.pointerEvents = "none"; // Prevents user from speeding through site after loader goes away
    });
    router.events.on("routeChangeComplete", () => {
      checkLoader();
    });

    // This will check if the user has changed to a different route and will trigger the loader
    function checkLoader() {
      if (sessionStorage.getItem("Changing Route")) {
        sessionStorage.removeItem("Changing Route"); // Prevents looping
        console.log("The Route has changed.");

        setTimeout(() => {
          document.getElementById("loadingImg").classList.remove("deactive");
        }, 100);

        setTimeout(() => {
          document.getElementById("loadingImg").classList.toggle("deactive");
        }, 1800);

        setTimeout(() => {
          document.getElementById("loading").classList.toggle("deactive");
        }, 2500);

        setTimeout(() => {
          if (
            !sessionStorage.getItem("Menu Toggled.") ||
            !sessionStorage.getItem("Search Toggled.")
          ) {
            document.body.style.overflowY = "auto";
            document.body.style.pointerEvents = "auto"; // Allows user to interact with the site after loader goes away
          }
        }, 2800);

        setTimeout(() => {
          document.getElementById("loading").style.display = "none"; // This will prevent the loader from popping up when the user changes routes quickly
        }, 4000);
      }

      // Re-enables vertical scrolling if the user changes route too quickly (checks if loader is hidden)
      window.addEventListener("load", () => {
        setTimeout(() => {
          if (
            (document.getElementById("loading").style.display === "none" &&
              !sessionStorage.getItem("Menu Toggled.")) ||
            !sessionStorage.getItem("Search Toggled.")
          ) {
            document.body.style.overflowY = "auto";
          }
        }, 1800);
      });
    }
  }, []);

  return (
    <div id="loading" className={`${styles.loading} full-second`}>
      <img
        data-src={LOADING}
        className="page-transition lazyload"
        id="loadingImg"
      />
    </div>
  );
};

export default Loading;
