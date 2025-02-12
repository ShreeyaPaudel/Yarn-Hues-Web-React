import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../style/Order.css";
import gallery1 from "../assets/earwarmerpurple.jpg";
import gallery2 from "../assets/Poncho.jpg";
import gallery3 from "../assets/hat.jpeg";
import gallery4 from "../assets/BabyHeadband.jpg";

const designs = {
    1: { image: gallery1, name: "Ear Warmer" },
    2: { image: gallery2, name: "Poncho" },
    3: { image: gallery3, name: "Hat" },
    4: { image: gallery4, name: "Baby Headband" },
};

const Order = () => {
    const { id } = useParams();
    const design = designs[id];

    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const [measurements, setMeasurements] = useState("");
    const [description, setDescription] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="order-container">
            <h1>Order: {design.name}</h1>
            <img src={design.image} alt={design.name} className="order-image" />

            <div className="order-form">
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />

                <label>Size:</label>
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />

                <label>Measurements:</label>
                <input type="text" value={measurements} onChange={(e) => setMeasurements(e.target.value)} />

                <label>Order Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                <label>Order Date:</label>
                <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} />

                <label>Payment Option:</label>
                <input type="text" value="Cash on Delivery" readOnly />

                <button onClick={() => alert("Added to Cart!")}>Add to Cart</button>
                <button onClick={() => setFavorite(!favorite)}>{favorite ? "❤️ Favorited" : "♡ Add to Favorites"}</button>
            </div>
        </div>
    );
};

export default Order;
