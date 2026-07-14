import React from "react";

const projects = [
  {
    title: "Modern Landing Page",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
  },
  {
    title: "Modern Calculator",
    image: "https://images.pexels.com/photos/5915147/pexels-photo-5915147.jpeg",
  },
  {
    title: "Modern ToDo App",
    image: "https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg",
  },
  {
    title: "Student Management System",
    image: "/std-project1.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-500 ">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:-translate-y-2 transition duration-600"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <button className="mt-4 bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 hover:px-6 transition-all duration-500">
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
