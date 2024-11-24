import React from "react";
import doctorImage from "../assets/doctor21.png";

const MiniDoctor = () => {
  return (
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <h1 style={styles.title}>Mini Doctor</h1>
        <p style={styles.description}>
          Your personal health companion. Share how you feel, and let us guide
          you towards better health.
        </p>
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Tell how you feel (health)"
            style={styles.input}
          />
          <button style={styles.submitButton}>Submit</button>
        </div>
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
    alignItems: "flex-start", // Align items to the top
    justifyContent: "space-between",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif", // Use Poppins as the default font
  },
  leftSection: {
    flex: 1,
    marginRight: "40px",
    marginTop: "50px", // Adjust vertical position
  },
  title: {
    fontSize: "2.5em",
    color: "#333",
    marginBottom: "10px",
    fontWeight: "bold", // Make the title bold
    fontFamily: "'Poppins', sans-serif", // Apply Poppins font
  },
  description: {
    fontSize: "1.2em",
    color: "#555",
    marginBottom: "20px",
    fontWeight: "600", // Semi-bold for description
    fontFamily: "'Poppins', sans-serif", // Apply Poppins font
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
    backgroundColor: "#333", // Background color for input
    color: "#fff", // Text color in the input field
  },
  // Pseudo-element for placeholder styling
  "::placeholder": {
    color: "#fff", // Placeholder text color
    opacity: "0.7", // Adjust opacity if needed
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
