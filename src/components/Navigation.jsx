import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 lg:space-x-10  ">
        <Link to="/" className="relative px-4 py-3 text-xl lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_15px_25px_rgba(167,139,250,0.4)] transition-shadow duration-300 rounded-lg">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-400 to-fuchsia-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg "></span>
          <span className="relative bg-clip-text text-indigo-700 font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-colors duration-300 shadow-2xl ">Home</span>
        </Link>
        <Link to="/about" className="relative px-4 py-3 text-lg lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(124,58,237,0.3)] hover:shadow-[0_15px_25px_rgba(192,132,252,0.4)] transition-shadow duration-300 rounded-lg">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-lg"></span>
          <span className="relative bg-clip-text text-transparent font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-colors duration-300 shadow-2xl ">About</span>
        </Link>
        <Link to="/contact" className="relative px-4 py-3 text-lg lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(219,39,119,0.3)] hover:shadow-[0_15px_25px_rgba(6,182,212,0.4)] transition-shadow duration-300 rounded-lg">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-lg"></span>
          <span className="relative bg-clip-text text-transparent font-bold bg-gradient-to-r from-fuchsia-600 to-cyan-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-colors duration-300 shadow-2xl ">Contact</span>
        </Link>
        <Link to="/services" className="relative px-4 py-3 text-lg lg:text-2xl font-medium overflow-hidden group shadow-[0_10px_20px_rgba(6,182,212,0.3)] hover:shadow-[0_15px_25px_rgba(79,70,229,0.4)] transition-shadow duration-300 rounded-lg">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-indigo-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-lg"></span>
          <span className="relative bg-clip-text text-transparent font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white transition-colors duration-300 shadow-2xl ">Services</span>
        </Link>  
      </nav>
      
      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Menu button for mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full shadow-[0_8px_15px_rgba(79,70,229,0.4)] hover:shadow-[0_12px_20px_rgba(219,39,119,0.5)] transform transition-all duration-300 hover:scale-110 bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 border-2 border-white focus:outline-none fixed top-4 right-4 z-[60]"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
            {isMenuOpen ? (
              <path 
                d="M6 18L18 6M6 6l12 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            ) : (
              <path 
                d="M4 6h16M4 12h16M4 18h16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            )}
          </svg>
        </button>
        
        {/* Mobile menu overlay with fixed positioning and full viewport coverage */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-0 left-0 w-screen h-screen z-40 bg-white bg-opacity-95 backdrop-blur-sm flex flex-col items-center justify-center animate-fadeIn overflow-y-auto">
            <div className="flex flex-col items-center space-y-6 text-xl py-16 px-4 max-h-screen w-full">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-fuchsia-600 font-bold transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-fuchsia-500 px-6 py-2 border-b-2 border-transparent hover:border-indigo-500 shadow-[0_4px_8px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_15px_rgba(219,39,119,0.4)] rounded-lg"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)} 
                className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600 font-bold transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 px-6 py-2 border-b-2 border-transparent hover:border-violet-500 shadow-[0_4px_8px_rgba(124,58,237,0.3)] hover:shadow-[0_8px_15px_rgba(192,132,252,0.4)] rounded-lg"
              >
                About
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)} 
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-indigo-600 font-bold transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-500 px-6 py-2 border-b-2 border-transparent hover:border-cyan-500 shadow-[0_4px_8px_rgba(6,182,212,0.3)] hover:shadow-[0_8px_15px_rgba(79,70,229,0.4)] rounded-lg"
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-cyan-600 font-bold transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500 px-6 py-2 border-b-2 border-transparent hover:border-fuchsia-500 shadow-[0_4px_8px_rgba(219,39,119,0.3)] hover:shadow-[0_8px_15px_rgba(6,182,212,0.4)] rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navigation