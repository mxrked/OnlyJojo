// React Stuff
import { useRouter } from "next/router";
import { useEffect } from "react";

// Library Items
import { FaCheckCircle } from "react-icons/fa";

// Styling
import styles from "../../../styles/views/cart/Cart.module.css";

const SuccessfullyCheckout = () => {
  const router = useRouter(); // rooter

  // Display successfullyCheckout on index page
  useEffect(() => {
    if (sessionStorage.getItem("Checkout Successful")) {
      setTimeout(() => {
        document.getElementById("successfullyCheckout").style.transform =
          "translateX(-50%) translateY(0)";
        sessionStorage.removeItem("Checkout Successful");
      }, 700);

      setTimeout(() => {
        document.getElementById("successfullyCheckout").style.transform =
          "translateX(-50%) translateY(-120px)";
      }, 6000);
    }
  }, []);

  return (
    <div
      id="successfullyCheckout"
      className={`${styles.successfully_checkout} full-second`}
    >
      <div>
        <span>Checkout Successful!</span>

        <FaCheckCircle />
      </div>
    </div>
  );
};

export default SuccessfullyCheckout;
