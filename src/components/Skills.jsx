import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, BrainCircuit, BarChart3, Cloud, Sparkles, Search } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categoryIcons = {
  "Languages": Code2,
  "Backend": Server,
  "Frontend": Layout,
  "Databases": Database,
  "AI / ML & GenAI": BrainCircuit,
  "Data & Big Data": BarChart3,
  "Cloud & DevOps": Cloud
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", ...portfolioData.skills.map(s => s.category)];

  const filteredSkills = portfolioData.skills.filter(catGroup => {
    if (selectedCategory !== "All" && catGroup.category !== selectedCategory) {
      return false;
    }
    if (searchTerm.trim() !== "") {
      const matchCategory = catGroup.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchItems = catGroup.items.some(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCategory || matchItems;
    }
    return true;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/70">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Skills & <span className="gradient-text-blue">Technology Stack</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A comprehensive overview of my technical capabilities spanning backend systems, AI/ML models, and data pipelines.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center md:justify-start gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. RAG, FastAPI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl text-xs sm:text-sm text-slate-800 border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((group, index) => {
            const IconComponent = categoryIcons[group.category] || Code2;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-outfit">
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono text-blue-600 font-medium">
                        {group.items.length} Technologies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                  {group.items.map((skill) => {
                    const isHighlighted = searchTerm !== "" && skill.toLowerCase().includes(searchTerm.toLowerCase());

                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                          isHighlighted
                            ? 'bg-blue-600 text-white font-bold ring-2 ring-blue-300 scale-105'
                            : 'bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200/80'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
