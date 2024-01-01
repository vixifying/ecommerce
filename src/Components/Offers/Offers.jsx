import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Ofers for You</h1>
        <p>Only On Best Selling Products</p>
        <button className="btn-main">Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
