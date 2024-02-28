import React, { useState } from 'react';

const OrderPage = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const [orders, setOrders] = useState([
    {
      id: 1,
      customerImg: 'burger.jpg',
      contact: '0857190000',
      paymentMethod: 'Cash',
      orderStatus: 'Pending',
      paymentStatus: 'Unpaid'
    },
    {
      id: 2,
      customerImg: 'pizza.jpg',
      contact: '0898800000',
      paymentMethod: 'Card',
      orderStatus: 'Delivered',
      paymentStatus: 'Paid'
    }
  ]);

  const viewDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setShowNotification(true);
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className='order'>
      <h2>Order Details</h2>
      <table border="1">
        <thead>
          <tr>
            <th>O.N.</th>
            <th>Customer</th>
            <th>Contact</th>
            <th>Payment method</th>
            <th>Order status</th>
            <th>Payment status</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td><img src={order.customerImg} alt={`Customer ${order.id}`} /></td>
              <td>{order.contact}</td>
              <td>{order.paymentMethod}</td>
              <td style={{ color: order.orderStatus === "Pending" ? "orange" : "green" }}>{order.orderStatus}</td>
              <td style={{ color: order.paymentStatus === "Unpaid" ? "red" : "green" }}>{order.paymentStatus}</td>
              <td><button onClick={() => viewDetails(order.id)}>View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showNotification && (
        <div className="notification-container3">
          <div className="notification-header3">
            <h2>Order Details</h2>
            <button className='x' onClick={closeNotification}>X</button>
          </div>
          <table className="notification-table3">
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Unit Price</th>
              </tr>
            </thead>
            {/* Add table rows here */}
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
