import React from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, MessageSquare, Lightbulb, Zap, BookOpen, Palette, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Users: Users,
  Trophy: Trophy,
  MessageSquare: MessageSquare,
  Lightbulb: Lightbulb,
  Zap: Zap,
  BookOpen: BookOpen,
  Palette: Palette,
  HeartHandshake: HeartHandshake
};

export default function Interests() {
  const { nonTechSkills, interests } = portfolioData;

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Beyond Tech & Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Leadership, Soft Skills & <span className="gradient-text-blue">Personal Interests</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A look at my event management, leadership, design aesthetics, and personal passions outside pure programming.
          </p>
        </div>

        {/* Section 1: Non-Technical Competencies & Leadership */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 font-outfit mb-8 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Leadership & Core Competencies</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonTechSkills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon] || Lightbulb;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 font-outfit mb-1 group-hover:text-blue-600 transition-colors">
                      {skill.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Personal Interests & Hobbies Grid */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-outfit mb-8 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span>Personal Pursuits & Hobbies</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Zap;

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
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors shadow-xs">
                      <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-white" />
                    </div>

                    <h4 className="text-base font-bold text-slate-900 font-outfit mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Active Engagement</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
