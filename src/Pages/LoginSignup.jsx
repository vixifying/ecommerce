import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="Your name" />
          <input type="email" name="email" placeholder="Email" id="" />
          <input type="password" name="pasword" placeholder="Password" id="" />
        </div>
        <button className="btn-main">Continue</button>
        <p className="loginSignup-login">
          Already have an account? <span>Login Here</span>
          <div className="loginSignup-agree">
            <label>
              <input type="checkbox" name="" id="" />
              <p>By continuing I agree to the terms and privacy policy.</p>
            </label>
          </div>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
