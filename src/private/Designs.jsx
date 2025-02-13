import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Designs.css";
import gallery1 from "../assets/earwarmerpurple.jpg";
import gallery2 from "../assets/Poncho.jpg";
import gallery3 from "../assets/hat.jpeg";
import gallery4 from "../assets/BabyHeadband.jpg";

const designs = [
    { id: 1, image: gallery1, name: "Ear Warmer" },
    { id: 2, image: gallery2, name: "Poncho" },
    { id: 3, image: gallery3, name: "Topi" },
    { id: 4, image: gallery4, name: "Baby Headband" },
];

const DesignsPage = () => {
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="designs-container">
            <header className="hero-section">
                <h1>Exclusive Handmade Designs</h1>
                <p>Discover unique, handcrafted yarn products tailored just for you.</p>
            </header>

            <div className="designs-grid">
                {designs.map((design) => (
                    <div key={design.id} className="design-card">
                        <img src={design.image} alt={design.name} className="design-image" />
                        <h3 className="design-title">{design.name}</h3>
                        <Link to={`/order/${design.id}`} className="order-btn">Order Now</Link>
                    </div>
                ))}
            </div>

            {/* Settings Button */}
            <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>
                ⚙️ Settings
            </button>

            {showSettings && (
                <div className="settings-menu">
                    <button className="settings-option">❤️ Favorites</button>
                    <button className="settings-option">🚪 Logout</button>
                </div>
            )}

            <footer className="footer">
                <p>&copy; 2025 Yarn Hues. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default DesignsPage;
