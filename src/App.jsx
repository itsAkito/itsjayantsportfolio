
import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";

// Lazy load content-heavy components
const About = lazy(() => import("./components/About/About"));
const Portfolio3D = lazy(() => import("./components/Portfolio3D/Portfolio3D"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer/Footer"));

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="w-full min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-hidden">
      {/* Eagerly load header for better perceived performance */}
      <Navbar />
      <HeroSection />
      
      {/* Lazy load content-heavy components with suspense */}
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Portfolio3D />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;