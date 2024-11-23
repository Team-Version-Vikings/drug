// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
// import HomeCards from "../components/HomeCards";



const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <HeroSection />
            {/* <HomeCards /> */}
            
        </div>
    );
};

export default Home;