"use client";

import React from "react";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <p className="text-blue-400 mb-4 text-lg">Frontend Web Developer</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-20">
            {`Hi, I 'am`} <span className="text-blue-500">Ishaq Ahmad</span>
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-8">
            I create modern, responsive and premium web applications using React
            and Tailwind CSS.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-gray-600 hover:border-blue-500 transition px-6 py-3 rounded-xl font-semibold"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center"
        >
          <div className="w-[320px] h-[320px] rounded-full bg-blue-500/20 blur-3xl absolute"></div>

          <img
            src="/ishaq.png"
            alt="developer"
            className="w-[350px] rounded-3xl border border-slate-700 shadow-2xl relative  hover:scale-105 duration-800"
          />
        </motion.div>
      </div>
    </section>
  );
}
