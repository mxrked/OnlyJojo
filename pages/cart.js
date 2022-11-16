// Next/React stuff
import Head from "next/head";

// Image Imports
import { FAVICON, APPLE_TOUCH_ICON, F16, F32 } from "../assets/cdns/images/tab";

// Custom Imports
import { CartList } from "../assets/data/arrays/CartList";

// Asset Imports
import CheckingForCartList from "../assets/functions/CheckingForCartList";

// Component Imports
import OnAllPages from "../components/all/OnAllPages";
import Navigation from "../components/layout/nav/Navigation";
import CartJP from "../components/translations/CartJP";

import BitesTheDust from "../components/views/cart/BitesTheDust";
import CartItemsTop from "../components/views/cart/CartItemsTop";
import CartItemsMain from "../components/views/cart/CartItemsMain";
import CartCheckout from "../components/views/cart/CartCheckout";

import Footer from "../components/layout/footer/Footer";

// Styles
import styles from "../styles/views/cart/Cart.module.css";
import nav_styles from "../styles/layout/nav/Nav.module.css"; // Used to make the nav on the cart page relative

export default function Cart() {
  CheckingForCartList();

  console.table(CartList);

  return (
    <div id={styles.PAGE_CNT} className="relative_nav_parent">
      <Head>
        <title>OnlyJojo | A Bizarre Online Store - Your Cart</title>

        {/* SEO 
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="OnlyJojo | A Bizarre Online Store - Your Cart"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/onlyjojo/cart/"
        />
        */}
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="/cart" />

        {/* Tab Icons */}
        <link rel="shortcut icon" href={FAVICON} />
        <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
        <link rel="icon" type="image/png" sizes="32x32" href={F32} />
        <link rel="icon" type="image/png" sizes="16x16" href={F16} />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      {/* Global Components/Functions */}
      <OnAllPages />

      <div id={nav_styles.cartNav}>
        <Navigation />
      </div>

      <CartJP />

      <div id={styles.cartCnt} className="overrides_Cart">
        {/* */}

        <BitesTheDust />

        <div id={styles.cartCntInner}>
          <div className={styles.cart_cnt_inner_main}>
            <CartItemsTop />
            <CartItemsMain />
          </div>

          <CartCheckout />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
