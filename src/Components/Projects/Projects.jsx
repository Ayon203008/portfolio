import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "UserEcho",
    img: "https://i.ibb.co/pBS4Gqx5/Screenshot-2025-08-11-174209.png",
    description:
      "UserEcho is a service review platform where users can create and manage reviews. Built with React and MongoDB.",
    link: "https://assignment-11-8708f.web.app/",
    githubLink: "https://github.com/Ayon203008/UserEcho",
    moreDetails:
      "UserEcho is a convenient platform where users can easily find and book reliable services tailored to their needs.",
    Tecnology: "React Js, MongoDB, Tailwind CSS, Express Js, DaisyUI",
    challenge:
      "Ensuring smooth UX, reliable providers, secure payments, and real-time availability.",
    Futureplan:
      "Build a mobile app, add reviews, use AI recommendations, expand services, and enable live chat.",
  },
  {
    id: 2,
    title: "SoulMate",
    img: "https://i.ibb.co/Dh249tk/Screenshot-2025-08-11-174556.png",
    description:
      "A matchmaking platform with secure profiles and easy communication.",
    link: "https://last-try-f6ea0.firebaseapp.com/",
    githubLink: "https://github.com/Ayon203008/soulmate",
    moreDetails:
      "Soulmate is a trusted platform where users can find their perfect partner through personalized matchmaking.",
    Tecnology: "React Js, MongoDB, Tailwind CSS, Express Js",
    challenge:
      "Ensuring privacy, accurate matches, profile trust, and engaging UX.",
    Futureplan:
      "Add AI partner recommendations, enable video calls, launch a mobile app.",
  },
  {
    id: 3,
    title: "GreenNest",
    img: "https://i.ibb.co/B5LrGG1L/Screenshot-2025-08-11-175529.png",
    description:
      "Hire professional gardeners for lawn care, planting, and more.",
    link: "https://assignment-10-fba7a.web.app/",
    githubLink: "https://github.com/Ayon203008/Garden-service",
    moreDetails:
      "GreenNest connects you with skilled gardeners to keep your green space thriving.",
    Tecnology: "React Js, MongoDB, Tailwind CSS, Express Js, DaisyUI",
    challenge:
      "Designing a user-friendly platform with secure data handling and payments.",
    Futureplan:
      "Mobile app, reviews, AI matching, subscriptions, and expanded service areas.",
  },
];

const cardVariants = {
  rest: { scale: 1, opacity: 0.95 },
  hover: {
    scale: 1.05,
    opacity: 1,
    boxShadow: "0 0 15px rgb(139 92 246 / 0.7)",
    transition: { duration: 0.3 },
  },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, scale: 0.9 },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div
      id="projects"
      className="min-h-screen px-4 sm:px-6 md:px-10 py-10 bg-gradient-to-br border-amber-600 border-2 from-gray-900 via-gray-800 to-gray-900"
    >
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-12 sm:mb-16 tracking-wider bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
        Projects
      </h1>

      {/* Responsive grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            onClick={() => openModal(project)}
            className="cursor-pointer rounded-3xl overflow-hidden
              bg-gradient-to-br from-[#121212] via-[#1c1c1c] to-[#181818]
              border-amber-900 shadow-lg shadow-black/60
              backdrop-blur-lg bg-white/5
              hover:border-purple-500
              hover:shadow-[0_0_15px_rgb(139,92,246)]
              transition duration-500 ease-in-out border-2"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-3xl border-b border-gray-700"
            />
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-extrabold text-purple-400 mb-2 sm:mb-3 tracking-wide">
                {project.title}
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">
                {project.description}
              </p>
              <button className="px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold tracking-wide shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300">
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center p-4 sm:p-6 z-50"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/20 shadow-xl p-4 sm:p-6 md:p-8"
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 sm:top-4 right-4 text-2xl sm:text-3xl text-gray-400 hover:text-white"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="rounded-xl sm:rounded-2xl mb-4 sm:mb-6 object-cover max-h-60 sm:max-h-72 md:max-h-80 w-full"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
                {selectedProject.moreDetails}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mb-2">
                <span className="font-semibold text-purple-400">Challenges:</span>{" "}
                {selectedProject.challenge}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">
                <span className="font-semibold text-purple-400">Future Plans:</span>{" "}
                {selectedProject.Futureplan}
              </p>
              <p className="text-green-400 mb-4 sm:mb-6 text-sm sm:text-base">
                <strong>Technology Used:</strong> {selectedProject.Tecnology}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium hover:from-green-600 hover:to-teal-600 transition text-sm sm:text-base"
                >
                  Visit Website
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium hover:from-gray-700 hover:to-gray-800 transition text-sm sm:text-base"
                >
                  GitHub Repo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
