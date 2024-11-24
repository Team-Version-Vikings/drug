import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget/ChatWidget"; // Import ChatWidget

// Pages
import Home from "./pages/HomePage";
import DiseaseSearch from "./pages/DiseaseSearchPage";
import DosageSafetyCheck from "./pages/DosageSafetyCheckPage";
import VideoCall from "./pages/VideoCallPage";
import ChatBot from "./pages/ChatBotPage";
import ContactUs from "./pages/ContactUsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PregnancyDescriptionPage from "./pages/PregnancyPage";
import TeamPage from "./pages/TeamPage";


const App = () => {
  const location = useLocation();

  // Paths where Navbar, Footer, or ChatWidget should not be shown
  const hiddenPaths = ["/", "/signin"];

  // Check if Navbar and Footer should be displayed
  const showNavbarAndFooter = !hiddenPaths.includes(location.pathname);

  // Check if ChatWidget should be displayed
  const showChatWidget = !hiddenPaths.includes(location.pathname);

  return (
    <div className="font-sans bg-gray-100 flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      {showNavbarAndFooter && <Navbar />}

      {/* Main Content Area */}
      <div
        className="flex-grow overflow-hidden"
        style={{
          background: "linear-gradient(to right, #348AC7, #7474BF)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          {/* Authentication Routes */}
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* Application Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/diseasesearch" element={<DiseaseSearch />} />
          <Route path="/dosagesafetycheck" element={<DosageSafetyCheck />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/videocall" element={<VideoCall />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route
            path="/pregnancydescription"
            element={<PregnancyDescriptionPage />}
          />
          <Route path="/team" element={<Team/>} />
          
          
        </Routes>
      </div>

      {/* Footer */}
      {showNavbarAndFooter && <Footer />}

      {/* Chat Widget */}
      {showChatWidget && <ChatWidget />}
    </div>
  );
};

export default App;
