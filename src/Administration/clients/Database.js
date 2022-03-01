import React, { useState } from "react";
import styles from "../Administration.module.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function Database() {
  const [companyName, setCompanyName] = useState("");
  const [activity, setActivity] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneFields, setPhoneFields] = useState([{ id: 0, phone: null }]);
  const history = useHistory();

  function logout() {
    axios.post("/logout");
    history.push("/");
  }

  function success() {
    document.getElementById("companyName").value = "";
    document.getElementById("activity").value = "";
    document.getElementById("contactName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    let feedback = document.getElementById("fback");
    feedback.hidden = false;
    feedback.innerHTML = "Client added successfully";
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

  function addField() {
    setPhoneFields([...phoneFields, { id: phoneFields.length, phone: null }]);
  }

  function addPhone(id, phone) {
    phoneFields.map((field) => {
      if (field.id === id) {
        field.phone = phone;
      }
      setPhoneFields(phoneFields);
    });
  }

  function removeField(id) {
    setPhoneFields(phoneFields.filter((phone) => phone.id !== id));
  }

  function addClient(e) {
    e.preventDefault();
    axios
      .post("/addclient", {
        companyName: companyName,
        activity: activity,
        contactName: contactName,
        phone: phoneFields,
        email: email,
        address: address,
      })
      .then((res) => {
        if (res.data === "SUCCESS") {
          success();
          setPhoneFields([{ id: 0, phone: null }]);
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
        <h1>Database</h1>
        <div className={styles.formContainer}>
          <form onSubmit={addClient}>
            <input
              id="companyName"
              required
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Nom de la société"
            />
            <input
              id="activity"
              required
              onChange={(e) => {
                setActivity(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Activité"
            />
            <input
              id="contactName"
              required
              onChange={(e) => {
                setContactName(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Contact Name"
            />
            <div className={styles.inputRow}>
              <input
                id="phone"
                required
                onChange={(e) => {
                  addPhone(0, e.target.value);
                }}
                className={styles.phone}
                type="number"
                placeholder="Téléphone"
              />
              <a
                onClick={() => {
                  addField();
                }}
                className={styles.addBtn}
              >
                <i className="fa-solid fa-plus" />
              </a>
            </div>
            {phoneFields.map((phone) => {
              if (phone.id !== 0)
                return (
                  <div key={phone.id} className={styles.inputRow}>
                    <input
                      id="phone"
                      required
                      onChange={(e) => {
                        addPhone(phone.id, e.target.value);
                      }}
                      className={styles.phone}
                      type="number"
                      placeholder="Téléphone"
                    />
                    <a
                      onClick={() => {
                        removeField(phone.id);
                      }}
                      className={styles.addBtn}
                    >
                      <i className="fa-solid fa-minus" />
                    </a>
                  </div>
                );
            })}
            <input
              id="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.input}
              type="email"
              placeholder="Email"
            />
            <input
              id="address"
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className={styles.input}
              type="address"
              placeholder="Addrese"
            />
            <div id="fback" className={styles.feedback} hidden>
              feedback
            </div>
            <button className={styles.btn}>Add</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Database;
