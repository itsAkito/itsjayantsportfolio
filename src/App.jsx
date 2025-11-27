
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import HeroSection from "./components/Hero/HeroSection";
import Portfolio3D from "./components/Portfolio3D/Portfolio3D";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

function App
() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio3D />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;