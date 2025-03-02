import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Create a CSS file for styling

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is already logged in
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (isAdminLoggedIn === "true") {
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === "admin" && password === "admin") {
      localStorage.setItem("isAdminLoggedIn", "true"); // Store login state
      navigate("/admindashboard"); // Redirect to dashboard
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
