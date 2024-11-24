import React from "react";
import "../styles/Team.css";

const TeamPage = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">Meet The Team</h1>
      <p className="team-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud.
      </p>
      <p className="image-credit">
        Image by{" "}
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>
      </p>
      <div className="team-members">
        <div className="team-member">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Bob Brown"
            className="member-photo"
          />
          <h3 className="member-name">Bob Brown</h3>
          <p className="member-role">Creative Leader</p>
          <p className="member-bio">
            Glavi amet ritnsl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum.
          </p>
          <div className="social-icons">
            <a href="#" className="icon-link">
              🌐
            </a>
            <a href="#" className="icon-link">
              🐦
            </a>
            <a href="#" className="icon-link">
              📷
            </a>
          </div>
        </div>
        <div className="team-member">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Mary Smith"
            className="member-photo"
          />
          <h3 className="member-name">Mary Smith</h3>
          <p className="member-role">Sales Manager</p>
          <p className="member-bio">
            Glavi amet ritnsl libero molestie ante ut fringilla purus eros quis
            glavrid from dolor amet iquam lorem bibendum.
          </p>
          <div className="social-icons">
            <a href="#" className="icon-link">
              🌐
            </a>
            <a href="#" className="icon-link">
              🐦
            </a>
            <a href="#" className="icon-link">
              📷
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
