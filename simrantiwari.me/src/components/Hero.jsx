import React from "react";
import { motion } from "framer-motion";
import simranImg from "../assets/simran.jpg"; // your profile image

export default function Hero() {
  const handleResumeDownload = () => {
    const resumeUrl = "/Simran_Tiwari_Resume.pdf";

    // Open in a new tab
    window.open(resumeUrl, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Simran_Tiwari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="py-20 flex flex-col md:flex-row items-center gap-14"
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">Hello, I'm</p>

        <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-snug">
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            Simran Tiwari
          </span>
        </h1>

        <p className="mt-4 max-w-xl text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Full-Stack Developer & Cloud Enthusiast.  
          I build fast, modern, and scalable applications using MERN Stack and AWS — 
          crafting clean interfaces, optimized backends, and cloud-powered solutions.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            className="px-5 py-3 rounded-xl border hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium"
            href="#projects"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* RIGHT: Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex-1 flex justify-center"
      >
        <div className="bg-gray-50 dark:bg-gray-800 shadow-xl rounded-3xl p-6 flex flex-col items-center border border-gray-200 dark:border-gray-700 transition-transform transform hover:-translate-y-2 hover:shadow-2xl max-w-xs w-full">
          
          {/* Profile Picture Container */}
          <div className="w-full h-64 md:h-72 rounded-3xl overflow-hidden border dark:border-gray-700 shadow-lg">
            <img
              src={simranImg}
              alt="Simran Tiwari"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Download Resume button */}
          <button
            onClick={handleResumeDownload}
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full"
          >
            Download Resume
          </button>
        </div>
      </motion.div>
    </section>
  );
}
