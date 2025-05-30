import React, { useState, useEffect } from 'react'
import founderImageJpg from '../images/founder.jpg'
import founderImageWebp from '../images/founder.webp' // Modern image format for better performance
import { FaAward, FaCertificate, FaBrain, FaUsers, FaHandHoldingHeart, FaGraduationCap, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <>
    <div className="container mx-auto px-4 py-6 sm:py-8 mt-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl shadow-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 p-2 sm:p-4">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
          <p className="text-base sm:text-lg mb-6 leading-relaxed text-gray-700">
            Welcome to <span className="font-semibold text-purple-700">REKHMANOTTAM</span>, your premier destination for professional mental health therapy and emotional well-being services in the breathtaking state of Uttarakhand, India. We specialize in anxiety treatment, stress management, and comprehensive psychological support.
          </p>

         
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-700">Why Choose Us</h2>
          <p className="mb-6 leading-relaxed text-gray-700 text-base sm:text-lg">
            With years of experience and deep knowledge in mental health therapy, we understand the unique requirements of each individual seeking emotional well-being. From addressing anxiety and stress management to cultivating mindfulness, we help bring your therapeutic journey to life in a supportive and compassionate setting.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-700">Hear it from our Founder</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 mb-6">
            <div className="flex flex-col items-center lg:sticky lg:top-8 lg:w-1/3">
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
                  <picture>
                    <source srcSet={founderImageWebp} type="image/webp" />
                    <source srcSet={founderImageJpg} type="image/jpeg" /> 
                    <img 
                      src={founderImageJpg} 
                      alt="Sneha Malasi - Founder and Counseling Psychologist specializing in mental health therapy" 
                      className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg border-4 border-white mb-4 transform hover:scale-105 transition-transform duration-500"
                      width="192"
                      height="192"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Sneha Malasi</h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-2 font-medium">Founder & CEO Of Rekhmanottam</p>
                <p className="text-gray-700 text-xs sm:text-sm text-center">
                  Counseling Psychologist with half a decade of experience in mental health therapy and emotional well-being services
                </p>
              </div>
            </div>
            <div className="lg:w-2/3">
            <ul className="text-base sm:text-lg md:text-xl leading-relaxed w-full p-4 sm:p-8 list-none bodyFont space-y-3 sm:space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <FaHandHoldingHeart className="text-purple-600 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <span>"At Rekhmanottam, we believe in the power of compassionate care and evidence-based therapy to transform lives."</span>
              </li>
              <li className="flex items-start gap-3">
                <FaBrain className="text-purple-600 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <span>"Our approach combines modern psychological techniques with mindfulness practices to address the root causes of emotional distress."</span>
              </li>
              <li className="flex items-start gap-3">
                <FaUsers className="text-purple-600 text-xl sm:text-2xl flex-shrink-0 mt-1" />
                <span>"We've helped hundreds of individuals overcome anxiety, depression, and stress to lead more fulfilling lives."</span>
              </li>
            </ul>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-700">Our Qualifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <FaGraduationCap className="text-purple-600 text-xl sm:text-2xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-800">Education</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">Masters degree in Psychology, equipped  in-depth knowledge of human behavior, mental processes, and emotional well-being</p>
            </div>
            
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <FaCertificate className="text-purple-600 text-xl sm:text-2xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-800">Certifications</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">Licensed Life Member of Counsellors Counsil Of India (CRN8826415)</p>
            </div>
            
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <FaAward className="text-purple-600 text-xl sm:text-2xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-800">Experience</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">Over 5 years of  experience working with diverse populations and addressing a wide range of mental health concerns.</p>
            </div>
            
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100">
              <div className="flex items-center gap-3 mb-3">
                <FaUsers className="text-purple-600 text-xl sm:text-2xl" />
                <h3 className="text-lg sm:text-xl font-semibold text-purple-800">Client Success</h3>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">Helped hundreds of clients overcome anxiety, depression, and trauma through personalized therapeutic approaches.</p>
            </div>
          </div>
          
          {/* Social Media Integration - SEO Enhancement */}
          <div className="mt-8 bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-purple-700">Connect With Us</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-4">Follow us on social media to stay updated with our latest articles, events, and mental health tips.</p>
            
            <div className="flex justify-center gap-4 sm:gap-6">
              <a href="https://www.instagram.com/rekhmanottam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white hover:scale-110 transition-transform duration-300">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://www.facebook.com/rekhmanottam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:scale-110 transition-transform duration-300">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://www.twitter.com/rekhmanottam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-400 text-white hover:scale-110 transition-transform duration-300">
                <FaTwitter className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/company/rekhmanottam" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-110 transition-transform duration-300">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
            
            <div className="mt-4 text-center text-gray-600 text-sm">
              <p>Share your experience with us using <span className="font-semibold text-purple-600">#RekhmanottamWellness</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}