import React, { useState } from "react";
import doctorImage from "../assets/doctor15.png"; // Doctor image (large)
import profileImage from "../assets/doctor9.png"; // Profile image
import doctorSideImage from "../assets/doctor12.png"; // New doctor image for right side
import "../styles/DosageSafetyCheck.css"; // Adjust the path as needed
const DosageSafetyCheck = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    drugName: "",
    dosageFrequency: "",
  });
  const [profile, setProfile] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showProfileImage, setShowProfileImage] = useState(false); // State for profile image placement

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Input validation
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return; // Only letters and spaces
    if (name === "age" && (/\D/.test(value) || value.length > 2)) return; // Only two digits
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.gender) {
      setProfile({
        name: formData.name,
        age: formData.age,
        gender: formData.gender,
      });
      setShowProfileImage(true); // Show profile image at top right after creating profile
      setShowAdditionalFields(true);
    }
  };

  const resetProfile = () => {
    setProfile(null);
    setShowProfileImage(false); // Reset the profile image display state
    setShowAdditionalFields(false);
    setFormData({
      name: "",
      age: "",
      gender: "",
      drugName: "",
      dosageFrequency: "",
    });
    setShowDropdown(false); // Hide dropdown after reset
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 py-6">
      {/* Left Section: Form */}
      <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mt-6">
        {" "}
        {/* Adjusted margin-top */}
        {/* Typing effect for the title */}
        <h2
          className="text-2xl font-bold mb-4 typing-effect"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Dosage Safety Check
        </h2>
        {/* Paragraph text outside the white box */}
        <p className="mb-3 text-black">
          Enter details below to check dosage interactions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name, Age, Gender Inputs */}
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

          {/* Create Profile Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md w-full"
            >
              Create Profile
            </button>
          </div>

          {/* Show additional fields after creating profile */}
          {showAdditionalFields && (
            <>
              <input
                type="text"
                name="drugName"
                value={formData.drugName}
                onChange={handleChange}
                placeholder="Drug/Generic Name"
                className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              />
              <input
                type="text"
                name="dosageFrequency"
                value={formData.dosageFrequency}
                onChange={handleChange}
                placeholder="Dosage + Frequency"
                className="w-full p-2 bg-transparent border border-gray-300 rounded-md text-black placeholder-gray-400 focus:placeholder-gray-500"
              />

              {/* Submit Button for the final form */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md w-full"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      {/* Right Section: Profile with Dropdown and Doctor Image */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-end relative mt-8 lg:mt-12">
        {" "}
        {/* Adjusted margin-top */}
        {/* Profile Dropdown Toggle (Logo click) */}
        <img
          src={profileImage}
          alt="Profile"
          className={`w-20 h-20 object-cover rounded-full cursor-pointer absolute top-0 right-0 ${
            showProfileImage ? "" : "hidden"
          }`}
          onClick={toggleDropdown}
        />
        {/* Dropdown menu */}
        {showDropdown && profile && (
          <div className="absolute top-12 right-0 bg-white p-4 shadow-lg rounded-lg z-10">
            <div className="mb-3 text-black font-bold">{profile.name}</div>
            <div className="mb-3 text-black">Age: {profile.age}</div>
            <div className="mb-3 text-black">Gender: {profile.gender}</div>
            <button
              onClick={resetProfile}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Reset Profile
            </button>
          </div>
        )}
        {/* New Doctor Image on the Right, hidden on mobile */}
        <img
          src={doctorSideImage}
          alt="Doctor"
          className="w-90 h-auto object-cover mx-auto mt-3 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default DosageSafetyCheck;
