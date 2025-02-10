import React, { useState } from "react";
import "./Loginstyle.css"; // Import the CSS file

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve stored values from localStorage
        const storedEmail = localStorage.getItem("storedEmail");
        const storedPassword = localStorage.getItem("storedPassword");

        // Validate credentials
        if (username === storedEmail && password === storedPassword) {
            alert("Login successful!");
            window.location.href = "Dashboard.html"; // Redirect to Dashboard
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
