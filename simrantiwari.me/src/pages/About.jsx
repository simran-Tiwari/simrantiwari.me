import React from "react";
import { motion } from "framer-motion";

export default function About({ dark }) {
  return (
    <section
      id="about"
      className={`relative py-20 px-6 md:px-12 max-w-5xl mx-auto rounded-2xl overflow-hidden ${
        dark
          ? "bg-gradient-to-b from-black via-gray-900 to-gray-800"
          : "bg-gradient-to-r from-[#f2f0ff] to-[#a8d8d8]"
      }`}
    >
      {/* Decorative Circles */}
      <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 opacity-30 filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-16 w-60 h-60 rounded-full bg-gradient-to-r from-pink-300 to-red-300 opacity-20 filter blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-3/4 w-32 h-32 rounded-full bg-gradient-to-r from-teal-300 to-blue-300 opacity-25 filter blur-2xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-yellow-200 to-orange-300 opacity-20 filter blur-xl animate-pulse-slow"></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl font-extrabold text-center md:text-left relative z-10 mb-6 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        About Me
      </motion.h2>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`relative z-10 p-8 rounded-3xl shadow-2xl text-lg leading-relaxed ${
          dark
            ? "bg-transparent text-white"
            : "bg-white text-gray-800"
        }`}
      >
        <p className="mb-4">
          I’m Simran, a Full-Stack Developer and Cloud Enthusiast. My journey began with curiosity — experimenting with small projects, debugging challenges, and exploring what’s possible with code.
        </p>
        <p className="mb-4">
          Over time, I’ve built applications with React, Node.js, MongoDB, and AWS, focusing on clean, scalable, and meaningful solutions.
        </p>
        <p className="mb-4">
          I love transforming ideas into real-world applications, learning from every project, and constantly improving my craft. Coding for me isn’t just about functionality; it’s about creating experiences that people can interact with and enjoy.
        </p>
        <p>
          Whether it’s a small tool, a cloud-powered app, or a full-stack project, I aim to deliver value and make an impact. If you’re looking for a developer who writes clean code, builds meaningful applications, and loves experimenting with technology — let’s connect and create something amazing together.
        </p>
      </motion.div>
    </section>
  );
}
