import React from "react";

export default function DataVisual(props) {
  const { data } = props;
  return (
    <div className="data-visual">
      <div
        className={
          data.lang === "ar"
            ? "mycontainer flex flex-center reverse"
            : "mycontainer flex flex-center"
        }
      >
        <div className="data-col-1">
          <h2>{data.dataVisualTitle}</h2>
          <img
            data-aos="flip-right"
            data-aos-duration="3000"
            src="/images/data.jpg"
            alt="Data"
          />
        </div>
        <div className="data-col-2">
          <div
            data-aos="fade-left"
            data-aos-delay="20"
            data-aos-duration="2000"
            className="data-block"
          >
            <h3>{data.dataTitle1}</h3>
            <p>{data.dataParag1}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
