import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../context/CartContext.jsx';
import useCart from '../context/useCart.jsx';

const Cart = () => {
  const navigate = useNavigate();

  // Access cart context or fallback to custom hook
  const cartContextValue = CartContext && typeof CartContext === 'function' ? CartContext() : undefined;
  const cartHookValue = useCart();
  const { cartItems, removeFromCart, total } = cartContextValue || cartHookValue;

  return (
    <div style={{ padding: '2rem', color: '#fff' }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
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
                    {item.quantity} × ${item.price} = ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.title)}
                    style={{
                      marginRight: '0.5rem',
                      padding: '0.3rem 0.6rem',
                      background: '#ff4d4f',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                 
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
           <button
                    onClick={() => navigate('/checkout')}
                    style={{
                      padding: '0.3rem 0.6rem',
                      background: '#4CAF50',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Proceed
                  </button>
        </>
      )}
    </div>
  );
};

export default Cart;
