// Asset Imports
import { CartList } from "../data/arrays/CartList";

const ISSERVER = typeof window === "undefined"; // Prevents defined error

export default function AddToCartList(cookie, object) {
  if (!ISSERVER) {
    if (!localStorage.getItem(cookie) && !CartList.indexOf(object) > -1) {
      localStorage.removeItem(cookie);
      localStorage.setItem(cookie, true);
      CartList.push(object);
    } else {
      alert("This item is already inside of the cart.");
      console.log("This item is already inside of the cart.");
    }
  }

  document.querySelectorAll("#cartCount").forEach((ccount) => {
    ccount.innerHTML = CartList.length;
  });

  console.log("Updated Cart");
  console.table(CartList);
}
