import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <Link to="home" smooth duration={500} offset={-80} className="cursor-pointer text-gray-300 hover:text-white">
        <li className="mx-6 relative group">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </Link>
      <Link to="about" smooth duration={500} offset={-80} className="cursor-pointer text-gray-300 hover:text-white">
        <li className="mx-6 relative group">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            About Me
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </Link>
      <Link to="skills" smooth duration={500} offset={-80} className="cursor-pointer text-gray-300 hover:text-white">
        <li className="mx-6 relative group">
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Skills
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </Link>
      <Link to="projects" smooth duration={500} offset={-80} className="cursor-pointer text-gray-300 hover:text-white">
        <li className="mx-6 relative group">
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      </Link>
      
    </>
  );

  return (
    <div className="bg-gray-900/90 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-cyan-600">
      <div className="navbar max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="navbar-start flex ">
          <div><AiTwotoneThunderbolt size={50} /></div>
          <div>

          <h1 className="text-4xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-widest cursor-pointer hover:scale-110 transition-transform duration-300">  Ayon
          </h1>
          </div>
          
        </div>

        {/* Hamburger button - visible only on small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // X icon
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop menu - visible only on large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">{links}</ul>
        </div>

        {/* Contact Me button - hide on small screens, show on large */}
        <div className="navbar-end hidden lg:block">
          <Link to="connect" smooth duration={500} offset={-80} className="cursor-pointer">
            <a className="btn bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white font-semibold rounded-full px-6 py-2 shadow-lg hover:brightness-110 hover:scale-105 transition transform duration-300">
              Contact Me
            </a>
          </Link>
        </div>

        {/* Mobile menu - shows when hamburger is clicked */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-cyan-600 lg:hidden z-40">
            <ul className="flex flex-col items-center py-4">{links}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
