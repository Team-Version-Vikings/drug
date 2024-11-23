import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoImage from "../assets/doctor6.jpeg";
import doctorImage from "../assets/doctor16.png";

const SignIn = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // Add successMessage state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const { email, password } = formData;
    const newErrors = [];
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.push("Valid email is required.");
    if (password.length < 6)
      newErrors.push("Password must be at least 6 characters.");
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "https://drugdoc-backend.onrender.com",
        formData
      );

      if (response.status === 200) {
        // Store user in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Set success message and redirect
        setSuccessMessage("Login successful!");
        navigate("/home"); // Redirect to the home page
      } else {
        setErrors([
          response.data.message || "Sign-in failed. Please try again.",
        ]);
      }
    } catch (error) {
      setErrors([
        error.response?.data?.error || "Sign-in failed. Please try again.",
      ]);
    }
  };

  return (
    <div
      className="flex lg:flex-row flex-col justify-center items-center fixed inset-0 overflow-hidden"
      style={{
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(to bottom right, skyblue, #00c6ff, #0072ff)",
      }}
    >
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <img
          src={logoImage}
          alt="Drug Doc Logo"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h1 className="text-black font-serif text-4xl font-bold">Drug Doc</h1>
      </div>
      <div className="lg:w-1/2 w-full h-full justify-center items-center hidden lg:block">
        <img
          src={doctorImage}
          alt="Login Visual"
          className="w-70 h-100 object-cover"
        />
      </div>
      <div className="lg:w-1/2 w-full max-w-lg p-6">
        <div className="text-center mb-6">
          <p className="text-lg text-black font-mono font-semibold">
            Welcome back! Please enter your credentials to log in to your
            account.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
          <h1 className="text-3xl font-semibold text-center text-black mb-6">
            Login
          </h1>
          {successMessage && (
            <div className="bg-green-500 text-white text-center p-2 rounded mb-4">
              {successMessage}
            </div>
          )}
          {errors.length > 0 && (
            <div className="bg-red-500 text-white p-2 rounded mb-4">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-black font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Enter your email"
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                placeholder="Enter your password"
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <a href="/" className="text-blue-500 hover:text-blue-700">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
