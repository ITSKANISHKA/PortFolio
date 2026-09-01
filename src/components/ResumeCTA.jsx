import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowUpRight, Sparkles } from 'lucide-react';

export default function ResumeCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 bg-slate-900 text-white shadow-2xl border border-slate-800"
        >
          {/* Decorative Subtle Blue Glow */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-500/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Resume & Qualifications</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit mb-3">
                Want to know more about my work?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Get a comprehensive overview of my technical stack, engineering projects, coursework, and problem-solving achievements.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/Kanishka_Resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-bold text-slate-900 bg-white hover:bg-blue-50 transition-all shadow-lg hover:shadow-white/20 transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 text-blue-600" />
                <span>View & Print Resume</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
