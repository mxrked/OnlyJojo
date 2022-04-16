const ISSERVER = typeof window === "undefined"; // Prevents defined error

// Filters out and displays specific product type
function filterByProductType(type) {
  sessionStorage.removeItem("Store All");

  document.querySelectorAll(".product").forEach((product) => {
    product.style.display = "none";
  });
  document.querySelectorAll(`[data-product-type=${type}]`).forEach((t) => {
    t.style.display = "block";
  });
}

// This will be used to differentiate from the 3 different product types of each part, it will use the function above to filter out product types
function URLFilter(urlStr1, urlStr2, urlStr3, cB1, cB2, cB3) {
  //! Created for cleaner code :)

  const URL = window.location.href;
  if (URL.indexOf(`/${urlStr1}/`) > -1) {
    filterByProductType(cB1);
  } else if (URL.indexOf(`/${urlStr2}/`) > -1) {
    filterByProductType(cB2);
  } else if (URL.indexOf(`/${urlStr3}/`) > -1) {
    filterByProductType(cB3);
  }
}

export default function FilterStoreItems() {
  if (!ISSERVER) {
    const url = window.location.href;

    // Marks/Unmarks in SS if user is/is not on "/store/"
    if (url.includes("/store/")) {
      sessionStorage.setItem("Store All", true);
    } else {
      sessionStorage.removeItem("Store All");
    }

    URLFilter(
      "#pb_Figures",
      "#pb_Manga",
      "#pb_Clothing",
      "PB_Figure",
      "PB_Manga",
      "PB_Clothing"
    );
    URLFilter(
      "#bt_Figures",
      "#bt_Manga",
      "#bt_Clothing",
      "BT_Figure",
      "BT_Manga",
      "BT_Clothing"
    );
    URLFilter(
      "#sdcs_Figures",
      "#sdcs_Manga",
      "#sdcs_Clothing",
      "SDC_Figure",
      "SDC_Manga",
      "SDC_Clothing"
    );
    URLFilter(
      "#daub_Figures",
      "#daub_Manga",
      "#daub_Clothing",
      "DAUB_Figure",
      "DAUB_Manga",
      "DAUB_Clothing"
    );
    URLFilter(
      "#gw_Figures",
      "#gw_Manga",
      "#gw_Clothing",
      "GW_Figure",
      "GW_Manga",
      "GW_Clothing"
    );
    URLFilter(
      "#so_Figures",
      "#so_Manga",
      "#so_Clothing",
      "SO_Figure",
      "SO_Manga",
      "SO_Clothing"
    );

    // Show all products
    if (sessionStorage.getItem("Store All")) {
      console.log("Filtering All items.");
      document.querySelectorAll(".product").forEach((product) => {
        product.style.display = "block";
      });
    }
  }
}
