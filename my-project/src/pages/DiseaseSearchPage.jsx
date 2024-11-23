// src/pages/DiseaseSearch.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorImage from "../assets/doctor10.png"; // Adjust path if needed
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";


const DiseaseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div
      className="flex items-center p-4"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Left Section with Image */}
      <div className="mr-4">
        <img src={doctorImage} alt="Doctor" className="w-64 max-w-full" />
      </div>

      {/* Right Section with Search Form */}
      <aside className="flex-grow">
        {/* Centering only the h2 and p */}
        <div
          className="flex flex-col justify-center items-center"
          style={{ height: "50%" }}
        >
          {/* Header */}
          <h2
            className="text-4xl font-bold mb-4 text-black"
            style={{ fontFamily: "Host Grotesk, sans-serif" }}
          >
            Disease Search
          </h2>
          <p className="mb-4 text-2xl text-black text-center">
            Search for diseases and find relevant drug interactions and medical
            information.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSearchSubmit} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for diseases..."
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {/* Material UI Button with Search Icon */}
            <Stack direction="row" spacing={2}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Stack>
          </div>
        </form>
      </aside>
    </div>
  );
};

export default DiseaseSearch;
