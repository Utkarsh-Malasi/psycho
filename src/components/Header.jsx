import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className='w-full md:h-24 h-16 sm:h-20 px-4 mt-6'>
        <div className='max-w-7xl mx-auto h-full flex justify-between items-center'>
        <div className=" p-4 rounded-lg ">
  <h1 className="text-2xl md:text-4xl font-bold text-black ml-2">REKHMANOTTAM</h1>
  <h2 className="text-xl md:text-3xl text-black italic mt-2 md:mt-4 px-32 ">Healing Together!</h2>
</div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-16 text-2xl'>
            <button onClick={() => navigate('/')} className='nav-link text-black hover:text-blue-500 font-bold'>Home</button>
            <button onClick={() => navigate('/about')} className='nav-link text-black hover:text-green-500 font-bold'>About</button>
            <button onClick={() => navigate('/services')} className='nav-link text-black hover:text-pink-500 font-bold'>Services</button>
            <button onClick={() => navigate('/contact')} className='nav-link text-black hover:text-purple-500 font-bold'>Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className='md:hidden text-white z-50 fixed right-4 top-4'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-40`}
        >
          <div className='flex flex-col space-y-2 pt-20 px-4'>
            <button onClick={() => {navigate('/'); setIsMenuOpen(false)}} className='text-white hover:text-blue-500 font-bold py-2'>Home</button>
            <button onClick={() => {navigate('/about'); setIsMenuOpen(false)}} className='text-white hover:text-green-500 font-bold py-2'>About</button>
            <button onClick={() => {navigate('/services'); setIsMenuOpen(false)}} className='text-white hover:text-pink-500 font-bold py-2'>Services</button>
            <button onClick={() => {navigate('/contact'); setIsMenuOpen(false)}} className='text-white hover:text-purple-500 font-bold py-2'>Contact</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header