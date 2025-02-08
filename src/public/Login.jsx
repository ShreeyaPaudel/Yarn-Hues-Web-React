import React, { useState } from "react";
import "./Loginstyle.css"; // Import your CSS file

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
            // Optionally, redirect to another page
            window.location.href = "Dashboard.html"; // Replace with your desired page
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="main">
            <div className="wrap">
                <div className="content">
                    <div className="logo"></div>

                    <div id="form" className="content">
                        <h3>Login Form</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="username"
                                required
                            />
                            <br />

                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="password"
                                required
                            />
                            <br />

                            <p>
                                Forgot Password?{" "}
                                <a href="PasswordRecovery.html">Click Here</a>
                            </p>

                            <button type="submit" className="btnL">
                                Login
                            </button>

                            <br />
                            <p>
                                Don't have an account?{" "}
                                <a href="/signup">SignUp</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
