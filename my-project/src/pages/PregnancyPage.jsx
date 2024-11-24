import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import axios from "axios";
import doctorImage from "../assets/doctor19.png";
import "../styles/PregnancyDescription.css";

const PregnancyDescriptionPage = () => {
  const [genericName, setGenericName] = useState("");
  const [dosage, setDosage] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const data = { generic_name: genericName, dosage };
      console.log("Submitting data:", data);

      const res = await axios.post(
        "http://localhost:8000/check-pregnancy",
        data
      );
      console.log("Response received:", res.data);

      if (res.data) {
        setResponse(res.data);
      } else {
        throw new Error("No results found in the response.");
      }
    } catch (err) {
      console.error("API error:", err);
      setError(err.response?.data?.error || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderValue = (value) => {
    if (typeof value === "object" && value !== null) {
      return (
        <ul>
          {Object.entries(value).map(([subKey, subValue]) => (
            <li key={subKey}>
              <strong>{subKey.replace(/_/g, " ")}:</strong>{" "}
              {renderValue(subValue)}
            </li>
          ))}
        </ul>
      );
    }
    return value || "Information not available";
  };

  return (
    <div className="pregnancy-description-container">
      <div className="left-side">
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
        <p className="description">
          Pregnancy safety is crucial when considering medications. This tool
          provides comprehensive information about medicines during pregnancy.
          Always consult your healthcare provider before making any medication
          decisions.
        </p>

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
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dosage">Dosage:</label>
            <input
              type="text"
              id="dosage"
              value={dosage}
              onChange={(e) => setDosage(e.target.value)}
              placeholder="Enter Dosage (e.g., 500mg)"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Checking..." : "Check Safety"}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {response && (
          <div className="results-container">
            <h3>Results</h3>
            <div className="white-box">
              {Object.entries(response).map(([key, value]) => (
                <div className="info-item" key={key}>
                  <h4>{key.replace(/_/g, " ").toUpperCase()}</h4>
                  <div>{renderValue(value)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hide the image when the response is displayed */}
      {!response && (
        <div className="right-side">
          <img src={doctorImage} alt="Doctor" className="doctor-image" />
        </div>
      )}
    </div>
  );
};

export default PregnancyDescriptionPage;
