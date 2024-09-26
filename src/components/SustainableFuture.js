import React  from 'react';




const ScaleAtSpeed = () => {

  return (
    <>
       <div className="sustain-container">
         {/* Static Text Section */}
         <div className="sustain-section">
          
             <div className={`sustain-content `}>
              <h1>Towards a Sustainable Future</h1>
              <p>Learn how we maintain a balance between sustainability and overall business profitability.</p>
             <button>OUR SUSTAINABILITY EFFORTS</button>
          </div>
         </div>

         {/* Slideshow Section */}
        
         <div className="future-section">
               {/* Background Image */}
             <img className='back-image' src='https://insights.techmahindra.com/styles/de2e/s3/images/sustainabilityhompage.jpg' alt='' />
         </div>
          
       </div>
   </>
  );
};

export default ScaleAtSpeed;