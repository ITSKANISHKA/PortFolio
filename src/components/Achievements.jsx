import React from 'react';
import { motion } from 'framer-motion';
import { Code, GraduationCap, Cpu, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  GraduationCap: GraduationCap,
  Cpu: Cpu,
  Trophy: Trophy
};

export default function Achievements() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <Trophy className="w-4 h-4 text-blue-600" />
            <span>Milestones & Credibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Proven <span className="gradient-text-blue">Problem Solving</span> & Track Record
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Grounded in strong algorithmic foundations, academic consistency, and practical software engineering.
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-white" />
                    </div>
                    <span className="text-2xl font-extrabold text-slate-900 font-outfit">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-outfit mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Competency</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
