import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../style/OrderPage.css";
import gallery1 from "../assets/earwarmerpurple.jpg";
import gallery2 from "../assets/Poncho.jpg";
import gallery3 from "../assets/hat.jpeg";
import gallery4 from "../assets/BabyHeadband.jpg";

const designs = {
    1: { image: gallery1, name: "Ear Warmer", price: "$20" },
    2: { image: gallery2, name: "Poncho", price: "$50" },
    3: { image: gallery3, name: "Hat", price: "$15" },
    4: { image: gallery4, name: "Baby Headband", price: "$10" },
};

const Order = () => {
    const { id } = useParams();
    const design = designs[parseInt(id)];
    if (!design) return <h1>Design Not Found</h1>;

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [measurements, setMeasurements] = useState("");
    const [description, setDescription] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [showSettings, setShowSettings] = useState(false);


    return (
        <div className="order-container">
            <div className="order-details">
                <img src={design.image} alt={design.name} className="order-image" />
                <div className="order-info">
                    <h1>{design.name}</h1>
                    <p className="price">{design.price}</p>
                    <p className="description">Beautifully handcrafted {design.name} perfect for any occasion.</p>
                </div>
            </div>
            <div className="order-form">
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color" />

                <label>Size:</label>
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Enter size" />

                <label>Measurements:</label>
                <input type="text" value={measurements} onChange={(e) => setMeasurements(e.target.value)} placeholder="Enter measurements" />

                <label>Order Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe any customizations"></textarea>

                <label>Order Date:</label>
                <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />

                <label>Payment Option:</label>
                <input type="text" value="Cash on Delivery" readOnly />

                <div className="order-buttons">
                    <button className="cart-btn" onClick={() => alert("Added to Cart!")}>Add to Cart</button>
                    <button className="fav-btn" onClick={() => setFavorite(!favorite)}>{favorite ? "❤️ Favorited" : "♡ Add to Favorites"}</button>
                    <button className="checkout-btn" onClick={() => navigate("/checkout", { state: { design, color, size, measurements, description, orderDate } })}>
                        Checkout
                    </button>
                </div>
            </div>

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

export default Order;
