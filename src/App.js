import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ScaleAtSpeed from './components/ScaleAtSpeed';
import Sustainable from './components/SustainableFuture';
import Industries from './components/Industries';
import RiseSection from './components/Rise';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ScaleAtSpeed  />
      <Industries  />
      <Sustainable />
      <RiseSection  />
      <ContactUs  />
      <Footer />

      </>  
  );
}

export default App;
