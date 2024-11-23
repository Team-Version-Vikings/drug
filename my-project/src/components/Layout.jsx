// src/components/Layout.jsx
import React from "react";
import Footer from "./Footer";  // import the existing Footer component

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Ensures full screen height */}
            <main className="flex-grow">{children}</main> {/* Main content area */}
            <Footer /> {/* Footer at the bottom */}
        </div>
    );
};

export default Layout;
