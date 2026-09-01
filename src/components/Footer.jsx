import React from 'react';
import { ArrowUp, Github, Linkedin, Code, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-extrabold text-xl tracking-tight text-white font-outfit">
              {portfolioData.personal.name}
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            {portfolioData.personal.title}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white transition-all border border-slate-800"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#0A66C2] text-slate-300 hover:text-white transition-all border border-slate-800"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-[#FFA116] text-slate-300 hover:text-white transition-all border border-slate-800"
            title="LeetCode"
          >
            <Code className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white transition-all border border-slate-800"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-300 transition-all border border-slate-800"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Kanishka. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed & Engineered with React, Vite & Tailwind CSS</p>
      </div>
    </footer>
  );
}
