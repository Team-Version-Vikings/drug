import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importing React Router's Link

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! How can I assist you today?" },
  ]);
  const [options, setOptions] = useState(["Queries", "Consultation"]);
  const [previousOptions, setPreviousOptions] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const handleOptionClick = (option) => {
    setIsTyping(true);
    setPreviousOptions(options); // Save the current options for "Back"
    setOptions(null);

    setTimeout(() => {
      setIsTyping(false);
      if (option === "Queries") {
        addMessage("bot", "Please select one of the following options:");
        setOptions([
          "Doctor Contact",
          "Office Contact",
          "Website Overview",
          "Back",
        ]);
      } else if (option === "Consultation") {
        addMessage(
          "bot",
          "You can contact a doctor or use our video consultation:\n- Doctor Contact: 123-456-7890\n- Video Call: [Click Here](/videocall)"
        );
        setOptions(["Back"]);
      } else if (option === "Doctor Contact") {
        addMessage(
          "bot",
          "Here are the doctor contact numbers:\n1. 123-456-7890\n2. 987-654-3210"
        );
        setOptions(["Back"]);
      } else if (option === "Office Contact") {
        addMessage(
          "bot",
          "Office Address: 123 Health Street, Wellness City\nPhone: 555-123-4567"
        );
        setOptions(["Back"]);
      } else if (option === "Website Overview") {
        addMessage(
          "bot",
          <>
            Our website features include:
            <ul>
              <li>
                Disease Search:{" "}
                <Link to="/diseasesearch" style={{ color: "blue" }}>
                  Visit Page
                </Link>
              </li>
              <li>
                Dosage Safety Check:{" "}
                <Link to="/dosagesafetycheck" style={{ color: "blue" }}>
                  Visit Page
                </Link>
              </li>
              <li>
                Pregnancy Description:{" "}
                <Link to="/pregnancydescription" style={{ color: "blue" }}>
                  Visit Page
                </Link>
              </li>
            </ul>
          </>
        );
        setOptions(["Back"]);
      } else if (option === "Back") {
        setOptions(previousOptions); // Restore the previous options
        addMessage("bot", "What would you like to do next?");
      } else {
        addMessage("bot", "Sorry, I didn't understand that.");
      }
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (options) {
        addMessage("bot", "Thank you for chatting with me. Please refresh the page to start a new conversation.");
        setOptions(null);
      }
    }, 30000);
    return () => clearTimeout(timeout);
  }, [messages, options]);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          padding: "10px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "inset 0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === "bot" ? "left" : "right",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "10px 15px",
                borderRadius: "10px",
                backgroundColor: msg.sender === "bot" ? "#e0e0e0" : "#007bff",
                color: msg.sender === "bot" ? "#000" : "#fff",
                maxWidth: "80%",
                wordWrap: "break-word",
              }}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div
            style={{
              textAlign: "left",
              margin: "10px 0",
              fontStyle: "italic",
              color: "#555",
            }}
          >
            Bot is typing...
          </div>
        )}
      </div>
      {options && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              style={{
                flex: "1 1 calc(50% - 10px)",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                textAlign: "center",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
