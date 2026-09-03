import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, MessageSquare, Lightbulb, Zap, Music, Play, Pause, Disc, Globe, Plane, Utensils, Compass, CheckCircle2, Volume2, BrainCircuit, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Users: Users,
  Trophy: Trophy,
  MessageSquare: MessageSquare,
  Lightbulb: Lightbulb,
  Zap: Zap,
  Globe: Globe,
  Plane: Plane,
  Utensils: Utensils,
  BrainCircuit: BrainCircuit,
  Cpu: Cpu
};

export default function Interests() {
  const { nonTechSkills, interests, exploring, music } = portfolioData;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio playback error:", err);
        setIsPlaying(true); // UI fallback simulation
      });
    }
  };

  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/80">
      {/* Real HTML5 Audio Player linked to official New West - Those Eyes MP3 */}
      <audio
        ref={audioRef}
        src={music.audioSrc}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <Compass className="w-4 h-4 text-blue-600" />
            <span>Beyond the Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Beyond the <span className="gradient-text-blue">Code</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            My music taste, hobbies, technical curiosities, and leadership experiences outside pure engineering.
          </p>
        </div>

        {/* Music Banner */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white shadow-lg shrink-0 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                <Disc className="w-8 h-8 text-blue-200" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 inline-flex items-center gap-1.5 mb-2">
                  <Music className="w-3.5 h-3.5 text-blue-400" />
                  {music.badge}
                </span>
                <h4 className="text-xl font-extrabold font-outfit text-white mb-1">
                  {music.title}
                </h4>
                <p className="text-xs font-medium text-slate-400">
                  Artist: {music.artist}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={togglePlay}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md transform hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause Track</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Click to Play "Those Eyes"</span>
                  </>
                )}
              </button>

              <span className="text-xs font-mono text-slate-400 hidden sm:flex items-center gap-1.5">
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-blue-400 animate-bounce' : 'text-slate-500'}`} />
                {isPlaying ? 'Now Playing New West 🎵' : 'Audio Ready'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Section 1: CURRENTLY EXPLORING (Dual Cards: LLMs & Agents + Geopolitics) */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 font-outfit mb-8 flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            <span>Currently Exploring</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exploring.map((exp, idx) => {
              const IconComponent = iconMap[exp.icon] || BrainCircuit;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {exp.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-xs">
                        <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-white" />
                      </div>
                    </div>

                    <h4 className="text-xl font-extrabold text-slate-900 font-outfit mb-2 group-hover:text-blue-600 transition-colors">
                      {exp.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5 text-blue-600 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      Active Focus
                    </span>
                    <span>{exp.domain}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Hobbies & Personal Pursuits Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 font-outfit mb-8 flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span>Hobbies & Personal Interests</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 font-outfit mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Personal Favorite</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Non-Technical Leadership & Event Management */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 font-outfit mb-8 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Leadership & Organization Skills</span>
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
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors shadow-xs">
                    <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-white" />
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
      </div>
    </section>
  );
}
