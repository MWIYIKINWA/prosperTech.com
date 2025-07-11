import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <ContactDetails/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact