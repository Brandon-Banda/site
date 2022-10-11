import React from "react";
import Images, { outdated } from "../Images";
import "./Gear.scss";

function Gear() {
  return (
    <div className="container">
      {Images.map(({ img, idx, title, desc, link, type }) => (
        <div className="imgContainer">
          <h4> {title} </h4>
          <img key={idx} src={img} alt="imagee" />
          <p> {desc} </p>
          <a href={link} class="button" target="_blank" rel="noreferrer">
            Check price
          </a>
        </div>
      ))}
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />

          <div>
            <p
              style={{
                width: "150px",
                textAlign: "center",
                fontSize: "26px",
                color: "white",
              }}
            >
              Outdated
            </p>
          </div>

          <div style={{ flex: 1, height: "1px", backgroundColor: "black" }} />
        </div>
      </div>

      {outdated.map(({ img, idx, title, desc, link, type }) => (
        <div className="imgContainer">
          <h4> {title} </h4>
          <img key={idx} src={img} alt="imagee" />
          <p> {desc} </p>
          <a href={link} class="button" target="_blank" rel="noreferrer">
            Check price
          </a>
        </div>
      ))}
    </div>
  );
}

export default Gear;
