import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="flex space-x-4">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/about" className="hover:text-gray-300">About</Link>
      <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      <Link to="/services" className="hover:text-gray-300">Services</Link>  
    </nav>
  )
}

export default Navigation