import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Terminal, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { name, title, tagline } = portfolioData.personal;

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Blue Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-400/20 via-sky-300/15 to-indigo-200/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-xs backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-slate-800">
            Final-Year CS • Open for SDE, Backend & AI/ML Roles
          </span>
        </motion.div>

        {/* Big Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6 font-outfit"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-blue-600">
            {name}
          </span>
        </motion.h1>

        {/* Specialized Roles Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <p className="text-lg sm:text-2xl font-bold tracking-wide text-blue-700 bg-blue-50/90 px-6 py-2.5 rounded-2xl border border-blue-200/80 inline-flex items-center gap-2 shadow-2xs">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span>{title}</span>
          </p>
        </motion.div>

        {/* Concise Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
        >
          {tagline}
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-base font-semibold text-white bg-slate-900 hover:bg-blue-600 shadow-md hover:shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-base font-semibold text-slate-800 bg-white hover:bg-blue-50 border border-slate-300 shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            <span>Contact Me</span>
            <Mail className="w-5 h-5 text-blue-600" />
          </a>
        </motion.div>

        {/* Quick Highlights Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 text-xs font-mono text-slate-600"
        >
          <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Terminal className="w-3.5 h-3.5 text-blue-600" />
            FastAPI / Node.js
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            RAG & GenAI Pipelines
          </span>
          <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <Code className="w-3.5 h-3.5 text-indigo-600" />
            LeetCode 1500+ | Codeforces 1100+
          </span>
        </motion.div>
      </div>
    </section>
  );
}
