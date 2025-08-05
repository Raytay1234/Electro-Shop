// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import products from '../data/Products.js';
import ProductCard from '../components/ProductCard.jsx';
import '../styles/Home.css';

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const previewProducts = products.slice(0, 3);

  return (
    <div className="home-info-container">
      {/* Hero */}
      <header
        className="home-header fade-in-section"
        ref={el => (sectionsRef.current[0] = el)}
      >
        <h1>
          Welcome to <span className="highlight">ElectroStore</span>
        </h1>
        <p className="subheading">
          Your trusted source for high-quality electronics, gadgets, and accessories.
        </p>
        <div className="hero-image">
          <img src="/pics/Banner2.jpg" alt="Electronics Banner" />
        </div>
      </header>

      {/* Preview Products */}
      <section
        className="preview-products-section fade-in-section"
        ref={el => (sectionsRef.current[1] = el)}
      >
        <h2 className="section-title">✨ Latest Arrivals</h2>
        <p className="section-intro">
          Discover our newest gadgets and most popular tech picks.
        </p>
        <div className="preview-product-grid">
          {previewProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <a href="/products" className="view-all-btn">
          View All Products
        </a>
      </section>

      {/* Mission */}
      <section
        className="mission-section fade-in-section"
        ref={el => (sectionsRef.current[2] = el)}
      >
        <h2 className="section-title">🚀 Our Mission</h2>
        <p>
          At <strong>ElectroStore</strong>, we believe technology should be accessible,
          dependable, and empowering. Our mission is to connect you with high-quality,
          innovative products that enhance your everyday life.
        </p>
      </section>

      {/* Services */}
      <section
        className="services-section fade-in-section"
        ref={el => (sectionsRef.current[3] = el)}
      >
        <h2 className="section-title">💡 What We Offer</h2>
        <ul className="services-list">
          <li>
            <strong>📱 Diverse Product Selection:</strong> From smartphones to smartwatches and more.
          </li>
          <li>
            <strong>💡 Latest Tech & Trusted Brands:</strong> Partnering with industry leaders.
          </li>
          <li>
            <strong>🚚 Reliable Delivery:</strong> Fast, secure, and trackable shipping.
          </li>
          <li>
            <strong>🤝 Exceptional Support:</strong> Friendly help whenever you need it.
          </li>
        </ul>
      </section>

      {/* Why Us */}
      <section
        className="why-us-section fade-in-section"
        ref={el => (sectionsRef.current[4] = el)}
      >
        <h2 className="section-title">🔥 Why Choose ElectroStore?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <h3>💼 Professionalism</h3>
            <p>We’re tech enthusiasts committed to outstanding service.</p>
          </div>
          <div className="why-us-item">
            <h3>💳 Secure Shopping</h3>
            <p>Your transactions are safe with our top-tier security measures.</p>
          </div>
          <div className="why-us-item">
            <h3>🔁 Easy Returns</h3>
            <p>Our fair return policy makes shopping risk-free.</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer
        className="home-footer fade-in-section"
        ref={el => (sectionsRef.current[6] = el)}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h3>ElectroStore</h3>
            <p>Your trusted tech partner for all electronics and gadgets.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Shop</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@electrostore.com</p>
            <p>Phone: +254 700 123 456</p>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
              <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
              <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} <strong>ElectroStore</strong>. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
