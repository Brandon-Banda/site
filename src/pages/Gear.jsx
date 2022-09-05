import React from 'react';
import Images from "../Images";
import "./Gear.scss";

function Gear() {
    return (
      <div className='container'>
        {Images.map(({ img, idx, title, desc, link, type }) => (
          <div className='imgContainer'>
            <h4> {title} </h4>
            <img key={idx} src={img} alt='image' />
            <p> {desc} </p>
            <a href={link} class='button' target='_blank' rel='noreferrer'>
              Check price
            </a>
          </div>
        ))}
      </div>
    );
  }
  
  export default Gear;