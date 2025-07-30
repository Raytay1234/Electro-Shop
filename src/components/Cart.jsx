import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../context/useCart.jsx';
import '../styles/Cart.css'; // <-- import the CSS

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>
                    {item.quantity} × ${item.price} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={() => navigate('/checkout')} className="proceed-btn">
            Proceed
          </button>
          <button onClick={() => navigate('/products')} className="continue-btn">
            Continue Shopping</button>
        </>
      )}
    </div>
  );
};

export default Cart;
