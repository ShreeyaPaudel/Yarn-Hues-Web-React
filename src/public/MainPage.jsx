import React from "react";
import { Link } from "react-router-dom";
import "./AuthPage.css"; // Import the CSS file

const AuthPage = () => {
  return (
    <div className="auth-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
        <div className="navbar-items">
          <button className="text-btn">Home</button>
          <button className="text-btn">About</button>
          <button className="text-btn">Contact</button>
        </div>
      </nav>

      {/* Auth Section */}
      <div className="auth-section">
        <h1>Welcome</h1>
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
