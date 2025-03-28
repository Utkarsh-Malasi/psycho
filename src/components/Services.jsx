import React, { useState, useEffect } from 'react'
import Header from './Header'
import { FaUserMd, FaUsers, FaBriefcase, FaChild, FaCogs, FaLightbulb, FaLeaf, FaHeartbeat, FaFistRaised, FaHandshake, FaHeart, FaSchool, FaArrowRight } from 'react-icons/fa'

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
  <>
  <Header />
    <div className="container mx-auto px-4 py-6 sm:py-8 mt-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl shadow-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 p-2 sm:p-4">Our Services</h1>
      
      <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 sm:mb-8 mx-auto"></div>
      
      <p className="text-base sm:text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2 sm:px-4">
        At <span className="font-semibold text-purple-700">Rekhmanottam</span>, we offer a comprehensive range of mental health services designed to support your emotional well-being and personal growth. Our expert team provides personalized care tailored to your unique needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">
        
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaUserMd className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Individual Therapy</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Personalized one-on-one therapy sessions to address mental health concerns, anxiety treatment, and emotional well-being. Our approach is tailored to your unique needs and goals.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=individual+therapy" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaUsers className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Group Therapy</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Collaborative mental health therapy sessions that leverage the power of group dynamics for healing and emotional well-being. Share experiences and learn from others in a supportive environment.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=group+therapy" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaBriefcase className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Career Counseling</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Navigate career transitions and workplace challenges with our specialized counseling services. We help you find balance between professional success and mental well-being.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=career+counseling" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaChild className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Child & Adolescent Therapy</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Specialized mental health services for children and teenagers, addressing developmental concerns, behavioral issues, and emotional well-being in a supportive, age-appropriate manner.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=child+adolescent+therapy" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaCogs className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Cognitive Behavioral Therapy</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Evidence-based approach to identify and change negative thought patterns and behaviors, particularly effective for anxiety treatment and stress management.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=cognitive+behavioral+therapy" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaLightbulb className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Mindfulness Training</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Learn practical techniques to stay present, reduce stress, and enhance emotional well-being through mindfulness practices integrated with traditional mental health therapy.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=mindfulness+training" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaLeaf className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Stress Management</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Comprehensive strategies to identify stressors and develop effective coping mechanisms for improved emotional well-being and mental health in daily life.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=stress+management" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaHeartbeat className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Anxiety Treatment</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Specialized therapy for various anxiety disorders, providing tools and techniques to manage symptoms and improve overall emotional well-being.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=anxiety+treatment" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

<div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 transform hover:scale-105">
  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full mb-4 sm:mb-6 mx-auto">
    <FaFistRaised className="text-xl sm:text-2xl" />
  </div>
  <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-2 sm:mb-3 text-center">Trauma Recovery</h3>
  <p className="text-gray-700 mb-4 sm:mb-6 text-center text-sm sm:text-base">
    Compassionate therapy for processing and healing from traumatic experiences, with a focus on restoring emotional well-being and building resilience.
  </p>
  <div className="flex justify-center">
    <a href="https://www.yourdictionary.com/articles/basic-psychology-terms-meanings?search=trauma+recovery" className="text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs sm:text-sm" target="_blank" rel="noopener noreferrer">
      Learn more <FaArrowRight className="text-xs sm:text-sm" />
    </a>
  </div>
</div>

      </div>
      
      <div className="mt-12 sm:mt-16 text-center">
        {/* Special Offer Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 border-2 border-white relative overflow-hidden my-8 sm:my-10 md:my-12 mx-2 sm:mx-4 max-w-4xl mx-auto">
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
        
        <a href="/contact" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 text-base sm:text-lg font-medium flex items-center gap-2 mx-auto">
          <FaHeart className="text-white" /> Book Your Session Today
        </a>
        <p className="text-gray-700 mt-4 sm:mt-6 text-sm sm:text-base italic">Your journey to emotional well-being begins with a single step</p>
      </div>
    </div>
  </>
  )
}

export default Services