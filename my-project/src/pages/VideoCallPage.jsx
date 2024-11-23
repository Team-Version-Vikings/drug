import React, { useEffect, useState, useRef } from "react";
import "../styles/VideoCall.css"; // Make sure to import the CSS file

const VideoCall = () => {
  const videoFrameRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoFrameRef.current) {
      const dailyRoomURL = "https://hackerearthnmamit.daily.co/drugdoc";
      videoFrameRef.current.src = dailyRoomURL;
    }
  }, []);

  // Function to handle iframe onLoad event to hide loading spinner
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Custom Loader */}
      {isLoading && (
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Video Frame */}
      <iframe
        ref={videoFrameRef}
        style={{
          width: "100vw",
          height: "100vh",
          border: "none",
        }}
        allow="camera; microphone; fullscreen; speaker; display-capture"
        onLoad={handleIframeLoad}
      ></iframe>
    </div>
  );
};

export default VideoCall;
