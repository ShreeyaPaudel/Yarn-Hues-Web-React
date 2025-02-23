import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css"; // Import the CSS file
import yarnImage1 from "../assets/redgreenyarn.jpg"; // Replace with actual image paths
import yarnImage2 from "../assets/bluryarn.jpg";
import yarnImage3 from "../assets/mainpagebg.jpg";

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Home &gt; About Us</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="text-content">
          <h2>Crafting Sustainability with Yarn Hues</h2>
          <p>
            Yarn Hues is dedicated to providing high-quality, eco-friendly yarn
            crafted by talented home-based artisans. We emphasize sustainability,
            easy navigation, and a user-friendly experience, ensuring every crafter
            finds the perfect yarn for their projects.
          </p>
          <p>
            Our collection is carefully curated to support women-centric artisan
            communities, promoting fair trade and ethical craftsmanship. With an
            intuitive online platform and vibrant color themes, shopping for yarn
            has never been easier!
          </p>
          <Link to="/login">
            <button className="learn-more-btn">Discover More</button>
          </Link>
        </div>
        <div className="image-content">
          <img src={yarnImage1} alt="Yarn Hues Collection" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature">
          <h3>Sustainable & Eco-Friendly</h3>
          <p>Our yarns are sourced responsibly, ensuring minimal environmental impact.</p>
        </div>
        <div className="feature">
          <h3>Women-Centric Artisans</h3>
          <p>Empowering home-based artisans by bringing their craft to a global audience.</p>
        </div>
        <div className="feature">
          <h3>User-Friendly & Easy Navigation</h3>
          <p>Seamless browsing experience with intuitive design and rich color themes.</p>
        </div>
      </section>

      {/* Additional Content */}
      <section className="additional-info">
        <div className="info-text">
          <h2>Our Commitment to Quality</h2>
          <p>
            At Yarn Hues, we believe in blending tradition with modern technology.
            Our handpicked collections ensure durability, softness, and a variety of
            color palettes that inspire creativity.
          </p>
          <Link to="/contactus">
            <button className="learn-more-btn">Get in Touch</button>
          </Link>
        </div>
        <div className="info-images">
          <img src={yarnImage2} alt="Colorful Yarn" />
          <img src={yarnImage3} alt="Artisan at Work" />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
