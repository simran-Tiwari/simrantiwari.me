import React from "react";
import { motion } from "framer-motion";

import shopverseImg from "../assets/shopverse.png";
import zoomeraImg from "../assets/zoomera.png";
import acceldedupImg from "../assets/acceldedup.png";
import devoasisImg from "../assets/devaosis.png";

export default function Projects({ dark }) {
  const projects = [
    {
      title: "ShopVerse",
      url: "https://shopverse-5595c.web.app",
      github: "https://github.com/simran-Tiwari/ShopVerse",
      tech: "React, Firebase",
      img: shopverseImg,
    },
    {
      title: "Zoomera",
      url: "https://zoomerafrontend.onrender.com",
      github: "https://github.com/simran-Tiwari/Zoomera",
      tech: "MERN Stack",
      img: zoomeraImg,
    },
    {
      title: "AccelDedup",
      url: "https://project-major-client.vercel.app/login",
      github: "https://github.com/simran-Tiwari/AccelDedup",
      tech: "React, Node.js, AWS",
      img: acceldedupImg,
    },
    {
      title: "Devoasis",
      url: "https://devaosis.vercel.app/",
      github: "https://github.com/simran-Tiwari/Devaosis",
      tech: "React + Firebase",
      img: devoasisImg,
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-6 md:px-12 ${
        dark ? "bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white" : ""
      }`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold mb-10 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((p, index) => (
          <motion.div
            key={p.title}
            className={`group block rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border ${
              dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Text */}
            <div className="p-5">
              <h3 className={`font-semibold text-xl ${dark ? "text-white" : "text-gray-900"}`}>
                {p.title}
              </h3>
              <p className={`text-sm mt-1 ${dark ? "text-gray-300" : "text-gray-600"}`}>
                {p.tech}
              </p>

              <div className="mt-4 flex gap-4 flex-wrap">
                {/* Visit Project Button */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-all"
                >
                  Visit Project
                </a>

                {/* GitHub Repo Button */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md font-medium hover:bg-gray-700 transition-all"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
