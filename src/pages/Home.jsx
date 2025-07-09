import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-info-container">
      <header className="home-header">
        <h1>Welcome to <span>ElectroStore</span></h1>
        <p>Your trusted source for high-quality electronics and gadgets</p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We aim to bridge the gap between technology and people by offering
          reliable and affordable tech products that improve everyday life.
        </p>
      </section>

      <section className="services-section">
        <h2>What We Offer</h2>
        <ul className="services-list">
          <li>📱 Wide range of electronics and accessories</li>
          <li>💡 Trusted brands and latest models</li>
          <li>🚚 Fast and secure shipping</li>
          <li>🤝 Excellent customer support</li>
        </ul>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} ElectroStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
