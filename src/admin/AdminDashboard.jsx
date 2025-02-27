import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminPanel.css";



const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/adminorders">Manage Orders</Link></li>
          <li><Link to="/adminproducts">Manage Products</Link></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
