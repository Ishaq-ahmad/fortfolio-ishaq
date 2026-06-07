import { div, section } from "framer-motion/client";
import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "React.js",
  "Next.js",
  "Responsive Design",
  "Mongo DB",
  "Mongo DB",
  
];

export default function Skills() {
  return (
    // <section id="skills" className="bg-slate-950 text-white py-24 px-6">
    //   <div className="max-w-6xl mx-auto">

    //     <h2 className="text-4xl font-bold text-center mb-16 text-blue-500">
    //       Skills
    //     </h2>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    //       {skills.map((skill, index) => (
    //         <div
    //           key={index}
    //           className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:scale-105 transition"
    //         >
    //           <h3 className="text-xl font-semibold">
    //             {skill}
    //           </h3>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section id="skills"  className="bg-slate-950">
      <div className="py-17 flex flex-col items-center">
        <h2 className="font-bold text-4xl mb-15 text-blue-600">
          Skills
        </h2>
        
        <div className="grid grid-cols-2 w-100  sm:grid-cols-3 sm:w-full  md:grid-cols-4 md:w-full  gap-6">
            {skills.map((skill, idx)=>(
                 <div key={idx} className="bg-slate-900 py-10  px-6 text-white font-bold text-center rounded-2xl hover:scale-105 hover:border-b-1 transition-all">
                     <h3 className="text-[19px]">{skill}</h3>
                 </div>
             ))}
          </div>
    </div>
    </section>
  );
}