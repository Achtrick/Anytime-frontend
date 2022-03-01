import React from "react";
import { Link } from "react-router-dom";

export default function Intro(props) {
  const { data } = props;

  return (
    <div className="intro-block">
      <video autoPlay={true} muted={true} loop={true}>
        <source src="/images/anytime.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={
          data.lang === "ar" ? "mycontainer flex reverse" : "mycontainer flex"
        }
      >
        <div className="col-2 desc">
          <h1 className="slideMeFromTop">
            Our{" "}
            <a
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "55px",
              }}
            >
              job
            </a>{" "}
            is to valorate
            <a
              style={{
                textTransform: "uppercase",
                marginLeft: "5px",
                fontWeight: "bold",
                fontSize: "55px",
              }}
            >
              Yours
            </a>
          </h1>
          <p className="slideMeFromLeft">{data.intro}</p>
          <Link to="/about">
            <button className="slideMeFromDown">{data.readMore}</button>
          </Link>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
