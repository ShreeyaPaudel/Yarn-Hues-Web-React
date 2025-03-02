import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginstyle.css"; // Import the CSS file

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve stored values from localStorage
        const storedEmail = localStorage.getItem("storedEmail");
        const storedPassword = localStorage.getItem("storedPassword");

        // Validate credentials
        if (username === storedEmail && password === storedPassword) {
            alert("Login successful!");
            navigate("/dashboard"); // Redirect to Dashboard
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="logo"></div>

                <div className="form-container">
                    <h3>Login Form</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            required
                        />
                        <br />

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                        <br />

                        <p>
                            Forgot Password?{" "}
                            <a href="PasswordRecovery.html">Click Here</a>
                        </p>

                        {/* Added "Login as Admin" below "Forgot Password?" */}
                        <p>
                            To Login as Admin,{" "}
                            <a href="/adminlogin">Click Here</a>
                        </p>

                        <button type="submit" className="btnL">Login</button>

                        <p>
                            Don't have an account?{" "}
                            <a href="/signup">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
