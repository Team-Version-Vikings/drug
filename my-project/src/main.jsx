// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Your main app component
import "./index.css"; // Import Tailwind CSS

// Rendering the App with BrowserRouter to enable routing
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
