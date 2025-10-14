import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Interactive from '../components/Interactive'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen">
        <Header />
        <Hero />
        <About />
        <Interactive />
        <Contact />
        <Footer />
    </div>
  )
}
