import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span>Academic Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit mb-3">
            Education & <span className="gradient-text-blue">Qualifications</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Consistent academic excellence in Computer Science and secondary education.
          </p>
        </div>

        {/* Education Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between relative ${
                edu.highlight
                  ? 'bg-white border-blue-300 shadow-md ring-2 ring-blue-500/10'
                  : 'bg-white border-slate-200 shadow-xs hover:border-blue-200'
              }`}
            >
              {edu.highlight && (
                <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900 text-white shadow-2xs">
                  Current
                </span>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.duration}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-outfit mb-1">
                  {edu.institution}
                </h3>

                <p className="text-xs font-medium text-slate-600 mb-4">
                  {edu.degree}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {edu.details}
                </p>
              </div>

              {/* Score Highlight */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Performance</span>
                <span className="text-sm font-extrabold text-slate-900 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200 text-blue-700">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
