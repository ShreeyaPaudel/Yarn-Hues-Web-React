import React, { useState } from "react";
import {Link, useNavigate, useParams } from "react-router-dom";
import "../style/OrderPage.css";
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

const designs = {
    1: { image: gallery1, name: "Crochet Earwarmer", price: "Rs.400" },
    2: { image: gallery2, name: "Poncho", price: "Rs.3000" },
    3: { image: gallery3, name: "Tight-Fitting Topi", price: "Rs.850" },
    4: { image: gallery4, name: "Baby Headband", price: "Rs.500" },
    5: { image: gallery5, name: "Muffler (Knitted/Crochet)", price: "Rs.2000" },
    6: { image: gallery6, name: "Soft Yarn Topi", price: "Rs.1500" },
    7: { image: gallery7, name: "Socks (Knitted/Crochet)", price: "Rs.1000" },
    8: { image: gallery8, name: "Loose-Fitting Topi", price: "950" },
    9: { image: gallery9, name: "Knitted Earwarmer", price: "Rs.400" },
};

const Order = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    
    const design = designs[parseInt(id)];
    if (!design) return <h1>Design Not Found</h1>;

    const [color, setColor] = useState("");
    const [pattern, setPattern] = useState('');
    const [size, setSize] = useState("");
    const [measurements, setMeasurements] = useState("");
    const [description, setDescription] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [favorite, setFavorite] = useState(false);
    const [showSettings, setShowSettings] = useState(false);


    return (
        <div className="order-container">

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

            <div className="order-details">
                <img src={design.image} alt={design.name} className="order-image" />
                <div className="order-info">
                    <h1>{design.name}</h1>
                    <p className="price">{design.price}</p>
                    <p className="description">Beautifully handcrafted {design.name} perfect and comfortable for you.</p>
                </div>
            </div>
            <div className="order-form">
                <label>Color:</label>
                <input type="text" required value={color} onChange={(e) => setColor(e.target.value)} placeholder="Enter color" />

                <label>Pattern (crochet/knitted):</label>
                <input type="text" required value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="Enter pattern" />

                <label>Size:</label>
                <input type="text" required value={size} onChange={(e) => setSize(e.target.value)} placeholder="Enter size" />

                <label>Measurements:</label>
                <input type="text" value={measurements} onChange={(e) => setMeasurements(e.target.value)} placeholder="Enter measurements: length, width and other necessary measuremts according to the item selected" />

                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address in detail" />


                <label>Order Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe any customizations you want in detail"></textarea>


        
                <label>Payment Option:</label>
                <input type="text" value="Cash on Delivery" readOnly />

                <div className="order-buttons">
                    <button className="cart-btn" onClick={() => alert("Added to Cart!")}>Add to Cart</button>
                    <button className="fav-btn" onClick={() => setFavorite(!favorite)}>{favorite ? "❤️ Favorited" : "♡ Add to Favorites"}</button>
                    <button className="checkout-btn" onClick={() => navigate("/checkoutpage", { state: { design, color, size, measurements, description, orderDate } })}>
                        Checkout
                    </button>
                </div>
            </div>

            {/* Settings Button */}
            <button className="settings-btn" onClick={() => navigate("/lastpage")}>⚙ Settings</button>

            <footer className="footer">
                <p>&copy; 2025 Yarn Hues. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Order;
