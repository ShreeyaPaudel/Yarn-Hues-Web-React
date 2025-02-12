import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Dashboard.css";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            {/* Navbar */}
            <header className="navbar">
                <div className="logo">
                    <img src="../assets/Logo.png" alt="Logo" />
                </div>
                <nav className="navbar-items">
                    <button className="text-btn" onClick={() => alert("No new notifications!")}>Notifications</button>
                    <button className="text-btn" onClick={() => alert("Settings page coming soon!")}>Settings</button>
                    <button className="text-btn" onClick={() => navigate("/about")}>About Us</button>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="hero-section">
                <h1>Exclusive Discounts on Yarn Collections</h1>
                <p>Get up to 50% off on our premium hand-crafted yarns.</p>
                <button className="shop-now-btn">Shop Now</button>
            </section>

            {/* Featured Categories */}
            <main className="dashboard">
                <h2 className="section-title">New Arrivals</h2>
                <div className="category-container">
                    <div className="category-card" onClick={() => navigate("/designs")}>
                        <img src="../assets/designsBtnpic.jpg" alt="Designs" />
                        <p>Explore Designs</p>
                    </div>
                    <div className="category-card" onClick={() => navigate("/profile")}>
                        <img src="../assets/profileBtnpic.jpg" alt="Profile" />
                        <p>My Profile</p>
                    </div>
                </div>
            </main>

            {/* Footer */}
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

export default Dashboard;
