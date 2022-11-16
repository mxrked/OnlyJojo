// Next/React stuff
import Head from "next/head";

// Image Imports
import { FAVICON, APPLE_TOUCH_ICON, F16, F32 } from "../assets/cdns/images/tab";

// Asset Imports
import CheckingForCartList from "../assets/functions/CheckingForCartList";
import FilterStoreItems from "../assets/functions/store/FilterStoreItems";
import { CartList } from "../assets/data/arrays/CartList";

// Component Imports
import OnAllPages from "../components/all/OnAllPages";
import Navigation from "../components/layout/nav/Navigation";
import StoreJP from "../components/translations/StoreJP";
import Footer from "../components/layout/footer/Footer";

import Top from "../components/views/store/Top";
import Filtering from "../components/views/store/Filtering";
import Products from "../components/views/store/Products";

// Styles
import styles from "../styles/views/store/Store.module.css";

export default function Store() {
  CheckingForCartList();
  setTimeout(() => {
    FilterStoreItems();
  }, 10);

  console.table(CartList);

  return (
    <div id={styles.PAGE_CNT}>
      <Head>
        <title>OnlyJojo | A Bizarre Online Store - Store</title>

        {/* SEO 
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="OnlyJojo | A Bizarre Online Store - Store"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:url"
          content="http://basicallyeasy.com/next-projects/onlyjojo/store/"
        />
        */}
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="/store" />

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
      <Navigation />
      <StoreJP />

      <div id={styles.storeCnt} className="overrides_Store store_Cnt">
        <Top />
        <Filtering />
        <Products />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
