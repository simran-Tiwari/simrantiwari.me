import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 space-y-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold"
      >
        Contact
      </motion.h2>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-3 text-lg"
      >
        <p>
          Email:{" "}
          <a
            href="mailto:tiwarisimran967@gmail.com"
            className="text-primary font-medium hover:underline"
          >
            tiwarisimran967@gmail.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a
            href="tel:+918218612499"
            className="text-primary font-medium hover:underline"
          >
            +91 8218612499
          </a>
        </p>

        <div className="space-x-6 pt-2">
          <a
            href="https://github.com/simran-Tiwari"
            target="_blank"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/simran-tiwari-45b460300"
            target="_blank"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/tiwarisimran967"
            target="_blank"
            className="text-primary hover:underline"
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
          className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition"
          placeholder="Your Name"
        />

        <input
          className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition"
          type="email"
          placeholder="Your Email"
          required
        />

        <textarea
          className="w-full p-4 rounded-xl bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-primary outline-none transition"
          rows="4"
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
