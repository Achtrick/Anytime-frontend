import React from "react";

export default function About(props) {
  const { data } = props;
  return (
    <div className="about-page">
      <div className="about-intro">
        <img src="/images/about-bg.png" alt="About" />
        <div className="mycontainer">
          <div className="contact-block slideMeFromLeft">
            <h1 className={data.lang === "ar" ? "reverse-heading" : ""}>
              Anytime & Anywhere
            </h1>
            <p className={data.lang === "ar" ? "reverse-parag" : ""}>
              {data.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
