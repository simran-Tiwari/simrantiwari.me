import React from "react";
import { motion } from "framer-motion";
import simranImg from "../assets/simran.jpeg";

export default function Hero({ dark }) {
  const handleResumeDownload = () => {
    const resumeUrl = "/SimranTiwariResume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SimranTiwariResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative py-24 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden bg-transparent"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-lg"
      >
        <p className={`text-sm font-medium tracking-wide ${dark ? "text-white" : "text-gray-700"}`}>
          Hi, I’m
        </p>

        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold leading-snug">
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
            Simran Tiwari
          </span>
        </h1>

        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/90" : "text-gray-700"}`}>
          A <strong>Full Stack Developer</strong> passionate about building <strong>fast, scalable web apps</strong> and <strong>cloud solutions</strong>. I love turning ideas into clean, efficient code and creating smooth, user-friendly experiences. Always exploring new tech to make <strong>digital ideas real</strong>.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-medium transition-transform duration-300 transform hover:scale-105 shadow-md bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white hover:from-blue-600 hover:to-purple-700"
          >
            See My Work
          </a>
        </div>
      </motion.div>

      {/* RIGHT: Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex justify-center"
      >
        <div
          className={`relative w-104 md:w-[32rem] lg:w-[36rem] rounded-3xl p-10 md:p-12 flex flex-col items-center shadow-2xl transition-transform duration-300 transform hover:-translate-y-6
            ${dark
              ? "bg-gradient-to-b from-black via-gray-800 to-gray-700 shadow-[0_15px_50px_rgba(0,0,0,0.6)]"
              : "bg-gradient-to-b from-white via-gray-100 to-gray-200 shadow-[0_15px_50px_rgba(0,0,0,0.1)]"
            }`}
        >
          {/* IMAGE */}
          <div
            className={`w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-xl relative flex items-center justify-center
              ${dark ? "bg-gradient-to-b from-black via-gray-800 to-gray-700" : "bg-white"}`}
          >
            <img
              src={simranImg}
              alt="Simran Tiwari"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Label below Image */}
          <p className={`mt-4 text-center text-lg font-semibold ${dark ? "text-white" : "text-gray-900"}`}>
            Simran Tiwari <br /> Software Engineer
          </p>

          {/* Download Button */}
          <button
            onClick={handleResumeDownload}
            className="mt-4 px-6 py-3 rounded-xl font-medium transition-transform duration-300 transform hover:scale-105 shadow-md bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white hover:from-blue-600 hover:to-purple-700"
          >
            Download Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
