import React from "react";
import { motion } from "framer-motion";
import { FaHtml5 } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";


const skills = [
  {
    Icon: FaReact,
    title: "React Js",
    borderColor: "border-cyan-400",
    bgClass: "bg-gradient-to-r from-cyan-500 to-blue-600",
    shadowColor: "shadow-cyan-500",
    iconSize: 48,
  },
  {
    Icon: FaSquareJs,
    title: "JavaScript",
    borderColor: "border-yellow-400",
    bgClass: "bg-gradient-to-r from-yellow-400 to-amber-500",
    shadowColor: "shadow-yellow-400",
    iconSize: 44,
  },
  {
    Icon: FaNodeJs,
    title: "NodeJs",
    borderColor: "border-blue-600",
    bgClass: "bg-gradient-to-r from-blue-700 to-indigo-700",
    shadowColor: "shadow-blue-600",
    iconSize: 44,
  },
  {
    Icon: FaHtml5,
    title: "HTML",
    borderColor: "border-orange-500",
    bgClass: "bg-gradient-to-r from-orange-400 to-red-500",
    shadowColor: "shadow-orange-500",
    iconSize: 52,
  },
  {
    Icon: SiMongodb,
    title: "MongoDB",
    borderColor: "border-green-500",
    bgClass: "bg-gradient-to-r from-green-600 to-emerald-700",
    shadowColor: "shadow-green-500",
    iconSize: 44,
  },
  {
    Icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    borderColor: "border-pink-400",
    bgClass: "bg-gradient-to-r from-pink-500 to-purple-600",
    shadowColor: "shadow-pink-400",
    iconSize: 44,
  },
];

const AllSkill = () => {
  return (
    <>
      <style>{`
        @keyframes glow {
          0% {
            border-color: #ff3c78;
            box-shadow: 0 0 6px #ff3c78;
          }
          25% {
            border-color: #ffaf3c;
            box-shadow: 0 0 8px #ffaf3c;
          }
          50% {
            border-color: #3cff94;
            box-shadow: 0 0 6px #3cff94;
          }
          75% {
            border-color: #3c8cff;
            box-shadow: 0 0 8px #3c8cff;
          }
          100% {
            border-color: #ff3c78;
            box-shadow: 0 0 6px #ff3c78;
          }
        }
      `}</style>

      <section
        id="skills"
        className="relative max-w-7xl mx-auto my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 border-4 border-transparent"
        style={{
          animation: "glow 12s ease-in-out infinite",
        }}
      >
        <motion.h1
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 mb-8 sm:mb-12 md:mb-16 tracking-wider uppercase whitespace-nowrap overflow-hidden border-r-2 sm:border-r-4 border-pink-500 pr-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: "16ch" }}
            className="lg:mb-5 lg:mt-5"
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ display: "inline-block", whiteSpace: "nowrap", overflow: "hidden" }}
          >
            Essential Skills
          </motion.span>
        </motion.h1>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {skills.map(({ Icon, title, borderColor, bgClass, shadowColor, iconSize }) => (
            <motion.div
              key={title}
              className={`flex items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl border-2 ${borderColor} ${bgClass} shadow-md ${shadowColor} cursor-pointer transform transition duration-300`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={iconSize} className="text-white drop-shadow-lg" />
              <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl tracking-wide uppercase">
                {title}
              </h2>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllSkill;
