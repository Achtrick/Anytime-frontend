import axios from "axios";
import styles from "../Administration.module.css";
import { useState } from "react";

function Mailing() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function success() {
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    let feedback = document.getElementById("fback");
    feedback.hidden = false;
    feedback.innerHTML = "News Letter envoyé";
    feedback.style.color = "green";
    setTimeout(() => {
      feedback.hidden = true;
    }, 2000);
  }

  function error() {
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    let feedback = document.getElementById("fback");
    feedback.hidden = false;
    feedback.innerHTML = "Quelques mails ne sont pas valides !";
    feedback.style.color = "orange";
    setTimeout(() => {
      feedback.hidden = true;
    }, 2000);
  }

  function sendMail(e) {
    e.preventDefault();
    axios
      .post("/sendmails", { subject: subject, message: message })
      .then((res) => {
        if (res.data === "SUCCESS") {
          success();
        } else if (res.data === "EMPTY") {
          alert("Ajouter des clients d'abord");
        } else {
          error();
        }
      });
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/newsletter/overlay.jpg"
          })`,
        }}
        className={styles.overlay}
      >
        <h1>News Letter</h1>
        <div className={styles.formContainer}>
          <form onSubmit={sendMail}>
            <input
              id="subject"
              required
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Subject"
            />
            <textarea
              id="message"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Message"
              rows={6}
            />
            <div id="fback" className={styles.feedback} hidden>
              feedback
            </div>
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mailing;
