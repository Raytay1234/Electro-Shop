import React, { useState } from 'react';
import { useCart } from '../context/useCart.jsx';

const Checkout = () => {
  const { cartItems, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);

  const handleCheckout = () => {
    clearCart();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2>Checkout</h2>
      {submitted ? (
        <p>Thank you for your purchase!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, i) => (
              <li key={i}>{item.title} × {item.quantity}</li>
            ))}
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={handleCheckout}>Confirm Purchase</button>
        </>
      )}
    </div>
  );
};

export default Checkout;