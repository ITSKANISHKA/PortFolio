import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BrainCircuit, Rocket, Target, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { roleFocus, university, cgpa, summary, highlights, targetRoles } = portfolioData.about;

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <BrainCircuit className="w-4 h-4 text-blue-600" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Building at the Intersection of <span className="gradient-text-blue">Backend Systems & AI</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineering intelligent, resilient applications with a relentless focus on clean architecture, performance, and real-world scalability.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-glass flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-outfit">{roleFocus}</h3>
                  <p className="text-sm font-medium text-blue-600">{university} • CGPA {cgpa}</p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-6 text-base">
                {summary}
              </p>

              <div className="space-y-3.5 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Roles Pill List */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Actively Seeking Roles In:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {targetRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Visual Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5 justify-between"
          >
            {/* Stat Card 1: CGPA */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-blue-300 transition-all">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-24 h-24 text-blue-600" />
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-extrabold text-slate-900 font-outfit">8.35</span>
                <span className="text-sm font-semibold text-slate-500">/ 10 CGPA</span>
              </div>
              <h4 className="text-base font-bold text-slate-800 font-outfit mb-1">Academic Consistency</h4>
              <p className="text-xs text-slate-600">B.Tech Computer Science (AIML & IoT) at GLA University.</p>
            </div>

            {/* Stat Card 2: RAG Focus */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-blue-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-800 font-outfit">RAG & GenAI Systems</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specializing in hierarchy-aware Retrieval-Augmented Generation, vector embeddings, persistent memory, and agentic workflows.
              </p>
            </div>

            {/* Stat Card 3: Backend Scale */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs relative overflow-hidden group hover:border-blue-300 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                  <Rocket className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-base font-bold text-slate-800 font-outfit">Production API Architecture</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designing RESTful microservices, asynchronous task handling (FastAPI, Express.js), JWT auth, and containerized Docker deployments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
