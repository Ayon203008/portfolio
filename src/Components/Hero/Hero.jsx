import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Profile Picture with subtle shimmer */}
      <motion.div
        className="relative rounded-full overflow-hidden w-72 h-72 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-cyan-400"
          src="https://i.ibb.co.com/BVpFfkzJ/photo-2025-04-03-10-55-23.jpg"
          alt="Abid Hasan Ayon"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 animate-pulse rounded-full pointer-events-none" />
      </motion.div>

      {/* Name with Typewriter + animated underline */}
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg relative inline-block cursor-default">
          I'm{" "}
          <span className="text-orange-400">
            <Typewriter
              words={["Abid Hasan Ayon"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          />
        </h1>

        <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-wide">
          MERN Stack Web Developer
        </h2>

        <p className="mt-6 text-lg md:text-xl max-w-xl mx-auto leading-relaxed text-gray-300">
          Obsessed with MERN stack development, improving 1% every day. I believe in thinking differently and love taking on tough challenges. Passionate about delivering phenomenal websites to customers.
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row gap-6 mt-14"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.7 }}
      >
        
        <button
          className="btn rounded-3xl px-24 py-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold shadow-lg
            hover:scale-105 hover:brightness-125 transition-transform duration-300 ease-in-out"
        >
          Resume
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
