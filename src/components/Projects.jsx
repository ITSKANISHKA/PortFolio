import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Cpu, Layers, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Architected & Built <span className="gradient-text-blue">Products</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Real, technically complex backend systems, autonomous AI agents, and RAG knowledge workspaces engineered with scalability in mind.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-12">
          {portfolioData.projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-glass hover:border-blue-300 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle Blue/Slate Gradient Glow */}
                <div className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-50 group-hover:opacity-90 transition-opacity pointer-events-none`}></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Main Info Side */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Badge & Title */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-slate-900 text-white shadow-xs">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono font-medium text-blue-600">
                          {project.subtitle}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-outfit mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-slate-700 text-base leading-relaxed mb-6 font-normal">
                        {project.shortDescription}
                      </p>

                      {/* Problem Solved Box */}
                      <div className="bg-blue-50/70 rounded-2xl p-4 border border-blue-100 mb-6">
                        <div className="flex items-center gap-2 mb-1.5 text-xs font-bold text-blue-800 uppercase tracking-wider">
                          <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>Problem Solved</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-normal">
                          {project.problemSolved}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div>
                      <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Technologies & Tools</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-900 hover:text-white border border-slate-200 transition-all shadow-xs"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Repository</span>
                        </a>

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Highlights Checklist Side */}
                  <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 font-outfit uppercase tracking-wider mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span>Key Technical Highlights</span>
                      </h4>

                      <ul className="space-y-3">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
                      <span>Production Ready</span>
                      <span className="flex items-center gap-1 text-blue-600 font-semibold">
                        <Sparkles className="w-3.5 h-3.5" />
                        Verified Architecture
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
