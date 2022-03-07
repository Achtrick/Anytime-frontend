import React, { useContext } from "react";
import styles from "./Dialog.module.css";
import { AppContext } from "../Context/AppContext";

function Dialog(props) {
  const { dialog, setDialog } = useContext(AppContext);
  return (
    <>
      <div
        onClick={() => {
          setDialog(false);
        }}
        className={styles.background}
      ></div>
      <div className={styles.card}>
        <h3>Voulez-vous vraiment supprimer le client</h3>
        <h3>{props.client.name} ?</h3>
        <hr />
        <div className={styles.btnContainer}>
          <span
            onClick={() => {
              setDialog(false);
            }}
            className={styles.defaultBtn}
          >
            Annuler
          </span>
          <span
            onClick={() => {
              props.action(props.client.id);
              setDialog(false);
            }}
            className={styles.dangerBtn}
          >
            Supprimer
          </span>
        </div>
      </div>
    </>
  );
}

export default Dialog;
