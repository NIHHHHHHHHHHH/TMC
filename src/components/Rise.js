import React from 'react';


const RiseSection = () => {
  return (
    <div className="rise-section">
      <div className="image-contain">
        <img 
          src="https://insights.techmahindra.com/styles/text_and_image_desktop/s3/images/adobestock_619698910.jpeg.webp" 
          alt="Rise" 
          className="rise-image"
        />
      </div>
      <div className="content-container">
        <h1>RISE</h1>
        <p>
          At Tech Mahindra, 'Rise' is our core brand pillar that goes beyond 
          business. It underscores our entire organization’s culture and how we 
          inspire our employees, stakeholders, and communities to uphold the 
          three core tenets of this philosophy – Rise for an equal world, to be 
          future-ready, and to create value.
        </p>
        <a href="/learn-more" className="learn-more-link">LEARN MORE</a>
      </div>
    </div>
  );
};

export default RiseSection;