import styles from "./Administration.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const history = useHistory();

  function logout() {
    axios.post("/logout");
    history.push("/");
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
          <div className={styles.col2}></div>

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
        <h1>Dashboard</h1>
        <div className={styles.formContainer}>
          <div className={styles.row}>
            <div className={styles.col30}>
              <Link to="/*time&*where/database">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/newsletter/database.png"
                  }
                />
                <br />
                Database
              </Link>
            </div>
            <div className={styles.col30}>
              <Link to="/*time&*where/clients">
                <img
                  src={process.env.PUBLIC_URL + "/images/newsletter/crm.png"}
                />
                <br />
                Clients List
              </Link>
            </div>
            <div className={styles.col30}>
              <Link to="/*time&*where/mailer">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/newsletter/newsletter.png"
                  }
                />
                <br />
                News Letter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
