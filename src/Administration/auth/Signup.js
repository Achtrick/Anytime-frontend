import React, { useState } from "react";
import styles from "../Administration.module.css";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp(e) {
    e.preventDefault();
    axios
      .post("/createAccount", { email: email, password: password })
      .then((res) => {
        if (res.data === "SUCCESS") {
          alert("Success");
        } else {
          alert("Error");
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
        <h1>Administration SignUp</h1>
        <div className={styles.formContainer}>
          <form onSubmit={signUp}>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.input}
              type="email"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={styles.input}
              type="password"
              placeholder="Password"
              required
            />
            <button className={styles.btn}>Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
