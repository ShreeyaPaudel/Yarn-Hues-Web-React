import React, { useState } from 'react';
import './SignupStyle.css'; // Assuming the CSS is still applicable

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.trim())) {
            alert("Please enter a valid email address.");
            return;
        }

        // Validate password strength
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(password.trim())) {
            alert("Password must be at least 8 characters long, including uppercase, lowercase, a number, and a special character.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Save user data to local storage
        localStorage.setItem("storedFullName", fullName.trim());
        localStorage.setItem("storedDOB", dob.trim());
        localStorage.setItem("storedEmail", email.trim());
        localStorage.setItem("storedAddress", address.trim());
        localStorage.setItem("storedPassword", password.trim());

        alert("Signup successful! You can now log in.");

        // Redirect to the dashboard
        window.location.href = "/dashboard"; // Replace with the actual file path or use React Router for routing
    };

    return (
        <div className="main">
            <div className="wrap">
                <div className="content">
                    <div className="logo"></div>
                    <div id="form" className="content">
                        <h1>SignUp to YarnHues</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="text"
                                placeholder="Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <br />
                            <button type="submit" className="btn" id="btn">
                                SignUp
                            </button>
                        </form>
                        <br />
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
