import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget/ChatWidget"; 
import Home from "./pages/HomePage";
import DiseaseSearch from "./pages/DiseaseSearchPage";
import DosageSafetyCheck from "./pages/DosageSafetyCheckPage";
import VideoCall from "./pages/VideoCallPage";
import ChatBot from "./pages/ChatBotPage";
import ContactUs from "./pages/ContactUsPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import PregnancyDescriptionPage from "./pages/PregnancyPage";
import Team from "./pages/TeamPage";
import Minidoctor from "./pages/MiniDoctorPage";


const App = () => {
  const location = useLocation();

  
  const hiddenPaths = ["/", "/signin"];

 
  const showNavbarAndFooter = !hiddenPaths.includes(location.pathname);


  const showChatWidget = !hiddenPaths.includes(location.pathname);

  return (
    <div className="font-sans bg-gray-100 flex flex-col min-h-screen overflow-hidden">
      
      {showNavbarAndFooter && <Navbar />}

     
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
       
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

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
          <Route path="/team" element={<Team />} />
          <Route path="/minidoctor" element={<Minidoctor />} />
        </Routes>
      </div>

  
      {showNavbarAndFooter && <Footer />}

      
      {showChatWidget && <ChatWidget />}
    </div>
  );
};

export default App;
