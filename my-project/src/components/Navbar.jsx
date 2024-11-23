import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { navItems } from "../contents/index";
import doctorLogo from "../assets/doctor14.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // state for the confirmation modal
  const navigate = useNavigate(); // initialize useNavigate

  // Handle Logout confirmation
  const handleLogout = (confirm) => {
    if (confirm) {
      // Perform any logout logic (e.g., clear tokens, etc.)
      navigate("/signin"); // Redirect to the sign-in page
    } else {
      setShowLogoutConfirmation(false); // Close the modal if 'No'
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&display=swap"
        rel="stylesheet"
      />
      <nav className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={doctorLogo} alt="Doctor Logo" className="h-8 w-8" />
            <div className="text-white font-bold text-2xl">
              <NavLink
                to="/home"
                className="hover:text-gray-300"
                style={{ fontFamily: "'Faculty Glyphic', sans-serif" }}
              >
                DRUG DOC
              </NavLink>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-3 text-white font-normal ml-auto justify-end items-center">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <NavLink
                  to={item.href || "#"}
                  className="px-2 py-2 rounded-md transition duration-200 hover:bg-gray-300 hover:text-black shadow-sm whitespace-nowrap"
                  activeClassName="bg-gray-300 text-black"
                  style={{ fontFamily: "'Faculty Glyphic', sans-serif" }}
                  onClick={() =>
                    setActiveItem(index === activeItem ? null : index)
                  }
                >
                  {item.label}
                </NavLink>
                {item.items && activeItem === index && (
                  <ul className="absolute right-0 bg-white text-black shadow-md mt-2 rounded-md z-10">
                    {item.items.map((subItem, idx) => (
                      <li key={idx} className="px-4 py-2 hover:bg-gray-300">
                        <NavLink
                          to={subItem.href}
                          className="block"
                          style={{
                            fontFamily: "'Faculty Glyphic', sans-serif",
                          }}
                          activeClassName="bg-gray-300 text-black"
                        >
                          {subItem.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button
            onClick={() => setShowLogoutConfirmation(true)} // Trigger the confirmation modal
            className="ml-6 px-6 py-2 rounded-md transition duration-200 hover:bg-gray-300 hover:text-black shadow-sm text-white font-semibold"
          >
            Logout 🔓
          </button>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4">
            <ul className="text-center">
              {navItems.map((item, index) => (
                <li key={index} className="font-normal">
                  <NavLink
                    to={item.href || "#"}
                    className="block px-4 py-2 rounded-md transition duration-200 hover:bg-gray-300 hover:text-black shadow-sm"
                    style={{ fontFamily: "'Faculty Glyphic', sans-serif" }}
                    activeClassName="bg-gray-300 text-black"
                    onClick={() =>
                      setActiveItem(index === activeItem ? null : index)
                    }
                  >
                    {item.label}
                  </NavLink>
                  {item.items && activeItem === index && (
                    <ul className="text-left ml-4 mt-2 bg-cyan-600 rounded-md">
                      {item.items.map((subItem, idx) => (
                        <li key={idx} className="px-4 py-2 hover:bg-gray-300">
                          <NavLink
                            to={subItem.href}
                            className="block"
                            style={{
                              fontFamily: "'Faculty Glyphic', sans-serif",
                              color: "white",
                            }}
                            activeClassName="bg-gray-300 text-black"
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">
              Are you sure? &#x1F622;
            </h2>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleLogout(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Yes
              </button>
              <button
                onClick={() => handleLogout(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
              >
                No
              </button>
            </div>
            <button
              onClick={() => setShowLogoutConfirmation(false)}
              className="absolute top-2 right-2 text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
