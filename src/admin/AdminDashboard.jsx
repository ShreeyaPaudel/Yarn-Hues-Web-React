import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./AdminDashboard.css";
import yarnImage from "../assets/coloourfulyarn.jpg";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn"); // Remove login status
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="dashboard-container">
      <div>
        <h1>Admin Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/adminorders">Manage Orders</Link></li>
            <li><Link to="/adminproducts">Manage Products</Link></li>
          </ul>
        </nav>
        
        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
