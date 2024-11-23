import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import doctorImage from "../assets/doctor10.png"; // Adjust path if needed
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";

const DiseaseSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    setResults([]); // Clear previous results

    if (!searchTerm) {
      setError("Please enter a search term.");
      return;
    }

    try {
      // Make API call to Flask backend
      const response = await axios.post(
        "http://localhost:5000/predict-disease",
        {
          reconstitution_description: searchTerm,
        }
      );

      // Handle the response
      setResults(response.data); // Update state with the results
    } catch (err) {
      // Handle errors
      if (err.response && err.response.data.error) {
        setError(err.response.data.error); // Backend error
      } else {
        setError("An error occurred. Please try again.");
      }
    }
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

      {/* Right Section with Search Form and Results */}
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

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Results Section */}
        <div>
          {results.length > 0 && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">
                Search Results
              </h3>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white shadow-md rounded-lg border border-gray-300"
                  >
                    <h4 className="text-lg font-bold mb-2 text-blue-700">
                      {result["generic name"]}
                    </h4>
                    <div className="mb-2">
                      <strong>Slug:</strong> {result["slug"]}
                    </div>
                    <div className="mb-2">
                      <strong>Monograph Link:</strong>{" "}
                      <a
                        href={result["monograph link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {result["monograph link"]}
                      </a>
                    </div>
                    <div className="mb-2">
                      <strong>Drug Class:</strong> {result["drug class"]}
                    </div>
                    <div className="mb-2">
                      <strong>Indication:</strong> {result["indication"]}
                    </div>
                    <div className="mb-2">
                      <strong>Indication Description:</strong>{" "}
                      {result["indication description"]}
                    </div>
                    <div className="mb-2">
                      <strong>Dosage Description:</strong>{" "}
                      {result["dosage description"]}
                    </div>
                    <div className="mb-2">
                      <strong>Side Effects:</strong>{" "}
                      {result["side effects description"]}
                    </div>
                    <div className="mb-2">
                      <strong>Overdose Effects:</strong>{" "}
                      {result["overdose effects description"]}
                    </div>
                    <div>
                      <strong>Storage Conditions:</strong>{" "}
                      {result["storage conditions description"]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default DiseaseSearch;
