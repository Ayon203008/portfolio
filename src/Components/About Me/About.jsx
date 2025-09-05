import React from "react";
import { motion } from "framer-motion";

const TYPEWRITER_TEXT = "About Me";

const About = () => {
  return (
    <div className="mb-44" id="about"> {/* slightly bigger bottom margin */}
      <motion.h1
        className="text-center text-7xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r lg:ml-20 from-orange-400 via-pink-500 to-purple-600 tracking-widest relative inline-block whitespace-nowrap overflow-hidden border-r-6 border-orange-400"
        initial="hidden"
        animate="visible"
      >
        {TYPEWRITER_TEXT.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: index * 0.12,
                },
              },
            }}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}

        {/* Underline animation */}
        <motion.span
          className="block h-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-full mt-4 mx-auto w-32"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 1, delay: TYPEWRITER_TEXT.length * 0.12 + 0.5 }}
        />
      </motion.h1>

      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 bg-gray-900/80 backdrop-blur-md rounded-3xl p-14 border-2 border-gradient-to-r border-orange-400 shadow-lg shadow-pink-600/60"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: TYPEWRITER_TEXT.length * 0.12 + 1 }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="https://i.ibb.co/BVpFfkzJ/photo-2025-04-03-10-55-23.jpg"
            alt="Abid Hasan Ayon"
            className="w-[440px] h-[520px] rounded-3xl shadow-2xl object-cover border-4 border-gradient-to-r border-pink-500"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3 text-gray-200 space-y-8 text-xl md:text-2xl leading-relaxed font-light">
          <p>
            Hi! I'm{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Abid Hasan Ayon
            </span>
            , a passionate MERN Stack developer who crafts{" "}
            <span className="font-semibold text-pink-400">clean</span>,{" "}
            <span className="font-semibold text-orange-400">responsive</span>, and{" "}
            <span className="font-semibold text-purple-400">modern</span> web
            applications.
          </p>
          <p>
            I thrive on{" "}
            <span className="italic text-cyan-400">solving challenges</span> with elegant code and
            constantly expanding my tech knowledge to stay ahead.
          </p>
          <p>
            When I’m not coding, I read Self-Help Books and play video Games.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
