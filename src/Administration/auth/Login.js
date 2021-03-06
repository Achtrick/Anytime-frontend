import React, { useState, useContext } from "react";
import styles from "../Administration.module.css";
import { AppContext } from "../../Context/AppContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Login() {
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function signIn(e) {
    e.preventDefault();
    setLoading(true);
    axios.post("/login", { email: email, password: password }).then((res) => {
      if (res.data.connected) {
        setUser(res.data);
        setLoading(false);
        history.push("/*time&*where/clientslist");
      } else {
        setLoading(false);
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
        <h1>Administration Login</h1>
        <div className={styles.formContainer}>
          <form onSubmit={signIn}>
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
            {loading ? (
              <button disabled className={styles.btn}>
                <FontAwesomeIcon icon={solid("spinner")} size="lg" spin />
              </button>
            ) : (
              <button className={styles.btn}>Login</button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
