

import React, { useState } from 'react';

const slides = [
  {
    heading: "The Tech Mahindra Promise",
    videoUrl: "https://insights.techmahindra.com/videos/techm_banner2.mp4",
  },
  {
    heading: "Tech Mahindra Financial Results for Q1 FY'25 Announced",
    videoUrl: "https://insights.techmahindra.com/videos/result_video_banner.mp4",
  },
  {
    heading: "Tech Mahindra Recognized as one of the World's Most Sustainable Companies 2024",
    videoUrl: "https://insights.techmahindra.com/videos/techm_banner3_1.mp4",
  },
  {
    heading: "Tech Mahindra Launches Project Indus Large Language Model(LLM)",
    videoUrl: "https://insights.techmahindra.com/videos/techm_banner4_1.mp4",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setSlide = (index) => setCurrentSlide(index);

  return (
    <>
      <div className="hero-container">
        {/* Static Text Section */}
        <div className="text-section">
          <div className="text-content">
            <h1>Scale at Speed<span>TM</span></h1>
            <p>
              Our promise to help enterprises across industries transform at speed and bring
              agility, resilience, and efficiency to their businesses.
            </p>
          </div>
        </div>

        {/* Slideshow Section */}
        <div className="slideshow-section">
          {/* Background Video */}
          <video className="background-video" src={slides[currentSlide].videoUrl} autoPlay loop muted />

          <div className={`slide-content slide-${currentSlide}-content`}>
            <h1>{slides[currentSlide].heading}</h1>
            <button>KNOW MORE</button>
          </div>
          
          {/* Slideshow Navigation */}
          <ul className="navigation">
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`nav-item ${currentSlide === index ? "active" : ""}`}
                onClick={() => setSlide(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
