import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AdminOrders.css';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate(); // Initialize navigation

  // Fetch orders (Replace with a real API call)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Simulated orders (Replace with API call)
        const response = [
          { id: 1, customer: 'Shreeya', status: 'Pending', total: '$50' },
          { id: 2, customer: 'Samikshya', status: 'Shipped', total: '$75' },
          { id: 3, customer: 'Sita', status: 'Delivered', total: '$120' },
          { id: 4, customer: 'Ram', status: 'Pending', total: '$50' },
          { id: 5, customer: 'Shyam', status: 'Pending', total: '$50' },
        ];
        setOrders(response);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  // Update Order Status
  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // Delete an Order
  const deleteOrder = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (confirmDelete) {
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    }
  };

  return (
    <div className="admin-orders">
      <div className="translucent-container">
        <h1>Admin Orders</h1>

        {/* Back Button */}
        <button className="back-btn" onClick={() => navigate('/admindashboard')}>⬅ Back to Dashboard</button>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>{order.total}</td>
                <td>
                  <button className="edit-btn" onClick={() => alert(`Viewing order ${order.id}`)}>View</button>
                  <button className="save-btn" onClick={() => alert(`Updated order ${order.id}`)}>Update</button>
                  <button className="delete-btn" onClick={() => deleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
