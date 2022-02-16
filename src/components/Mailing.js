import React from "react";
import styles from "../Mailing.module.css";

function Mailing() {
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
          <form>
            <input className={styles.input} type="text" placeholder="Subject" />
            <textarea
              className={styles.input}
              type="text"
              placeholder="Message"
              rows={6}
            />
            <textarea
              className={styles.input}
              type="text"
              placeholder="Emails List"
              rows={6}
            />
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Mailing;
