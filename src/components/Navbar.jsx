import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth.jsx';
import useCart from '../context/useCart.jsx';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // ✅ Total quantity calculation (e.g., 2 phones + 1 laptop = 3)
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>

      {/* 🛒 Cart with persistent badge */}
      <div className="cart-wrapper">
        <Link to="/cart" className="nav-link cart-link">
          Cart
          {cartQuantity > 0 && (
            <span className="cart-badge">{cartQuantity}</span>
          )}
        </Link>
      </div>

      <Link to="/checkout" className="nav-link">Checkout</Link>

      {user ? (
        <>
          <Link to="/UserProfile" className="nav-link profile-link">
            <img
              src={user.profilePicture || '/default-avatar.png'}
              alt="Profile"
              className="profile-avatar"
            />
          </Link>
          <button onClick={handleLogout} className="nav-button">Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/signup" className="nav-link">SignUp</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
