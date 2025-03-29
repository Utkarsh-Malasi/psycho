import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { FaHome, FaPhone, FaInfoCircle, FaHandsHelping, FaSearch } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Rekhmanottam Psychology</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden p-6 sm:p-10 text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-purple-600 mb-4">404</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">
              We're sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <div className="w-full max-w-md mx-auto h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 rounded-full mb-8"></div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Here are some helpful links:</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link to="/" className="flex items-center justify-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all duration-300 text-purple-700 font-medium">
                <FaHome className="text-xl" />
                <span>Return Home</span>
              </Link>
              <Link to="/services" className="flex items-center justify-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all duration-300 text-purple-700 font-medium">
                <FaHandsHelping className="text-xl" />
                <span>Our Services</span>
              </Link>
              <Link to="/about" className="flex items-center justify-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all duration-300 text-purple-700 font-medium">
                <FaInfoCircle className="text-xl" />
                <span>About Us</span>
              </Link>
              <Link to="/contact" className="flex items-center justify-center gap-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-all duration-300 text-purple-700 font-medium">
                <FaPhone className="text-xl" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          
          {/* Search suggestion - SEO Enhancement */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-purple-700 mb-4">Looking for something specific?</h2>
            <div className="max-w-md mx-auto">
              <div className="flex items-center p-2 bg-purple-50 rounded-lg">
                <FaSearch className="text-purple-600 ml-2" />
                <input 
                  type="text" 
                  placeholder="Search our website..."
                  className="w-full p-2 bg-transparent border-none focus:outline-none text-gray-700"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      window.location.href = `/?search=${encodeURIComponent(e.target.value)}`;
                    }
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="text-gray-600">
            <p>If you believe this is an error, please contact us at <a href="mailto:rekhmanottam@gmail.com" className="text-purple-600 hover:underline">rekhmanottam@gmail.com</a></p>
          </div>
        </div>
      </div>
    </>
  );
}