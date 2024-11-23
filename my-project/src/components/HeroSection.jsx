import React, { useState, memo } from "react";
import { Typewriter as TypewriterEffect } from "react-simple-typewriter"; // New import

import ScrollAnimation from "react-animate-on-scroll";
import doctorImage from "../assets/loginimage.png"; // Adjust the path as necessary
import "animate.css";
import "../styles/HeroSection.css"; // Adjust the path based on your folder structure

// Memoized TypingEffect component
const LocalTypewriter = memo(() => {
  return (
    <h1 className="text-4xl font-bold mb-4">
      <TypewriterEffect
        words={["Welcome to DRUG DOC", "Your trusted health companion!"]}
        loop={true}
        cursor
      />
    </h1>
  );
});

const HeroSection = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Manage hover state

  // Function to handle the image click
  const handleImageClick = () => {
    setShowArrow(!showArrow);
  };

  return (
    <section
      className="text-white text-center p-8 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg mx-auto"
      style={{
        maxWidth: "600px",
        marginTop: "20px",
        fontFamily: "Nova Flat, sans-serif",
      }}
    >
      {/* Typing effect for welcome message */}
      <LocalTypewriter />

      {/* Scroll animation for tagline */}
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <p className="text-lg">
          Your trusted partner for drug safety and consultation.
        </p>
      </ScrollAnimation>

      <div className="mt-6 relative">
        {/* Image with hover effect and click handler */}
        <img
          src={doctorImage}
          alt="Doctor"
          className="mx-auto w-2/3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_10px_rgba(255,255,255,0.6)] rounded-lg cursor-pointer"
          onClick={handleImageClick}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        />

        {/* Conditionally render "Click me" text */}
        {isHovered && (
          <div className="absolute bottom left-1/2 transform -translate-x-1/2 text-black text-xl font-semibold">
            <p>Click me! &#128054;</p>
          </div>
        )}
      </div>

      {/* Conditionally render arrows (hide on mobile) */}
      {showArrow && (
        <>
          {/* Arrows will be hidden on screens smaller than 'sm' */}
          <div className="arrow hidden sm:block">
            <div className="arrow__body"></div>
          </div>

          <div className="arrow-left hidden sm:block">
            <div className="arrow__body"></div>
            {/* Left Arrow: Navigate to Video Call and Contact Us */}
            <div className="object__intro-left">
              <h2 className="object__intro-title text-xl">Navigate to:</h2>
              <ul>
                <li>
                  <a href="/videocall" className="text-highlight">
                    Video Call
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="text-highlight">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* Links for disease search, dosage safety check, and pregnancy check */}
      {showArrow && (
        <div className="object__intro hidden sm:block">
          <h2 className="object__intro-title text-xl">Navigate to:</h2>
          <ul>
            <li>
              <a href="/diseasesearch" className="text-highlight">
                Disease Search
              </a>
            </li>
            <li>
              <a href="/dosagesafetycheck" className="text-highlight">
                Dosage Safety Check
              </a>
            </li>
            <li>
              <a href="/pregnancydescription" className="text-highlight">
                Pregnancy Description
              </a>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
