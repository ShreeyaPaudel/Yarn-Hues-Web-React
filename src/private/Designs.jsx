import React, { useState } from "react";
import "../style/Designs.css";

const Designs = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const handleNotificationToggle = () => {
    setShowNotifications(!showNotifications);
  };

  const designItems = [
    { name: "Earwarmer", className: "Earwarmer-btn" },
    { name: "Muffler", className: "Muffler-btn" },
    { name: "Poncho", className: "Poncho-btn" },
    { name: "Hat", className: "Hat-btn" },
    { name: "Socks", className: "Socks-btn" },
  ];

  return (
    <div>
      
      {/* Navbar */}
      <header className="navbar">
                <div className="logo">
                    <img src="../assets/Logo.png" alt="Logo" />
                </div>
                <div className="navbar-items">
                    <button className="text-btn" onClick={() => alert("No new notifications!")}>Notifications</button>
                    <button className="text-btn" onClick={() => alert("Settings page coming soon!")}>Settings</button>
                    <button className="text-btn" onClick={() => alert("About Us coming soon!")}>About Us</button>
                </div>
            </header>

      

      {/* Main Section */}
      <main className="design-page">
      
        <div className="design-buttons">
          {designItems.map((item, index) => (
            <button
              key={index}
              className={`design-btn ${item.className}`}  // Dynamically add the class
              onClick={() => alert(`You selected the ${item.name} design. Further details coming soon!`)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </main>

      <footer className="footer">
                <h3>Contact Us</h3>
                <p>Email: <a href="mailto:yarnhues12@gmail.com">yarnhues12@gmail.com</a></p>
                <p>Phone: <a href="tel:+9779841821787">+977 9841821787</a></p>
                <p>Location: Lalitpur</p>
                <div className="social-icons">
                    <a href="#">Facebook</a> | 
                    <a href="#">Tiktok</a> | 
                    <a href="#">Instagram</a>
                </div>
            </footer>

     

      

      
    </div>
  );
};

export default Designs;
