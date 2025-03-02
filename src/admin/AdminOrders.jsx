import React, { useEffect, useState } from 'react';
// import "./AdminOrders.css";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders (Replace with real API call)
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Simulated orders (Replace with an API call)
        const response = [
          { id: 1, customer: 'John Doe', status: 'Pending', total: '$50' },
          { id: 2, customer: 'Jane Smith', status: 'Shipped', total: '$75' },
          { id: 3, customer: 'Alice Johnson', status: 'Delivered', total: '$120' },
        ];
        setOrders(response);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className='products-container'>
    <div>
      <h1>Admin Orders</h1>
      <table border="1">
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
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td>
                <button onClick={() => alert(`Viewing order ${order.id}`)}>View</button>
                <button onClick={() => alert(`Updating order ${order.id}`)}>Update</button>
                <button onClick={() => alert(`Deleting order ${order.id}`)}>Delete</button>
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
