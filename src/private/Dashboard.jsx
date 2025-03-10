import React, { useState } from "react"; 
import { Link, useNavigate} from "react-router-dom";
import "../style/Dashboard.css";
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
import collage from "../assets/collage.png";
import yarnshop from "../assets/yarnshop.jpg"



const Dashboard = () => {
    const navigate = useNavigate();

    const [showSettings, setShowSettings] = useState(false);


    return (
        <div className="dashboard-container">
            {/* Navbar */}
            <header className="navbar">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <nav className="nav-links">
                    
                    <Link to="/designs">Shop</Link>
                    <Link to="/aboutus">About</Link>
                    <Link to="/contactus">Contact</Link>
                    <Link to= "/editprofile">Profile</Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <h1>New Arrivals</h1>
                <p>Discover our latest collections</p>
                <Link to="/designs">
                    <button>Shop Now</button>
                </Link>
               
            </section>

            {/* Collections */}
            <section className="collections">
            <Link to="/designs">
                <div className="collection-card">
                    <img src={collage} alt="New Collection" />
                    <h3>New Collections</h3>
                </div>
            </Link>

            </section>

            {/* Gallery */}
            <section className="gallery">
                <img src={gallery1} alt="Gallery Image 1" />
                <img src={gallery2} alt="Gallery Image 2" />
                <img src={gallery3} alt="Gallery Image 3" />
                <img src={gallery4} alt="Gallery Image 4" />
                <img src={gallery5} alt="Gallery Image 5" />
                <img src={gallery6} alt="Gallery Image 6" />
                <img src={gallery7} alt="Gallery Image 7" />
                <img src={gallery8} alt="Gallery Image 8" />
                <img src={gallery9} alt="Gallery Image 9" />
            </section>

            {/* Shopify Theme */}
            <section className="shopify-theme">
                <img src={yarnshop} alt="Shopify Theme Preview" />
            </section>

            <button className="settings-btn" onClick={() => navigate("/lastpage")}>⚙ Settings</button>
            
           

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Yarn Hues. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
