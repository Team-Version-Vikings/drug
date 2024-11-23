// import React, { useRef } from "react";
// import { motion } from "framer-motion";
// import VideoCall from "./VideoCallPage";

// function Chatbot() {
//   const chatbotRef = useRef(); // Ref for scrolling to the chatbot
  
//   // Scroll to the chatbot section
//   const scrollToChatbot = () => {
//     if (chatbotRef.current) {
//       chatbotRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="app relative pb-24">
//       {/* Text Section */}
//       <div className="text absolute w-3/4 left-1/2 top-1/3 text-center text-white text-2xl font-sans" style={{ transform: "translateX(-50%)" }}>
//         <h2>Hello, World!</h2>
//         <p>Framer motion parallax effects are super cool!</p>
//       </div>

//       {/* Background Image */}
//       <img
//         src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
//         className="w-full h-[110vh] object-cover -z-10"
//         alt="Background"
//       />

//       {/* Button to Scroll to Chatbot */}
//       <div className="flex justify-center items-center mt-8">
//         <button
//           onClick={scrollToChatbot}
//           className="px-8 py-4 text-xl bg-[#0079bf] text-white rounded-lg cursor-pointer hover:bg-[#005f8e]"
//         >
//           Go to Video Call
//         </button>
//       </div>

//       {/* Chatbot Section */}
//       <div ref={chatbotRef} className="pt-12 bg-[#f0f8ff] rounded-xl mt-8 px-6 py-8">
//         <VideoCall /> {/* This will show the chatbot/video call section */}
//       </div>
//     </div>
//   );
// }

// export default Chatbot;


import React from "react";
import ChatBot from "../components/ChatBot";

const App = () => (
  <div>
    <ChatBot />
  </div>
);

export default ChatBot;