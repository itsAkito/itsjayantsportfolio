import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import jayant from '../../assets/jayant.jpg'
// import resume from './public/resume.pdf'
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 mt-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <p className="text-sm text-blue-300">Welcome to my portfolio</p>
        </div>
        <div className="profile-container">
          <div className="">
            <img
              src={jayant}
              alt="Jayant Kumar"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto shadow-lg"
            ></img>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Jayant Kumar
          </span>
          <br />
          <span className="text-gray-300">Fullstack Developer</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          I create beautiful, interactive web experiences with modern technologies.
          Specializing in React, Node.js, and 3D web technologies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          
          {/* Resume download link (separate, not inside AnchorLink) */}
          <a
            href="/MyResume.pdf" // File should be inside public folder
            download="Jayant-Resume.pdf"
            className="px-8 py-3 border-2 border-blue-500 rounded-lg bg-gradient-to-r from-blue-500 to-purple-300 hover:shadow-lg hover:shadow-indigo-400/40 transition font-semibold text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          {/* Portfolio button */}
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#portfolio"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition font-semibold text-white">
              View My Work
            </button>
          </AnchorLink>

          {/* Contact button */}
          <AnchorLink
            className="anchor-link"
            offset={50}
            href="#contact"
          >
            <button className="px-8 py-3 border-2 border-blue-500 rounded-lg hover:bg-blue-500/10 transition font-semibold text-white">
              Get In Touch
            </button>
          </AnchorLink>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 mb-5">
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400">8+</h3>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 ">
            <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
              3+
            </h3>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-pink-400">
              100%
            </h3>
            <p className="text-sm text-gray-400">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;