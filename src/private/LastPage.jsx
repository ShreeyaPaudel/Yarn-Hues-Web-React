import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/LastPage.css";
import Logo from "../assets/Logo.png";
import { FaShoppingCart, FaHistory, FaHeart, FaSignOutAlt } from "react-icons/fa";

const LastPage = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (modal) => setActiveModal(modal);
    const closeModal = () => setActiveModal(null);

    return (
        <div className="modals-container">
            {/* Navbar */}
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

            {/* Buttons */}
            <div className="button-container">
                <button onClick={() => openModal("cart")}>
                    <FaShoppingCart /> View Cart
                </button>
                <button onClick={() => openModal("orderHistory")}>
                    <FaHistory /> Order History
                </button>
                <button onClick={() => openModal("favorites")}>
                    <FaHeart /> Favorites
                </button>
                <button onClick={() => openModal("settings")}>
                    <FaSignOutAlt /> Settings
                </button>
            </div>

            {/* Modals */}
            {activeModal === "cart" && (
                <div className="modal">
                    <div className="modal-content cart">
                        <span className="close-btn" onClick={closeModal}>X</span>
                        <h2><FaShoppingCart /> Your Cart</h2>
                        <p>Cart items will be displayed here.</p>
                    </div>
                </div>
            )}

            {activeModal === "orderHistory" && (
                <div className="modal">
                    <div className="modal-content order-history">
                        <span className="close-btn" onClick={closeModal}>X</span>
                        <h2><FaHistory /> Order History</h2>
                        <p>Your previous orders appear here.</p>
                    </div>
                </div>
            )}

            {activeModal === "favorites" && (
                <div className="modal">
                    <div className="modal-content favorites">
                        <span className="close-btn" onClick={closeModal}>X</span>
                        <h2><FaHeart /> Favorites</h2>
                        <p>Saved items will be listed here.</p>
                    </div>
                </div>
            )}

            {activeModal === "Logout" && (
                <div className="modal">
                    <div className="modal-content settings">
                        <span className="close-btn" onClick={closeModal}>X</span>
                        <h2><FaSignOutAlt /> Settings</h2>
                        <ul>
                            <li><FaShoppingCart /> <a href="/cart">View Cart</a></li>
                            <li><FaHistory /> <a href="/orders">Order History</a></li>
                            <li><FaHeart /> <a href="/favorites">Favorites</a></li>
                            <li><FaSignOutAlt /> <a href="/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Yarn Hues. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LastPage;
