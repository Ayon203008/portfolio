import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const handleForm = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8e8bcf86-3d38-4860-a4b0-09d2ed44ce13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Email Sent!",
        icon: "success",
        draggable: true,
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="connect"
      className="border-4 border-amber-500 bg-gradient-to-b mt-20 
                 from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-12 lg:px-24 
                 rounded-xl"
    >
      {/* Heading */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight 
                     text-center mb-12"
          style={{
            background:
              "linear-gradient(90deg, #0ea5e9, #f43f5e, #fbbf24, #22c55e, #0ea5e9)",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientShift 6s ease infinite",
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
        >
          Get in Touch
        </h1>

        <style>
          {`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </motion.div>

      {/* Info + Form */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between text-white">
        {/* Left info */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-5 font-semibold">
            Let's Talk
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            I'm currently available for new projects. Feel free to send me a message about anything you want me to work on.
            <br />
            You can contact anytime.
          </p>

          <div className="flex items-center gap-3 sm:gap-5 mb-4 text-cyan-400 text-sm sm:text-base md:text-lg">
            <IoMdMail size={25} className="sm:text-xl md:text-2xl" />
            <span className="font-semibold">abidayon2025@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 mb-4 text-green-400 text-sm sm:text-base md:text-lg">
            <IoLogoWhatsapp size={25} className="sm:text-xl md:text-2xl" />
            <span className="font-semibold">+8801782431428</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-orange-400 text-sm sm:text-base md:text-lg">
            <FaLocationDot size={25} className="sm:text-xl md:text-2xl" />
            <span className="font-semibold">Rangpur, Bangladesh</span>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-gray-800 rounded-xl p-6 sm:p-8 md:p-10 shadow-lg"
        >
          <form onSubmit={handleForm} className="flex flex-col gap-5">
            <label htmlFor="name" className="text-white font-medium text-sm sm:text-base md:text-lg">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="bg-gray-700 text-white rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <label htmlFor="email" className="text-white font-medium text-sm sm:text-base md:text-lg">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="bg-gray-700 text-white rounded-md p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />

            <label htmlFor="message" className="text-white font-medium text-sm sm:text-base md:text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              required
              className="bg-gray-700 text-white rounded-md p-2 sm:p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md py-2 sm:py-3 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
