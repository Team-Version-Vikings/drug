import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing the icons

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-8 mt-auto">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p>&copy; 2024 DRUG DOC. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/anandbobba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/anandbobba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
