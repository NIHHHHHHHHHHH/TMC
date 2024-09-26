import React from 'react';


// Data for the grid (dynamic content can be passed as props as well)
const cardData = [
  { title: "Artificial Intelligence",description:"Amplify your business with TechM by infusing AI in every aspect of your buiness,democratizing AI responsibly" ,imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/ai.jpg" },
  { title: "Business Process Services",description:"Unveil new ways to disrupt your industry", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/business_process_services.jpg" },
  { title: "Cloud and Infrastructure Services",description:"Empower your organization with a powerfully designed infrastructure stack and support technologies", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/infrastructure_cloud_services.jpg" },
  { title: "Digital Enterprise Applications",description:"Experience unpraralleled innovation,efficiency, and adaptability", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/digitalenterprise.jpg" },
  { title: "Engineering Services",description:"Enable seamless cyber-physical integration for enhanced visibility and predictability", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/integrated_engineering_services.jpg" },
  { title: "Experience Services",description:"Practice the art of giving you customers truly mmorable experiences", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/bornpreview_0.png" },
  { title: "Network Services",description:"Leverage new opportunities to enhance netweok operations", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/network_services.jpg" },
  { title: "Testing Services",description:"Accelerate the development of end-to-end automated operations for your business", imgSrc: "https://insights.techmahindra.com/styles/competencies_290x400/s3/images/testing_services.jpg" }
];
const Card = ({ title, description, imgSrc }) => {
  return (
    <div className="card">
      <div className="card-overlay">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={imgSrc} alt={title} className="card-image" />
    </div>
  );
};

// ServicesSection component
const ServicesSection = () => {
  return (
    <>
        <div className="capabilities-container">
      <h2 className="capabilities-title">Capabilities</h2>
      <p className="capabilities-description">
        We offer a wide range of digital solutions and best-in-class platforms to
        deliver meaningful outcomes, enhance customer experiences, and transform
        industries at scale and with unparalleled speed.
      </p>
    </div>
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} imgSrc={card.imgSrc} />
      ))}
    </div>
    </>
  );
};

export default ServicesSection;