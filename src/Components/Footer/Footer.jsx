import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-gray-200 p-8 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <h6 className="text-2xl text-orange-400 font-semibold mb-4 sm:mb-0 tracking-wide">
          Connect with Me
        </h6>

        <nav>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/abidayon/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin size={32} className="drop-shadow-md" />
            </a>
            <a
              href="https://github.com/Ayon203008"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={32} className="drop-shadow-md" />
            </a>
            <a
              href="https://www.facebook.com/ayon.ayon.583234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
            >
              <FaFacebook size={32} className="drop-shadow-md" />
            </a>
          </div>
        </nav>
      </div>
      <p className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Abid Hasan Ayon. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
