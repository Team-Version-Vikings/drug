import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/HomePage';
import DiseaseSearch from './pages/DiseaseSearchPage';
import DosageSafetyCheck from './pages/DosageSafetyCheckPage';
import VideoCall from './pages/VideoCallPage';
import ChatBot from './pages/ChatBotPage';

import ContactUs from './pages/ContactUsPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import PregnancyDescriptionPage from './pages/PregnancyPage';



const App = () => {
  const location = useLocation();

  // Define paths where Navbar and Footer should not be shown (e.g., SignUp, SignIn, DiseaseSearch, DosageSafetyCheck pages)
  const hideElementsPaths = ['/', '/signin'];

  // Check if the current path is in the list of paths that should hide Navbar and Footer
  const showNavbarAndFooter = !hideElementsPaths.includes(location.pathname);

  return (
    <div className="font-sans bg-gray-100 flex flex-col min-h-screen overflow-hidden">
      {/* Conditionally render Navbar */}
      {showNavbarAndFooter && <Navbar />}

      {/* Main content area with gradient background */}
      <div
        className="flex-grow overflow-hidden"
        style={{
          background: "#7474BF" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #348AC7, #7474BF)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #348AC7, #7474BF)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,

          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          {/* Route for SignUpPage as default route */}
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          {/* Other routes with Navbar */}
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
        </Routes>
      </div>

      {/* Conditionally render Footer */}
      {showNavbarAndFooter && <Footer />}
    </div>
  );
};

export default App;
