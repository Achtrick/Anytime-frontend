import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Administration.module.css";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function EditClient() {
  let { id } = useParams();
  const [client, setClient] = useState({});
  const [companyName, setCompanyName] = useState("");
  const [activity, setActivity] = useState("");
  const [ceoName, setCeoName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneFields, setPhoneFields] = useState([{ id: 0, phone: null }]);
  const [otherActivity, setOtherActivity] = useState(false);

  useEffect(() => {
    axios.post("/getclient", { id: id }).then((res) => {
      setClient(res.data);
      setPhoneFields(res.data.phone);
    });
  }, []);

  function success() {
    document.getElementById("companyName").value = "";
    document.getElementById("activity").value = "";
    document.getElementById("ceoName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";

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

  function EditClient(e) {
    e.preventDefault();
    axios
      .post("/EditClient", {
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
        <h1>Modifier le client</h1>
        <h2>{client.ceoName}</h2>
        <div className={styles.formContainer}>
          <form onSubmit={EditClient}>
            <input
              value={client.companyName}
              id="companyName"
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Nom de la société"
            />
            <select
              placeholder="Activité"
              id="activity"
              style={{ cursor: "pointer" }}
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
            >
              <option value={""}>Activité</option>
              <option
                selected={client.activity === "Industrie"}
                value="Industrie"
              >
                Industrie
              </option>
              <option
                selected={client.activity === "Commerce"}
                value="Commerce"
              >
                Commerce
              </option>
              <option
                selected={client.activity === "Agricole"}
                value="Agricole"
              >
                Agricole
              </option>
              <option selected={client.activity === "Santé"} value="Santé">
                Santé
              </option>
              <option
                selected={client.activity === "Informatique"}
                value="Informatique"
              >
                Informatique
              </option>
              <option selected={client.activity === "Trading"} value="Trading">
                Trading
              </option>
              <option selected={client.activity === "Sport"} value="Sport">
                Sport
              </option>
              <option
                selected={client.activity === "Artistique"}
                value="Artistique"
              >
                Artistique
              </option>
              <option
                selected={client.activity === "Juridique"}
                value="Juridique"
              >
                Juridique
              </option>
              <option
                selected={client.activity === "Education"}
                value="Education"
              >
                Education
              </option>
              <option
                selected={client.activity === "Transport"}
                value="Transport"
              >
                Transport
              </option>
              <option
                selected={client.activity === "Communication"}
                value="Communication"
              >
                Communication
              </option>
              <option
                selected={
                  ![
                    "Commerce",
                    "Communication",
                    "Transport",
                    "Education",
                    "Juridique",
                    "Artistique",
                    "Sport",
                    "Trading",
                    "Informatique",
                    "Agricole",
                    "Santé",
                    "Industrie",
                  ].includes(client.activity)
                }
                value="Autres"
              >
                Autres
              </option>
            </select>
            {otherActivity ? (
              <>
                <input
                  id="other-activity"
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
              value={client.ceoName}
              id="ceoName"
              onChange={(e) => {
                setCeoName(e.target.value);
              }}
              className={styles.input}
              type="text"
              placeholder="Nom de contact"
            />
            <div className={styles.inputRow}>
              <PhoneInput
                value={phoneFields[0].phone}
                inputStyle={{
                  width: "100%",
                  height: "37px",
                }}
                dropdownStyle={{ width: "300px" }}
                onChange={(number) => {
                  addPhone(0, number);
                }}
              />
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
                      value={phone.phone}
                      inputStyle={{
                        height: "37px",
                        width: "100%",
                        marginBottom: "0px",
                      }}
                      dropdownStyle={{ width: "300px" }}
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
              value={client.email}
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={styles.input}
              type="email"
              placeholder="Email"
            />
            <input
              value={client.address}
              id="address"
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
            <button className={styles.btn}>Confirmer</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditClient;
