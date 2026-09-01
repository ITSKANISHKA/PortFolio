import React from 'react';
import BackgroundAICanvas from './components/BackgroundAICanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAFAFC] text-slate-800 antialiased overflow-x-hidden selection:bg-pink-200 selection:text-pink-900">
      {/* Interactive Neural Background Canvas */}
      <BackgroundAICanvas />

      {/* Glassmorphism Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
