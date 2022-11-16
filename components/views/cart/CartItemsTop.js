// Library Items
import { MdDeleteSweep } from "react-icons/md";

// Image Imports
import { MENACING_GIF } from "../../../assets/cdns/images/global";
import TriggerBTD from "../../../assets/functions/cart/TriggerBTD";

// Styling
import styles from "../../../styles/views/cart/Cart.module.css";

const CartItemsTop = () => {
  return (
    <div id={styles.cartItemsTop}>
      <div className={styles.cart_items_top_cnt_heading}>
        <img data-src={MENACING_GIF} className="lazyload" alt="Menacing.." />
        <h1 className="jp_SHOPPING_CART">Shopping Cart</h1>
      </div>

      <div className={styles.cart_items_top_cnt_btns}>
        <button
          className="page-transition cart-clear"
          onClick={() => {
            TriggerBTD();
          }}
        >
          <MdDeleteSweep />
        </button>

        <button id="checkOutToggler" className="page-transition jp_CHECKOUT">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItemsTop;
