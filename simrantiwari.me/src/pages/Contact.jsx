
import React from "react";
import { motion } from "framer-motion";

export default function Contact({ dark }) {
  return (
    <section
      id="contact"
      className={`py-20 px-6 md:px-12 rounded-2xl overflow-hidden ${
        dark ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white" : ""
      }`}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-4xl font-bold mb-10 ${dark ? "text-white" : "text-gray-900"}`}
      >
        Contact
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-3 text-lg mb-12"
      >
        <p>
          Email:{" "}
          <a
            href="mailto:tiwarisimran967@gmail.com"
            className={`font-medium hover:underline ${dark ? "text-blue-400" : "text-primary"}`}
          >
            tiwarisimran967@gmail.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:+918218612499"
            className={`font-medium hover:underline ${dark ? "text-blue-400" : "text-primary"}`}
          >
            +91 8218612499
          </a>
        </p>

        <div className="space-x-6 pt-2">
          <a
            href="https://github.com/simran-Tiwari"
            target="_blank"
            className={`hover:underline ${dark ? "text-blue-400" : "text-primary"}`}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/simran-tiwari-45b460300"
            target="_blank"
            className={`hover:underline ${dark ? "text-blue-400" : "text-primary"}`}
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/tiwarisimran967"
            target="_blank"
            className={`hover:underline ${dark ? "text-blue-400" : "text-primary"}`}
          >
            LeetCode
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-5 max-w-xl"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message Sent (Demo)");
        }}
      >
        <input
          className={`w-full p-4 rounded-xl focus:ring-2 outline-none transition ${
            dark
              ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
              : "bg-gray-100 placeholder-gray-500 focus:ring-primary"
          }`}
          placeholder="Your Name"
        />

        <input
          type="email"
          className={`w-full p-4 rounded-xl focus:ring-2 outline-none transition ${
            dark
              ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
              : "bg-gray-100 placeholder-gray-500 focus:ring-primary"
          }`}
          placeholder="Your Email"
          required
        />

        <textarea
          rows="4"
          className={`w-full p-4 rounded-xl focus:ring-2 outline-none transition ${
            dark
              ? "bg-gray-800 text-white placeholder-gray-400 focus:ring-blue-500"
              : "bg-gray-100 placeholder-gray-500 focus:ring-primary"
          }`}
          placeholder="Message"
          required
        />

        <button
          type="submit"
          className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full text-center"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}