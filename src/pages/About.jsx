import React from 'react';
import '../styles/About.css'; // Ensure this file matches the styles provided

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
          <h1>About Us</h1>
          <p>Your trusted partner in quality and innovation. We combine creativity, technology, and strategy to deliver impactful solutions.</p>
        </div>
      </section>
      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses and individuals with high-quality products and services that enhance productivity and simplify everyday challenges.
          We aim to build lasting relationships through transparency, innovation, and world-class support.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in tech-driven solutions, fostering a world where technology empowers every human to reach their full potential.
        </p>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamData.map((member, index) => (
            <div className="team-member" key={index}>
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

      {/* History Section */}
      <section className="history">
        <h2>Our Story</h2>
        <p>
          Founded in 2018, we started as a small team of passionate developers and designers who believed in making a difference through technology.
          Our first office was a humble co-working space, but our ambition was anything but small.
        </p>
        <p>
          Over the years, we’ve expanded our team, embraced cutting-edge tools, and served clients across various industries including healthcare, retail, education, and fintech.
          Each milestone we’ve achieved has reinforced our belief in innovation, teamwork, and relentless customer focus.
        </p>
        <p>
          Today, we’re proud to be a diverse and dynamic team dedicated to shaping the future through thoughtful design and powerful technology.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Join Us on Our Journey</h2>
        <p>We’re always looking for passionate individuals and partners who want to make a difference. Let’s build something great together.</p>
        <a href="/contact" className="contact-link">Get in Touch</a>
      </section>

    </div>
  );
};

export default AboutUs;
