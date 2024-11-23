import React, { useState } from "react";
import axios from "axios";
import doctorSideImage from "../assets/doctor12.png";
import "../styles/DosageSafetyCheck.css";

const DosageSafetyCheck = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    generic_name: "",
    dosage: "",
  });
  const [profile, setProfile] = useState(null);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Input validation
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return;
    if (name === "age" && (/\D/.test(value) || value.length > 2)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.gender) {
      setProfile({
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
      });
      setShowProfileImage(true);
      setShowAdditionalFields(true);
      setError(null);
      setResult(null);
    }
  };

  const handleDosageSubmit = async (e) => {
    e.preventDefault();
    if (!formData.generic_name || !formData.dosage) {
      setError("Please fill in both drug name and dosage");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:5000/check-dosage", {
        generic_name: formData.generic_name,
        dosage: formData.dosage,
      });
      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred while checking dosage safety"
      );
    } finally {
      setLoading(false);
    }
  };

  const resetProfile = () => {
    setProfile(null);
    setShowProfileImage(false);
    setShowAdditionalFields(false);
    setFormData({
      name: "",
      age: "",
      gender: "",
      generic_name: "",
      dosage: "",
    });
    setResult(null);
    setError(null);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 py-6">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-6">
        <h2
          className="text-2xl font-bold mb-4 typing-effect"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Dosage Safety Check
        </h2>
        <p className="mb-3 text-black">
          Enter details below to check dosage interactions.
        </p>

        {!showAdditionalFields ? (
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              required
            />
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
              className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition-colors"
            >
              Create Profile
            </button>
          </form>
        ) : (
          <form onSubmit={handleDosageSubmit} className="space-y-4">
            <input
              type="text"
              name="generic_name"
              value={formData.generic_name}
              onChange={handleChange}
              placeholder="Drug/Generic Name"
              className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              required
            />
            <input
              type="text"
              name="dosage"
              value={formData.dosage}
              onChange={handleChange}
              placeholder="Dosage"
              className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`px-4 py-2 bg-green-500 text-white rounded-md w-full hover:bg-green-600 transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Checking..." : "Check Dosage Safety"}
            </button>
          </form>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
      </div>

      {!result && (
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            src={doctorSideImage}
            alt="Doctor"
            className="w-90 h-auto object-cover mx-auto mt-3"
          />
        </div>
      )}

      {/* Result Modal */}
      {result && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-3/4 h-3/4 overflow-auto">
            <h3 className="text-xl font-bold mb-4">Dosage Safety Results</h3>
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
            <button
              onClick={resetProfile}
              className="px-4 py-2 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600 transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DosageSafetyCheck;
