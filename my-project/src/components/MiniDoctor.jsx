import React, { useState } from "react";
import doctorImage from "../assets/doctor21.png";
import axios from "axios";

const MiniDoctor = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (!input) {
      setError("Please enter your symptoms or conversation.");
      return;
    }
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:8000/mini-doctor",
        { conversation: input },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setResult(response.data.prediction);
      } else {
        setError(response.data.error || "An error occurred.");
      }
    } catch (err) {
      setError("Failed to fetch response. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>Mini Doctor</h1>
        <p style={styles.description}>
          Your personal health companion. Share how you feel, and let us show the problem.
        </p>
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Tell how you feel (health)"
            style={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button style={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {error && <p style={styles.error}>{error}</p>}
        {result && <p style={styles.result}>Predicted Disease: {result}</p>}
      </div>
      <div style={styles.rightSection}>
        <img src={doctorImage} alt="Doctor Illustration" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  leftSection: {
    flex: 1,
    marginRight: "40px",
    marginTop: "50px",
  },
  title: {
    fontSize: "2.5em",
    color: "#333",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "1.2em",
    color: "#555",
    marginBottom: "20px",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: "10px 15px",
    border: "1px solid #ccc",
    borderRadius: "30px",
    outline: "none",
    fontSize: "1em",
    marginRight: "10px",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  result: {
    color: "green",
    marginTop: "10px",
    fontSize: "1.1em",
  },
  rightSection: {
    flex: 1,
    textAlign: "center",
    marginLeft: "20px",
  },
  image: {
    maxWidth: "50%",
    height: "auto",
  },
};

export default MiniDoctor;
