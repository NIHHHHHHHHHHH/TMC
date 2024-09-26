import React  from 'react';




const ScaleAtSpeed = () => {

  return (
    <>
       <div className="scale-container">
         {/* Static Text Section */}
         <div className="scale-section">
             <div className="scale-content">
                   <h1>Scale at Speed <span>with Tech Mahindra</span></h1>
                   <p>
                     Thriving in the current dynamic landscape demands technological solutions that
                     enable both transformative scale and unparalleled speed.
                   </p>
             </div>
             <div className={`speed-content `}>
              <p>Scale at Speed</p>
              <h1>True Scalability, Agility, and Responsiveness</h1>
             <button>KNOW MORE</button>
          </div>
         </div>

         {/* Slideshow Section */}
        
         <div className="speed-section">
               {/* Background Image */}
             <img className='background-image' src='https://insights.techmahindra.com/styles/de2e/s3/images/nxtnow.jpg' alt='' />
         </div>
          
       </div>
   </>
  );
};

export default ScaleAtSpeed;