import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter"; 
import doctorImage from "../assets/doctor19.png"; // Adjust path as necessary
import "../styles/PregnancyDescription.css"; // Adjust the path for custom CSS

const PregnancyDescriptionPage = () => {
  const [genericName, setGenericName] = useState("");
  const [dosage, setDosage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Generic Name: ${genericName}, Dosage: ${dosage}`);
    // You can handle the form submission logic here
  };

  return (
    <div className="pregnancy-description-container">
      <div className="left-side">
        {/* Typing effect for the title */}
        <h1 className="title">
          <Typewriter
            words={["Pregnancy Safety and Medicine"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        {/* Relevant paragraph */}
        <p className="description">
          Pregnancy safety is a crucial aspect of healthcare. The right
          medications can help manage various pregnancy-related conditions.
          Always consult a healthcare provider before taking any medicine. This
          page helps you check the generic name and dosage for safe usage during
          pregnancy.
        </p>

        {/* Form for Generic Name and Dosage */}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="generic-name">Generic Name:</label>
            <input
              type="text"
              id="generic-name"
              value={genericName}
              onChange={(e) => setGenericName(e.target.value)}
              placeholder="Enter Generic Name"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dosage">Dosage:</label>
            <input
              type="text"
              id="dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder="Enter Dosage"
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      {/* Right side image */}
      <div className="right-side">
        <img src={doctorImage} alt="Doctor" className="doctor-image" />
      </div>
    </div>
  );
};

export default PregnancyDescriptionPage;
