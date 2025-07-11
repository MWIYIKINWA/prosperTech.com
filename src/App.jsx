import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

const App = () => {
  return (
     <>
       <Navbar/>

       <div className="max-w-7xl mx-auto pt-20 px-6">
           <Hero/>
           <Services/> 
           <Projects/>
           <Testimonial/>
           <Footer/>
       </div>

     
     </>
  )
}

export default App
