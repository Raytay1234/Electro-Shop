import React, { useState, useEffect } from 'react';
import { useCart } from '../context/useCart.jsx';
import useAuth from '../context/useAuth.jsx'; // Make sure this exists
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const { user } = useAuth(); // Assumes you have a user object when logged in
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // Redirect to login and pass the current location
      navigate('/login', { state: { from: '/checkout' } });
    }
  }, [user, navigate]);

  const handleCheckout = () => {
    clearCart();
    setSubmitted(true);
  };

  if (!user) return null; // Prevent rendering before redirect

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2>Checkout</h2>

      {submitted ? (
        <p>✅ Thank you for your purchase!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  backgroundColor: '#1e1e1e',
                  padding: '1rem',
                  borderRadius: '10px'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    marginRight: '1rem',
                    borderRadius: '8px'
                  }}
                />
                <div>
                  <h4 style={{ margin: 0 }}>{item.title}</h4>
                  <p style={{ margin: '0.3rem 0' }}>
                    Quantity: {item.quantity}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
          <button
            onClick={handleCheckout}
            style={{
              padding: '0.6rem 1.2rem',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Confirm Purchase
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
