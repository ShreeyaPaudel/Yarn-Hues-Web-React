import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/CheckoutPage.css";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderData = location.state;

if (!orderData) {
    return (
        <div className="checkout-container">
            <h1>No Order Details Found</h1>
            <button onClick={() => navigate("/designs")}>Go Back</button>
        </div>
    );
}

const { design, color, size, measurements, description, orderDate } = orderData;


    const [showSettings, setShowSettings] = useState(false);

    if (!design) return <h1>No Order Details Found</h1>;

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>

            <div className="order-summary">
                <img src={design.image} alt={design.name} className="summary-image" />
                <div className="summary-details">
                    <h2>{design.name}</h2>
                    <p><strong>Price:</strong> {design.price}</p>
                    <p><strong>Color:</strong> {color}</p>
                    <p><strong>Size:</strong> {size}</p>
                    <p><strong>Measurements:</strong> {measurements}</p>
                    <p><strong>Order Date:</strong> {orderDate}</p>
                    <p><strong>Additional Notes:</strong> {description}</p>
                </div>
            </div>

            <div className="payment-section">
                <h3>Payment Info</h3>
                <p>Payment Method: <strong>Cash on Delivery</strong></p>
            </div>

            <button className="confirm-btn" onClick={() => { 
                alert("Order Placed!"); 
                navigate("/dashboard");
            }}>Confirm Order</button>

            {/* Settings Button */}
            <button className="settings-btn" onClick={() => setShowSettings(!showSettings)}>⚙ Settings</button>
            {showSettings && (
                <div className="settings-menu">
                    <ul>
                        <li><a href="/cart">View Cart</a></li>
                        <li><a href="/orders">Order History</a></li>
                        <li><a href="/favorites">Favorites</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            )}

            <footer className="footer">
                <p>&copy; 2025 Yarn Hues. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Checkout;
