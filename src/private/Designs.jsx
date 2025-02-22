import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import "../style/Designs.css";
import gallery1 from "../assets/earwarmerpurple.jpg";
import gallery2 from "../assets/Poncho.jpg";
import gallery3 from "../assets/hat.jpeg";
import gallery4 from "../assets/BabyHeadband.jpg";
import gallery5 from "../assets/muffler.jpg";
import gallery6 from "../assets/redwhitehat.jpg";
import gallery7 from "../assets/socks.jpg";
import gallery8 from "../assets/redhat.jpg";
import gallery9 from "../assets/ErawarmerRed.jpg";
import Logo from "../assets/Logo.png";

const designs = [
    { id: 1, image: gallery1, name: "Crochet EarWarmer" },
    { id: 2, image: gallery2, name: "Poncho" },
    { id: 3, image: gallery3, name: "Tight-Fitting Topi" },
    { id: 4, image: gallery4, name: "Baby Headband" },
    { id: 5, image: gallery5, name: "Muffler (Knitted/Crochet)" },
    { id: 6, image: gallery6, name: "Soft Yarn Topi" },
    { id: 7, image: gallery7, name: "Socks (Knitted/Crochet)" },
    { id: 8, image: gallery8, name: "Loose-Fitting Topi" },
    { id: 9, image: gallery9, name: "Knitted Earwarmer" }
];

const DesignsPage = () => {
    const navigate = useNavigate();
    const [showSettings, setShowSettings] = useState(false);

    return (
        <div className="designs-container">

<header className="navbar">
                <div className="logo">
                    <Link to="/dashboard">
                        <img src={Logo} alt="Yarn Hues Logo" />
                    </Link>
                </div>
                <nav className="nav-links">
                    <Link to="/dashboard">Home</Link>
                    <Link to="/designs">Shop</Link>
                    <Link to="/aboutus">About</Link>
                    <Link to="/contactus">Contact</Link>
                </nav>
            </header>
            
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


            <button className="settings-btn" onClick={() => navigate("/lastpage")}>⚙ Settings</button>


            <footer className="footer">
                <p>&copy; 2025 Yarn Hues. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default DesignsPage;
