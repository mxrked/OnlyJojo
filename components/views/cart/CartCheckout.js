// React Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Custom Imports
import { CartList } from "../../../assets/data/arrays/CartList";
import TriggerBTD from "../../../assets/functions/cart/TriggerBTD";
import LinkPushing from "../../../assets/hooks/LinkPushing";

// Image Imports
import { MENACING } from "../../../assets/cdns/images/global";

// Library Items
// import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { FaCaretDown, FaCheckCircle } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

// Styling
import styles from "../../../styles/views/cart/Cart.module.css";

const CartCheckout = () => {
  const router = useRouter(); // rooter

  // Defaults
  useEffect(() => {
    document.getElementById("darkenBg").classList.toggle("deactive");
    document
      .getElementById("cartCheckoutMainInner")
      .classList.toggle("deactive");

    // Apply cartList.length
    document.getElementById("checkoutCartCount").innerHTML = CartList.length;

    // Disable calculate when shipping if the cart is empty
    if (CartList.length === 0) {
      document.getElementById("calculateGrandTotal").style.pointerEvents =
        "none";
      document.getElementById("calculateGrandTotal").style.opacity = 0.5;
    }

    // Disable confirm by default
    document.getElementById("confirmCheckout").style.pointerEvents = "none";
    document.getElementById("confirmCheckout").style.opacity = 0.5;

    // Disable clear cart if the cart is already empty
    if (CartList.length === 0) {
      document.getElementById("checkoutCartClear").style.pointerEvents = "none";
      document.getElementById("checkoutCartClear").style.opacity = 0.5;
    }
  }, []);

  // Toggle Checkout
  useEffect(() => {
    document.getElementById("checkOutToggler").addEventListener("click", () => {
      document.getElementById("cartCheckout").style.display = "block";

      document.body.style.overflowY = "hidden"; // Prevents cnt behind to scroll

      setTimeout(() => {
        document.getElementById("darkenBg").classList.remove("deactive");
      }, 400);

      setTimeout(() => {
        document.getElementById("cartCheckoutMain").style.right = 0;
      }, 500);

      setTimeout(() => {
        document
          .getElementById("cartCheckoutMainInner")
          .classList.remove("deactive");
      }, 1500);

      setTimeout(() => {
        document.getElementById("darkenBg").style.pointerEvents = "auto";
        document.getElementById("cartCheckoutMain").style.pointerEvents =
          "auto";
      }, 2400);
    });
  }, []);

  // Close Checkout
  useEffect(() => {
    function closeCheckout() {
      document.getElementById("darkenBg").style.pointerEvents = "none";
      document.getElementById("cartCheckoutMain").style.pointerEvents = "none";
      document
        .getElementById("cartCheckoutMainInner")
        .classList.toggle("deactive");

      setTimeout(() => {
        document.getElementById("cartCheckoutMain").style.right = "-100%";
      }, 400);

      setTimeout(() => {
        document.getElementById("darkenBg").classList.toggle("deactive");
      }, 900);

      setTimeout(() => {
        document.getElementById("cartCheckout").style.display = "none";
        document.body.style.overflowY = "auto"; // Allows cnt behind to scroll
      }, 1800);
    }

    document.getElementById("darkenBg").addEventListener("click", () => {
      closeCheckout();
    });
    document.getElementById("checkoutCloser").addEventListener("click", () => {
      closeCheckout();
    });
  }, []);

  // Calculate the sum of all item prices. Adding quantity manipulation
  useEffect(() => {
    var i, cartTotalWithoutShipping;
    let price_val, quantity_val;

    function getStartingTotal() {
      const cartPrices = [];

      document.querySelectorAll(".cart-item-price").forEach((price) => {
        price_val = price.innerHTML;
        quantity_val = price
          .closest(".cart-item")
          .querySelector(".cart-item-side input").value;

        const itemSubTotal = price_val * quantity_val;

        cartPrices.push(parseFloat(itemSubTotal).toFixed(2));
      });

      // Reformatting to currency
      const convertedCartPrices = cartPrices.map(Number);
      cartTotalWithoutShipping = 0;
      for (i = 0; i < convertedCartPrices.length; i++) {
        cartTotalWithoutShipping += convertedCartPrices[i];
      }

      // Display to total
      document.getElementById("cartTotal").innerHTML = `${
        Math.round(cartTotalWithoutShipping * 100) / 100
      }`;
    }

    function updateStartingTotalOnQuantityChange() {
      document.getElementById("cartGrand").innerHTML = `${
        document.getElementById("cartTotal").innerHTML
      }`;

      // Prevents user from confirm when grand total is altered
      document.querySelectorAll(".shipping-option")[0].selected = true;
      document.getElementById("confirmCheckout").style.pointerEvents = "none";
      document.getElementById("confirmCheckout").style.opacity = 0.5;
    }

    // Setting timeout to make dynamic data/content load
    setTimeout(() => {
      document.querySelectorAll(".cart-item-side input").forEach((input) => {
        input.value = 1;

        // Checking if user goes above/below max or min of an items quantity
        input.addEventListener("change", () => {
          getStartingTotal();
          updateStartingTotalOnQuantityChange();

          const adjacentPlus = input
            .closest(".cart-item")
            .querySelector(".cart-item-side .plus");
          const adjacentMinus = input
            .closest(".cart-item")
            .querySelector(".cart-item-side .minus");

          // Minus Styling
          if (input.value <= 0) {
            adjacentMinus.style.opacity = 0.5;
            adjacentMinus.style.pointerEvents = "none";

            input.value = 0;

            localStorage.removeItem(
              input
                .closest(".cart-item")
                .querySelector(".cart-item-side .cart-item-name").innerHTML
            );

            router.reload();
          } else {
            adjacentMinus.style.opacity = 1;
            adjacentMinus.style.pointerEvents = "auto";
          }

          // Plus Styling
          if (input.value >= 50) {
            adjacentPlus.style.opacity = 0.5;
            adjacentPlus.style.pointerEvents = "none";

            input.value = 50;

            getStartingTotal();
          }
        });
      });

      // Quantity Button Functionality (Plus)
      document.querySelectorAll(".plus").forEach((plusBtn) => {
        const plusBtnIpt = plusBtn
          .closest(".cart-item")
          .querySelector(".cart-item-side input");
        const adjacentMinus = plusBtn
          .closest(".cart-item")
          .querySelector(".cart-item-side .minus");

        plusBtn.addEventListener("click", () => {
          plusBtnIpt.value++; // Increments

          // Re-enabling Minus
          if (plusBtnIpt.value >= 1) {
            adjacentMinus.style.opacity = 1;
            adjacentMinus.style.pointerEvents = "auto";
          }

          // Disabling Plus
          if (plusBtnIpt.value == 50) {
            plusBtn.style.opacity = 0.5;
            plusBtn.style.pointerEvents = "none";
          }

          getStartingTotal();
        });
      });

      // Quantity Button Functionality (Minus)
      document.querySelectorAll(".minus").forEach((minusBtn) => {
        const minusBtnIpt = minusBtn
          .closest(".cart-item")
          .querySelector(".cart-item-side input");

        const adjacentPlus = minusBtn
          .closest(".cart-item")
          .querySelector(".cart-item-side .plus");

        minusBtn.addEventListener("click", () => {
          minusBtnIpt.value--; // Decrements a point to the quantity input
          getStartingTotal();

          // Disabling Minus
          if (minusBtnIpt.value == 0) {
            minusBtn.style.opacity = 0.5;
            minusBtn.style.pointerEvents = "none";

            localStorage.removeItem(
              minusBtn
                .closest(".cart-item")
                .querySelector(".cart-item-side .cart-item-name").innerHTML
            );
            router.reload();
          }

          // Re-enabling Plus
          if (minusBtnIpt.value < 50) {
            adjacentPlus.style.opacity = 1;
            adjacentPlus.style.pointerEvents = "auto";
          }
        });
      });

      // Updating the final grand total when the userr changes an items quantity
      document.querySelectorAll(".cart-item-quantity-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          updateStartingTotalOnQuantityChange();
        });
      });

      getStartingTotal(); // Calculate total
    }, 10);
  }, []);

  // Calculating Grand Total
  useEffect(() => {
    var i;
    const allShippingOptions = document.querySelectorAll(".shipping-option");
    const allPromoOptions = document.querySelectorAll(".promo-option");

    const cartTotalWithoutShipping = document.getElementById("cartTotal");

    let grandTotal, offAmount;

    // Disables confirm if any select is altered
    document.querySelectorAll("select").forEach((select) => {
      select.addEventListener("change", () => {
        document.getElementById("confirmCheckout").style.pointerEvents = "none";
        document.getElementById("confirmCheckout").style.opacity = 0.5;
      });
    });

    // Show grand total
    setTimeout(() => {
      document.getElementById(
        "cartGrand"
      ).innerHTML = `${cartTotalWithoutShipping.innerHTML}`;
    }, 120);

    // Checks for promo code
    function getPromo() {
      if (!allPromoOptions[0].selected) {
        offAmount = grandTotal * 0.15;
        grandTotal -= offAmount;
      }
    }

    // Used to make the grandTotal
    function getGrandTotal() {
      // Deciding Shipping options

      if (allShippingOptions[0].selected) {
        document.getElementById(
          "cartGrand"
        ).innerHTML = `${cartTotalWithoutShipping.innerHTML}`;

        document.getElementById("confirmCheckout").style.pointerEvents = "none";
        document.getElementById("confirmCheckout").style.opacity = 0.5;
      }

      if (allShippingOptions[1].selected) {
        grandTotal = parseFloat(cartTotalWithoutShipping.innerHTML) + 2.75;

        getPromo();

        document.getElementById("confirmCheckout").style.pointerEvents = "auto";
        document.getElementById("confirmCheckout").style.opacity = 1;

        document.getElementById("cartGrand").innerHTML = `${grandTotal.toFixed(
          2
        )}`;
      }

      if (allShippingOptions[2].selected) {
        grandTotal = parseFloat(cartTotalWithoutShipping.innerHTML) + 3.3;

        getPromo();

        document.getElementById("confirmCheckout").style.pointerEvents = "auto";
        document.getElementById("confirmCheckout").style.opacity = 1;

        document.getElementById("cartGrand").innerHTML = `${grandTotal.toFixed(
          2
        )}`;
      }

      if (allShippingOptions[3].selected) {
        grandTotal = parseFloat(cartTotalWithoutShipping.innerHTML) + 4.95;

        getPromo();

        document.getElementById("confirmCheckout").style.pointerEvents = "auto";
        document.getElementById("confirmCheckout").style.opacity = 1;

        document.getElementById("cartGrand").innerHTML = `${grandTotal.toFixed(
          2
        )}`;
      }
    }

    // Creates the grand total
    document
      .getElementById("calculateGrandTotal")
      .addEventListener("click", () => {
        if (CartList.length != 0) {
          getGrandTotal();
        }
      });

    // Confirming checkout
    document.getElementById("confirmCheckout").addEventListener("click", () => {
      // Prevent null/defined errors
      if (CartList.length != 0) {
        const cartItemNames = document.getElementsByClassName("cart-item-name");
        for (i = 0; i < cartItemNames.length; i++) {
          localStorage.removeItem(cartItemNames[i].innerHTML);
        }
      }

      LinkPushing(router, "/", "onlyjojo/");
      sessionStorage.setItem("Checkout Successful", true);
    });
  }, []);

  return (
    <div id="cartCheckout" className={styles.cart_checkout}>
      <div id="darkenBg" className={`${styles.darken_bg} full-second`} />

      <div
        id="cartCheckoutMain"
        className={`${styles.cart_checkout_main} full-second`}
      >
        <div
          className={`${styles.cart_checkout_main_inner} page-transition`}
          id="cartCheckoutMainInner"
        >
          <div className={styles.cart_checkout_main_top}>
            <div>
              <img data-src={MENACING} className="lazyload" alt="Menacing.." />
              <h1 className="jp_ORDER_SUMMARY_HEADING">Order Summary</h1>
            </div>

            <button id="checkoutCloser" className="page-transition jp_CLOSE">
              Close
            </button>
          </div>

          <div className={styles.cart_checkout_main_starting_values}>
            <strong>
              <div className="jp_NUMBER_OF_ITEMS"># of Items:</div>{" "}
              <span id="checkoutCartCount">0</span>
            </strong>

            <strong>
              <div className="jp_CART_TOTAL">Cart Total:</div>
              <span id="cartTotal">0.00</span>
            </strong>
          </div>

          <div className={styles.cart_checkout_main_promo}>
            <span>
              <div className="jp_WANT_A_PROMO_CODE">Want a promo code?</div>{" "}
              <span className="jp_OPTIONAL">(Optional)</span>
            </span>

            <div>
              <FaCaretDown className={styles.fa_icon} />

              <select>
                <option defaultChecked className="promo-option">
                  ------
                </option>
                <option className="promo-option jp_MUDAMUDA">
                  MUDAMUDA (15% OFF)
                </option>
                <option className="promo-option jp_SANDOFABEACH">
                  SANDOFABEACH (15% OFF)
                </option>
                <option className="promo-option jp_YAREYAREDAZE">
                  YAREYAREDAZE (15% OFF)
                </option>
              </select>
            </div>
          </div>

          <div className={styles.cart_checkout_main_shipping}>
            <span className="jp_SELECT_SHIPPING">
              Select a shipping option:
            </span>

            <div>
              <FaCaretDown className={styles.fa_icon} />

              <select>
                <option defaultChecked className="shipping-option">
                  ------
                </option>
                <option className="shipping-option jp_SHIPPING_STANDARD">
                  Standard ($2.75)
                </option>
                <option className="shipping-option jp_SHIPPING_FAST">
                  Fast ($3.30)
                </option>
                <option className="shipping-option jp_SHIPPING_NEXT_DAY">
                  Next Day ($4.95)
                </option>
              </select>
            </div>
          </div>

          <div className={styles.cart_checkout_main_bottom}>
            <button
              id="calculateGrandTotal"
              className={`${styles.checkout_calculate} page-transition jp_CALCULATE_GRAND_TOTAL`}
            >
              Calculate Grand Total
            </button>

            <strong>
              <div className="jp_GRAND_TOTAL">Grand Total:</div>{" "}
              <span id="cartGrand">0.00</span>
            </strong>

            <div>
              <button id="confirmCheckout" className="page-transition">
                <FaCheckCircle />
              </button>
              <button
                className="cart-clear page-transition"
                id="checkoutCartClear"
                onClick={() => {
                  TriggerBTD();
                }}
              >
                <MdDeleteSweep />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
