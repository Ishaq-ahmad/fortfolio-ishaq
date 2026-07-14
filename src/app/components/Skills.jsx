import { div, section } from "framer-motion/client";
import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React.js",
  "Responsive Design",
  "Mongo DB",
  "Express js",
  "Node Js",
  "JWT Authentication",
  "Mongoose",
  "Session Authentication",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-slate-900 text-white font-bold text-center py-10 px-6 rounded-2xl hover:scale-105 transition-all"
            >
              <h3 className="text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
