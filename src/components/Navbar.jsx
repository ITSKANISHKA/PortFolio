import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Beyond Tech', href: '#interests' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold text-lg flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5 font-outfit">
                {portfolioData.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-semibold">
                AI / ML • Backend
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 shadow-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-blue-50/70'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Kanishka_Resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/80 transition-all shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm hover:shadow-blue-600/20 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Let's Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] p-4 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl transition-all">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold shadow-sm'
                      : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="/Kanishka_Resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
