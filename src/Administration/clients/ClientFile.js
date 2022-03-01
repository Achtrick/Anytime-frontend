import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../Administration.module.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function ClientFile(props) {
  const history = useHistory();
  const [client, setClient] = useState({ phone: [{ phone: "" }] });
  let { id } = useParams();

  function logout() {
    axios.post("/logout");
    history.push("/");
  }

  useEffect(() => {
    axios.post("/getclient", { id: id }).then((res) => {
      setClient(res.data);
    });
  }, []);
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
            <Link className={styles.defaultBtn} to="/*time&*where/clients">
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
        <div className={styles.tableContainer}>
          <div className={styles.clientRow}>
            <div className={styles.col2Left}>
              <h3>
                <div className={styles.colRow}>
                  <div className={styles.colIcon}>
                    <FontAwesomeIcon icon={solid("building")} size="lg" />
                  </div>
                  <div className={styles.colData}>{client.companyName}</div>
                </div>
              </h3>
            </div>
            <div className={styles.col2Left}>
              <h3>
                <div className={styles.colRow}>
                  <div className={styles.colIcon}>
                    <FontAwesomeIcon icon={solid("user")} size="lg" />
                  </div>
                  <div className={styles.colData}>{client.contactName}</div>
                </div>
              </h3>
            </div>
          </div>
          <div className={styles.clientRow}>
            <div className={styles.col2Left}>
              <h3>
                <div className={styles.colRow}>
                  <div className={styles.colIcon}>
                    <FontAwesomeIcon icon={solid("chart-line")} size="lg" />
                  </div>
                  <div className={styles.colData}>{client.activity}</div>
                </div>
              </h3>
            </div>
            <div className={styles.col2Left}>
              <h3>
                <div className={styles.colRow}>
                  <div className={styles.colIcon}>
                    <FontAwesomeIcon icon={solid("location-dot")} size="lg" />
                  </div>
                  <div className={styles.colData}>{client.address}</div>
                </div>
              </h3>
            </div>
          </div>
          <div className={styles.clientRow}>
            <div className={styles.col2Left}>
              <h3>
                <div className={styles.colRow}>
                  <div className={styles.colIcon}>
                    <FontAwesomeIcon icon={solid("envelope")} size="lg" />
                  </div>
                  <div className={styles.colData}>{client.email}</div>
                </div>
              </h3>
            </div>
            <div className={styles.col2Left}>
              <h3>
                <div className={styles.colRow}>
                  <div className={styles.colIcon}>
                    <FontAwesomeIcon icon={solid("phone")} size="lg" />
                  </div>
                  <div className={styles.colData}>
                    {client.phone.map((row) => {
                      return (
                        <div className={styles.colRow}>{row.phone} &nbsp;</div>
                      );
                    })}
                  </div>
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientFile;
