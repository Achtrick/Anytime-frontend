import React from "react";

function Terms(props) {
  return (
    <div className="about-page">
      <div style={{ height: "400px" }} className="about-intro">
        <img src="/images/about-bg.png" alt="About" />
        <div className="mycontainer">
          <div className="contact-block slideMeFromLeft">
            <h1>Anytime & Anywhere</h1>

            <div
              style={{
                marginTop: "25px",
                marginBottom: "25px",
                paddingLeft: "20px",
              }}
            >
              <h2>MF : 1723100F</h2>
              <h2>Siège social : Rue Ribat 4000 Sousse Tunisie</h2>
              <h2>Président : JERFEL Nizar</h2>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ paddingLeft: "10px" }}>
        Conditions d'utilisation du site Internet https://anytime4anywhere.com/
      </h2>
      <div
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          paddingLeft: "20px",
        }}
      >
        <p>
          Le site et chacun des éléments, y compris mais sans limitation les
          marques, les logos, icônes, infographies, photographies, qui le
          composent sont protégés au titre de la législation internationale de
          la propriété intellectuelle. Les contenus figurant sur le site sont la
          propriété d'OVH ou d’autres entreprises. Toute utilisation,
          reproduction ou représentation, par quelque procédé que ce soit, et
          sur quelque support que ce soit, de tout ou partie du site et/ou des
          éléments qui le composent n'est pas autorisée sans le consentement
          expresse d'OVH. La marque Anytime & Anywhere, le logo Anytime &
          Anywhere, et toutes les autres marques OVH qui figurent sur le présent
          site internet sont des marques enregistrées, dont le titulaire est la
          société OVH SAS. Toutes les autres marques qui figurent sur le présent
          site internet sont la propriété de leurs titulaires respectifs.
        </p>
      </div>
      <h2 style={{ paddingLeft: "10px" }}>Données personnelles</h2>
      <div
        style={{
          marginTop: "25px",
          marginBottom: "25px",
          paddingLeft: "20px",
        }}
      >
        <p>
          D'une façon générale, vous pouvez visiter notre site sur Internet sans
          avoir à décliner votre identité et à fournir des informations
          personnelles vous concernant. Cependant, nous pouvons parfois vous
          demander des informations. Par exemple, pour traiter une commande,
          établir une correspondance, fournir un abonnement ou soumettre une
          candidature à un poste. Nous pouvons compléter ces informations pour
          conclure une transaction ou offrir un meilleur service.
        </p>
      </div>

      <p></p>
    </div>
  );
}

export default Terms;
