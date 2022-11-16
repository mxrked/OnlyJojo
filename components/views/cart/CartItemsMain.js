// React Stuff
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Custom Imports
import { CartList } from "../../../assets/data/arrays/CartList";

// Library Items
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from "react-icons/fa";

// Styling
import styles from "../../../styles/views/cart/Cart.module.css";
import {
  CLOTHING_jp,
  FIGURES_jp,
  MANGA_jp,
} from "../../../assets/data/translations/Japanese";
import LinkPushing from "../../../assets/hooks/LinkPushing";

const CartItemsMain = () => {
  const router = useRouter(); // rooter
  const [isDisplayed, setIsDisplayed] = useState(false);

  const mappingCartListItems = CartList.map(function (item, itemID) {
    return (
      <div key={itemID} className={`${styles.cart_item} cart-item row`}>
        <div
          className={`${styles.cart_item_side} ${styles.cart_item_details_side} cart-item-side col-lg-5 col-md-5 col-sm-5 col-xs-12`}
        >
          <div className={styles.cart_item_img_holder}>
            <img data-src={item.img_src} className="lazyload" />
          </div>

          <div className={styles.cart_item_details_div}>
            <span className={`${styles.cart_item_name} cart-item-name`}>
              {item.name}
            </span>
            <span className={`${styles.cart_item_j_name} cart-item-j-name`}>
              {item.jName}
            </span>

            <span className={`${styles.cart_item_type} cart-item-type`}>
              {item.type}
            </span>
          </div>
        </div>
        <div
          className={`${styles.cart_item_side} ${styles.cart_item_price_side} cart-item-side col-lg-2 col-md-2 col-sm-2 col-xs-12`}
        >
          <strong>
            $
            <span className={`${styles.cart_item_price} cart-item-price`}>
              {item.price}
            </span>
          </strong>
        </div>
        <div
          className={`${styles.cart_item_side} ${styles.cart_item_quantity_side} cart-item-side col-lg-4 col-md-4 col-sm-4 col-xs-12`}
        >
          <button
            className={`${styles.cart_item_quantity_btn} cart-item-quantity-btn plus`}
          >
            <FaPlusCircle />
          </button>

          <input
            type="number"
            className="cart-item-quantity-ipt noscroll"
            min="1"
            max="50"
            onWheel={() => {
              if (
                document.activeElement.type === "number" &&
                document.activeElement.classList.contains("noscroll")
              ) {
                document.activeElement.blur();
              }
            }}
          />

          <button
            className={`${styles.cart_item_quantity_btn} cart-item-quantity-btn minus`}
          >
            <FaMinusCircle />
          </button>
        </div>
        <div
          className={`${styles.cart_item_side} ${styles.cart_item_remover_side} cart-item-side col-lg-1 col-md-1 col-sm-1 col-xs-12`}
        >
          <button
            className={`${styles.cart_item_remover_btn} cart-item-remover`}
            onClick={() => {
              if (localStorage.getItem(item.name)) {
                localStorage.removeItem(item.name);
                router.reload();
              } else {
                console.log("The localStorage item does not exist...");
              }
            }}
          >
            <FaTimesCircle />
          </button>
        </div>
      </div>
    );
  });

  // Show items in cart
  useEffect(() => {
    setIsDisplayed(true);
  }, []);

  // Display/Hide empty
  useEffect(() => {
    if (CartList.length === 0) {
      document.getElementById("emptyCart").style.display = "block";
    } else {
      document.getElementById("emptyCart").style.display = "none";
    }
  }, []);

  // Change Item Name and Type languages
  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem("Translate Japanese")) {
        document.querySelectorAll(".cart-item-name").forEach((n) => {
          n.classList.toggle("deactive");
        });
        document.querySelectorAll(".cart-item-j-name").forEach((n) => {
          n.classList.remove("deactive");
        });
      } else {
        document.querySelectorAll(".cart-item-name").forEach((n) => {
          n.classList.remove("deactive");
        });
        document.querySelectorAll(".cart-item-j-name").forEach((n) => {
          n.classList.toggle("deactive");
        });
      }
    }, 100);
  }, []);

  return (
    <div id={styles.cartItemsMain} className="cart-items-main">
      <div
        id="emptyCart"
        className={styles.empty_cart_holder}
        onClick={() => {
          LinkPushing(router, "/store/", "/store/");
        }}
      >
        <span className={`${styles.empty_cart} jp_EMPTY`}>Empty..</span>

        <a className={`${styles.empty_cart_link} jp_BROWSE`}>Browse Store</a>
      </div>

      <div className={`${styles.cart_items_main_box} container-fluid`}>
        {isDisplayed && <>{mappingCartListItems}</>}
      </div>
    </div>
  );
};

export default CartItemsMain;
