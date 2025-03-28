import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation'

const Header = () => {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`w-full py-4 px-4 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className='max-w-7xl mx-auto flex flex-row justify-between items-center'>
        <div className="p-2 md:p-4 rounded-lg transform transition-all duration-500 hover:scale-105">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">REKHMANOTTAM</h1>
          <h2 className="text-lg sm:text-xl md:text-2xl italic mt-1 md:mt-2 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Healing Together!</h2>
        </div>

        {/* Use the enhanced Navigation component */}
        <Navigation />
      </div>
    </header>
  )
}

export default Header