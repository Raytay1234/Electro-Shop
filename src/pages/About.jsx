import React from 'react';
import '../styles/About.css'; // Optional: create this CSS file for custom styling

const teamData = [
  {
    name: "Alice Johnson",
    role: "CEO",
    image: "/pics/mmm.jpeg" // Update with your image path
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image: "/pics/wmremove-transformed.jpeg" // Update with your image path
  },
  {
    name: "Mary Brown",
    role: "Designer",
    image: "/pics/reee.jpeg" // Update with your image path
  }
];

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="hero">
        <img
          src="/pics/Banner.jpg" // Update with your banner image path
          alt="Company Banner"
          className="hero-image"
        />
        <h1>About Us</h1>
        <p>Your trusted partner in quality and innovation.</p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We strive to provide the best services and products to our customers, always focused on quality,
          reliability, and customer satisfaction.
        </p>
      </section>

      <section className="team">
  <h2>Meet Our Team</h2>
  <div className="team-members">
    {teamData.map((member, index) => (
      <div className="team-member" key={index}>
        <img src={member.image} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    ))}
  </div>
</section>


      <section className="history">
        <h2>Our Story</h2>
        <p>
          Founded in [Year], we began as a small startup and have grown into a team of passionate professionals
          dedicated to innovation. From day one, our focus has been on solving real-world problems with effective
          solutions.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
