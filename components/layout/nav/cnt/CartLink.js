// React/Next Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Library Imports
import { FaShoppingCart } from "react-icons/fa";
import LinkPushing from "../../../../assets/hooks/LinkPushing";

// Asset Imports
import { CartList } from "../../../../assets/data/arrays/CartList";

// Styling
import styles from "../../../../styles/layout/nav/Nav.module.css";

const CartLink = () => {
  const router = useRouter(); // rooter

  // Apply CartList.length to cartCount
  useEffect(() => {
    document.getElementById("cartCount").innerHTML = CartList.length;
  }, []);

  return (
    <div id={styles.cartLinkHolder}>
      <a
        className="page-transition"
        onClick={() => {
          LinkPushing(router, "/cart/", "/cart/");
        }}
      >
        <FaShoppingCart className={styles.fa_icon} />

        <div>
          <span id="cartCount">#</span>
        </div>
      </a>
    </div>
  );
};

export default CartLink;
