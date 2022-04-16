// React Stuff
import { useEffect } from "react";
import { useRouter } from "next/router";

// Custom Imports
import { FadeRight } from "../../../assets/animations/Fades";

// Library Items
import Email from "../../../assets/data/Email";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Image Imports

// Styling
import styles from "../../../styles/views/support/Support.module.css";

const SupportForm = () => {
  const router = useRouter();

  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Making some functionality for sending email and inputs
  useEffect(() => {
    const FORM_INPUTS = document.querySelectorAll(".frm-input");
    const REQUIRED_INPUT_HOLDERS =
      document.querySelectorAll(".form-input-holder");

    // This will be used to make a random form id
    function makeRandomFormID(length) {
      var id = "";
      var chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charsLength = chars.length;

      for (var i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * charsLength));
      }

      return id;
    }

    // This will be what sends the email
    function sendEmail(name, email, phone, subject, message, reciever) {
      const GENERATED_FORM_ID = makeRandomFormID(6);

      Email.send({
        Host: "smtp.gmail.com",
        Username: "pp101socials@gmail.com",
        Password: "hyepaiuqktiwbehp",
        To: reciever,
        From: email,
        Subject: `OnlyJojo | Support Form Submission (ID: #${GENERATED_FORM_ID})`,
        Body: `
          
            A user has submitted a OnlyJojo support form: <br/><br/>

            Name of User: ${name}<br/>
            Email Address of ${name}: ${email}<br/>
            Phone Number of ${name}: ${phone}<br/><br/>
            Support Issue: ${subject}<br/>
            Issue Description: ${message}
            
          `,
      }).then((message) => {
        console.log("Form sent successfully!");

        clearInputs();
        router.reload();
      });
    }

    // Quick function to clear inputs
    function clearInputs() {
      FORM_INPUTS.forEach((input) => {
        input.value = "";
      });

      document.getElementById("frmMessage").value = "";
    }

    // This will be used to style a empty input to show which one is empty to the user
    function styleEmptyInput(input, logtxt) {
      console.log(logtxt + " input is empty..");
      REQUIRED_INPUT_HOLDERS[input].style.borderColor = "red";
    }

    // Resets form
    document.getElementById("frmReset").addEventListener("click", () => {
      clearInputs();
      router.reload();
    });

    // Changes border color when user inputs values
    FORM_INPUTS.forEach((input) => {
      input.addEventListener("keyup", () => {
        if (!input.value.length == 0) {
          input.closest(".form-input-holder").style.borderColor = "ghostwhite";
        }
      });
    });

    // This will be used to decide if the form submission will be sent under certain circumstances
    function sendBtnFunctionality(event) {
      if (
        // Dont send email
        document.getElementById("frmFN").value == 0 ||
        document.getElementById("frmLN").value == 0 ||
        document.getElementById("frmEmail").value == 0 ||
        document.getElementById("frmPhone").value == 0 ||
        document.getElementById("frmSubject").value == 0
      ) {
        console.log("Failed to send.. Empty Input..");

        // Style and log which input was empty
        if (document.getElementById("frmFN").value == 0) {
          styleEmptyInput(0, "First Name");
        }

        if (document.getElementById("frmLN").value == 0) {
          styleEmptyInput(1, "Last Name");
        }

        if (document.getElementById("frmEmail").value == 0) {
          styleEmptyInput(2, "Email Address");
        }

        if (document.getElementById("frmPhone").value == 0) {
          styleEmptyInput(3, "Phone Number");
        }

        if (document.getElementById("frmSubject").value == 0) {
          styleEmptyInput(4, "Subject");
        }

        event.preventDefault(); // prevents refresh
      } // Send email
      else {
        const FULL_NAME =
          document.getElementById("frmFN").value +
          " " +
          document.getElementById("frmLN").value;

        const EMAIL_ADD = document.getElementById("frmEmail").value;
        const PHONE_NUMBER = document.getElementById("frmPhone").value;
        const SUBJECT_NAME = document.getElementById("frmSubject").value;
        const MESSAGE_TEXT = document.getElementById("frmMessage").value;

        //! SEND EMAIL HERE
        sendEmail(
          FULL_NAME,
          EMAIL_ADD,
          PHONE_NUMBER,
          SUBJECT_NAME,
          MESSAGE_TEXT,
          "pp101socials@gmail.com"
        );

        event.preventDefault(); // prevents refresh
      }
    }

    // Triggers the send
    document.getElementById("frmSend").addEventListener("click", (e) => {
      sendBtnFunctionality(e);
    });
  }, []);

  //! The commented code below will prevent the autoComplete from showing
  // name="new-password"
  // autoComplete="new-password"

  return (
    <div id={styles.supportForm}>
      <motion.form
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeRight}
        method="POST"
        autoComplete="new-passwords"
        id="form"
      >
        <div className={styles.form_set}>
          <div
            className={`${styles.form_input_holder} form-input-holder page-transition`}
          >
            <input
              type="text"
              id="frmFN"
              name="new-passwords"
              autoComplete="new-passwords"
              placeholder="First Name"
              className="frm-input required-input"
            />
            <span className={styles.required}>*</span>
          </div>

          <div
            className={`${styles.form_input_holder} form-input-holder page-transition`}
          >
            <input
              type="text"
              id="frmLN"
              name="new-passwords"
              autoComplete="new-passwords"
              placeholder="Last Name"
              className="frm-input required-input"
            />
            <span className={styles.required}>*</span>
          </div>
        </div>
        <div className={styles.form_set}>
          <div
            className={`${styles.form_input_holder} form-input-holder page-transition`}
          >
            <input
              type="email"
              id="frmEmail"
              name="new-passwords"
              autoComplete="new-passwords"
              placeholder="Email Address"
              className="frm-input required-input"
            />
            <span className={styles.required}>*</span>
          </div>

          <div
            className={`${styles.form_input_holder} form-input-holder page-transition`}
          >
            <input
              type="tel"
              id="frmPhone"
              name="new-passwords"
              autoComplete="new-passwords"
              placeholder="Phone Number"
              className="frm-input required-input"
            />
            <span className={styles.required}>*</span>
          </div>
        </div>
        <div className={styles.form_bottom_set}>
          <div
            className={`${styles.form_input_holder} form-input-holder page-transition`}
          >
            <input
              type="text"
              id="frmSubject"
              name="new-passwords"
              autoComplete="new-passwords"
              placeholder="What is your issue?"
              className="frm-input required-input"
            />
            <span className={styles.required}>*</span>
          </div>

          <div>
            <textarea
              className="form_textarea"
              id="frmMessage"
              placeholder="Explain your issue in the best detail.."
            />
          </div>
        </div>

        <div className={styles.form_buttons}>
          <button type="submit" className="page-transition" id="frmSend">
            SEND
          </button>

          <button type="reset" className="page-transition" id="frmReset">
            CLEAR
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default SupportForm;
