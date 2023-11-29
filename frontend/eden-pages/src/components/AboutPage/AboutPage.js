import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Intro from './Intro'
import Servs from './Servs'
import Team from './Team'
const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Servs/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default AboutPage;
