import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import * as myData from "./data.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";
import MarketingStrategy from "./components/ServicesPages/MarketingStrategy";
import CommercialProspecting from "./components/ServicesPages/CommercialProspecting";
import DigitalMarketing from "./components/ServicesPages/DigitalMarketing";
import GraphicDesign from "./components/ServicesPages/GraphicDesign";
import Development from "./components/ServicesPages/Development";
import Quiz from "./components/Quiz";
import JoinUs from "./components/JoinUs";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./components/Terms";
import Mailing from "./Administration/mailing/Mailing";
import Login from "./Administration/auth/Login";
import { AppContext } from "./Context/AppContext";
import axios from "axios";
import { getUrl } from "./config";
// import Signup from "./Administration/auth/Signup";
import AddClients from "./Administration/clients/AddClients";
import EditClient from "./Administration/clients/EditClient";
import Clients from "./Administration/clients/Clients";
import ClientFile from "./Administration/clients/ClientFile";
import NavBarAdmin from "./Administration/NavBarAdmin";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = getUrl();

function App() {
  const [user, setUser] = useState({});
  const [dialog, setDialog] = useState(false);

  useEffect(() => {
    axios.get("/login").then((res) => {
      setUser(res.data);
    });
  }, []);

  AOS.init({
    delay: 20,
    duration: 800,
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  const [selectedLang, setSelectedLang] = useState("en");
  const [data, setData] = useState(myData.en);
  const [showListLangs, setShowListLangs] = useState(false);
  const bodyClasses = document.getElementsByTagName("body")[0].classList;

  const selectLang = (lang) => {
    setSelectedLang(lang);
    if (lang === "al") {
      setData(myData.al);
      bodyClasses.remove("arabic");
    } else if (lang === "fr") {
      setData(myData.fr);
      bodyClasses.remove("arabic");
    } else if (lang === "ar") {
      setData(myData.ar);
      bodyClasses.add("arabic");
    } else {
      setData(myData.en);
      bodyClasses.remove("arabic");
    }
    setShowListLangs(false);
  };

  window.onscroll = function (e) {
    const header = document.getElementById("header");

    if (this.scrollY < 5) {
      if (header) {
        header.classList.remove("shadow");
      }
    } else {
      if (header) {
        header.classList.add("shadow");
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        dialog,
        setDialog,
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <div className="App">
          {user.connected ? (
            <>
              <NavBarAdmin>
                <Switch>
                  <Route path="/*time&*where/newsletter" exact={true}>
                    <Mailing />
                  </Route>
                  <Route path="/*time&*where/addclients" exact={true}>
                    <AddClients />
                  </Route>
                  <Route path="/*time&*where/clients/editclient/:id">
                    <EditClient />
                  </Route>
                  <Route path="/*time&*where/clientslist" exact={true}>
                    <Clients />
                  </Route>
                  <Route path="/*time&*where/clients/client/:id">
                    <ClientFile />
                  </Route>
                  <Route path="/*time&*where" exact={true}>
                    <Redirect to="/*time&*where/clientslist" />
                  </Route>
                  <Route component={NotFound} />
                </Switch>
              </NavBarAdmin>
            </>
          ) : (
            <>
              <Header
                data={data}
                onSelectLang={(lang) => selectLang(lang)}
                selectedLang={selectedLang}
                showListLangs={showListLangs}
                onShowListLang={(e) => setShowListLangs(!showListLangs)}
              />
              <Switch>
                <Route path="/" exact={true}>
                  <Home data={data} />
                </Route>
                <Route path="/*time&*where" exact={true}>
                  <Login />
                </Route>
                {/* <Route path="/signup" exact={true}>
              <Signup />
            </Route> */}
                <Route path="/about" exact={true}>
                  <About data={data} />
                </Route>
                <Route path="/portfolio" exact={true}>
                  <Portfolio data={data} />
                </Route>
                <Route path="/contact" exact={true}>
                  <Contact data={data} />
                </Route>
                <Route path="/services/strategy-marketing" exact={true}>
                  <MarketingStrategy data={data} />
                </Route>
                <Route path="/services/commercial-prospecting" exact={true}>
                  <CommercialProspecting data={data} />
                </Route>
                <Route path="/services/marketing-digital" exact={true}>
                  <DigitalMarketing data={data} />
                </Route>
                <Route path="/services/graphic-design" exact={true}>
                  <GraphicDesign data={data} />
                </Route>
                <Route path="/services/developement" exact={true}>
                  <Development data={data} />
                </Route>
                <Route path="/quote-quiz" exact={true}>
                  <Quiz data={data} />
                </Route>
                <Route path="/joinus" exact={true}>
                  <JoinUs data={data} />
                </Route>
                <Route path="/terms-and-conditions" exact={true}>
                  <Terms />
                </Route>
                <Route component={NotFound} />
              </Switch>
              <Footer data={data} />
              {user.connected ? (
                <></>
              ) : (
                <>
                  <div className="join-btn">
                    <Link to="/joinus">
                      <img src="/images/join.png" alt="Join" />
                      <div className="join-title">Join Us</div>
                    </Link>
                  </div>
                  <FloatingWhatsApp
                    size="50px"
                    phone="+21654563326"
                    popupMessage={data.whatsappMessage}
                    headerColor="#25D366"
                    autoOpenTimeout="1000000"
                    zIndex="999"
                  />
                </>
              )}
            </>
          )}
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
