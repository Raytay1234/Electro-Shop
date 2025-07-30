// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth.jsx';
import useCart from '../context/useCart.jsx';
import '../styles/Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <Link to="/" className="nav-logo">
        ElectroStore
      </Link>

      {/* Desktop Nav Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {/* Cart Link */}
        <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
          Cart
          {cartQuantity > 0 && (
            <span className="cart-badge">{cartQuantity}</span>
          )}
        </Link>

        <Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link>

        {/* Authentication Links */}
        {user ? (
          <button onClick={handleLogout} className="nav-button logout-btn">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </>
        )}

        {/* Desktop Profile Avatar */}
        {user && (
          <Link to="/UserProfile" className="profile-link desktop-avatar">
            <img
              src={user.profilePicture || '/default-avatar.png'}
              alt="Profile"
              className="profile-avatar"
            />
          </Link>
        )}
      </div>

      {/* Right: Mobile Actions */}
      <div className="nav-right">
        {/* Mobile Profile Avatar */}
        {user && (
          <Link to="/UserProfile" className="profile-link mobile-avatar">
            <img
              src={user.profilePicture || '/default-avatar.png'}
              alt="Profile"
              className="profile-avatar"
            />
          </Link>
        )}

        {/* Hamburger Menu */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
          {cartQuantity > 0 && (
            <span className="hamburger-badge">{cartQuantity}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
