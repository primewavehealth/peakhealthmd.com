// components/VideoBackgroundSection.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

function VideoBackgroundSection() {
  const backgroundVideo = require("../../public/videos/video1.mp4");
  const videoRef = useRef<HTMLVideoElement>(null);

  const [showUnmute, setShowUnmute] = useState(true);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);

  const handleUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
    setShowUnmute(false);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLine1(true), 300);  // Line 1 appears after 0.3s
    const timer2 = setTimeout(() => setShowLine2(true), 1200); // Line 2 appears after 1.2s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Foreground Text */}
      <div className="relative z-10 flex items-center h-full w-full text-left">
        <div className="px-8 md:px-20 w-full">
          {/* Line 1 */}
          <h1
            className={`text-4xl font-extrabold text-gray md:text-6xl transition-all duration-1000 ease-out transform ${
              showLine1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Integrative Medicine <br />at Primewave
          </h1>

          {/* Line 2 */}
          <p
            className={`mt-4 text-lg text-grey-200 md:text-2xl max-w-4xl transition-all duration-1000 ease-out transform ${
              showLine2 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            Experience natural healing powered by advanced bio-energetic technology at PrimeWave Health.
          </p>
        </div>
      </div>

      {/* Unmute Button */}
      {showUnmute && (
        <button
          onClick={handleUnmute}
          className="absolute bottom-8 right-8 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-black font-semibold py-2 px-4 rounded-lg shadow-lg transition"
        >
          Unmute
        </button>
      )}
    </section>
  );
}

export default VideoBackgroundSection;
