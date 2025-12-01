import React from "react";

export default function Skills() {
  const skillSections = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: "Excellent" },
        { name: "CSS3 / Tailwind", level: "Excellent" },
        { name: "JavaScript", level: "Advanced" },
        { name: "React.js", level: "Advanced" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Auth & Middleware", level: "Intermediate" },
        { name: "Firebase", level: "Beginner" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "Firestore", level: "Beginner" },
        { name: "Database Modelling", level: "Intermediate" },
        { name: "CRUD Operations", level: "Excellent" },
      ],
    },
    {
      title: "Cloud & Tools",
      skills: [
        { name: "AWS", level: "Intermediate" },
        { name: "Git / GitHub", level: "Excellent" },
        { name: "VS Code", level: "Excellent" },
      ],
    },
    {
      title: "Learning & Growth",
      skills: [
        { name: "System Design", level: "Intermediate" },
        { name: "Clean Code Patterns", level: "Intermediate" },
        { name: "Debugging Skills", level: "Advanced" },
        { name: "Deep Logic Thinking", level: "Intermediate" },
      ],
    },
  ];

  const levelColors = {
    Beginner: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
    Intermediate: "bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
    Advanced: "bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200",
    Excellent: "bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200",
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12"
    >
      {/* Parent Card */}
      <div
        className="relative max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-10 shadow-xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #d1f0f0 100%)",
        }}
      >
        {/* Decorative Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-purple-200 rounded-full opacity-30 filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-16 w-60 h-60 bg-pink-200 rounded-full opacity-20 filter blur-2xl"></div>

        <h1 className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white relative z-10">
          Skills & Growth
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">
          Building modern, clean, and efficient applications while continuously improving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {skillSections.map((section) => (
            <div
              key={section.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:border-blue-400 border border-transparent transition-all duration-300 cursor-pointer relative"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${levelColors[skill.level]}`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
