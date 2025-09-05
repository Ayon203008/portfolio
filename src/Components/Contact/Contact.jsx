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
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
  title: "Email Send!",
  icon: "success",
  draggable: true
});
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="connect" className=" border-amber-500 border-4 bg-gradient-to-b mt-20 from-gray-900 via-gray-800 to-gray-900 py-20 px-6 lg:px-32 rounded-lg">
      <motion.div
  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 1.8 }}
  viewport={{ once: true }}

>
<h1
  className="text-7xl font-black tracking-tight text-center mb-20 mt-10"
  style={{
    background: "linear-gradient(90deg, #0ea5e9, #f43f5e, #fbbf24, #22c55e, #0ea5e9)",
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
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}
  </style>
</motion.div>

      <div className="flex flex-col lg:flex-row gap-12 justify-between text-white">
        
        {/* Left info section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 "
        >
          <h1 className="text-6xl mb-6 font-semibold">Let's talk</h1>
          <p className="text-lg leading-relaxed mb-8">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.
            <br /> You can contact anytime.
          </p>
          <div className="flex gap-5 items-center text-cyan-400 text-lg mb-5">
            <IoMdMail size={30} />
            <span className="font-semibold">abidayon2025@gmail.com</span>
          </div>
          <div className="flex gap-5 items-center text-green-400 text-lg mb-5">
            <IoLogoWhatsapp size={30} />
            <span className="font-semibold">+8801782431428</span>
          </div>
          <div className="flex gap-5 items-center text-orange-400 text-lg">
            <FaLocationDot size={30} />
            <span className="font-semibold">Rangpur, Bangladesh</span>
          </div>
        </motion.div>

        {/* Right form section */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-gray-800 rounded-xl p-10 shadow-lg"
        >
          <form onSubmit={handleForm} className="flex flex-col gap-6">
            <label className="text-white font-medium text-lg" htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />

            <label className="text-white font-medium text-lg" htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              className="bg-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            />

            <label className="text-white font-medium text-lg" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              name="message"
              placeholder="Enter your message"
              className="bg-gray-700 text-white rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md py-3 transition"
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
