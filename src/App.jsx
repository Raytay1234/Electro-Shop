import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Products from './pages/ProductPage.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact-Us.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import ProductGrid from './components/Product-Grid.jsx';
import './styles/App.css'

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-grid" element={<ProductGrid />} />
      </Routes>
    </div>
  );
}

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
};

export default App;
