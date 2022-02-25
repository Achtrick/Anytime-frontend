import axios from "axios";
import styles from "../Administration.module.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Mailing() {
  const history = useHistory();
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function logout() {
    axios.post("/logout");
    history.push("/");
  }

  function success() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    let feedback = document.getElementById("fback");
    feedback.hidden = false;
    feedback.innerHTML = "News Letter sent successfully";
    feedback.style.color = "green";
    setTimeout(() => {
      feedback.hidden = true;
    }, 2000);
  }

  function error() {
    let feedback = document.getElementById("fback");
    feedback.hidden = false;
    feedback.innerHTML = "An error occured !";
    feedback.style.color = "red";
    setTimeout(() => {
      feedback.hidden = true;
    }, 2000);
  }

  async function sendMail(e) {
    e.preventDefault();
    await axios.get("/sendmails").then((res) => {
      if (res.data === "SUCCESS") {
        success();
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
        <div className={styles.navrow}>
          <div className={styles.col2}>
            <Link className={styles.defaultBtn} to="/*time&*where/dashboard">
              back
            </Link>
          </div>

          <div className={styles.col2}>
            <a
              onClick={() => {
                logout();
              }}
              className={styles.dangerBtn}
            >
              Logout
            </a>
          </div>
        </div>
        <h1>News Letter</h1>
        <div className={styles.formContainer}>
          <form onSubmit={sendMail}>
            <input
              id="subject"
              required
              onChange={(e) => {
                setSubject(e.target.data);
              }}
              className={styles.input}
              type="text"
              placeholder="Subject"
            />
            <textarea
              id="message"
              required
              onChange={(e) => {
                setMessage(e.target.data);
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
