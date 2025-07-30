import React from 'react';
import '../styles/About.css';

const teamData = [
  {
    name: "Alice Johnson",
    role: "Chief Executive Officer (CEO)",
    image: "/pics/mmm.jpeg",
    bio: "Alice is the visionary behind our success. With over 15 years in leadership, she has steered the company through innovation and growth. Her commitment to excellence inspires the entire team."
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image: "/pics/wmremove-transformed.jpeg",
    bio: "Bob brings over a decade of experience in full-stack development. He leads the engineering team with a passion for clean, scalable code and cutting-edge technology."
  },
  {
    name: "Mary Brown",
    role: "Creative Director",
    image: "/pics/reee.jpeg",
    bio: "Mary has a keen eye for design and user experience. With a background in digital art and branding, she ensures that every product we release is visually engaging and intuitive."
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-container fade-in">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>About <span className="highlight">ElectroStore</span></h1>
          <p>
            Your trusted partner in quality electronics and innovative solutions.
            We combine creativity, technology, and strategy to deliver impactful experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="info-section">
        <div className="info-block">
          <h2>Our Mission</h2>
          <p>
            To empower individuals and businesses with reliable, cutting-edge technology
            that enhances productivity, convenience, and lifestyle. We value transparency,
            innovation, and exceptional customer service.
          </p>
        </div>
        <div className="info-block">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in tech solutions, fostering a world where technology
            empowers everyone to reach their full potential.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <h2>Meet Our Leadership</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="history">
        <h2>Our Story</h2>
        <p>
          Founded in 2018, we started as a small group of passionate tech professionals
          with a big dream — to make technology more accessible and impactful.
        </p>
        <p>
          From a modest co-working space to serving clients across industries like healthcare,
          retail, education, and fintech, our journey has been fueled by innovation and
          customer trust.
        </p>
        <p>
          Today, we’re proud to be a diverse, dynamic team shaping the future of technology
          with creativity and purpose.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Join Us on Our Journey</h2>
        <p>
          We’re always looking for passionate individuals and partners who want to
          innovate and make a difference.
        </p>
        <a href="/contact" className="contact-link">Get in Touch</a>
      </section>
    </div>
  );
};

export default AboutUs;
