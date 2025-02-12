import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get in Touch with Yarn Hues</h1>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="google-maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d385.0464507209972!2d85.29853642998637!3d27.65827446315121!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2snp!4v1739275163961!5m2!1sen!2snp" 
      width="600" 
      height="450" 
      style={{border:0}} 
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="get-in-touch">
          <h2>We’d Love to Hear From You!</h2>
          <p>Whether you have questions or feedback, feel free to reach out.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <span>+977 9813780846</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>shreeya.paudel.8e@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Monday - Friday, 9 AM - 6 PM</span>
            </div>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.instagram.com/yarnhues" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/yarnhues" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.pinterest.com/yarnhues" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <div className="navigation-links">
          <a href="/aboutus">About Us</a>
          <a href="/mainpage">Shop</a>
          <a href="/faq">FAQ</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
