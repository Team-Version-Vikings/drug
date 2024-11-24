import React from "react";
import "../styles/Team.css";
import tejaImage from "../assets/teja1.jpg";
import anandImage from "../assets/anand3.jpg"; // Import Anand's photo

const TeamPage = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Meet The Team</h1>
      <p className="team-description">
        "Our team is dedicated to advancing healthcare innovation through
        technology and collaboration. With expertise spanning pharmaceuticals,
        research, and software development, we are committed to creating
        impactful solutions that enhance lives. From designing user-friendly
        systems to tackling complex challenges in drug management and delivery,
        our shared goal is to drive positive change in the medical field.
        Together, we combine knowledge, creativity, and dedication to build a
        healthier future for all."
      </p>
      <p className="image-credit">
        Github{" "}
        <a
          href="https://github.com/Team-Version-Vikings/drug"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </p>
      <div className="team-members">
        <div className="team-member">
          <img
            src={tejaImage} // Using teja1.jpg as Bob Brown's photo
            alt="Bob Brown"
            className="member-photo"
          />
          <h3 className="member-name">Guna Teja Sarvan Patnaik</h3>
          <p className="member-role">Machine learning enthusiast</p>
          <p className="member-bio">
            Tech stacks used: Python, TensorFlow , Machine learning ,Flask
          </p>
          <div className="social-icons">
            <a href="https://x.com/gunateja10008" className="icon-link">
              🌐
            </a>
            <a
              href="https://github.com/GunaTeja777?tab=repositories"
              className="icon-link"
            >
              🐦(Github)
            </a>
            <a
              href="https://www.linkedin.com/in/guna-teja-sarvan-patnaik-0942a2275/"
              className="icon-link"
            >
              📷(Linkedin)
            </a>
          </div>
        </div>
        <div className="team-member">
          <img
            src={anandImage} // Using teja1.jpg as Mary Smith's photo
            alt="Mary Smith"
            className="member-photo"
          />
          <h3 className="member-name">Anand Bobba</h3>
          <p className="member-role">Web Enthusiast </p>
          <p className="member-bio">
            Tech Stacks used: React, Node.js, Express.js,
            MongoDB,Flask,Framer-motion,Tailwind.css,Material-UI,Bootstrap,
            Socket.io
          </p>
          <div className="social-icons">
            <a href="https://x.com/_anand11" className="icon-link">
              🌐
            </a>
            <a href="https://github.com/anandbobba" className="icon-link">
              🐦(Github)
            </a>
            <a
              href="https://www.linkedin.com/in/anandbobba/"
              className="icon-link"
            >
              📷(Linkedin)
            </a>
          </div>
        </div>
      </div>
      <br></br>
      <div >Supporters: Sharan Rai.K(Documentation),Vidhathri Bhat(PPT)</div>
    </div>
  );
};

export default TeamPage;
