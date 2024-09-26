import React, { useState } from "react";

// Industries data
const industries = [
  { title: "Banking and Financial Services",icon:"https://insights.techmahindra.com/images/banking.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/bankingsmall.jpg" },
  { title: "Communication",icon:"https://insights.techmahindra.com/images/communications.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/communicationssmall.jpg" },
  { title: "Energy and Utilities",icon:"https://insights.techmahindra.com/images/energy_0.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/energy_0.jpg" },
  { title: "Health and Life Sciences",icon:"https://insights.techmahindra.com/images/health_science.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/healthcaresmall.jpg" },
  { title: "Hitech",icon:"https://insights.techmahindra.com/images/hi_tech.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/hi_techsmall.jpg" },
  { title: "Insurance",icon:"https://insights.techmahindra.com/images/insurance_0.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/insurancesmall.jpg" },
  { title: "Manufacturing",icon:"https://insights.techmahindra.com/images/manufacturing.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/manufacturingsmall.jpg" },
  { title: "Media and Entertainment",icon:"https://insights.techmahindra.com/images/media.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/mediasmall.jpg" },
  { title: "Oil and Gas",icon:"https://insights.techmahindra.com/images/oil_gas.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/oilsmall.jpg" },
  { title: "Private Equity",icon:"https://insights.techmahindra.com/images/private_equity.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/private_equity_small.png" },
  { title: "Professional Services",icon:"https://insights.techmahindra.com/images/professional_services.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/professional_services_small.png" },
  { title: "Retail and Consumer Goods",icon:"https://insights.techmahindra.com/images/retail_0.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/consumer_goodssmall.jpg" },
  { title: "Travel, Transportation, Logistics & Hospitality",icon:"https://insights.techmahindra.com/images/logistics.svg", img: "https://insights.techmahindra.com/styles/card_image_view/s3/images/logisticssmall.jpg" },
];


const Industries = () => {
  const [startIndex, setStartIndex] = useState(0);



  const progress = ((startIndex + 5) / industries.length) * 100; // Progress bar logic

  return (
    <div
      className="container"
    >
      {/* Header Section */}
      <div className="header-section">
        <h1>Industries</h1>
        <p>
          Our expertise spans 13 industries from banking, insurance,
          telecommunications, media, entertainment, distribution, retail, to many more.
        </p>
        <div className="navigation-buttons">
          <button onClick={() => setStartIndex(startIndex - 1)} disabled={startIndex === 0}>
            &#8592;
          </button>
          <button onClick={() => setStartIndex(startIndex + 1)} disabled={startIndex >= industries.length - 5}>
            &#8594;
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-wrapper">
        <div className="carousel" >
          {industries.slice(startIndex, startIndex + 5).map((industry, index) => (
            <div className="carousel-item" key={index}>
              <p>
                <img className="icon" src={industry.icon} alt={industry.title} />
              </p>
              <h1>{industry.title}</h1>
              <div className="image-container">
                <img className="industry-img" src={industry.img} alt={industry.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Industries;