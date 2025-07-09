import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import '../Styles/Navbar.css'; // ✅ Ensure this path is correct

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/pics/Banner.jpg" alt="ElectroStore Logo" className="logo-image" />
          ElectroStore
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  );
}
