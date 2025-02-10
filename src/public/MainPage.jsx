import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import yarnImage from "../assets/mainpagebg1.jpg"; // Ensure you have an aesthetic yarn image


const AuthPage = () => {
  return (
    <div className="auth-container">
      
      <nav className="navbar">
        <div className="logo">
          <img src="logo" alt="Logo" />
        </div>
        <div className="navbar-items">
          <button className="text-btn">About Us</button>
          <button className="text-btn">Contact</button>
        </div>
      </nav>

      <div className="background-container">
        <img src={yarnImage} alt="Yarn Aesthetic" className="animated-bg" />
      </div>

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
    </div>
  );
};

export default AuthPage;