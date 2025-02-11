import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import yarnImage from "../assets/mainpagebg1.jpg"; // Ensure you have an aesthetic yarn image

const MainPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-section">
        <h1>Welcome to Yarn Hues!</h1>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="auth-btn login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="auth-btn signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>

      <div className="bottom-right-buttons">
        <Link to="/aboutus">
          <button className="bottom-btn">About Us</button>
        </Link>
        <Link to="/contactus">
          <button className="bottom-btn">Contact</button>
        </Link>
      </div>
      
      <div className="background-container">
        <img src={yarnImage} alt="Yarn Aesthetic" className="animated-bg" />
      </div>
    </div>
  );
};

export default MainPage;
