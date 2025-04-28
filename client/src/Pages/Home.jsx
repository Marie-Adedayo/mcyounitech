'use client'

import { useState, useEffect } from 'react'

import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ContactForm from '../Components/Contact'
import Footer from '../Components/Footer'


const Home = () => {
  const [loaderVisible, setLoaderVisible] = useState(true)

  return (
      <>
        <Navbar/>
        <Hero/>
        <ContactForm />
        <Footer />
   
      </>
  )
}

export default Home
