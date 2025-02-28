import React from 'react';
import { Link } from 'react-router-dom';

import "./AdminDashboard.css";
import yarnImage from "../assets/coloourfulyarn.jpg";




const AdminDashboard = () => {
  return (
    <div className='dashboard-container'>
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/adminorders">Manage Orders</Link></li>
          <li><Link to="/adminproducts">Manage Products</Link></li>
          
        </ul>
      </nav>
    </div>
    </div>
  );
};

export default AdminDashboard;
