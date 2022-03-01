import React, { useState, useEffect } from "react";
import styles from "../Administration.module.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Clients() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPages, setAllPages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clientsList, setClientsList] = useState([]);

  function logout() {
    axios.post("/logout");
    history.push("/");
  }

  function getClients(page) {
    axios
      .post("/getclients", { currentPage: page, searchTerm: searchTerm })
      .then((res) => {
        if (res.data === "ERROR") {
          alert("error !");
        } else {
          setLoading(false);
          setClientsList(res.data.clients);
          setAllPages(res.data.allPages);
        }
      });
  }

  function resetSearch() {
    document.getElementById("searchField").value = "";
    axios.post("/getclients").then((res) => {
      if (res.data === "ERROR") {
        alert("error !");
      } else {
        setClientsList(res.data.clients);
        setAllPages(res.data.allPages);
      }
    });
  }

  useEffect(() => {
    getClients(currentPage);
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
        <h1>Clients</h1>
        <div className={styles.tableContainer}>
          <div className={styles.searchField}>
            <form
              className={styles.form}
              onSubmit={(e) => {
                document.getElementById("searchField").disabled = true;
                document.getElementById("resetBtn").hidden = false;
                document.getElementById("searchBtn").hidden = true;
                e.preventDefault();
                getClients();
                setCurrentPage(1);
              }}
            >
              <input
                id="searchField"
                required
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className={styles.formInput}
                type="text"
                placeholder="User Name ..."
              />
              <button id="searchBtn" className="transparentBtn">
                <FontAwesomeIcon
                  icon={solid("search")}
                  size="lg"
                  color="black"
                />
              </button>
              <button
                type="button"
                onClick={() => {
                  resetSearch();
                  document.getElementById("searchField").disabled = false;
                  document.getElementById("resetBtn").hidden = true;
                  document.getElementById("searchBtn").hidden = false;
                }}
                hidden
                id="resetBtn"
                className="transparentBtn"
              >
                <FontAwesomeIcon icon={solid("undo")} size="lg" color="black" />
              </button>
            </form>
          </div>
          <div className={styles.blackHr}></div>
          {loading ? (
            <div
              style={{
                padding: "100px",
                fontSize: "large",
                fontWeight: "bold",
              }}
              className={styles.tableRow}
            >
              <div className={styles.spinner}>
                <FontAwesomeIcon icon={solid("spinner")} spin size="3x" />
              </div>
            </div>
          ) : (
            <div className={styles.tableRow}>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Nom Soc</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clientsList.map((client) => {
                    return (
                      <tr key={client._id}>
                        <td data-label="Nom soc">{client.companyName}</td>
                        <td data-label="Téléphone">
                          {client.phone.map((row) => {
                            return <div key={row.id}>{row.phone}</div>;
                          })}
                        </td>
                        <td data-label="Email">{client.email}</td>
                        <td data-label="Action">
                          <Link
                            to={`/*time&*where/clients/client/${client._id}`}
                            className="primaryBtn"
                          >
                            <FontAwesomeIcon icon={solid("file")} size="1x" />
                          </Link>
                          &nbsp;
                          <span
                            onClick={() => {
                              console.log(client._id);
                            }}
                            className="dangerBtn"
                          >
                            <FontAwesomeIcon icon={solid("trash")} size="1x" />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
          <div className="paginationContainer">
            {allPages.map((page) => {
              if (page === currentPage) {
                return (
                  <div
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      getClients(page);
                    }}
                    className="activePagination"
                  >
                    {page}
                  </div>
                );
              } else {
                return (
                  <div
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      getClients(page);
                    }}
                    className="pagination"
                  >
                    {page}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
