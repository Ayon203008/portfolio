import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About Me/About";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import AllSkill from "./Components/AllSkill/AllSkill";
import EducationalSection from "./Components/Education/EducationalSection ";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br scroll-smooth from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <Navbar></Navbar>
      <div className="w-10/12 mx-auto flex-grow">
        <div className="mt-20">
          <Hero></Hero>
        </div>
        <div className="mt-40">
          <About></About>
        </div>
         <div className="mt-40">
          <AllSkill></AllSkill>
        </div>
        <div className="mt-40 mb-40">
          <Projects></Projects>
        </div>
        <div className="mt-40 mb-40">
         <EducationalSection></EducationalSection>
        </div>
        <div>
          <Contact></Contact>
        </div>
       
      </div>
      <div className="mt-40">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
