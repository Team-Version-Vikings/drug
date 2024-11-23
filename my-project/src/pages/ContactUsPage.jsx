import React, { useState } from "react";
import { motion } from "framer-motion";
import doctorImage from "../assets/doctor11.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerAnimation = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
      {/* Image Section - Hidden on mobile */}
      <div className="w-full md:w-2/3  justify-center md:justify-start md:ml-8 hidden md:block">
        <img
          src={doctorImage}
          alt="Doctor"
          className="w-full h-auto md:w-[200%] rounded-lg transform md:-translate-x-4"
        />
      </div>

      {/* Forms Section */}
      <motion.div
        className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={staggerAnimation}
      >
        {/* Contact Form */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg md:max-w-4xl w-full"
          variants={formAnimation}
        >
          <h2 className="text-2xl font-semibold mb-5">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            We are here to help. Feel free to reach out for any inquiries or
            support.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div variants={formAnimation}>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white text-black"
                required
              />
            </motion.div>
            <motion.div variants={formAnimation}>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white text-black"
                required
              />
            </motion.div>
            <motion.div variants={formAnimation}>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white text-black"
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              variants={formAnimation}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Address Section */}
        <motion.div
          className="bg-white p-6 md:p-8 rounded-lg shadow-lg md:max-w-lg"
          variants={formAnimation}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Address</h2>
          <p className="text-gray-700 mb-4">
            You can also reach us at our office address or contact our support
            team directly.
          </p>
          <p className="text-lg text-gray-700">
            123 Main Street, City, Country
          </p>
          <p className="text-lg text-gray-700">Phone: +123 456 7890</p>
          <p className="text-lg text-gray-700">Email: support@drugdoc.com</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
