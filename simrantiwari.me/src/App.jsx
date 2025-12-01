import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
      document.body.style.background = "#111827"; 
    } else {
      html.classList.remove("dark");
      document.body.style.background =
        "linear-gradient(135deg, #f4f0ff 0%, #c0e6ea 100%)";
    }
  }, [dark]);

  return (
    <div className="min-h-screen transition-colors duration-500 text-gray-900 dark:text-gray-100">
      <Navbar dark={dark} setDark={setDark} />

      <main className="max-w-5xl mx-auto px-6 md:px-0 pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
