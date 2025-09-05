import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Typewriter.css"; // Import CSS for typewriter animation

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
        yoyo: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div
      id="education"
      className="relative py-20 text-gray-300 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-3xl mx-6 md:mx-auto max-w-6xl"
      style={{
        border: "4px solid",
        borderImageSlice: 1,
        borderWidth: "4px",
        borderImageSource:
          "linear-gradient(90deg, #0ea5e9, #3b82f6, #8b5cf6)",
      }}
    >
      <motion.h2
        className="relative mt-5  text-5xl font-extrabold text-center mb-16 tracking-widest flex justify-center items-center gap-3"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
        style={{ zIndex: 10 }}
      >
        <FaGraduationCap size={80} className="inline-block text-cyan-500" />
        {/* Wrap Education text with span for rgb color and typewriter */}
        <span className="typewriter-text" style={{ color: "rgb(34, 139, 230)" }}>
          Education
        </span>
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-2xl shadow-xl border border-gray-700 cursor-pointer bg-gray-900 bg-opacity-70 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              backgroundColor: "rgba(14, 165, 233, 0.3)",
              boxShadow:
                "0 0 15px 4px rgba(14, 165, 233, 0.6), 0 0 30px 8px rgba(14, 165, 233, 0.4)",
              borderColor: "#0ea5e9",
              scale: 1.03,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
              <span className="text-sm text-cyan-400">{edu.year}</span>
            </div>
            <p className="text-lg text-orange-400 mt-1">{edu.institution}</p>
            <p className="text-gray-400 mt-3">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationalSection;
