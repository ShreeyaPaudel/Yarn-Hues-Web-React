import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/EditProfile.css";

const ProfilePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/120");

    const navigate = useNavigate();

    // Load saved data from localStorage
    useEffect(() => {
        setName(localStorage.getItem("name") || "John Doe");
        setEmail(localStorage.getItem("email") || "johndoe@example.com");
        setAddress(localStorage.getItem("address") || "123 Main Street, Cityville");
        setProfileImage(localStorage.getItem("profileImage") || "https://via.placeholder.com/120");
    }, []);

    // Handle profile image upload
    const handleImageUpload = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            setProfileImage(reader.result);
            localStorage.setItem("profileImage", reader.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    // Validate and save profile data
    const handleSave = () => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        alert("Profile updated successfully!");
    };

    // Navigate back
    const handleBack = () => {
        navigate(-1); // Moves one step back in history
    };

    return (
        <div className="profile-container">
            <h1>My Profile</h1>
            <div className="profile-picture">
                <img src={profileImage} alt="Profile" id="profile-img" />
                <input type="file" accept="image/*" id="image-upload" onChange={handleImageUpload} />
            </div>
            <div className="profile-details">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="address">Address</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button onClick={handleSave}>Save Profile</button>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default ProfilePage;
