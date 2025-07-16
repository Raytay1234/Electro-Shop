// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth.jsx';
import '../styles/Navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

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
    <Link to="/cart" className="nav-link">Cart</Link>
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
