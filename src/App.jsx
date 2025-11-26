import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from'./components/Footer/Footer'
import Other from './components/Other/Other'
import Portfolio3D from './projects/ShowcaseProject'
// import HeroSection from './projects/HeroSection'
const App=()=>{
   

  return (
      <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio3D/>
      <Contact/>
      <Footer/>
      <Other/>
      </div>
  )
}

export default App
