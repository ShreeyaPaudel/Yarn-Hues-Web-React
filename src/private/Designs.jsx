import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/Designs.css";
import gallery1 from "../assets/earwarmerpurple.jpg";
import gallery2 from "../assets/Poncho.jpg";
import gallery3 from "../assets/hat.jpeg";
import gallery4 from "../assets/BabyHeadband.jpg";

const Designs = () => {
    const navigate = useNavigate();

    const designs = [
        { id: 1, image: gallery1, name: "Ear Warmer" },
        { id: 2, image: gallery2, name: "Poncho" },
        { id: 3, image: gallery3, name: "Hat" },
        { id: 4, image: gallery4, name: "Baby Headband" },
    ];

    return (
        <div className="designs-container">
            <h1>Choose a Design</h1>
            <div className="designs-gallery">
                {designs.map((design) => (
                    <button key={design.id} className="design-button" onClick={() => navigate(`/order/${design.id}`)}>
                        <img src={design.image} alt={design.name} />
                        <p>{design.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Designs;
