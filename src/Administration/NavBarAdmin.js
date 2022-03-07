import React, { useState } from "react";
import styles from "./Administration.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function NavBarAdmin(props) {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  function logout() {
    axios.post("/logout");
    history.push("/");
    window.location.reload();
  }

  function toggleMobile() {
    setOpen(!open);
  }

  return (
    <>
      <div className={styles.navBar}>
        <div className={styles.colLeft}>
          <ul>
            <li>
              <Link className={styles.link} to="/*time&*where/addclients">
                Add clients
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/*time&*where/clientslist">
                Clients List
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.colCenter}>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            to="/*time&*where"
          >
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo" />
          </Link>
        </div>
        <div className={styles.colRight}>
          <ul>
            <li>
              <Link className={styles.link} to="/*time&*where/newsletter">
                News-letter
              </Link>
            </li>
            <li>
              <span
                onClick={() => {
                  logout();
                }}
                className="dangerBtn"
              >
                Logout
              </span>
            </li>
          </ul>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              toggleMobile();
            }}
            className={styles.menuButton}
          >
            <FontAwesomeIcon icon={solid("bars")} size="2x" />
          </span>
        </div>
      </div>
      <div className={!open ? styles.dropdown : styles.showDropdown}>
        <div className={styles.dropdownRow}>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            className={styles.link}
            to="/*time&*where/addclients"
          >
            Ajouter clients
          </Link>
        </div>
        <div className={styles.dropdownRow}>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            className={styles.link}
            to="/*time&*where/clientslist"
          >
            Liste clients
          </Link>
        </div>
        <div className={styles.dropdownRow}>
          <Link
            onClick={() => {
              setOpen(false);
            }}
            className={styles.link}
            to="/*time&*where/newsletter"
          >
            News-letter
          </Link>
        </div>
        <div className={styles.dropdownRow}>
          <span
            onClick={() => {
              logout();
            }}
            className="dangerBtn"
          >
            Logout
          </span>
        </div>
      </div>
      <div>{props.children}</div>
    </>
  );
}

export default NavBarAdmin;
