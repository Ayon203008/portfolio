import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      {/* Profile Picture */}
      <motion.div
        className="relative rounded-full overflow-hidden w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mb-10 sm:mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          className="w-full h-full object-cover rounded-full shadow-2xl border-2 sm:border-4 border-cyan-400"
          src="https://i.ibb.co.com/BVpFfkzJ/photo-2025-04-03-10-55-23.jpg"
          alt="Abid Hasan Ayon"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-20 animate-pulse rounded-full pointer-events-none" />
      </motion.div>

      {/* Name & Title */}
      <motion.div
        className="text-center max-w-2xl sm:max-w-3xl md:max-w-4xl px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg relative inline-block cursor-default">
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
            className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 1, ease: "easeOut" }}
          />
        </h1>

        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide">
          MERN Stack Web Developer
        </h2>

        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-xl mx-auto leading-relaxed text-gray-300">
          Obsessed with MERN stack development, improving 1% every day. I believe
          in thinking differently and love taking on tough challenges. Passionate
          about delivering phenomenal websites to customers.
        </p>
      </motion.div>

      {/* Button */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 sm:mt-14 w-full sm:w-auto justify-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.7 }}
      >
        <a
          href="https://drive.google.com/file/d/173rn7AgMwNY3jR7bl3kHbhw7KI5hJTDB/view?usp=drive_link"
          className="w-full sm:w-auto"
        >
          <button
            className="w-full sm:w-auto rounded-2xl sm:rounded-3xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-semibold shadow-lg
            hover:scale-105 hover:brightness-110 transition-transform duration-300 ease-in-out"
          >
            Resume
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
