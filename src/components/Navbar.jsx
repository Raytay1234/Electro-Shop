// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../context/useAuth.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/products" style={styles.link}>Products</Link>
      <Link to="/about" style={styles.link}>About</Link>
      <Link to="/contact" style={styles.link}>Contact</Link>
      <Link to="/cart" style={styles.link}>Cart</Link>
      <Link to="/checkout" style={styles.link}>Checkout</Link>

      {user ? (
        <>
          <Link to="/UserProfile" style={styles.link}>Profile</Link>
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/signup" style={styles.link}>SignUp</Link>
        </>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#0f172a',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  button: {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Navbar;
