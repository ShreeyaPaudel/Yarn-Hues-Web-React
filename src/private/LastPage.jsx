import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "../style/LastPage.css";
import Logo from "../assets/Logo.png";
import SampleProduct from "../assets/earwarmerpurple.jpg"; // Sample product image
import { FaShoppingCart, FaHistory, FaHeart, FaSignOutAlt } from "react-icons/fa";

const LastPage = () => {
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate(); // Hook for navigation

    const openModal = (modal) => {
        if (modal === "logout") {
            navigate("/"); // Redirect to the main page
        } else {
            setActiveModal(modal);
        }
    };

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
                <button onClick={() => openModal("logout")}>
                    <FaSignOutAlt /> Logout
                </button>
            </div>

            {/* Modals */}
            {activeModal === "cart" && (
                <div className="modal">
                    <div className="modal-content cart">
                        <span className="close-btn" onClick={closeModal}>X</span>
                        <h2><FaShoppingCart /> Your Cart</h2>

                        {/* Sample Cart Product */}
                        <div className="cart-item">
                            <img src={SampleProduct} alt="Product" className="cart-img" />
                            <div className="cart-details">
                                <p><strong>Product Name:</strong> Crochet Earwarmer</p>
                                <p><strong>Price:</strong> Rs.400</p>
                                <p><strong>Quantity:</strong> 2</p>
                                <p><strong>Order Decription:</strong> March 20, 2025</p>
                                <p><strong>Address:</strong> Bhaisepati,Lalitpur</p>
                            </div>
                        </div>
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

                        {/* Sample Favorite Product */}
                        <div className="favorite-item">
                            <img src={SampleProduct} alt="Product" className="favorite-img" />
                            <div className="favorite-details">
                                <p><strong>Product Name:</strong> Crochet Earwarmer</p>
                                <p><strong>Price:</strong> Rs.400</p>
                            </div>
                        </div>
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
