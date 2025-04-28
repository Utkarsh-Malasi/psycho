import React, { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaAddressBook, FaPhone, FaEnvelope, FaClock, FaArrowRight, FaHeart, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <>
      
    <div className="min-h-screen mt-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 px-4 py-6 sm:py-8 rounded-xl shadow-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-6 sm:py-8 px-4 bg-white rounded-lg max-w-4xl mx-auto shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">We Believe In Connecting Yourself With The Better You</h1>
      <p className="text-center text-gray-700 max-w-4xl mx-auto font-medium px-4 sm:px-6 py-3 sm:py-4 mb-6 sm:mb-8 bg-white rounded-lg mt-4 sm:mt-6 shadow-md border border-purple-100 leading-relaxed text-base sm:text-lg">
        We are a team of experienced professionals dedicated to providing the best possible mental health services to our clients. Your journey to emotional well-being starts with a simple connection.
      </p>
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className={`max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 border border-purple-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Get in Touch</h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 sm:mb-8 mx-auto"></div>
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <h3 className="text-lg font-semibold mb-2 sm:mb-3 text-purple-800 flex items-center">
                    <FaMapMarkerAlt className="mr-2 sm:mr-3 text-purple-600" />
                    Office Address
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg pl-6 sm:pl-9 leading-relaxed">
                    Mussoorie, Uttarakhand<br />
                    India - 248179
                  </p>
                </div>

                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <h3 className="text-lg font-semibold mb-2 sm:mb-3 text-purple-800 flex items-center">
                    <FaAddressBook className="mr-2 sm:mr-3 text-purple-600" />
                    Contact With Us
                  </h3>
                  <div className="flex flex-wrap gap-3 pl-6 sm:pl-9">
                    <a href="tel:+918279793224" className="flex items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                      <FaPhone className="mr-2 sm:mr-3" />
                      Call Now: +91 8279793224
                    </a>
                    <a href="mailto:contact@rekhmanottam.com" className="flex items-center bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                      <FaEnvelope className="mr-2 sm:mr-3" />
                      Email Us
                    </a>
                    <a href="https://instagram.com/rekhmanottam" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                      <FaInstagram className="mr-2 sm:mr-3" />
                      Instagram
                    </a>
                    <a href="https://facebook.com/rekhmanottam" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                      <FaFacebook className="mr-2 sm:mr-3" />
                      Facebook
                    </a>
                    <a href="https://twitter.com/rekhmanottam" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                      <FaTwitter className="mr-2 sm:mr-3" />
                      Twitter
                    </a>
                    <a href="https://linkedin.com/company/rekhmanottam" target="_blank" rel="noopener noreferrer" className="flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                      <FaLinkedin className="mr-2 sm:mr-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
                  <h3 className="text-lg font-semibold mb-2 sm:mb-3 text-purple-800 flex items-center">
                    <FaClock className="mr-2 sm:mr-3 text-purple-600" />
                    Working Hours
                  </h3>
                  <div className="text-gray-700 text-sm sm:text-base md:text-lg pl-6 sm:pl-9 space-y-1 sm:space-y-2">
                    <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed (Emergency services available)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 border-2 border-white relative overflow-hidden">
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white flex items-center justify-center">
                <FaHeart className="mr-2 text-pink-200 animate-pulse" />
                Special Offer
              </h2>
              
              <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-inner mb-4">
                <h3 className="text-xl font-semibold text-center text-purple-800 mb-2">FREE 10-Minute Consultation Call</h3>
                <p className="text-gray-700 text-center mb-3">
                  Take the first step toward your mental well-being journey. Connect with our experts for a complimentary 10-minute consultation to discuss your needs.
                </p>
                <div className="flex justify-center">
                  <a href="tel:+918279793224" className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform transition-all duration-300 hover:scale-105">
                    <FaArrowRight className="mr-2 animate-bounce" />
                    BOOK NOW
                  </a>
                </div>
              </div>
              
              <p className="text-white text-center text-sm italic">*Limited time offer. Subject to availability.</p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Send Us a Message</h2>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 sm:mb-8 mx-auto"></div>
              
             
                  
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact