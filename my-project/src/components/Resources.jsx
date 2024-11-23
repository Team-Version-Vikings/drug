import React from 'react';

const Resources = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Resources</h1>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-700 mb-4">
            This guide will help you get started with Drug Doc and provide essential tips and tutorials.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <p className="text-gray-700 mb-4">
            The API Reference contains comprehensive documentation to integrate our features into your app.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Explore API Reference
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Community Forums</h2>
          <p className="text-gray-700 mb-4">
            Join our community forums to ask questions, share experiences, and learn more about healthcare solutions.
          </p>
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Join the Discussion
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resources;
