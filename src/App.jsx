import {React } from 'react'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { Analytics } from "@vercel/analytics/react"


function App() {
  

  return (
    <>
    <Analytics />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
  </>)
}

export default App
