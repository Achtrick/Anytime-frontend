import React, { useState } from "react";
import styles from "../Administration.module.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Database() {
  const [companyName, setCompanyName] = useState("");
  const [activity, setActivity] = useState("");
  const [ceoName, setCeoName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneFields, setPhoneFields] = useState([{ id: 0, phone: null }]);
  const [otherActivity, setOtherActivity] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function success() {
    document.getElementById("companyName").value = "";
    document.getElementById("activity").value = "";
    document.getElementById("ceoName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";

    setSubmitted(!submitted);
    console.log(submitted);
    setPhoneFields([{ id: 0, phone: null }]);
    if (document.getElementById("other-activity")) {
      document.getElementById("other-activity").value = "";
    }
    setOtherActivity(false);
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

  function toggleOthersField(value) {
    setOtherActivity(!value);
  }

  function addClient(e) {
    e.preventDefault();
    axios
      .post("/addclient", {
        companyName: companyName,
        activity: activity,
        ceoName: ceoName,
        phone: phoneFields,
        email: email,
        address: address,
      })
      .then((res) => {
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
        <h1>Ajouter des Clients</h1>
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
            <select
              id="activity"
              style={{ cursor: "pointer" }}
              required
              onChange={(e) => {
                if (e.target.value !== "Autres") {
                  toggleOthersField(true);
                  setActivity(e.target.value);
                } else {
                  toggleOthersField(false);
                }
              }}
              className={styles.input}
              type="text"
              placeholder="Activité"
            >
              <option value={""}>Activité</option>
              <option value="Industrie">Industrie</option>
              <option value="Commerce">Commerce</option>
              <option value="Agricole">Agricole</option>
              <option value="Santé">Santé</option>
              <option value="Informatique">Informatique</option>
              <option value="Trading">Trading</option>
              <option value="Sport">Sport</option>
              <option value="Artistique">Artistique</option>
              <option value="Juridique">Juridique</option>
              <option value="Education">Education</option>
              <option value="Transport">Transport</option>
              <option value="Communication">Communication</option>
              <option value="Autres">Autres</option>
            </select>
            {otherActivity ? (
              <>
                <input
                  id="other-activity"
                  required
                  onChange={(e) => {
                    setActivity(e.target.value);
                  }}
                  className={styles.input}
                  type="text"
                  placeholder="Activité"
                />
              </>
            ) : null}
            <input
              id="ceoName"
              required
              onChange={(e) => {
                setCeoName(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Nom de contact"
            />
            <div className={styles.inputRow}>
              {submitted ? (
                <PhoneInput
                  value=""
                  inputStyle={{
                    width: "100%",
                    height: "37px",
                  }}
                  dropdownStyle={{ width: "300px" }}
                  inputProps={{
                    required: true,
                  }}
                  onChange={(number) => {
                    addPhone(0, number);
                  }}
                />
              ) : (
                <PhoneInput
                  value=""
                  inputStyle={{
                    width: "100%",
                    height: "37px",
                  }}
                  dropdownStyle={{ width: "300px" }}
                  inputProps={{
                    required: true,
                  }}
                  onChange={(number) => {
                    addPhone(0, number);
                  }}
                />
              )}
              <a
                className={styles.addBtn}
                onClick={() => {
                  addField();
                }}
              >
                <i className="fa-solid fa-plus" />
              </a>
            </div>
            {phoneFields.map((phone) => {
              if (phone.id !== 0)
                return (
                  <div key={phone.id} className={styles.inputRow}>
                    <PhoneInput
                      inputStyle={{
                        height: "37px",
                        width: "100%",
                        marginBottom: "0px",
                      }}
                      dropdownStyle={{ width: "300px" }}
                      inputProps={{
                        required: true,
                      }}
                      onChange={(number) => {
                        addPhone(phone.id, number);
                      }}
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
            <button className={styles.btn}>Ajouter</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Database;
