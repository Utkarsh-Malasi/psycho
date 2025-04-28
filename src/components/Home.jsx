import React, { useState, useEffect } from 'react'
import logo from '../images/l2.jpg'
import { FaPhone, FaEnvelope, FaArrowRight, FaQuoteLeft, FaQuoteRight, FaStar, FaHeart } from 'react-icons/fa'
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "The therapy sessions at Rekhmanottam completely transformed my approach to mental health. I feel more empowered and balanced than ever before.",
      author: "Confidential",
      rating: 3
    },
    {
      text: "Rekhmanottam's compassionate approach helped me navigate through my anxiety with practical coping strategies that actually work in real life.",
      author: "Anonymous ",
      rating: 5
    },
    {
      text: " The personalized care here is unmatched anywhere else .",
      author: "Anonymous",
      rating: 4
    },
    {
      text: "The warmth and dedication of the staff make every moment unforgettable.",
      author: "Anonymous",
      rating: 5
},
{
      text: "Exceptional care that leaves you feeling truly valued and supported.",
      author: "-",
      rating: 4
},
{
      text: "Every interaction reflects genuine concern and unparalleled attention to detail.",
      author: "Confidential",
      rating: 5
},
{
      text: "The care here feels personal and heartfelt, creating a comforting experience.",
      author: "Anonymous",
      rating: 4
},
{
      text: "An extraordinary environment where kindness and professionalism shine through.",
      author: "-",
      rating: 5
}
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(testimonialInterval);
  }, []);
  
  return (
    <>
    <div className='relative'>
      {/* Floating Contact Button */}
      <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50 animate-bounce">
        <a 
          href="tel:+918279793224"
          className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl hover:shadow-purple-300 transform transition-all duration-300 hover:scale-110"
        >
          <FaPhone className="text-white text-xl sm:text-2xl" />
        </a>
      </div>
      
      <div className='container mt-4 mx-auto px-4 py-6 sm:py-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl shadow-xl'>
    
   <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10">
     <div className={`flex justify-center items-center h-64 sm:h-80 md:h-96 w-full sm:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
       <div className="relative">
         <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 animate-pulse"></div>
         <img 
           src={logo} 
           alt="Mental health therapy session banner - Rekhmanottam Psychology" 
           className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500"
         />
       </div>
     </div>
     <div className={`flex flex-col justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 p-2 sm:p-4 md:p-6 text-center sm:text-start">
         REKHMANOTTAM
         <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl italic font-normal bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 block mt-2 sm:mt-3 md:mt-5 pl-0 sm:pl-4">
           Healing together!
         </span>
       </h1>
       <div className="flex justify-center sm:justify-start mt-4 gap-2 sm:gap-4">
         <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full font-medium text-xs sm:text-sm animate-pulse">We Promise</span>
         <span className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-100 text-purple-800 rounded-full font-medium text-xs sm:text-sm animate-pulse">We Deliver</span>
       </div>
     </div>
   </div>

   {/* Special Offer Section - Moved to top for better visibility */}
   <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white relative overflow-hidden my-6 sm:my-8 md:my-10 mx-auto max-w-3xl">
     <div className="absolute -right-12 -top-12 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
     <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
     
     <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-white flex items-center justify-center">
       <FaHeart className="mr-2 text-pink-200 animate-pulse" />
       Special Offer
     </h2>
     
     <div className="bg-white bg-opacity-95 p-4 sm:p-6 rounded-lg shadow-inner mb-4">
       <h3 className="text-xl sm:text-2xl font-semibold text-center text-purple-800 mb-2">FREE 10-Minute Consultation Call</h3>
       <p className="text-gray-700 text-center mb-4 text-base sm:text-lg">
         Take the first step toward your mental well-being journey. Connect with our experts for a complimentary 10-minute consultation to discuss your needs.
       </p>
       <div className="flex justify-center">
         <a href="tel:+918279793224" className="flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transform transition-all duration-300 hover:scale-110 text-lg">
           <FaArrowRight className="mr-2 animate-bounce" />
           BOOK NOW
         </a>
       </div>
     </div>
     
     <p className="text-white text-center text-sm italic">*Limited time offer. Subject to availability.</p>
   </div>
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg my-8 sm:my-10 md:my-12 mx-2 sm:mx-4 border border-purple-100 hover:shadow-xl transition-all duration-300">
  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 sm:mb-6 md:mb-8"></div>
  <p className="bodyFont text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed text-center max-w-4xl">
    We believe that <span className="font-semibold text-purple-700">mental health</span> should be at the center of our lives. When emotional well-being is prioritized,
    everything else falls into place, enabling us to navigate life with greater <span className="font-semibold text-purple-700">clarity, strength, and resilience</span>.
    Self-love and care are not luxuries—they are vital necessities. At Rekhmanottam, we wholeheartedly believe that
    choosing yourself and prioritizing your mental health is the <span className="font-semibold text-purple-700">most important decision</span> you can make.
  </p>
  <a href="#services" className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center gap-2">
    Learn more about our therapy services <FaArrowRight className="animate-pulse" />
  </a>
</div>

{/* Testimonials Section */}
<div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-md my-8 sm:my-10 md:my-12 mx-2 sm:mx-4">
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-6 sm:mb-8">What Our Clients Say</h2>
  
  <div className="relative overflow-hidden" style={{height: '200px'}}>
    {testimonials.map((testimonial, index) => (
      <div 
        key={index}
        className={`absolute w-full transition-all duration-1000 ${index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 max-w-3xl mx-auto">
          <div className="flex items-start mb-4">
            <FaQuoteLeft className="text-purple-400 text-xl mr-2 mt-1" />
            <p className="text-gray-700 italic text-center">{testimonial.text}</p>
            <FaQuoteRight className="text-purple-400 text-xl ml-2 mt-1" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium text-purple-800">{testimonial.author}</p>
            <div className="flex mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  <div className="flex justify-center mt-4">
    {testimonials.map((_, index) => (
      <button 
        key={index} 
        className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full ${index === currentTestimonial ? 'bg-purple-600' : 'bg-purple-200'}`}
        onClick={() => setCurrentTestimonial(index)}
      />
    ))}
  </div>
</div>
  
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center my-8 sm:my-10 md:my-12 px-4">
  <a 
    href="#contact" 
    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg group"
  >
    Book a Session <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
  </a>
  <a 
    href="tel:+919876543210" 
    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
  >
    <FaPhone className="text-lg sm:text-xl animate-pulse" /> Call Us
  </a>
  <a 
    href="mailto:contact@rekhmanottam.com" 
    className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
  >
    <FaEnvelope className="text-lg sm:text-xl" /> Email Us
  </a>
</div>
      </div>
  </div>
    </>
  )
}

export default Home;
