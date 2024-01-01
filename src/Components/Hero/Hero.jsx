import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="btn-main">
          <div>Latest Collections</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
