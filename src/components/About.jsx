import React from 'react'
import founderImage from '../images/founder.jpg' // You'll need to add this image to your images folder
import Header from './Header'

export default function About() {
  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8 mt-auto text-black">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <div className="bg-black/20 rounded-lg p-6 backdrop-blur-sm">
          <p className="text-lg mb-6">
            Welcome to REKHMANOTTAM , your premier destination for discovering and securing your mental health in the breathtaking state of Uttarakhand, India.
          </p>

         
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <p className="mb-6">
            With years of experience  and deep knowledge, we understand the unique requirements of individuals. From the depths of the human mind to the serene tranquility of mindfulness, we help bring your therapeutic vision to life in the perfect setting.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Hear it from our Founder</h2>
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-6">
            <div className="flex flex-col items-center lg:sticky lg:top-8 lg:w-1/3">
              <img 
                src={founderImage} 
                alt="Founder" 
                className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white mb-4"
              />
              <h3 className="text-xl font-bold">Sneha Malasi</h3>
              <p className="text-gray-900 text-sm mb-2">Founder & CEO Of Rekhmanottam</p>
              <p className="text-gray-900 text-sm text-center">
                Psychologist with half a decade of experience in serving Mankind
              </p>
            </div>
            <div className="lg:w-2/3">
            <ul className="text-xl md:text-3xl  leading-relaxed  w-[100%] p-8  list-disc bodyFont">
          <li>Certified Life Member of the Counsellors Council of India <strong>(CRN8826415)</strong> </li>
          <li>Certified Career Counsellor (Career Guidance and Testing)</li>
          <li>Dedicated Counseling Psychologist, Mental health professional and
            specialized in comprehensive support for individuals
            with special needs, such as autism, ADHD, intellectual disabilities, and
            learning disabilities.</li>
          <li >Proficient in designing personalized intervention
            plans, lesson plans, and psychoeducational reports to create an
            inclusive learning environment.</li>
          <li>Committed to promoting mental health and
            academic success by collaborating with multidisciplinary teams to ensure
            holistic care and meaningful growth for all students.</li>
          <li>Skilled in
            counseling parents, facilitating behavioural and academic progress, and
            implementing evidence-based strategies to optimize each child's
            development.</li>
        </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}