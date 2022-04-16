// React/Next stuff
import { useEffect } from "react";

// Asset Imports
import {
  CART_EMPTY_jp,
  CART_CHECKOUT_jp,
  CART_SHOPPING_CART_HEADING_jp,
  CART_CHECKOUT_CALCULATE_GRAND_TOTAL_jp,
  CART_CHECKOUT_GRAND_TOTAL_jp,
  CART_CHECKOUT_NUMBER_OF_ITEMS_jp,
  CART_CHECKOUT_OPTIONAL_jp,
  CART_CHECKOUT_ORDER_SUMMARY_HEADING_jp,
  CART_CHECKOUT_TOTAL_jp,
  CART_CHECKOUT_WANT_A_PROMO_CODE_jp,
  PROMO_MUDAMUDA_jp,
  PROMO_SANDOFABEACH_jp,
  PROMO_YAREYAREDAZE_jp,
  SHIPPING_FAST_jp,
  SHIPPING_NEXT_DAY_jp,
  SHIPPING_SELECT_jp,
  SHIPPING_STANDARD_jp,
  FIGURES_jp,
  MANGA_jp,
  CLOTHING_jp,
  BROWSE_jp,
} from "../../assets/data/translations/Japanese";

// Cart Japanese Text
const CartJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      // Top
      document.querySelector(".jp_SHOPPING_CART").innerHTML =
        CART_SHOPPING_CART_HEADING_jp;
      document.querySelector(".jp_CHECKOUT").innerHTML = CART_CHECKOUT_jp;

      // Items
      document.querySelector(".jp_EMPTY").innerHTML = CART_EMPTY_jp;
      document.querySelector(".jp_BROWSE").innerHTML = BROWSE_jp;

      setTimeout(() => {
        document.querySelectorAll(".cart-item-type").forEach((type) => {
          if (type.innerHTML.indexOf("Manga") > -1) {
            type.innerHTML = MANGA_jp;
          }

          if (type.innerHTML.indexOf("Figure") > -1) {
            type.innerHTML = FIGURES_jp;
          }

          if (type.innerHTML.indexOf("Clothing") > -1) {
            type.innerHTML = CLOTHING_jp;
          }
        });
      }, 10);

      // Checkout
      document.querySelector(".jp_ORDER_SUMMARY_HEADING").innerHTML =
        CART_CHECKOUT_ORDER_SUMMARY_HEADING_jp;
      document.querySelector(".jp_NUMBER_OF_ITEMS").innerHTML =
        CART_CHECKOUT_NUMBER_OF_ITEMS_jp;
      document.querySelector(".jp_CART_TOTAL").innerHTML =
        CART_CHECKOUT_TOTAL_jp;
      document.querySelector(".jp_WANT_A_PROMO_CODE").innerHTML =
        CART_CHECKOUT_WANT_A_PROMO_CODE_jp;
      document.querySelector(".jp_OPTIONAL").innerHTML =
        CART_CHECKOUT_OPTIONAL_jp;
      document.querySelector(".jp_MUDAMUDA").innerHTML = PROMO_MUDAMUDA_jp;
      document.querySelector(".jp_SANDOFABEACH").innerHTML =
        PROMO_SANDOFABEACH_jp;
      document.querySelector(".jp_YAREYAREDAZE").innerHTML =
        PROMO_YAREYAREDAZE_jp;
      document.querySelector(".jp_SELECT_SHIPPING").innerHTML =
        SHIPPING_SELECT_jp;
      document.querySelector(".jp_SHIPPING_STANDARD").innerHTML =
        SHIPPING_STANDARD_jp;
      document.querySelector(".jp_SHIPPING_FAST").innerHTML = SHIPPING_FAST_jp;
      document.querySelector(".jp_SHIPPING_NEXT_DAY").innerHTML =
        SHIPPING_NEXT_DAY_jp;
      document.querySelector(".jp_CALCULATE_GRAND_TOTAL").innerHTML =
        CART_CHECKOUT_CALCULATE_GRAND_TOTAL_jp;
      document.querySelector(".jp_GRAND_TOTAL").innerHTML =
        CART_CHECKOUT_GRAND_TOTAL_jp;
    }
  }, []);

  return "";
};

export default CartJP;
