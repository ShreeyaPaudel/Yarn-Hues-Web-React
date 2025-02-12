import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import yarnMain from "../assets/mainpagebg1.jpg";
import yarnTexture from "../assets/pinkyarn.jpg";
import yarnHandmade from "../assets/greenyarn.jpg";
import yarnColorful from "../assets/greyyarn.jpg";

const MainPage = () => {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Yarn Hues</h1>
        <p>
          Where every thread tells a story. We bring you sustainable, handcrafted yarns, 
          designed with love and care by home-based artisans. Discover the magic of colors, 
          textures, and eco-friendly craftsmanship.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="image-gallery">
        <img src={yarnMain} alt="Yarn Aesthetic" className="gallery-img" />
        <img src={yarnTexture} alt="Yarn Texture" className="gallery-img" />
        <img src={yarnHandmade} alt="Handmade Yarn" className="gallery-img" />
        <img src={yarnColorful} alt="Colorful Yarn" className="gallery-img" />
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <Link to="/login">
          <button className="cta-btn">Explore Our Collection</button>
        </Link>
      </div>

      {/* Authentication Section */}
      <div className="auth-section">
        <h2>Join the Yarn Hues Family</h2>
        <p>Sign up to get exclusive offers, tutorials, and more.</p>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="auth-btn login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="auth-btn signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-right-buttons">
        <Link to="/aboutus">
          <button className="bottom-btn">About Us</button>
        </Link>
        <Link to="/contactus">
          <button className="bottom-btn">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
