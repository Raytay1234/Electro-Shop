// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-info-container">
      {/* Hero Section */}
      <header
        className="home-header fade-in-section"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <h1>Welcome to <span className="highlight">ElectroStore</span></h1>
        <p className="subheading">
          Your trusted source for high-quality electronics, gadgets, and accessories.
        </p>
        <div className="hero-image">
          <img src="/pics/Banner2.jpg" alt="Electronics Banner" />
        </div>
      </header>

      {/* Mission Statement */}
      <section
        className="mission-section fade-in-section"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h2>Our Mission</h2>
        <p>
          At <strong>ElectroStore</strong>, we believe technology should be accessible, dependable, and empowering. 
          Our mission is to bridge the gap between innovation and everyday life by delivering top-tier products 
          that enhance convenience, productivity, and entertainment.
        </p>
      </section>

      {/* Services Overview */}
      <section
        className="services-section fade-in-section"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2>What We Offer</h2>
        <ul className="services-list">
          <li><strong>📱 Diverse Product Selection:</strong> From smartphones and laptops to smartwatches and home gadgets, we stock it all.</li>
          <li><strong>💡 Latest Tech & Trusted Brands:</strong> We partner with leading manufacturers to bring you the newest innovations from brands you trust.</li>
          <li><strong>🚚 Reliable Delivery:</strong> Enjoy fast, secure, and trackable shipping options nationwide.</li>
          <li><strong>🤝 Exceptional Support:</strong> Our friendly customer service team is always ready to assist with questions, returns, or recommendations.</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section
        className="why-us-section fade-in-section"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2>Why Choose ElectroStore?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <h3>💼 Professionalism</h3>
            <p>We’re a team of tech enthusiasts and professionals dedicated to quality service and product excellence.</p>
          </div>
          <div className="why-us-item">
            <h3>💳 Secure Shopping</h3>
            <p>Your data and payments are encrypted and protected with industry-leading security protocols.</p>
          </div>
          <div className="why-us-item">
            <h3>🔁 Easy Returns</h3>
            <p>Changed your mind? No problem. Our return policy is designed to be fair, simple, and customer-friendly.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section
        className="cta-section fade-in-section"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <h2>Start Shopping Today!</h2>
        <p>Browse our latest arrivals, discover exclusive deals, and elevate your tech game with ElectroStore.</p>
        <a href="/products" className="cta-button">View Products</a>
      </section>

      {/* Footer */}
      <footer
        className="home-footer fade-in-section"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <p>&copy; {new Date().getFullYear()} <strong>ElectroStore</strong>. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
