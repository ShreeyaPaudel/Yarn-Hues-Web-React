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

      
      <section className="get-in-touch">
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
      </section>

     
      {/* <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section> */}



      {/* Footer */}
      <footer className="footer">
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
