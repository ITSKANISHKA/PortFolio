import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, secondaryEmail, linkedin, github } = portfolioData.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-50/70">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3 border border-blue-200">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-outfit mb-4">
            Let's Build Something <span className="gradient-text-blue">Intelligent.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind, an opportunity to discuss, or just want to connect? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 font-outfit mb-4">
                Direct Contact Channels
              </h3>
              <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                Whether you're looking for an SDE intern/full-time engineer, an AI/ML developer, or technical collaboration, I'm always open to discussing tech and product opportunities.
              </p>

              <div className="space-y-4 mb-8">
                {/* Primary Email Item */}
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200/80 text-slate-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Primary Email</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{email}</span>
                  </div>
                </a>

                {/* Secondary Email Item */}
                <a
                  href={`mailto:${secondaryEmail}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50/70 hover:bg-sky-100/80 border border-sky-200/80 text-slate-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Secondary Email</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">{secondaryEmail}</span>
                  </div>
                </a>

                {/* LinkedIn Item */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 text-slate-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Connect on LinkedIn</span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">GitHub Repository</span>
                    <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Follow on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Response time: Usually within 24 hours</span>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs"
          >
            <h3 className="text-xl font-bold text-slate-900 font-outfit mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Message Sent!</h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out, Kanishka will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl text-slate-800 text-sm border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl text-slate-800 text-sm border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, role, or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl text-slate-800 text-sm border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-md active:scale-[0.99] disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
