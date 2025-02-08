import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
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

            {/* Main Dashboard Content */}
            <main className="dashboard">
                <div className="button-container">
                    <button className="action-btn" onClick={() => navigate("/designs")}>Designs</button>
                    <button className="profile-btn" onClick={() => navigate("/profile")}>Profile</button>
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
