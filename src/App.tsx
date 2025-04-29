import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { handleNavLinkClick } from './utils/smoothScroll';

function App() {
  // Add smooth scrolling to all navigation links
  useEffect(() => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick as unknown as EventListener);
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick as unknown as EventListener);
      });
    };
  }, []);
  
  // Update document title
  useEffect(() => {
    document.title = "Energy Demand Forecasting - Bangladesh";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Introduction />
      <Methodology />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;