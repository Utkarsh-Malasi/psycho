import React from 'react'
import Header from './Header'
import logo from '../images/l2.jpg'
const Home = () => {
  return (
    <>
    <Header />
   <div className='container mx-auto px-4 py-8 mt-auto'>
    

   <div className="flex flex-col sm:flex-row justify-center md:flex-row">
  <div className="flex justify-center items-center h-96 w-full sm:w-full md:w-1/2">
    <img src={logo} alt="Logo" className="w-72 h-72 object-cover"/>
  </div>
  <h1 className="text-3xl sm:text-4xl md:text-7xl rounded-lg p-4 sm:p-6 md:pt-32 text-black text-center sm:text-start md:text-start">
    REKHMANOTTAM
    <span className="text-xl sm:text-2xl md:text-5xl italic rounded-lg text-black block mt-3 sm:mt-5 md:mt-5 pl-10">
      Healing together!
    </span>
  </h1>
</div>


    <div className="bodyFont sm:text-3xl text-2xl p-3 text-black">
    <p><strong>Rekhmanottam</strong>, a name lovingly derived from both of my parents' names, forms a beautiful Sanskrit word that
      signifies<strong> "the supreme path of mental healing and restoration."</strong>

      This journey is a heartfelt dedication to my parents, a tribute to the gratitude I hold for them. Through
      Rekhmanottam, I honor their love and guidance by creating a path that fosters healing, compassion, and mental
      well-being for all.
<br/>
      Rekhmanottam embodies a deeply personal journey to establish a safe, nurturing space where mental health is not
      only valued but prioritized above all else. Here, we are committed to creating an environment where every
      individual is seen, heard, and cared for with the utmost compassion.
      We believe that mental well-being should be at the center of our lives. When mental health is prioritized,
      everything else falls into place, enabling us to navigate life with greater clarity, strength, and resilience.
      Self-love and care are not luxuries—they are vital necessities. At Rekhmanottam, we wholeheartedly believe that
      choosing yourself and prioritizing your mental health is the most important decision you can make. Let
      Rekhmanottam be the place where your healing begins, and where your journey to mental wellness is supported every
      step of the way.</p>
  </div>
   </div>

    </>
  )
}

export default Home
