import React from "react";

export default function Navbar({ dark, setDark }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-4 flex justify-between items-center 
        backdrop-blur-md transition-colors duration-500
        ${dark ? "bg-gray-900/90 text-white" : "bg-white/90 text-gray-900 shadow-md"}`}
    >
      {/* Left: Name + Subtitle */}
      <div className="flex flex-col">
        <a
          href="#hero"
          className="font-bold text-xl hover:text-purple-500 transition-colors duration-300"
        >
          Simran Tiwari
        </a>
        <span className={`text-sm ${dark ? "text-gray-300" : "text-gray-600"}`}>
          Software Development Engineer (SDE)
        </span>
      </div>

      {/* Right: Nav Links + Theme Toggle */}
      <nav className="flex items-center gap-6 text-sm">
        <NavLink href="#hero" label="Home" />
        <NavLink href="#about" label="About" />
        <NavLink href="#skills" label="Skills" />
        <NavLink href="#projects" label="Projects" />
        <NavLink href="#contact" label="Contact" />

        {/* Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
          className={`ml-4 px-3 py-2 rounded-md border transition-all duration-300
            ${dark ? "border-gray-600 hover:bg-gray-800" : "border-gray-300 hover:bg-gray-200"}`}
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="relative group hover:text-purple-500 transition-colors duration-300"
    >
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
}
