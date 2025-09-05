import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Typewriter.css"; // Typewriter CSS

const EducationalSection = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Hajee Mohammad Danesh Science & Technology University",
      year: "2024 - Present",
      details:
        "Currently pursuing my Bachelor's degree in CSE, focusing on MERN stack development, algorithms, and problem-solving.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Gaibandha Govt College",
      year: "2022 - 2023",
      details:
        "Specialized in Science group, developed strong foundation in mathematics and programming fundamentals.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Ahmmaduddin Shah Shishu Niketan School and College",
      year: "2019 - 2021",
      details:
        "Focused on science subjects, participated in coding competitions and tech-related events.",
    },
  ];

  const headingVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div
      id="education"
      className="relative py-12 sm:py-16 md:py-20 text-gray-300 
                 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 
                 rounded-2xl mx-3 sm:mx-6 md:mx-auto max-w-6xl"
      style={{
        border: "4px solid",
        borderImageSlice: 1,
        borderWidth: "4px",
        borderImageSource:
          "linear-gradient(90deg, #0ea5e9, #3b82f6, #8b5cf6)",
      }}
    >
      <motion.h2
        className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold 
                   text-center mb-10 sm:mb-14 md:mb-16 tracking-wide 
                   flex flex-wrap justify-center items-center gap-2 sm:gap-3"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        <FaGraduationCap
          size={50}
          className="sm:size-60 md:size-80 text-cyan-500"
        />
        <span className="typewriter-text text-xl sm:text-2xl md:text-3xl lg:text-4xl"
              style={{ color: "rgb(34, 139, 230)" }}>
          Education
        </span>
      </motion.h2>

      {/* Responsive Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="p-4 sm:p-6 rounded-xl shadow-lg border border-gray-700 
                       bg-gray-900 bg-opacity-70 backdrop-blur-md 
                       hover:cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              backgroundColor: "rgba(14, 165, 233, 0.3)",
              boxShadow:
                "0 0 10px 2px rgba(14, 165, 233, 0.6), 0 0 20px 6px rgba(14, 165, 233, 0.4)",
              borderColor: "#0ea5e9",
              scale: 1.02,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                {edu.degree}
              </h3>
              <span className="text-xs sm:text-sm text-cyan-400 mt-2 sm:mt-0">
                {edu.year}
              </span>
            </div>
            <p className="text-sm sm:text-base text-orange-400 mt-1">
              {edu.institution}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mt-3">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationalSection;
