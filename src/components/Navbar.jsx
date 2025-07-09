import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import '../styles/Navbar.css';

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/pics/Banner.jpg" alt="ElectroStore Logo" className="logo-image" />
          <span className="logo-text">ElectroStore</span>
        </Link>

        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/products" className="nav-link">Products</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li>
            <Link to="/cart" className="nav-link cart-link">
              🛒 Cart <span className="cart-count">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
