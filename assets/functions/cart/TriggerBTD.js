// Custom Imports
import { CartList } from "../../data/arrays/CartList";

const ISSERVER = typeof window === "undefined"; // Prevents defined error

// This will be used to create a popup that shows kira. This is for clearing the cart
export default function TriggerBTD() {
  if (!ISSERVER) {
    var i;
    const allCartItems = document.getElementsByClassName("cart-item-name");

    // Only triggers if the cart has items in it
    if (CartList.length != 0) {
      for (i = 0; i < allCartItems.length; i++) {
        if (localStorage.getItem(allCartItems[i].innerHTML)) {
          localStorage.removeItem(allCartItems[i].innerHTML);
        }
      }

      document.querySelector(".bites_the_dust").style.display = "block";

      setTimeout(() => {
        document.getElementById("blurryBg").classList.remove("deactive");
      }, 100);

      setTimeout(() => {
        document.getElementById("btdImgH").classList.remove("deactive");
      }, 300);

      setTimeout(() => {
        window.location.reload();
      }, 2500);
    } else {
      console.log(
        "There is nothing inside of the cart... NO BITES THE DUSTO!!"
      );
    }
  }
}
