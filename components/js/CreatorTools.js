// React/Next Stuff
import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom Imports
import { CartList } from "../../assets/data/arrays/CartList";
import AddAllFigures from "../../assets/functions/creator-tools/AddAllFigures";
import AddAllManga from "../../assets/functions/creator-tools/AddAllManga";
import AddAllClothing from "../../assets/functions/creator-tools/AddAllClothing";

// Styling
import styles from "../../styles/js/Js.module.css";

const CreatorTools = () => {
  const router = useRouter(); // rooter
  const env = process.env.NODE_ENV;

  // Display/Hide Creator Tools based on enviroment
  useEffect(() => {
    if (env === "development") {
      document.querySelector(".creator-tools").style.display = "block";
      document.querySelector(".creator-tools").style.transform =
        "translateY(0)";

      document
        .getElementById("creatorToolsCB")
        .addEventListener("change", (e) => {
          if (document.getElementById("creatorToolsCB").checked) {
            document.getElementById("creatorTools").style.display = "block";
          } else {
            document.getElementById("creatorTools").style.display = "none";
          }
        });
    } else if (env === "production") {
      document.querySelector(".creator-tools").style.display = "none";
      document.querySelector(".creator-tools").style.transform =
        "translateY(-200px)";
    }
  }, []);

  // Add all items to cart
  useEffect(() => {
    document
      .getElementById("addAllItemsToCart")
      .addEventListener("click", () => {
        if (CartList.length == 0) {
          setTimeout(() => {
            AddAllFigures();
            AddAllManga();
            AddAllClothing();
          }, 100);

          setTimeout(() => {
            router.reload();
          }, 450);
        } else {
          alert("Empty the cart first..");
        }
      });
  }, []);

  // Add all Figure items to cart
  useEffect(() => {
    document
      .getElementById("addAllFigureItemsToCart")
      .addEventListener("click", () => {
        if (CartList.length == 0) {
          setTimeout(() => {
            AddAllFigures();
          }, 100);

          setTimeout(() => {
            router.reload();
          }, 450);
        } else {
          alert("Empty the cart first..");
        }
      });
  }, []);

  // Add all Manga items to cart
  useEffect(() => {
    document
      .getElementById("addAllMangaItemsToCart")
      .addEventListener("click", () => {
        if (CartList.length == 0) {
          setTimeout(() => {
            AddAllManga();
          }, 100);

          setTimeout(() => {
            router.reload();
          }, 450);
        } else {
          alert("Empty the cart first..");
        }
      });
  }, []);

  // Add all Clothing items to cart
  useEffect(() => {
    document
      .getElementById("addAllClothingItemsToCart")
      .addEventListener("click", () => {
        if (CartList.length == 0) {
          setTimeout(() => {
            AddAllClothing();
          }, 100);

          setTimeout(() => {
            router.reload();
          }, 450);
        } else {
          alert("Empty the cart first..");
        }
      });
  }, []);

  // Clearing Session/Local storages
  useEffect(() => {
    document
      .getElementById("clearLocalStorage")
      .addEventListener("click", () => {
        localStorage.clear();
        router.reload();
      });

    document
      .getElementById("clearSessionStorage")
      .addEventListener("click", () => {
        sessionStorage.clear();
        router.reload();
      });
  }, []);

  return (
    <div id={styles.creatorTools} className="creator-tools">
      <label>
        <h1>Creator Tools</h1>
        <input type="checkbox" id="creatorToolsCB" />
      </label>

      <div id="creatorTools">
        <button id="addAllItemsToCart">Add all items to cart</button>
        <button id="addAllFigureItemsToCart">
          Add all Figure items to cart
        </button>
        <button id="addAllMangaItemsToCart">Add all Manga items to cart</button>
        <button id="addAllClothingItemsToCart">
          Add all Clothing items to cart
        </button>
        <button id="clearLocalStorage">Clear Local Storage/Cart</button>
        <button id="clearSessionStorage">Clear Session Storage</button>
      </div>
    </div>
  );
};

export default CreatorTools;
