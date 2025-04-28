import React, { useRef, useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { Analytics } from "@vercel/analytics/react"
import Navigation from './components/Navigation'


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Check which section is currently in view
      if (homeRef.current && scrollPosition < homeRef.current.offsetTop + homeRef.current.offsetHeight) {
        setActiveSection('home');
      } else if (aboutRef.current && scrollPosition < aboutRef.current.offsetTop + aboutRef.current.offsetHeight) {
        setActiveSection('about');
      } else if (servicesRef.current && scrollPosition < servicesRef.current.offsetTop + servicesRef.current.offsetHeight) {
        setActiveSection('services');
      } else if (contactRef.current) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef) => {
    // Add offset to account for the fixed header
    const headerOffset = 80;
    const elementPosition = sectionRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Analytics />
      <header className="w-full py-4 px-4 sticky top-0 z-50 backdrop-blur-lg shadow-lg">
        <div className='max-w-7xl mx-auto flex flex-row justify-between items-center'>
          <div className="p-2 md:p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">REKHMANOTTAM</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl italic mt-1 md:mt-2 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Healing Together!</h2>
          </div>
          
          {/* Custom Navigation for Single Page */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10">
            <button 
              onClick={() => scrollToSection(homeRef)} 
              className={`relative px-4 py-3 text-xl lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_25px_rgba(167,139,250,0.4)] transition-shadow duration-300 rounded-lg ${activeSection === 'home' ? 'bg-gradient-to-r from-indigo-400 to-fuchsia-500' : ''}`}
            >
              <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-400 to-fuchsia-500 ${activeSection === 'home' ? 'opacity-90' : 'opacity-0 group-hover:opacity-90'} transition-opacity duration-300 rounded-lg`}></span>
              <span className={`relative ${activeSection === 'home' ? 'text-white font-bold' : 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-700 font-bold'} group-hover:text-white transition-colors duration-300 shadow-2xl`}>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection(aboutRef)} 
              className={`relative px-4 py-3 text-lg lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_25px_rgba(192,132,252,0.4)] transition-shadow duration-300 rounded-lg ${activeSection === 'about' ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500' : ''}`}
            >
              <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 ${activeSection === 'about' ? 'opacity-90' : 'opacity-0 group-hover:opacity-90'} transition-opacity duration-300 rounded-lg shadow-lg`}></span>
              <span className={`relative ${activeSection === 'about' ? 'text-white font-bold' : 'bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold'} group-hover:text-white transition-colors duration-300 shadow-2xl`}>About</span>
            </button>
            <button 
              onClick={() => scrollToSection(servicesRef)} 
              className={`relative px-4 py-3 text-lg lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_25px_rgba(79,70,229,0.4)] transition-shadow duration-300 rounded-lg ${activeSection === 'services' ? 'bg-gradient-to-r from-cyan-500 to-indigo-500' : ''}`}
            >
              <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-indigo-500 ${activeSection === 'services' ? 'opacity-90' : 'opacity-0 group-hover:opacity-90'} transition-opacity duration-300 rounded-lg shadow-lg`}></span>
              <span className={`relative ${activeSection === 'services' ? 'text-white font-bold' : 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600 font-bold'} group-hover:text-white transition-colors duration-300 shadow-2xl`}>Services</span>
            </button>
            <button 
              onClick={() => scrollToSection(contactRef)} 
              className={`relative px-4 py-3 text-lg lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(219,39,119,0.3)] hover:shadow-[0_15px_25px_rgba(6,182,212,0.4)] transition-shadow duration-300 rounded-lg ${activeSection === 'contact' ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500' : ''}`}
            >
              <span className={`absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 ${activeSection === 'contact' ? 'opacity-90' : 'opacity-0 group-hover:opacity-90'} transition-opacity duration-300 rounded-lg shadow-lg`}></span>
              <span className={`relative ${activeSection === 'contact' ? 'text-white font-bold' : 'bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-cyan-600 font-bold'} group-hover:text-white transition-colors duration-300 shadow-2xl`}>Contact</span>
            </button>
          </nav>
          
          {/* Mobile Navigation - We'll implement this later */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-full shadow-[0_8px_15px_rgba(79,70,229,0.4)] hover:shadow-[0_12px_20px_rgba(219,39,119,0.5)] transform transition-all duration-300 hover:scale-110 bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 border-2 border-white focus:outline-none"
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path 
                  d="M4 6h16M4 12h16M4 18h16" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      <main>
        <section ref={homeRef} id="home" className="min-h-screen">
          <Home />
        </section>
        
        <section ref={aboutRef} id="about" className="min-h-screen">
          <About />
        </section>
        
        <section ref={servicesRef} id="services" className="min-h-screen">
          <Services />
        </section>
        
        <section ref={contactRef} id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
    </>
)}

export default App
